// ==========================================
// PEDDY - PET COLLECTION & INTERACTIONS
// ==========================================

// All sample pet data is stored locally.
// No external API is required.

const pets = [
  {
    id: 1,
    name: "Max",
    category: "Dogs",
    breed: "Golden Retriever",
    age: "2 years",
    gender: "Male",
    price: 2500,
    location: "Dhaka",
    vaccinated: "Yes",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=85",
    description:
      "Max is a friendly and energetic Golden Retriever. He loves outdoor adventures, playing fetch, and spending time with people. He would make a wonderful family companion.",
  },
  {
    id: 2,
    name: "Bella",
    category: "Dogs",
    breed: "Beagle",
    age: "1 year",
    gender: "Female",
    price: 2000,
    location: "Chattogram",
    vaccinated: "Yes",
    image:
      "https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=800&q=85",
    description:
      "Bella is a cheerful Beagle with a curious personality. She enjoys walks, exploring new places, and meeting new friends.",
  },
  {
    id: 3,
    name: "Charlie",
    category: "Dogs",
    breed: "Corgi",
    age: "8 months",
    gender: "Male",
    price: 1800,
    location: "Dhaka",
    vaccinated: "Yes",
    image:
      "https://images.unsplash.com/photo-1546975490-e8b92a360b24?auto=format&fit=crop&w=800&q=85",
    description:
      "Charlie is a playful little Corgi who loves attention. His happy personality makes every day brighter.",
  },
  {
    id: 4,
    name: "Luna",
    category: "Cats",
    breed: "Persian",
    age: "1 year",
    gender: "Female",
    price: 1500,
    location: "Sylhet",
    vaccinated: "Yes",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=85",
    description:
      "Luna is a gentle Persian cat who loves cozy spaces and quiet afternoons. She is affectionate and enjoys being around caring people.",
  },
  {
    id: 5,
    name: "Oliver",
    category: "Cats",
    breed: "British Shorthair",
    age: "2 years",
    gender: "Male",
    price: 2200,
    location: "Dhaka",
    vaccinated: "Yes",
    image:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=85",
    description:
      "Oliver is a calm and charming cat. He enjoys relaxing near windows, gentle playtime, and a peaceful home.",
  },
  {
    id: 6,
    name: "Milo",
    category: "Cats",
    breed: "Tabby",
    age: "6 months",
    gender: "Male",
    price: 1000,
    location: "Rajshahi",
    vaccinated: "No",
    image:
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=800&q=85",
    description:
      "Milo is a curious kitten who loves toys and playful adventures. He is looking for a loving home where he can grow.",
  },
  {
    id: 7,
    name: "Coco",
    category: "Rabbits",
    breed: "White Rabbit",
    age: "5 months",
    gender: "Female",
    price: 800,
    location: "Dhaka",
    vaccinated: "Yes",
    image:
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=85",
    description:
      "Coco is a sweet little rabbit who enjoys fresh vegetables and a comfortable, safe space to explore.",
  },
  {
    id: 8,
    name: "Snowy",
    category: "Rabbits",
    breed: "Holland Lop",
    age: "1 year",
    gender: "Male",
    price: 1000,
    location: "Khulna",
    vaccinated: "Yes",
    image:
      "https://images.unsplash.com/photo-1583301286816-f4f05e1e8b25?auto=format&fit=crop&w=800&q=85",
    description:
      "Snowy is a gentle rabbit with a lovely personality. He enjoys calm surroundings and gentle attention.",
  },
  {
    id: 9,
    name: "Kiwi",
    category: "Birds",
    breed: "Parrot",
    age: "1 year",
    gender: "Male",
    price: 1200,
    location: "Dhaka",
    vaccinated: "Yes",
    image:
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=85",
    description:
      "Kiwi is a colorful and curious bird. He enjoys interaction, toys, and a spacious environment.",
  },
  {
    id: 10,
    name: "Sunny",
    category: "Birds",
    breed: "Canary",
    age: "8 months",
    gender: "Female",
    price: 900,
    location: "Barishal",
    vaccinated: "Yes",
    image:
      "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=85",
    description:
      "Sunny is a lovely little bird known for her bright appearance. She needs a comfortable home and attentive care.",
  },
  {
    id: 11,
    name: "Bubbles",
    category: "Fish",
    breed: "Goldfish",
    age: "6 months",
    gender: "Unknown",
    price: 300,
    location: "Dhaka",
    vaccinated: "Not applicable",
    image:
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=85",
    description:
      "Bubbles is a beautiful goldfish. A clean, properly maintained aquarium is important for a healthy and happy life.",
  },
  {
    id: 12,
    name: "Shelly",
    category: "Turtles",
    breed: "Green Turtle",
    age: "3 years",
    gender: "Unknown",
    price: 0,
    location: "Dhaka",
    vaccinated: "Not applicable",
    image:
      "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=85",
    description:
      "Shelly represents our turtle collection. Please check local wildlife and animal protection laws before considering turtle ownership.",
  },
];

