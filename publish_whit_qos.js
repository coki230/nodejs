var args = require("yargs").argv;
var mqtt = require("mqtt");

var client = mqtt.connect("mqtt://iot.eclipse.org",{
	clientId : "mqtt_my_test_1",
	clean : false
});

client.on("connect", function(connack) {
	if(connack.returnCode == 0) {
		client.on("packetsend", function(packet){
			console.log("packetsend");
			console.log(packet);
		});
		client.on("packetrecevie", function(packet){
			console.log("packetrecevie");
			console.log(packet);
		});
		client.publish("home/sample_topic", JSON.stringify({data : "test"}), {qos : args.qos})
	} else {
		console.log("connect failed" + connack.returnCode);	
	}
});