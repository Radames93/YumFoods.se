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
let categories = document.getElementById("categories");
let baguetter = document.getElementById("baguetter");
let popup = document.getElementById("popup");
const searchBar = document.getElementById("searchbar");
let cartItem = document.getElementById("cart-item");

let yumProductsList = [];
let dailyProductsList = [];
let premiumProductsList = [];
let subscriptionsProductsList = [];
let categoriesProductsList = [];
let baguetterProductsList = [];
let yumFiltered = [];
let dailyFiltered = [];
let premiumFiltered = [];
let subscriptionsFiltered = [];
let baguetterFiltered = [];
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
  const filteredSubscriptions = subscriptionsProductsList.filter((product) => {
    return product.title.toLowerCase().includes(searchString);
  });
  subscriptionsProducts(filteredSubscriptions);
  const filteredBaguetter = baguetterProductsList.filter((product) => {
    return product.title.toLowerCase().includes(searchString);
  });
  baguetterProducts(filteredBaguetter);
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
        subscriptionsProductsList = data.subscriptions;
        baguetterProductsList = data.baguetter;
        yumFiltered = data.yum;
        dailyFiltered = data.daily;
        premiumFiltered = data.premium;
        subscriptionsFiltered = data.subscriptions;
        categoriesProductsList = data.categories;
        baguetterFiltered = data.baguetter;
        all = [
          ...yumProductsList,
          ...dailyProductsList,
          ...premiumProductsList,
        ];
      });
    yumProducts(yumProductsList);
    dailyProducts(dailyProductsList);
    premiumProducts(premiumProductsList);
    subscriptionsProducts(subscriptionsProductsList);
    categoriesProducts(categoriesProductsList);
    baguetterProducts(baguetterProductsList);
  } catch (err) {
    console.log(err);
  }
};

let data = [];

