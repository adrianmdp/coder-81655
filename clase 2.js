var name = "Alice";
var userExists;

if (name === "Alice") {
  greeting = "Hola, " + name + "!";
} else {
  greeting = "Hello, guest!";
}

var userExists2 = name === "Alice" ? "Hola, " + name + "!" : "Hello, guest!";

const product = {
  name: "Laptop",
  price: 1200,
  inStock: true,
  stock: 30,
};

const admins = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

const { price, stock } = product; // destructuración

const { name, ...rest } = product; // destructuración

const product2 = { ...product, name: "Iphone", stock: 15 };

const users = [...admins, { name: "Adrián", age: 42 }, { name: "Charlie", age: 35 }];

users.map((user, index) => {
  return { ...user, ["key" + index]: index + 1 };
});

const a = "Lorem Ipsum";

console.log(a); // Lorem Ipsum

/*
[
    { name: "Alice", age: 25, key0: 1 },
    { name: "Bob", age: 30, key1: 2 },
    { name: "Charlie", age: 35, key2: 3 }
]
*/

const element = {
  a: 10,
  b: 20,
};

var { a: val } = element;

console.log(val); // 10

const [x = 5, y = 7, z = 9] = [1, 2];

console.log(x); // 1
console.log(y); // 2
console.log(z); // 9
