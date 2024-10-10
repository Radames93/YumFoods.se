$(function () {
  "use strict";

  //======menu fix js======
  var navoff = $(".main_menu").offset().top;
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > navoff) {
      $(".main_menu").addClass("menu_fix");
    } else {
      $(".main_menu").removeClass("menu_fix");
    }
  });
  //=========NICE SELECT=========
  $(".select_js").niceSelect();

  //=======OFFER ITEM SLIDER======

  //*==========ISOTOPE==============
  var $grid = $(".grid").isotope({});

  $(".menu_filter").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({
      filter: filterValue,
    });
  });

  //active class
  $(".menu_filter button").on("click", function (event) {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
    event.preventDefault();
  });

  //=======COUNTER JS=======
  $(".counter").countUp();
  //*=======SCROLL BUTTON=======
  $(".scroll_btn").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      300
    );
  });

  $(window).on("scroll", function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 500) {
      $(".scroll_btn").fadeIn();
    } else {
      $(".scroll_btn").fadeOut();
    }
  });

  //======= VENOBOX.JS.=========
  $(".venobox").venobox();

  //*========STICKY SIDEBAR=======
  $("#sticky_sidebar").stickit({
    top: 10,
  });

  //======wow js=======
  new WOW().init();

  //=======PRODUCT DETAILS SLIDER======
  if ($("#exzoom").length > 0) {
    $("#exzoom").exzoom({
      autoPlay: true,
    });
  }

  //=======SMALL DEVICE MENU ICON======
  $(".navbar-toggler").on("click", function () {
    $(".navbar-toggler").toggleClass("show");
  });
});

//make header and footer reusable in different html pages
function Header() {
  let header = document.getElementById("header");

  header.innerHTML = `
  <nav class="navbar navbar-expland-lg main_menu">
      <div class="container">
        <div class="navbar-left">
          <!--logo info-->
          <a class="navbar-brand" href="/">
            <img rel="preload" as="image" src="images/logo.png" alt="logo" class="img-fluid logo" />
          </a>

        <!-- language button-->
        <div class="langBtn">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="#" onclick="myFunction()" class="dropbtn" >
                <span class="icone"> <i class="fa fa-globe"></i> </span>
                <span id="current-lang">SV</span>
                <span class="icone"> <i class="fa fa-angle-down" ></i></span>
              </a>
              <ul class="droap_menu">
                <li><a href="#">Swedish</a></li>
                <li><a href="#">English</a></li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- company button -->
        <div class="companyBtn">
          <button class="company" onclick="window.location.href='contact.html'"> För företag </button>
        </div>
      </div>

      <div class="navbar-left">
        <!--login button-->
        <div class="loginBtn">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="#" class="dropbtn">
                <i class="far fa-user"></i> Logga in
              </a>
              <ul class="droap_menu">
                <li><a href="sign_in.html">Login</a></li>
                <li><a href="sign_up.html">Register</a></li>
              </ul>
            </li>
          </ul>
        </div>

        <ul>
        <!--
          <li>
                <a href="sign_in.html"><i class="fas fa-user"></i></a>
          </li>
          -->
        <li>
          <a class="cart" href="cart_view.html"
            ><i class="fas fa-shopping-basket"></i> <span id="count"></span
          ></a>
        </li>
        </ul>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars menu_icon_bar"></i>
          <i class="fa fa-times close_icon_close"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#"
                >Meny <i class="fa fa-angle-down"></i
              ></a>
              <ul class="droap_menu">
                <!--<li><a href="baguette_menu.html">Baguetter</a></li>-->
                <!-- <li><a href="bamba_menu.html">Bamba-rätter</a></li>-->
                <li><a href="yum_menu.html">Yum</a></li>
              <li><a href="daily_menu.html">Dagens</a></li>
                <li><a href="premium_menu.html">Premium</a></li>
              </ul>
            </li>
            <!--
            <li class="nav-item">
              <a class="nav-link" href="#"
                >Våra tjänster <i class="fa fa-angle-down"></i
              ></a>
              <ul class="droap_menu">
                <li><a href="office.html">Kontor</a></li>
                <li><a href="private.html">Privat</a></li>
                <li><a href="events.html">Evenemang</a></li>
              </ul>
            </li>
            --
              <li class="nav-item">
                <a class="nav-link" href="subscription.html">Prenumerationer</a>
              </li>
              -->
            <li class="nav-item">
              <a class="nav-link" href="about.html">Om oss</a>
            </li>
            <!--
              <li class="nav-item">
                <a class="nav-link" href="blogs.html">Blog/Podcast</a>
              </li>
              -->
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Kontakta oss</a>
            </li>
          </ul>
          </div>
        </div>
      </div>
  </nav>
    `;
}

Header();

// js for language button in navbar
function setLanguage(lang) {
  document.getElementById("current-lang").textContent = lang.toUpperCase();
  var elements = document.querySelectorAll("[data-lang-en]");
  elements.forEach(function (element) {
    if (lang === "en") {
      element.textContent = element.getAttribute("data-lang-en");
    } else if (lang === "sv") {
      element.textContent = element.getAttribute("data-lang-sv");
    }
  });
  closeDropdown();
}
function closeDropdown() {
  document.getElementById("dropdown-content").classList.remove("show");
}
function toggleDropdown() {
  document.getElementById("dropdown-content").classList.toggle("show");

  document.getElementById("current-lang").textContent = lang.toUpperCase();
  var elements = document.querySelectorAll("[data-lang-en]");
  elements.forEach(function (element) {
    if (lang === "en") {
      element.textContent = element.getAttribute("data-lang-en");
    } else if (lang === "sv") {
      element.textContent = element.getAttribute("data-lang-sv");
    }
  });
  closeDropdown();
}
function closeDropdown() {
  document.getElementById("dropdown-content").classList.remove("show");
}
function toggleDropdown() {
  document.getElementById("dropdown-content").classList.toggle("show");
}

function navigateToMenuPage() {
  window.location.href = "/yum_menu.html";
}

// SIGN UP - Funktion för att visa rätt formulär beroende på kontotyp
function toggleAccountType(isPersonal) {
  document.getElementById("personalForm").style.display = isPersonal ? "block" : "none";
  document.getElementById("businessForm").style.display = isPersonal ? "none" : "block";
}

function saveUserData() {
  const accountType = document.getElementById("personalForm").style.display === "block" ? "personal" : "business";
  const userData = {};

  userData.email = document.getElementById("field2").value.trim();
  userData.lösenord = document.getElementById("field3").value.trim();
  const upprepaLösenord = document.getElementById("field4").value.trim();
  userData.gatuadress = document.getElementById("field5").value.trim();
  userData.postnummer = document.getElementById("postnummer").value.trim();
  userData.ort = document.getElementById("ort").value.trim();
  const termsAccepted = document.getElementById("terms1").checked;

  // Validering 
  if (!userData.email || !userData.lösenord || !upprepaLösenord || !userData.gatuadress || !userData.postnummer || !userData.ort) {
      alert("Alla fält måste fyllas i!");
      return false;
  }

  if (userData.lösenord !== upprepaLösenord) {
      alert("Lösenorden matchar inte!");
      return false;
  }

  if (!termsAccepted) {
      alert("Du måste acceptera Användarvillkor och Integritetspolicy för att fortsätta.");
      return false;
  }

  if (accountType === "personal") {
      userData.kontoTyp = "personal";
      userData.förnamn = document.getElementById("field1").value.trim();
  } else if (accountType === "business") {
      userData.kontoTyp = "business";
      userData.företagsnamn = document.getElementById("businessName").value.trim();
      userData.orgNummer = document.getElementById("orgNumber").value.trim();
      userData.kontaktperson = document.getElementById("contactName").value.trim();
  }

  // Spara användardata i localStorage
  localStorage.setItem("userData", JSON.stringify(userData));
  alert(accountType === "personal" ? "Dina personliga uppgifter har sparats!" : "Dina företagsuppgifter har sparats!");
  return true;
}

// Event listeners för att växla mellan kontotyper
document.addEventListener("DOMContentLoaded", function() {
  const btnPersonal = document.getElementById("btnPersonal");
  const btnBusiness = document.getElementById("btnBusiness");
  
  if (btnPersonal) {
    btnPersonal.addEventListener("click", function() {
      toggleAccountType(true);
      document.getElementById("accountTitle").textContent = "Skapa konto";
    });
  }

  if (btnBusiness) {
    btnBusiness.addEventListener("click", function() {
      toggleAccountType(false);
      document.getElementById("accountTitle").textContent = "Skapa företagskonto";
    });
  }
});

//LOGIN SIDA
function validateLogin(event) {
  event.preventDefault(); 

  const email = document.getElementById('email-login').value.trim();
  const password = document.getElementById('password-login').value.trim();
  const savedUserData = JSON.parse(localStorage.getItem('userData'));

  if (!savedUserData) {
      alert('Det finns ingen registrerad användare. Vänligen skapa ett konto.');
      return;
  }

  if (!email || !password) {
      alert('Vänligen fyll i alla fält.');
      return;
  }

  if (email === savedUserData.email && password === savedUserData.lösenord) {
      if (document.getElementById('rememberMe').checked) {
          localStorage.setItem('rememberedUser', JSON.stringify({ email: email, lösenord: password }));
      } else {
          localStorage.removeItem('rememberedUser');
      }

      window.location.href = 'dashboard.html';
  } else {
      alert('Fel e-postadress eller lösenord.');
  }
}

// Event listener för inloggningsformuläret
let loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', validateLogin);
}

// FORGOT PASSWORD IN SIGN IN SIDA
function showForgotPassword() {
  document.getElementById('loginBox').style.display = 'none';
  document.getElementById('forgotPasswordBox').style.display = 'block';
}

function showLogin() {
  document.getElementById('forgotPasswordBox').style.display = 'none';
  document.getElementById('loginBox').style.display = 'block';
}


// secound part of start page
const infoBox = document.querySelector(".info-box");
if (infoBox !== null) {
  infoBox.style.display = "none";
}
const close = document.querySelector(".close");
if (close !== null) {
  close.addEventListener("click", function () {
    infoBox.style.display = "none";
  });
}
let selectedCategory = null;
let selectedQuantity = 10;
// categori boxes
const dietBoxes = document.querySelectorAll(".box2");
const chooseDietBox = dietBoxes.forEach((box, index) => {
  box.addEventListener("click", function () {
    this.classList.add("selected");
    this.classList.add("selected-border");
    dietBoxes.forEach((b) => {
      if ((b.hasClass = "selected")) {
        b.classList.remove("selected");
        b.classList.remove("selected-border");
      } else {
        b.classList.add("selected");
        b.classList.add("selected-border");
      }
    });
  });
});
// quantity boxes
const antalBoxes = document.querySelectorAll(".box4");
const chooseAntalbox = antalBoxes.forEach((box, index) => {
  box.addEventListener("click", function () {
    this.classList.add("selected");
    this.classList.toggle("selected-border");
    infoBox.style.display = "block";
    antalBoxes.forEach((b) => {
      if ((b.hasClass = "selected")) {
        b.classList.remove("selected");
        b.classList.remove("selected-border");
      } else {
        b.classList.add("selected");
        b.classList.add("selected-border");
      }
    });
  });
});
//handle click on quantity buttons
document.addEventListener("DOMContentLoaded", function () {
  const quantitySpan = document.querySelector(".quantity-btn span");
  const increaseButton = document.querySelector(
    ".quantity-btn button:nth-of-type(2)"
  );
  const decreaseButton = document.querySelector(
    ".quantity-btn button:nth-of-type(1)"
  );
  const infoBox = document.querySelector(".info-box");
  if (quantitySpan !== null){
  let currentQuantity = parseInt(quantitySpan.textContent, 10);
  function updateQuantity(newQuantity) {
    if (newQuantity >= 10 && newQuantity <= 20) {
      currentQuantity = newQuantity;
      quantitySpan.textContent = currentQuantity;
      updateBox4Selection();
      updateTotalPrice();
    }
  }
}
  // update quantity boxes
  function updateBox4Selection() {
    document.querySelectorAll(".box4").forEach((box) => {
      const boxValue = parseInt(box.getAttribute("data-value"), 10);
      if (boxValue === currentQuantity) {
        box.classList.add("selected", "selected-border");
      } else {
        box.classList.remove("selected", "selected-border");
      }
    });
    infoBox.style.display = "block";
  }
  // update categorie boxes
  const boxes2 = document.querySelectorAll(".box2");
  function updateBoxSelection(currentCategory) {
    boxes2.forEach((box) => {
      const boxValue = box.getAttribute("data-category");
      console.log(boxValue);
      if (boxValue === currentCategory) {
        box.classList.add("selected");
        box.classList.add("selected-border");
      } else {
        box.classList.remove("selected");
        box.classList.remove("selected-border");
      }
    });
  }
  const boxes4 = document.querySelectorAll(".box4");
  boxes2.forEach((box) => {
    box.addEventListener("click", () => {
      const currentCategory = box.getAttribute("data-category");
      updateBoxSelection(currentCategory);
      boxes4.forEach((box4) => {
        box4.addEventListener("click", () => {
          const currentQuantity = parseInt(box4.getAttribute("data-value"), 10);
          updateBox4Selection(currentQuantity);
        });
      });
    });
  });
  // currentQuantity, increase , decrease
  document.querySelectorAll(".row .box").forEach((box) => {
    box.addEventListener("click", function () {
      const boxValue = parseInt(this.textContent, 10);
      updateQuantity(boxValue);
    });
  });
  if (increaseButton !== null){
  increaseButton.addEventListener("click", function () {
    updateQuantity(currentQuantity + 5);
  });
}
if (decreaseButton !== null){
  decreaseButton.addEventListener("click", function () {
    updateQuantity(currentQuantity - 5);
  });
}
});
//Display vegetarian Alternatives
const vegetarianAlternatives = () => {
  const dishList = document.getElementById("dish-list");
  dishList.innerHTML = "";
  let htmlString = "";
  yumProductsList.map((veg) => {
    veg.diet.map((veggie) => {
      if (veggie === "images/icons/vegetarian.png") {
        const cleanTitle = veg.title.replace(/^'(.*)'$/, "$1").trim();
        console.log(veg.title);
        htmlString += `<li> ${cleanTitle}- <span class="pricedetail">${veg.price} kr</span></li>`;
      }
    });
  });
  dishList.innerHTML += htmlString;
};
const updateDishList = () => {
  vegetarianAlternatives();
};
// total price
function calculateTotalPrice(quantity) {
  const vegetarianProducts = yumProductsList.filter((product) =>
    product.diet.includes("images/icons/vegetarian.png")
  );
  const totalPrice = vegetarianProducts.reduce(
    (sum, product) => sum + product.price * quantity,
    0
  );
  return totalPrice;
}
function updateTotalPrice() {
  const quantity = parseInt(
    document.querySelector(".quantity-btn span").textContent,
    10
  );
  const totalPrice = calculateTotalPrice(quantity);
  const totalPriceElement = document.querySelector(".col-5.price");
  totalPriceElement.innerHTML = `<p>${totalPrice} kr</p>`;
}
//end of secound part

// fixed media query
// function updateMargin() {
//     const infoBox = document.querySelector('.info-box');
//     const rightPart = document.querySelector('.right-part');

//     if (window.getComputedStyle(infoBox).display === 'none') {
//       if (window.matchMedia("(min-width: 768px) and (max-width: 991.99px)").matches) {
//         rightPart.style.marginTop = '-200px';
//       } else {
//         rightPart.style.marginTop = '';
//       }
//   }
// }

//Get elements from the DOM
let summary = document.getElementById("cost_summary");
let yum = document.getElementById("yum");
let daily = document.getElementById("daily");
let premium = document.getElementById("premium");
let subscriptions = document.getElementById("subscription");
let categories = document.getElementById("categories");
let services = document.getElementById("services");
let baguetter = document.getElementById("baguetter");
let popup = document.getElementById("popup");
const searchBar = document.getElementById("searchbar");
let cartItem = document.getElementById("cart-item");
let option3Checked = document.getElementById("payment3isChecked");
let yumSearchMessage = document.getElementById("search-yum-message");
let dailySearchMessage = document.getElementById("search-daily-message");
let premiumSearchMessage = document.getElementById("search-premium-message");
let baguetterSearchMessage = document.getElementById(
  "search-baguetter-message"
);
let yumFilterMessage = document.getElementById("filter-yum-message");
let dailyFilterMessage = document.getElementById("filter-daily-message");
let premiumFilterMessage = document.getElementById("filter-premium-message");
let baguetterFilterMessage = document.getElementById(
  "filter-baguetter-message"
);

//Create empty array to populate with products
let yumProductsList = [];
let dailyProductsList = [];
let premiumProductsList = [];
let subscriptionsProductsList = [];
let categoriesProductsList = [];
let baguetterProductsList = [];
let offeredServicesList = [];
let yumFiltered = [];
let dailyFiltered = [];
let premiumFiltered = [];
let subscriptionsFiltered = [];
let baguetterFiltered = [];
let all = [];

//Create a function to enable text field if appropriate radio button is checked
function ifChecked() {
  // option3Checked.getElementById("payment3isChecked");
  // checks to see if the radio button is checked or not, if checked true, if not false
  // also make sure it exists to prevent missing values (null) in other pages
  if (option3Checked) {
    const isChecked = option3Checked.checked;
    // set the disabled attribute to false should the button be checked
    document.getElementById("cardNumber").disabled = !isChecked;
    document.getElementById("expiration").disabled = !isChecked;
    document.getElementById("cvc").disabled = !isChecked;
  }
  isChanged();
}
// Run the function on "change" on each radio button, checking to see if the payment option 3 is picked or not
function isChanged() {
  if (option3Checked) {
    document.getElementById("payment1").addEventListener("change", ifChecked);
    document.getElementById("payment2").addEventListener("change", ifChecked);
    document
      .getElementById("payment3isChecked")
      .addEventListener("change", ifChecked);
    document.getElementById("payment4").addEventListener("change", ifChecked);
  }
}
ifChecked();

// Implement search bar function
const search = () => {
  searchBar.addEventListener("keyup", (e) => {
    let searchMessage = document.getElementById("search-message");
    const searchString = e.target.value.toLowerCase();
    const filteredYumProducts = yumProductsList.filter((product) => {
      return product.title.toLowerCase().includes(searchString);
    });
    yumProducts(filteredYumProducts);

    const filteredDailyProducts = dailyProductsList.filter((product) => {
      return product.title.toLowerCase().includes(searchString);
    });
    dailyProducts(filteredDailyProducts);

    const filteredPremiumProducts = premiumProductsList.filter((product) => {
      return product.title.toLowerCase().includes(searchString);
    });
    premiumProducts(filteredPremiumProducts);

    const filteredSubscriptions = subscriptionsProductsList.filter(
      (product) => {
        return product.title.toLowerCase().includes(searchString);
      }
    );
    subscriptionsProducts(filteredSubscriptions);
    const filteredBaguetter = baguetterProductsList.filter((product) => {
      return product.title.toLowerCase().includes(searchString);
    });
    baguetterProducts(filteredBaguetter);
    if (yum && yum.innerHTML === "") {
      yumSearchMessage.classList.remove("hide");
      yumSearchMessage.classList.add("show");
    }
    if (daily && daily.innerHTML === "") {
      dailySearchMessage.classList.remove("hide");
      dailySearchMessage.classList.add("show");
    }
    if (premium && premium.innerHTML === "") {
      premiumSearchMessage.classList.remove("hide");
      premiumSearchMessage.classList.add("show");
    }
    if (baguetter && baguetter.innerHTML === "") {
      baguetterSearchMessage.classList.remove("hide");
      baguetterSearchMessage.classList.add("show");
    }
  });
};
if (searchBar !== null) {
  searchBar.addEventListener("input", search);
} else {
  removeEventListener("keyup", search);
}

