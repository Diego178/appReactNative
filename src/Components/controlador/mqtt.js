const mqtt = require('mqtt');

const MQTTSubscriber = () => {
  const client = mqtt.connect('test.mosquitto.org','1883'); // Reemplaza con la dirección y el puerto de tu broker MQTT

  client.on('connect', () => {
    console.log('Conectado al broker MQTT');
    client.subscribe('test/esp32/hilox'); // Reemplaza con el tema al que deseas suscribirte
  });

  client.on('message', (topic, message) => {
    console.log('Mensaje recibido:', message.toString());
    // Aquí puedes realizar cualquier acción adicional con el mensaje recibido
  });
};

export default MQTTSubscriber;