let products = [
    {
        id: 1,
        name: "Notebook",
        price: 3500,
        quantity: 10
    },
    {
        id: 2,
        name: "Mouse",
        price: 80,
        quantity: 25
    }
];

let nextId = 3;

function getAll() {
    return products;
}

function getById(id) {
    return products.find(product => product.id === id);
}

function create(data) {
    const product = {
        id: nextId++,
        ...data
    };

    products.push(product);

    return product;
}

function update(id, data) {
    const index = products.findIndex(product => product.id === id);

    if (index === -1) {
        return null;
    }

    products[index] = {
        id,
        ...data
    };

    return products[index];
}

function patch(id, data) {
    const product = getById(id);

    if (!product) {
        return null;
    }

    if (data.name !== undefined) product.name = data.name;
    if (data.price !== undefined) product.price = data.price;
    if (data.quantity !== undefined) product.quantity = data.quantity;

    return product;
}

function remove(id) {
    const index = products.findIndex(product => product.id === id);

    if (index === -1) {
        return false;
    }

    products.splice(index, 1);

    return true;
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    patch,
    remove
};