//Fetch items from database
const loadProducts = async () => {
    try {
        const API_KEY = variables();
        // Fetch the products from the API
        const response = await fetch(`https://localhost:7216/products`);

      const data = await response.json();
    
    // Check if the response is OK (status code in the 200-299 range)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the response data as JSON
      const allProducts = data;

    // Filter the products into different categories
    const yumProductsList = allProducts.filter((product) => product.category === "Yum");
    const dailyProductsList = allProducts.filter((product) => product.category === "Dagens");
    const premiumProductsList = allProducts.filter((product) => product.category === "Premium");
    const subscriptionsProductsList = allProducts.filter((product) => product.category === "Subscriptions");
    const baguetterProductsList = allProducts.filter((product) => product.category === "Baguetter");

    // Further filtering or categorization
    const yumFiltered = yumProductsList;
    const dailyFiltered = dailyProductsList;
    const premiumFiltered = premiumProductsList;
    const subscriptionsFiltered = subscriptionsProductsList;
    const baguetterFiltered = baguetterProductsList;

    // Combine all categories into one list
    const all = [
      ...yumProductsList,
      ...dailyProductsList,
      ...premiumProductsList,
      ...subscriptionsProductsList,
      ...baguetterProductsList,
    ];

    // Pass the lists to UI functions
    yumProducts(yumProductsList);
    dailyProducts(dailyProductsList);
    premiumProducts(premiumProductsList);
    subscriptionsProducts(subscriptionsProductsList);
    baguetterProducts(baguetterProductsList);
    CarouselFoodBoxes(yumProductsList);
    CarouselFoodBoxes2(yumProductsList);
    CarouselDietButtons(yumProductsList);

  } catch (err) {
    // Handle errors gracefully
    console.error("Error fetching products:", err);
  }
};

// Call the function to load the products
loadProducts();


//Display yum items
const yumProducts = (yumProductsList) => {
  if (yum !== null) {
    const htmlString = yumProductsList
      .map((yum) => {
        let title = JSON.stringify(yum.title);
        let description = JSON.stringify(yum.description);
        let ingredients = JSON.stringify(yum.ingredients);
        return (
          `

          <div
          class="wow fadeInUp "
          data-wow-duration="1s"
                      >
        <div class="menu_item yum_product_display_item"
                style="border: 1px solid var(--Stroke, #CED3D2); box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); width:364px; height:330px; border-radius:12px;"
                 >

                <div class="yum_item_buttons d-flex flex-column align-items-center">
                  <button
                  data-id=` +
          yum.id +
          `
                  data-yum-id=${yum.id}
                  data-yum-title=${title}
                  data-yum-price=${yum.price}
                  data-yum-img=${yum.imgRef}
                  data-yum-quantity-price=${yum.price}
                  data-yum-description=${description}
                  data-yum-diet=${yum.dietRef}
                  onclick='realAddToCart(event); openSidebar();'
                  class="yum_btn"
                  style="border-radius: 12px;
                  padding: 18px 16px;
                  border: 1px solid white;
                  color: white;
                  background: var(--Complementary-color, #DD3902);"><i class="fas fa-shopping-basket"></i>Lägg i varukorg</button>

                  <button
                    data-yum-id=${yum.id}
                    data-yum-title=${title}
                    data-yum-price=${yum.price}
                    data-yum-img=${yum.imgRef}
                    data-yum-quantity-price=${yum.price}
                    data-yum-description=${description}
                    data-yum-ingredients=${ingredients}
                    data-yum-diet=${yum.dietRef}
                    data-bs-toggle="modal"
                    data-bs-target="#modal"
                  class="yum_btn aboutYumItem"
                  style="border-radius: 12px;
                  padding: 13px 7px;
                  border: 1px solid black;">Läs mer om produkten</button>
                </div>

                <div class="backOpacity">
                <div class="menu_item_img" style="border-bottom:solid 1px grey;">
                  <img
                    src=` +
          yum.imgRef +
          `
                    alt="yum-meny-bild"
                    class="img-fluid w-100"
                    class="title"
                    href="#"
                  />
                </div>
                <div class="d-flex justify-content-between align-items-center">

            </div>

                <div class="menu_item_text m-4">
                  <a
                    class="title"
                    href="#"
                    data-yum-id=${yum.id}
                    data-yum-title=${title}
                    data-yum-price=${yum.price}
                    data-yum-img=${yum.imgRef}
                    data-yum-quantity-price=${yum.price}
                    data-yum-description=${description}
                    data-yum-ingredients=${ingredients}
                    data-yum-diet=${yum.dietRef}
                    data-bs-toggle="modal"
                    data-bs-target="#modal"
                    >` +
          yum.title +
          `</a>
                  <div class="d-flex justify-content-between">
                            <h5 class="price">` +
          yum.price +
          `kr</h5>
                            <img src=` +
          yum.dietRef +
          `
                            alt="dagens-meny-bild"
                            class="img-fluid diet_img"
                            href="#"/>
                    </div>
            <!--
            <ul class="d-flex flex-wrap justify-content-end">
                    <li>
                      <a href="#"><i class="fa fa-heart"></i></a>
                    </li>
                    <li>
                      <a href="menu_details.html"><i class="fa fa-eye"></i></a>
                    </li>
                  </ul>
                  -->

                </div>

                </div>

          </div>
        </div>

        `

          /////////////////////////////// Backup start /////////////////////////////

          // `<div
          //   class="col-xl-4 col-sm-6 col-lg-4 wow fadeInUp "
          //   data-wow-duration="1s"
          //               >
          // <div class="menu_item"
          //         data-yum-id=${yum.id}
          //         data-yum-title=${title}
          //         data-yum-price=${yum.price}
          //         data-yum-img=${yum.imgRef}
          //         data-yum-quantity-price=${yum.price}
          //         data-yum-description=${description}
          //         data-yum-ingredients=${ingredients}
          //         data-yum-diet=${yum.dietRef}
          //         data-bs-toggle="modal"
          //         data-bs-target="#modal">
          //     <div class="menu_item_img">
          //       <img
          //         src=` +
          // yum.imgRef +
          // `
          //         alt="yum-meny-bild"
          //         class="img-fluid w-100"
          //         class="title"
          //         href="#"
          //       />
          //     </div>
          //     <div class="d-flex justify-content-between align-items-center">
          //     <div class="d-flex"><img
          //         src=` +
          // yum.dietRef +
          // `
          //         alt="dagens-meny-bild"
          //         class="img-fluid w-100 diet_img"
          //         href="#"

          //       /></div>
          //       <a class="category" href="#">` +
          // yum.category +
          // `</a>
          // </div>
          //     <div class="menu_item_text">
          //       <a
          //         class="title"
          //         href="#"
          //         data-yum-id=${yum.id}
          //         data-yum-title=${title}
          //         data-yum-price=${yum.price}
          //         data-yum-img=${yum.imgRef}
          //         data-yum-quantity-price=${yum.price}
          //         data-yum-description=${description}
          //         data-yum-ingredients=${ingredients}
          //         data-yum-diet=${yum.dietRef}
          //         data-bs-toggle="modal"
          //         data-bs-target="#modal"
          //         >` +
          // yum.title +
          // `</a
          //       >
          //       <h5 class="price">` +
          // yum.price +
          // `kr</h5>
          // <!--
          // <ul class="d-flex flex-wrap justify-content-end">
          //         <li>
          //           <a href="#"><i class="fa fa-heart"></i></a>
          //         </li>
          //         <li>
          //           <a href="menu_details.html"><i class="fa fa-eye"></i></a>
          //         </li>
          //       </ul>
          //       -->
          //     </div>
          //   </div>
          //   ` +
          // "<button id='cart-button' class='menu_add_to_cart' data-id=" +
          // yum.id +
          // `
          // data-yum-id=${yum.id}
          // data-yum-title=${title}
          // data-yum-price=${yum.price}
          // data-yum-img=${yum.imgRef}
          // data-yum-quantity-price=${yum.price}
          // data-yum-description=${description}
          // data-yum-diet=${yum.dietRef}
          // ` +
          // ") onclick='realAddToCart(event)''>Lägg till <i class='fas fa-cart-plus' ></i></button>" +
          // `
          // </div>`

          /////////////////////////////// Backup end /////////////////////////////
        );
      })
      .join("");
    yum.innerHTML = htmlString;
  } else {
    return null;
  }
};

const carouselContainer = document.getElementById("container");
const carouselContainer2 = document.getElementById("container2");
const carouselDietButtons = document.getElementById("dietButtons")

const CarouselFoodBoxes = (yumProductsList) => {
  if (carouselContainer !== null) {
    const htmlString = yumProductsList
      .map((yum) => {
        let title = JSON.stringify(yum.title);
        let description = JSON.stringify(yum.description);
        let ingredients = JSON.stringify(yum.ingredients);
        return (
          `
          <div class="swiper-slide">
            <div class="menu_item_slider"
                data-yum-id=${yum.id}
                data-yum-title=${title}
                data-yum-price=${yum.price}
                data-yum-img=${yum.imgRef}
                data-yum-quantity-price=${yum.price}
                data-yum-description=${description}
                data-yum-ingredients=${ingredients}
                data-yum-diet=${yum.dietRef}
                data-bs-toggle="modal"
                data-bs-target="#modal">

              <div class="menu_item_slider_img">
                <img
                  src=` +
          yum.imgRef +
          `
                  alt="yum-meny-bild"
                  class="img-fluid w-100"
                />
              </div>

              <div class="menu_item_slider_text">
                <a
                  class="title"
                  href="#"
                  data-yum-id=${yum.id}
                  data-yum-title=${title}
                  data-yum-price=${yum.price}
                  data-yum-img=${yum.imgRef}
                  data-yum-quantity-price=${yum.price}
                  data-yum-description=${description}
                  data-yum-ingredients=${ingredients}
                  data-yum-diet=${yum.dietRef}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >` +
          yum.title.replace(/'/g, "") +
          `</a>
                <p class="description">In the new era of technology we look in the future with certainty and pride for our life.</p>
                <h5 class="price">` +
          yum.price +
          ` kr</h5>
              </div>
            </div>
            <button id='cart-button' class='menu_add_to_cart' data-id=` +
          yum.id +
          `
              data-yum-id=${yum.id}
              data-yum-title=${title}
              data-yum-price=${yum.price}
              data-yum-img=${yum.imgRef}
              data-yum-quantity-price=${yum.price}
              data-yum-description=${description}
              data-yum-diet=${yum.dietRef}
              onclick='realAddToCart(event)'><i class='fas fa-cart-plus'></i> Lägg i varukorg
            </button>
          </div>
        `
        );
      })
      .join("");
    carouselContainer.insertAdjacentHTML("afterbegin", htmlString);
  } else {
    return null;
  }
};

const CarouselFoodBoxes2 = (yumProductsList) => {
  if (carouselContainer2 !== null) {
    const htmlString = yumProductsList
      .map((yum) => {
        let title = JSON.stringify(yum.title);
        let description = JSON.stringify(yum.description);
        let ingredients = JSON.stringify(yum.ingredients);
        return (
          `
          <div class="swiper-slide">
            <div class="menu_item_slider"
                data-yum-id=${yum.id}
                data-yum-title=${title}
                data-yum-price=${yum.price}
                data-yum-img=${yum.imgRef}
                data-yum-quantity-price=${yum.price}
                data-yum-description=${description}
                data-yum-ingredients=${ingredients}
                data-yum-diet=${yum.dietRef}
                data-bs-toggle="modal"
                data-bs-target="#modal">

              <div class="menu_item_slider_img">
                <img
                  src=` +
          yum.imgRef +
          `
                  alt="yum-meny-bild"
                  class="img-fluid w-100"
                />
              </div>

              <div class="menu_item_slider_text">
                <a
                  class="title"
                  href="#"
                  data-yum-id=${yum.id}
                  data-yum-title=${title}
                  data-yum-price=${yum.price}
                  data-yum-img=${yum.imgRef}
                  data-yum-quantity-price=${yum.price}
                  data-yum-description=${description}
                  data-yum-ingredients=${ingredients}
                  data-yum-diet=${yum.dietRef}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >` +
          yum.title.replace(/'/g, "") +
          `</a>
                <p class="description">In the new era of technology we look in the future with certainty and pride for our life.</p>
                <h5 class="price">` +
          yum.price +
          ` kr</h5>
              </div>
            </div>
            <button id='cart-button' class='menu_add_to_cart' data-id=` +
          yum.id +
          `
              data-yum-id=${yum.id}
              data-yum-title=${title}
              data-yum-price=${yum.price}
              data-yum-img=${yum.imgRef}
              data-yum-quantity-price=${yum.price}
              data-yum-description=${description}
              data-yum-diet=${yum.dietRef}
              onclick='realAddToCart(event)'><i class='fas fa-cart-plus'></i> Lägg i varukorg
            </button>
          </div>
        `
        );
      })
      .join("");
    carouselContainer2.insertAdjacentHTML("afterbegin", htmlString);
  } else {
    return null;
  }
};

// product page( Färdigamatkassar & matlådor)
let selectedBox = null;
function FärdigaMatkassar(element) {
  handleBoxClick(element, "FärdigaMatkassar");
}

function Matlådor(element) {
  handleBoxClick(element, "Matlådor");
}

function handleBoxClick(element, boxType) {
  if (selectedBox && selectedBox !== element) {
    const previousCheckmark = selectedBox.querySelector('.check-products img');
    if (previousCheckmark) {
      previousCheckmark.style.display = 'none';
    }
    selectedBox.style.backgroundColor = '';
    selectedBox.style.border = '';
  }

  const checkmark = element.querySelector('.check-products img');
  const isDisplayed = checkmark && checkmark.style.display === 'block';

  if (checkmark) {
    checkmark.style.display = isDisplayed ? 'none' : 'block';
  }

  if (isDisplayed) {
    element.style.backgroundColor = '';
    element.style.border = '';
    selectedBox = null; 
  } else {
    element.style.backgroundColor = '#FFDFCE'; 
    element.style.border = '2px solid black';
    selectedBox = element; 
  }
}

// Carousel in product page
let currentIndex =0;
const itemsPerPage= 4;
const CarouselDietButtons = (yumProductsList) => {
  if (carouselDietButtons !== null) {
    const dietFiltered = yumProductsList.map((yum) => yum.diet);
    const uniqueDiets = [...new Set(dietFiltered)]; 
    
    const htmlString = uniqueDiets
      .map((diet) => {
        return (
          `
          <div class="swiper-slide">
            <button class="btn meny-option" style="border:1px solid rgb(65, 64, 64)" onclick="sortingDishDietFunction('${diet}')" >
              ${diet}
            </button>
          </div>
          `
        );
      })
      .join(""); 
  carouselDietButtons.innerHTML = htmlString;  
  } else {
    return null;
 }
};

// swiper in product page-first part
var swiper3 = new Swiper(".slide-content3", {
  centeredSlide: "true",
  fade: "true",
  grabCursor: "true",
  spaceBetween: 10, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  loop: true,
  slidesPerView: "auto",
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    1120: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 3,
    },
  },
  loopFillGroupWithBlank: false,
  loopedSlides: 4,
  loopAdditionalSlides: 1,
  on: {
    slideChangeTransitionEnd: function() {
      if (this.isEnd) {
        this.slideToLoop(0, 0);
      }
    },}
});

let showPrevBtn = document.getElementById('show-prev-btn')
let showNextBtn = document.getElementById('show-next-btn')
if (showPrevBtn !== null){
  showPrevBtn.addEventListener('click', () => {
    swiper3.slidePrev();
});
} 
if (showNextBtn !== null){
showNextBtn.addEventListener('click', () => {
    swiper3.slideNext();
}); 
}


// banner2 i product page
document.addEventListener('DOMContentLoaded', function () {
  var SwiperCustom = new Swiper('.mySwiper-custom', {
    slidesPerView: 4,
    spaceBetween: 5,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination', 
      clickable: true,
    },
    navigation: {
      nextEl: '.mySwiper-custom-next',  
      prevEl: '.mySwiper-custom-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1500: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
  });
});
// hämta bilder från instagram
// document.addEventListener('DOMContentLoaded', function() {
//   const feed = new Instafeed({
//     accessToken: 'ACCESS_TOKEN',
//     limit: 4,
//     template: '<div class="image-box"><img src="{{image}}" alt="{{caption}}" class="img-fluid banner2" /></div>',
//     target: 'instagram-feed'
//   });
//   feed.run();
// });


//Function for payment accordions
function togglePaymentMethod() {
  const cardSection = document.getElementById("cardPaymentSection");
  const invoiceSection = document.getElementById("invoicePaymentSection");
  if (document.getElementById("paymentCard") !== null) {
    if (document.getElementById("paymentCard").checked) {
      cardSection.style.display = "block";
      invoiceSection.style.display = "none";
    } else if (document.getElementById("paymentInvoice").checked) {
      cardSection.style.display = "none";
      invoiceSection.style.display = "block";
    }
  }
}
window.onload = function () {
  togglePaymentMethod();
};

