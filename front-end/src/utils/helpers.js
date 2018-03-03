let helpers = (function () {

	function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

	function newStudent(attrs = {}) {
    const student = {
      id: guid(),
      firstName: attrs.firstName || 'First name',
      lastName: attrs.lastName || 'Last name',
      level: attrs.level || "Level",
      email: attrs.email || "Email",
      password: attrs.password || "Password"
      
    };
    return student;
}
}());