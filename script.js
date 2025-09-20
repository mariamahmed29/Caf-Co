document.addEventListener('DOMContentLoaded', () => {
    // opaen and close navbar menu
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav");
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

        const menuData = [
        // ☕ Coffee
        { category: "coffee", img: "./images/coffee1.png", name: "Espresso", desc: "Strong & bold shot", price: "$2.5" },
        { category: "coffee", img: "./images/coffee2.png", name: "Latte", desc: "Smooth & creamy", price: "$3.5" },
        { category: "coffee", img: "./images/coffee3.png", name: "Cappuccino", desc: "Rich foam top", price: "$3.0" },

        // 🍵 Tea
        { category: "tea", img: "./images/tea1.png", name: "Ice Tea", desc: "Fresh & light", price: "$2.0" },
        { category: "tea", img: "./images/tea2.png", name: "Black Tea", desc: "Classic flavor", price: "$1.8" },
        { category: "tea", img: "./images/tea3.png", name: "boba Tea", desc: "Relaxing blend", price: "$2.2" },

        // 🧃 Juice
        { category: "juice", img: "./images/juice1.png", name: "Mango Juice", desc: "Fresh squeezed", price: "$2.8" },
        { category: "juice", img: "./images/juice2.png", name: "Cocktail juice", desc: "Crisp & sweet", price: "$2.5" },
        { category: "juice", img: "./images/juice3.png", name: "lemon Juice", desc: "Tropical taste", price: "$3.0" },

        // 🍰 Dessert
        { category: "dessert", img: "./images/dessert1.png", name: "Cheesecake", desc: "Creamy & rich", price: "$4.5" },
        { category: "dessert", img: "./images/dessert2.png", name: "pancake", desc: "Chocolate lover’s dream", price: "$3.5" },
        { category: "dessert", img: "./images/dessert3.png", name: "waffel", desc: "Italian delight", price: "$4.0" },

        // 🍦 Ice Cream
        { category: "ice-cream", img: "./images/icecream1.png", name: "Vanilla", desc: "Classic & smooth", price: "$2.0" },
        { category: "ice-cream", img: "./images/icecream2.png", name: "Chocolate", desc: "Rich flavor", price: "$2.2" },
        { category: "ice-cream", img: "./images/icecream3.png", name: "Strawberry", desc: "Fresh & sweet", price: "$2.3" },
    ];

    const menuContainer = document.getElementById("menuItems");

    function renderMenu(filter = "all") {
        menuContainer.innerHTML = "";
        menuData
        .filter(item => filter === "all" || item.category === filter)
        .forEach(item => {
            menuContainer.innerHTML += `
            <div class="item" data-category="${item.category}">
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                <span>${item.price}</span>
            </div>
            `;
        });
    }
    renderMenu();

    document.querySelectorAll(".menu-filters button").forEach(btn => {
        btn.addEventListener("click", () => {
        renderMenu(btn.dataset.filter);
        });
    });
});
