const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js',          // Main entry point for your main page
        otherPage: './src/otherPage.js', // Entry point for another page
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            // Your webpack rules for handling JS, JSX, etc.
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};
