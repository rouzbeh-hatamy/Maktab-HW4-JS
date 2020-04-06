//convert right now
var aestTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
aestTime = new Date(aestTime);
console.log('AEST time: '+aestTime.toLocaleString())

var asiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Tehran"});
asiaTime = new Date(asiaTime);
console.log('Tehran time: '+asiaTime.toLocaleString())

var usaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
usaTime = new Date(usaTime);
console.log('USA time: '+usaTime.toLocaleString())


//convert specific time


var parisTime = new Date('2020-08-01T12:22:41').toLocaleString("en-US", {timeZone: "Europe/Paris"});
parisTime = new Date(parisTime);
console.log('Paris time: '+parisTime.toLocaleString())