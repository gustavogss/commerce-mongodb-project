db.produtos.find(
    {
      nome: {
        $not: {
          $in: ["Big Mac", "McChicken"],
        },
      },
    },
    { _id: false, nome: true, curtidas: true, vendidos: true },
    );