//Display daily items
const dailyProducts = (dailyProductsList) => {
  if (daily !== null) {
    const htmlString = dailyProductsList
      .map((daily) => {
        let title = JSON.stringify(daily.title);
        let description = JSON.stringify(daily.description);
        let ingredients = JSON.stringify(daily.ingredients);
        return (
          `<div
            class="col-xl-4 col-sm-6 col-lg-4 wow fadeInUp "
            data-wow-duration="1s"
                        >
          <div class="menu_item" data-yum-id=${daily.id}
                  data-yum-title=${title}
                  data-yum-price=${daily.price}
                  data-yum-img=${daily.imgRef}
                  data-yum-quantity-price=${daily.price}
                  data-yum-description=${description}
                  data-yum-ingredients=${ingredients}
                  data-yum-diet=${daily.dietRef}
                  data-bs-toggle="modal"
                  data-bs-target="#modal">
              <div class="menu_item_img">
                <img
                  src=` +
          daily.imgRef +
          `
                  alt="dagens-meny-bild"
                  class="img-fluid w-100"
                  class="title"
                  href="#"

                />
              </div>
              <div class="d-flex justify-content-between align-items-center">
               <div class="d-flex">
               <img
                  src=` +
          daily.dietRef +
          `
                  alt="dagens-meny-bild"
                  class="img-fluid w-100 diet_img"
                  href="#"

                /></div>
                <a class="category" href="#">` +
          daily.category +
          `</a>
          </div>
              <div class="menu_item_text">
                <a
                  class="title"
                  href="#"
                  data-yum-id=${daily.id}
                  data-yum-title=${title}
                  data-yum-price=${daily.price}
                  data-yum-img=${daily.img}
                  data-yum-quantity-price=${daily.price}
                  data-yum-description=${description}
                  data-yum-ingredients=${ingredients}
                  data-yum-diet=${daily.dietRef}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >` +
          daily.title.replace(/'/g, "") +
          `</a
                >
                <h5 class="price">` +
          daily.price +
          `kr</h5>` +
          "<div class='add_to_cart'>Kommer snart</div><!-- <button id = 'cart-button' class='amenu_add_to_cart' data - id=" +
          daily.id +
          `
          data-yum-id=${daily.id}
          data-yum-title=${title}
          data-yum-price=${daily.price}
          data-yum-img=${daily.imgRef}
          data-yum-quantity-price=${daily.price}
          data-yum-description=${description}
          data-yum-diet=${daily.dietRef}
          ` +
          ") onclick='realAddToCart(event)''>Lägg till     <i class='fas fa-cart-plus' onclick='realAddToCart(event)' ></i></button>-->" +
          `<!--
          <ul class="d-flex flex-wrap justify-content-end">
                  <li>
                    <a href="#"><i class="fa fa-heart"></i></a>
                  </li>
                  <li>
                    <a href="menu_details.html"><i class="fa fa-eye"></i></a>
                  </li>
                </ul>
                -->
              </div>
            </div>
          </div>`
        );
      })
      .join("");
    daily.innerHTML = htmlString;
  } else {
    return null;
  }
};

//Display premium items
const premiumProducts = (premiumProductsList) => {
  if (premium !== null) {
    const htmlString = premiumProductsList
      .map((premium) => {
        let title = JSON.stringify(premium.title);
        let description = JSON.stringify(premium.description);
        let ingredients = JSON.stringify(premium.ingredients);
        return (
          `<div
            class="col-xl-4 col-sm-6 col-lg-4 wow fadeInUp "
            data-wow-duration="1s"
                        >
          <div class="menu_item" data-yum-id=${premium.id}
                  data-yum-title=${title}
                  data-yum-price=${premium.price}
                  data-yum-img=${premium.imgRef}
                  data-yum-quantity-price=${premium.price}
                  data-yum-description=${description}
                  data-yum-ingredients=${ingredients}
                  data-yum-diet=${premium.dietRef}
                  data-bs-toggle="modal"
                  data-bs-target="#modal">
              <div class="menu_item_img">
                <img
                  src=` +
          premium.imgRef +
          `
                  alt="premium-meny-bild"
                  class="img-fluid w-100"
                  class="title"
                  href="#"

                />
              </div>
              <div class="d-flex justify-content-between align-items-center">
               <div class="d-flex">
               <img
                  src=` +
          premium.dietRef +
          `
                  alt="premium-meny-bild"
                  class="img-fluid w-100 diet_img"
                  href="#"

                /></div>
                <a class="category" href="#">` +
          premium.category +
          `</a>
          </div>
              <div class="menu_item_text">
                <a
                  class="title"
                  href="#"
                  data-yum-id=${premium.id}
                  data-yum-title=${title}
                  data-yum-price=${premium.price}
                  data-yum-img=${premium.imgRef}
                  data-yum-quantity-price=${premium.price}
                  data-yum-description=${description}
                  data-yum-ingredients=${ingredients}
                  data-yum-diet=${premium.dietRef}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >` +
          premium.title.replace(/'/g, "") +
          `</a
                >
                <h5 class="price">` +
          premium.price +
          `kr</h5>` +
          "<div class='add_to_cart'>Kommer snart</div><!--<button id='cart-button' class='menu_add_to_cart' data-id=" +
          premium.id +
          `
          data-yum-id=${premium.id}
          data-yum-title=${title}
          data-yum-price=${premium.price}
          data-yum-img=${premium.imgRef}
          data-yum-quantity-price=${premium.price}
          data-yum-description=${description}
          data-yum-diet=${premium.dietRef}
          ` +
          ") onclick='realAddToCart(event)'>Lägg till  <i class='fas fa-cart-plus' ></i></button>-->" +
          `<!--
          <ul class="d-flex flex-wrap justify-content-end">
                  <li>
                    <a href="#"><i class="fa fa-heart"></i></a>
                  </li>
                  <li>
                    <a href="menu_details.html"><i class="fa fa-eye"></i></a>
                  </li>
                </ul>
                -->
              </div>
            </div>
          </div>`
        );
      })
      .join("");
    premium.innerHTML = htmlString;
  } else {
    return null;
  }
};

//Show baguetter
const baguetterProducts = (baguetterProductsList) => {
  if (baguetter !== null) {
    const htmlString = baguetterProductsList
      .map((baguetter) => {
        let title = JSON.stringify(baguetter.title);
        let description = JSON.stringify(baguetter.description);
        let ingredients = JSON.stringify(baguetter.ingredients);
        return (
          `<div
            class="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp "
            data-wow-duration="1s"
                        >
          <div class="menu_item">
              <div class="menu_item_img">
                <img
                  src=` +
          baguetter.imgRef +
          `
                  alt="baguette-bild"
                  class="img-fluid w-100"
                  class="title"
                  href="#"
                  data-yum-id=${baguetter.id}
                  data-yum-title=${title}
                  data-yum-price=${baguetter.price}
                  data-yum-img=${baguetter.imgRef}
                  data-yum-quantity-price=${baguetter.price}
                  data-yum-description=${description}
                  data-yum-ingredients=${ingredients}
                  data-yum-diet=${baguetter.dietRef}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                />
              </div>
               <div class="d-flex justify-content-between align-items-center">
               <div class="d-flex"><img
                  src=` +
          baguetter.dietRef +
          `
                  alt="dagens-meny-bild"
                  class="img-fluid w-100 diet_img"
                  href="#"

                /></div>
                <a class="category" href="#">` +
          baguetter.category +
          `</a>
          </div>
          <div class="menu_item_text">
                <a
                  class="title"
                  href="#"
                  data-yum-id=${baguetter.id}
                  data-yum-title=${title}
                  data-yum-price=${baguetter.price}
                  data-yum-img=${baguetter.imgRef}
                  data-yum-quantity-price=${baguetter.price}
                  data-yum-description=${description}
                  data-yum-ingredients=${ingredients}
                  data-yum-diet=${baguetter.dietRef}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >` +
          baguetter.title.replace(/'/g, "") +
          `</a
                >
                <h5 class="price">` +
          baguetter.price +
          `kr</h5>` +
          "<button id='cart-button' class='menu_add_to_cart' data-id=" +
          baguetter.id +
          `
          data-yum-id=${baguetter.id}
          data-yum-title=${title}
          data-yum-price=${baguetter.price}
          data-yum-img=${baguetter.imgRef}
          data-yum-quantity-price=${baguetter.price}
          data-yum-description=${description}
          data-yum-diet=${baguetter.dietRef}
          ` +
          ") onclick='realAddToCart(event)''>Lägg till     <i class='fas fa-cart-plus'></i></button>" +
          `
          <!--
          <ul class="d-flex flex-wrap justify-content-end">
                  <li>
                    <a href="#"><i class="fa fa-heart"></i></a>
                  </li>
                  <li>
                    <a href="menu_details.html"><i class="fa fa-eye"></i></a>
                  </li>
                </ul>
                -->
              </div>
            </div>
          </div>`
        );
      })
      .join("");
    baguetter.innerHTML = htmlString;
  } else {
    return null;
  }
};

//Show subscription prducts
const subscriptionsProducts = (subscriptionsProductsList) => {
  if (subscriptions !== null) {
    let i = 0;
    const htmlString = subscriptionsProductsList
      .map((subscription) => {
        let title = JSON.stringify(subscription.title);
        let description = JSON.stringify(subscription.description);
        let ingredients = JSON.stringify(subscription.ingredients);
        return (
          `
          <div
            class="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp"
            data-wow-duration="1s"
          >
            <div class="menu_item">
              <div class="menu_item_img">
                <img src=` +
          subscription.img +
          `
                  alt="prenumeration-bild"
                  class="img-fluid w-100"
                  class="title"
                  href="#"
                  data-yum-id=${subscription.id}
                  data-yum-title=${title}
                  data-yum-price=${subscription.price}
                  data-yum-img=${subscription.img}
                  data-yum-quantity-price=${subscription.price}
                  data-yum-description=${description}
                  data-yum-ingredients=${ingredients}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                />
              </div>
              <div class="menu_item_text">
                <a class="category" href="#">` +
          subscription.category +
          `</a>
                <a
                  class="title"
                  href="#"
                  data-yum-id=${subscription.id}
                  data-yum-title=${title}
                  data-yum-price=${subscription.price}
                  data-yum-img=${subscription.img}
                  data-yum-quantity-price=${subscription.price}
                  data-yum-description=${description}
                  data-yum-ingredients=${ingredients}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >` +
          subscription.title.replace(/'/g, "") +
          `</a
                >
                <h5 class="price">` +
          subscription.price +
          `kr</h5>` +
          "<button id='cart-button' class='menu_add_to_cart' data-id=" +
          subscription.id +
          `
          data-yum-id=${subscription.id}
          data-yum-title=${title}
          data-yum-price=${subscription.price}
          data-yum-img=${subscription.img}
          data-yum-quantity-price=${subscription.price}
          data-yum-description=${description}
          data-yum-diet=${subscription.dietRef}
          ` +
          ") onclick='realAddToCart(event)''>Lägg till       <i class='fas fa-cart-plus'></i></button>" +
          `
          <!--
          <ul class="d-flex flex-wrap justify-content-end">
                  <li>
                    <a href="#"><i class="fal fa-heart"></i></a>
                  </li>
                  <li>
                    <a href="menu_details.html"><i class="fa fa-eye"></i></a>
                  </li>
                </ul>
                -->
            </div>
          </div>`
        );
      })
      .join("");
    subscriptions.innerHTML = htmlString;
  } else {
    return null;
  }
};

//Sort function by name and price
const sortingNamePriceFunction = (el) => {
  const option = el.value;
  if (option === "name") {
    const sortedYumArray = yumFiltered.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );
    const sortedDailyArray = dailyFiltered.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );
    const sortedPremiumArray = premiumFiltered.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );
    const sortedBaguetterArray = baguetterFiltered.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );
    return (
      yumProducts(sortedYumArray),
      dailyProducts(sortedDailyArray),
      premiumProducts(sortedPremiumArray),
      baguetterProducts(sortedBaguetterArray)
    );
  }
  /////////////////current block start //////////////////////
  ///////////////////////////////////////////////////////
  else if (option === "AL") {
    const sortedYumArray = yumFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    const sortedDailyArray = dailyFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    const sortedPremiumArray = premiumFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    const sortedBaguetterArray = baguetterFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    return (
      yumProducts(sortedYumArray),
      dailyProducts(sortedDailyArray),
      premiumProducts(sortedPremiumArray),
      baguetterProducts(sortedBaguetterArray)
    );
    /////////////////////////////////////////////////
    ////////////current block end //////////////////////
  }

  /////////////////test block start //////////////////////
  ///////////////////////////////////////////////////////
  else if (option === "Chicken") {
    const sortedYumArray = yumFiltered.filter((chick) => {
      return chick.diet.includes("Chicken");
    });
    // const sortedDailyArray = dailyFiltered.sort((chick) =>
    //   a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    // );
    // const sortedPremiumArray = premiumFiltered.sort((chick) =>
    //   a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    // );
    // const sortedBaguetterArray = baguetterFiltered.sort((chick) =>
    //   a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    // );
    return yumProducts(sortedYumArray);
    // dailyProducts(sortedDailyArray),
    // premiumProducts(sortedPremiumArray),
    // baguetterProducts(sortedBaguetterArray)
    /////////////////////////////////////////////////
    ////////////test block end //////////////////////
  } else if (option === "l2h") {
    const parsePrice = (x) => parseFloat(x.replace(/^\$/, "")) || 0;
    const sortedYumArray = yumFiltered
      .slice()
      .sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    const sortedDailyArray = dailyFiltered
      .slice()
      .sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    const sortedPremiumArray = premiumFiltered
      .slice()
      .sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    const sortedBaguetterArray = baguetterFiltered
      .slice()
      .sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    return (
      yumProducts(sortedYumArray),
      dailyProducts(sortedDailyArray),
      premiumProducts(sortedPremiumArray),
      baguetterProducts(sortedBaguetterArray)
    );
  } else if (option === "h2l") {
    const parsePrice = (x) => parseFloat(x.replace(/^\$/, "")) || 0;
    const sortedYumArray = yumFiltered
      .slice()
      .sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    const sortedDailyArray = dailyFiltered
      .slice()
      .sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    const sortedPremiumArray = premiumFiltered
      .slice()
      .sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    const sortedBaguetterArray = baguetterFiltered
      .slice()
      .sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    return (
      yumProducts(sortedYumArray),
      dailyProducts(sortedDailyArray),
      premiumProducts(sortedPremiumArray),
      baguetterProducts(sortedBaguetterArray)
    );
  } else {
    const sortedYumArray = yumFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    const sortedDailyArray = dailyFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    const sortedPremiumArray = premiumFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    const sortedBaguetterArray = baguetterFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    return (
      yumProducts(sortedYumArray),
      dailyProducts(sortedDailyArray),
      premiumProducts(sortedPremiumArray),
      baguetterProducts(sortedBaguetterArray)
    );
  }
};

