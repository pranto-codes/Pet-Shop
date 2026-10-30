// ==========================================
// PEDDY - CATEGORY SECTION
// ==========================================

const categories = [
  {
    name: "Dogs",
    icon: "fa-dog",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80",
    description: "Loyal companions",
  },
  {
    name: "Cats",
    icon: "fa-cat",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80",
    description: "Independent friends",
  },
  {
    name: "Rabbits",
    icon: "fa-carrot",
    image:
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=600&q=80",
    description: "Gentle and playful",
  },
  {
    name: "Birds",
    icon: "fa-dove",
    image:
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=600&q=80",
    description: "Colorful companions",
  },
  {
    name: "Fish",
    icon: "fa-fish",
    image:
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=600&q=80",
    description: "Peaceful swimmers",
  },
  {
    name: "Turtles",
    icon: "fa-water",
    image:
      "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=600&q=80",
    description: "Calm little friends",
  },
];

const categoryContainer = document.getElementById("categories");

// Current selected category
window.currentCategory = "All";

// Update active category design
window.updateActiveCategory = function () {
  const activeCategory = window.currentCategory || "All";

  document.querySelectorAll(".category-btn").forEach((button) => {
    const isActive = button.dataset.category === activeCategory;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

// Display category cards
function displayCategories() {
  if (!categoryContainer) return;

  const allPetsCard = `
    <button
      type="button"
      class="category-btn active"
      data-category="All"
      aria-pressed="true"
    >
      <img
        class="category-image"
        src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=600&q=80"
        alt="Different pets"
        loading="lazy"
      />

      <div class="p-3">
        <div class="flex items-center gap-2">
          <span class="category-icon">
            <i class="fa-solid fa-paw"></i>
          </span>
          <span class="font-bold text-sm">All Pets</span>
        </div>

        <p class="text-xs text-gray-500 mt-2">Meet everyone</p>
      </div>
    </button>
  `;

  const categoryCards = categories
    .map((category) => {
      return `
      <button
        type="button"
        class="category-btn"
        data-category="${category.name}"
        aria-pressed="false"
      >
        <img
          class="category-image"
          src="${category.image}"
          alt="${category.name}"
          loading="lazy"
        />

        <div class="p-3">
          <div class="flex items-center gap-2">
            <span class="category-icon">
              <i class="fa-solid ${category.icon}"></i>
            </span>

            <span class="font-bold text-sm">
              ${category.name}
            </span>
          </div>

          <p class="text-xs text-gray-500 mt-2">
            ${category.description}
          </p>
        </div>
      </button>
    `;
    })
    .join("");

  categoryContainer.innerHTML = allPetsCard + categoryCards;

  // Category click events
  categoryContainer.querySelectorAll(".category-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCategory = button.dataset.category;

      window.currentCategory = selectedCategory;

      window.updateActiveCategory();

      // Call the filter function from img2.js
      window.filterPetsByCategory(selectedCategory);

      // Scroll to pet collection
      document.getElementById("pet-collection")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  window.updateActiveCategory();
}

// Initialize category section
displayCategories();
