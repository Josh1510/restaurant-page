/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadContact = () => {
    console.log('contact loading');
    let mainContent = document.getElementById('content');

    // reset page
    mainContent.innerHTML = '';

    mainContent.innerHTML = `
    <div>We're so close! Come and say hello.</div>
    <iframe
        src="https://maps.google.com/maps?q=home&t=&z=19&ie=UTF8&iwloc=&output=embed"
        width="600"
        height="450"
        frameborder="0"
        style="border: 0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
    ></iframe>`;

    console.log('contact loaded~');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadHome = () => {
  console.log("home loading~");

  let mainContent = document.getElementById("content");

  // reset page
  mainContent.innerHTML = "";

  const homeContent = () => {
    // Load in home page content
    mainContent = document.getElementById("content");
    const para = document.createElement("p");
    para.textContent =
      "Could this be the best pizza in the world? No. Is this the best pizza within 10 minutes of your house? Possibly, there's only one way to find out!";

    const widgetDiv = document.createElement("div");
    const widgetScript = document.createElement("script");

    widgetScript.src =
      "//www.opentable.com/widget/reservation/loader?rid=99999&type=standard&theme=standard&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website";

    mainContent.appendChild(para);
    widgetDiv.appendChild(widgetScript);
    mainContent.appendChild(widgetDiv);
  };

  homeContent();
  console.log("home loaded~");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),

/***/ "./src/icons/GitHub-Mark-32px.png":
/*!****************************************!*\
  !*** ./src/icons/GitHub-Mark-32px.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0035c307a36c17babb8d.png";

/***/ }),

/***/ "./src/images/cheese.png":
/*!*******************************!*\
  !*** ./src/images/cheese.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff8ea13327a6c494aba9.png";

/***/ }),

/***/ "./src/images/mushroom.png":
/*!*********************************!*\
  !*** ./src/images/mushroom.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7814900d45d1ee1c5ef.png";

/***/ }),

/***/ "./src/images/noToppings.png":
/*!***********************************!*\
  !*** ./src/images/noToppings.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc216f075b3c40292f74.png";

/***/ }),

/***/ "./src/images/olives.png":
/*!*******************************!*\
  !*** ./src/images/olives.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2275a09723619c17538.png";

/***/ }),

/***/ "./src/images/pepperoni.png":
/*!**********************************!*\
  !*** ./src/images/pepperoni.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9617561a98311ef20248.png";

/***/ }),

/***/ "./src/initial-load.js":
/*!*****************************!*\
  !*** ./src/initial-load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_GitHub_Mark_32px_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/GitHub-Mark-32px.png */ "./src/icons/GitHub-Mark-32px.png");


const writeElements = (() => {
  // Creates the main element which page contect can be added to
  const writeMain = () => {
    const main = document.createElement("main");
    main.id = "content";

    return main;
  };

  // Creates the header text
  const writeHeader = () => {
    const header = document.createElement("header");
    header.id = "header";
    const headerTitle = document.createElement("h1");
    headerTitle.textContent = "Josh's Pizzas";
    header.appendChild(headerTitle);
    header.appendChild(writeNavBar());
    return header;
  };

  // Creats the buttons which are later added to the nav bar
  const writeButton = (buttonTitle) => {
    const button = document.createElement("button");
    button.id = buttonTitle;
    const span = document.createElement("span");
    span.textContent = buttonTitle;
    button.appendChild(span);

    return button;
  };

  // Creates the navigation bar and adds buttons to it
  const writeNavBar = () => {
    const navBar = document.createElement("nav");

    const homeButton = writeButton("Home");
    const menuButton = writeButton("Menu");
    const contactButton = writeButton("Contact");

    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);

    return navBar;
  };

  const writeFooter = () => {
    const footer = document.createElement("footer");

    const madeby = document.createElement("div");
    madeby.textContent = "Check my GitHub!";

    const footerImgLink = document.createElement("a");
    footerImgLink.href = "https://github.com/Josh1510";

    const linkSpan = document.createElement("span");
    linkSpan.className = "link-span";

    const footerImg = document.createElement("img");
    footerImg.src = _icons_GitHub_Mark_32px_png__WEBPACK_IMPORTED_MODULE_0__;

    linkSpan.appendChild(footerImgLink);

    footerImgLink.appendChild(footerImg);

    footer.appendChild(footerImgLink);
    footer.appendChild(madeby);

    return footer;
  };

  return { writeMain, writeHeader, writeFooter };
})();

