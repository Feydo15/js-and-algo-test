// function 1

let Names = ["bob", "smith", "longman"];

const getNames = (Names) => {
  for (let i = 0; i < Names.length; i++) {

    if (Names[i] > i.length) {

      result = `${[i]}`;

      return result;
    }
  }
};
console.log("names", result);

//
// function 2

const sum = (a, b) => {

  return a + b;
};
sum();

console.log(sum(2, 3));


//  function 3

const getSum = (num) => {
  let numbers = [1, 2, 3, 4, 5];

  for (let i = num; i < numbers.length; i++) {
    if ((i = num)) {
      result(num + num);

      return result;
    }
  }
};

getSum();

console.log(results);

// function 4
let str = [{name:"moral" , surname: "smith"}]

function myReplace(str, before, after){
    str.toString()
    var match = str.match(new RegExp(before))
    if (match && after[0].match(/[A-Z]/)){
       after = after.replace(/[A-Z]/,after[0].toLowerCase())
    }else if(match && before[0].match(/[A-Z]/)){
       after = after.replace(/[a-z]/,after[0].toUpperCase())
    }
       return str.name.push("james")
    }
    console.log(myReplace([{name:"moral" , surname: "smith"}]));
    