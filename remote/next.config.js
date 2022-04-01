// next.config.js
const { withFederatedSidecar } = require("@module-federation/nextjs-mf");

module.exports = withFederatedSidecar({
    name: "next2",
    filename: "static/chunks/remoteEntry.js",
    exposes: {
        "./sampleComponent": "./components/sampleComponent.tsx",
    },
    shared: {
        react: {
            // Notice shared are NOT eager here.
            requiredVersion: false,
            singleton: true,
        },
    },
})({
    // your original next.config.js export
});