// Initial load of the page, loads in the header, footer and main
// elements.
const initialLoad = () => {
  const body = document.querySelector("body");

  const content = document.createElement("div");

  const header = writeElements.writeHeader();
  const main = writeElements.writeMain();
  const footer = writeElements.writeFooter();

  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);

  // main.appendChild(loadHome());

  body.appendChild(content);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_cheese_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/cheese.png */ "./src/images/cheese.png");
/* harmony import */ var _images_mushroom_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/mushroom.png */ "./src/images/mushroom.png");
/* harmony import */ var _images_noToppings_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/noToppings.png */ "./src/images/noToppings.png");
/* harmony import */ var _images_olives_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/olives.png */ "./src/images/olives.png");
/* harmony import */ var _images_pepperoni_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/pepperoni.png */ "./src/images/pepperoni.png");






const pizzaMenu = [];

class Pizza {
    constructor(name, toppings, price, image) {
        this.name = name;
        this.toppings = toppings;
        this.price = price;
        this.image = image;

        Pizza.addToMenu(this);
    }

    get name() {
        return this._name;
    }

    set name(x) {
        this._name = x;
    }

    get toppings() {
        return this._toppings;
    }
    set toppings(x) {
        this._toppings = x;
    }

    get price() {
        return this._price;
    }
    set price(x) {
        this._price = x;
    }

    get image() {
        return this._image;
    }
    set image(x) {
        this._image = x;
    }

    static addToMenu(pizza) {
        pizzaMenu.push(pizza);
    }

    static getPizzas() {
        return pizzaMenu;
    }

    createMenulisting() {
        const pizzaContainerDiv = document.createElement('div');

        // Load in the image of the pizza
        const pizzaImgDiv = document.createElement('div');
        const pizzaImg = document.createElement('img');
        pizzaImg.setAttribute('src', this.image);
        pizzaImg.setAttribute('alt', this.name);
        pizzaImgDiv.appendChild(pizzaImg);

        // Attach the name
        const pizzaNameDiv = document.createElement('div');
        const pizzaName = document.createElement('h3');
        pizzaName.textContent = this.name;
        pizzaNameDiv.appendChild(pizzaName);

        // Attach the toppings
        const pizzaToppingsDiv = document.createElement('div');
        const pizzaToppings = document.createElement('h4');
        pizzaToppings.textContent = this.toppings;
        pizzaToppingsDiv.appendChild(pizzaToppings);

        // Attach the price
        const pizzaPriceDiv = document.createElement('div');
        const pizzaPrice = document.createElement('h3');
        pizzaPrice.textContent = this.price;
        pizzaPriceDiv.appendChild(pizzaPrice);

        // Attach information to container div
        pizzaContainerDiv.appendChild(pizzaImgDiv);
        pizzaContainerDiv.appendChild(pizzaNameDiv);
        pizzaContainerDiv.appendChild(pizzaToppingsDiv);
        pizzaContainerDiv.appendChild(pizzaPriceDiv);

        return pizzaContainerDiv;
    }
}

// creating pizzas
const cheesePizza = new Pizza(
    'Cheese',
    'Tomato base, Mozzarella',
    10,
    _images_cheese_png__WEBPACK_IMPORTED_MODULE_0__
);
const mushroomPizza = new Pizza(
    'Mushroom',
    'Tomato base, Mushrooms, Mozzarella',
    11,
    _images_mushroom_png__WEBPACK_IMPORTED_MODULE_1__
);
const olivePizza = new Pizza(
    'Olive',
    'Tomato base, Olives, Mozzarella',
    11,
    _images_olives_png__WEBPACK_IMPORTED_MODULE_3__
);
const pepperoniPizza = new Pizza(
    'Pepperoni',
    'Tomato base, Pepperoni, Mozzarella',
    12,
    _images_pepperoni_png__WEBPACK_IMPORTED_MODULE_4__
);
const noToppingPizza = new Pizza('No Toppings', 'Tomato base', 6, _images_noToppings_png__WEBPACK_IMPORTED_MODULE_2__);

