db.produtos.deleteMany(
    {
      curtidas: { $lt: 50 },
      tags: { $exists: 0 },
    },
  );

db.produtos.find(
    {},
    { _id: false, nome: true },
  );
