
// ==========================================
// SAVORA AVENUE - RESTAURANT RESERVATION SITE
// ==========================================

// 1. MENU ITEMS
const menuItems = [

    // AFRICAN CUISINE
   {
    id: 1,
    name: "Cape Malay Bobotie",
    category: "African",
    description: "A traditional Cape Malay dish of gently spiced minced beef, baked beneath a golden savoury custard and served with fragrant yellow rice.",
    price: 145,
    image: "images/Cape Malay Bobotie.jpg"
},
{
    id: 2,
    name: "Mozambican Peri-Peri Prawns",
    category: "African",
    description: "Succulent prawns coated in a vibrant Mozambican peri-peri sauce, served with fragrant rice and seasonal accompaniments.",
    price: 195,
    image: "images/Mozambican Peri-Peri Prawns.jpg"
},
    {
        id: 3,
        name: "Beef Stew and Rice",
        category: "African",
        description: "A warm, home-style meal for a satisfying lunch.",
        price: 75,
        image: "images/beef stew with rice.jpg"
    },

    // ASIAN CUISINE
    {
        id: 4,
        name: "Japanese Chicken Teriyaki",
        category: "Asian",
        description: "Grilled chicken glazed with teriyaki sauce, served with rice.",
        price: 105,
        image: "images/Japan Chicken Teriyaki.jpg"
    },
    {
        id: 5,
        name: "Chinese Sweet and Sour Chicken",
        category: "Asian",
        description: "Crispy chicken coated in a delicious sweet and sour sauce.",
        price: 95,
        image: "images/sweet and sour chicken.jpg"
    },
    {
        id: 6,
        name: "Thai Pad Thai",
        category: "Asian",
        description: "Stir-fried noodles with vegetables, egg and a savoury Thai sauce.",
        price: 100,
        image: "images/Thai Pad Thai.jpg"
    },

    // MEXICAN CUISINE
    {
        id: 7,
        name: "Mexican Beef Tacos",
        category: "Mexican",
        description: "Soft tortillas filled with seasoned beef and fresh toppings.",
        price: 90,
        image: "images/tacoos.jpg"
    },
    {
        id: 8,
        name: "Chicken Quesadilla",
        category: "Mexican",
        description: "Grilled tortillas filled with tender chicken and melted cheese.",
        price: 85,
        image: "images/Chicken Quesadilla.jpg"
    },
    {
        id: 9,
        name: "Chicken Enchiladas",
        category: "Mexican",
        description: "Chicken-filled tortillas topped with a rich sauce and cheese.",
        price: 100,
        image: "images/Chicken Enchiladas.jpg"
    },

    // ITALIAN CUISINE
    {
        id: 10,
        name: "Margherita Pizza",
        category: "Italian",
        description: "Classic Italian pizza with tomato, mozzarella and fresh basil.",
        price: 100,
        image: "images/Margherita Pizza.jpg"
    },
    {
        id: 11,
        name: "Spaghetti Bolognese",
        category: "Italian",
        description: "Italian pasta served with rich beef and tomato sauce.",
        price: 105,
        image: "images/Spaghetti Bolognese.jpg"
    },
    {
        id: 12,
        name: "Creamy Chicken Alfredo",
        category: "Italian",
        description: "Pasta tossed in a creamy parmesan-style sauce with chicken.",
        price: 110,
        image: "images/Creamy Chicken Alfredo.jpg"
    },

    // CARIBBEAN CUISINE
    {
        id: 13,
        name: "Jamaican Jerk Chicken",
        category: "Caribbean",
        description: "Spiced grilled chicken served with traditional rice and peas.",
        price: 110,
        image: "images/Easy Jamaican Jerk Chicken.jpg"
    },
    {
        id: 14,
        name: "Trinidadian Chicken Roti",
        category: "Caribbean",
        description: "Soft flatbread filled with curried chicken and potatoes.",
        price: 100,
        image: "images/Trinidadian Chicken Roti.jpg"
    },
    {
        id: 15,
        name: "Jamaican Oxtail",
        category: "Caribbean",
        description: "Tender slow-cooked oxtail served with rice and peas.",
        price: 135,
        image: "images/Jamaican Oxtail.jpg"
    },

    // INTERNATIONAL DRINKS
    {
        id: 16,
        name: "Strawberry Lemonade",
        category: "Drinks",
        description: "A refreshing homemade lemonade with a sweet strawberry twist.",
        price: 35,
        image: "images/Strawberry Lemonade.jpg"
    },
    {
        id: 17,
        name: "Mango Lassi",
        category: "Drinks",
        description: "A creamy Indian-inspired drink made with mango and yoghurt.",
        price: 45,
        image: "images/Mango Lassi.jpg"
    },
    {
        id: 18,
        name: "Mexican Horchata",
        category: "Drinks",
        description: "A sweet, refreshing rice drink flavoured with cinnamon.",
        price: 40,
        image: "images/Mexican Horchata.jpg"
    },
    {
        id: 19,
        name: "Italian Iced Coffee",
        category: "Drinks",
        description: "Chilled coffee blended with milk for a refreshing treat.",
        price: 40,
        image: "images/Italian Iced Coffee.jpg"
    },
    {
        id: 20,
        name: "Chocolate Milkshake",
        category: "Drinks",
        description: "A thick, creamy chocolate milkshake served chilled.",
        price: 45,
        image: "images/Chocolate Milkshake.jpg"
    }
];

