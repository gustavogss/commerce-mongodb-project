db.produtos
.find(
  { 
    valoresNutricionais: {
      $elemMatch: { 
        tipo: "calorias",
        quantidade: { $lt: 500 },
      },
    },
  },
  { _id: false, nome: true },
);