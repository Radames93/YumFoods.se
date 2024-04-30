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
  $(".offer_item_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: true,
    nextArrow: '<i class="far fa-long-arrow-right nextArrow"></i>',
    prevArrow: '<i class="far fa-long-arrow-left prevArrow"></i>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

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

  //=======TEAM SLIDER======
  $(".team_slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: true,
    nextArrow: '<i class="far fa-long-arrow-right nextArrow"></i>',
    prevArrow: '<i class="far fa-long-arrow-left prevArrow"></i>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  //=======DOWNLOAD SLIDER======
  $(".download_slider_item").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //=======COUNTER JS=======
  $(".counter").countUp();

  //=======OFFER ITEM SLIDER======
  $(".testi_slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: true,
    nextArrow: '<i class="far fa-long-arrow-right nextArrow"></i>',
    prevArrow: '<i class="far fa-long-arrow-left prevArrow"></i>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  //=======BRAND SLIDER======
  $(".blog_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: true,
    nextArrow: '<i class="far fa-long-arrow-right nextArrow"></i>',
    prevArrow: '<i class="far fa-long-arrow-left prevArrow"></i>',

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

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

  //=======OFFER ITEM SLIDER======
  $(".related_product_slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: true,
    nextArrow: '<i class="far fa-long-arrow-right nextArrow"></i>',
    prevArrow: '<i class="far fa-long-arrow-left prevArrow"></i>',

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
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

//Search function//
let yum = document.getElementById("yum");
let daily = document.getElementById("daily");
let premium = document.getElementById("premium");
let subscriptions = document.getElementById("subscription");
let popup = document.getElementById("popup");

const searchBar = document.getElementById("searchbar");

let yumProductsList = [];
let dailyProductsList = [];
let premiumProductsList = [];
let subscriptionsProductList = [];
let yumFiltered = [];
let dailyFiltered = [];
let premiumFiltered = [];
let subscriptionsFiltered = [];
let all = [];
const search = () => {
  searchBar.addEventListener("keyup", (e) => {
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
  });
  const filteredSubscriptions = subscriptionsProductList.filter((product) => {
    return product.title.toLowerCase().includes(searchString);
  });
  subscriptionsProducts(filteredSubscriptions);
};
if (searchBar !== null) {
  searchBar.addEventListener("input", search);
} else {
  removeEventListener("keyup", search);
}

//Display yum items
const loadProducts = async () => {
  try {
    await fetch("./js/products.json")
      .then((response) => response.json())
      .then((data) => {
        yumProductsList = data.yum;
        dailyProductsList = data.daily;
        premiumProductsList = data.premium;
        subscriptionsProductList = data.subscriptions;
        yumFiltered = data.yum;
        dailyFiltered = data.daily;
        premiumFiltered = data.premium;
        subscriptionsFiltered = data.subscriptions;
        all = [
          ...yumProductsList,
          ...dailyProductsList,
          ...premiumProductsList,
        ];
      });
    yumProducts(yumProductsList);
    dailyProducts(dailyProductsList);
    premiumProducts(premiumProductsList);
    subscriptionsProducts(subscriptionsProductList);
  } catch (err) {
    console.log(err);
  }
};
const yumProducts = (yumProductsList) => {
  if (yum !== null) {
    let i = 0;
    const htmlString = yumProductsList
      .map((yum) => {
        return (
          `<div
            class="col-xl-4 col-sm-6 col-lg-3 wow fadeInUp "
            data-wow-duration="1s"
                        >
          <div class="menu_item">
              <div class="menu_item_img">
                <img
                  src=` +
          yum.img +
          `
                  alt="menu"
                  class="img-fluid w-100"
                />
              </div>
              <div class="menu_item_text">
                <a class="category" href="#">` +
          yum.category +
          `</a>
                <a
                  class="title"
                  href="#"
                   data-yum-title=${yum.title}
                  data-yum-price=${yum.price}
                  data-yum-img=${yum.img}
                  data-yum-quantity-price=${yum.price}
                  data-yum-description=${yum.description}
                  data-yum-ingredients=${yum.ingredients}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >` +
          yum.title.replace(/'/g, "") +
          `</a
                >
                <h5 class="price">` +
          yum.price +
          `</h5>` +
          "<button class='add_to_cart' data-id=" +
          yum.id +
          " onclick='addToCart(" +
          i++ +
          ")'>lägg till     <i class='fas fa-cart-plus'></i></button>" +
          `<!--
          <ul class="d-flex flex-wrap justify-content-end">
                  <li>
                    <a href="#"><i class="fal fa-heart"></i></a>
                  </li>
                  <li>
                    <a href="menu_details.html"><i class="far fa-eye"></i></a>
                  </li>
                </ul>
                -->
              </div>
            </div>
          </div>`
        );
      })
      .join("");
    yum.innerHTML = htmlString;
  } else {
    return null;
  }
};

//Display daily items
const dailyProducts = (dailyProductsList) => {
  let i = 0;
  if (daily !== null) {
    const htmlString = dailyProductsList
      .map((daily) => {
        return (
          `<div
            class="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp "
            data-wow-duration="1s"
                        >
          <div class="menu_item">
              <div class="menu_item_img">
                <img
                  src=` +
          daily.img +
          `
                  alt="menu"
                  class="img-fluid w-100"
                />
              </div>
              <div class="menu_item_text">
                <a class="category" href="#">` +
          daily.category +
          `</a>
                <a
                  class="title"
                  href="#"
                   data-yum-title=${daily.title}
                  data-yum-price=${daily.price}
                  data-yum-img=${daily.img}
                  data-yum-quantity-price=${daily.price}
                  data-yum-description=${daily.description}
                  data-yum-ingredients=${daily.ingredients}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >` +
          daily.title.replace(/'/g, "") +
          `</a
                >
                <h5 class="price">` +
          daily.price +
          `</h5>` +
          "<button class='add_to_cart' data-id=" +
          daily.id +
          " onclick='addToCart(" +
          i++ +
          ")'>lägg till     <i class='fas fa-cart-plus'></i></button>" +
          `
          <!--
          <ul class="d-flex flex-wrap justify-content-end">
                  <li>
                    <a href="#"><i class="fal fa-heart"></i></a>
                  </li>
                  <li>
                    <a href="menu_details.html"><i class="far fa-eye"></i></a>
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

////Display premium items
const premiumProducts = (premiumProductsList) => {
  if (premium !== null) {
    let i = 0;
    const htmlString = premiumProductsList
      .map((premium) => {
        return (
          `<div
            class="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp "
            data-wow-duration="1s"
                        >
          <div class="menu_item">
              <div class="menu_item_img">
                <img
                  src=` +
          premium.img +
          `
                  alt="menu"
                  class="img-fluid w-100"
                />
              </div>
              <div class="menu_item_text">
                <a class="category" href="#">` +
          premium.category +
          `</a>
                <a
                  class="title"
                  href="#"
                   data-yum-title=${premium.title}
                  data-yum-price=${premium.price}
                  data-yum-img=${premium.img}
                  data-yum-quantity-price=${premium.price}
                  data-yum-description=${premium.description}
                  data-yum-ingredients=${premium.ingredients}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >` +
          premium.title.replace(/'/g, "") +
          `</a
                >
                <h5 class="price">` +
          premium.price +
          `</h5>` +
          "<button class='add_to_cart' data-id=" +
          premium.id +
          " onclick='addToCart(" +
          i++ +
          ")'>lägg till     <i class='fas fa-cart-plus'></i></button>" +
          `
          <!--
          <ul class="d-flex flex-wrap justify-content-end">
                  <li>
                    <a href="#"><i class="fal fa-heart"></i></a>
                  </li>
                  <li>
                    <a href="menu_details.html"><i class="far fa-eye"></i></a>
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

const subscriptionsProducts = (subscriptionProductList) => {
  if (subscriptions !== null) {
    let i = 0;
    const htmlString = subscriptionProductList
      .map((subscription) => {
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
                  alt="menu"
                  class="img-fluid w-100"
                />
              </div>
              <div class="menu_item_text">
                <a class="category" href="#">` +
          subscription.category +
          `</a>
                <a
                  class="title"
                  href="#"
                  data-yum-title=${subscription.title}
                  data-yum-price=${subscription.price}
                  data-yum-img=${subscription.img}
                  data-yum-quantity-price=${subscription.price}
                  data-yum-description=${subscription.description}
                  data-yum-ingredients=${subscription.ingredients}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >` +
          subscription.title.replace(/'/g, "") +
          `</a
                >
                <h5 class="price">` +
          subscription.price +
          `</h5>` +
          "<button class='add_to_cart' data-id=" +
          subscription.id +
          " onclick='addToCart(" +
          i++ +
          ")'>lägg till     <i class='fas fa-cart-plus'></i></button>" +
          `
          <!--
          <ul class="d-flex flex-wrap justify-content-end">
                  <li>
                    <a href="#"><i class="fal fa-heart"></i></a>
                  </li>
                  <li>
                    <a href="menu_details.html"><i class="far fa-eye"></i></a>
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

//Sort function
const sortingFunction = (el) => {
  const option = el.value;
  if (option === "name") {
    const sortedYumArray = yumFiltered.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );
    const sortedDailyArray = yumFiltered.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );
    const sortedPremiumArray = yumFiltered.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );
    return (
      yumProducts(sortedYumArray),
      dailyProducts(sortedDailyArray),
      premiumProducts(sortedPremiumArray)
    );
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
    return (
      yumProducts(sortedYumArray),
      dailyProducts(sortedDailyArray),
      premiumProducts(sortedPremiumArray)
    );
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
    return (
      yumProducts(sortedYumArray),
      dailyProducts(sortedDailyArray),
      premiumProducts(sortedPremiumArray)
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
    return (
      yumProducts(sortedYumArray),
      dailyProducts(sortedDailyArray),
      premiumProducts(sortedPremiumArray)
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
    return (
      yumProducts(sortedYumArray),
      dailyProducts(sortedDailyArray),
      premiumProducts(sortedPremiumArray)
    );
  }
};

loadProducts();

// Make modal fetch data from json file
var cardModal = document.getElementById("modal");
if (cardModal !== null) {
  cardModal.addEventListener("show.bs.modal", function (event) {
    var button = event.relatedTarget;
    var title = button.getAttribute("data-yum-title");
    var price = button.getAttribute("data-yum-price");
    var img = button.getAttribute("data-yum-img");
    var quantityPrice = button.getAttribute("data-yum-quantity-price");
    var description = button.getAttribute("data-yum-description");
    var ingredients = button.getAttribute("data-yum-ingredients");

    var modalTitle = cardModal.querySelector(".title");
    var modalPrice = cardModal.querySelector(".price");
    var modalImg = cardModal.querySelector("img");
    var modalQuantityPrice = cardModal.querySelector(".quantity_price");
    var modalDescription = cardModal.querySelector(".description");
    var modalIngredients = cardModal.querySelector(".ingredients");

    localStorage.setItem("title", (modalTitle.textContent = title));
    localStorage.setItem("price", (modalPrice.textContent = price));
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
  });
} else {
  null;
}

//Show ingredients div
function showDiv() {
  document.getElementById("welcomeDiv").classList.toggle("hide");
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

//Increase or descrease quantity functionality

const increase = document.querySelectorAll(".increase");
const decrease = document.querySelectorAll(".decrease");

increase.forEach((btn) => {
  btn.addEventListener("click", increment);
});

decrease.forEach((btn) => {
  btn.addEventListener("click", decrement);
});

function increment() {
  const inp = this.previousElementSibling;
  inp.value = Number(inp.value) + 1;
}

function decrement() {
  const inp = this.nextElementSibling;
  if (inp.value > 0) inp.value = Number(inp.value) - 1;
}

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
                      placeholder="Företagsnamn"
                    />
                  </div>
                </div>
                <div class="d-flex">
                <div class="col-xl-6 col-sm-12">
                  <div for="role" class="contact_form_input">
                    <span><i class="fas fa-user"></i></span>
                    <input name="role" type="text" placeholder="Roll" />
                  </div>
                </div>
                <div class="col-xl-6 col-sm-12">
                  <div for="number of employees" class="contact_form_input">
                    <span><i class="fas fa-user"></i></span>
                    <input
                      name="number of employees"
                      type="number"
                      placeholder="Antal anställda"
                    />
                  </div>
                </div>
                </div>
                  `;
  } else {
    null;
  }
}

function showPrivateForm() {
  let contactForm = document.getElementById("company");
  if (contactForm !== null) {
    contactForm.innerHTML = "";
  } else {
    null;
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

const contactForm = document.getElementById("contact-form");
const form = document.getElementById("form");
const result = document.getElementById("result");

if (contactForm !== null) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    form.innerHTML = "Please wait...";

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
          <h4>Tack för ditt meddelande. Vi återkommer till dig snart</h4>
          </div>
          `;
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
