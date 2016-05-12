(function(window) {

  'use strict';

  //add jquery to project
  var script = document.createElement('script');
  //script.src = 'http://code.jquery.com/jquery-2.2.0.min.js';
  script.src = "Jquery-2.2.0.js";
  script.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(script);

  function define_TUJS() {

    var TUJS = {};

  ///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>beginning of library<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    //quick reference for items in the DOM
    TUJS.E = function(elem){
      return document.getElementById(elem);
    };
    TUJS.C = function(elem){
      return document.getElementsByClassName(elem);
    };
    TUJS.T = function(elem){
      return document.getElementsByTagName(elem);
    };

    // About
    TUJS.ver = function() {
      console.log(" Version: 0.1\n Authors: \n 'Kyler Love'\n Began: '11 March 2016' \n\n'Rob Zahorchak'\n Began: '11 May 2016'");
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

    TUJS.Calc = function(a, b, Operator, OutputElem) {
      console.log(typeof(OutputElem));
      //repurpose OutputElem into the object
      OutputElem = TUJS.E(OutputElem);
      var A = TUJS.E(a).value;
      var B = TUJS.E(b).value;
      var C;
      switch (Operator){
        case "+":
        C = A + B;
        break;
        case "-":
        C = A - B;
        break;
        case "*":
        C = A * B;
        break;
        case "/":
        C = A / B;
        break;
        case "%":
        C = A % B;
        break;
      }
      OutputElem.innerHTML = C;
      return C;
    };

    //turn the innerHTML of any element into a clock
    TUJS.AddClock = function(elem) {
      var tag = TUJS.E(elem);
      var now = new Date();
      tag.innerHTML = now.toLocaleTimeString();
    };

    //bool if the id is in passed array
    //
    TUJS.Contains = function(elem, obj){
      var a = TUJS.E(elem).innerHTML;
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
      var tag = TUJS.E(elem);
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
