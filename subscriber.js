var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://iot.eclipse.org", {
	clientId: "mqtt_my_id_1",
	clean: false
});

client.on("connect", function(connect){
	if(connect.returnCode == 0){
		client.subscribe("home/222/temperature", {qos: 1}, function(err, granted) {
			if(err == undefined) {
				console.log("topic is " + granted[0].topic);
				console.log("qos is " + granted[0].qos);
				console.log("granted[0] is " + granted[0]);
				console.log("publish finished");
				client.end();
			} else {
				console.log("publish err" + err);
			}
		})
	} else {
		console.log("connect failed");
		
	}

})


client.on("message", function(_, message, _){
	var jsonPayLaod = JSON.parse(message.toString());
	console.log("the message is " + message);
})