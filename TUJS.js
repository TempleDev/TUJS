
//add jquery to project
var JQscript = document.createElement('script');
//script.src = 'http://code.jquery.com/jquery-2.2.0.min.js';
JQscript.src = "Jquery-2.2.0.js";
JQscript.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(JQscript);

// add the tableController "Class" to the DOM so that the table features can be used
var Tblscript = document.createElement('script');
Tblscript.src = "tableController.js";
Tblscript.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(Tblscript);

(function(window) {

  'use strict';

  function define_TUJS() {

    var TUJS = {};

    ///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>beginning of library<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    //quick reference for items in the DOM
    TUJS.E = function(elem) {
      return document.getElementById(elem);
    };
    TUJS.C = function(elem) {
      return document.getElementsByClassName(elem);
    };
    TUJS.T = function(elem) {
      return document.getElementsByTagName(elem);
    };

    // About
    TUJS.ver = function() {
      console.log(" Version: 0.3.3\n Authors: \n\n 'Kyler Love'\n Began: '11 March 2016' \n\n'Rob Zahorchak'\n Began: '11 May 2016'");
    };

    //greet people cause its nice
    TUJS.greet = function() {
      console.log("Welcome to Temple University IS&T JavaScript Library");
    };


    //Tracey's take on current events in the world
    TUJS.The_Tracey_Harrison_Manifesto = function() {
      var NothingMatters = "<div style='Font-size: 60px;'> NOTHING MATTERS! <div>";
      var bod = document.querySelectorAll('a, div');

      setInterval(function() {
        for (var variable in bod) {
          console.log(bod);
          var doc = bod[variable];
          doc.innerHTML += NothingMatters;
        }
      }, 3000);
    };

    //the calc function takes in 3 or 4 arguments and will perform the
    //passed in function
    TUJS.Calc = function(a, b, Operator, OutputElem) {

      //repurpose OutputElem into the object
      OutputElem = TUJS.E(OutputElem);

      var A = parseFloat(TUJS.E(a).value);
      var B = parseFloat(TUJS.E(b).value);

      var C = 0;
      switch (Operator) {
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
      if (OutputElem === null) {
        console.log(C);
        return C;
      } else {
        OutputElem.value = C;
        OutputElem.innerHTML = C;
      }
    };

    //turn the innerHTML of any element into a clock
    TUJS.createClock = function(elem) {
      elem = (TUJS.E(elem) === null) ? elem : TUJS.E(elem);
      setInterval(function(){elem.innerHTML = new Date().toLocaleTimeString();}, 500);
    };

    //bool if the obj is found inside the Element(elem) is in passed array
    TUJS.Contains = function(elem, obj) {
      elem = (TUJS.E(elem) === null) ? elem : TUJS.E(elem);
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

    //will return an array of the window size of the screen you are on
    TUJS.getWindowSize = function() {
      var myWidth = 0,
      myHeight = 0;

      if (typeof(window.innerWidth) == 'number') {
        //everything outside of IE
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
      } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        //IE 6+ in 'standards compliant mode'... whatever that means
        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;
      } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        //IE 4 compatible... blow it up cause you should never use it
        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
      }
      return [myWidth, myHeight];
    };


    //returns the difference of two dates (in Days) as inputs
    //can pass in dates as an input field or as an input field ID
    TUJS.DateDifference = function(date1, date2, otpt) {
      date1 = (TUJS.E(date1) === null) ? date1.value : TUJS.E(date1).value;
      date2 = (TUJS.E(date2) === null) ? date2.value : TUJS.E(date2).value;
      otpt = (TUJS.E(otpt) === null) ? otpt : TUJS.E(otpt);

      date1 = Date.parse(date1);
      date2 = Date.parse(date2);
      var timeDiff = Math.abs(date2 - date1);
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      if(otpt === undefined){
        console.log(diffDays);
        return diffDays;
      }else{
        otpt.innerHTML = diffDays;
      }
    };

    //object call to build a table object form
    //the tableController js page
    TUJS.tableController = function() {
      var tbl = new Table();
      return tbl;
    };

    //Rename all elements of a class by adding numbers to the element name
    TUJS.AddNumbers = function(classId) {
      $.each($(classId), function(index, id) {
        console.log("inside the each");
        console.log("index: " + index + " id: " + id);
        console.log("attempting to append new index");
        $(this).attr('id', id + index);
      });
    };

    //Close Window on a button click

    TUJS.CloseWindow = function () {
      window.close();
    };

    //Sesson Time out.  To be used on pages that require users to
    //log out for security reasons

    TUJS.SessionTimeOut = function (wait, redirect) {
      var idleTimer = null;
      var idleState = false;
      var idleWait = wait;
      var destination = redirect;
      $(document).ready(function () {
        $('*').bind('mousemove keydown scroll', function () {
          clearTimeout(idleTimer);
          if (idleState === true) {
            console.log("away");
          }
          idleState = false;
          idleTimer = setTimeout(function () {
            console.log("away time");
            // Idle Event
            idleState = true;
            window.location = destination;
          }, idleWait);
        });
      });
      $("body").trigger("mousemove");
    };

    ///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>End of library<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    //call things on load
    return TUJS;
  }

  if (typeof(TUJS) === 'undefined') {

    window.TUJS = define_TUJS();
  }

})(window);
