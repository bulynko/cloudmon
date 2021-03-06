angular.module("cloudmon").filter('displayDateDD', function () {
  return function (d) {
    if (!d)
      return "dd-mm-yy";
    else
      return d.format('YYYY-MM-DD dddd');
  }
  
});

angular.module("cloudmon").filter('displayDateD', function () {
  return function (d) {
    if (!d)
      return "dd-mm-yy";
    else
      return d.format('YYYY-MM-DD');
  }
  
});

angular.module("cloudmon").filter('displayTime', function () {
  return function (d) {
    if (!d)
      return "dd-mm-yy";
    else
      return d.format('hh:mm:ss');
  }
  
});