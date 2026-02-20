//load categories
const loadCategories = () => {
  //console.log("load");
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    //.then((data) => console.log(data.categories))
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err));
};
//load contents
const loadContents = () => {
  //console.log("load");
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    //.then((data) => console.log(data.categories))
    .then((data) => displayContents(data.pets))
    //.then((data) => console.log(data.pets))
    .catch((err) => console.log(err));
};
const loadCategoriesContent = (categoryName) => {
  //alert(id);
  fetch(
    `https://openapi.programming-hero.com/api/peddy/category/${categoryName}`
  )
    .then((res) => res.json())
    //.then((data) => console.log(data.categories))
    .then((data) => displayContents(data.pets))
    //.then((data) => console.log(data.pets))
    .catch((err) => console.log(err));
};
const cardDemo = {
  petId: 12,
  breed: "Poodle",
  category: "Dog",
  date_of_birth: "2023-08-10",
  price: 1500,
  image: "https://i.ibb.co.com/R9ZHvDD/pet-12.jpg",
  gender: "Female",
  pet_details:
    "This elegant female Poodle, born on August 10, 2023, is intelligent and eager to learn. Fully vaccinated and priced at $1500, she's perfect for families looking for a trainable and loving companion.",
  vaccinated_status: "Fully",
  pet_name: "Chloe",
};

const displayContents = (pets) => {
  const contents = document.getElementById("contents");
  //console.log(pets);
  pets.forEach((pet) => {
    console.log(pet);
    const card = document.createElement("div");
    card.classList = "card bg-base-100 w-96 shadow-sm";
    card.innerHTML = `
      <figure class="h-[250px]">
    <img  class="h-full w-full object-cover"
      src=${pet.image}
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2">
  <div>
  <div>
  <h2 class="font-semibold">${pet.pet_name}</h2>
  <p class="flex text-xl"> <img class="h-5 mt-1" src="icons/icons8-small-hearts-24.png"/> Breed: ${pet.breed}</p>
  <p class="flex text-xl"> <img class="h-5 mt-1" src="icons/download.png" /> Birth : ${pet.date_of_birth}</p>
  <p class="flex text-xl"> <img class="h-5 mt-1" src="icons/icons8-gender-40.png" /> Gender: ${pet.gender}</p>
  <p class="flex text-xl"> <img class="h-5 mt-1" src="icons/icons8-dollar-48.png" />  Price: ${pet.price}</p>
  </div>
    <div class="divider"></div>
    <div class=" flex justify-between">
<button class="btn btn-square ">
<img src="icons/icons8-like-50.png"
</button>

  <button class="btn btn-outline btn-success">Adopt</button>
<button class="btn btn-outline btn-success">Details</button>
    </div>
  <div>
</div>
  </div>
  </div>
    `;
    contents.append(card);
  });
};
//{
//    "id": 1,
//    "category": "Cat",
//    "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
//}

// displayCategories

const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");
  categories.forEach((item) => {
    console.log(item);

    const buttonContainer = document.createElement("div");
    //button.classList = "btn";
    //button.onclick = alert("hfk");
    //button.innerText = item.category;
    buttonContainer.innerHTML = `
    <button onclick="loadCategoriesContent(${item.category})" class="btn">  
     ${item.category} 
    <img class=h-full  src=${item.category_icon} />
    </button>
    `;

    categoryContainer.append(buttonContainer);
  });
};

loadCategories();
loadContents();
