let myButton = document.getElementById ("input").addEventListener ("click",  function createTable() {

    let row = window.prompt("Insert number of rows");
    let column = window.prompt("Insert number of columns"); 
      
     for(var rows = 0; rows < parseInt(row); rows++) {
    
       var tableRows = document.getElementById('myTable').insertRow(rows);
    
       for(var columns = 0; columns < parseInt(column); columns++)   {
    
         var tableColumns = tableRows.insertCell(columns);
    
         tableColumns.innerHTML = "Row-" + rows + " Column-" + columns; 
        }
       }
    }
    )
    