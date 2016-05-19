
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

   //takes in
   ColumnToList: function(){
     //
   }

  };
};
