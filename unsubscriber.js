var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://iot.eclipse.org", {
	clientId: "mqtt_my_id_4",
	clean: false
});

client.on("connect", function(connect){
	if(connect.returnCode == 0){
		client.unsubscribe("home/222/temperature", function(err) {
			if(err == undefined) {
				console.log("unsubscribe finished");
			} else {
				console.log("unsubscribe err" + err);
			}
			client.end();
		})
	} else {
		console.log("connect failed");
		
	}

})
