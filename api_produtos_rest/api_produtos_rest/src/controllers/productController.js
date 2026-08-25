const productService = require("../services/productService");

function getAllProducts(req, res) {
    const products = productService.getAll();

    return res.status(200).json(products);
}

function getProductById(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        return res.status(400).json({
            message: "ID inválido"
        });
    }

    const product = productService.getById(id);

    if (!product) {
        return res.status(404).json({
            message: "Produto não encontrado"
        });
    }

    return res.status(200).json(product);
}

function createProduct(req, res) {
    const { name, price, quantity } = req.body;

    if (
        typeof name !== "string" ||
        name.trim() === "" ||
        typeof price !== "number" ||
        price < 0 ||
        typeof quantity !== "number" ||
        !Number.isInteger(quantity) ||
        quantity < 0
    ) {
        return res.status(400).json({
            message: "Dados inválidos. Informe name, price e quantity corretamente."
        });
    }

    const product = productService.create({
        name: name.trim(),
        price,
        quantity
    });

    return res.status(201).json(product);
}

function updateProduct(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        return res.status(400).json({
            message: "ID inválido"
        });
    }

    const { name, price, quantity } = req.body;

    if (
        typeof name !== "string" ||
        name.trim() === "" ||
        typeof price !== "number" ||
        price < 0 ||
        typeof quantity !== "number" ||
        !Number.isInteger(quantity) ||
        quantity < 0
    ) {
        return res.status(400).json({
            message: "No PUT, envie name, price e quantity corretamente."
        });
    }

    const product = productService.update(id, {
        name: name.trim(),
        price,
        quantity
    });

    if (!product) {
        return res.status(404).json({
            message: "Produto não encontrado"
        });
    }

    return res.status(200).json(product);
}

function patchProduct(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        return res.status(400).json({
            message: "ID inválido"
        });
    }

    const { name, price, quantity } = req.body;

    if (name !== undefined && (typeof name !== "string" || name.trim() === "")) {
        return res.status(400).json({
            message: "name inválido"
        });
    }

    if (price !== undefined && (typeof price !== "number" || price < 0)) {
        return res.status(400).json({
            message: "price inválido"
        });
    }

    if (
        quantity !== undefined &&
        (typeof quantity !== "number" || !Number.isInteger(quantity) || quantity < 0)
    ) {
        return res.status(400).json({
            message: "quantity inválido"
        });
    }

    const product = productService.patch(id, {
        name: name !== undefined ? name.trim() : undefined,
        price,
        quantity
    });

    if (!product) {
        return res.status(404).json({
            message: "Produto não encontrado"
        });
    }

    return res.status(200).json(product);
}

function deleteProduct(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        return res.status(400).json({
            message: "ID inválido"
        });
    }

    const deleted = productService.remove(id);

    if (!deleted) {
        return res.status(404).json({
            message: "Produto não encontrado"
        });
    }

    return res.status(204).send();
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    patchProduct,
    deleteProduct
};
