db.produtos.updateMany(
  { nome: "Big Mac" },
  { $currentDate: { lastModified: false, ultimaModificacao: { $type: "date" } } },
  );
  db.produtos.find({ ultimaModificacao: { $exists: true } }, { _id: 0, nome: 1 });
