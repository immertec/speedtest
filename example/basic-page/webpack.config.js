import path from 'path';

export default {
  //mode: 'none', // Set mode to 'none' to disable minification
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.dirname(new URL(import.meta.url).pathname),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};

// Using npx webpack --config webpack.config.js will bundle the code into a file named bundle.js in the same directory as the main.js file.
