/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/cheese.png":
/*!*******************************!*\
  !*** ./src/images/cheese.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/ff8ea13327a6c494aba951d3b99c432c.png");

/***/ }),

/***/ "./src/images/mushroom.png":
/*!*********************************!*\
  !*** ./src/images/mushroom.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/c7814900d45d1ee1c5ef8b28ad921952.png");

/***/ }),

/***/ "./src/images/noToppings.png":
/*!***********************************!*\
  !*** ./src/images/noToppings.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/fc216f075b3c40292f74646e18cb329e.png");

/***/ }),

/***/ "./src/images/olives.png":
/*!*******************************!*\
  !*** ./src/images/olives.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/c2275a09723619c175386773a3262ef3.png");

/***/ }),

/***/ "./src/images/pepperoni.png":
/*!**********************************!*\
  !*** ./src/images/pepperoni.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/9617561a98311ef20248f2753609ff6b.png");

/***/ }),

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
    console.log('home loading~');

    let mainContent = document.getElementById('content');

    // reset page
    mainContent.innerHTML = '';

    const homeContent = () => {
        // Load in home page content
        mainContent = document.getElementById('content');
        const para = document.createElement('p');
        para.textContent =
            "Could this be the best pizza in the world? No. Is this the best pizza within 10 minutes of your house? Possibly, there's only one way to find out!";

        const widgetDiv = document.createElement('div');
        const widgetScript = document.createElement('script');

        widgetScript.src =
            '//www.opentable.com/widget/reservation/loader?rid=99999&type=standard&theme=standard&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website';

        mainContent.appendChild(para);
        widgetDiv.appendChild(widgetScript);
        mainContent.appendChild(widgetDiv);
    };

    homeContent();
    console.log('home loaded~');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


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
const writeElements = (() => {
    // Creates the main element which page contect can be added to
    const writeMain = () => {
        const main = document.createElement('main');
        main.id = 'content';

        return main;
    };

    // Creates the header text
    const writeHeader = () => {
        const header = document.createElement('header');
        header.id = 'header';
        const headerTitle = document.createElement('h1');
        headerTitle.textContent = "Josh's Pizzas";
        header.appendChild(headerTitle);
        header.appendChild(writeNavBar());
        return header;
    };

    // Creats the buttons which are later added to the nav bar
    const writeButton = (buttonTitle) => {
        const button = document.createElement('button');
        button.id = buttonTitle;
        const span = document.createElement('span');
        span.textContent = buttonTitle;
        button.appendChild(span);

        return button;
    };

    // Creates the navigation bar and adds buttons to it
    const writeNavBar = () => {
        const navBar = document.createElement('nav');

        const homeButton = writeButton('Home');
        const menuButton = writeButton('Menu');
        const contactButton = writeButton('Contact');

        navBar.appendChild(homeButton);
        navBar.appendChild(menuButton);
        navBar.appendChild(contactButton);

        return navBar;
    };

    const writeFooter = () => {
        const footer = document.createElement('footer');

        const madeby = document.createElement('p');
        madeby.textContent = 'Josh';

        footer.appendChild(madeby);

        return footer;
    };

    return { writeMain, writeHeader, writeFooter };
})();

