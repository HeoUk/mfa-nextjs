const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
    experimental: {
        turbo: false,   // Turbopack 비활성화
    },
    webpack(config, options) {
        // watchOptions는 plugin 옵션이 아닌 webpack 설정에 추가
        config.watchOptions = {
            ignored: ['**/.next/**', '**/node_modules/**'],
            // polling: 1000, // 필요 시 폴링 주기 설정
        };
        config.plugins.push(
            new NextFederationPlugin({
                name: 'remote-app',
                filename: 'static/chunks/remoteEntry.js',
                exposes: {
                    './Button': './components/Button', // exports Button 컴포넌트
                    // 루트 페이지
                    './HomePage': './pages/index',
                    // test 경로의 페이지
                    './TestPage': './pages/test/index',
                },
                shared: {
                    react: { singleton: true, requiredVersion: false },
                    'react-dom': { singleton: true, requiredVersion: false },
                },
            })
        );
        return config;
    },
};
