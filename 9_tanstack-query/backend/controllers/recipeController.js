const { getData } = require("../utils/getData");
const { setData } = require("../utils/setData");
const crypto = require("crypto");

// json sosyasından verileri alıyoruz
let data = getData();

exports.getAllRecipes = (req, res) => {
  // tariflerin bir kopyasını oluşturyoruz
  let recipes = [...data];

  // aratılan terime eriş
  const searchTerm = req.query?.title?.trim()?.toLowerCase();
  const location = req.query?.location?.trim()?.toLowerCase();

  // sırlama parametresine eriş
  const order = req.query.order;

  // eğerki artılan terim varsa filtrele
  if (searchTerm) {
    recipes = data.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm)
    );
  }

  if (location) {
    recipes = data.filter((recipe) =>
      recipe.location.toLowerCase().includes(location)
    );
  }

  // eğerki order varsa sırala
  if (order) {
    recipes.sort((a, b) =>
      order === "asc" ? a.rating - b.rating : b.rating - a.rating
    );
  }

  // cevap gönder
  res.status(200).json({
    message: "Konaklama Noktaları başarıyla gönderildi",
    results: recipes.length,
    places: recipes,
  });
};

exports.createRecipe = (req, res) => {
  //1) isteğin body'si ile gelen veriye eriş
  const newRecipe = req.body;

  //2) verinin bütün değerleri tanımlanmışmı kontrol et
  if (
    !newRecipe.name ||
    !newRecipe.location ||
    !newRecipe.address ||
    !newRecipe.description ||
    !newRecipe.amenities ||
    !newRecipe.rating ||
    !newRecipe.price_per_night ||
    !newRecipe.availability
  ) {
    return res.status(400).json({ message: "Lütfen bütün değerli tanımlayın" });
  }

  //3) veriye id ekle
  newRecipe.id = crypto.randomUUID();

  //4) yeni tarifi diziyi ekle
  data.push(newRecipe);

  //5) yeni diziyi json dosyasına yaz
  setData(data);

  //6) cevap gönder
  res
    .status(200)
    .json({ message: "Yeni konaklama noktası oluşturuldu", place: data });
};

exports.getRecipe = (req, res) => {
  // cevap gönderdik
  res.status(200).json({
    message: "Aradığınız veri bulundu",
    place: req.recipe,
  });
};

exports.deleteRecipe = (req, res) => {
  // silinecek elemanın sırasını bul
  const index = data.findIndex((i) => i.id == req.params.id);

  // sırası bilenen elemanı diziden kaldır
  data.splice(index, 1);

  // json dosyasını güncelle
  setData(data);

  // cevap gönder
  res.status(204).json({ message: "Başarıyla Silindi" });
};
