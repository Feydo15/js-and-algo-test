// function 1

let Names = ["bob", "smith", "longman"];

var longest = Names.reduce(
    function (a, b) {
        return a.length > b.length ? a : b;
    }
);
console.log("names", longest);

//
// function 2

const sumNum = (a, b) => {

  return a + b;
};
sumNum();

console.log(sum(2, 3));


//  function 3
const array = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);

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
    