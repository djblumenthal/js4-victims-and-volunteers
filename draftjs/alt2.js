var totalVictims= +prompt("how many disaster victims are we dealing with?");;
var victimArr = [];
var volunteerArr = [];
for (i=0; i<totalVictims; i++){
	
	victimArr.push(
		{name: prompt("What's the name of victim "+(i+1)+"?"),
		phone: prompt("What's the phone number of victim "+(i+1)+"?"),
		street: prompt("What's the street of victim "+(i+1)+"?")
	})
}
var totalVolunteers= +prompt("how many volunteers do we have?");
var volunteerArr = [];
for (i=0; i<totalVolunteers; i++){
	volunteerArr.push( {
		name: prompt("What's the name of volunteer "+(i+1)+"?"),
		phone: prompt("What's the phone number of volunteer "+(i+1)+"?"),
		street: prompt("What's the street of volunteer "+(i+1)+"?")
	})
}


alert('Total victims: ' +totalVictims+ '\nTotal volunteers: '+totalVolunteers+ ': ' +victimArr.name+ '\n' +volunteerArr.name);


 ', phone number: ' +victimArr[i].phone+ ', street name: ' +victimArr[i].street;
}

alert('Total victims: ' +totalVictims+ '\n Victim '+(i+1)+ ': ' + victimArr[i].name);