var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://iot.eclipse.org", {
	clientId: "mqtt_my_lwt_pub_id_1",
	clean: false,
	will:{
		topic: "client/status",
		qos: 1,
		retain: true,
		payload: JSON.stringify({aaa: "will test"})
	}
});

client.on("connect", function(data){
	if(data.returnCode == 0){
		client.publish("client/status", JSON.stringify({current: 25}), {qos: 1, retain: 1}, function(err) {
			if(err == undefined) {
				console.log("publish finished");
			} else {
				console.log("publish err" + err);
			}
		})
	} else {
		console.log("connect failed");
		
	}

});