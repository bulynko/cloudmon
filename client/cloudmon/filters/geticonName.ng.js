
angular.module("cloudmon").filter('geticonName', function () {
  return function (iconID) {
  	 console.log( iconID)  ;
  	 
    if (!iconID)
      return "img/login-page-logo.png";
      
    if ( iconID == 1 )
      return "img/ok.png";
    //    return getlogo[0];
    else if ( iconID == 2)
      return "img/work.png";
          else if ( iconID == 3)
      return "img/login-page-logo.png";
    else
      return "img/login-page-logo.png";
  }
});
