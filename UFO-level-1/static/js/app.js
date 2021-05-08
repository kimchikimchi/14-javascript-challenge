// from data.js
const tableData = data;

function handleForm() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // parse entered date filter string
    const datetime = d3.select('#datetime').property('value');
    console.log(`datetime is ${datetime}`);   

    // filter data based on date
    filteredTableData = tableData.filter(row => {
        return row.datetime === datetime;
    });
    // console.log(filteredTableData);

    // Locate tbody tag and store into a variable
    const tbody = d3.select('tbody');

    // Append rows populated with filtered data
    filteredTableData.forEach(row => {
        // console.log(row);
        const tr = tbody.append('tr');
        // Assuming the returned value arrays are in the same order as stored.
        // We don't need key names to display
        Object.values(row).forEach((value) => {
            //console.log(value);
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


