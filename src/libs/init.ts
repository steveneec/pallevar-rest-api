import StoreCategory from "../models/StoreCategory";

export default async function initDb() {
  try {
    //Check for categories
    const categoriesCount = await StoreCategory.count();

    if (categoriesCount > 0) return;

    //push categories
    const result = await Promise.all([
      StoreCategory.create({ name: "Buffet", picture: "Buffet.png" }),
      StoreCategory.create({ name: "Cafeteria", picture: "Cafeteria.png" }),
      StoreCategory.create({ name: "Comida China", picture: "Chifa.png" }),
      StoreCategory.create({ name: "Comida Rápida", picture: "FastFood.png" }),
      StoreCategory.create({ name: "Gourmet", picture: "Gourmet.png" }),
      StoreCategory.create({ name: "Heladería", picture: "Heladeria.png" }),
      StoreCategory.create({
        name: "Comida Japonesa",
        picture: "Japonesa.png",
      }),
      StoreCategory.create({ name: "Marisqueria", picture: "Marisqueria.png" }),
      StoreCategory.create({
        name: "Comida Mexicana",
        picture: "Mexicana.png",
      }),
      StoreCategory.create({ name: "Picantería", picture: "Picanteria.png" }),
      StoreCategory.create({ name: "Pizzeria", picture: "Pizzeria.png" }),
      StoreCategory.create({ name: "SteakHouse", picture: "SteakHouse.png" }),
      StoreCategory.create({
        name: "Comida Temática",
        picture: "Tematico.png",
      }),
      StoreCategory.create({ name: "Típica", picture: "Tipica.png" }),
    ]);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
