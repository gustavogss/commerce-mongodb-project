db.produtos.find(
    {
      vendidos: {
        $mod: [5, 0],
      },
    },
    { _id: false, nome: true, vendidos: true },
    );

    // Todos os requisitos passando, menos o 30 que não passa no avaliador. Why?