// ==========================================
// 2. MENU DISPLAY AND CUISINE FILTERS
// ==========================================

const menuGrid = document.getElementById("menu-grid");
const menuFilters = document.getElementById("menu-filters");

const categories = [
    "All",
    "African",
    "Asian",
    "Mexican",
    "Italian",
    "Caribbean",
    "Drinks"
];

// Create the filter buttons
categories.forEach(function (category) {

    const filterButton = document.createElement("button");

    filterButton.type = "button";
    filterButton.className = "filter-button";
    filterButton.textContent = category;
    filterButton.dataset.category = category;

    if (category === "All") {
        filterButton.classList.add("active");
        filterButton.setAttribute("aria-pressed", "true");
    } else {
        filterButton.setAttribute("aria-pressed", "false");
    }

    menuFilters.appendChild(filterButton);
});

// Display the menu items
function displayMenu(selectedCategory) {

    menuGrid.innerHTML = "";

    const filteredItems = selectedCategory === "All"
        ? menuItems
        : menuItems.filter(function (item) {
            return item.category === selectedCategory;
        });

    filteredItems.forEach(function (item) {

        const card = document.createElement("article");
        card.className = "menu-card";

        card.innerHTML = `
            <img
                class="menu-card-image"
                src="${item.image}"
                alt="${item.name}"
                loading="lazy"
            >

            <div class="menu-card-content">

                <span class="menu-category">
                    ${item.category}
                </span>

                <h3>${item.name}</h3>

                <p>${item.description}</p>

                <div class="menu-card-bottom">
                    <span class="price">
                        R${item.price.toFixed(2)}
                    </span>
                </div>

            </div>
        `;

        menuGrid.appendChild(card);
    });
}

// Handle filter button clicks
menuFilters.addEventListener("click", function (event) {

    const button = event.target.closest("[data-category]");

    if (!button) return;

    const selectedCategory = button.dataset.category;

    menuFilters.querySelectorAll(".filter-button").forEach(
        function (filterButton) {

            const active =
                filterButton.dataset.category === selectedCategory;

            filterButton.classList.toggle("active", active);
            filterButton.setAttribute("aria-pressed", active);
        }
    );

    displayMenu(selectedCategory);
});

// Display all menu items when the website opens
displayMenu("All");

// ==========================================
// 3. RESERVATION FORM
// ==========================================

const reservationForm = document.getElementById("reservation-form");

const reservationDate = document.getElementById("reservation-date");
const reservationTime = document.getElementById("reservation-time");
const guestCount = document.getElementById("guest-count");

const confirmation = document.getElementById(
    "reservation-confirmation"
);

const reservationAnimation = document.getElementById(
    "reservation-animation"
);

const reservationSubmit = document.getElementById(
    "reservation-submit"
);

// Use today's date as the earliest selectable date
function getToday() {

    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

reservationDate.min = getToday();

// ==========================================
// 4. DEMONSTRATION AVAILABILITY
// ==========================================

// This is a temporary browser-based demonstration.
// The final project should use the shared database.

const STORAGE_KEY = "savoraReservations";

// Demo capacity: 20 guests per time slot.
// Change this when your group confirms the restaurant capacity.
const SLOT_CAPACITY = 20;

// Get saved demonstration reservations
function getReservations() {

    try {

        const savedReservations = localStorage.getItem(STORAGE_KEY);

        return savedReservations
            ? JSON.parse(savedReservations)
            : [];

    } catch (error) {

        console.error("Could not read reservations:", error);

        return [];
    }
}

// Save demonstration reservations
function saveReservations(reservations) {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(reservations)
        );

        return true;

    } catch (error) {

        console.error("Could not save reservations:", error);

        return false;
    }
}

