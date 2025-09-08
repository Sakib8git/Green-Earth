// const showTreeCategories = (categories) => {
//   const allCategoriesCon = document.getElementById("all-categories-con");
//   categories.forEach((category) => {
//     // console.log(category.id);
//     const categoryLi = document.createElement("div");
//     categoryLi.innerHTML = `
//     <li id="${category.id}" class="p-2 hover:bg-[#15803D] rounded-lg hover:text-white transition-all duration-150 ease-in-out cursor-pointer">
//                   ${category.category_name}
//                 </li>
//     `;
//     categoryLi.addEventListener("click", () => {
//       PlantsbyCategories(category.id);
//     });

//     allCategoriesCon.append(categoryLi);
//   });
// };

<!-- same card -->
// const addToCart = (plant) => {
//   const existingItem = cartItems.find((item) => item.name === plant.name);
//   if (existingItem) {
//     existingItem.quantity += 1;
//   } else {
//     cartItems.push({ ...plant, quantity: 1 });
//   }

//   renderCart();
// };








