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

//make header and footer reusable in different html pages
function Header() {
  let header = document.getElementById("header");
  header.innerHTML = `
  <nav class="navbar navbar-expand-lg main_menu">
    <div class="container">
      <a class="navbar-brand" href="index.html">
        <img src="images/logo.png" alt="logo" class="img-fluid logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="far fa-bars menu_icon_bar"></i>
        <i class="far fa-times close_icon_close"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#"
              >Meny <i class="far fa-angle-down"></i
            ></a>
            <ul class="droap_menu">
              <li><a href="baguette_menu.html">Baguetter</a></li>
              <!-- <li><a href="bamba_menu.html">Bamba-rätter</a></li>-->
              <li><a href="yum_menu.html">Yum</a></li>
             <li><a href="daily_menu.html">Dagens</a></li> 
              <li><a href="premium_menu.html">Premium</a></li> 
            </ul>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="#"
              >Våra tjänster <i class="far fa-angle-down"></i
            ></a>
            <ul class="droap_menu">
              <li><a href="office.html">Kontor</a></li>
              <li><a href="private.html">Privat</a></li>
              <li><a href="events.html">Evenemang</a></li>
            </ul>
          </li>
          <!--
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
      <ul>
      <!--
         <li>
              <a href="sign_in.html"><i class="fas fa-user"></i></a>
        </li>
        -->
      <li>
        <a href="cart_view.html"
          ><i class="fas fa-shopping-basket"></i> <span id="count"></span
        ></a>
      </li>
      </ul>
    </div>
  </nav>
    `;
}

