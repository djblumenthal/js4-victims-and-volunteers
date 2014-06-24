var totalVictims = prompt("how many disaster victims are we dealing with?");

// code for validating number of victims; WIP
// if((typeof totalVictims !=="number" ) || (totalVictims < 1)){
// 	totalVictims = prompt("quit screwing around, people's lives are at stake!  I need you to give me a number of how many victims we've gotta help here!");
// }

var victim = {}

var victimNameArr = [];
var victimPhoneArr = [];
var victimStreetArr = [];
var victimArr = [victimNameArr, victimPhoneArr, victimStreetArr];
for (var i=0; i<totalVictims; i++){
	victimNameArr.push(prompt("What's the name of victim "+(i+1)+"?"));
	victimPhoneArr.push(prompt("What's the phone number of victim "+(i+1)+"?"));
	victimStreetArr.push(prompt("What's the street of victim "+(i+1)+"?"));
}

var totalVolunteers = prompt("how many volunteers do we have?");
var volunteerNameArr = [];
var volunteerPhoneArr = [];
var volunteerStreetArr = [];
var volunteerArr = [volunteerNameArr, volunteerPhoneArr, volunteerStreetArr];
for (var i=0; i<totalVolunteers; i++){
	volunteerNameArr.push(prompt("What's the name of volunteer "+(i+1)+"?"));
	volunteerPhoneArr.push(prompt("What's the phone number of volunteer "+(i+1)+"?"));
	volunteerStreetArr.push(prompt("What's the street of volunteer "+(i+1)+"?"));

}alert("totalVictims: "+totalVictims+"\n totalVolunteers: "+totalVolunteers+ "\n " +victimArr+" " +volunteerArr);


	for (i=0; i<totalVictims; i++){
		for (j=0; j<totalVolunteers; j++){
		alert("victims: " +totalVictims+ " volunteers: " +totalVolunteers + volunteerNameArr);



			"Number of victims: "+totalVictims+"\n
			Victim" + (i+1) + ": " + victimNameArr[i] + "phone number: "+ victimPhoneArr[i] + "street name: " +victimStreetArr[i] + "\n
			Victim" + (i+1) + ": " + victimNameArr[i] + "phone number: "+ victimPhoneArr[i] + "street name: " +victimStreetArr[i] + "\n
			Victim" + (i+1) + ": " + victimNameArr[i] + "phone number: "+ victimPhoneArr[i] + "street name: " +victimStreetArr[i] + "\n

			{}
}

// console.log(victimNameArr);
// console.log(victimPhoneArr);
// console.log(victimStreetArr);