//Sort function for diet
const sortingDishDietFunction = (el) => {
  const option = el.value;
  if (option === "vegan") {
    const filteredYumProducts = yumProductsList.filter((product) => {
      return product.diet.includes("Vegan");
    });
    // const filteredDailyProducts = dailyProductsList.filter((product) => {
    //   let vegan = "";
    //   product.diet.map((img) => {
    //     vegan = img.toLowerCase().includes(option);
    //   });
    //   return vegan;
    // });
    // const filteredPremiumProducts = premiumProductsList.filter((product) => {
    //   let vegan = "";
    //   product.diet.map((img) => {
    //     vegan = img.toLowerCase().includes(option);
    //   });
    //   return vegan;
    // });
    // const filteredBaguetterProducts = baguetterProductsList.filter(
    //   (product) => {
    //     let vegan = "";
    //     product.diet.map((img) => {
    //       vegan = img.toLowerCase().includes(option);
    //     });
    //     return vegan;
    //   }
    // );
    yumProducts(filteredYumProducts);
    // dailyProducts(filteredDailyProducts);
    // premiumProducts(filteredPremiumProducts);
    // baguetterProducts(filteredBaguetterProducts);
    if (yum && yum.innerHTML === "") {
      yumFilterMessage.classList.remove("hide");
      yumFilterMessage.classList.add("show");
    } else if (yum && yum.innerHTML !== "") {
      yumFilterMessage.classList.remove("show");
      yumFilterMessage.classList.add("hide");
    }
    if (daily && daily.innerHTML === "") {
      dailyFilterMessage.classList.remove("hide");
      dailyFilterMessage.classList.add("show");
    } else if (daily && daily.innerHTML !== "") {
      dailyFilterMessage.classList.remove("show");
      dailyFilterMessage.classList.add("hide");
    }
    if (premium && premium.innerHTML === "") {
      premiumFilterMessage.classList.remove("hide");
      premiumFilterMessage.classList.add("show");
    } else if (premium && premium.innerHTML !== "") {
      premiumFilterMessage.classList.remove("show");
      premiumFilterMessage.classList.add("hide");
    }
    if (baguetter && baguetter.innerHTML === "") {
      baguetterFilterMessage.classList.remove("hide");
      baguetterFilterMessage.classList.add("show");
    } else if (baguetter && baguetter.innerHTML !== "") {
      baguetterFilterMessage.classList.remove("show");
      baguetterFilterMessage.classList.add("hide");
    }
  } else if (option === "AL") {
    const sortedYumArray = yumFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    const sortedDailyArray = dailyFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    const sortedPremiumArray = premiumFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    const sortedBaguetterArray = baguetterFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    yumProducts(sortedYumArray);
    dailyProducts(sortedDailyArray);
    premiumProducts(sortedPremiumArray);
    baguetterProducts(sortedBaguetterArray);
    if (yum && yum.innerHTML !== "") {
      yumFilterMessage.classList.remove("show");
      yumFilterMessage.classList.add("hide");
    }
    if (daily && daily.innerHTML !== "") {
      dailyFilterMessage.classList.remove("show");
      dailyFilterMessage.classList.add("hide");
    }
    if (premium && premium.innerHTML !== "") {
      premiumFilterMessage.classList.remove("show");
      premiumFilterMessage.classList.add("hide");
    }
    if (baguetter && baguetter.innerHTML !== "") {
      baguetterFilterMessage.classList.remove("show");
      baguetterFilterMessage.classList.add("hide");
    }
  } else if (option === "vegetarian") {
    const filteredYumProducts = yumProductsList.filter((product) => {
      return product.diet.includes("Vegetarian");
    });
    // const filteredDailyProducts = dailyProductsList.filter((product) => {
    //   let vegetarian = "";
    //   product.diet.map((img) => {
    //     vegetarian = img.toLowerCase().includes(option);
    //   });
    //   return vegetarian;
    // });
    // const filteredPremiumProducts = premiumProductsList.filter((product) => {
    //   let vegetarian = "";
    //   product.diet.map((img) => {
    //     vegetarian = img.toLowerCase().includes(option);
    //   });
    //   return vegetarian;
    // });
    // const filteredBaguetterProducts = baguetterProductsList.filter(
    //   (product) => {
    //     let vegetarian = "";
    //     product.diet.map((img) => {
    //       vegetarian = img.toLowerCase().includes(option);
    //     });
    //     return vegetarian;
    //   }
    // );
    yumProducts(filteredYumProducts);
    // dailyProducts(filteredDailyProducts);
    // premiumProducts(filteredPremiumProducts);
    // baguetterProducts(filteredBaguetterProducts);
    if (yum && yum.innerHTML === "") {
      yumFilterMessage.classList.remove("hide");
      yumFilterMessage.classList.add("show");
    } else if (yum && yum.innerHTML !== "") {
      yumFilterMessage.classList.remove("show");
      yumFilterMessage.classList.add("hide");
    }
    if (daily && daily.innerHTML === "") {
      dailyFilterMessage.classList.remove("hide");
      dailyFilterMessage.classList.add("show");
    } else if (daily && daily.innerHTML !== "") {
      dailyFilterMessage.classList.remove("show");
      dailyFilterMessage.classList.add("hide");
    }
    if (premium && premium.innerHTML === "") {
      premiumFilterMessage.classList.remove("hide");
      premiumFilterMessage.classList.add("show");
    } else if (premium && premium.innerHTML !== "") {
      premiumFilterMessage.classList.remove("show");
      premiumFilterMessage.classList.add("hide");
    }
    if (baguetter && baguetter.innerHTML === "") {
      baguetterFilterMessage.classList.remove("hide");
      baguetterFilterMessage.classList.add("show");
    } else if (baguetter && baguetter.innerHTML !== "") {
      baguetterFilterMessage.classList.remove("show");
      baguetterFilterMessage.classList.add("hide");
    }
  } else if (option === "cow") {
    const filteredYumProducts = yumProductsList.filter((product) => {
      return product.diet.includes("Cow");
    });
    // const filteredDailyProducts = dailyProductsList.filter((product) => {
    //   let cow = "";
    //   product.diet.map((img) => {
    //     cow = img.toLowerCase().includes(option);
    //   });
    //   return cow;
    // });
    // const filteredPremiumProducts = premiumProductsList.filter((product) => {
    //   let cow = "";
    //   product.diet.map((img) => {
    //     cow = img.toLowerCase().includes(option);
    //   });
    //   return cow;
    // });
    // const filteredBaguetterProducts = baguetterProductsList.filter(
    //   (product) => {
    //     let cow = "";
    //     product.diet.map((img) => {
    //       cow = img.toLowerCase().includes(option);
    //     });
    //     return cow;
    //   }
    // );
    yumProducts(filteredYumProducts);
    // dailyProducts(filteredDailyProducts);
    // premiumProducts(filteredPremiumProducts);
    // baguetterProducts(filteredBaguetterProducts);
    if (yum && yum.innerHTML === "") {
      yumFilterMessage.classList.remove("hide");
      yumFilterMessage.classList.add("show");
    } else if (yum && yum.innerHTML !== "") {
      yumFilterMessage.classList.remove("show");
      yumFilterMessage.classList.add("hide");
    }
    if (daily && daily.innerHTML === "") {
      dailyFilterMessage.classList.remove("hide");
      dailyFilterMessage.classList.add("show");
    } else if (daily && daily.innerHTML !== "") {
      dailyFilterMessage.classList.remove("show");
      dailyFilterMessage.classList.add("hide");
    }
    if (premium && premium.innerHTML === "") {
      premiumFilterMessage.classList.remove("hide");
      premiumFilterMessage.classList.add("show");
    } else if (premium && premium.innerHTML !== "") {
      premiumFilterMessage.classList.remove("show");
      premiumFilterMessage.classList.add("hide");
    }
    if (baguetter && baguetter.innerHTML === "") {
      baguetterFilterMessage.classList.remove("hide");
      baguetterFilterMessage.classList.add("show");
    } else if (baguetter && baguetter.innerHTML !== "") {
      baguetterFilterMessage.classList.remove("show");
      baguetterFilterMessage.classList.add("hide");
    }
  } else if (option === "fish") {
    const filteredYumProducts = yumProductsList.filter((product) => {
      return product.diet.includes("Fish");
    });
    // const filteredDailyProducts = dailyProductsList.filter((product) => {
    //   let fish = "";
    //   product.diet.map((img) => {
    //     fish = img.toLowerCase().includes(option);
    //   });
    //   return fish;
    // });
    // const filteredPremiumProducts = premiumProductsList.filter((product) => {
    //   let fish = "";
    //   product.diet.map((img) => {
    //     fish = img.toLowerCase().includes(option);
    //   });
    //   return fish;
    // });
    // const filteredBaguetterProducts = baguetterProductsList.filter(
    //   (product) => {
    //     let fish = "";
    //     product.diet.map((img) => {
    //       fish = img.toLowerCase().includes(option);
    //     });
    //     return fish;
    //   }
    // );
    yumProducts(filteredYumProducts);
    // dailyProducts(filteredDailyProducts);
    // premiumProducts(filteredPremiumProducts);
    // baguetterProducts(filteredBaguetterProducts);
    if (yum && yum.innerHTML === "") {
      yumFilterMessage.classList.remove("hide");
      yumFilterMessage.classList.add("show");
    } else if (yum && yum.innerHTML !== "") {
      yumFilterMessage.classList.remove("show");
      yumFilterMessage.classList.add("hide");
    }
    if (daily && daily.innerHTML === "") {
      dailyFilterMessage.classList.remove("hide");
      dailyFilterMessage.classList.add("show");
    } else if (daily && daily.innerHTML !== "") {
      dailyFilterMessage.classList.remove("show");
      dailyFilterMessage.classList.add("hide");
    }
    if (premium && premium.innerHTML === "") {
      premiumFilterMessage.classList.remove("hide");
      premiumFilterMessage.classList.add("show");
    } else if (premium && premium.innerHTML !== "") {
      premiumFilterMessage.classList.remove("show");
      premiumFilterMessage.classList.add("hide");
    }
    if (baguetter && baguetter.innerHTML === "") {
      baguetterFilterMessage.classList.remove("hide");
      baguetterFilterMessage.classList.add("show");
    } else if (baguetter && baguetter.innerHTML !== "") {
      baguetterFilterMessage.classList.remove("show");
      baguetterFilterMessage.classList.add("hide");
    }
  } else if (option === "pork") {
    const filteredYumProducts = yumProductsList.filter((product) => {
      return product.diet === "Pork";
    });
    // const filteredDailyProducts = dailyProductsList.filter((product) => {
    //   let fish = "";
    //   product.diet.map((img) => {
    //     fish = img.toLowerCase().includes(option);
    //   });
    //   return fish;
    // });
    // const filteredPremiumProducts = premiumProductsList.filter((product) => {
    //   let fish = "";
    //   product.diet.map((img) => {
    //     fish = img.toLowerCase().includes(option);
    //   });
    //   return fish;
    // });
    // const filteredBaguetterProducts = baguetterProductsList.filter(
    //   (product) => {
    //     let fish = "";
    //     product.diet.map((img) => {
    //       fish = img.toLowerCase().includes(option);
    //     });
    //     return fish;
    //   }
    // );
    yumProducts(filteredYumProducts);
    // dailyProducts(filteredDailyProducts);
    // premiumProducts(filteredPremiumProducts);
    // baguetterProducts(filteredBaguetterProducts);
    if (yum && yum.innerHTML === "") {
      yumFilterMessage.classList.remove("hide");
      yumFilterMessage.classList.add("show");
    } else if (yum && yum.innerHTML !== "") {
      yumFilterMessage.classList.remove("show");
      yumFilterMessage.classList.add("hide");
    }
    if (daily && daily.innerHTML === "") {
      dailyFilterMessage.classList.remove("hide");
      dailyFilterMessage.classList.add("show");
    } else if (daily && daily.innerHTML !== "") {
      dailyFilterMessage.classList.remove("show");
      dailyFilterMessage.classList.add("hide");
    }
    if (premium && premium.innerHTML === "") {
      premiumFilterMessage.classList.remove("hide");
      premiumFilterMessage.classList.add("show");
    } else if (premium && premium.innerHTML !== "") {
      premiumFilterMessage.classList.remove("show");
      premiumFilterMessage.classList.add("hide");
    }
    if (baguetter && baguetter.innerHTML === "") {
      baguetterFilterMessage.classList.remove("hide");
      baguetterFilterMessage.classList.add("show");
    } else if (baguetter && baguetter.innerHTML !== "") {
      baguetterFilterMessage.classList.remove("show");
      baguetterFilterMessage.classList.add("hide");
    }
  } else if (option === "chicken") {
    const filteredYumProducts = yumProductsList.filter((product) => {
      return product.diet.includes("Chicken");
    });
    // const filteredDailyProducts = dailyProductsList.filter((product) => {
    //   let chicken = "";
    //   product.diet.map((img) => {
    //     chicken = img.toLowerCase().includes(option);
    //   });
    //   return chicken;
    // });
    // const filteredPremiumProducts = premiumProductsList.filter((product) => {
    //   let chicken = "";
    //   product.diet.map((img) => {
    //     chicken = img.toLowerCase().includes(option);
    //   });
    //   return chicken;
    // });
    // const filteredBaguetterProducts = baguetterProductsList.filter(
    //   (product) => {
    //     let chicken = "";
    //     product.diet.map((img) => {
    //       chicken = img.toLowerCase().includes(option);
    //     });
    //     return chicken;
    //   }
    // );
    yumProducts(filteredYumProducts);
    // dailyProducts(filteredDailyProducts);
    // premiumProducts(filteredPremiumProducts);
    // baguetterProducts(filteredBaguetterProducts);
    if (yum && yum.innerHTML === "") {
      yumFilterMessage.classList.remove("hide");
      yumFilterMessage.classList.add("show");
    } else if (yum && yum.innerHTML !== "") {
      yumFilterMessage.classList.remove("show");
      yumFilterMessage.classList.add("hide");
    }
    if (daily && daily.innerHTML === "") {
      dailyFilterMessage.classList.remove("hide");
      dailyFilterMessage.classList.add("show");
    } else if (daily && daily.innerHTML !== "") {
      dailyFilterMessage.classList.remove("show");
      dailyFilterMessage.classList.add("hide");
    }
    if (premium && premium.innerHTML === "") {
      premiumFilterMessage.classList.remove("hide");
      premiumFilterMessage.classList.add("show");
    } else if (premium && premium.innerHTML !== "") {
      premiumFilterMessage.classList.remove("show");
      premiumFilterMessage.classList.add("hide");
    }
    if (baguetter && baguetter.innerHTML === "") {
      baguetterFilterMessage.classList.remove("hide");
      baguetterFilterMessage.classList.add("show");
    } else if (baguetter && baguetter.innerHTML !== "") {
      baguetterFilterMessage.classList.remove("show");
      baguetterFilterMessage.classList.add("hide");
    }
  } else if (option === "mix") {
    const filteredYumProducts = yumProductsList.filter((product) => {
      return product.diet.includes("Pork, Cow");
    });
    // const filteredDailyProducts = dailyProductsList.filter((product) => {
    //   let chicken = "";
    //   product.diet.map((img) => {
    //     chicken = img.toLowerCase().includes(option);
    //   });
    //   return chicken;
    // });
    // const filteredPremiumProducts = premiumProductsList.filter((product) => {
    //   let chicken = "";
    //   product.diet.map((img) => {
    //     chicken = img.toLowerCase().includes(option);
    //   });
    //   return chicken;
    // });
    // const filteredBaguetterProducts = baguetterProductsList.filter(
    //   (product) => {
    //     let chicken = "";
    //     product.diet.map((img) => {
    //       chicken = img.toLowerCase().includes(option);
    //     });
    //     return chicken;
    //   }
    // );
    yumProducts(filteredYumProducts);
    // dailyProducts(filteredDailyProducts);
    // premiumProducts(filteredPremiumProducts);
    // baguetterProducts(filteredBaguetterProducts);
    if (yum && yum.innerHTML === "") {
      yumFilterMessage.classList.remove("hide");
      yumFilterMessage.classList.add("show");
    } else if (yum && yum.innerHTML !== "") {
      yumFilterMessage.classList.remove("show");
      yumFilterMessage.classList.add("hide");
    }
    if (daily && daily.innerHTML === "") {
      dailyFilterMessage.classList.remove("hide");
      dailyFilterMessage.classList.add("show");
    } else if (daily && daily.innerHTML !== "") {
      dailyFilterMessage.classList.remove("show");
      dailyFilterMessage.classList.add("hide");
    }
    if (premium && premium.innerHTML === "") {
      premiumFilterMessage.classList.remove("hide");
      premiumFilterMessage.classList.add("show");
    } else if (premium && premium.innerHTML !== "") {
      premiumFilterMessage.classList.remove("show");
      premiumFilterMessage.classList.add("hide");
    }
    if (baguetter && baguetter.innerHTML === "") {
      baguetterFilterMessage.classList.remove("hide");
      baguetterFilterMessage.classList.add("show");
    } else if (baguetter && baguetter.innerHTML !== "") {
      baguetterFilterMessage.classList.remove("show");
      baguetterFilterMessage.classList.add("hide");
    }
  }
};
loadProducts();

// Make modal fetch data from json file
var cardModal = document.getElementById("modal");
if (cardModal !== null) {
  cardModal.addEventListener("show.bs.modal", function (event) {
    var button = event.relatedTarget;
    var id = button.getAttribute("data-yum-id");
    var title = button.getAttribute("data-yum-title");
    var price = button.getAttribute("data-yum-price");
    var img = button.getAttribute("data-yum-img");
    var quantityPrice = button.getAttribute("data-yum-quantity-price");
    var description = button.getAttribute("data-yum-description");
    var ingredients = button.getAttribute("data-yum-ingredients");
    var dietRef = button.getAttribute("data-yum-diet");

    var modalTitle = cardModal.querySelector(".title");
    var modalPrice = cardModal.querySelector(".price");
    var modalImg = cardModal.querySelector(".dish_img");
    var modalQuantityPrice = cardModal.querySelector(".quantity_price");
    var modalDescription = cardModal.querySelector(".description");
    var modalIngredients = cardModal.querySelector(".ingredients");
    var modalDiet = cardModal.querySelector(".diet_img");
    var input = cardModal.querySelector(".quantity").value;
    input = parseInt(input);

    localStorage.setItem("quantity", input);
    localStorage.setItem("id", id);
    localStorage.setItem("title", (modalTitle.textContent = title));
    localStorage.setItem("price", (modalPrice.innerHTML = price));

    localStorage.setItem("img", (modalImg.src = img));
    localStorage.setItem(
      "quantity-price",
      (modalQuantityPrice.textContent = quantityPrice)
    );
    localStorage.setItem(
      "ingredients",
      (modalIngredients.innerHTML = ingredients)
    );
    localStorage.setItem(
      "description",
      (modalDescription.textContent = description)
    );
    localStorage.setItem("diet", (modalDiet.src = dietRef));
    localStorage.setItem("quantity", (input.value = 1));
    hideDiv();
  });
} else {
  null;
}

//Show ingredients div
function showDiv() {
  var x = document.getElementById("welcomeDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function hideDiv() {
  var x = document.getElementById("welcomeDiv");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
}

//Show data into menu_details page based on the modal clicked
const detailsTitle = localStorage.getItem("title");
const detailsPrice = localStorage.getItem("price");
const detailsQuantityPrice = localStorage.getItem("quantity-price");
const detailsImg = localStorage.getItem("img");
const existingTitle = document.getElementById("title");
if (existingTitle !== null) {
  document.getElementById("title").textContent = detailsTitle;
  document.getElementById("price").textContent = detailsPrice;
  document.getElementById("quantity-price").textContent = detailsQuantityPrice;
  const imgArray = document.querySelectorAll(".zoom");
  for (let i = 0; i < Object.entries(imgArray).length; i++)
    imgArray[i].src = detailsImg;
} else {
  null;
}

let formDataArry = JSON.parse(localStorage.getItem("formDataArry"));

//Add to cart function from button
function realAddToCart(event) {
  var id = event.target.closest("button").dataset.id;
  var title = event.target.closest("button").dataset.yumTitle;
  var price = event.target.closest("button").dataset.yumPrice;
  var img = event.target.closest("button").dataset.yumImg;
  var quantityPrice = event.target.closest("button").dataset.yumQuantityPrice;
  var description = event.target.closest("button").dataset.yumDescription;
  var dietImage = event.target.closest("button").dataset.yumDiet;

  let formData = {};
  formData.id = id;
  formData.title = title;
  formData.price = price;
  formData.img = img;
  formData.quantityPrice = quantityPrice;
  formData.quantity = 1;
  formData.description = description;
  formData.diet = dietImage;

  const itemIndexInBasket = formDataArry.findIndex(
    (basketEntry) => basketEntry.id === id
  );
  if (itemIndexInBasket !== -1) {
    formDataArry[itemIndexInBasket].quantity++;
    formDataArry[itemIndexInBasket].quantityPrice =
      parseInt(formDataArry[itemIndexInBasket].quantityPrice) +
      parseInt(formDataArry[itemIndexInBasket].price);
  } else {
    if (id !== undefined) {
      formDataArry.push(formData);
    } else {
      return null;
    }
  }

  localStorage.setItem("formDataArry", JSON.stringify(formDataArry));
  totalQuantity();
}

//Add to cart function from modal
function modalAddToCart() {
  var modalId = localStorage.getItem("id");
  var modalTitle = localStorage.getItem("title");
  var modalPrice = localStorage.getItem("price");
  var modalQuantityPrice = localStorage.getItem("quantity-price");
  var modalImage = localStorage.getItem("img");
  var modalQuantity = localStorage.getItem("quantity");
  var modalDescription = localStorage.getItem("description");
  var modalDiet = localStorage.getItem("diet");

  let formData = {};
  formData.id = modalId;
  formData.title = modalTitle;
  formData.price = modalPrice;
  formData.img = modalImage;
  formData.quantityPrice = modalQuantityPrice;
  formData.quantity = modalQuantity;
  formData.description = modalDescription;
  formData.diet = modalDiet;

  const itemIndexInBasket = formDataArry.findIndex(
    (basketEntry) => basketEntry.id === modalId
  );
  if (itemIndexInBasket !== -1) {
    formDataArry[itemIndexInBasket].quantity++;
    formDataArry[itemIndexInBasket].quantityPrice =
      parseInt(formDataArry[itemIndexInBasket].quantityPrice) +
      parseInt(formDataArry[itemIndexInBasket].price);
  } else {
    if (formData !== undefined) {
      formDataArry.push(formData);
    } else {
      null;
    }
  }

  localStorage.setItem("formDataArry", JSON.stringify(formDataArry));
  totalQuantity();
  var input = document.querySelector(".quantity");
  input.value = 1;
  closeModal();
  openSidebar();
  updateSidebarCart();
}

//stäng modalen
function closeModal() {
  var modal = document.getElementById("modal"); 
  modal.style.display = "none"; 
}

let id = "";

//Display items in the cart
const displayNewCart = () => {
  const cartSidebar = document.getElementById('cartSidebar');
  const tableHead = document.getElementById("table_head");
  const summaryHead = document.getElementById("summary_head");
  if (cartSidebar) {
    cartSidebar.classList.add('open');
  } else {
    console.error('Cart sidebar element not found');
  }
  
  if (cartItem !== null) {
    formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
    if (formDataArry === null) {
      tableHead.classList.remove("block");
      tableHead.classList.add("hide");
      summaryHead.classList.remove("block");
      summaryHead.classList.add("hide");
      cartItem.insertAdjacentHTML(
        "afterend",
        `
        <div class="single_team_text">
        <h3 style="padding: 20px; text-align: center">
          Din varukorg är tom
        </h3>
          </div>`
      );
    } else {
      tableHead.classList.remove("hide");
      tableHead.classList.add("block");
      summaryHead.classList.remove("hide");
      summaryHead.classList.add("block");
      const htmlString = formDataArry
        .map((item) => {
          let diet = "";
          let value = "";
          console.log(item);
          id = item.id;
          let quantity;
          description = item.title;
          if (item.quantity == null) {
            quantity = localStorage.getItem("quantity");
          } else {
            quantity = item.quantity;
          }
          if (Array.isArray(item.diet)) {
            var obj = item.diet;
            value = JSON.stringify(obj);
            const imageTags = item.diet.map((img) => {
              console.log(img);
              return (
                `<img id="diet"
                  src=
                  ` +
                img +
                `
                  alt="specialkost-bild"
                  class="diet_img"
                />
                `
              );
            });
            diet = imageTags;
          } else {
            const singleImage =
              `<img id="diet"
                  src=
                  ` +
              item.diet +
              `
                  alt="specialkost-bild"
                  class="diet_img"
                />
                `;
            diet = singleImage;
            value = item.diet;
          }
          //  item(s) used: item.img / item.id / item.title / item.price / item.quantityPrice / item.id / quantity
          return (
            `
<section class="col mb-4 d-flex flex-row" style="border-bottom: 1px solid #CED3D2; padding-bottom:40px;" id=` +
            item.id +
            `>
    <div class="imgContainer">
      <img id="` +
            item.id +
            `" src="` +
            item.img +
            `" alt="bild på maträtt"
      class="pro_img cartPayDeliver cropImage"/>
    </div>

      <div class="cartDetailContain d-flex flex-column">

      <div class="d-flex flex-row">
          <h5 id="" style="flex-direction: row; display: flex;" class="">` +
            item.title +
            `
            <div style="padding: 10px; margin-top: -17px;" class="d-flex">` +
            diet +
            `</div>

          </h5>
          <h5 style="cursor: pointer;" onclick="removeItem(` +
            item.id +
            `)" class="ms-auto me-4">Ta bort <i id="ta-bort-x" style="transform: rotate(45deg); margin-bottom: 20px;" class="fas fa-plus"></i></h5>
      </div>

        <p data-bs-toggle="tooltip" data-bs-placement="top" title="${item.description}" class="food-description" style="width: 400px; max-height:50px;">
            ${item.description}
        </p>

        <div class="pro_select d-flex flex-direction-row" style="width: 100%;">

           <div class="quentity_btn">
              <button class="decrease">
              <i style="font-size: 12px; line-height: 3;" class="fas fa-minus"></i>
              </button>
              <input class="quantity" type="text" value=` +
            quantity +
            `>
              <button class="increase">
              <i id="plus-cart" style="font-size: 12px; line-height: 3;" class="fas fa-plus"></i>
              </button>
           </div>

            <div class="pro_icon d-flex">
                  <button class="mx-3" onclick="removeItem(` +
            item.id +
            `)" href="#"><i class="fas fa-trash-alt" style="font-size: 17px; color:#FF6633; margin-right: 10px; margin-top: 50px;"></i>
                </button>
            </div>

            <div id="final-price" class="d-flex flex-row align-items-center ms-auto me-4">
                <h6 class="quantity_price currency mb_0">` +
            item.quantityPrice +
            `
                </h6>
                <h6 class="currency mb_0">kr</h6>
            </div>

          </div>

        </div>
</div>
</section>

            `

            //   `
            // <tr id= "` +
            //   item.id +
            //   `">
            // <td data-label="Bild" class="pro_img">
            //               <img
            //                 src="` +
            //   item.img +
            //   `"
            //                 alt="rätt-bild"
            //                 class="img-fluid w-100"
            //               />
            //             </td>

            //             <td data-label="Detaljer" class="pro_name">
            //               <a href="#">` +
            //   item.title?.replace(/'/g, "") +
            //   `</a>
            //             </td>
            //             <td data-label="Pris" class="pro_status">
            //               <h6>` +
            //   item.price +
            //   `kr</h6>
            //             </td>

            //             <td data-label="Kvantitet" class="pro_select">
            //             <div class="quentity_btn">
            //             <button class="decrease">
            //             <i class="fa fa-minus"></i2>
            //           </button>
            //           <input class="quantity" type="text" value=` +
            //   quantity +
            //   `>
            //           <button class="increase">
            //             <i class="fa fa-plus"></i>
            //           </button>
            //         </div>
            //             </td>

            //             <td data-label="Total" class="pro_tk">
            //             <div class="quentity_btn">
            //               <h6 class="quantity_price">` +
            //   item.quantityPrice +
            //   `</h6>
            //             <h6 class="currency mb_0">kr</h6>
            //             </div>
            //             </td>

            //             <td data-label="Ta bort" class="pro_icon">
            //               <button onclick="removeItem(` +
            //   item.id +
            //   `)" href="#"><i class="fas fa-trash-alt"></i></button>
            //             </td>
            //             </tr>
            //             `
          );
        })
        .join("");
      cartItem.innerHTML = htmlString;
      return id;
    }
  }
};

let itemDescrip = document.querySelectorAll(".food-description");

function truncateDescrip(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - 3) + "...";
  }
  return str;
}

