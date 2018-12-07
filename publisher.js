var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://iot.eclipse.org", {
	clientId: "mqtt_my_id_1",
	clean: false
});

client.on("connect", function(data){
	if(data.returnCode == 0){
		client.publish("home/222/temperature", JSON.stringify({current: 25}), {qos: 1}, function(err) {
			if(err == undefined) {
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