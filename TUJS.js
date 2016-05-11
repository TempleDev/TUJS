(function(window) {

  'use strict';

  function define_TUJS() {

    var TUJS = {};

//quick reference for items in library
    function TU$(elem){
      return document.getElementById(elem);
    }
    function TU_(elem){
      return document.getElementsByClassName(elem);
    }
    ///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>beginning of library<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    // About
    TUJS.ver = function() {
      console.log(" Version: 0.1\n Authors: \n 'Kyler Love'\n Began: '11 March 2016'\n\n'Rob Zahorchak'\n Began: '11 May 2016'");
    };
    //greet people cause its nice
    TUJS.greet = function() {
      console.log("Welcome to Temple University IS&T JavaScript Library");
    };


    //Tracey's take on current events in the world
    TUJS.The_Tracey_Harrison_Manifesto = function() {
      var NothingMatters = "<div style='Font-size: 200px;'>NOTHING MATTERS<div>";
      var bod = document.querySelector('body');
      bod.innerHTML = NothingMatters;
    };


    TUJS.Calc = function(a, b, Operator) {
      /* jshint ignore:start */
      let A = TU$(a).value;
      let B = TU$(b).value;
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


    //turn the innerHTML of any element into a clock
    TUJS.AddClock = function(elem) {
      var tag = TU$(elem);
      var now = new Date();
      tag.innerHTML = now.toLocaleTimeString();
    };

    //bool if the id is in passed array
    //
    TUJS.Contains = function(elem, obj){
      var a = TU$(elem).innerHTML;
      var i = a.length;
      while (i--) {
        console.log(a[i]);
        if (a[i] === obj) {
          console.log('true');
          return true;
        }
      }
      console.log('false');
      return false;
    };

    //toggles an element as hidden or not based on what it currently is
    //NEEDS JQUERY
    TUJS.HideShow = function (elem){
      var tag = TU$(elem);
      $(tag).toggle();
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
        //IE 4 compatible... blow it up cause you should never use it
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