// ==========================================
// DOM ELEMENTS
// ==========================================

const contents = document.getElementById("contents");
const searchInput = document.getElementById("search-input");
const sortButton = document.getElementById("sort-price");
const petCount = document.getElementById("pet-count");

const detailsModal = document.getElementById("pet-details-modal");
const detailsContent = document.getElementById("pet-details-content");

// ==========================================
// APPLICATION STATE
// ==========================================

let currentPets = [...pets];
let currentSearch = "";
let sortAscending = true;

// ==========================================
// HELPER FUNCTIONS
// ==========================================

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });
}

function formatPrice(price) {
  if (price === 0) return "Free";

  return `৳${Number(price).toLocaleString("en-BD")}`;
}

// Update result count
function updatePetCount(count) {
  if (!petCount) return;

  petCount.textContent = `Showing ${count} ${count === 1 ? "pet" : "pets"}`;
}

// ==========================================
// LOADING AND EMPTY STATES
// ==========================================

function showLoading() {
  if (!contents) return;

  contents.innerHTML = `
    <div class="col-span-full text-center py-16">
      <span class="loading loading-spinner loading-lg text-primary"></span>
      <p class="text-gray-500 mt-4">Finding lovely companions...</p>
    </div>
  `;
}

function showEmptyMessage() {
  if (!contents) return;

  updatePetCount(0);

  contents.innerHTML = `
    <div class="col-span-full text-center py-16">
      <div class="w-20 h-20 rounded-full bg-green-50 text-primary
        grid place-items-center mx-auto">
        <i class="fa-solid fa-paw text-3xl"></i>
      </div>

      <h3 class="text-2xl font-bold mt-5">
        No pets found
      </h3>

      <p class="text-gray-500 mt-2">
        Try another category or search for something else.
      </p>

      <button
        type="button"
        id="reset-filter"
        class="primary-btn mt-6"
      >
        Show all pets
      </button>
    </div>
  `;

  document.getElementById("reset-filter")?.addEventListener("click", () => {
    window.currentCategory = "All";
    window.updateActiveCategory();
    currentSearch = "";

    if (searchInput) searchInput.value = "";

    currentPets = [...pets];
    renderPets();
  });
}

// ==========================================
// CATEGORY FILTER
// ==========================================

window.filterPetsByCategory = function (categoryName) {
  showLoading();

  if (categoryName === "All") {
    currentPets = [...pets];
  } else {
    currentPets = pets.filter((pet) => pet.category === categoryName);
  }

  // Reset search and sorting when category changes
  currentSearch = "";
  if (searchInput) searchInput.value = "";

  sortAscending = true;

  if (sortButton) {
    sortButton.innerHTML = `
      <i class="fa-solid fa-arrow-down-wide-short"></i>
      Price: Low to High
    `;
  }

  renderPets();
};

// ==========================================
// SEARCH FUNCTION
// ==========================================

