Meteor.startup(function () {

  if (Clouds.find().count() === 0) {
    var g = [
      {'name': 'OpenStack - Redhat 1',      'description': 'Cloud Lab cloud One'},
      {'name': 'OpenStack - Redhat 2',   'description': 'Cloud Lab cloud Two'}
    ];
    for (var i = 0; i < g.length; i++)
      Clouds.insert({name: g[i].name, description: g[i].description});
  }
  
  //  if (Meteor.users.find().count() === 0) {
  //   Accounts.createUser({ email: "cloud" , password: "Cloud"  } );  	
  
   //Meteor.call('createUser', { email: 'cloud' , password: 'cloud'  } );
  
   // Meteor.call('createUser', {username: "cloud", password: "cloud"});
  
  //  Meteor.users.insert({username: 'cloud', emails: ['cloudteam@dummy.com'], name: 'cloud', 
  //  services:     {password: {srp: Meteor._srp.generateVerifier('cloud')}}}); 
 
 // }
    
});
