// !-------------1side er category lode kori

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
      // console.log(data);
      showPlantsCategories(plantdataCategoies);
    })
    .catch((err) => {});
};

// !___________________show case________________________

// !-------------1side er category show kori
const showTreeCategories = (categories) => {
  const allCategoriesCon = document.getElementById("all-categories-con");
  allCategoriesCon.innerHTML = "";

  // *----------"All trees"---------"
const allTreesWrapper = document.createElement("span");
allTreesWrapper.innerHTML = `
  <li class="p-3 mb-1 hover:bg-[#15803D] rounded-lg hover:text-white cursor-pointer">
    All Trees
  </li>
`;
const allTreesLi = allTreesWrapper.querySelector("li");
allTreesLi.addEventListener("click", () => {
  document.querySelectorAll("#all-categories-con li").forEach((li) =>
    li.classList.remove("bg-[#15803D]", "text-white")
  );
  allTreesLi.classList.add("bg-[#15803D]", "text-white");

  lodePlantsCategories(); 
});
allCategoriesCon.append(allTreesWrapper);

// !-------------"All trees"----------------------

  categories.forEach((category) => {
    const categoryLi = document.createElement("span");
    categoryLi.innerHTML = `
  <li id="${category.id}" class="p-3 mb-1 hover:bg-[#15803D] rounded-lg hover:text-white cursor-pointer">
    ${category.category_name}
  </li>
`;
    const liElement = categoryLi.querySelector("li");
    liElement.addEventListener("click", () => {
      document
        .querySelectorAll("li")
        .forEach((li) => li.classList.remove("bg-[#15803D]", "text-white"));
      liElement.classList.add("bg-[#15803D]", "text-white");
      PlantsbyCategories(category.id);
    });
    allCategoriesCon.append(categoryLi);
  });
};

// *--------------showPlantsCategories-----------------------
const showPlantsCategories = (plants) => {
  const allPlantCon = document.getElementById("all-plant-con");
  plants.forEach((plant) => {
    // console.log(plant.image);
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

// ----------------------------

// -----------------🌴plants by categories-----------------------
const PlantsbyCategories = (id) => {
  const allPlantCon = document.getElementById("all-plant-con");
  allPlantCon.innerHTML = "";
  const plantBycategoriesUrl = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(plantBycategoriesUrl)
    .then((res) => res.json())
    .then((data) => {
      const filteredPlants = data.plants;
      showPlantsCategories(filteredPlants);
    })
    .catch((err) => {});
};

lodePlantsCategories();
lodeTreeCategories();