function getFilteredPets() {
  const searchTerm = currentSearch.trim().toLowerCase();

  if (!searchTerm) return [...currentPets];

  return currentPets.filter((pet) => {
    const searchableText = [
      pet.name,
      pet.category,
      pet.breed,
      pet.gender,
      pet.location,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(searchTerm);
  });
}

// ==========================================
// PET CARD DESIGN
// ==========================================

function createPetCard(pet) {
  return `
    <article class="pet-card">

      <div class="pet-image-wrap">

        <img
          src="${escapeHTML(pet.image)}"
          alt="${escapeHTML(pet.name)} - ${escapeHTML(pet.breed)}"
          class="pet-image"
          loading="lazy"
          onerror="this.src='https://placehold.co/600x400?text=Pet+Photo'"
        />

        <span class="pet-category-badge">
          ${escapeHTML(pet.category)}
        </span>

      </div>

      <div class="pet-info">

        <div class="flex items-start justify-between gap-2">

          <div>
            <h3 class="text-lg font-extrabold">
              ${escapeHTML(pet.name)}
            </h3>

            <p class="text-xs text-gray-500 mt-1">
              ${escapeHTML(pet.breed)}
            </p>
          </div>

          <span class="text-primary font-extrabold text-sm whitespace-nowrap">
            ${formatPrice(pet.price)}
          </span>

        </div>

        <div class="pet-meta mt-4">

          <span>
            <i class="fa-solid fa-cake-candles"></i>
            ${escapeHTML(pet.age)}
          </span>

          <span>
            <i class="fa-solid fa-venus-mars"></i>
            ${escapeHTML(pet.gender)}
          </span>

          <span>
            <i class="fa-solid fa-location-dot"></i>
            ${escapeHTML(pet.location)}
          </span>

        </div>

        <div class="border-t border-gray-100 mt-4 pt-4">

          <div class="flex items-center justify-between gap-2">

            <button
              type="button"
              class="like-btn"
              data-id="${pet.id}"
              aria-label="Like ${escapeHTML(pet.name)}"
            >
              <i class="fa-regular fa-heart"></i>
            </button>

            <button
              type="button"
              class="pet-action adopt-action flex-1"
              data-id="${pet.id}"
            >
              <i class="fa-solid fa-heart mr-1"></i>
              Adopt
            </button>

            <button
              type="button"
              class="pet-action details-action flex-1"
              data-id="${pet.id}"
            >
              Details
              <i class="fa-solid fa-arrow-right ml-1"></i>
            </button>

          </div>

        </div>

      </div>

    </article>
  `;
}

// ==========================================
// RENDER PETS
// ==========================================

function renderPets() {
  if (!contents) return;

  const filteredPets = getFilteredPets();

  updatePetCount(filteredPets.length);

  if (filteredPets.length === 0) {
    showEmptyMessage();
    return;
  }

  contents.innerHTML = filteredPets.map((pet) => createPetCard(pet)).join("");

  // Like button events
  contents.querySelectorAll(".like-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const icon = button.querySelector("i");

      button.classList.toggle("liked");
      icon.classList.toggle("fa-regular");
      icon.classList.toggle("fa-solid");
    });
  });

  // Adopt button events
  contents.querySelectorAll(".adopt-action").forEach((button) => {
    button.addEventListener("click", () => {
      const pet = pets.find((item) => item.id === Number(button.dataset.id));

      if (!pet) return;

      const accepted = window.confirm(
        `Are you interested in adopting ${pet.name}?`,
      );

      if (accepted) {
        button.innerHTML = `
          <i class="fa-solid fa-check mr-1"></i>
          Interest Noted
        `;

        button.disabled = true;
        button.classList.add("opacity-60");
      }
    });
  });

  // Details button events
  contents.querySelectorAll(".details-action").forEach((button) => {
    button.addEventListener("click", () => {
      const pet = pets.find((item) => item.id === Number(button.dataset.id));

      if (pet) showPetDetails(pet);
    });
  });
}

