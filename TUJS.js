(function(window) {

  'use strict';

  function define_TUJS() {

    var TUJS = {};

    ///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>beginning of library<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    // About
    TUJS.ver = function() {
      console.log(" Version: 0.1\n Author:  'Kyler Love'\n Began: '11 March 2016'");
      console.log(" Version: 0.1\n Author:  'Rob Zahorchak'\n Updated: '11 May 2016'");
    };
    //greet people cause its nice
    TUJS.greet = function() {
      console.log("Welcome to Temple University IS&T JavaScript Library");
    };

    //adds values.  pass in the 'id' of the two inputs
    TUJS.add = function(a, b) {
  /* jshint ignore:start */
      let A = document.getElementById(a).value;
      let B = document.getElementById(b).value;
      /* jshint ignore:end */
      console.log(parseInt(A) + parseInt(B));
      return A + B;
    };

    //subtracts values.  pass in the 'id' of the two inputs
    TUJS.subtract = function(a, b) {
      /* jshint ignore:start */
      let A = document.getElementById(a).value;
      let B = document.getElementById(b).value;
      /* jshint ignore:end */
      console.log(parseInt(A) - parseInt(B));
      return A - B;
    };

    TUJS.Calc = function(a, b, Operator) {
      /* jshint ignore:start */
      let A = document.getElementById(a).value;
      let B = document.getElementById(b).value;
        /* jshint ignore:end */
      var C;

      if(Operator === "+"){
        C = A + B;
      }
      if(Operator === "-"){
        C = A - B;
      }
      if(Operator === "*"){
        C = A * B;
      }
      if(Operator === "/"){
        C = A / B;
      }
      if(Operator === "%"){
        C = A % B;
      }
       return C;
    };

    //Tracey's take on current events in the world
    TUJS.The_Tracey_Harrison_Manifesto = function() {
      var NothingMatters = "<div style='Font-size: 200px;'>NOTHING MATTERS<div>";
      var bod = document.querySelector('body');
      bod.innerHTML = NothingMatters;
    };

    //turn the innerHTML of any element into a clock
    TUJS.AddClock = function(elem) {
      var tag = document.getElementById(elem);
      var now = new Date();
      tag.innerHTML = now.toLocaleTimeString();
    };

    //I dont know what im doing for this one
    TUJS.QuickGuide = function (){

    };

//will return an array of the window size of the screen you are on
    TUJS.getWindowSize = function() {
    var myWidth = 0, myHeight = 0;

    if( typeof( window.innerWidth ) == 'number' ) {
        //everything outside of IE
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
        //IE 6+ in 'standards compliant mode'... whatever that means
        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
        //IE 4 compatible... blow it up
        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
    }
    return [ myWidth, myHeight ];
};


    ///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>End of library<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      //call things on load
    return TUJS;

  }

  if (typeof(TUJS) === 'undefined') {

    window.TUJS = define_TUJS();
  }

})(window);
