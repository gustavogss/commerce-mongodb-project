db.produtos.find(
    {
      $or: [{ curtidas: 36 }, { vendidos: 85 }],
    },
    { _id: false, nome: true, vendidos: true, curtidas: true },
    );