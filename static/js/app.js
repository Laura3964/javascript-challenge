// from data.js
var tableData = data;

//console.log(tableData);

// get table reference
tbody = d3.select("tbody");

//create a function that builds the table
function buildTable(data) {
    console.log(data);
    //clear out the table
    tbody.html("");

    //loop through each object/sighting
    data.forEach((tablerow) =>{
         //append table row
         var row = tbody.append('tr');
         //append table data
         Object.values(tablerow).forEach((value)=>{
         var cell = row.append('td');
            cell.text(value);
        }
        );
    } )

   };

//create a function to handle click


//attach an event listener to the button we created


//build the table when the page loads
buildTable(tableData);

