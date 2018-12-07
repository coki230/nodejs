var args = require("yargs").argv;
var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://iot.eclipse.org", {
	clientId : "mqtt_sample_sub_id_1",
	clean : false
});

client.on("connect", function(connack){
	if(connack.returnCode == 0) {
		client.subscribe("home/sample_topic", {qos : args.qos}, function(){
			client.on("packetsend", function(packet){
				console.log("packetsend");
				console.log(packet);
			});
			client.on("packetreceive", function(packet){
				console.log("packetreceive");
				console.log(packet);
			});
		});
	} else {
		consle.log("connected failed " + connack.returnCode);
	}
});