const yumProducts = (yumProductsList) => {
  if (yum !== null) {
    let i = 0;
    data = yum.diet;
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
              <div class="d-flex justify-content-between align-items-center">
               <img
                  src=
                  ${yum.diet}
                  alt="menu"
                  class="diet_img"
                />
                <a class="category" href="#">` +
          yum.category +
          `</a>
          </div>
              <div class="menu_item_text">
                <a
                  class="title"
                  href="#"
                  data-yum-id=${yum.id} 
                  data-yum-title=${yum.title}
                  data-yum-price=${yum.price}
                  data-yum-img=${yum.img}
                  data-yum-quantity-price=${yum.price}
                  data-yum-description=${yum.description}
                  data-yum-ingredients=${yum.ingredients}
                  data-yum-diet=${yum.diet}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >` +
          yum.title.replace(/'/g, "") +
          `</a
                >
                <h5 class="price">` +
          yum.price +
          `kr</h5>` +
          "<button id='cart-button' class='add_to_cart' data-id=" +
          yum.id +
          `
          data-yum-id=${yum.id} 
          data-yum-title=${yum.title}
          data-yum-price=${yum.price}
          data-yum-img=${yum.img}
          data-yum-quantity-price=${yum.price}
          ` +
          ") onclick='realAddToCart(event)''>Lägg till     <i class='fas fa-cart-plus'></i></button>" +
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

/*function foods(data) {
  if (Array.isArray(data)) {
    console.log(data);
  } else {
    return data;
  }
}*/

//Display daily items
const dailyProducts = (dailyProductsList) => {
  let i = 0;
  if (daily !== null) {
    const htmlString = dailyProductsList
      .map((daily) => {
        return (
          `<div
            class="col-xl-4 col-sm-6 col-lg-3 wow fadeInUp "
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
              <div class="d-flex justify-content-between align-items-center">
               <img
                  src=` +
          daily.diet +
          `
                  alt="menu"
                  class="diet_img"
                />
                <a class="category" href="#">` +
          daily.category +
          `</a>
          </div>
              <div class="menu_item_text">
                <a
                  class="title"
                  href="#"
                  data-yum-id=${daily.id} 
                  data-yum-title=${daily.title}
                  data-yum-price=${daily.price}
                  data-yum-img=${daily.img}
                  data-yum-quantity-price=${daily.price}
                  data-yum-description=${daily.description}
                  data-yum-ingredients=${daily.ingredients}
                  data-yum-diet=${daily.diet}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >` +
          daily.title.replace(/'/g, "") +
          `</a
                >
                <h5 class="price">` +
          daily.price +
          `kr</h5>` +
          "<button id='cart-button' class='add_to_cart' data-id=" +
          daily.id +
          `
          data-yum-id=${daily.id}
          data-yum-title=${daily.title}
          data-yum-price=${daily.price}
          data-yum-img=${daily.img}
          data-yum-quantity-price=${daily.price}
          ` +
          ") onclick='realAddToCart(event)''>Lägg till     <i class='fas fa-cart-plus'></i></button>" +
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
            class="col-xl-4 col-sm-6 col-lg-3 wow fadeInUp "
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
              <div class="d-flex justify-content-between align-items-center">
               <img
                  src=` +
          premium.diet +
          `
                  alt="menu"
                  class="diet_img"
                />
                <a class="category" href="#">` +
          premium.category +
          `</a>
          </div>
              <div class="menu_item_text">
                <a
                  class="title"
                  href="#"
                  data-yum-id=${premium.id} 
                  data-yum-title=${premium.title}
                  data-yum-price=${premium.price}
                  data-yum-img=${premium.img}
                  data-yum-quantity-price=${premium.price}
                  data-yum-description=${premium.description}
                  data-yum-ingredients=${premium.ingredients}
                  data-yum-diet=${premium.diet}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >` +
          premium.title.replace(/'/g, "") +
          `</a
                >
                <h5 class="price">` +
          premium.price +
          `kr</h5>` +
          "<button id='cart-button' class='add_to_cart' data-id=" +
          premium.id +
          `
          data-yum-id=${premium.id}
          data-yum-title=${premium.title}
          data-yum-price=${premium.price}
          data-yum-img=${premium.img}
          data-yum-quantity-price=${premium.price}
          ` +
          ") onclick='realAddToCart(event)''>Lägg till     <i class='fas fa-cart-plus'></i></button>" +
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
    premium.innerHTML = htmlString;
  } else {
    return null;
  }
};

const subscriptionsProducts = (subscriptionsProductsList) => {
  if (subscriptions !== null) {
    let i = 0;
    const htmlString = subscriptionsProductsList
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
                  data-yum-id=${subscription.id} 
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
          `kr</h5>` +
          "<button id='cart-button' class='add_to_cart' data-id=" +
          subscription.id +
          `
          data-yum-id=${subscription.id}
          data-yum-title=${subscription.title}
          data-yum-price=${subscription.price}
          data-yum-img=${subscription.img}
          data-yum-quantity-price=${subscription.price}
          ` +
          ") onclick='realAddToCart(event)''>Lägg till     <i class='fas fa-cart-plus'></i></button>" +
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

const categoriesProducts = (categoriesProductsList) => {
  if (categories !== null) {
    const htmlString = categoriesProductsList
      .map((category) => {
        return (
          `
          <div class="single_team_img_services"">
          <a href="` +
          category.title +
          ` tabindex="0">
                  <img
                    src="
                    ` +
          category.img +
          `
                    "
                    alt="team"
                    class="w-100 h-100"
                /></a>
              </div>
              <div class="single_team_text">
                <a class="add_to_cart" href=" ` +
          category.link +
          `" + tabindex="0"
                  ><h4>` +
          category.title +
          `</h4></a
                >
        </div>
        `
        );
      })
      .join("");
    categories.insertAdjacentHTML("afterbegin", htmlString);
  } else {
    return null;
  }
};

const baguetterProducts = (baguetterProductsList) => {
  let i = 0;
  if (baguetter !== null) {
    const htmlString = baguetterProductsList
      .map((baguetter) => {
        return (
          `<div
            class="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp "
            data-wow-duration="1s"
                        >
          <div class="menu_item">
              <div class="menu_item_img">
                <img
                  src=` +
          baguetter.img +
          `
                  alt="menu"
                  class="img-fluid w-100"
                />
              </div>
              <div class="d-flex justify-content-between align-items-center">
               <img
                  src=` +
          baguetter.diet +
          `
                  alt="menu"
                  class="diet_img"
                />
                <a class="category" href="#">` +
          baguetter.category +
          `</a>
          </div>
          <div class="menu_item_text">
                <a
                  class="title"
                  href="#"
                  data-yum-id=${baguetter.id} 
                  data-yum-title=${baguetter.title}
                  data-yum-price=${baguetter.price}
                  data-yum-img=${baguetter.img}
                  data-yum-quantity-price=${baguetter.price}
                  data-yum-description=${baguetter.description}
                  data-yum-ingredients=${baguetter.ingredients}
                  data-yum-diet=${baguetter.diet}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >` +
          baguetter.title.replace(/'/g, "") +
          `</a
                >
                <h5 class="price">` +
          baguetter.price +
          `kr</h5>` +
          "<button id='cart-button' class='add_to_cart' data-id=" +
          baguetter.id +
          `
          data-yum-id=${baguetter.id}
          data-yum-title=${baguetter.title}
          data-yum-price=${baguetter.price}
          data-yum-img=${baguetter.img}
          data-yum-quantity-price=${baguetter.price}
          ` +
          ") onclick='realAddToCart(event)''>Lägg till     <i class='fas fa-cart-plus'></i></button>" +
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
    baguetter.innerHTML = htmlString;
  } else {
    return null;
  }
};

//Sort function
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
    return (
      yumProducts(sortedYumArray),
      dailyProducts(sortedDailyArray),
      premiumProducts(sortedPremiumArray),
      baguetterProducts(sortedBaguetterArray)
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

const sortingDishDietFunction = (el) => {
  const option = el.value;
  const message = `<div class="single_team_text">
          <h4 style="text-transform: none">Tack för ditt meddelande. En av våra medarbetare ska
          återkomma till dig snart</h4>
          </div>`;
  if (option === "vegan") {
    const filteredYumProducts = yumProductsList.filter((product) => {
      return product.diet.toLowerCase().includes(option);
    });
    const filteredDailyProducts = dailyProductsList.filter((product) => {
      return product.diet.toLowerCase().includes(option);
    });
    const filteredPremiumProducts = premiumProductsList.filter((product) => {
      return product.diet.toLowerCase().includes(option);
    });
    const filteredBaguetterProducts = baguetterProductsList.filter(
      (product) => {
        return product.diet.toLowerCase().includes(option);
      }
    );
    yumProducts(filteredYumProducts);
    dailyProducts(filteredDailyProducts);
    premiumProducts(filteredPremiumProducts);
    baguetterProducts(filteredBaguetterProducts);
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
  } else if (option === "vegetarian") {
    const filteredYumProducts = yumProductsList.filter((product) => {
      return product.diet.toLowerCase().includes(option);
    });
    const filteredDailyProducts = dailyProductsList.filter((product) => {
      return product.diet.toLowerCase().includes(option);
    });
    const filteredPremiumProducts = premiumProductsList.filter((product) => {
      return product.diet.toLowerCase().includes(option);
    });
    const filteredBaguetterProducts = baguetterProductsList.filter(
      (product) => {
        return product.diet.toLowerCase().includes(option);
      }
    );
    if (
      filteredYumProducts.length ||
      filteredDailyProducts.length ||
      filteredPremiumProducts.length ||
      filteredBaguetterProducts.length > 0
    ) {
      yumProducts(filteredYumProducts);
      dailyProducts(filteredDailyProducts);
      premiumProducts(filteredPremiumProducts);
      baguetterProducts(filteredBaguetterProducts);
    } else {
      console.log(message);
    }
  } else if (option === "cow") {
    const filteredYumProducts = yumProductsList.filter((product) => {
      return product.diet.toLowerCase().includes(option);
    });
    const filteredDailyProducts = dailyProductsList.filter((product) => {
      return product.diet.toLowerCase().includes(option);
    });
    const filteredPremiumProducts = premiumProductsList.filter((product) => {
      return product.diet.toLowerCase().includes(option);
    });
    const filteredBaguetterProducts = baguetterProductsList.filter(
      (product) => {
        return product.diet.toLowerCase().includes(option);
      }
    );
    yumProducts(filteredYumProducts);
    dailyProducts(filteredDailyProducts);
    premiumProducts(filteredPremiumProducts);
    baguetterProducts(filteredBaguetterProducts);
  } else if (option === "fish") {
    const filteredYumProducts = yumProductsList.filter((product) => {
      return product.diet.toLowerCase().includes(option);
    });
    const filteredDailyProducts = dailyProductsList.filter((product) => {
      return product.diet.toLowerCase().includes(option);
    });
    const filteredPremiumProducts = premiumProductsList.filter((product) => {
      return product.diet.toLowerCase().includes(option);
    });
    const filteredBaguetterProducts = baguetterProductsList.filter(
      (product) => {
        return product.diet.toLowerCase().includes(option);
      }
    );
    yumProducts(filteredYumProducts);
    dailyProducts(filteredDailyProducts);
    premiumProducts(filteredPremiumProducts);
    baguetterProducts(filteredBaguetterProducts);
  } else if (option === "chicken") {
    const filteredYumProducts = yumProductsList.filter((product) => {
      return product.diet.toLowerCase().includes(option);
    });
    const filteredDailyProducts = dailyProductsList.filter((product) => {
      return product.diet.toLowerCase().includes(option);
    });
    const filteredPremiumProducts = premiumProductsList.filter((product) => {
      return product.diet.toLowerCase().includes(option);
    });
    const filteredBaguetterProducts = baguetterProductsList.filter(
      (product) => {
        return product.diet.toLowerCase().includes(option);
      }
    );
    yumProducts(filteredYumProducts);
    dailyProducts(filteredDailyProducts);
    premiumProducts(filteredPremiumProducts);
    baguetterProducts(filteredBaguetterProducts);
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
    var diet = button.getAttribute("data-yum-diet");

    var modalTitle = cardModal.querySelector(".title");
    var modalPrice = cardModal.querySelector(".price");
    var modalImg = cardModal.querySelector("img");
    var modalQuantityPrice = cardModal.querySelector(".quantity_price");
    var modalDescription = cardModal.querySelector(".description");
    var modalIngredients = cardModal.querySelector(".ingredients");
    var modalDiet = cardModal.querySelector(".diet");
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
    localStorage.setItem("diet", (modalDiet.src = diet));
    localStorage.setItem("quantity", (input.value = 1));
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

let formDataArry = JSON.parse(localStorage.getItem("formDataArry"));

let count = document.getElementById("count");
if (formDataArry !== null && formDataArry.length > 0) {
  count.insertAdjacentHTML("beforeend", formDataArry.length);
} else {
  count.insertAdjacentHTML("beforeend", 0);
  formDataArry = [];
}
console.log(count);

function realAddToCart(event) {
  var id = event.target.dataset.id;
  var title = event.target.dataset.yumTitle;
  var price = event.target.dataset.yumPrice;
  var img = event.target.dataset.yumImg;
  var quantityPrice = event.target.dataset.yumQuantityPrice;
  console.log(title, price, img, quantityPrice); // "test", "passed"

  let formData = {};
  formData.id = id;
  formData.title = title;
  formData.price = price;
  formData.img = img;
  formData.quantityPrice = quantityPrice;
  formData.quantity = 1;

  const itemIndexInBasket = formDataArry.findIndex(
    (basketEntry) => basketEntry.id === id
  );
  if (itemIndexInBasket !== -1) {
    formDataArry[itemIndexInBasket].quantity++;
    formDataArry[itemIndexInBasket].quantityPrice =
      parseInt(formDataArry[itemIndexInBasket].quantityPrice) +
      parseInt(formDataArry[itemIndexInBasket].price);
    console.log("Quantity updated:", formDataArry);
  } else {
    formDataArry.push(formData);
    console.log("The product has been added to cart:", formDataArry);
  }

  localStorage.setItem("formDataArry", JSON.stringify(formDataArry));
  count.innerHTML = formDataArry.length;
  console.log(formDataArry);
}

function modalAddToCart() {
  var modalId = localStorage.getItem("id");
  var modalTitle = localStorage.getItem("title");
  var modalPrice = localStorage.getItem("price");
  var modalQuantityPrice = localStorage.getItem("quantity-price");
  var modalImage = localStorage.getItem("img");
  var modalQuantity = localStorage.getItem("quantity");
  console.log(modalTitle, modalPrice, modalQuantityPrice, modalImage); // "test", "passed"

  let formData = {};
  formData.id = modalId;
  formData.title = modalTitle;
  formData.price = modalPrice;
  formData.img = modalImage;
  formData.quantityPrice = modalQuantityPrice;
  formData.quantity = modalQuantity;

  const itemIndexInBasket = formDataArry.findIndex(
    (basketEntry) => basketEntry.id === modalId
  );
  if (itemIndexInBasket !== -1) {
    formDataArry[itemIndexInBasket].quantity++;
    formDataArry[itemIndexInBasket].quantityPrice =
      parseInt(formDataArry[itemIndexInBasket].quantityPrice) +
      parseInt(formDataArry[itemIndexInBasket].price);
    console.log("Quantity updated:", formDataArry);
  } else {
    formDataArry.push(formData);
    console.log("The product has been added to cart:", formDataArry);
  }

  localStorage.setItem("formDataArry", JSON.stringify(formDataArry));
  count.innerHTML = formDataArry.length;
  console.log(formDataArry);
  var input = document.querySelector(".quantity");
  input.value = 1;
}

let id = "";

const displayNewCart = () => {
  if (cartItem !== null) {
    formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
    const htmlString = formDataArry
      .map((item) => {
        id = item.id;
        let quantity;
        if (item.quantity == null) {
          quantity = localStorage.getItem("quantity");
        } else {
          quantity = item.quantity;
        }
        return (
          `
          <tr id= "` +
          item.id +
          `">
          <td class="pro_img">
                        <img
                          src="` +
          item.img +
          `"
                          alt="product"
                          class="img-fluid w-100"
                        />
                      </td>

                      <td class="pro_name">
                        <a href="#">` +
          item.title?.replace(/'/g, "") +
          `</a>
                      </td>
                      <td class="pro_status">
                        <h6>` +
          item.price +
          `kr</h6>
                      </td>

                      <td class="pro_select">
                        <div class="quentity_btn">
                      <button class="decrease">
                      <i class="fal fa-minus"></i>
                    </button>
                    <input class="quantity" type="text" value=` +
          quantity +
          `>
                    <button class="increase">
                      <i class="fal fa-plus"></i>
                    </button>
                  </div>
                      </td>

                      <td class="pro_tk">
                        <h6 class="quantity_price">` +
          item.quantityPrice +
          `kr</h6>
                      </td>

                      <td class="pro_icon">
                        <button onclick="removeItem(` +
          item.id +
          `)" href="#"><i class="far fa-times"></i></button>
                      </td>
                      </tr>`
        );
      })
      .join("");
    cartItem.innerHTML = htmlString;
    return id;
  } else {
    return null;
  }
};

displayNewCart();
totalSum();
//Add to cart function
class ShoppingCart {
  constructor() {
    this.items = {};
  }

  // Method to add food items to the cart
  addToCart(foodItem, quantity) {
    console.log("clicked");
    if (this.items[foodItem]) {
      this.items[foodItem] += quantity;
    } else {
      this.items[foodItem] = quantity;
    }
    this.displayCart();
  }

  // Method to view items in the cart
  viewCart() {
    window.location.href = "cart_view.html";
    this.displayCart();
  }

  // Method to display cart items
  displayCart() {
    const cartItemsDiv = document.getElementById("cart-item");
    cartItemsDiv.innerHTML = "<h2>Cart Items:</h2>";

    for (let foodItem in this.items) {
      const itemQuantity = this.items[foodItem];
      const itemText = `${foodItem}: ${itemQuantity}`;
      cartItemsDiv.innerHTML += `<p>${itemText}</p>`;
    }
  }
}

// Create a new instance of ShoppingCart
const cart = new ShoppingCart();

// Function to add item to cart
function addToCart(foodItem, quantity) {
  cart.addToCart(foodItem, quantity);
}

// Function to view cart
function viewCart() {
  cart.viewCart();
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
  if (localStorage.getItem("quantity") !== null) {
    const inp = this.previousElementSibling;
    if (inp.value < 20) inp.value = Number(inp.value) + 1;
    let id = localStorage.getItem("id");
    let price = localStorage.getItem("price");
    price = parseInt(price);
    if (cardModal !== null) {
      var modalQuantityPrice = cardModal.querySelector(".quantity_price");
      var input = cardModal.querySelector(".quantity");
    } else {
      price = parseInt(price);
      var modalQuantityPrice =
        this.closest("td").nextElementSibling.querySelector(".quantity_price");
      var input = this.previousElementSibling;
    }
    let inputQuantity = inp.value;
    let increaseQuantityPrice = inp.value * price;
    console.log(increaseQuantityPrice);

    if (cartItem !== null) {
      let tableId = this.closest("tr").id;
      console.log(tableId);

      let itemIndex = formDataArry.filter((el) => el.id == tableId);
      if (itemIndex) {
        console.log(itemIndex);
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
        this.closest("td").nextElementSibling.querySelector(".quantity_price");
      var input = this.previousElementSibling;
      console.log(modalQuantityPrice, input);
    }
    let inputQuantity = inp.value;
    let increaseQuantityPrice = inputQuantity * price;
    console.log(increaseQuantityPrice);

    let tableId = this.closest("tr").id;
    console.log(tableId);

    let itemIndex = formDataArry.filter((el) => el.id == tableId);
    if (itemIndex) {
      console.log(itemIndex);
      itemIndex[0].quantityPrice = increaseQuantityPrice;
      modalQuantityPrice.innerHTML = increaseQuantityPrice;
      itemIndex[0].quantity = inputQuantity;
      input.value = inputQuantity;
    }
    localStorage.setItem("formDataArry", JSON.stringify(formDataArry));
  }
  totalSum();
}

function decrement() {
  if (localStorage.getItem("quantity") !== null) {
    const inp = this.nextElementSibling;
    if (inp.value > 0) inp.value = Number(inp.value) - 1;
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
        this.closest("td").nextElementSibling.querySelector(".quantity_price");
      var input = this.nextElementSibling;
    }
    let inputQuantity = inp.value;
    let descreaseQuantityPrice = quantityPrice - price;
    console.log(descreaseQuantityPrice);

    let tableId = this.closest("tr").id;
    console.log(tableId);

    let itemIndex = formDataArry.filter((el) => el.id == tableId);
    if (itemIndex) {
      console.log(itemIndex);
      itemIndex[0].quantityPrice = descreaseQuantityPrice;
      modalQuantityPrice.innerHTML = descreaseQuantityPrice;
      itemIndex[0].quantity = inputQuantity;
      input.value = inputQuantity;
    }

    localStorage.setItem("formDataArry", JSON.stringify(formDataArry));

    localStorage.setItem(
      "quantity-price",
      (modalQuantityPrice.textContent = descreaseQuantityPrice)
    );
    localStorage.setItem("quantity", (input.textContent = inputQuantity));
  } else {
    const inp = this.nextElementSibling;
    if (inp.value > 0) inp.value = Number(inp.value) - 1;
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
        this.closest("td").nextElementSibling.querySelector(".quantity_price");
      var input = this.nextElementSibling;
      console.log(modalQuantityPrice, input);
    }
    let inputQuantity = inp.value;
    let descreaseQuantityPrice = quantityPrice - price;
    console.log(descreaseQuantityPrice);

    let tableId = this.closest("tr").id;
    console.log(tableId);

    let itemIndex = formDataArry.filter((el) => el.id == tableId);
    if (itemIndex) {
      console.log(itemIndex);
      itemIndex[0].quantityPrice = descreaseQuantityPrice;
      modalQuantityPrice.innerHTML = descreaseQuantityPrice;
      itemIndex[0].quantity = inputQuantity;
      input.value = inputQuantity;
    }
    localStorage.setItem("formDataArry", JSON.stringify(formDataArry));
  }
  totalSum();
}

function removeItem(id) {
  let temp = formDataArry.filter((item) => item.id != id);
  localStorage.setItem("formDataArry", JSON.stringify(temp));
  //set item back into storage
  displayNewCart();
  count.innerHTML = formDataArry.length;
  totalSum();
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

function totalSum() {
  let totalPrice = document.getElementById("total");
  let sum = 0;
  if (totalPrice !== null) {
    formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
    for (let i = 0; i < formDataArry.length; i++) {
      sum += parseInt(formDataArry[i].quantityPrice);
    }
    totalPrice.innerHTML = sum + "kr";
    console.log(sum);
  }
  localStorage.setItem("sum", sum);
}

const sendCartInfo = document.getElementById("contact-form");
const cartForm = document.getElementById("form");
const newResult = document.getElementById("result");

if (sendCartInfo !== null) {
  sendCartInfo.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(sendCartInfo);
    const object = Object.fromEntries(formData);
    const formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
    const sum = localStorage.getItem("sum");
    const data = {
      json: object,
      order: formDataArry,
      sum: sum,
    };
    cartForm.innerHTML = `<div class="single_team_text">
          <h4 style="text-transform: none">Var god vänta</h4>
          </div>`;

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          cartForm.innerHTML = `<div class="single_team_text">
          <h4 style="text-transform: none">Tack för ditt meddelande. En av våra medarbetare ska
          återkomma till dig snart</h4>
          </div>
          `;
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
