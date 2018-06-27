const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = () => {
    return {
        entry: { 'new-parser': './src/index' },
        mode: 'production',
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [{
                        loader: 'ts-loader',
                        options: { configFile: 'tsconfig-webpack.json' }
                    }]
                }
            ]
        },
        node: {
            __dirname: false,
            __filename: false,
            path: true,
            process: false
        },
        output: { filename: 'src/[name].js' },
        plugins: [
            new webpack.ProgressPlugin(),
            new ForkTsCheckerWebpackPlugin()
        ],
        resolve: {
            alias: { handlebars: 'handlebars/dist/handlebars.min.js' },
            extensions: ['.ts', '.js', '.json']
        },
        target: 'node'
    };
};