// Check the number of guests already booked
function checkAvailability(date, time, guests) {

    const reservations = getReservations();

    const bookedGuests = reservations
        .filter(function (reservation) {

            return reservation.date === date &&
                reservation.time === time;

        })
        .reduce(function (total, reservation) {

            return total + Number(reservation.guests);

        }, 0);

    return bookedGuests + guests <= SLOT_CAPACITY;
}

// Check that the selected time is not in the past
function isPastTime(date, time) {

    const selectedDateTime = new Date(date + "T" + time);
    const currentDateTime = new Date();

    return selectedDateTime <= currentDateTime;
}

// ==========================================
// 5. RESERVATION CONFIRMATION
// ==========================================

// Create a unique reservation reference
function createReservationReference() {

    return "SA-" + Date.now().toString().slice(-8);
}

// Display the successful reservation
function displayConfirmation(reservation) {

    confirmation.replaceChildren();

    const heading = document.createElement("h3");
    heading.textContent = "Your table is reserved!";

    const message = document.createElement("p");
    message.textContent =
        "Thank you for choosing Savora Avenue. We look forward to welcoming you.";

    const reference = document.createElement("p");
    reference.className = "reservation-reference";
    reference.textContent =
        "Reservation reference: " + reservation.reference;

    const customer = document.createElement("p");
    customer.textContent = "Name: " + reservation.name;

    const phone = document.createElement("p");
    phone.textContent = "Phone: " + reservation.phone;

    const email = document.createElement("p");
    email.textContent = "Email: " + reservation.email;

    const date = document.createElement("p");

    const formattedDate = new Date(
        reservation.date + "T00:00:00"
    ).toLocaleDateString("en-ZA", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    date.textContent = "Date: " + formattedDate;

    const time = document.createElement("p");
    time.textContent = "Dining time: " + reservation.time;

    const guests = document.createElement("p");
    guests.textContent = "Guests: " + reservation.guests;

    confirmation.append(
        heading,
        message,
        reference,
        customer,
        phone,
        email,
        date,
        time,
        guests
    );

    if (reservation.requests) {

        const requests = document.createElement("p");

        requests.textContent =
            "Special requests: " + reservation.requests;

        confirmation.appendChild(requests);
    }

    confirmation.hidden = false;

    confirmation.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

// ==========================================
// 6. HANDLE RESERVATION SUBMISSION
// ==========================================

reservationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (!reservationForm.reportValidity()) {
        return;
    }

    // Collect customer information
    const formData = new FormData(reservationForm);

    const customerName = formData.get("customerName").trim();
    const customerPhone = formData.get("customerPhone").trim();
    const customerEmail = formData.get("customerEmail").trim();

    const selectedDate = formData.get("reservationDate");
    const selectedTime = formData.get("reservationTime");

    const numberOfGuests = Number(formData.get("guestCount"));

    const specialRequests =
        (formData.get("specialRequests") || "").trim();

    // Prevent reservations for past dates or times
    if (selectedDate < getToday() ||
        isPastTime(selectedDate, selectedTime)) {

        alert("Please select a future reservation date and time.");

        return;
    }

    // Check whether enough seats are available
    if (!checkAvailability(
        selectedDate,
        selectedTime,
        numberOfGuests
    )) {

        alert(
            "Sorry, this time slot is fully booked in our demonstration. " +
            "Please choose another time."
        );

        return;
    }

    // Create a reservation record
    const reservation = {

        reference: createReservationReference(),

        name: customerName,

        phone: customerPhone,

        email: customerEmail,

        date: selectedDate,

        time: selectedTime,

        guests: numberOfGuests,

        requests: specialRequests
    };

    // Save the reservation
    const reservations = getReservations();

    reservations.push(reservation);

    if (!saveReservations(reservations)) {

        alert(
            "We could not save your reservation. " +
            "Please try again."
        );

        return;
    }

    // Prevent repeated submissions
    reservationSubmit.disabled = true;

    confirmation.hidden = true;

    reservationAnimation.hidden = false;

    // Show the reservation animation
    setTimeout(function () {

        reservationAnimation.hidden = true;

        displayConfirmation(reservation);

        reservationSubmit.disabled = false;

        reservationForm.reset();

        // Keep the date restriction after resetting the form
        reservationDate.min = getToday();

    }, 1500);

});

// ==========================================
// 7. FOOTER YEAR
// ==========================================

document.getElementById("year").textContent =
    new Date().getFullYear();

// ==========================================
// END OF SAVORA AVENUE JAVASCRIPT
// ==========================================

// ===================================
// SCROLL REVEAL ANIMATIONS
// ===================================

const revealElements = document.querySelectorAll(
    ".story, .menu-section, .reservation-section, .contact-section, .experience-strip"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            revealObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});