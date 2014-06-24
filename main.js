//Victims Data
var totalVictims = prompt("how many disaster victims are we dealing with?");

var victimNameArr = [];
var victimPhoneArr = [];
var victimStreetArr = [];

for (i=0; i<totalVictims; i++){
	victimNameArr.push(prompt("What's the name of victim "+(i+1)+"?"));
	victimPhoneArr.push(prompt("What's the phone number of victim "+(i+1)+"?"));
	victimStreetArr.push(prompt("What's the street of victim "+(i+1)+"?"));
}
//Volunteer Data
var totalVolunteers = prompt("how many volunteers do we have at our displosal?");

var volunteerNameArr = [];
var volunteerPhoneArr = [];
var volunteerStreetArr = [];

for (i=0; i<totalVolunteers; i++){
	volunteerNameArr.push(prompt("What's the name of volunteer "+(i+1)+"?"));
	volunteerPhoneArr.push(prompt("What's the phone number of volunteer "+(i+1)+"?"));
	volunteerStreetArr.push(prompt("What's the street of volunteer "+(i+1)+"?"));
}


// alert with Victim total, Volunteer total, Victim names, and Volunteer names
alert('Total victims: ' +totalVictims+ ', Total volunteers: ' +totalVolunteers+ '\nVictims: '+victimNameArr.join(", ")+ '\nVolunteers: '+volunteerNameArr.join(", ") );