"use strict";

let menu = {
    drinks : [
    "Water", "Tea", "Sweet Tea",
    "Coke", "Dr. Pepper", "Sprite"
    ],
    entrees : [
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
    "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
    "Veggie Plate"
    ],
    desserts: [
    "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
    };

    //select the category dropdown and list box element

    const categoryDropdown = document.getElementById("category");
    const listBox = document.getElementById("items");

    //function to update the list box based on the selected category

    function updateListBox() {
        const selectedCategory = categoryDropdown.value;

    // clear existing item in the listbox
        listBox.innerHTML = "";

        //get items for the selected category
        const items = menu[selectedCategory];

        //loop through the items and create the option elements
        items.forEach(item => {
            const option = document.createElement("option");
            option.textContent = item;
            listBox.appendChild(option);
        });

    }
    categoryDropdown.addEventListener("change", updateListBox);

    // initialize

    updateListBox();