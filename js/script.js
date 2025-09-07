const lodeTreeCategories = () => {
  const categoriesUrl = "https://openapi.programming-hero.com/api/categories";
  fetch(categoriesUrl)
    .then((res) => res.json())
    .then((data) => {
      const dataCategoies = data.categories;
      showTreeCategories(dataCategoies);
    })
    .catch((err) => {});
};
// ----------------------------------------
const lodePlantsCategories = () => {
  const plantcategoriesUrl = "https://openapi.programming-hero.com/api/plants";
  fetch(plantcategoriesUrl)
    .then((res) => res.json())
    .then((data) => {
      const plantdataCategoies = data.plants;
      showPlantsCategories(plantdataCategoies);
      //   console.log(plantdataCategoies);
    })
    .catch((err) => {});
};
// !___________________show case________________________
const showTreeCategories = (categories) => {
  const allCategoriesCon = document.getElementById("all-categories-con");
  categories.forEach((category) => {
    // console.log(category);
    const categoryLi = document.createElement("div");
    categoryLi.innerHTML = `
    <li id="${category.id}" class="p-2 hover:bg-[#15803D] rounded-lg hover:text-white transition-all duration-150 ease-in-out cursor-pointer">
                  ${category.category_name}
                </li>
    `;
    allCategoriesCon.append(categoryLi);
  });
};
// -------------------------------------
const showPlantsCategories = (plants) => {
  const allPlantCon = document.getElementById("all-plant-con");
  plants.forEach((plant) => {
    console.log(plant.image);
    const categoryLi = document.createElement("div");
    categoryLi.innerHTML = `
    <div class="card bg-white rounded-lg p-4 shadow-md w-full h-[500px] flex flex-col justify-between">
  <img
    class="bg-[#EDEDED] rounded-lg w-full h-56 object-cover"
    src="${plant.image}"
    alt="${plant.name}"
  />

  <div class="space-y-3 flex-1 mt-4">
    <h2 class="font-semibold text-lg">${plant.name}</h2>
    <p class="text-sm text-gray-700 line-clamp-3">
      ${plant.description}
    </p>
    <div class="flex justify-between items-center">
      <button class="btn btn-soft btn-success">${plant.category}</button>
      <p class="font-semibold">৳${plant.price}</p>
    </div>
  </div>

  <button class="btn bg-[#15803D] rounded-3xl mt-4 text-white hover:bg-green-700 transition-all duration-300">
    Add to Cart
  </button>
</div>
    `;
    allPlantCon.append(categoryLi);
  });
};

lodePlantsCategories();
lodeTreeCategories();
