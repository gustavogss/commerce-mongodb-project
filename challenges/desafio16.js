db.produtos.updateOne(
    {
      nome: "Big Mac",
    },
    {
      $set: { ultimaModificacao: new Date() },      
    },
    );

db.produtos.find(
    {
      ultimaModificacao: { $exists: true },
    },
    { _id: false, nome: true },
    );

    // new Date - https://stackoverflow.com/questions/40028977/how-to-set-new-date-in-mongodb