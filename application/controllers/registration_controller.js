application.controller('RegisterController', ['$location', '$scope', 'pouchDB',
    function($location, $scope, pouchDB)
    {
        
        $scope.register = function()
        {
            $location.path('/register');
        };
        
    var db = new PouchDB('http://192.168.1.155:5984/_utils/chat');
    var _users = ('_users');
    
    function register(text) {
      var register = {
        _id: new Date().toISOString(),
        name: '',
        email: '',
        password: '',
        completed: false
      };
      db.put(user, function callback(err, result) {
        if (!err) {
          console.log('Registration successfully!');
        }
      });
    }
}]);
