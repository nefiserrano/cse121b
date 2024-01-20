/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Nefi Raul Serrano Ramirez";
let currentYear = "2024";
let profilePicture = "images/Foto.jpg";



/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt",  `Profile image of ${fullName}`);





/* Step 5 - Array */
const favoriteFoods = ["Pizza", "Tacos", "Enchiladas", "Cheeseburgers", "French Fries"];
foodElement.textContent = favoriteFoods;
const favoriteFood = "Ice Cream";
favoriteFoods.push(favoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;




