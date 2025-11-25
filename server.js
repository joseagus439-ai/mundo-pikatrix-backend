const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Servidor Mundo Pikatrix funcionando 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor arrancando en el puerto " + PORT);
});
