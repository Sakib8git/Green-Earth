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

const showTreeCategories = (categories) => {
  const allCategoriesCon = document.getElementById("all-categories-con");
  categories.forEach((category) => {
    // console.log(category);
    const categoryLi = document.createElement("div");
    categoryLi.innerHTML = `
    <li id="${category.id}" class="p-2 hover:bg-[#15803D] rounded-lg hover:text-white">
                  ${category.category_name}
                </li>
    `;
    allCategoriesCon.append(categoryLi);
  });
};

lodeTreeCategories();
