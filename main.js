const jsondata = require("./food.json"); //how to take a json fiel in the js fiele
let result;
// console.log(data);
let ans = [];
//list all the food items
function listAllItems(data) {
  let result = data.map((item) => {
    return item.foodname;
  });

  return result;
}

result = listAllItems(jsondata);
console.log("all the food items are:", result);
console.log("_______________________________________");

//with this function we can extract all food item wihh given category we want
function searchcategory(data, category) {
  let res = data
    .filter((item) => item.category === category && item.foodname)
    .map((item) => item.foodname);
  return res;
}
//function with calorie >100
function calories1(data) {
  let res = data
    .filter((item) => item.calorie > 100 && item.foodname)
    .map((item) => item.foodname);
  return res;
}
//function with calorie <100
function calories2(data) {
  let res = data
    .filter((item) => item.calorie < 100 && item.foodname)
    .map((item) => item.foodname);
  return res;
}

//function with highest protein content
function lotohighprotein(data) {
  return data
    .sort((item1, item2) => item1.protiens - item2.protiens)
    .map((item) => item.foodname);
}
function lotohighcab(data) {
  return data
    .sort((item1, item2) => item2.cab - item1.cab)
    .map((item) => item.foodname);
}

console.log(
  "item with category vegetable are",
  searchcategory(jsondata, "Vegetable")
);
console.log("_________________________________");

console.log("item with category Fruit are", searchcategory(jsondata, "Fruit"));
console.log("_________________________________");

console.log(
  "item with category Protein are",
  searchcategory(jsondata, "Protein")
);
console.log("_________________________________");

console.log("item with categoryNuts are", searchcategory(jsondata, "Nuts"));
console.log("_________________________________");

console.log("item with category Grain are", searchcategory(jsondata, "Grain"));
console.log("_________________________________");
console.log("item with category Dairy are", searchcategory(jsondata, "Dairy"));
console.log("_________________________________");

console.log("item with lowest to highest carbs are", lotohighcab(jsondata));
console.log("_______________________________________");

console.log("item with low to high proteins are", lotohighprotein(jsondata));
console.log("_______________________________________");

console.log("items greater than 100 calories:");
console.log(calories1(jsondata));
console.log("_______________________________________");

console.log("items lesser than 100 calories:");
console.log(calories2(jsondata));
console.log("_______________________________________");
