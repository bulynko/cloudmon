Clouds = new Mongo.Collection("clouds");
CloudServices = new Mongo.Collection("services");


Clouds.allow({
  insert: function (arg1) {
    return true;
  },

  update: function (arg1) {
    return true;
  },

  remove: function (userName) {
    return userName === 'ADMIN';
  }

});