function Footer() {
  let footer = document.getElementById("footer");
  footer.innerHTML = `
      <div class="footer_overlay pt_20 xs_pt_70">
        <div class="container wow fadeInUp" data-wow-duration="1s">
          <div class="row justify-content-around pt_50">
            <div class="col-xxl-4 col-lg-4 col-sm-9 col-md-7">
              <div class="footer_content">
                <a class="footer_logo" href="index.html">
                  <img
                    src="images/footer_logo_group.png"
                    alt="footer-logo"
                    class="img-fluid w-100 mb_25"
                  />
                </a>
                <ul class="social_link d-flex flex-wrap mx_50">
                  <li>
                    <a
                      href="https://www.facebook.com/YumFoodsSE"
                      target="_blank"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/yum-foods/"
                      target="_blank"
                      ><i class="fab fa-linkedin-in"></i
                    ></a>
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
                  <li>
                    <a
                      href="https://www.instagram.com/yumfoods.se/"
                      target="_blank"
                      ><i class="fab fa-instagram"></i
                    ></a>
                  </li>
                  <!--
                  <li>
                    <a href="#"><i class="fab fa-tiktok"></i></a>
                  </li>
                  -->
                </ul>
              </div>
            </div>
            <div class="col-xxl-2 col-lg-2 col-sm-5 col-md-5">
              <div class="footer_content">
                <ul>
                  <li><a href="index.html">Hem</a></li>
                  <li><a href="about.html">Om oss</a></li>
                  <li><a href="contact.html">Kontakta oss</a></li>
                  <li><a href="certificates.html">Certificat</a></li>
                </ul>
              </div>
            </div>
            <div class="col-xxl-2 col-lg-2 col-sm-6 col-md-5 order-md-4">
              <div class="footer_content">
                <ul>
                  <li><a href="terms_condition.html">Allmänna villkor</a></li>
                  <li><a href="privacy_policy.html">Integritetspolicy</a></li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row wow fadeInUp text-center" data-wow-duration="1s">
        <div class="col-md-8 col-lg-12 col-xl-12">
          <div class="contacts-content contacts justify-content-center w_100">
            <div class="contacts-box">
              <img class="telefon-bild" src="./images/phone.png" alt="phone" />
              <p>+46 76 023 49 30</p>
            </div>
            <div class="contacts-box">
              <img class="melj-bild" src="./images/mail.png" alt="mail" />
              <p>info@yumfoods.se</p>
            </div>
            <div class="contacts-box">
              <img
                class="contacts-img"
                src="./images/location-marker.png"
                alt="läge-bild"
              />
              <p>Stora Badhusgatan 18, 411 21 Göteborg</p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_bottom d-flex flex-wrap">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="footer_bottom_text">
                <p>Copyright ©<b> YumFood</b> 2024. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
}

Header();
Footer();

//Get elements from the DOM
let yum = document.getElementById("yum");
let daily = document.getElementById("daily");
let premium = document.getElementById("premium");
let subscriptions = document.getElementById("subscription");
let categories = document.getElementById("categories");
let baguetter = document.getElementById("baguetter");
let popup = document.getElementById("popup");
const searchBar = document.getElementById("searchbar");
let cartItem = document.getElementById("cart-item");
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
let yumFiltered = [];
let dailyFiltered = [];
let premiumFiltered = [];
let subscriptionsFiltered = [];
let baguetterFiltered = [];
let all = [];

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

//Fetch items from json
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

//Display yum items
const yumProducts = (yumProductsList) => {
  if (yum !== null) {
    const htmlString = yumProductsList
      .map((yum) => {
        let diet = "";
        let value = "";
        if (Array.isArray(yum.diet)) {
          var obj = yum.diet;
          value = JSON.stringify(obj);
          const imageTags = yum.diet.map((img) => {
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
            yum.diet +
            `
                  alt="specialkost-bild"
                  class="diet_img"
                />
                `;
          diet = singleImage;
          value = yum.diet;
        }
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
                  alt="yum-meny-bild"
                  class="img-fluid w-100"
                  class="title"
                  href="#"
                  data-yum-id=${yum.id} 
                  data-yum-title=${yum.title}
                  data-yum-price=${yum.price}
                  data-yum-img=${yum.img}
                  data-yum-quantity-price=${yum.price}
                  data-yum-description=${yum.description}
                  data-yum-ingredients=${yum.ingredients}
                  data-yum-diet=${[value]}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                />
              </div>
              <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex">` +
          diet +
          `</div>
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
                  data-yum-diet=${[value]}
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

//Display daily items
const dailyProducts = (dailyProductsList) => {
  if (daily !== null) {
    const htmlString = dailyProductsList
      .map((daily) => {
        let diet = "";
        let value = "";
        if (Array.isArray(daily.diet)) {
          var obj = daily.diet;
          value = JSON.stringify(obj);
          const imageTags = daily.diet.map((img) => {
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
            daily.diet +
            `
                  alt="specialkost-bild"
                  class="diet_img"
                />
                `;
          diet = singleImage;
          value = daily.diet;
        }
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
                  alt="dagens-meny-bild"
                  class="img-fluid w-100"
                  class="title"
                  href="#"
                  data-yum-id=${daily.id} 
                  data-yum-title=${daily.title}
                  data-yum-price=${daily.price}
                  data-yum-img=${daily.img}
                  data-yum-quantity-price=${daily.price}
                  data-yum-description=${daily.description}
                  data-yum-ingredients=${daily.ingredients}
                  data-yum-diet=${[value]}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                />
              </div>
              <div class="d-flex justify-content-between align-items-center">
               <div class="d-flex">` +
          diet +
          `</div>
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
                  data-yum-diet=${[value]}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >` +
          daily.title.replace(/'/g, "") +
          `</a
                >
                <h5 class="price">` +
          daily.price +
          `kr</h5>` +
          "<div class='add_to_cart'>Kommer snart</div><!-- <button id = 'cart-button' class='add_to_cart' data - id=" +
          daily.id +
          `
          data-yum-id=${daily.id}
          data-yum-title=${daily.title}
          data-yum-price=${daily.price}
          data-yum-img=${daily.img}
          data-yum-quantity-price=${daily.price}
          ` +
          ") onclick='realAddToCart(event)''>Lägg till     <i class='fas fa-cart-plus'></i></button>-->" +
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

//Display premium items
const premiumProducts = (premiumProductsList) => {
  if (premium !== null) {
    const htmlString = premiumProductsList
      .map((premium) => {
        let diet = "";
        let value = "";
        if (Array.isArray(premium.diet)) {
          var obj = premium.diet;
          value = JSON.stringify(obj);
          const imageTags = premium.diet.map((img) => {
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
            premium.diet +
            `
                  alt="specialkost-bild"
                  class="diet_img"
                />
                `;
          diet = singleImage;
          value = premium.diet;
        }
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
                  alt="premium-meny-bild"
                  class="img-fluid w-100"
                  class="title"
                  href="#"
                  data-yum-id=${premium.id} 
                  data-yum-title=${premium.title}
                  data-yum-price=${premium.price}
                  data-yum-img=${premium.img}
                  data-yum-quantity-price=${premium.price}
                  data-yum-description=${premium.description}
                  data-yum-ingredients=${premium.ingredients}
                  data-yum-diet=${[value]}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                />
              </div>
              <div class="d-flex justify-content-between align-items-center">
               <div class="d-flex">` +
          diet +
          `</div>
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
                  data-yum-diet=${[value]}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >` +
          premium.title.replace(/'/g, "") +
          `</a
                >
                <h5 class="price">` +
          premium.price +
          `kr</h5>` +
          "<div class='add_to_cart'>Kommer snart</div><!--<button id='cart-button' class='add_to_cart' data-id=" +
          premium.id +
          `
          data-yum-id=${premium.id}
          data-yum-title=${premium.title}
          data-yum-price=${premium.price}
          data-yum-img=${premium.img}
          data-yum-quantity-price=${premium.price}
          ` +
          ") onclick='realAddToCart(event)''>Lägg till     <i class='fas fa-cart-plus'></i></button>-->" +
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

//Show baguetter
const baguetterProducts = (baguetterProductsList) => {
  if (baguetter !== null) {
    const htmlString = baguetterProductsList
      .map((baguetter) => {
        let diet = "";
        let value = "";
        if (Array.isArray(baguetter.diet)) {
          var obj = baguetter.diet;
          value = JSON.stringify(obj);
          const imageTags = baguetter.diet.map((img) => {
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
            baguetter.diet +
            `
                  alt="specialkost-bild"
                  class="diet_img"
                />
                `;
          diet = singleImage;
          value = baguetter.diet;
        }
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
                  alt="baguette-bild"
                  class="img-fluid w-100"
                  class="title"
                  href="#"
                  data-yum-id=${baguetter.id} 
                  data-yum-title=${baguetter.title}
                  data-yum-price=${baguetter.price}
                  data-yum-img=${baguetter.img}
                  data-yum-quantity-price=${baguetter.price}
                  data-yum-description=${baguetter.description}
                  data-yum-ingredients=${baguetter.ingredients}
                  data-yum-diet=${[value]}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                />
              </div>
               <div class="d-flex justify-content-between align-items-center">
               <div class="d-flex">` +
          diet +
          `</div>
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
                  data-yum-diet=${[value]}
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

//Show subscription prducts
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
                  alt="prenumeration-bild"
                  class="img-fluid w-100"
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

// Show categories
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
                    alt="kategori-bild"
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

//Sort function for diet
const sortingDishDietFunction = (el) => {
  const option = el.value;
  if (option === "vegan") {
    const filteredYumProducts = yumProductsList.filter((product) => {
      let vegan = "";
      product.diet.map((img) => {
        vegan = img.toLowerCase().includes(option);
      });
      return vegan;
    });
    const filteredDailyProducts = dailyProductsList.filter((product) => {
      let vegan = "";
      product.diet.map((img) => {
        vegan = img.toLowerCase().includes(option);
      });
      return vegan;
    });
    const filteredPremiumProducts = premiumProductsList.filter((product) => {
      let vegan = "";
      product.diet.map((img) => {
        vegan = img.toLowerCase().includes(option);
      });
      return vegan;
    });
    const filteredBaguetterProducts = baguetterProductsList.filter(
      (product) => {
        let vegan = "";
        product.diet.map((img) => {
          vegan = img.toLowerCase().includes(option);
        });
        return vegan;
      }
    );
    yumProducts(filteredYumProducts);
    dailyProducts(filteredDailyProducts);
    premiumProducts(filteredPremiumProducts);
    baguetterProducts(filteredBaguetterProducts);
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
      let vegetarian = "";
      product.diet.map((img) => {
        vegetarian = img.toLowerCase().includes(option);
      });
      return vegetarian;
    });
    const filteredDailyProducts = dailyProductsList.filter((product) => {
      let vegetarian = "";
      product.diet.map((img) => {
        vegetarian = img.toLowerCase().includes(option);
      });
      return vegetarian;
    });
    const filteredPremiumProducts = premiumProductsList.filter((product) => {
      let vegetarian = "";
      product.diet.map((img) => {
        vegetarian = img.toLowerCase().includes(option);
      });
      return vegetarian;
    });
    const filteredBaguetterProducts = baguetterProductsList.filter(
      (product) => {
        let vegetarian = "";
        product.diet.map((img) => {
          vegetarian = img.toLowerCase().includes(option);
        });
        return vegetarian;
      }
    );
    yumProducts(filteredYumProducts);
    dailyProducts(filteredDailyProducts);
    premiumProducts(filteredPremiumProducts);
    baguetterProducts(filteredBaguetterProducts);
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
      let cow = "";
      product.diet.map((img) => {
        cow = img.toLowerCase().includes(option);
      });
      return cow;
    });
    const filteredDailyProducts = dailyProductsList.filter((product) => {
      let cow = "";
      product.diet.map((img) => {
        cow = img.toLowerCase().includes(option);
      });
      return cow;
    });
    const filteredPremiumProducts = premiumProductsList.filter((product) => {
      let cow = "";
      product.diet.map((img) => {
        cow = img.toLowerCase().includes(option);
      });
      return cow;
    });
    const filteredBaguetterProducts = baguetterProductsList.filter(
      (product) => {
        let cow = "";
        product.diet.map((img) => {
          cow = img.toLowerCase().includes(option);
        });
        return cow;
      }
    );
    yumProducts(filteredYumProducts);
    dailyProducts(filteredDailyProducts);
    premiumProducts(filteredPremiumProducts);
    baguetterProducts(filteredBaguetterProducts);
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
      let fish = "";
      product.diet.map((img) => {
        fish = img.toLowerCase().includes(option);
      });
      return fish;
    });
    const filteredDailyProducts = dailyProductsList.filter((product) => {
      let fish = "";
      product.diet.map((img) => {
        fish = img.toLowerCase().includes(option);
      });
      return fish;
    });
    const filteredPremiumProducts = premiumProductsList.filter((product) => {
      let fish = "";
      product.diet.map((img) => {
        fish = img.toLowerCase().includes(option);
      });
      return fish;
    });
    const filteredBaguetterProducts = baguetterProductsList.filter(
      (product) => {
        let fish = "";
        product.diet.map((img) => {
          fish = img.toLowerCase().includes(option);
        });
        return fish;
      }
    );
    yumProducts(filteredYumProducts);
    dailyProducts(filteredDailyProducts);
    premiumProducts(filteredPremiumProducts);
    baguetterProducts(filteredBaguetterProducts);
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
      let chicken = "";
      product.diet.map((img) => {
        chicken = img.toLowerCase().includes(option);
      });
      return chicken;
    });
    const filteredDailyProducts = dailyProductsList.filter((product) => {
      let chicken = "";
      product.diet.map((img) => {
        chicken = img.toLowerCase().includes(option);
      });
      return chicken;
    });
    const filteredPremiumProducts = premiumProductsList.filter((product) => {
      let chicken = "";
      product.diet.map((img) => {
        chicken = img.toLowerCase().includes(option);
      });
      return chicken;
    });
    const filteredBaguetterProducts = baguetterProductsList.filter(
      (product) => {
        let chicken = "";
        product.diet.map((img) => {
          chicken = img.toLowerCase().includes(option);
        });
        return chicken;
      }
    );
    yumProducts(filteredYumProducts);
    dailyProducts(filteredDailyProducts);
    premiumProducts(filteredPremiumProducts);
    baguetterProducts(filteredBaguetterProducts);
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
    var diet = button.getAttribute("data-yum-diet");

    diet = JSON.parse(diet);

    const imageTags = diet.map((img) => {
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
    localStorage.setItem("diet", (modalDiet.innerHTML = diet));
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
  var id = event.target.dataset.id;
  var title = event.target.dataset.yumTitle;
  var price = event.target.dataset.yumPrice;
  var img = event.target.dataset.yumImg;
  var quantityPrice = event.target.dataset.yumQuantityPrice;

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
}

let id = "";

//Display items in the cart
const displayNewCart = () => {
  if (cartItem !== null) {
    formDataArry = JSON.parse(localStorage.getItem("formDataArry"));
    if (formDataArry === null) {
      cartItem.insertAdjacentHTML(
        "afterend",
        `<h4 class="single_team_text" style="padding: 20px; text-align: center">
          Din varukorg är tom
        </h4>`
      );
    } else {
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
          <td data-label="Bild" class="pro_img">
                        <img
                          src="` +
            item.img +
            `"
                          alt="rätt-bild"
                          class="img-fluid w-100"
                        />
                      </td>

                      <td data-label="Detaljer" class="pro_name">
                        <a href="#">` +
            item.title?.replace(/'/g, "") +
            `</a>
                      </td>
                      <td data-label="Pris" class="pro_status">
                        <h6>` +
            item.price +
            `kr</h6>
                      </td>

                      <td data-label="Kvantitet" class="pro_select">
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

                      <td data-label="Total" class="pro_tk">
                      <div class="quentity_btn">
                        <h6 class="quantity_price">` +
            item.quantityPrice +
            `</h6>
                      <h6 class="currency mb_0">kr</h6>
                      </div>
                      </td>

                      <td data-label="Ta bort" class="pro_icon">
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
    }
  }
};

displayNewCart();
totalSum();
totalQuantity();

const increase = document.querySelectorAll(".increase");
const decrease = document.querySelectorAll(".decrease");

increase.forEach((btn) => {
  btn.addEventListener("click", increment);
});

decrease.forEach((btn) => {
  btn.addEventListener("click", decrement);
});

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
        this.closest("td").nextElementSibling.querySelector(".quantity_price");
      var input = this.previousElementSibling;
    }
    let inputQuantity = inp.value;
    let increaseQuantityPrice = inp.value * price;

    if (cartItem !== null) {
      let tableId = this.closest("tr").id;

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
        this.closest("td").nextElementSibling.querySelector(".quantity_price");
      var input = this.previousElementSibling;
    }
    let inputQuantity = inp.value;

    let tableId = this.closest("tr").id;

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

//Decrement function on the - button for quantity
function decrement() {
  if (localStorage.getItem("quantity") !== null) {
    const inp = this.nextElementSibling;
    button = this.closest("button");
    if (inp.value > 0) inp.value = Number(inp.value) - 1;
    if (inp.value <= 0) {
      this.setAttribute("disabled", "disabled");
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
        this.closest("td").nextElementSibling.querySelector(".quantity_price");
      var input = this.nextElementSibling;
    }
    let inputQuantity = inp.value;
    let decreaseQuantityPrice = quantityPrice - price;

    if (cartItem !== null) {
      let tableId = this.closest("tr").id;
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
    const inp = this.nextElementSibling;
    if (inp.value > 0) {
      inp.value = Number(inp.value) - 1;
    }
    if (inp.value <= 0) {
      this.setAttribute("disabled", "disabled");
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
        this.closest("td").nextElementSibling.querySelector(".quantity_price");
      var input = this.nextElementSibling;
    }
    let inputQuantity = inp.value;

    let tableId = this.closest("tr").id;

    let itemIndex = formDataArry.filter((el) => el.id == tableId);
    if (itemIndex) {
      let decreaseQuantityPrice =
        itemIndex[0].quantityPrice - itemIndex[0].price;
      itemIndex[0].quantityPrice = decreaseQuantityPrice;
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
  localStorage.setItem("formDataArry", JSON.stringify(temp));
  //set item back into storage
  displayNewCart();
  totalQuantity();
  totalSum();
  updateFields();
  if (temp.length === 0) {
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
                <div class="d-flex">
                <div class="col-xl-6 col-sm-12">
                  <div for="role" class="contact_form_input">
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

// Function to cart content and total form to email
const sendCartInfo = document.getElementById("cart-order-form");
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