setTimeout(() => {
  let itemDescrip = document.querySelectorAll(".food-description");
  if (itemDescrip) {
    itemDescrip.forEach((item) => {
      let fullDescrip = item.textContent;
      let text = item.textContent;
      item.textContent = truncateDescrip(text, 60);
    });
  } else {
    console.error("not available yet");
  }
}, 100);

///////////// enable tooltips (bootstrap) ///////////
document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

//Display cost summary
const displaySummary = () => {
  formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
  console.log(formDataArry);
  summary.insertAdjacentHTML(
    "afterend",
    `
      <div>
      <p class="mb-1" style="padding:10px; background:lightgrey;">Frakt <span></span></p>
      <p style="padding:10px; background:lightgrey; class="quantity_price">Totalt kostnad inkl.moms <span></span></p>
      </div>
      `
  );
  displaySummary();

  // copy
  // const displayNewCart = () => {
  //   const tableHead = document.getElementById("table_head");
  //   if (cartItem !== null) {
  //     formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
  //     if (formDataArry === null) {
  //       tableHead.classList.remove("block");
  //       tableHead.classList.add("hide");
  //       cartItem.insertAdjacentHTML(
  //         "afterend",
  //         `<h4 class="single_team_text" style="padding: 20px; text-align: center">
  //           Din varukorg är tom
  //         </h4>`
  //       );
  //     } else {
  //       tableHead.classList.remove("hide");
  //       tableHead.classList.add("block");
  //       const htmlString = formDataArry
  //         .map((item) => {
  //           id = item.id;
  //           let quantity;
  //           if (item.quantity == null) {
  //             quantity = localStorage.getItem("quantity");
  //           } else {
  //             quantity = item.quantity;
  //           }
  //           return (
  //             `
  //           <tr id= "` +
  //             item.id +
  //             `">
  //           <td data-label="Bild" class="pro_img">
  //                         <img
  //                           src="` +
  //             item.img +
  //             `"
  //                           alt="rätt-bild"
  //                           class="img-fluid w-100"
  //                         />
  //                       </td>

  //                       <td data-label="Detaljer" class="pro_name">
  //                         <a href="#">` +
  //             item.title?.replace(/'/g, "") +
  //             `</a>
  //                       </td>
  //                       <td data-label="Pris" class="pro_status">
  //                         <h6>` +
  //             item.price +
  //             `kr</h6>
  //                       </td>

  //                       <td data-label="Kvantitet" class="pro_select">
  //                       <div class="quentity_btn">
  //                       <button class="decrease">
  //                       <i class="fa fa-minus"></i>
  //                     </button>
  //                     <input class="quantity" type="text" value=` +
  //             quantity +
  //             `>
  //                     <button class="increase">
  //                       <i class="fa fa-plus"></i>
  //                     </button>
  //                   </div>
  //                       </td>

  //                       <td data-label="Total" class="pro_tk">
  //                       <div class="quentity_btn">
  //                         <h6 class="quantity_price">` +
  //             item.quantityPrice +
  //             `</h6>
  //                       <h6 class="currency mb_0">kr</h6>
  //                       </div>
  //                       </td>

  //                       <td data-label="Ta bort" class="pro_icon">
  //                         <button onclick="removeItem(` +
  //             item.id +
  //             `)" href="#"><i class="fas fa-trash-alt"></i></button>
  //                       </td>
  //                       </tr>`
  //           );
  //         })
  //         .join("");
  //       cartItem.innerHTML = htmlString;
  //       return id;
  //     }
  //   }
  // };
};

displayNewCart();
totalSum();
totalQuantity();

/////////////////////////////////
///////// Dashboard functionality start ///////////
///////////////////////////////

// function callUsers() {
//    fetch("https://localhost:7216/subs")
//     .then((resp) => resp.json())
//     .then((data) => console.log(data));
// }
// callUsers();

if (document.getElementById("dashboard_aside")) {
  document.querySelectorAll(".dashActive").forEach((link) => {
    link.addEventListener("click", function (ev) {
      ev.preventDefault();
      document
        .querySelectorAll(".dashActive")
        .forEach((link) => link.classList.remove("activeLink"));
      this.classList.add("activeLink");
    });
  });
}

function unlockForms(btn) {
  const dashForm = btn.parentElement.nextElementSibling.closest(".dash_forms");
  const listInputs = dashForm.querySelectorAll("input");
  listInputs.forEach((input) => {
    input.removeAttribute("disabled");
  });
  dashForm.querySelector(".dashboard_contact_btns").style.display = "block";
}

function formCancelEdit(btn) {
  const dashForm = btn.parentElement.closest(".dash_forms");
  const listInputs = dashForm.querySelectorAll("input");
  listInputs.forEach((input) => {
    input.setAttribute("disabled", "");
  });
  dashForm.querySelector(".dashboard_contact_btns").style.display = "none";
}

function dash_myProfile() {
  const myProfile = document.getElementById("contain_user_content");
  const dashAside = document.getElementById("dashboard_aside");
  let linkProfile = document.getElementById("#dash_profile");

  if (myProfile) {
    myProfile.remove();
  }

  if (!dashAside) {
    console.error("Error! element missing!");
  }

  const htmlString = `
  <section
  id="contain_user_content"
  class="flex-grow-1 wow fadeInUp"
  style="width: 200px; height: fit-content"
  >
  <section class="p-4">
  <p style="border-bottom: 1px solid lightgrey;" class="mb-4"><i class="fas fa-arrow-left"></i>Tillbaka</p>
          <h2>Min Profil</h2>

          <section id="profilePage" class="dashboard_contact">
            <div class="d-flex">
              <h3>Kontaktinformation</h3>
              <i
                onclick="unlockForms(this)"
                class="far fa-edit ms-auto align-self-center unlock_form"
                style="font-size: 32px"
              ></i>
            </div>
            <form action="" class="dash_forms">
              <div class="d-flex flex-direction-row" style="gap: 15px">
                <div class="dash_inputs flex-grow-1">
                  <label for="fname">Förnamn</label>
                  <input
                    disabled
                    id="fname"
                    type="text"
                    placeholder="Ange ditt förnamn"
                  />
                </div>
                <div class="dash_inputs flex-grow-1">
                  <label for="lname">Efternamn</label>
                  <input
                    disabled
                    id="lname"
                    type="text"
                    placeholder="Ange ditt efternamn"
                  />
                </div>
              </div>
              <div class="dash_inputs">
                <label for="email">Email</label>
                <input
                  disabled
                  type="text"
                  id="email"
                  placeholder="Ange din email"
                />
              </div>
              <div class="dash_inputs">
                <label for="pass">Lösenord</label>
                <input
                  disabled
                  type="password"
                  id="pass"
                  placeholder="Ange lösenord"
                />
              </div>
              <div class="d-flex flex-direction-row" style="gap: 15px">
                <div class="dash_inputs flex-grow-1">
                  <label for="country">Land</label>
                  <input
                    disabled
                    id="country"
                    type="text"
                    placeholder="Sverige +46"
                  />
                </div>
                <div class="dash_inputs flex-grow-1">
                  <label for="phone">Telefonnumer</label>
                  <input
                    disabled
                    id="phone"
                    type="number"
                    placeholder="0712345678"
                  />
                </div>
              </div>
              <div class="dashboard_contact_btns">
                <button
                  onclick="formCancelEdit(this)"
                  class="btn btn-secondary dashCancel"
                  type="button"
                >
                  Avbryt
                </button>
                <button class="btn btn-secondary dashConfirm" type="button">
                  Spara Ändringar
                </button>
              </div>
            </form>
          </section>

          <section class="dashboard_contact" id="företag">
            <div class="d-flex">
              <h3>Företagsinformation</h3>
              <i
                onclick="unlockForms(this)"
                class="far fa-edit ms-auto align-self-center"
                style="font-size: 32px"
              ></i>
            </div>
            <form action="" class="dash_forms">
              <div class="d-flex flex-direction-row" style="gap: 15px">
                <div class="dash_inputs flex-grow-1">
                  <label for="compName">Företagsnamn</label>
                  <input disabled type="text" name="" id="compName" />
                </div>
                <div class="dash_inputs flex-grow-1">
                  <label for="orgNumb">Organisationsnummer</label>
                  <input disabled type="text" name="" id="orgNumb" />
                </div>
              </div>

              <div class="dash_inputs">
                <label for="invoice">Fakturering adress</label>
                <input disabled type="text" name="" id="invoice" />
              </div>

              <div class="d-flex flex-direction-row" style="gap: 15px">
                <div class="dash_inputs flex-grow-1">
                  <label for="postal">Postnumer</label>
                  <input disabled type="text" name="" id="postal" />
                </div>
                <div class="dash_inputs flex-grow-1">
                  <label for="region">Ort</label>
                  <input disabled type="text" name="" id="region" />
                </div>
              </div>

              <div class="dashboard_contact_btns">
                <button
                  onclick="formCancelEdit(this)"
                  class="btn btn-secondary dashCancel"
                  type="button"
                >
                  Avbryt
                </button>
                <button class="btn btn-secondary dashConfirm" type="button">
                  Spara Ändringar
                </button>
              </div>
            </form>
          </section>

          <section class="dashboard_contact" id="leverans">
            <div class="d-flex">
              <h3>Leveransinformation</h3>
              <i
                onclick="unlockForms(this)"
                class="far fa-edit ms-auto align-self-center"
                style="font-size: 32px"
              ></i>
            </div>
            <form action="" class="dash_forms">
              <div class="d-flex flex-direction-row" style="gap: 15px">
                <div class="dash_inputs flex-grow-1">
                  <label for="">Förnamn</label>
                  <input disabled type="text" />
                </div>
                <div class="dash_inputs flex-grow-1">
                  <label for="">Efternamn</label>
                  <input disabled type="text" />
                </div>
              </div>

              <div class="dash_inputs">
                <label for="">Gatuadress</label>
                <input disabled type="text" />
              </div>

              <div class="d-flex flex-direction-row" style="gap: 15px">
                <div class="dash_inputs flex-grow-1">
                  <label for="">Postnummer</label>
                  <input disabled type="text" />
                </div>
                <div class="dash_inputs flex-grow-1">
                  <label for="">Ort</label>
                  <input disabled type="text" />
                </div>
              </div>

              <div class="d-flex flex-direction-row" style="gap: 15px">
                <div class="dash_inputs flex-grow-1">
                  <label for="">Portkod/Porttelefon</label>
                  <input disabled type="text" />
                </div>
                <div class="dash_inputs flex-grow-1">
                  <label for="">Våningsplan</label>
                  <input disabled type="text" />
                </div>
              </div>

                <div class="form-check form-switch d-flex align-items-end">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                />
                <label
                  class="form-check-label ms-2"
                  for="flexSwitchCheckDefault"
                  >Lämna utanför dörren</label
                >
                </div>

              <div class="dashboard_contact_btns">
                <button
                  onclick="formCancelEdit(this)"
                  class="btn btn-secondary dashCancel"
                  type="button"
                >
                  Avbryt
                </button>
                <button class="btn btn-secondary dashConfirm" type="button">
                  Spara Ändringar
                </button>
              </div>
            </form>
            </section>

            <div class="d-flex" style="gap:10px; margin-top: 25px;">
            <button data-bs-toggle="modal" data-bs-target="#deleteUser" style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); color:black; background: white; border-color:black;" type="button" class="btn btn-primary">Radera Konto</button>
            <button data-bs-toggle="modal" data-bs-target="#logOutUser" style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); color:white; background:black; border-color:black;" type="button" class="btn btn-primary">Logga Ut</button>
            </div>


            <div class="modal fade" id="deleteUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style="border-bottom:none;">
        <h4 class="modal-title text-center" id="exampleModalLabel">Är du säker på att du vill radera ditt konto?</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Din information kommer att raderas, så du kan inte återaktivera kontot igen om du fortsätter.</p>
      </div>
      <div class="modal-footer mx-auto" style="border-top:none;">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Nej, avbryt</button>
        <button type="button" class="btn btn-primary">Ja, radera kontot</button>
      </div>
    </div>
  </div>
</div>

            <div class="modal fade" id="logOutUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style="border-bottom:none;">
        <h4 class="modal-title text-center" id="exampleModalLabel">Är du säker på att du vill logga ut?</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-footer mx-auto" style="border-top:none;">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Nej, avbryt</button>
        <button type="button" class="btn btn-primary">Ja, logga ut</button>
      </div>
    </div>
  </div>
</div>


        </section>
      </section>
  `;
  dashAside.insertAdjacentHTML("afterend", htmlString);
}

if (document.getElementById("dashboard_aside")) {
  dash_myProfile();
}

function dash_myOrders() {
  const dashAside = document.getElementById("dashboard_aside");
  const myProfile = document.getElementById("contain_user_content");

  if (myProfile) {
    myProfile.remove();
  } else {
    console.error("Element missing!");
  }

  if (!dashAside) {
    console.error("Error! element missing!");
  }

  const htmlString = `
  <section
        id="contain_user_content"
        class="flex-grow-1 wow fadeInUp"
        style="width: 200px; height: fit-content"
      >
      <section class="p-4">
      <p style="border-bottom: 1px solid lightgrey;" class="mb-4"><i class="fas fa-arrow-left"></i>Tillbaka</p>
          <h2>Mina beställningar</h2>

          <p style="margin-top: 30px; font-weight: 600">
            Kommande Beställningar
          </p>
          <section class="dashboard_orders">
            <div class="d-flex">
              <h3>Dag - Månad - Klocka</h3>
              <i
                onclick="dashEditOrder(this)"
                class="far fa-edit ms-auto align-self-center unlock_form"
                style="font-size: 32px; color: #dd3902"
              ></i>
            </div>
            <div>
              <h5>Matlådor - antal(st)</h5>
              <ul class="dash_list">
                <li>3st matlådor av denna sort</li>
                <li>3st av ett annat slag</li>
                <li>4st av den här sorten</li>
              </ul>
              <p style="color: var(--Dark-grey, #595959)">
                du kan aboka din leverans senast den X/9 kl: xx:xx. <span data-bs-toggle="modal" data-bs-target="#cancelOrder" style="text-decoration: underline; cursor:pointer;">Avboka här.</span>
              </p>
            </div>
          </section>

          <p style="margin-top: 30px; font-weight: 600">
            Tidigare Beställningar
          </p>
          <section class="dashboard_orders_previous">
            <div class="d-flex">
              <h3>Dag - Månad - Klocka</h3>
              <i
                onclick="unlockForms(this)"
                class="far fa-edit ms-auto align-self-center"
                style="font-size: 32px; color: #dd3902"
              ></i>
            </div>
            <div>
              <h5>Matlådor - antal(st)</h5>
              <ul class="dash_list">
                <li>3st matlådor av denna sort</li>
                <li>3st av ett annat slag</li>
                <li>4st av den här sorten</li>
              </ul>
              <button
                style="color: white; background-color: #dd3902"
                type="button"
                class="btn mt-3"
              >
                Beställ igen
              </button>
            </div>
          </section>
        </section>
      </section>


      <div class="modal fade" id="cancelOrder" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">

      <div class="modal-header"  style="border-bottom: none">
        <h3 class="modal-title" id="exampleModalLabel">Är du säker på att du vill avboka denna leverans?</h3>
      </div>

      <div class="modal-body">

                <section class="dashboard_orders">
            <div class="d-flex">
              <h3>Dag - Månad - Klocka</h3>
            </div>
            <div>
              <h5>Matlådor - antal(st)</h5>
              <ul class="dash_list">
                <li>3st matlådor av denna sort</li>
                <li>3st av ett annat slag</li>
                <li>4st av den här sorten</li>
              </ul>
            </div>
          </section>

      </div>

      <div class="modal-footer mx-auto" style="border-top: none">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Nej, avbryt</button>
        <button type="button" class="btn btn-primary">Ja, avboka</button>
      </div>
    </div>
  </div>
</div>


  `;
  dashAside.insertAdjacentHTML("afterend", htmlString);
}

