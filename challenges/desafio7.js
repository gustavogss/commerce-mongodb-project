db.produtos.find(
    {
      $and: [{ vendidos: { $ne: 50 } }, { tags: { $exists: false } }],
    },
    { _id: false, nome: true, vendidos: true },
    );

    // $ne operator : https://www.mongodb.com/docs/manual/reference/operator/query/ne/