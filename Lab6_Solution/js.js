function Calculate(type) {
  let a = document.getElementById("inputA").value;
  let b = document.getElementById("inputB").value;
  let result;
  let resultArray = [];


  if (a == "" || b == "") {
      console.log("Please input valid numbers");
      return;
  }

  a = parseInt(a);
  b = parseInt(b);

  switch (type) {
    case "add":
      result = a + b;
      break;

    case "subtract":
      result = a - b;
      break;

    case "multiply":
      result = a * b;
      break;

    case "divide":
      result = (a / b).toFixed(2);
      break;

    case "printArray":
      resultArray = [a + b, a - b, a * b, (a / b).toFixed(2)];
      document.getElementById("printArray").innerHTML = resultArray;
      console.log(resultArray);
    }
    
    if (type != "printArray") {
        document.getElementById("result").innerHTML = result;
        console.log(result);
  }
}

let first_array = ["John", "Jason", "Kevin"];
first_array.unshift("jad");
console.log("First array ==>", first_array)

let second_aray = ["Manel", "Nahla", "Sabine", "Mirna"];
console.log("Second array ==>", second_aray);

let third_array = first_array.concat(second_aray);
console.log("Third Array ==>", third_array);

console.log("Index of John ==>", third_array.indexOf("John"));
console.log("Length of array ==>", third_array.length);
console.log("Removing last element ==>", third_array.pop());
console.log("Removing first element ==>", third_array.shift());
console.log("Adding an element ==>", third_array.push("Elias"));
console.log("Reversing array order ==>", third_array.reverse());

let fourth_array = third_array.slice(0, 3);
console.log("Fourth array ==>", fourth_array);

console.log("Includes Sabine? ==>", fourth_array.includes("Sabine"));

third_array.forEach(element => {
    console.log("Element in third array ==>", element);
})

// function Add() {
//     let a = document.getElementById("inputA").value;
//     let b = document.getElementById("inputB").value;
//     let result = parseInt(a) + parseInt(b);
//     document.getElementById("result").innerHTML = result;
// }

// function Subtract() {
//     let a = document.getElementById("inputA").value;
//     let b = document.getElementById("inputB").value;
//     let result = parseInt(a) - parseInt(b);
//     document.getElementById("result").innerHTML = result;
// }

// function Divide() {
//     let a = document.getElementById("inputA").value;
//     let b = document.getElementById("inputB").value;
//     let result = parseInt(a) / parseInt(b);
//     document.getElementById("result").innerHTML = result;
// }

// function Multiply() {
//     let a = document.getElementById("inputA").value;
//     let b = document.getElementById("inputB").value;
//     let result = parseInt(a) * parseInt(b);
//     document.getElementById("result").innerHTML = result;
// }