function dash_mySubs() {
  const dashAside = document.getElementById("dashboard_aside");
  const myProfile = document.getElementById("contain_user_content");

  if (myProfile) {
    myProfile.remove();
  } else {
    console.error("Element missing!");
  }

  if (!dashAside) {
    console.error("Error! element missing!");
  }

  const htmlString = `
  <section
        id="contain_user_content"
        class="flex-grow-1 wow fadeInUp"
        style="width: 200px; height: fit-content"
      >
      <section class="p-4">
      <p style="border-bottom: 1px solid lightgrey;" class="mb-4"><i class="fas fa-arrow-left"></i>Tillbaka</p>
          <h2>Mina beställningar</h2>

          <section class="dashboard_orders">
            <div class="d-flex">
              <h3>Dag - Månad - Klocka</h3>
              <h3 class="ms-auto align-self-center" style="color: #0eb116">
                Aktiv
              </h3>
            </div>
            <div>
              <h5>Matlådor - antal(st)</h5>
              <ul class="dash_list">
                <li>3st matlådor av denna sort</li>
                <li>3st av ett annat slag</li>
                <li>4st av den här sorten</li>
              </ul>
            </div>
            <div class="d-flex flex-row" style="gap: 10px">
              <p style="color: #dd3902">Avsluta Prenumeration</p>
              <p style="color: #dd3902">Pausa Prenumeration</p>
            </div>
          </section>

          <section style="margin-top: 20px" class="dashboard_sub_delivery">
            <div class="d-flex">
              <h5>Leveransfönster</h5>
              <i
                onclick="dashEditDelivTime(this)"
                class="far fa-edit ms-auto align-self-center unlock_form"
                style="font-size: 32px; color: #dd3902"
              ></i>
            </div>
            <p>Dag - kl: xx:xx</p>
          </section>

          <section style="margin-top: 20px" class="dashboard_orders">
            <div class="d-flex">
              <h5>Antal Portioner Per Leverans</h5>
            </div>

            <div
              class="d-flex flex-row justify-content-center"
              style="gap: 10px"
            >
              <div class="col-3">
                <div class="box box4" data-value="10">
                  <img
                    class="green-check-kost2"
                    src="images/Eo_circle_green_checkmark.svg.webp"
                    alt=""
                  />
                  <p style="font-weight: 600">10</p>
                </div>
              </div>

              <div class="col-3">
                <div class="box box4" data-value="15">
                  <img
                    class="green-check-kost2"
                    src="images/Eo_circle_green_checkmark.svg.webp"
                    alt=""
                  />
                  <p style="font-weight: 600">15</p>
                </div>
              </div>

              <div class="col-3">
                <div class="box box4" data-value="20">
                  <img
                    class="green-check-kost2"
                    src="images/Eo_circle_green_checkmark.svg.webp"
                    alt=""
                  />
                  <p style="font-weight: 600">20</p>
                </div>
              </div>
            </div>

            <div
              style="max-width: 388px; display: flex; margin: auto"
              class="box1 large-box"
            >
              <div class="row">
                <div class="col-7 text">
                  <h5 style="text-align: left; margin-left: 10px">
                    Välja ett eget antal
                  </h5>
                  <h6
                    style="
                      width: 250px;
                      text-align: left;
                      margin-left: 10px;
                      font-size: 15px;
                    "
                  >
                    Minst 10 matlådor per beställning
                  </h6>
                </div>
                <div
                  style="
                    margin-left: 40px;
                    border-radius: 4px;
                    border: 1px solid #f63;
                    background: #fff;
                    width: 110px;
                    justify-content: center;
                  "
                  class="col-3 quantity-btn d-flex align-items-center justify-content-end"
                >
                  <button
                    class="btn btn-light"
                    style="
                      background-color: white;
                      border-color: white;
                      border-right: 1 px solid #f63 !important;
                    "
                  >
                    -
                  </button>
                  <span class="mx-2">10</span>
                  <button
                    class="btn btn-light"
                    style="
                      background-color: white;
                      border-color: white;
                      border-left: 1 px solid #f63 !important;
                    "
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section class="dashboard_contact" id="leverans">
            <div class="d-flex">
              <h3>Leveransinformation</h3>
              <i
                onclick="unlockForms(this)"
                class="far fa-edit ms-auto align-self-center"
                style="font-size: 32px; color: #fc5633"
              ></i>
            </div>
            <form action="" class="dash_forms">
              <div class="d-flex flex-direction-row" style="gap: 15px">
                <div class="dash_inputs flex-grow-1">
                  <label for="">Förnamn</label>
                  <input disabled type="text" />
                </div>
                <div class="dash_inputs flex-grow-1">
                  <label for="">Efternamn</label>
                  <input disabled type="text" />
                </div>
              </div>

              <div class="dash_inputs">
                <label for="">Gatuadress</label>
                <input disabled type="text" />
              </div>

              <div class="d-flex flex-direction-row" style="gap: 15px">
                <div class="dash_inputs flex-grow-1">
                  <label for="">Postnummer</label>
                  <input disabled type="text" />
                </div>
                <div class="dash_inputs flex-grow-1">
                  <label for="">Ort</label>
                  <input disabled type="text" />
                </div>
              </div>

              <div class="d-flex flex-direction-row" style="gap: 15px">
                <div class="dash_inputs flex-grow-1">
                  <label for="">Portkod/Porttelefon</label>
                  <input disabled type="text" />
                </div>
                <div class="dash_inputs flex-grow-1">
                  <label for="">Våningsplan</label>
                  <input disabled type="text" />
                </div>
              </div>

              <div class="form-check form-switch d-flex align-items-end">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                />
                <label
                  class="form-check-label ms-2"
                  for="flexSwitchCheckDefault"
                  >Lämna utanför dörren</label
                >
              </div>

              <div class="dashboard_contact_btns">
                <button
                  onclick="formCancelEdit(this)"
                  class="btn btn-secondary dashCancel"
                  type="button"
                >
                  Avbryt
                </button>
                <button class="btn btn-secondary dashConfirm" type="button">
                  Spara Ändringar
                </button>
              </div>
            </form>
          </section>
        </section>
      </section>
  `;
  dashAside.insertAdjacentHTML("afterend", htmlString);
}

function dash_myDeals() {
  const dashAside = document.getElementById("dashboard_aside");
  const myProfile = document.getElementById("contain_user_content");

  if (myProfile) {
    myProfile.remove();
  } else {
    console.error("Element missing!");
  }

  if (!dashAside) {
    console.error("Error! element missing!");
  }

  const htmlString = `
        <section
        id="contain_user_content"
        class="flex-grow-1 wow fadeInUp"
        style="width: 200px; height: fit-content"
      >
      <section class="p-4">
      <p style="border-bottom: 1px solid lightgrey;" class="mb-4"><i class="fas fa-arrow-left"></i>Tillbaka</p>
          <h2>Erbjudanden & Presentkort</h2>

          <div class="mt-5">
            <h3>Mina Erbjudande</h3>
            <p class="mt-3 mb-3">
              Du kan inte kombinera flera rabatter samtidigt
            </p>

            <div class="coupon_container d-flex flex-row" style="gap: 20px">
              <section class="dashboard_deals">
                <div class="d-flex flex-column" style="gap: 10px">
                  <h4 style="font-weight: bold">
                    10% på din första kasse när du prenumererar!
                  </h4>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                  <button
                    disabled
                    type="button"
                    class="btn btn-secondary w-60 mx-auto"
                  >
                    Rabatt Aktiverad
                  </button>
                </div>
              </section>
              <section class="dashboard_deals">
                <div class="d-flex flex-column" style="gap: 10px">
                  <h4 style="font-weight: bold">
                    10% på din första kasse när du prenumererar!
                  </h4>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                  <button type="button" class="btn btn-secondary w-60 mx-auto">
                    Aktivera Rabatt
                  </button>
                </div>
              </section>
            </div>
          </div>

          <div class="mt-3">
            <p style="color: #252627">Addera en rabattkod</p>
            <div id="rabatt-kod" class="d-flex">
              <input
                id="rabatt-input"
                class="rounded-left"
                type="text"
                style="width: 20%"
              />
              <button type="button" class="btn btn-dark rounded-0">
                Aktivera
              </button>
            </div>
          </div>

          <div class="mt-5">
            <h3>Kreditvärde</h3>
            <section style="margin-top: 20px" class="dashboard_deal_invite">
              <div class="d-flex flex-column" style="gap: 15px">
                <h5>Bjud in en vän och få rabatt på nästa matkasse!</h5>
                <p>Bjud in en vän och samla kreditvärde.</p>
                <div class="dash_inputs">
                  <label for="fname">Dins väns mejladress</label>
                  <div class="d-flex flex-row" style="gap: 20px">
                    <input
                      class="w-75"
                      id="fname"
                      type="email"
                      placeholder="Ange din väns mejladress"
                    />
                    <button type="submit" class="btn btn-primary w-50">
                      Skicka Inbjudan
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section style="margin-top: 20px" class="dashboard_deal_invite">
            <h5>Skickade inbjudningar</h5>
            <div class="d-flex flex-column" style="gap: 15px">
              <ul>
                <li>mejladress vän 1</li>
                <li>mejladress vän 2</li>
                <li>mejladress vän 3</li>
              </ul>
            </div>
          </section>

          <div class="mt-5">
            <h3>Mitt Presentkort</h3>
            <section style="margin-top: 20px" class="dashboard_deal_invite">
              <h5>Löst in ett presentkort</h5>
              <div class="mt-3">
                <p style="color: #252627">Ange presentkortets ID.</p>
                <div id="rabatt-kod" class="d-flex">
                  <input
                    id="rabatt-input"
                    class="rounded-left"
                    type="text"
                    style="width: 20%"
                  />
                  <button type="button" class="btn btn-dark rounded-0">
                    Aktivera
                  </button>
                </div>
              </div>
            </section>

            <section
              style="margin-top: 20px"
              class="dashboard_deal_invite d-flex"
              style="gap: 15px"
            >

            <div class="d-flex">
            <h5>Saldo Presentkort</h5>
            <h5 class="ms-auto" style="color: #0eb116">Aktiv</h5>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>250:-</p>
            </section>
          </div>

          <div class="mt-5">
            <h3>Ge bort ett presentkort</h3>
            <section
              style="margin-top: 20px"
              class="dashboard_deal_invite d-flex"
              style="gap: 15px"
            >
              <b>Ge bort en smakfull upplevelse</b>
              <p>
                Digitalt presentkort - den perfekta gåvan till någon speciell
              </p>
            </section>
          </div>
        </section>
      </section>
  `;
  dashAside.insertAdjacentHTML("afterend", htmlString);
}

function dash_myNotifications() {
  const dashAside = document.getElementById("dashboard_aside");
  const myProfile = document.getElementById("contain_user_content");

  if (myProfile) {
    myProfile.remove();
  } else {
    console.error("Element missing!");
  }

  if (!dashAside) {
    console.error("Error! element missing!");
  }

  const htmlString = `
        <section
        id="contain_user_content"
        class="flex-grow-1 wow fadeInUp"
        style="width: 200px; height: fit-content"
      >
      <section class="p-4">
      <p style="border-bottom: 1px solid lightgrey;" class="mb-4"><i class="fas fa-arrow-left"></i>Tillbaka</p>
          <h2>Aviseringar</h2>

          <div class="mt-4">
            <b>Preferenser för aviseringar via email</b>

            <section
              class="dashboard_notifications d-flex flex-column mt-3"
              style="gap: 15px"
            >
              <div class="form-check form-switch d-flex align-items-end">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  class="form-check-label ms-3"
                  for="flexSwitchCheckDefault"
                  >Nyhetsbrev och tips från kocken</label
                >
              </div>
              <div class="form-check form-switch d-flex align-items-end">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  class="form-check-label ms-3"
                  for="flexSwitchCheckDefault"
                  >Rabatter och erbjudanden</label
                >
              </div>
              <div class="form-check form-switch d-flex align-items-end">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  class="form-check-label ms-3"
                  for="flexSwitchCheckDefault"
                  >Feedback på måltider</label
                >
              </div>
              <div class="form-check form-switch d-flex align-items-end">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  class="form-check-label ms-3"
                  for="flexSwitchCheckDefault"
                  >Feedback till Yumfoods</label
                >
              </div>
              <div class="form-check form-switch d-flex align-items-end">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  class="form-check-label ms-3"
                  for="flexSwitchCheckDefault"
                  >Produktuppdateringar om din prenumeration</label
                >
              </div>
              <div class="form-check form-switch d-flex align-items-end">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  class="form-check-label ms-3"
                  for="flexSwitchCheckDefault"
                  >Alla mejl</label
                >
              </div>
            </section>
          </div>
        </section>
      </section>
  `;
  dashAside.insertAdjacentHTML("afterend", htmlString);
}

function dashEditOrder(btn) {
  const currentOrder = document.querySelector(".dashboard_orders");
  const htlmString = `
  <h3>Redigera Beställning</h3>

    <div class="d-flex flex-row justify-content-center" style="gap: 10px; margin-top:20px;">
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Veckodag
        </button>

        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Datum #1</a></li>
        <li><a class="dropdown-item" href="#">Datum #2</a></li>
        <li><a class="dropdown-item" href="#">Datum #3</a></li>
        </ul>
        </div>

        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Tidspann
        </button>

        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Klocka #1</a></li>
        <li><a class="dropdown-item" href="#">Klocka #2</a></li>
        <li><a class="dropdown-item" href="#">Klocka #3</a></li>
        </ul>
        </div>

        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Kosttyp
        </button>

        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">kost #1</a></li>
        <li><a class="dropdown-item" href="#">kost #2</a></li>
        <li><a class="dropdown-item" href="#">kost #3</a></li>
        </ul>
        </div>

        </div>

        <div style="
        max-width: 180px;
        background: white;
        padding: 8px;
        margin: auto;
        border-radius: 10px;
        margin-top: 15px;
        ">
          <div class="d-flex flex-column">
            <div class="text">
              <h5 style="text-align: center;">
                Antal portioner
              </h5>
            </div>
            <div
              style="
                border-radius: 4px;
                border: 1px solid #f63;
                background: #fff;
                width: 110px;
                justify-content: center;
                margin:auto;
              "
              class="col-3 quantity-btn d-flex align-items-center justify-content-end"
            >
              <button
                class="btn btn-light"
                style="
                  background-color: white;
                  border-color: white;
                  border-right: 1 px solid #f63 !important;
                "
              >
                -
              </button>
              <span class="mx-2">10</span>
              <button
                class="btn btn-light"
                style="
                  background-color: white;
                  border-color: white;
                  border-left: 1 px solid #f63 !important;
                "
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div class="d-flex flex-row justify-content-center" style="gap:10px; margin-top:15px;">
        <button onclick="dashCancelEdit()" type="button" class="btn btn-primary">Avbryt</button>
        <button onclick="dashConfirmEdit()" type="button" class="btn btn-primary">Spara Ändringar</button>
        </div>
  `;
  return (currentOrder.innerHTML = htlmString);
}

function dashEditDelivTime(btn) {
  const currentOrder = document.querySelector(".dashboard_sub_delivery");
  const htlmString = `
  <h5>Redigera Beställning</h5>

    <div class="d-flex flex-row justify-content-center" style="gap: 10px; margin-top:20px;">
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Veckodag
        </button>

        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Datum #1</a></li>
        <li><a class="dropdown-item" href="#">Datum #2</a></li>
        <li><a class="dropdown-item" href="#">Datum #3</a></li>
        </ul>
        </div>

        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Tidspann
        </button>

        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Klocka #1</a></li>
        <li><a class="dropdown-item" href="#">Klocka #2</a></li>
        <li><a class="dropdown-item" href="#">Klocka #3</a></li>
        </ul>
        </div>

        </div>

        <div class="d-flex flex-row justify-content-center" style="gap:10px; margin-top:15px;">
        <button onclick="dashCancelEditSub()" type="button" class="btn btn-primary">Avbryt</button>
        <button onclick="dashConfirmEditSub()" type="button" class="btn btn-primary">Spara Ändringar</button>
        </div>
  `;
  return (currentOrder.innerHTML = htlmString);
}

function dashCancelEdit() {
  const currentOrder = document.querySelector(".dashboard_orders");
  const htlmString = `
            <div class="d-flex">
              <h3>Dag - Månad - Klocka</h3>
              <i
                onclick="dashEditOrder(this)"
                class="far fa-edit ms-auto align-self-center unlock_form"
                style="font-size: 32px; color: #dd3902"
              ></i>
            </div>
            <div>
              <h5>Matlådor - antal(st)</h5>
              <ul class="dash_list">
                <li>3st matlådor av denna sort</li>
                <li>3st av ett annat slag</li>
                <li>4st av den här sorten</li>
              </ul>
              <p style="color: var(--Dark-grey, #595959)">
                du kan aboka din leverans senast den X/9 kl: xx:xx. Avboka här
              </p>
            </div>
  `;
  return (currentOrder.innerHTML = htlmString);
}

function dashConfirmEdit() {}

function dashCancelEditSub() {
  const currentOrder = document.querySelector(".dashboard_sub_delivery");
  const htlmString = `
            <div class="d-flex">
              <h5>Leveransfönster</h5>
              <i
                onclick="dashEditDelivTime(this)"
                class="far fa-edit ms-auto align-self-center unlock_form"
                style="font-size: 32px; color: #dd3902"
              ></i>
            </div>
            <p>Dag - kl: xx:xx</p>
  `;
  return (currentOrder.innerHTML = htlmString);
}

function dashConfirmEditSub() {}

/////////////////////////////////
///////// Dashboard functionality end ///////////
///////////////////////////////

//Bind the buttons handling the increment and decrement buttons to a function and run it once the DOM loads. When the DOM dynamically changes (e.g. insertAdjacentHTML, removeItem()), the intitally attached addEventListeners are not there anymore and need to be reattached both on the DOM and for the "removeItem" function.
function cartBtns() {
  const increase = document.querySelectorAll(".increase");
  const decrease = document.querySelectorAll(".decrease");

  increase.forEach((btn) => {
    btn.addEventListener("click", increment);
  });

  decrease.forEach((btn) => {
    btn.addEventListener("click", decrement);
  });
}
cartBtns();

//On page load, display the first open accordion using DOMContentLoaded event
/*
let customerHandling = document.getElementById("customerHandling");
if (customerHandling !== null) {
  document.addEventListener("DOMContentLoaded", () => {
    const navHeader = document.querySelector(".main_menu").offsetHeight;
    const header = document.getElementById("headingOne");
    const fixedHeader = header.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: fixedHeader - navHeader - 50,
      behavior: "smooth",
    });
  });
}
*/

//Grab the "jump to next accordion" buttons
const accordOne = document.querySelector(".nextAccord1");
const accordTwo = document.querySelector(".nextAccord2");

// Two functions with scrollTo() method for both the second and third accordions. Since the navbar is in the way and obstructing the view, we need to know its height with offsetHeight, the size and relative position of the accordion header with getBoundingClientRect() and with the Window object scroll to the appropriate accordion header with the "next" buttons. The setTimeout is a temporary fix and might be due to the animations of opening and closing the accordion having to be played out to its end before it starts scrolling, mutationObserver could be an alternate solution.
function nextAccord1() {
  const navHeader = document.querySelector(".main_menu").offsetHeight;
  const header = document.querySelector("#headingTwo");
  const acc = document.querySelector(".accordOne");
  const nextAccord = document.querySelector(".accordTwo");
  acc.classList.remove("show");
  nextAccord.classList.add("show");

  setTimeout(() => {
    const fixedHeader = header.getBoundingClientRect().top + window.scrollY;
    console.log(fixedHeader);
    window.scrollTo({
      top: fixedHeader - navHeader - 100,
      behavior: "smooth",
    });
  }, 230);

  // header.scrollIntoView({ behavior: "smooth", block: "start" });

  // if (nextAccord.classList.contains("show")) {
  //   header.scrollIntoView({ behavior: "smooth", block: "start" });
  // } else {
  //   console.log("no can do");
  // }

  // nextAccord.addEventListener("transitionend", function transitionEnd() {
  //   nextAccord.removeEventListener("transitionend", transitionEnd);
  //   header.scrollIntoView({ behavior: "smooth", block: "start" });
  // });
}

