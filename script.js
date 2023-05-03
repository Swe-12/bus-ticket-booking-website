function bookTickets() {
	var from = document.getElementById("from").value;
	var to = document.getElementById("to").value;
	var date = document.getElementById("date").value;
	var seats = document.getElementById("seats").value;

if (from == "" || to == "" || date == "" || seats == "") {
	alert("Please fill in all fields.");
    return;
	}

	// Perform booking logic here...
}
