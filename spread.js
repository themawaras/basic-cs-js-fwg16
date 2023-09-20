const data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "APT. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hidegard.org",
};

//
// copy object of data to dataCopy using spread operator
const dataCopy = { ...data };

dataCopy.name = "F Thema";
dataCopy.email = "ferdinandthema@gmail.com";
dataCopy.hobby = "berenang";

console.log(dataCopy);

//
// destructuring street & city from "data"
const street = dataCopy.address.street;
const city = dataCopy.address.city;

// print street & city
console.log(street);
console.log(city);
console.log(dataCopy.address.street, dataCopy.address.city);
