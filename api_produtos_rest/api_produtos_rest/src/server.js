const express = require("express");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "API de Produtos funcionando!"
    });
});

app.use("/product", productRoutes);

app.use((req, res) => {
    res.status(404).json({
        message: "Endpoint não encontrado"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