// Initial load of the page, loads in the header, footer and main
// elements.
const initialLoad = () => {
    const body = document.querySelector('body');

    const content = document.createElement('div');

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
    _images_cheese_png__WEBPACK_IMPORTED_MODULE_0__.default
);
const mushroomPizza = new Pizza(
    'Mushroom',
    'Tomato base, Mushrooms, Mozzarella',
    11,
    _images_mushroom_png__WEBPACK_IMPORTED_MODULE_1__.default
);
const olivePizza = new Pizza(
    'Olive',
    'Tomato base, Olives, Mozzarella',
    11,
    _images_olives_png__WEBPACK_IMPORTED_MODULE_3__.default
);
const pepperoniPizza = new Pizza(
    'Pepperoni',
    'Tomato base, Pepperoni, Mozzarella',
    12,
    _images_pepperoni_png__WEBPACK_IMPORTED_MODULE_4__.default
);
const noToppingPizza = new Pizza('No Toppings', 'Tomato base', 6, _images_noToppings_png__WEBPACK_IMPORTED_MODULE_2__.default);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1hZ2VzL2NoZWVzZS5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltYWdlcy9tdXNocm9vbS5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltYWdlcy9ub1RvcHBpbmdzLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1hZ2VzL29saXZlcy5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltYWdlcy9wZXBwZXJvbmkucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLHFCQUF1QixnREFBZ0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNBdEYsaUVBQWUscUJBQXVCLGdEQUFnRCxFOzs7Ozs7Ozs7Ozs7OztBQ0F0RixpRUFBZSxxQkFBdUIsZ0RBQWdELEU7Ozs7Ozs7Ozs7Ozs7O0FDQXRGLGlFQUFlLHFCQUF1QixnREFBZ0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNBdEYsaUVBQWUscUJBQXVCLGdEQUFnRCxFOzs7Ozs7Ozs7Ozs7OztBQ0F0RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCM0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJ4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZpQjtBQUNJO0FBQ0c7QUFDUDtBQUNNOztBQUVsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBVztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQVk7QUFDaEI7QUFDQSxrRUFBa0UsMkRBQVk7O0FBRTlFO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7OztVQzNJeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7OztBQ2Z5QztBQUNYO0FBQ0E7QUFDTTs7QUFFcEM7QUFDQSxzREFBVztBQUNYLDhDQUFROztBQUVSO0FBQ0E7QUFDQSxRQUFRLDhDQUFRO0FBQ2hCLEtBQUs7QUFDTCxRQUFRLDhDQUFRO0FBQ2hCLEtBQUs7QUFDTCxRQUFRLGlEQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvZmY4ZWExMzMyN2E2YzQ5NGFiYTk1MWQzYjk5YzQzMmMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9jNzgxNDkwMGQ0NWQxZWUxYzVlZjhiMjhhZDkyMTk1Mi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2ZjMjE2ZjA3NWIzYzQwMjkyZjc0NjQ2ZTE4Y2IzMjllLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvYzIyNzVhMDk3MjM2MTljMTc1Mzg2NzczYTMyNjJlZjMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy85NjE3NTYxYTk4MzExZWYyMDI0OGYyNzUzNjA5ZmY2Yi5wbmdcIjsiLCJjb25zdCBsb2FkQ29udGFjdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdjb250YWN0IGxvYWRpbmcnKTtcclxuICAgIGxldCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG4gICAgLy8gcmVzZXQgcGFnZVxyXG4gICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdj5XZSdyZSBzbyBjbG9zZSEgQ29tZSBhbmQgc2F5IGhlbGxvLjwvZGl2PlxyXG4gICAgPGlmcmFtZVxyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcHM/cT1ob21lJnQ9Jno9MTkmaWU9VVRGOCZpd2xvYz0mb3V0cHV0PWVtYmVkXCJcclxuICAgICAgICB3aWR0aD1cIjYwMFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiNDUwXCJcclxuICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxyXG4gICAgICAgIHN0eWxlPVwiYm9yZGVyOiAwXCJcclxuICAgICAgICBhbGxvd2Z1bGxzY3JlZW49XCJcIlxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwiZmFsc2VcIlxyXG4gICAgICAgIHRhYmluZGV4PVwiMFwiXHJcbiAgICA+PC9pZnJhbWU+YDtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnY29udGFjdCBsb2FkZWR+Jyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDtcclxuIiwiY29uc3QgbG9hZEhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnaG9tZSBsb2FkaW5nficpO1xyXG5cclxuICAgIGxldCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG4gICAgLy8gcmVzZXQgcGFnZVxyXG4gICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgY29uc3QgaG9tZUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gTG9hZCBpbiBob21lIHBhZ2UgY29udGVudFxyXG4gICAgICAgIG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgICAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPVxyXG4gICAgICAgICAgICBcIkNvdWxkIHRoaXMgYmUgdGhlIGJlc3QgcGl6emEgaW4gdGhlIHdvcmxkPyBOby4gSXMgdGhpcyB0aGUgYmVzdCBwaXp6YSB3aXRoaW4gMTAgbWludXRlcyBvZiB5b3VyIGhvdXNlPyBQb3NzaWJseSwgdGhlcmUncyBvbmx5IG9uZSB3YXkgdG8gZmluZCBvdXQhXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IHdpZGdldERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHdpZGdldFNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cclxuICAgICAgICB3aWRnZXRTY3JpcHQuc3JjID1cclxuICAgICAgICAgICAgJy8vd3d3Lm9wZW50YWJsZS5jb20vd2lkZ2V0L3Jlc2VydmF0aW9uL2xvYWRlcj9yaWQ9OTk5OTkmdHlwZT1zdGFuZGFyZCZ0aGVtZT1zdGFuZGFyZCZpZnJhbWU9dHJ1ZSZkb21haW49Y29tJmxhbmc9ZW4tVVMmbmV3dGFiPWZhbHNlJm90X3NvdXJjZT1SZXN0YXVyYW50JTIwd2Vic2l0ZSc7XHJcblxyXG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHBhcmEpO1xyXG4gICAgICAgIHdpZGdldERpdi5hcHBlbmRDaGlsZCh3aWRnZXRTY3JpcHQpO1xyXG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHdpZGdldERpdik7XHJcbiAgICB9O1xyXG5cclxuICAgIGhvbWVDb250ZW50KCk7XHJcbiAgICBjb25zb2xlLmxvZygnaG9tZSBsb2FkZWR+Jyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTtcclxuIiwiY29uc3Qgd3JpdGVFbGVtZW50cyA9ICgoKSA9PiB7XHJcbiAgICAvLyBDcmVhdGVzIHRoZSBtYWluIGVsZW1lbnQgd2hpY2ggcGFnZSBjb250ZWN0IGNhbiBiZSBhZGRlZCB0b1xyXG4gICAgY29uc3Qgd3JpdGVNYWluID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgbWFpbi5pZCA9ICdjb250ZW50JztcclxuXHJcbiAgICAgICAgcmV0dXJuIG1haW47XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENyZWF0ZXMgdGhlIGhlYWRlciB0ZXh0XHJcbiAgICBjb25zdCB3cml0ZUhlYWRlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgICAgICBoZWFkZXIuaWQgPSAnaGVhZGVyJztcclxuICAgICAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIkpvc2gncyBQaXp6YXNcIjtcclxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xyXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZCh3cml0ZU5hdkJhcigpKTtcclxuICAgICAgICByZXR1cm4gaGVhZGVyO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBDcmVhdHMgdGhlIGJ1dHRvbnMgd2hpY2ggYXJlIGxhdGVyIGFkZGVkIHRvIHRoZSBuYXYgYmFyXHJcbiAgICBjb25zdCB3cml0ZUJ1dHRvbiA9IChidXR0b25UaXRsZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5pZCA9IGJ1dHRvblRpdGxlO1xyXG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGJ1dHRvblRpdGxlO1xyXG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcclxuICAgIH07XHJcblxyXG4gICAgLy8gQ3JlYXRlcyB0aGUgbmF2aWdhdGlvbiBiYXIgYW5kIGFkZHMgYnV0dG9ucyB0byBpdFxyXG4gICAgY29uc3Qgd3JpdGVOYXZCYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhvbWVCdXR0b24gPSB3cml0ZUJ1dHRvbignSG9tZScpO1xyXG4gICAgICAgIGNvbnN0IG1lbnVCdXR0b24gPSB3cml0ZUJ1dHRvbignTWVudScpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSB3cml0ZUJ1dHRvbignQ29udGFjdCcpO1xyXG5cclxuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XHJcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xyXG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5hdkJhcjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgd3JpdGVGb290ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hZGVieSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBtYWRlYnkudGV4dENvbnRlbnQgPSAnSm9zaCc7XHJcblxyXG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChtYWRlYnkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZm9vdGVyO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4geyB3cml0ZU1haW4sIHdyaXRlSGVhZGVyLCB3cml0ZUZvb3RlciB9O1xyXG59KSgpO1xyXG5cclxuLy8gSW5pdGlhbCBsb2FkIG9mIHRoZSBwYWdlLCBsb2FkcyBpbiB0aGUgaGVhZGVyLCBmb290ZXIgYW5kIG1haW5cclxuLy8gZWxlbWVudHMuXHJcbmNvbnN0IGluaXRpYWxMb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gd3JpdGVFbGVtZW50cy53cml0ZUhlYWRlcigpO1xyXG4gICAgY29uc3QgbWFpbiA9IHdyaXRlRWxlbWVudHMud3JpdGVNYWluKCk7XHJcbiAgICBjb25zdCBmb290ZXIgPSB3cml0ZUVsZW1lbnRzLndyaXRlRm9vdGVyKCk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuXHJcbiAgICAvLyBtYWluLmFwcGVuZENoaWxkKGxvYWRIb21lKCkpO1xyXG5cclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsTG9hZDtcclxuIiwiaW1wb3J0IGNoZWVzZUltZyBmcm9tICcuL2ltYWdlcy9jaGVlc2UucG5nJztcclxuaW1wb3J0IG11c2hyb29tSW1nIGZyb20gJy4vaW1hZ2VzL211c2hyb29tLnBuZyc7XHJcbmltcG9ydCBub1RvcHBpbmdJbWcgZnJvbSAnLi9pbWFnZXMvbm9Ub3BwaW5ncy5wbmcnO1xyXG5pbXBvcnQgb2xpdmVzSW1nIGZyb20gJy4vaW1hZ2VzL29saXZlcy5wbmcnO1xyXG5pbXBvcnQgcGVwcGVyb25pSW1nIGZyb20gJy4vaW1hZ2VzL3BlcHBlcm9uaS5wbmcnO1xyXG5cclxuY29uc3QgcGl6emFNZW51ID0gW107XHJcblxyXG5jbGFzcyBQaXp6YSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0b3BwaW5ncywgcHJpY2UsIGltYWdlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnRvcHBpbmdzID0gdG9wcGluZ3M7XHJcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuXHJcbiAgICAgICAgUGl6emEuYWRkVG9NZW51KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBuYW1lKHgpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0geDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdG9wcGluZ3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvcHBpbmdzO1xyXG4gICAgfVxyXG4gICAgc2V0IHRvcHBpbmdzKHgpIHtcclxuICAgICAgICB0aGlzLl90b3BwaW5ncyA9IHg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByaWNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcmljZTtcclxuICAgIH1cclxuICAgIHNldCBwcmljZSh4KSB7XHJcbiAgICAgICAgdGhpcy5fcHJpY2UgPSB4O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpbWFnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW1hZ2U7XHJcbiAgICB9XHJcbiAgICBzZXQgaW1hZ2UoeCkge1xyXG4gICAgICAgIHRoaXMuX2ltYWdlID0geDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkVG9NZW51KHBpenphKSB7XHJcbiAgICAgICAgcGl6emFNZW51LnB1c2gocGl6emEpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRQaXp6YXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBpenphTWVudTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVNZW51bGlzdGluZygpIHtcclxuICAgICAgICBjb25zdCBwaXp6YUNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICAvLyBMb2FkIGluIHRoZSBpbWFnZSBvZiB0aGUgcGl6emFcclxuICAgICAgICBjb25zdCBwaXp6YUltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHBpenphSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgcGl6emFJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCB0aGlzLmltYWdlKTtcclxuICAgICAgICBwaXp6YUltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIHRoaXMubmFtZSk7XHJcbiAgICAgICAgcGl6emFJbWdEaXYuYXBwZW5kQ2hpbGQocGl6emFJbWcpO1xyXG5cclxuICAgICAgICAvLyBBdHRhY2ggdGhlIG5hbWVcclxuICAgICAgICBjb25zdCBwaXp6YU5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBwaXp6YU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIHBpenphTmFtZS50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcclxuICAgICAgICBwaXp6YU5hbWVEaXYuYXBwZW5kQ2hpbGQocGl6emFOYW1lKTtcclxuXHJcbiAgICAgICAgLy8gQXR0YWNoIHRoZSB0b3BwaW5nc1xyXG4gICAgICAgIGNvbnN0IHBpenphVG9wcGluZ3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBwaXp6YVRvcHBpbmdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgICAgICBwaXp6YVRvcHBpbmdzLnRleHRDb250ZW50ID0gdGhpcy50b3BwaW5ncztcclxuICAgICAgICBwaXp6YVRvcHBpbmdzRGl2LmFwcGVuZENoaWxkKHBpenphVG9wcGluZ3MpO1xyXG5cclxuICAgICAgICAvLyBBdHRhY2ggdGhlIHByaWNlXHJcbiAgICAgICAgY29uc3QgcGl6emFQcmljZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHBpenphUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIHBpenphUHJpY2UudGV4dENvbnRlbnQgPSB0aGlzLnByaWNlO1xyXG4gICAgICAgIHBpenphUHJpY2VEaXYuYXBwZW5kQ2hpbGQocGl6emFQcmljZSk7XHJcblxyXG4gICAgICAgIC8vIEF0dGFjaCBpbmZvcm1hdGlvbiB0byBjb250YWluZXIgZGl2XHJcbiAgICAgICAgcGl6emFDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQocGl6emFJbWdEaXYpO1xyXG4gICAgICAgIHBpenphQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHBpenphTmFtZURpdik7XHJcbiAgICAgICAgcGl6emFDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQocGl6emFUb3BwaW5nc0Rpdik7XHJcbiAgICAgICAgcGl6emFDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQocGl6emFQcmljZURpdik7XHJcblxyXG4gICAgICAgIHJldHVybiBwaXp6YUNvbnRhaW5lckRpdjtcclxuICAgIH1cclxufVxyXG5cclxuLy8gY3JlYXRpbmcgcGl6emFzXHJcbmNvbnN0IGNoZWVzZVBpenphID0gbmV3IFBpenphKFxyXG4gICAgJ0NoZWVzZScsXHJcbiAgICAnVG9tYXRvIGJhc2UsIE1venphcmVsbGEnLFxyXG4gICAgMTAsXHJcbiAgICBjaGVlc2VJbWdcclxuKTtcclxuY29uc3QgbXVzaHJvb21QaXp6YSA9IG5ldyBQaXp6YShcclxuICAgICdNdXNocm9vbScsXHJcbiAgICAnVG9tYXRvIGJhc2UsIE11c2hyb29tcywgTW96emFyZWxsYScsXHJcbiAgICAxMSxcclxuICAgIG11c2hyb29tSW1nXHJcbik7XHJcbmNvbnN0IG9saXZlUGl6emEgPSBuZXcgUGl6emEoXHJcbiAgICAnT2xpdmUnLFxyXG4gICAgJ1RvbWF0byBiYXNlLCBPbGl2ZXMsIE1venphcmVsbGEnLFxyXG4gICAgMTEsXHJcbiAgICBvbGl2ZXNJbWdcclxuKTtcclxuY29uc3QgcGVwcGVyb25pUGl6emEgPSBuZXcgUGl6emEoXHJcbiAgICAnUGVwcGVyb25pJyxcclxuICAgICdUb21hdG8gYmFzZSwgUGVwcGVyb25pLCBNb3p6YXJlbGxhJyxcclxuICAgIDEyLFxyXG4gICAgcGVwcGVyb25pSW1nXHJcbik7XHJcbmNvbnN0IG5vVG9wcGluZ1BpenphID0gbmV3IFBpenphKCdObyBUb3BwaW5ncycsICdUb21hdG8gYmFzZScsIDYsIG5vVG9wcGluZ0ltZyk7XHJcblxyXG5jb25zdCBsb2FkTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdtZW51IGxvYWRpbmcnKTtcclxuXHJcbiAgICBsZXQgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuICAgIC8vIHJlc2V0IHBhZ2VcclxuICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGNvbnN0IG1lbnVDb25haW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIHBpenphTWVudS5mb3JFYWNoKChwaXp6YSkgPT4ge1xyXG4gICAgICAgIG1lbnVDb25haW5lckRpdi5hcHBlbmRDaGlsZChwaXp6YS5jcmVhdGVNZW51bGlzdGluZygpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1lbnVDb25haW5lckRpdik7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ21lbnUgbG9hZGVkficpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBpbml0aWFsTG9hZCBmcm9tICcuL2luaXRpYWwtbG9hZCc7XHJcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUnO1xyXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tZW51JztcclxuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gJy4vY29udGFjdCc7XHJcblxyXG4vLyBGaXJzdCBwYWdlIGxvYWQsIGxvYWQgaW4gaGVhZGVyLCBuYXYgYW5kIGZvb3RlciB0aGVuIGxvYWRzIHRoZSBob21lIHBhZ2VcclxuaW5pdGlhbExvYWQoKTtcclxubG9hZEhvbWUoKTtcclxuXHJcbmNvbnN0IGxvYWRQYWdlID0gKGlkKSA9PiB7XHJcbiAgICBpZiAoaWQgPT09ICdIb21lJykge1xyXG4gICAgICAgIGxvYWRIb21lKCk7XHJcbiAgICB9IGVsc2UgaWYgKGlkID09PSAnTWVudScpIHtcclxuICAgICAgICBsb2FkTWVudSgpO1xyXG4gICAgfSBlbHNlIGlmIChpZCA9PT0gJ0NvbnRhY3QnKSB7XHJcbiAgICAgICAgbG9hZENvbnRhY3QoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGF0cyBub3QgYSBwYWdlPyBob3cnZCB5b3UgZ2V0IGhlcmU/XCIpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gU2VsZWN0b3JzIGZvciBidXR0b25zXHJcbmNvbnN0IG5hdkJ1dHRvbnMgPSBkb2N1bWVudFxyXG4gICAgLmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKVxyXG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXHJcbiAgICAuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbG9hZFBhZ2UoaXRlbS5pZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==