function nextAccord2() {
  // Subject to change
  // const navHeader = document.querySelector(".main_menu").offsetHeight;
  // const header = document.querySelector("#headingThree");
  // const acc = document.querySelector(".accordTwo");
  // const nextAccord = document.querySelector(".accordThree");
  // acc.classList.remove("show");
  // nextAccord.classList.add("show");
  // setTimeout(() => {
  //   const fixedHeader = header.getBoundingClientRect().top + window.scrollY;
  //   console.log(fixedHeader);
  //   window.scrollTo({
  //     top: fixedHeader - navHeader - 120,
  //     behavior: "smooth",
  //   });
  // }, 250);
}
// Display the upcoming 2 weeks while excluding the weekends (saturdays & sundays) while initially jumping ahead 3 days, in total 10 days.
// 14 days in a week, but adding 3 results in 17
// Grab the dates, format the display for dates using the options object and inserting that to "toLocaleString"
// with a for loop, initialize "i" with 3 representing the 3 days ahead, check the current day with "checkDay",
// with an if statement, as long as the "checkDay" is not on a weekend, push the formatted date into an empty array
// and finally increment the dates with '1' for the next loop with setDate

const dates = new Date();
const options = { day: "numeric", month: "short", weekday: "long" };
const twoWeeks = 17;

let threeDaysAhead = [];
dates.setDate(dates.getDate() + 3);

for (let i = 3; i < twoWeeks; i++) {
  const checkDay = dates.getDay();
  if (checkDay !== 0 && checkDay !== 6) {
    const sweDate = dates.toLocaleString("sv-SE", options);
    threeDaysAhead.push(sweDate.toUpperCase());
  }
  dates.setDate(dates.getDate() + 1);
}

console.log("Available dates: " + threeDaysAhead);

const dateStrings = threeDaysAhead
  .map((day) => {
    const [weekday, days, month] = day.split(" ");
    return `

        <div class="swiper-slide date">
            <div class="date-box box1 text-center date">
              <div class="day">${weekday}</div>
              <div class="date"><span style="margin-right: 5px;">${days}</span>${month}</div>
            </div>
        </div>

`;
  })
  .join("");

const deliveryDates = document.getElementById("deliverDates");
if (deliveryDates !== null) {
  deliveryDates.innerHTML = dateStrings;
}

const theBox = document.querySelectorAll(".box1");

theBox.forEach((btn) => {
  btn.addEventListener("click", function () {
    theBox.forEach((b) => b.classList.remove("box-selected"));
    btn.classList.add("box-selected");
    const dayText = btn.querySelector(".day");
    const dateText = btn.querySelector(".date");
    console.log(dayText.textContent + " " + dateText.textContent);
  });
});

const timeBox = document.querySelectorAll(".tid-box");

timeBox.forEach((btn) => {
  btn.addEventListener("click", function () {
    timeBox.forEach((b) => b.classList.remove("tid-box-selected"));
    btn.classList.add("tid-box-selected");
    const deliverClock = btn.childNodes[1].textContent;
    const deliverShipping = btn.childNodes[3].textContent;
    console.log("kl:" + deliverClock + " / " + "frakt:" + deliverShipping);
  });
});

// theBox.addEventListener('click', function() {
// theBox.classList.toggle("box-selected");
// })

// Arrow buttons, add a click function to move it left and right whilst checking the clip-path to dynamically
// move it left and right depending where the element is being moved in order to ensure only the middle is visible

////////////////////////////////////////////////////////////////////////////////
///////////////gamla lösning start /////////////////////////////////////////////

//const clipPaths = [
//  "inset(-15.33% -7.61% -24.62% -2.53%)",
//  "inset(-15.33% -113.01% -24.62% 105.95%)",
//  "inset(-15.33% -220.47% -24.62% 212.38%)",
//  "inset(-15.33% -326.13% -24.62% 319.84%)",
//];

//let xAxis = 0;
//let rightClicks = 0;
//let maxClicks = 3;
//let itemWidth = 415;

//const leftArrow = document.querySelector("#leftArrow");
//const rightArrow = document.querySelector("#rightArrow");
//if (leftArrow !== null) {
//  leftArrow.setAttribute("disabled", true);
//}

//function updateClipPath() {
//  const clipValue = clipPaths[rightClicks];
//  if (deliveryDates !== null) {
//    document.querySelector("#deliverDates").style.clipPath = clipValue;
//  }
//}
//updateClipPath();

//function moveLeft() {
//  if (rightClicks > 0) {
//    rightClicks--;
//    xAxis += itemWidth;
//    document.querySelector(
//      "#deliverDates"
//    ).style.transform = `translateX(${xAxis}px)`;
//    updateClipPath();
//    document.querySelector("#rightArrow").removeAttribute("disabled");
//    if (rightClicks === 0) {
//      document.querySelector("#leftArrow").setAttribute("disabled", true);
//    }
//  }
//}

//function moveRight() {
//  if (rightClicks < maxClicks) {
//    xAxis -= itemWidth;
//    rightClicks++;
//    document.querySelector(
//      "#deliverDates"
//    ).style.transform = `translateX(${xAxis}px)`;
//    updateClipPath();

//    document.querySelector("#leftArrow").removeAttribute("disabled");
//    console.log(rightClicks);
//  }

//  if (rightClicks === maxClicks) {
//    document.querySelector("#rightArrow").setAttribute("disabled", true);
//  }
//}
//if (rightArrow !== null || leftArrow !== null) {
//  document.querySelector("#rightArrow").addEventListener("click", moveRight);
//  document.querySelector("#leftArrow").addEventListener("click", moveLeft);
//}

/////////////////////////// Gamla lösning End//////////////////////////////
//////////////////////////////////////////////////////////////////////////

// <div>
//     <button style="padding:5px; width:100px;">
//     <div>${weekday}</div>
//     <div>${days} ${month}</div>
//     </button>
// </div>

{
  /* <div class="d-flex calendar justify-content-center">
<div class="date-box box1 text-center mx-2">
  <div class="day">Måndag</div>
  <div class="date">2 Sep</div>
</div>
<div class="date-box text-center mx-2">
  <div class="day">Tisdag</div>
  <div class="date">3 Sep</div>
</div>
<div class="date-box box3 text-center mx-2">
  <div class="day">Onsdag</div>
  <div class="date">4 Sep</div>
</div>
</div>  */
}

// ----------------------------------

//Increment function on the + button for quantity
function increment() {
  if (localStorage.getItem("quantity") !== null) {
    const inp = this.previousElementSibling;
    if (inp.value < 20) inp.value = Number(inp.value) + 1;
    if (inp.value > 0) {
      inp.previousElementSibling.removeAttribute("disabled");
    }
    let id = localStorage.getItem("id");
    let price = localStorage.getItem("price");
    price = parseInt(price);
    if (cardModal !== null) {
      var modalQuantityPrice = cardModal.querySelector(".quantity_price");
      var input = cardModal.querySelector(".quantity");
    } else {
      price = parseInt(price);
      var modalQuantityPrice =
        this.parentElement.nextElementSibling.nextElementSibling.querySelector(
          ".quantity_price"
        );
      var input = this.previousElementSibling;
      console.log(input);
    }
    let inputQuantity = inp.value;
    let increaseQuantityPrice = inp.value * price;

    if (cartItem !== null) {
      let tableId = this.closest("section").id;

      let itemIndex = formDataArry.filter((el) => el.id == tableId);
      if (itemIndex) {
        price = itemIndex[0].price;
        increaseQuantityPrice = inp.value * price;
        itemIndex[0].quantityPrice = increaseQuantityPrice;
        modalQuantityPrice.innerHTML = increaseQuantityPrice;
        itemIndex[0].quantity = inputQuantity;
        input.value = inputQuantity;
      }
    } else {
      null;
    }

    localStorage.setItem("formDataArry", JSON.stringify(formDataArry));

    localStorage.setItem(
      "quantity-price",
      (modalQuantityPrice.textContent = increaseQuantityPrice)
    );
    localStorage.setItem("quantity", (input.textContent = inputQuantity));
  } else {
    const inp = this.previousElementSibling;
    if (inp.value < 20) inp.value = Number(inp.value) + 1;
    if (inp.value > 0) {
      inp.previousElementSibling.removeAttribute("disabled");
    }
    for (i = 0; i < formDataArry.length; i++) {
      price = parseInt(formDataArry[i].price);
      quantityPrice = parseInt(formDataArry[i].quantityPrice);
      quantity = parseInt(formDataArry[i].quantity);
    }
    if (cardModal !== null) {
      var modalQuantityPrice = cardModal.querySelector(".quantity_price");
      var input = cardModal.querySelector(".quantity");
    } else {
      price = parseInt(price);
      var modalQuantityPrice =
        this.parentElement.nextElementSibling.nextElementSibling.querySelector(
          ".quantity_price"
        );
      var input = this.previousElementSibling;
    }
    let inputQuantity = inp.value;

    let tableId = this.closest("section").id;
    console.log(tableId);

    let itemIndex = formDataArry.filter((el) => el.id == tableId);
    if (itemIndex) {
      let increaseQuantityPrice = inputQuantity * itemIndex[0].price;
      itemIndex[0].quantityPrice = increaseQuantityPrice;
      modalQuantityPrice.innerHTML = increaseQuantityPrice;
      itemIndex[0].quantity = inputQuantity;
      input.value = inputQuantity;
    }
    localStorage.setItem("formDataArry", JSON.stringify(formDataArry));
  }
  totalSum();
  updateFields();
  totalQuantity();
}

//Decrement function on the button for quantity
// The "this" keyword might cause problems, we can't alway be certain its pointing to the correct button in the correct page and may cause unintended issues with decrementingh items from the cart
//In order to ensure the button pressed is the one the user really clicked on, instead of just having it look for the closest matching class or id, assign a variable to the event.target along with replacing the "this" keywords since event.target is handling that for us now.
function decrement(event) {
  const decBtn = event.target.closest(".decrease");
  console.log(decBtn);
  if (localStorage.getItem("quantity") !== null) {
    const inp = decBtn.nextElementSibling;
    if (inp.value > 0) {
      inp.value = Number(inp.value) - 1;
      console.log(inp.value);
    }
    if (inp.value <= 0) {
      decBtn.setAttribute("disabled", "disabled");
    }
    let id = localStorage.getItem("id");
    let quantityPrice = localStorage.getItem("quantity-price");
    let price = localStorage.getItem("price");
    quantityPrice = parseInt(quantityPrice);
    price = parseInt(price);
    if (cardModal !== null) {
      var modalQuantityPrice = cardModal.querySelector(".quantity_price");
      var input = cardModal.querySelector(".quantity");
    } else {
      price = parseInt(price);
      var modalQuantityPrice =
        decBtn.parentElement.nextElementSibling.nextElementSibling.querySelector(
          ".quantity_price"
        );
      var input = this.nextElementSibling;
    }
    let inputQuantity = inp.value;
    let decreaseQuantityPrice = quantityPrice - price;

    if (cartItem !== null) {
      let tableId = decBtn.closest("section").id;

      let itemIndex = formDataArry.filter((el) => el.id == tableId);
      if (itemIndex) {
        decreaseQuantityPrice = itemIndex[0].quantityPrice - itemIndex[0].price;
        itemIndex[0].quantityPrice = decreaseQuantityPrice;
        modalQuantityPrice.innerHTML = decreaseQuantityPrice;
        itemIndex[0].quantity = inputQuantity;
        input.value = inputQuantity;
      } else {
        null;
      }
    }

    localStorage.setItem("formDataArry", JSON.stringify(formDataArry));

    localStorage.setItem(
      "quantity-price",
      (modalQuantityPrice.textContent = decreaseQuantityPrice)
    );
    localStorage.setItem("quantity", (input.textContent = inputQuantity));
  } else {
    const inp = decBtn.nextElementSibling;
    console.log(inp);
    if (inp.value > 0) {
      inp.value = Number(inp.value) - 1;
    }
    if (inp.value <= 0) {
      decBtn.setAttribute("disabled", "disabled");
    }
    for (i = 0; i < formDataArry.length; i++) {
      price = parseInt(formDataArry[i].price);
      quantityPrice = parseInt(formDataArry[i].quantityPrice);
      quantity = parseInt(formDataArry[i].quantity);
    }
    if (cardModal !== null) {
      var modalQuantityPrice = cardModal.querySelector(".quantity_price");
      var input = cardModal.querySelector(".quantity");
    } else {
      price = parseInt(price);
      var modalQuantityPrice =
        decBtn.parentElement.nextElementSibling.nextElementSibling.querySelector(
          ".quantity_price"
        );
      var input = this.nextElementSibling;
    }
    let inputQuantity = inp.value;

    let tableId = decBtn.closest("section").id;
    console.log(tableId);

    let itemIndex = formDataArry.filter((el) => el.id == tableId);
    if (itemIndex) {
      let decreaseQuantityPrice =
        itemIndex[0].quantityPrice - itemIndex[0].price;
      itemIndex[0].quantityPrice = decreaseQuantityPrice;
      console.log(modalQuantityPrice);
      modalQuantityPrice.innerHTML = decreaseQuantityPrice;
      itemIndex[0].quantity = inputQuantity;
      input.value = inputQuantity;
    }
    localStorage.setItem("formDataArry", JSON.stringify(formDataArry));
  }
  totalSum();
  updateFields();
  totalQuantity();
}

//Remove item from cart
function removeItem(id) {
  let temp = formDataArry.filter((item) => item.id != id);
  console.log(temp);
  localStorage.setItem("formDataArry", JSON.stringify(temp));
  //set item back into storage
  displayNewCart();
  totalQuantity();
  totalSum();
  updateFields();
  //Reattach addEventListeners
  cartBtns();
  if (temp.length == 0) {
    localStorage.clear();
    displayNewCart();
  }
}

let company_button = document.getElementById("company_button");
let private_button = document.getElementById("private_button");
if (company_button !== null || private_button !== null) {
  company_button.addEventListener("click", showCompanyForm);
  private_button.addEventListener("click", showPrivateForm);
} else {
  null;
}

// Show additional inputs on company form
function showCompanyForm() {
  let contactForm = document.getElementById("company");
  if (contactForm !== null) {
    contactForm.innerHTML = `
                <div class="col-xl-12">
                  <div for="company name" class="contact_form_input">
                    <span><i class="fas fa-user"></i></span>
                    <input
                      name="company name"
                      type="text"
                      placeholder="Företagsnamn(bara för företag)"
                    />
                  </div>
                </div>
                <div class="d-flex contact-input">
                <div class="col-xl-6 col-sm-12">
                  <div for="role" class="contact_form_input contact-befattning">
                    <span><i class="fas fa-user"></i></span>
                    <input name="role" type="text" placeholder="Befattning(bara för företag)" />
                  </div>
                </div>
                <div class="col-xl-6 col-sm-12">
                  <div for="number of employees" class="contact_form_input">
                    <span><i class="fas fa-user"></i></span>
                    <input
                      name="number of employees"
                      type="number"
                      placeholder="Antal anställda(bara för företag)"
                    />
                  </div>
                </div>
                </div>
                  `;
    company_button.className = "focus_common_btn";
    private_button.className = "common_btn";
  } else {
    null;
  }
}

//Remove additional inputs on private form
function showPrivateForm() {
  let contactForm = document.getElementById("company");
  if (contactForm !== null) {
    contactForm.innerHTML = "";
    private_button.className = "focus_common_btn";
    company_button.className = "common_btn";
  } else {
    null;
  }
}

// Function to send form to email
const contactForm = document.getElementById("contact-form");
const form = document.getElementById("form");
const result = document.getElementById("result");

if (contactForm !== null) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    form.innerHTML = `<div class="single_team_text">
          <h4 style="text-transform: none">Var god vänta</h4>
          </div>`;

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          form.innerHTML = `<div class="single_team_text">
          <h4 style="text-transform: none">Tack för ditt meddelande. En av våra medarbetare ska
          återkomma till dig snart</h4>
          </div>
          `;
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        } else {
          console.log(response);
          result.innerHTML = json.message;
        }
      })
      .catch((error) => {
        console.log(error);
        form.innerHTML = "Something went wrong!";
      })
      .then(function () {
        contactForm.reset();
        setTimeout(() => {
          result.style.display = "none";
        }, 3000);
      });
  });
} else {
  null;
}

//popup in start page
document.addEventListener("DOMContentLoaded", function () {
  let deliveryModal = document.getElementById("deliveryModal");
  if (deliveryModal !== null) {
    var myModal = bootstrap.Modal.getOrCreateInstance(
      document.getElementById("deliveryModal"),
      {
        keyboard: false,
      }
    );
    myModal.show();
  }
});
let confirmButton = document.getElementById("confirmButton");
if (confirmButton !== null) {
  confirmButton.addEventListener("click", function () {
    var postcode = document.getElementById("postcodeInput").value;
    if (postcode === "") {
      document.getElementById("confirmationMessage").style.display = "none";
      document.getElementById("wrong-message").style.display = "none";
      document.getElementById("wrong-message2").style.display = "block";
      document.getElementById("no-place").style.display = "none";
    } else if (postcode) {
      document.getElementById("confirmationMessage").style.display = "block";
      document.getElementById("wrong-message").style.display = "none";
      document.getElementById("wrong-message2").style.display = "none";
      document.getElementById("no-place").style.display = "none";
      localStorage.setItem("Postcode", postcode);
      console.log(localStorage.getItem("Postcode"));
    } else {
      document.getElementById("wrong-message").style.display = "block";
      document.getElementById("confirmationMessage").style.display = "none";
      document.getElementById("wrong-message2").style.display = "none";
      document.getElementById("no-place").style.display = "none";
    }
  });
}
let findLocation = document.getElementById("findLocationButton");

