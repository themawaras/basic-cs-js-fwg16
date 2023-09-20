const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

function lower(input) {
  let print = input.toLowerCase();
  return print;
}

function searchName(keyword, total, callback) {
  if (typeof callback !== "function") return "Wrong callback";
  if (typeof total !== "number" || total <= 1) return "Input must be a number or more than 1";
  if (typeof keyword !== "string") return "Keyword must be a string";

  let result = [];
  for (let i = 0; i < name.length; i++) {
    if (callback(name[i]).includes(keyword.toLowerCase())) {
      result.push(name[i]);
      //   outputArr[i] = callback(name[i]);
    }
    while (result.length == total) {
      return result;
    }
  }

  if (result.length == 0) {
    return "No results found";
  }
  return result;
}

console.log(searchName("An", 3, lower));

// function cb(input) {
//   console.log(input);
// }
// function searchName(keyword, total, callback) {
//   if (typeof callback !== "function") return "Wrong callback";
//   if (typeof total !== "number" || total <= 1) return "Input number or number must be greater than 1";
//   if (typeof keyword !== "string") return "Keyword must be a string";

//   let copyName = [...name];
//   const result = [];
//   const search = copyName.filter((el) => el, keyword);
//   callback(search);

//   return search;
// }

// const test = searchName("an", 2, cb);
// console.log(test);

// console.log(name);
// searchName();
