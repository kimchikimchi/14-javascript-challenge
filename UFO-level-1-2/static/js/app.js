// from data.js
const tableData = data;


function filterData(row, field){

}



function handleForm() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // parse entered date filter string and other filter criteria
    const datetime = d3.select('#datetime').property('value');
    const city = d3.select('#city').property('value');
    const state = d3.select('#state').property('value');
    const country = d3.select('#country').property('value');

    // filter data based on date
    filteredTableData = tableData.filter(row => {
        // return row.datetime === datetime;

        // if any of fields are defined but doesn't match, reject the row
        if (datetime && row.datetime !== datetime) {
            return false;
        } else if (city && row.city !== city) {
            return false;
        } else if (state && row.state != state) {
            return false;
        } else if (country && row.country != country) {
            return false;
        }

        return true;
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


