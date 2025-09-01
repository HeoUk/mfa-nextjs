const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
    experimental: {
        turbo: false,   // Turbopack 비활성화
    },
    webpack(config, options) {
        config.plugins.push(
            new NextFederationPlugin({
                name: '_main',
                filename: 'static/chunks/hostRemoteEntry.js',  // ← add this
                remotes: {
                    // 원격 앱 네임: URL/remoteEntry.js
                    'remote-app': options.dev
                        ? 'remote-app@http://localhost:3001/_next/static/chunks/remoteEntry.js'
                        : 'remote-app@https://prod.cdn/remoteEntry.js',
                },
                shared: {
                    react: {singleton: true, requiredVersion: false},
                    'react-dom': {singleton: true, requiredVersion: false},
                },
            })
        );
        return config;
    },
};
