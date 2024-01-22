var categoriesItems = document.querySelectorAll("#categories .item");

var numberOfCategories = categoriesItems.length;
console.log("Number of categories: " + numberOfCategories);

categoriesItems.forEach(function (item) {
  var categoryTitle = item.querySelector("h2").innerText;

  var categoryItems = item.querySelectorAll("ul li");

  console.log("Category: " + categoryTitle);
  console.log("Elements: " + categoryItems.length);
});
