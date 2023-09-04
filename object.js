// Membuat sebuah object

const biodata = {
  name: "Aztie Permata", // string
  age: 61, // number
  hobies: ["membaca", "menonton film", "hiking"], // array
  isMarried: false, // bool
  schoolList: [
    // array of object
    {
      yearIn: 1982,
      yearOut: 1986,
      major: " Sarjana Ekonomi",
    },
    {
      yearIn: 1988,
      yearOut: 1990,
      major: "Master of Science of Policy Economics",
    },
  ],
  skills: [
    // array of object
    {
      skillName: "kerja tim",
      level: "expert",
    },
    {
      skillName: "etos kerja",
      level: "expert",
    },
  ],
  interestingInCode: false, // bool
};

console.log(biodata);
