// Load all categories
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err));
};

// Load all pet contents
const loadContents = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => displayContents(data.pets))
    .catch((err) => console.log(err));
};

// Load pets by category
const loadCategoriesContent = (id) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayContents(data.pets))
    .catch((err) => console.log(err));
};

// Display pet cards
const displayContents = (pets) => {
  const contents = document.getElementById("contents");
  contents.innerHTML = "";

  pets.forEach((pet) => {
    const card = document.createElement("div");
    card.className = "card bg-base-100 w-96 shadow-sm";

    card.innerHTML = `
      <figure class="h-[250px]">
        <img class="h-full w-full object-cover" src="${pet.image}" alt="${pet.pet_name}" />
      </figure>
      <div class="px-4 py-3">
        <h2 class="font-semibold text-lg mb-1">${pet.pet_name}</h2>
        <p class="flex items-center text-base"><img class="h-5 mr-2" src="icons/icons8-small-hearts-24.png" />Breed: ${pet.breed}</p>
        <p class="flex items-center text-base"><img class="h-5 mr-2" src="icons/download.png" />Birth: ${pet.date_of_birth}</p>
        <p class="flex items-center text-base"><img class="h-5 mr-2" src="icons/icons8-gender-40.png" />Gender: ${pet.gender}</p>
        <p class="flex items-center text-base"><img class="h-5 mr-2" src="icons/icons8-dollar-48.png" />Price: $${pet.price}</p>
        <div class="divider"></div>
        <div class="flex justify-between">
          <button class="btn btn-square"><img class="h-5 w-5" src="icons/icons8-like-50.png" alt="Like" /></button>
          <button class="btn btn-outline btn-success">Adopt</button>
          <button class="btn btn-outline btn-success">Details</button>
        </div>
      </div>
    `;

    contents.appendChild(card);
  });
};

// Display category buttons
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");
  categoryContainer.innerHTML = "";

  categories.forEach((item) => {
    const buttonContainer = document.createElement("div");

    buttonContainer.innerHTML = `
      <button onclick="loadCategoriesContent('${item.category}')" class="btn flex items-center gap-2">
        ${item.category}
        <img class="h-6 w-6" src="${item.category_icon}" alt="${item.category}" />
      </button>
    `;

    categoryContainer.appendChild(buttonContainer);
  });
};

loadCategories();
loadContents();
