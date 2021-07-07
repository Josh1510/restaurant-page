/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

    // return content;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-load */ "./src/initial-load.js");

// import loadHome from './home';
// import loadMenu from './menu';
// import loadContact from './contact';

(0,_initial_load__WEBPACK_IMPORTED_MODULE_0__.default)();

// function component() {
//     const element = document.createElement('div');
//     const btn = document.createElement('button');

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     btn.innerHTML = 'Click me and check the console!';
//     btn.onclick = printMe;

//     element.appendChild(btn);

//     return element;
// }

// document.body.appendChild(component());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbC1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7O1VDaEYzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ055QztBQUN6QztBQUNBO0FBQ0E7O0FBRUEsc0RBQVc7O0FBRVg7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdyaXRlRWxlbWVudHMgPSAoKCkgPT4ge1xyXG4gICAgLy8gQ3JlYXRlcyB0aGUgbWFpbiBlbGVtZW50IHdoaWNoIHBhZ2UgY29udGVjdCBjYW4gYmUgYWRkZWQgdG9cclxuICAgIGNvbnN0IHdyaXRlTWFpbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgICAgIG1haW4uaWQgPSAnY29udGVudCc7XHJcblxyXG4gICAgICAgIHJldHVybiBtYWluO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBDcmVhdGVzIHRoZSBoZWFkZXIgdGV4dFxyXG4gICAgY29uc3Qgd3JpdGVIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICAgICAgaGVhZGVyLmlkID0gJ2hlYWRlcic7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJKb3NoJ3MgUGl6emFzXCI7XHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcclxuXHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHdyaXRlTmF2QmFyKCkpO1xyXG4gICAgICAgIHJldHVybiBoZWFkZXI7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENyZWF0cyB0aGUgYnV0dG9ucyB3aGljaCBhcmUgbGF0ZXIgYWRkZWQgdG8gdGhlIG5hdiBiYXJcclxuICAgIGNvbnN0IHdyaXRlQnV0dG9uID0gKGJ1dHRvblRpdGxlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmlkID0gYnV0dG9uVGl0bGU7XHJcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gYnV0dG9uVGl0bGU7XHJcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICAgIHJldHVybiBidXR0b247XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENyZWF0ZXMgdGhlIG5hdmlnYXRpb24gYmFyIGFuZCBhZGRzIGJ1dHRvbnMgdG8gaXRcclxuICAgIGNvbnN0IHdyaXRlTmF2QmFyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG5cclxuICAgICAgICBjb25zdCBob21lQnV0dG9uID0gd3JpdGVCdXR0b24oJ0hvbWUnKTtcclxuICAgICAgICBjb25zdCBtZW51QnV0dG9uID0gd3JpdGVCdXR0b24oJ01lbnUnKTtcclxuICAgICAgICBjb25zdCBjb250YWN0QnV0dG9uID0gd3JpdGVCdXR0b24oJ0NvbnRhY3QnKTtcclxuXHJcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xyXG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcclxuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XHJcblxyXG4gICAgICAgIHJldHVybiBuYXZCYXI7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHdyaXRlRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG5cclxuICAgICAgICBjb25zdCBtYWRlYnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgbWFkZWJ5LnRleHRDb250ZW50ID0gJ0pvc2gnO1xyXG5cclxuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQobWFkZWJ5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZvb3RlcjtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHsgd3JpdGVNYWluLCB3cml0ZUhlYWRlciwgd3JpdGVGb290ZXIgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IGluaXRpYWxMb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gd3JpdGVFbGVtZW50cy53cml0ZUhlYWRlcigpO1xyXG4gICAgY29uc3QgbWFpbiA9IHdyaXRlRWxlbWVudHMud3JpdGVNYWluKCk7XHJcbiAgICBjb25zdCBmb290ZXIgPSB3cml0ZUVsZW1lbnRzLndyaXRlRm9vdGVyKCk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuXHJcbiAgICAvLyBtYWluLmFwcGVuZENoaWxkKGxvYWRIb21lKCkpO1xyXG5cclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcblxyXG4gICAgLy8gcmV0dXJuIGNvbnRlbnQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsTG9hZDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhbExvYWQgZnJvbSAnLi9pbml0aWFsLWxvYWQnO1xyXG4vLyBpbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lJztcclxuLy8gaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudSc7XHJcbi8vIGltcG9ydCBsb2FkQ29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xyXG5cclxuaW5pdGlhbExvYWQoKTtcclxuXHJcbi8vIGZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcclxuLy8gICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuLy8gICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xyXG5cclxuLy8gICAgIGJ0bi5pbm5lckhUTUwgPSAnQ2xpY2sgbWUgYW5kIGNoZWNrIHRoZSBjb25zb2xlISc7XHJcbi8vICAgICBidG4ub25jbGljayA9IHByaW50TWU7XHJcblxyXG4vLyAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChidG4pO1xyXG5cclxuLy8gICAgIHJldHVybiBlbGVtZW50O1xyXG4vLyB9XHJcblxyXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==