// ==========================================
// PET DETAILS MODAL
// ==========================================

function showPetDetails(pet) {
  if (!detailsModal || !detailsContent) return;

  detailsContent.innerHTML = `
    <img
      src="${escapeHTML(pet.image)}"
      alt="${escapeHTML(pet.name)}"
      class="w-full h-64 sm:h-80 object-cover rounded-2xl"
      onerror="this.src='https://placehold.co/600x400?text=Pet+Photo'"
    />

    <div class="mt-6">

      <div class="flex flex-wrap items-center justify-between gap-3">

        <div>
          <span class="section-label">
            ${escapeHTML(pet.category)}
          </span>

          <h2 class="text-3xl font-extrabold mt-3">
            ${escapeHTML(pet.name)}
          </h2>

          <p class="text-gray-500 mt-1">
            ${escapeHTML(pet.breed)}
          </p>
        </div>

        <div class="text-right">
          <p class="text-xs text-gray-500">Adoption fee</p>
          <p class="text-2xl font-extrabold text-primary">
            ${formatPrice(pet.price)}
          </p>
        </div>

      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">

        <div class="bg-gray-50 rounded-xl p-4">
          <i class="fa-solid fa-cake-candles text-primary"></i>
          <p class="text-xs text-gray-500 mt-2">Age</p>
          <p class="font-bold text-sm mt-1">${escapeHTML(pet.age)}</p>
        </div>

        <div class="bg-gray-50 rounded-xl p-4">
          <i class="fa-solid fa-venus-mars text-primary"></i>
          <p class="text-xs text-gray-500 mt-2">Gender</p>
          <p class="font-bold text-sm mt-1">${escapeHTML(pet.gender)}</p>
        </div>

        <div class="bg-gray-50 rounded-xl p-4">
          <i class="fa-solid fa-syringe text-primary"></i>
          <p class="text-xs text-gray-500 mt-2">Vaccinated</p>
          <p class="font-bold text-sm mt-1">${escapeHTML(pet.vaccinated)}</p>
        </div>

      </div>

      <div class="mt-6">
        <h3 class="font-bold text-lg">About ${escapeHTML(pet.name)}</h3>

        <p class="text-gray-500 leading-7 mt-2 text-sm">
          ${escapeHTML(pet.description)}
        </p>
      </div>

      <div class="mt-5 text-sm text-gray-500">
        <i class="fa-solid fa-location-dot text-primary mr-2"></i>
        Located in ${escapeHTML(pet.location)}
      </div>

      <button
        type="button"
        id="modal-adopt-button"
        class="primary-btn w-full mt-7"
      >
        <i class="fa-solid fa-heart"></i>
        I'm interested
      </button>

      <p class="text-xs text-gray-400 text-center mt-3">
        Demo project: this button does not submit a real adoption request.
      </p>

    </div>
  `;

  detailsModal.showModal();

  document
    .getElementById("modal-adopt-button")
    ?.addEventListener("click", () => {
      alert(
        `Thanks for your interest in ${pet.name}! This is a demonstration project, so no real adoption request was submitted.`,
      );

      detailsModal.close();
    });
}

// ==========================================
// SEARCH EVENT
// ==========================================

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    currentSearch = event.target.value;
    renderPets();
  });
}

// ==========================================
// SORT EVENT
// ==========================================

if (sortButton) {
  sortButton.addEventListener("click", () => {
    sortAscending = !sortAscending;

    currentPets.sort((a, b) => {
      return sortAscending ? a.price - b.price : b.price - a.price;
    });

    sortButton.innerHTML = sortAscending
      ? `<i class="fa-solid fa-arrow-down-wide-short"></i> Price: Low to High`
      : `<i class="fa-solid fa-arrow-up-wide-short"></i> Price: High to Low`;

    renderPets();
  });
}

// ==========================================
// INITIALIZE APPLICATION
// ==========================================

showLoading();

currentPets = [...pets];

renderPets();
