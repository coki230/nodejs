var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://iot.eclipse.org", {
	clientId: "mqtt_my_lwt_sub_id_7",
	clean: false
});

client.on("connect", function(connect){
	console.log(connect);
	if(connect.returnCode == 0){
		if(connect.sessionPresent == false) {
			client.subscribe("client/status", {qos: 0}, function(err, granted) {
				if(err == undefined) {
					console.log("topic is " + granted[0].topic);
					console.log("qos is " + granted[0].qos);
					console.log(granted);
					console.log("subscribe finished");
				} else {
					console.log("subscribe err" + err);
				}
			})
		}
	} else {
		console.log("connect failed");
		
	}

})


client.on("message", function(_, message, packet){
	var jsonPayload = JSON.parse(message.toString());
	console.log("message");
	console.log(jsonPayload);
})