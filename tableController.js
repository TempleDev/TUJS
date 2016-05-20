
var Table = function () {

  return {
    //column to array takes a table id and number(column)
    //and returns an array of elements in that column
    ColumnToArray: function(tbl, colNum){
      tbl = TUJS.E(tbl);
      var list = [];
      var tabCount = tbl.rows.length;
      console.log(tbl);
      for(var x = 1; x < tabCount; x++){
        list[x - 1] = tbl.rows[x].cells[colNum].innerHTML;
      }
      return list;
   },

   //Armond, Kyler's, and Rob's gridview auto filter
   SearchGridview: function(strKey, strGV, column) {
       column++;
       //string of what is typed in
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
   }

 }; //end of return
}; //end of funtion
