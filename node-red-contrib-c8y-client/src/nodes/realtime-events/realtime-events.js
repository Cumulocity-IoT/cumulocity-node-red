const c8yClientLib = require('@c8y/client');

module.exports = function(RED) {
    function RealtimeEventNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        const tenant = process.env.C8Y_TENANT;
        const baseUrl = process.env.C8Y_BASEURL;
        const user = process.env.C8Y_USER;
        const password = process.env.C8Y_PASSWORD;
        const auth = new c8yClientLib.BasicAuth({tenant, user, password});

        node.client = new c8yClientLib.Client(auth, baseUrl);
        node.client.core.tenant = tenant;

        const topic = '/events/' + (config.deviceId || '*');
        this.log(`Subscribing to: ${topic} on tenant: ${tenant} and url: ${baseUrl}`);
        const subscription = node.client.realtime.subscribe(topic, (evt) => {
            const msg = {
                payload: evt
            };
            node.send(msg);
        });

        const handle = node.client.realtime.addHandshakeListener((msg) => {
            if (msg.successful && msg.reestablish) {
                this.log(`Resubscribing to: ${topic} on tenant: ${tenant} and url: ${baseUrl}`);
                node.client.realtime.resubscribe(subscription);
            }
        });

        node.on('close', function() {
            if (node.client && handle) {
                node.client.realtime.removeListener(handle);
            }
            if (node.client && subscription) {
                node.client.realtime.unsubscribe(subscription);
            }
        });
    }
    RED.nodes.registerType("realtime-events", RealtimeEventNode);
}
