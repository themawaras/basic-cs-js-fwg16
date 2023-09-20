const biodata = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
  isMarried: false, // bool tipe data
  ping: () => {
    // arrow function
    return "pong";
    // jika tidak menggunakan "this", dapat menggunakan arrow function
    // jika menggunakan "this", tidak bisa menggunakan arrow function dan
    // disarankan menggunakan ekspresif function
  },
  getFullAddress: function () {
    // ekspresif function
    const { street, suite, city, zipcode } = this.address; // terdapat argumen "this"
    return `${suite}, st. ${street}, ${city}, ${zipcode}`;
  },
};

console.log(biodata.ping);
console.log(biodata.ping());
console.log(biodata.getFullAddress);
console.log(biodata.getFullAddress());
