//✅ 1. Create a Student Object
const student = {
    name: "Kevin",
    age: 21,
    course: "JavaScript Mastery",
    isEnrolled: true
}

//✅ 2. Access properties
console.log(student.name);
console.log(student.age);

//✅ 3. Add new property
student.grade = "A+";

//✅ 4. Update a property
student.age = 22;

//✅ 5. Add a method
student.ageUpdater = (age) => student.age = age;
student.introduce = function() {
    return  `Hi, I'm ${this.name} and I'm learning ${this.course}`;
}
console.log(student.introduce())
//✅ 6. Nested Object
student.address = {
    city: "Hardoi",
    pincode: 241001
}
console.log(student);

// Now Challenge: Create a Product Inventory System 🛒
// 👇 Do This:
// Create an object product with:

// name, price, quantity, discount, category

// a method totalPrice() that returns price × quantity - discount

const product = {
    productName: "Shirt",
    price: 400,
    quantity: 2,
    discount: 20,
    category: "Fashion",
    totalPrice: function() {
        return (this.price - this.discount) * qu;
    }
}

console.log(product.productName);
console.log(product.price);
console.log(product.quantity);
console.log(product.discount);
console.log(product.category);
console.log(product.totalPrice());
