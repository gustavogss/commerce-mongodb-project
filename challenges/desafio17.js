db.resumoProdutos.insertOne(
    {
    franquia: "McDonalds",
    totalProdutos: db.produtos.count(),
    },
    );

db.resumoProdutos.find(
    {},
    { _id: false, franquia: true, totalProdutos: true },
    );