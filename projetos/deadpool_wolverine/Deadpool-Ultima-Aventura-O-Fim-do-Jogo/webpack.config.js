const path = require('path');

module.exports = {
  entry: './src/index.js', // Arquivo principal JavaScript
  output: {
    filename: 'bundle.js', // Nome do arquivo de saída
    path: path.resolve(__dirname, 'dist'), // Pasta de saída
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Regra para arquivos .scss
        use: [
          'style-loader', // Adiciona CSS ao DOM
          'css-loader',   // Processa o CSS
          'sass-loader',  // Compila SCSS para CSS
        ],
      },
    ],
  },
  mode: 'development', // ou 'production'
};
