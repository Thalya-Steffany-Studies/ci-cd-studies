module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest", // Transforma arquivos .js usando babel-jest
  },
  testEnvironment: "node", // Configura o ambiente de teste para Node.js
  verbose: true,
};
