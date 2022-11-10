db.produtos.find(
    {
      $and: [{ curtidas: { $gt: 10 } }, { curtidas: { $lt: 100 } }],
    },
    { _id: false, nome: true, curtidas: true },
    );