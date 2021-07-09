/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadContact = () => {
    console.log('contact loaded~');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:20)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> import TestImg from `./images/cheese.png`;\n| \n| const pizzaMenu = [];");

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbC1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKM0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzlCeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hGM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ1g7QUFDQTtBQUNNOztBQUVwQztBQUNBLHNEQUFXO0FBQ1gsOENBQVE7O0FBRVI7QUFDQTtBQUNBLFFBQVEsOENBQVE7QUFDaEIsS0FBSztBQUNMLFFBQVEsOENBQVE7QUFDaEIsS0FBSztBQUNMLFFBQVEsaURBQVc7QUFDbkIsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9hZENvbnRhY3QgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnY29udGFjdCBsb2FkZWR+Jyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDtcclxuIiwiY29uc3QgbG9hZEhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnaG9tZSBsb2FkaW5nficpO1xyXG5cclxuICAgIGxldCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG4gICAgLy8gcmVzZXQgcGFnZVxyXG4gICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgY29uc3QgaG9tZUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gTG9hZCBpbiBob21lIHBhZ2UgY29udGVudFxyXG4gICAgICAgIG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgICAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPVxyXG4gICAgICAgICAgICBcIkNvdWxkIHRoaXMgYmUgdGhlIGJlc3QgcGl6emEgaW4gdGhlIHdvcmxkPyBOby4gSXMgdGhpcyB0aGUgYmVzdCBwaXp6YSB3aXRoaW4gMTAgbWludXRlcyBvZiB5b3VyIGhvdXNlPyBQb3NzaWJseSwgdGhlcmUncyBvbmx5IG9uZSB3YXkgdG8gZmluZCBvdXQhXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IHdpZGdldERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHdpZGdldFNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cclxuICAgICAgICB3aWRnZXRTY3JpcHQuc3JjID1cclxuICAgICAgICAgICAgJy8vd3d3Lm9wZW50YWJsZS5jb20vd2lkZ2V0L3Jlc2VydmF0aW9uL2xvYWRlcj9yaWQ9OTk5OTkmdHlwZT1zdGFuZGFyZCZ0aGVtZT1zdGFuZGFyZCZpZnJhbWU9dHJ1ZSZkb21haW49Y29tJmxhbmc9ZW4tVVMmbmV3dGFiPWZhbHNlJm90X3NvdXJjZT1SZXN0YXVyYW50JTIwd2Vic2l0ZSc7XHJcblxyXG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHBhcmEpO1xyXG4gICAgICAgIHdpZGdldERpdi5hcHBlbmRDaGlsZCh3aWRnZXRTY3JpcHQpO1xyXG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHdpZGdldERpdik7XHJcbiAgICB9O1xyXG5cclxuICAgIGhvbWVDb250ZW50KCk7XHJcbiAgICBjb25zb2xlLmxvZygnaG9tZSBsb2FkZWR+Jyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTtcclxuIiwiY29uc3Qgd3JpdGVFbGVtZW50cyA9ICgoKSA9PiB7XHJcbiAgICAvLyBDcmVhdGVzIHRoZSBtYWluIGVsZW1lbnQgd2hpY2ggcGFnZSBjb250ZWN0IGNhbiBiZSBhZGRlZCB0b1xyXG4gICAgY29uc3Qgd3JpdGVNYWluID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgbWFpbi5pZCA9ICdjb250ZW50JztcclxuXHJcbiAgICAgICAgcmV0dXJuIG1haW47XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENyZWF0ZXMgdGhlIGhlYWRlciB0ZXh0XHJcbiAgICBjb25zdCB3cml0ZUhlYWRlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgICAgICBoZWFkZXIuaWQgPSAnaGVhZGVyJztcclxuICAgICAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIkpvc2gncyBQaXp6YXNcIjtcclxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xyXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZCh3cml0ZU5hdkJhcigpKTtcclxuICAgICAgICByZXR1cm4gaGVhZGVyO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBDcmVhdHMgdGhlIGJ1dHRvbnMgd2hpY2ggYXJlIGxhdGVyIGFkZGVkIHRvIHRoZSBuYXYgYmFyXHJcbiAgICBjb25zdCB3cml0ZUJ1dHRvbiA9IChidXR0b25UaXRsZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5pZCA9IGJ1dHRvblRpdGxlO1xyXG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGJ1dHRvblRpdGxlO1xyXG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcclxuICAgIH07XHJcblxyXG4gICAgLy8gQ3JlYXRlcyB0aGUgbmF2aWdhdGlvbiBiYXIgYW5kIGFkZHMgYnV0dG9ucyB0byBpdFxyXG4gICAgY29uc3Qgd3JpdGVOYXZCYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhvbWVCdXR0b24gPSB3cml0ZUJ1dHRvbignSG9tZScpO1xyXG4gICAgICAgIGNvbnN0IG1lbnVCdXR0b24gPSB3cml0ZUJ1dHRvbignTWVudScpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSB3cml0ZUJ1dHRvbignQ29udGFjdCcpO1xyXG5cclxuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XHJcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xyXG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5hdkJhcjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgd3JpdGVGb290ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hZGVieSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBtYWRlYnkudGV4dENvbnRlbnQgPSAnSm9zaCc7XHJcblxyXG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChtYWRlYnkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZm9vdGVyO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4geyB3cml0ZU1haW4sIHdyaXRlSGVhZGVyLCB3cml0ZUZvb3RlciB9O1xyXG59KSgpO1xyXG5cclxuLy8gSW5pdGlhbCBsb2FkIG9mIHRoZSBwYWdlLCBsb2FkcyBpbiB0aGUgaGVhZGVyLCBmb290ZXIgYW5kIG1haW5cclxuLy8gZWxlbWVudHMuXHJcbmNvbnN0IGluaXRpYWxMb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gd3JpdGVFbGVtZW50cy53cml0ZUhlYWRlcigpO1xyXG4gICAgY29uc3QgbWFpbiA9IHdyaXRlRWxlbWVudHMud3JpdGVNYWluKCk7XHJcbiAgICBjb25zdCBmb290ZXIgPSB3cml0ZUVsZW1lbnRzLndyaXRlRm9vdGVyKCk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuXHJcbiAgICAvLyBtYWluLmFwcGVuZENoaWxkKGxvYWRIb21lKCkpO1xyXG5cclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsTG9hZDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhbExvYWQgZnJvbSAnLi9pbml0aWFsLWxvYWQnO1xyXG5pbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xyXG5cclxuLy8gRmlyc3QgcGFnZSBsb2FkLCBsb2FkIGluIGhlYWRlciwgbmF2IGFuZCBmb290ZXIgdGhlbiBsb2FkcyB0aGUgaG9tZSBwYWdlXHJcbmluaXRpYWxMb2FkKCk7XHJcbmxvYWRIb21lKCk7XHJcblxyXG5jb25zdCBsb2FkUGFnZSA9IChpZCkgPT4ge1xyXG4gICAgaWYgKGlkID09PSAnSG9tZScpIHtcclxuICAgICAgICBsb2FkSG9tZSgpO1xyXG4gICAgfSBlbHNlIGlmIChpZCA9PT0gJ01lbnUnKSB7XHJcbiAgICAgICAgbG9hZE1lbnUoKTtcclxuICAgIH0gZWxzZSBpZiAoaWQgPT09ICdDb250YWN0Jykge1xyXG4gICAgICAgIGxvYWRDb250YWN0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhhdHMgbm90IGEgcGFnZT8gaG93J2QgeW91IGdldCBoZXJlP1wiKTtcclxuICAgIH1cclxufTtcclxuXHJcbi8vIFNlbGVjdG9ycyBmb3IgYnV0dG9uc1xyXG5jb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnRcclxuICAgIC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJylcclxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVxyXG4gICAgLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxvYWRQYWdlKGl0ZW0uaWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=