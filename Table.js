
//client side javascript namespacing
var myGradesCalculate = (function () {
  // Keep this variable private inside this closure scope
  var myGrades = [93, 95, 88, 0, 55, 91];
  // Expose these functions via an interface while hiding
  // the implementation of the module within the function() block
  return {
    average: function(e) {
      var total = myGrades.reduce(function(accumulator, item) {
          console.log(e);
        return accumulator + item;
        }, 0);

      return'Your average grade is ' + total / myGrades.length + '.';
    },
    failing: function() {
      var failingGrades = myGrades.filter(function(item) {
          return item < 70;
        });

      return 'You failed ' + failingGrades.length + ' times.';
    }
  };
})();
