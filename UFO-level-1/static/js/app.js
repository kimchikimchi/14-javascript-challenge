// from data.js
const tableData = data;

function handleForm() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // parse entered date filter string
    const datetime = d3.select('#datetime').property('value');


    // filter data based on date
    filteredTableData = tableData.filter(row => {
        return row.datetime === datetime;
    });


    // Locate tbody tag and store into a variable
    const tbody = d3.select('tbody');
    /*
      Clear the existing table first or we'll keep appending data every time
      form is submitted again.
      See https://stackoverflow.com/questions/14422198/how-do-i-remove-all-children-elements-from-a-node-and-then-apply-them-again-with
    */
    tbody.selectAll('tr').remove();

    // Append rows populated with filtered data
    filteredTableData.forEach(row => {
        const tr = tbody.append('tr');
        // Assuming the returned value arrays are in the same order as stored.
        // We don't need key names to display
        Object.values(row).forEach((value) => {
            tr.append('td').text(value);
        });
    });
}

// Locate 'filter table' button and form.
const button = d3.select('#filter-btn');
const form = d3.select('form');

// Add event handler. 
button.on('click', handleForm);
form.on('submit', handleForm);


