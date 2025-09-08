1. What is the difference between var, let, and const?
var: Old way to declare variables. It’s function-scoped and can be re-declared.
let: Modern way. It’s block-scoped and can be updated, but not re-declared in the same block.
const: Also block-scoped, but cannot be updated or re-declared. Used for values that shouldn’t change.
<!--!-----------------------------------------------  -->
2. What is the difference between map(), forEach(), and filter()?

map():প্রতিটি element-এর উপর transformation চালায় এবং নতুন array return করে। যখন আপনি পুরনো array থেকে নতুন array তৈরি করতে চান।

forEach(): প্রতিটি array element-এর উপর একটা কাজ চালায়, কিন্তু কিছু return করে না।

filter(): condition অনুযায়ী element গুলো বেছে নেয় এবং নতুন array return করে। যখন আপনি কিছু element বাদ দিতে চান

<!--!-----------------------------------------------  -->

3. What are arrow functions in ES6?
   অ্যারো ফাংশন (Arrow Function) হলো ES6-এর শর্টকাট ফাংশন লেখার স্টাইল।

• Function শব্দটা বাদ দিয়ে দিয়ে ফাংশন লেখা হয়।
• ছোট ফাংশনের জন্য খুবই সুবিধাজনক।
• বাইরের স্কোপ থেকে নেয়, নিজে তৈরি করে না।

<!--!-----------------------------------------------  -->

4. How does destructuring assignment work in ES6?
   destructuring assignment হলো object বা array থেকে value আলাদা করে ভেরিয়েবল হিসেবে নেওয়ার জন্য।

const person = { name: "Hablu mia", age: 25 };
const { name, age } = person;

<!--!-----------------------------------------------  -->

5. Explain template literals in ES6. How are they different from string concatenation?
   ES6-এর template literals হলো নতুনভাবে string লেখার একটা সুবিধাজনক পদ্ধতি, যেখানে আপনি সহজে ভেরিয়েবল বসাতে পারেন ${} দিয়ে, আর multi-line string লিখতেও পারেন।

🧵 Template Literal কী?
• Backtick (` `) দিয়ে লেখা হয়।
• ${value} দিয়ে ভেতরে ভেরিয়েবল বসানো যায়।
• Multi-line string সহজে লেখা যায়

const name = "Nazmus";
const message = `Hello, my name is ${name}.`;
console.log(message); // Hello, my name is Nazmus.

String Concatenation কী?
• + / , চিহ্ন দিয়ে string আর ভেরিয়েবল জোড়া লাগানো হয়।

const name = "Nazmus";
const message = "Hello, my name is " + name + ".";
console.log(message); // Hello, my name is Nazmus.

<!--!-----------------------------------------------  -->
