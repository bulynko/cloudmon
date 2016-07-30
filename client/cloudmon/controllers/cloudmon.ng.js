angular.module("cloudmon").controller("myteamCtrl", ['$scope', '$meteor', '$rootScope', '$state', '$location',
  function($scope, $meteor, $rootScope, $state, $location){

$scope.sort = { checkpointid: -1 };


//    $scope.= $meteor.collection(Tasks).subscribe('tasks');

    //$scope.gclouds=$meteor.collection(Clouds).subscribe('clouds');
    //$scope.gcloudServices=$meteor.collection(CloudServices).subscribe('cloudservices');

$scope.gclouds = $meteor.collection(function() {
  return Clouds.find({}, {
    sort : $scope.getReactively('sort')
  });
});

$meteor.autorun($scope, function() {

  $meteor.subscribe('clouds', {
    sort: $scope.getReactively('sort')
  });

});

//------------------------

$scope.gcloudServices = $meteor.collection(function() {
  return CloudServices.find({}, {
    sort : $scope.getReactively('sort')
  });
});

$meteor.autorun($scope, function() {

  $meteor.subscribe('cloudservices', {
    sort: $scope.getReactively('sort')
  });

});
         
         
         
    $scope.tasks  = $meteor.collection(function() {
    //  return Meetings.find({uid : $scope.currentUser._id }, { sort : 0});
     return Clouds.find({ msgtarget : 'PUBLIC'  });
    });   

   $meteor.session('projectDaysSession').bind($scope, 'mycounterD');
   $meteor.session('projectHrsSession').bind($scope, 'mycounterH');
   $meteor.session('projectMinsSession').bind($scope, 'mycounterM');
   $meteor.session('projectSecsSession').bind($scope, 'mycounterS');

    //projectTimecounter= moment(new Date());;
    projectTimecounter= moment('2016-01-08');
    Meteor.setInterval(Meteor.myFunctions.mytimer, 1000 );

    //$scope.myteam = $meteor.collection(MyTeam).subscribe('myteam');
    //$scope.teams = $meteor.collection(Teams).subscribe('teams');

    $scope.theproject = 'STATUS';
   // $scope.projectMgmt="STATUS";

    $rootScope.loginFlag =1; 

    
 //  $scope.t1={ name  : 'Equipment order' , status : '100%'  };
 //  $scope.t2={ name  : 'Cloud Design' , status : '10%'  };
 // t3={ name  : 'Instillation and Configuration' , gameType : '0%'  };
 
   $scope.l1={ name  : 'Controller-1 Up' , code : 'E011' , dt : '05-01-2016 10:23' ,logo: "img/work.png" , c1: "rgba(243, 19, 19, 0.7)" };
   $scope.l2={ name  : 'Controller-2 Up' , code : 'I001' , dt : '05-01-2016 10:23' ,logo: "img/ok.png" , c1: "rgba(89, 199, 16, 0.7)" };    
   $scope.l3={ name  : 'Neutron-1 Up' ,    code : 'I001', dt : '05-01-2016 10:23' , logo: "img/ok.png" , c1: "rgba(89, 199, 16, 0.7)" };    
   $scope.l4={ name  : 'Controller-2 DOWN' , code : 'E002' , dt : '05-01-2016 10:23' ,logo: "img/work.png" , c1: "rgba(243, 19, 19, 0.7)" };  
   $scope.l5={ name  : 'Controller-1 Up' , code : 'I001' , dt : '05-01-2016 10:23' ,logo: "img/ok.png" , c1: "rgba(89, 199, 16, 0.7)" };
   $scope.l6={ name  : 'Compute-1 Up' , code : 'I001' , dt : '05-01-2016 10:23' ,logo: "img/ok.png" , c1: "rgba(89, 199, 16, 0.7)" };
   $scope.l7={ name  : 'Controller-3 Up' , code : 'I001' , dt : '05-01-2016 10:23' ,logo: "img/ok.png" , c1: "rgba(89, 199, 16, 0.7)" };

   var getlogo =  [ 'img/ok.png' ,  'img/work.png' ,   'img/login-page-logo.png'  ];

 /*   
   var aa = new Array(3);

   appIcons= new Mongo.Collection(null);
   var iconRef=  [ {status: 0 , logo: 'img/ok.png'} , {status: 1 ,logo: 'img/work.png' },  {status: 2 ,logo: 'img/login-page-logo.png' } ];
   $scope.iconeOK=0;
   $scope.iconeWORK=1;
   $scope.iconeERR=2;
  for (i=0 ; i<3 ; i ++ )
  {
    appIcons.insert(iconRef[i]) ;
  }
  $scope.appicons = $meteor.collection(appIcons);
  */

//   $scope.m1={ name  : 'Cloud Lab Planning' , when : '17-Dec 10am'  };
//   $scope.m2={ name  : 'Cloud Network Workshop' , when : '28-Dec 10am'  };
   
//    $scope.p3= { phasename :'Project  Started' , info : '1-NOV-2015' ,logo: "img/ok.png" };
//    $scope.p2= { phasename :'Equipment Ordered' , info : '24-NOV-2015' ,logo: "img/ok.png" };
//    $scope.p1= { phasename :'Planning Phase ' , info : 'in progress' ,logo: "img/work.png" };
    
  //======================================================================

 $scope.memberLogin = function(myuser) {

  var u = myuser.email;  
  var p = myuser.pass;  

 $scope.loginErrorMessage="Loging ..... try again ! " + u;
 
 // if ((u === "cloud@cloud.com" ) || (  u === "cloudadmin@gbmme.com" ))
  if ( u != "cloudteam@gbmme.com" ) 
  {
     
    $scope.loginErrorMessage="Loging as  " + u;
      
   //  Meteor.loginWithPassword('cloudteam@gbmme.com', 'cloud');
     Meteor.loginWithPassword(u, p);
     $state.go("cloudprivate");   
  }
  else{
    $scope.loginErrorMessage="Error memeber login ..... try again ! " + u;
  } 
   
  };

}]);

 
