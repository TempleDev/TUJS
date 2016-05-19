(function(window) {

  'use strict';

  //add jquery to project
  var JQscript = document.createElement('script');
  //script.src = 'http://code.jquery.com/jquery-2.2.0.min.js';
  JQscript.src = "Jquery-2.2.0.js";
  JQscript.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(JQscript);


  var Tblscript = document.createElement('script');
  Tblscript.src = "tableController.js";
  Tblscript.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(Tblscript);


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
      console.log(" Version: 0.3.1\n Authors: \n 'Kyler Love'\n Began: '11 March 2016' \n\n'Rob Zahorchak'\n Began: '11 May 2016'");
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

    //the calc function takes in 3 or 4 arguments and will perform the
    //passed in function
    TUJS.Calc = function(a, b, Operator, OutputElem) {

      //repurpose OutputElem into the object
      OutputElem = TUJS.E(OutputElem);

      var A = parseFloat(TUJS.E(a).value);
      var B = parseFloat(TUJS.E(b).value);

      var C = 0;
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
      if(OutputElem === null){
        console.log(C);
        return C;

      }else{
        OutputElem.value = C;
        OutputElem.innerHTML = C;
      }

    };

    //turn the innerHTML of any element into a clock
    TUJS.AddClock = function(elem) {
      var tag = TUJS.E(elem);
      var now = new Date();
      tag.innerHTML = now.toLocaleTimeString();
    };

    //bool if the obj is found inside the Element(elem) is in passed array
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


    //returns the difference of two dates (in Days) as inputs
    TUJS.DateDifference = function(date1, date2, otpt){
      otpt = TUJS.E(otpt);
      date1 = TUJS.E(date1).value;
      date2 = TUJS.E(date2).value;

      date1 = Date.parse(date1);
      date2 = Date.parse(date2);
      var timeDiff = Math.abs(date2 - date1);
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      otpt.innerHTML = diffDays + " Days";
    };

    //object call to build a table object form
    //the tableController js page
    TUJS.tableController = function() {
      var tbl = new Table();
      return tbl;
    };


    //Armond, Kyler's, and Rob's gridview auto filter
    TUJS.Search_Gridview = function(strKey, strGV, column) {
        column++;
        //string of what is typed in
        //console.log("Before: "+strKey.value.toLowerCase());
        var strData = strKey.value.toLowerCase().split(" ");
        // console.log(strData);

        //raw data from table
        var tblData = document.getElementById(strGV);
        var table = [];
        var colInfo = [];
        var styleDisplay = "";
        // i is each row in the table.
        for (var i = 0; i < tblData.rows.length; i++) {

            //all info in row[i]
            var rowData = tblData.rows[i].innerHTML;

            //splits row and makes arrays ex instead of <td>a</td>....
            var rowInfo = rowData.split("<td>");
            for (var j = 1; j < rowInfo.length; j++) {
                table[i] = rowInfo;
            }
             styleDisplay = 'none';
        }
        for (var k = 1; k < table.length; k++) {
            colInfo[k] = table[k][column];
        }

      //  console.log(table);
        //runs through the string that user enters
        for (var s = 1; s < table.length; s++) {

          //  console.log(strData);
            var str = colInfo[s].toLowerCase();

            if (str.indexOf(strData) >= 0) {
              //  console.log("Found");
                styleDisplay = '';
            }
            else {
              //  console.log("Didnt find");
                styleDisplay = 'none';
            }
            tblData.rows[s].style.display = styleDisplay;
        }
    };

    ///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>End of library<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    //call things on load
    return TUJS;
  }

  if (typeof(TUJS) === 'undefined') {

    window.TUJS = define_TUJS();
  }

})(window);
