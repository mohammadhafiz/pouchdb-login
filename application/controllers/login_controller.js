application.controller('LoginController', ['$location', '$scope', 'pouchDB',
    function($location, $scope, pouchDB)
    {
        
    var db = new PouchDB('http://192.168.1.155:5984/chat');
    
    function register(text) {
      var chat = {
        _id: new Date().toISOString(),
        _rev: password,
        completed: false
      };
      db.put(caht, function callback(err, result) {
        if (!err) {
          console.log('Registration successfully!');
        }
      });
    }
            
}]);
