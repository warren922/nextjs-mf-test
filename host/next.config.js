module.exports = {
    webpack(config, options) {
        config.plugins.push(
            new options.webpack.container.ModuleFederationPlugin({
                remotes: {
                    next2: "next2@http://localhost:3001/_next/static/chunks/remoteEntry.js",
                    // if you embed the script into the document manually
                    // next2: "next2",
                },
                shared: {
                    react: {
                        // Notice shared ARE eager here.
                        eager: true,
                        singleton: true,
                        requiredVersion: false,
                    },
                },
            })
        );

        // we attach next internals to share scope at runtime
        config.module.rules.push({
            test: /_app.tsx/, ///pages\/_app.[jt]sx?/,
            loader: "@module-federation/nextjs-mf/lib/federation-loader.js",
        });

        return config;
    },
};