const loadMenu = () => {
    console.log('menu loading');

    let mainContent = document.getElementById('content');

    // reset page
    mainContent.innerHTML = '';

    const menuConainerDiv = document.createElement('div');

    pizzaMenu.forEach((pizza) => {
        menuConainerDiv.appendChild(pizza.createMenulisting());
    });

    mainContent.appendChild(menuConainerDiv);

    console.log('menu loaded~');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-load */ "./src/initial-load.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





// First page load, load in header, nav and footer then loads the home page
(0,_initial_load__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_home__WEBPACK_IMPORTED_MODULE_1__.default)();

const loadPage = (id) => {
    if (id === 'Home') {
        (0,_home__WEBPACK_IMPORTED_MODULE_1__.default)();
    } else if (id === 'Menu') {
        (0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)();
    } else if (id === 'Contact') {
        (0,_contact__WEBPACK_IMPORTED_MODULE_3__.default)();
    } else {
        console.log("thats not a page? how'd you get here?");
    }
};

// Selectors for buttons
const navButtons = document
    .getElementById('header')
    .querySelectorAll('button')
    .forEach((item) => {
        item.addEventListener('click', (event) => {
            loadPage(item.id);
        });
    });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbC1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCM0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCOEI7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix3REFBVTs7QUFFOUI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFVBQVU7QUFDVixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEdpQjtBQUNJO0FBQ0c7QUFDUDtBQUNNOztBQUVsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0NBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBVztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtDQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQVk7QUFDaEI7QUFDQSxrRUFBa0UsbURBQVk7O0FBRTlFO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7OztVQzNJeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7OztBQ2Z5QztBQUNYO0FBQ0E7QUFDTTs7QUFFcEM7QUFDQSxzREFBVztBQUNYLDhDQUFROztBQUVSO0FBQ0E7QUFDQSxRQUFRLDhDQUFRO0FBQ2hCLEtBQUs7QUFDTCxRQUFRLDhDQUFRO0FBQ2hCLEtBQUs7QUFDTCxRQUFRLGlEQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxvYWRDb250YWN0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjb250YWN0IGxvYWRpbmcnKTtcbiAgICBsZXQgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgLy8gcmVzZXQgcGFnZVxuICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgIDxkaXY+V2UncmUgc28gY2xvc2UhIENvbWUgYW5kIHNheSBoZWxsby48L2Rpdj5cbiAgICA8aWZyYW1lXG4gICAgICAgIHNyYz1cImh0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcHM/cT1ob21lJnQ9Jno9MTkmaWU9VVRGOCZpd2xvYz0mb3V0cHV0PWVtYmVkXCJcbiAgICAgICAgd2lkdGg9XCI2MDBcIlxuICAgICAgICBoZWlnaHQ9XCI0NTBcIlxuICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxuICAgICAgICBzdHlsZT1cImJvcmRlcjogMFwiXG4gICAgICAgIGFsbG93ZnVsbHNjcmVlbj1cIlwiXG4gICAgICAgIGFyaWEtaGlkZGVuPVwiZmFsc2VcIlxuICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgID48L2lmcmFtZT5gO1xuXG4gICAgY29uc29sZS5sb2coJ2NvbnRhY3QgbG9hZGVkficpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3Q7XG4iLCJjb25zdCBsb2FkSG9tZSA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJob21lIGxvYWRpbmd+XCIpO1xuXG4gIGxldCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAvLyByZXNldCBwYWdlXG4gIG1haW5Db250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgY29uc3QgaG9tZUNvbnRlbnQgPSAoKSA9PiB7XG4gICAgLy8gTG9hZCBpbiBob21lIHBhZ2UgY29udGVudFxuICAgIG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwYXJhLnRleHRDb250ZW50ID1cbiAgICAgIFwiQ291bGQgdGhpcyBiZSB0aGUgYmVzdCBwaXp6YSBpbiB0aGUgd29ybGQ/IE5vLiBJcyB0aGlzIHRoZSBiZXN0IHBpenphIHdpdGhpbiAxMCBtaW51dGVzIG9mIHlvdXIgaG91c2U/IFBvc3NpYmx5LCB0aGVyZSdzIG9ubHkgb25lIHdheSB0byBmaW5kIG91dCFcIjtcblxuICAgIGNvbnN0IHdpZGdldERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgd2lkZ2V0U2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcblxuICAgIHdpZGdldFNjcmlwdC5zcmMgPVxuICAgICAgXCIvL3d3dy5vcGVudGFibGUuY29tL3dpZGdldC9yZXNlcnZhdGlvbi9sb2FkZXI/cmlkPTk5OTk5JnR5cGU9c3RhbmRhcmQmdGhlbWU9c3RhbmRhcmQmaWZyYW1lPXRydWUmZG9tYWluPWNvbSZsYW5nPWVuLVVTJm5ld3RhYj1mYWxzZSZvdF9zb3VyY2U9UmVzdGF1cmFudCUyMHdlYnNpdGVcIjtcblxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHBhcmEpO1xuICAgIHdpZGdldERpdi5hcHBlbmRDaGlsZCh3aWRnZXRTY3JpcHQpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHdpZGdldERpdik7XG4gIH07XG5cbiAgaG9tZUNvbnRlbnQoKTtcbiAgY29uc29sZS5sb2coXCJob21lIGxvYWRlZH5cIik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTtcbiIsImltcG9ydCBnaXRodWJJY29uIGZyb20gXCIuL2ljb25zL0dpdEh1Yi1NYXJrLTMycHgucG5nXCI7XG5cbmNvbnN0IHdyaXRlRWxlbWVudHMgPSAoKCkgPT4ge1xuICAvLyBDcmVhdGVzIHRoZSBtYWluIGVsZW1lbnQgd2hpY2ggcGFnZSBjb250ZWN0IGNhbiBiZSBhZGRlZCB0b1xuICBjb25zdCB3cml0ZU1haW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIG1haW4uaWQgPSBcImNvbnRlbnRcIjtcblxuICAgIHJldHVybiBtYWluO1xuICB9O1xuXG4gIC8vIENyZWF0ZXMgdGhlIGhlYWRlciB0ZXh0XG4gIGNvbnN0IHdyaXRlSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcbiAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiSm9zaCdzIFBpenphc1wiO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHdyaXRlTmF2QmFyKCkpO1xuICAgIHJldHVybiBoZWFkZXI7XG4gIH07XG5cbiAgLy8gQ3JlYXRzIHRoZSBidXR0b25zIHdoaWNoIGFyZSBsYXRlciBhZGRlZCB0byB0aGUgbmF2IGJhclxuICBjb25zdCB3cml0ZUJ1dHRvbiA9IChidXR0b25UaXRsZSkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLmlkID0gYnV0dG9uVGl0bGU7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4udGV4dENvbnRlbnQgPSBidXR0b25UaXRsZTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuXG4gIC8vIENyZWF0ZXMgdGhlIG5hdmlnYXRpb24gYmFyIGFuZCBhZGRzIGJ1dHRvbnMgdG8gaXRcbiAgY29uc3Qgd3JpdGVOYXZCYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSB3cml0ZUJ1dHRvbihcIkhvbWVcIik7XG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IHdyaXRlQnV0dG9uKFwiTWVudVwiKTtcbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gd3JpdGVCdXR0b24oXCJDb250YWN0XCIpO1xuXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG5cbiAgICByZXR1cm4gbmF2QmFyO1xuICB9O1xuXG4gIGNvbnN0IHdyaXRlRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG5cbiAgICBjb25zdCBtYWRlYnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1hZGVieS50ZXh0Q29udGVudCA9IFwiQ2hlY2sgbXkgR2l0SHViIVwiO1xuXG4gICAgY29uc3QgZm9vdGVySW1nTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGZvb3RlckltZ0xpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL0pvc2gxNTEwXCI7XG5cbiAgICBjb25zdCBsaW5rU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGxpbmtTcGFuLmNsYXNzTmFtZSA9IFwibGluay1zcGFuXCI7XG5cbiAgICBjb25zdCBmb290ZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGZvb3RlckltZy5zcmMgPSBnaXRodWJJY29uO1xuXG4gICAgbGlua1NwYW4uYXBwZW5kQ2hpbGQoZm9vdGVySW1nTGluayk7XG5cbiAgICBmb290ZXJJbWdMaW5rLmFwcGVuZENoaWxkKGZvb3RlckltZyk7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVySW1nTGluayk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKG1hZGVieSk7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xuICB9O1xuXG4gIHJldHVybiB7IHdyaXRlTWFpbiwgd3JpdGVIZWFkZXIsIHdyaXRlRm9vdGVyIH07XG59KSgpO1xuXG4vLyBJbml0aWFsIGxvYWQgb2YgdGhlIHBhZ2UsIGxvYWRzIGluIHRoZSBoZWFkZXIsIGZvb3RlciBhbmQgbWFpblxuLy8gZWxlbWVudHMuXG5jb25zdCBpbml0aWFsTG9hZCA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IGhlYWRlciA9IHdyaXRlRWxlbWVudHMud3JpdGVIZWFkZXIoKTtcbiAgY29uc3QgbWFpbiA9IHdyaXRlRWxlbWVudHMud3JpdGVNYWluKCk7XG4gIGNvbnN0IGZvb3RlciA9IHdyaXRlRWxlbWVudHMud3JpdGVGb290ZXIoKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAvLyBtYWluLmFwcGVuZENoaWxkKGxvYWRIb21lKCkpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsTG9hZDtcbiIsImltcG9ydCBjaGVlc2VJbWcgZnJvbSAnLi9pbWFnZXMvY2hlZXNlLnBuZyc7XG5pbXBvcnQgbXVzaHJvb21JbWcgZnJvbSAnLi9pbWFnZXMvbXVzaHJvb20ucG5nJztcbmltcG9ydCBub1RvcHBpbmdJbWcgZnJvbSAnLi9pbWFnZXMvbm9Ub3BwaW5ncy5wbmcnO1xuaW1wb3J0IG9saXZlc0ltZyBmcm9tICcuL2ltYWdlcy9vbGl2ZXMucG5nJztcbmltcG9ydCBwZXBwZXJvbmlJbWcgZnJvbSAnLi9pbWFnZXMvcGVwcGVyb25pLnBuZyc7XG5cbmNvbnN0IHBpenphTWVudSA9IFtdO1xuXG5jbGFzcyBQaXp6YSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgdG9wcGluZ3MsIHByaWNlLCBpbWFnZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRvcHBpbmdzID0gdG9wcGluZ3M7XG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuXG4gICAgICAgIFBpenphLmFkZFRvTWVudSh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgc2V0IG5hbWUoeCkge1xuICAgICAgICB0aGlzLl9uYW1lID0geDtcbiAgICB9XG5cbiAgICBnZXQgdG9wcGluZ3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b3BwaW5ncztcbiAgICB9XG4gICAgc2V0IHRvcHBpbmdzKHgpIHtcbiAgICAgICAgdGhpcy5fdG9wcGluZ3MgPSB4O1xuICAgIH1cblxuICAgIGdldCBwcmljZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaWNlO1xuICAgIH1cbiAgICBzZXQgcHJpY2UoeCkge1xuICAgICAgICB0aGlzLl9wcmljZSA9IHg7XG4gICAgfVxuXG4gICAgZ2V0IGltYWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW1hZ2U7XG4gICAgfVxuICAgIHNldCBpbWFnZSh4KSB7XG4gICAgICAgIHRoaXMuX2ltYWdlID0geDtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkVG9NZW51KHBpenphKSB7XG4gICAgICAgIHBpenphTWVudS5wdXNoKHBpenphKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UGl6emFzKCkge1xuICAgICAgICByZXR1cm4gcGl6emFNZW51O1xuICAgIH1cblxuICAgIGNyZWF0ZU1lbnVsaXN0aW5nKCkge1xuICAgICAgICBjb25zdCBwaXp6YUNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIC8vIExvYWQgaW4gdGhlIGltYWdlIG9mIHRoZSBwaXp6YVxuICAgICAgICBjb25zdCBwaXp6YUltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBwaXp6YUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBwaXp6YUltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHRoaXMuaW1hZ2UpO1xuICAgICAgICBwaXp6YUltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIHRoaXMubmFtZSk7XG4gICAgICAgIHBpenphSW1nRGl2LmFwcGVuZENoaWxkKHBpenphSW1nKTtcblxuICAgICAgICAvLyBBdHRhY2ggdGhlIG5hbWVcbiAgICAgICAgY29uc3QgcGl6emFOYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHBpenphTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHBpenphTmFtZS50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcbiAgICAgICAgcGl6emFOYW1lRGl2LmFwcGVuZENoaWxkKHBpenphTmFtZSk7XG5cbiAgICAgICAgLy8gQXR0YWNoIHRoZSB0b3BwaW5nc1xuICAgICAgICBjb25zdCBwaXp6YVRvcHBpbmdzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHBpenphVG9wcGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICBwaXp6YVRvcHBpbmdzLnRleHRDb250ZW50ID0gdGhpcy50b3BwaW5ncztcbiAgICAgICAgcGl6emFUb3BwaW5nc0Rpdi5hcHBlbmRDaGlsZChwaXp6YVRvcHBpbmdzKTtcblxuICAgICAgICAvLyBBdHRhY2ggdGhlIHByaWNlXG4gICAgICAgIGNvbnN0IHBpenphUHJpY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcGl6emFQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHBpenphUHJpY2UudGV4dENvbnRlbnQgPSB0aGlzLnByaWNlO1xuICAgICAgICBwaXp6YVByaWNlRGl2LmFwcGVuZENoaWxkKHBpenphUHJpY2UpO1xuXG4gICAgICAgIC8vIEF0dGFjaCBpbmZvcm1hdGlvbiB0byBjb250YWluZXIgZGl2XG4gICAgICAgIHBpenphQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHBpenphSW1nRGl2KTtcbiAgICAgICAgcGl6emFDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQocGl6emFOYW1lRGl2KTtcbiAgICAgICAgcGl6emFDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQocGl6emFUb3BwaW5nc0Rpdik7XG4gICAgICAgIHBpenphQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHBpenphUHJpY2VEaXYpO1xuXG4gICAgICAgIHJldHVybiBwaXp6YUNvbnRhaW5lckRpdjtcbiAgICB9XG59XG5cbi8vIGNyZWF0aW5nIHBpenphc1xuY29uc3QgY2hlZXNlUGl6emEgPSBuZXcgUGl6emEoXG4gICAgJ0NoZWVzZScsXG4gICAgJ1RvbWF0byBiYXNlLCBNb3p6YXJlbGxhJyxcbiAgICAxMCxcbiAgICBjaGVlc2VJbWdcbik7XG5jb25zdCBtdXNocm9vbVBpenphID0gbmV3IFBpenphKFxuICAgICdNdXNocm9vbScsXG4gICAgJ1RvbWF0byBiYXNlLCBNdXNocm9vbXMsIE1venphcmVsbGEnLFxuICAgIDExLFxuICAgIG11c2hyb29tSW1nXG4pO1xuY29uc3Qgb2xpdmVQaXp6YSA9IG5ldyBQaXp6YShcbiAgICAnT2xpdmUnLFxuICAgICdUb21hdG8gYmFzZSwgT2xpdmVzLCBNb3p6YXJlbGxhJyxcbiAgICAxMSxcbiAgICBvbGl2ZXNJbWdcbik7XG5jb25zdCBwZXBwZXJvbmlQaXp6YSA9IG5ldyBQaXp6YShcbiAgICAnUGVwcGVyb25pJyxcbiAgICAnVG9tYXRvIGJhc2UsIFBlcHBlcm9uaSwgTW96emFyZWxsYScsXG4gICAgMTIsXG4gICAgcGVwcGVyb25pSW1nXG4pO1xuY29uc3Qgbm9Ub3BwaW5nUGl6emEgPSBuZXcgUGl6emEoJ05vIFRvcHBpbmdzJywgJ1RvbWF0byBiYXNlJywgNiwgbm9Ub3BwaW5nSW1nKTtcblxuY29uc3QgbG9hZE1lbnUgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ21lbnUgbG9hZGluZycpO1xuXG4gICAgbGV0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIC8vIHJlc2V0IHBhZ2VcbiAgICBtYWluQ29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IG1lbnVDb25haW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgcGl6emFNZW51LmZvckVhY2goKHBpenphKSA9PiB7XG4gICAgICAgIG1lbnVDb25haW5lckRpdi5hcHBlbmRDaGlsZChwaXp6YS5jcmVhdGVNZW51bGlzdGluZygpKTtcbiAgICB9KTtcblxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1lbnVDb25haW5lckRpdik7XG5cbiAgICBjb25zb2xlLmxvZygnbWVudSBsb2FkZWR+Jyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBpbml0aWFsTG9hZCBmcm9tICcuL2luaXRpYWwtbG9hZCc7XG5pbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5cbi8vIEZpcnN0IHBhZ2UgbG9hZCwgbG9hZCBpbiBoZWFkZXIsIG5hdiBhbmQgZm9vdGVyIHRoZW4gbG9hZHMgdGhlIGhvbWUgcGFnZVxuaW5pdGlhbExvYWQoKTtcbmxvYWRIb21lKCk7XG5cbmNvbnN0IGxvYWRQYWdlID0gKGlkKSA9PiB7XG4gICAgaWYgKGlkID09PSAnSG9tZScpIHtcbiAgICAgICAgbG9hZEhvbWUoKTtcbiAgICB9IGVsc2UgaWYgKGlkID09PSAnTWVudScpIHtcbiAgICAgICAgbG9hZE1lbnUoKTtcbiAgICB9IGVsc2UgaWYgKGlkID09PSAnQ29udGFjdCcpIHtcbiAgICAgICAgbG9hZENvbnRhY3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRoYXRzIG5vdCBhIHBhZ2U/IGhvdydkIHlvdSBnZXQgaGVyZT9cIik7XG4gICAgfVxufTtcblxuLy8gU2VsZWN0b3JzIGZvciBidXR0b25zXG5jb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpXG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG4gICAgLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgbG9hZFBhZ2UoaXRlbS5pZCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==