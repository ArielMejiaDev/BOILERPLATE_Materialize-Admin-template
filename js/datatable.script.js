$.fn.dataTable.ext.classes.sPageButton = 'btn waves-effect waves-light';
$.fn.dataTable.ext.classes.sPageButtonActive = 'btn teal darken-4 waves-effect waves-light';
$.fn.dataTable.ext.classes.sTable = 'dataTable';
$(document).ready( function () {
    $('#complex-table').DataTable({
        responsive: true,
        dom: 'lBfrtip',
        buttons: [
    { extend: 'copy', text:'copy <i class="material-icons right">file_copy</i>', className: 'btn' },
    { extend: 'excel', text:'Excel <i class="material-icons right">functions</i>', className: 'btn' },
    { extend: 'csv',text:'CSV <i class="material-icons right">insert_chart</i>', className: 'btn' },
    { extend: 'pdf',text:'PDF <i class="material-icons right">picture_as_pdf</i>', className: 'btn' },
    
]
    });
} );
//table for small devices
$(document).ready( function () {
    $('#simple-table').DataTable({
        responsive: true,
        dom: 'frtip',
    });
} );

//function to change table with id table to table-responsive in small devices
var table = document.getElementById('complex-table');

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.body.style.backgroundColor = "yellow";
        table.removeAttribute('id');
        table.setAttribute('id', 'complex-table');
    } else {
        table.removeAttribute('id');
        table.setAttribute('class', 'responsive-table');
        //table.setAttribute('id', 'simple-table');
        document.body.style.backgroundColor = "pink";
    }
}

var x = window.matchMedia("(min-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes