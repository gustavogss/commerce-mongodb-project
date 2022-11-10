db.produtos.find(
    {
      ingredientes: { $in: ["picles"] },
    },
    { _id: false, nome: true, ingredientes: true, valoresNutricionais: { $slice: 3 } },
    );