db.produtos.find(
  { ingredientes: { $all: ["picles"] } },
  { ingredientes: 1, valoresNutricionais: { $slice: 3 }, nome: 1, _id: 0 },
);
