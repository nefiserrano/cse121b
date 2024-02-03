/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Nefi Serrano",
    photo: "images/Foto.jpg",
    favoriteFoods: [
        "Pizza",
        "Tacos",
        "Enchiladas",
        "Cheeseburgers",
        "French Fries"
    ],
    hobbies: [
        "Reading books",
        "Watching movies",
        "Playing video games",
        "Listening to music",
        "Hanging out with my friends"
    ],
    placesLived: []
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Pachuca, Mexico",
        length: "20 years"
    }
)

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
const imageElement = document.querySelector("#photo");
imageElement.setAttribute("src", myProfile.photo);
imageElement.setAttribute("alt",  myProfile.name);


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});
