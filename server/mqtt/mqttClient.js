const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://3.230.133.173");

client.on("connect", () => {
    console.log("Conectado al broker MQTT");
});

const publishMessage = (topic, message) => {
    client.publish(topic, message);
};

module.exports = { publishMessage };
