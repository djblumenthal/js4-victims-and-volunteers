function Victim (name, phone, street) {
	this.name = name;
	this.phone = phone;
	this.street = street;
}
var totalVictims= prompt("how many disaster victims are we dealing with?");;
var victimArr = [];
for (i=0; i<totalVictims; i++){
	victimArr[i] = {
		name: prompt("What's the name of victim "+(i+1)+"?"),
		phone: prompt("What's the phone number of victim "+(i+1)+"?"),
		street: prompt("What's the street number of victim "+(i+1)+"?")
	}
}console.log(victimArr);

var ""

"Number of Victims: " + totalVictims + 

var victim [c]"Victim "(i+1)": " + victimNameArr[i] + ", Phone: " + victimPhoneArr[i] + ", Street: " +victimStreetArr[i] 

"Number of Volunteers: " + totalVolunteers

"Volunteer "(i+1)": " + volunteerNameArr[i] + ", Phone: " + volunteerPhoneArr[i] + ", Street: " +volunteerStreetArr[i]