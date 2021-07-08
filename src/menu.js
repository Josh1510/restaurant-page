class Pizza {
    constructor(name, toppings, price, image) {
        this.name = name;
        this.toppings = toppings;
        this.price = price;
    }

    get name() {
        return this.name;
    }

    get toppings() {
        return this.toppings;
    }

    get price() {
        return this.price;
    }

    get image() {
        return this.image;
    }
}

// const addPizza(name, toppings, price, image){
//     let [name] = new Pizza
// }

const cheesePizza = new Pizza(
    'Cheese',
    'Tomato base, Mozzarella',
    10,
    '\\PizzaImgs\\cheese.png'
);
const mushroomPizza = new Pizza(
    'Mushroom',
    'Tomato base, Mushrooms, Mozzarella',
    11,
    '\\PizzaImgs\\mushroom.png'
);
const olivePizza = new Pizza(
    'Olive',
    'Tomato base, Olives, Mozzarella',
    11,
    '\\PizzaImgs\\olives.png'
);
const pepperoniPizza = new Pizza(
    'Pepperoni',
    'Tomato base, Pepperoni, Mozzarella',
    12,
    '\\PizzaImgs\\pepperoni.png'
);
const noToppingPizza = new Pizza(
    'No Toppings',
    'Tomato base',
    6,
    '\\PizzaImgs\\noToppings.png'
);

const loadMenu = () => {
    console.log('menu loaded~');
};

export default loadMenu;
