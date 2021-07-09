import cheeseImg from './images/cheese.png';
import mushroomImg from './images/mushroom.png';
import noToppingImg from './images/noToppings.png';
import olivesImg from './images/olives.png';
import pepperoniImg from './images/pepperoni.png';

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
    cheeseImg
);
const mushroomPizza = new Pizza(
    'Mushroom',
    'Tomato base, Mushrooms, Mozzarella',
    11,
    mushroomImg
);
const olivePizza = new Pizza(
    'Olive',
    'Tomato base, Olives, Mozzarella',
    11,
    olivesImg
);
const pepperoniPizza = new Pizza(
    'Pepperoni',
    'Tomato base, Pepperoni, Mozzarella',
    12,
    pepperoniImg
);
const noToppingPizza = new Pizza('No Toppings', 'Tomato base', 6, noToppingImg);

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

export default loadMenu;