if (findLocation !== null) {
  findLocation.addEventListener("click", function () {
    var postcode = document.getElementById("postcodeInput").value;
    if (postcode === "") {
      document.getElementById("confirmationMessage").style.display = "none";
      document.getElementById("wrong-message").style.display = "none";
      document.getElementById("wrong-message2").style.display = "block";
      document.getElementById("no-place").style.display = "none";
    } else if (postcode && postcode.length === 5 && /^[0-9]+$/) {
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${postcode}&key=API_KEY`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "OK") {
            var address = data.results[0].formatted_address;
            alert("Platsen hittades: " + address);
          } else {
            document.getElementById("no-place").style.display = "block";
            document.getElementById("wrong-message").style.display = "none";
            document.getElementById("confirmationMessage").style.display =
              "none";
            document.getElementById("wrong-message2").style.display = "none";
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Ett fel uppstod vid sökningen.");
        });
    } else {
      document.getElementById("wrong-message2").style.display = "none";
      document.getElementById("wrong-message").style.display = "block";
      document.getElementById("confirmationMessage").style.display = "none";
      document.getElementById("no-place").style.display = "none";
    }
  });
}
//Count quantity and display in the popup cart icon
function totalQuantity() {
  let count = document.getElementById("count");
  let totalQuantity = 0;
  if (count !== null) {
    formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
    if (formDataArry !== null) {
      for (let i = 0; i < formDataArry.length; i++) {
        totalQuantity += parseInt(formDataArry[i].quantity);
      }
      count.innerHTML = totalQuantity;
      localStorage.setItem("totalQuantity", totalQuantity);
    } else {
      count.innerHTML = totalQuantity;
      formDataArry = [];
    }
  }
}

// Calculate and display total sum in the cart total
function totalSum() {
  let totalPrice = document.getElementById("total");
  let sum = 0;
  if (totalPrice !== null) {
    formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
    if (formDataArry !== null) {
      for (let i = 0; i < formDataArry.length; i++) {
        sum += parseInt(formDataArry[i].quantityPrice);
      }
      totalPrice.innerHTML = sum + "kr";
      localStorage.setItem("sum", sum);
    } else {
      null;
    }
  }
}

//Count quantity and display in the popup cart icon
function totalQuantity() {
  let count = document.getElementById("count");
  let totalQuantity = 0;
  if (count !== null) {
    formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
    if (formDataArry !== null) {
      for (let i = 0; i < formDataArry.length; i++) {
        totalQuantity += parseInt(formDataArry[i].quantity);
      }
      count.innerHTML = totalQuantity;
      localStorage.setItem("totalQuantity", totalQuantity);
    } else {
      count.innerHTML = totalQuantity;
      formDataArry = [];
    }
  }
}

// Update fiels title,quantity,quantiyPrice to send to email
function updateFields() {
  let dishName = document.getElementById("dishName");
  let dishQuantity = document.getElementById("dishQuantity");
  let dishQuantityPrice = document.getElementById("dishQuantityPrice");
  formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
  let mergedTitleArray = [];
  let mergedQuantityArray = [];
  let mergedQuantityPriceArray = [];
  if (formDataArry) {
    for (i = 0; i < formDataArry.length; i++) {
      let titleArray = formDataArry[i].title;
      let quantityArray = formDataArry[i].quantity;
      let quantityPriceArray = formDataArry[i].quantityPrice;
      mergedTitleArray.push(JSON.stringify(titleArray));
      mergedQuantityArray.push(JSON.stringify(quantityArray));
      mergedQuantityPriceArray.push(JSON.stringify(quantityPriceArray + "kr"));
    }
    let titleValue = mergedTitleArray.join(", ");
    let quantityValue = mergedQuantityArray.join(", ");
    let quantityPriceValue = mergedQuantityPriceArray.join(", ");
    if (dishName && dishQuantity && dishQuantityPrice) {
      dishName.value = titleValue;
      dishQuantity.value = quantityValue;
      dishQuantityPrice.value = quantityPriceValue;
    } else {
      null;
    }
  }
}

//Function for carousel slider on front page
//Carousel 1

//Carousel 2
/*
let currentIndex2 = 0;
const carousel2 = document.getElementById("carousel2");
const products2 = document.querySelectorAll(".product2");
const product2Width = products2[0].offsetWidth + 20;
const visibleProducts2 = 3;
const totalProducts2 = products2.length;

for (let i = 0; i < visibleProducts2; i++) {
  const firstClone = products2[i].cloneNode(true);
  const lastClone = products2[totalProducts2 - 1 - i].cloneNode(true);
  carousel2.appendChild(firstClone);
  carousel2.insertBefore(lastClone, carousel2.firstChild);
}

carousel2.style.width = `${
  (totalProducts2 + visibleProducts2 * 2) * product2Width
}px`;

carousel2.style.transform = `translateX(-${
  product2Width * visibleProducts2
}px)`;

function scrollCarouselLeft2() {
  console.log("Left button clicked");
  currentIndex2--;
  carousel2.style.transition = "transform 0.5s ease-in-out";
  carousel2.style.transform = `translateX(-${
    (currentIndex2 + visibleProducts2) * product2Width
  }px)`;

  if (currentIndex2 < 0) {
    setTimeout(() => {
      carousel2.style.transition = "none";
      currentIndex2 = totalProducts2 - 1;
      carousel2.style.transform = `translateX(-${
        (currentIndex2 + visibleProducts2) * product2Width
      }px)`;
    }, 500);
  }
}

function scrollCarouselRight2() {
  currentIndex2++;
  carousel2.style.transition = "transform 0.5s ease-in-out";
  carousel2.style.transform = `translateX(-${
    (currentIndex2 + visibleProducts2) * product2Width
  }px)`;

  if (currentIndex2 >= totalProducts2) {
    setTimeout(() => {
      carousel2.style.transition = "none";
      currentIndex2 = 0;
      carousel2.style.transform = `translateX(-${
        product2Width * visibleProducts2
      }px)`;
    }, 500);
  }
}
*/
//Funtion for show/hide faq accordions with button
document.addEventListener("DOMContentLoaded", function () {
  const omWebbplatsenBtn = document.getElementById("om-webbplatsen");
  const betalningBtn = document.getElementById("betalning");
  const menyerAllergierBtn = document.getElementById("menyer-allergier");

  const omWebbplatsenAccordion = document.getElementById(
    "om-webbplatsen-accordion"
  );
  const betalningAccordion = document.getElementById("betalning-accordion");
  const allergierAccordion = document.getElementById("allergier-accordion");
  if (
    omWebbplatsenBtn !== null &&
    betalningBtn !== null &&
    menyerAllergierBtn !== null &&
    omWebbplatsenAccordion !== null &&
    betalningAccordion !== null &&
    allergierAccordion !== null
  ) {
    function hideAllAccordions() {
      omWebbplatsenAccordion.style.display = "none";
      betalningAccordion.style.display = "none";
      allergierAccordion.style.display = "none";
    }

    function resetButtonStyles() {
      omWebbplatsenBtn.classList.remove("active");
      betalningBtn.classList.remove("active");
      menyerAllergierBtn.classList.remove("active");
    }

    hideAllAccordions();
    omWebbplatsenAccordion.style.display = "block";
    omWebbplatsenBtn.classList.add("active");

    omWebbplatsenBtn.addEventListener("click", function (event) {
      event.preventDefault();
      hideAllAccordions();
      resetButtonStyles();
      omWebbplatsenAccordion.style.display = "block";
      omWebbplatsenBtn.classList.add("active");
    });

    betalningBtn.addEventListener("click", function (event) {
      event.preventDefault();
      hideAllAccordions();
      resetButtonStyles();
      betalningAccordion.style.display = "block";
      betalningBtn.classList.add("active");
    });

    menyerAllergierBtn.addEventListener("click", function (event) {
      event.preventDefault();
      hideAllAccordions();
      resetButtonStyles();
      allergierAccordion.style.display = "block";
      menyerAllergierBtn.classList.add("active");
    });
  }
});

// Function to cart content and total form to email
const sendCartInfo = document.getElementById("cart-order-form");
const cartButton = document.getElementById("cart-button");
const cartForm = document.getElementById("cart-form");
const newResult = document.getElementById("cart-result");

const sum = localStorage.getItem("sum");
let sumInput = document.getElementById("sum");
if (sumInput !== null) {
  sumInput.value = sum + "kr";
  updateFields();
} else {
  null;
}

if (sum !== null && cartButton !== null) {
  cartButton.removeAttribute("disabled");
} else if (sum && cartButton) {
  cartButton.setAttribute("disabled", "disabled");
} else {
  null;
}

if (sendCartInfo !== null) {
  sendCartInfo.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(sendCartInfo);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    cartForm.innerHTML = `<div class="single_team_text">
          <h4 style="text-transform: none">Var god vänta</h4>
          </div>`;

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          cartForm.innerHTML = `<div class="single_team_text">
          <h4 style="text-transform: none">Tack för din förfrågan.En av våra medarbetare ska
          återkomma till dig snart</h4>
          </div>
          `;
          localStorage.clear();
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        } else {
          console.log(response);
          newResult.innerHTML = json.message;
        }
      })
      .catch((error) => {
        console.log(error);
        cartForm.innerHTML = "Something went wrong!";
      })
      .then(function () {
        sendCartInfo.reset();
        setTimeout(() => {
          newResult.style.display = "none";
        }, 3000);
      });
  });
} else {
  null;
}

var swiper1 = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    1120: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 3,
    },
  },
});

var swiper2 = new Swiper(".slide-content2", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    1120: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 3,
    },
  },
});

var datesSwipes = new Swiper(".dates_swipe", {
  slidesPerView: 3,
  spaceBetween: 1,
  loop: false,
  slidesPerGroup: 3,
  slidesOffsetBefore: 11,
  slidesOffsetAfter: -7,
  roundLengths: true,
  fade: true,
  grabCursor: false,
  navigation: {
    nextEl: ".swiper-button-next-dates",
    prevEl: ".swiper-button-prev-dates",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    1120: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 3,
    },
  },
});


//SIDE BAR CART

// Show sidebar
function openSidebar() {
  const cartSidebar = document.getElementById('cartSidebar');
  console.log('openSidebar called');
  cartSidebar.classList.add('open');
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'block';
}
// Redirect to checkout page
function goToCheckout() {
  window.location.href = 'cart_view.html';
}

// Funktion för att lägga till produkt i varukorgen
// function addToCart(product) {
//   localStorage.setItem('sidebarOpen', 'true');
//   openSidebar(); 
// }

function addToCart(product) {
  console.log('addToCart called');
  let formDataArry = JSON.parse(localStorage.getItem('formDataArry')) || [];

  const existingProductIndex = formDataArry.findIndex(item => item.id === product.id);
  
  if (existingProductIndex !== -1) {
    formDataArry[existingProductIndex].quantity += 1;
  } else {
    formDataArry.push({
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      quantity: 1, 
      img: product.img,
      diet: product.diet
    });
  }

  // Uppdatera varukorgsdata i localStorage
  localStorage.setItem('formDataArry', JSON.stringify(formDataArry));
  updateSidebarCart();
  openSidebar();
  
}

document.addEventListener('DOMContentLoaded', function() {
  const closeSidebarBtn = document.getElementById('closeSidebar');
  const cartSidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('overlay');
  
  if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', function() {
      cartSidebar.classList.remove('open');
      overlay.style.display = 'none';
      console.log("Sidebar closed!");
    });
  }

  // if (localStorage.getItem('sidebarOpen') === 'true') {
  //   openSidebar();
  // }

  // Update the sidebar cart with items and show mobile notification
  function updateSidebarCart() {
    console.log('updateSidebarCart called'); 
    let formDataArry = JSON.parse(localStorage.getItem('formDataArry')) || [];
    console.log('Cart contents:', formDataArry);
    const sidebarCartItems = document.getElementById('sidebarCartItems');
    const mobileProductCount = document.getElementById('mobileProductCount');
    const mobileTotalPrice = document.getElementById('mobileTotalPrice');

    sidebarCartItems.innerHTML = ''; 
    let totalQuantity = 0;
    let total = 0;
    const shipping = 49; 

    formDataArry.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      totalQuantity += item.quantity; 

      const dietImage = item.diet.includes(",") ? 
        item.diet.split(",").map(diet => `<img src="${diet}" alt="diet image" class="diet_img"/>`).join('') :
        `<img id="diet" src="${item.diet}" alt="specialkost-bild" class="diet_img"/>`;

      sidebarCartItems.innerHTML += `
        <section class="col mb-5" id="${item.id}" >
          <div class="row">
            <div class="col-4">
              <div class="imgContainer">
                <img id="${item.id}" src="${item.img}" alt="bild på maträtt" class="pro_img cartPayDeliver cropImage"/>
              </div>
            </div>
            <div class="col-4">
              <h5 style="flex-direction: row; display: flex;">
                ${item.title}
                <div style="padding: 10px; margin-top: -17px;" class="d-flex">${dietImage}</div>
              </h5>
              <p data-bs-toggle="tooltip" data-bs-placement="top" title="${item.description}" class="food-description sidebar" style="width: 380px; max-height:50px;">
                ${item.description}
              </p>
            </div>
            <div class="col-4">
              <h5 style="cursor: pointer;" onclick="removeFromCart('${item.id}')" class="ms-auto me-4">
                Ta bort <i id="ta-bort-x" style="transform: rotate(45deg); margin-bottom: 20px;" class="fas fa-plus"></i>
              </h5>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <div class="quentity_btn mt-0 btn-sidebar d-flex">
                <button class="decrease" onclick="changeQuantity('${item.id}', -1)">
                  <i style="font-size: 12px;" class="fas fa-minus"></i>
                </button>
                <input class="quantity" type="text" value="${item.quantity}" readonly>
                <button class="increase" onclick="changeQuantity('${item.id}', 1)">
                  <i style="font-size: 12px;" class="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <div class="col-6 d-flex align-items-center justify-content-end">
              <h6 class="quantity_price currency mb_0">${item.price * item.quantity}</h6>
              <h6 class="currency mb_0">kr</h6>
            </div>
          </div>
        </section>`;
    });

    // Update totals in sidebar and mobile
    document.getElementById('sidebarShipping').textContent = `${shipping} kr`;
    document.getElementById('sidebarTotal').textContent = `${total + shipping} kr`;
    mobileProductCount.textContent = `${totalQuantity} produkter`;
    mobileTotalPrice.textContent = `${total + shipping} kr`;

    // Show mobile notification when items are added to the cart
    const mobileCartNotification = document.getElementById('mobileCartNotification');
    if (totalQuantity > 0) {
      mobileCartNotification.style.display = 'flex';
      openSidebar();  
    } else {
      mobileCartNotification.style.display = 'none';
      cartSidebar.classList.remove('open');  
      overlay.style.display = 'none';
    }
  }

  window.changeQuantity = function(itemId, change) {
    let formDataArry = JSON.parse(localStorage.getItem('formDataArry')) || [];
    const itemIndex = formDataArry.findIndex(item => item.id === itemId);
    
    if (itemIndex !== -1) {
        formDataArry[itemIndex].quantity += change;
        
        if (formDataArry[itemIndex].quantity <= 0) {
            removeFromCart(itemId);
        } else {
            localStorage.setItem('formDataArry', JSON.stringify(formDataArry));
            updateSidebarCart();
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
  updateSidebarCart();
});
  

  // Remove item from the cart
  window.removeFromCart = function(itemId) {
    let formDataArry = JSON.parse(localStorage.getItem('formDataArry')) || [];
    formDataArry = formDataArry.filter(item => item.id !== itemId);
    
    localStorage.setItem('formDataArry', JSON.stringify(formDataArry));
    updateSidebarCart();
};
  updateSidebarCart();
});

// --------------------------------------

const submitCartForm = async (event) => {
  event.preventDefault();
async function redirectToStripeCheckout() {
  try {
    // Retrieve cart information from local storage
    let formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
    if (!formDataArry || formDataArry.length === 0) {
      console.error("No products in the cart.");
      return;
    }

    let products = formDataArry.map((item) => {
      // Retrieve the unit price and total price for the selected quantity
      let unitPrice = item.price; // Price per item
      let totalQuantityPrice = item.quantity * item.price; // Total for the quantity

      return {
        name: item.title, // Product name (title)
        quantity: item.quantity, // Quantity of the product
        price: unitPrice, // Unit price for the product
        total: totalQuantityPrice, // Total price for the quantity
      };
    });

    // Create a POST request to your backend endpoint to create the Stripe checkout session
    const response = await fetch("https://localhost:7216/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        successPaymentUrl: "https://localhost:7023/payment_success.html",
        cancelPaymentUrl: "https://localhost:7023/payment_cancel.html",
        products: products, // Send the products array
      }),
    });

    const result = await response.json();
    if (response.ok) {
      // Redirect to the Stripe checkout session URL
      window.location.href = result.checkoutUrl;
      localStorage.clear();
    } else {
      console.error("Error creating Stripe session", result);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
}

function Footer() {
  let footer = document.getElementById("footer");
  footer.innerHTML = `
      <div class="pt_20 xs_pt_20">
        <div class="container">
          <div id="footer-new" class="row justify-content-around pt_50">
            <div class="col-xxl-2 col-lg-2 col-sm-9 col-md-5">
              <div class="footer_content">
                  <img class="footer_logo"
                    loading="lazy"
                    src="images/col.png"
                    alt="footer-logo"
                    style="width: 140px; height:200px"
                    class="mb_25"
                  />
              </div>
            </div>
            <div id="contact_info" class="col-xxl-3 col-lg-2 col-xl-12">
              <p id="contact_title">Yumfoods.se</p>
              <div class="contacts-content contacts justify-content-center w_40">
                <div id="footer-phone" class="contacts-box">
                <i style="color: #FC5633; margin-top: 4px;" class="fas fa-phone fa-lg"></i>
                  <p style="margin-left: 10px;">+46 76 023 49 30</p>
                </div>
                <div class="contacts-box">
                <i style="color: #FC5633; margin-top: 4px;" class="fas fa-envelope fa-lg"></i>
                  <p style="margin-left: 10px;">info@yumfoods.se</p>
                </div>
                <div id="map-marker" class="contacts-box">
                <i style="margin-left: 2px; color: #FC5633; margin-top: 2px;" class="fas fa-map-marker-alt fa-lg"></i>
                  <p id="location_address" style="margin-left: 14px;">Stora Badhusgatan 18, 411 21 Göteborg</p>
                </div>
              </div>
            </div>
            <div id="social_links" class="col-xxl-3 col-lg-2 col-sm-5 col-md-4">
              <div class="footer_content">
              <h2>Följ oss!</h2>
                <ul class="social_link d-flex flex-wrap mx_50">
                  <li style="margin-top: -10px; margin-left: -0px;">
                    <a
                      href="https://www.facebook.com/YumFoodsSE"
                      target="_blank"
                      aria-label="Länk till facebook sida"
                      ><i class="fab fa-facebook-f"></i
                    ></a><p style="margin-top: 8px;">Facebook</p>
                  </li>
                  <li style="margin-top: 12px; margin-left: -10px;">
                    <a
                      href="https://www.linkedin.com/company/yum-foods/"
                      target="_blank"
                      aria-label="Länk till linkedin sida"
                      ><i class="fab fa-linkedin-in"></i
                    ></a><p style="margin-top: 8px;">LinkedIn</p>
                  </li>
                  <!--
                  <li>
                    <a href="#"
                      ><span class="m_0"><img src="images/twitter.png" /></span
                    ></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-youtube fa-lg"></i></a>
                  </li>
                  -->
                  <li style="margin-top: 12px;">
                    <a
                      href="https://www.instagram.com/yumfoods.se/"
                      target="_blank"
                      aria-label="Länk till instagram sida"
                      ><i class="fab fa-instagram"></i
                    ></a><p style="margin-top: 8px;">Instagram</p>
                  </li>
                  <!--
                  <li>
                    <a href="#"><i class="fab fa-tiktok"></i></a>
                  </li>
                  -->
                </ul>
              </div>
            </div>
            <div id="other_links" class="col-xxl-2 col-lg-2 col-sm-6 col-md-3 order-md-4">
              <div class="footer_content">
              <h2 id="link_title">Hjälp & Villkor</h2>
              <ul id="faq-ul">
                  <li><i class="fas fa-question"></i><a style="margin-top: -22px;" class="footer_links_1" href="faq.html">Få snabbt svar FAQ</a></li>
                  <li><i style="margin-top: 30px;" class="fab fa-teamspeak"></i><a style="margin-top: -22px;" class="footer_links_1" href="faq.html"> Kontakta kundservice</a></li>
                  <li><i style="margin-top: 30px;" class="fas fa-file-alt"></i><a style="margin-top: -22px;" class="footer_links_1" href="terms_condition.html">Allmänna villkor</a></li>
                  <!--<li><a href="privacy_policy.html">Integritetspolicy</a></li>-->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_bottom d-flex flex-wrap">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="footer_bottom_text">
                <p>Copyright ©<b> Yum Foods</b> 2024. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
}

Footer();
