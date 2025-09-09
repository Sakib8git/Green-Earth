1. What is the difference between var, let, and const?
var: Old way to declare variables. It can be re-declared (function-scoped).

let: Modern way to declare variables. It can be updated, but can not re-declared in the same block.(block-scoped)

const: It cannot be updated changed or re-declared. (block-scoped)
<!--!-----------------------------------------------  -->
2. What is the difference between map(), forEach(), and filter()?

map():প্রতিটি element-এর উপর একটা কাজ চালিয়ে নতুন array return করে।

forEach(): প্রতিটি array element-এর উপর একটা কাজ চালায়, কিন্তু কিছু return করে না।

filter(): condition অনুযায়ী element গুলো বেছে নেয় এবং নতুন array return করে।

<!--!-----------------------------------------------  -->

3. What are arrow functions in ES6?
 অ্যারো ফাংশন (Arrow Function) হলো ES6-এর শর্টকাট ফাংশন ।

• Modern Way
• Function শব্দটা বাদ দিয়ে দিয়ে ফাংশন লেখা হয়।
• ()=>{} এভাবে লেখা হয় 
• ছোট ফাংশনের জন্য খুবই সুবিধাজনক।
• বাইরের স্কোপ থেকে নেয়, নিজে তৈরি করে না।

<!--!-----------------------------------------------  -->

4. How does destructuring assignment work in ES6?
  destructuring assignment হলো object বা array থেকে value আলাদা করে সহজে ভেরিয়েবল বানায়।
কোড অনেক পরিষ্কার ও ছোট ও সহজ থাকে।

const person = { name: "Hablu mia", age: 25 };
const { name, age } = person;

<!--!-----------------------------------------------  -->

5. Explain template literals in ES6. How are they different from string concatenation?
   ES6-এর template literals - নতুনভাবে string লেখার একটা  পদ্ধতি.।
• Backtick (`text`) দিয়ে লেখা হয়।
• ${} দিয়ে ভেতরে ভেরিয়েবল ববসাতে হয়।
• Multi-line string  লেখা যায়

const name = "Taklu";
const message = `Hello! ${name}.`;


String Concatenation কী?
• + / , চিহ্ন দিয়ে string আর ভেরিয়েবল জোড়া লাগানো হয়।

const name = "Montu Mia";
const message = "Hello, my name is " + name + ".";


<!--!-----------------------------------------------  -->



