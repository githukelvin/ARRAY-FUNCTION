const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

// //***MAP***
// //1. Get array of all names
// const names = characters.map( char=>{
// //     return char.name;
// // })

// // // console.log(names);
// // //2. Get array of all heights
// // const heights = characters.map( char=>{
// //     return char.height;
// // })

// // console.log(heights);(
// //3. Get array of all masses
// const masses = characters.map( char=>{
//     return char.mass;
// })
// // console.log(masses);
// //3. Get array of objects with just name and height properties
// const objects = characters.map( char=>({ 
//     name:char.name,
//     height:char.height
// }))
// console.log(objects);

// //4. Get array of all first names
// const firstNames = characters.map( char=>{
//     return char.name.split(" ")[0];
// })
// // console.log(firstNames);
// //5. Get array of all last names
// const lastNames = characters.map( char=>{})

//***REDUCE***
//1. Get total mass of all characters
// const oneblueeye = characters.reduce
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER*** 
// //***FILTER*** 
// //1. Get characters with mass greater than 100

// const G100chars = characters.filter((character) => {
// return character.mass > 100
// });

// console.log(G100chars)

// //2. Get characters with height less than 200
// const G200chars = characters.filter((character) => {
// return character.height < 200
// });
// console.log(G200chars)
// //3. Get characters with eye color "blue"
// const Gblueeyes = characters.filter((char)=>{ return char.eye_color == "blue"})
// console.log(Gblueeyes)
// //3. Get all male characters
// const  Gmalechars = characters.filter((character) => {
//     return character.gender === "male"
// });
// console.log(Gmalechars)
// //4. Get all female characters
// const  Gfemalechars = characters.filter((character) => {
//    return character.gender === "female"
// });
// console.log(Gfemalechars)

//***REDUCE***
// //1. Get total mass of all characters
// const totalMass = characters.reduce((acc,cur)=>{
//     return acc + cur.mass
// },0)
// console.log(totalMass)
// //2. Get total height of all characters
// const totalHeight = characters.reduce((acc,cur)=>{
//     return acc + cur.height
// },0)
// console.log(totalHeight)
// //3. Get total number of characters by eye color
// const totalEyeColor = characters.reduce((acc,cur)=>{
//     if (acc[cur.eye_color]) {
//         acc[cur.eye_color]++ 
//     }
//      else{
//          acc[cur.eye_color]=1
//         };
//       return acc;
// },{})
// console.log(totalEyeColor)
// //4. Get total number of characters in all the character names

// const totalCount = characters.reduce((acc,cur)=>{
//     return acc + cur.name.length
// },0); //
// console.log(totalCount)
// //***SORT***
// //1. Sort by mass
// const sortMass = characters.sort((a, b) => {
//     return a.mass - b.mass;
// });
// console.log(sortMass);
// //2. Sort by height
// const sortHeight = characters.sort((a, b) => {
//     return  b.height -a.height ;
// });
// console.log(sortHeight);
// //3. Sort by name
// //3. Sort by name
// const sortName = characters.sort((a, b) => {
//     return a.name.localeCompare(b.name);
// });
// console.log(sortName);
// //4. Sort by eye color
// const sortEyeColor = characters.sort((a, b) => {
//     return a.eye_color.localeCompare(b.eye_color);
// });
// console.log(sortEyeColor);
// //4. Sort by gender
// const sortGender = characters.sort((a, b) => {
//     return a.gender.localeCompare(b.gender);
// });
// console.log(sortGender);

//***EVERY***
// 1. Does every character have blue eyes?
const hasBlueEye = characters.every(character=>{
    return character.eye_color == "blue";
})
console.log(hasBlueEye)
// 2. Does every character have mass more than 40?
const hasMassMoreThan40 = characters.every(character=>{
    return character.mass > 40;
})
console.log(hasMassMoreThan40)
// 3. Does every character have height less than 150?
const hasHeightLessThan150 = characters.every(character=>{
    return character.height < 150;
})
console.log(hasHeightLessThan150)
// 4. Does every character have name longer than 3?
const hasNameLongerThan3 = characters.every(character=>{
    return character.name.length > 3;
})
console.log(hasNameLongerThan3)
// 5. Does every character have name shorter than 3?
const hasNameShorterThan3 = characters.every(character=>{
    return character.name.length < 3;
})
console.log(hasNameShorterThan3)
// //6. Does every character have gender "male"?
// const hasMale = characters.every(character=>{
//     return character.gender === "male";
// })
// console.log(hasMale)
// 7. Does every character have gender "female"?
// const hasFemale = characters.every(character=>{
//     return character.gender === "female";}
// )
// console.log(hasFemale)
// 3. Is every character shorter than 200?
// const hasNameShorterThan200 = characters.every(character=>{
//     return character.height < 200;
// })
// console.log(hasNameShorterThan200)
// 4. Is every character male?
// const isMale = characters.every(character=>{
//     return character.gender === "male";
// })
// console.log(isMale)
// 7. Is every character female?
// const isFemale = characters.every(character=>{character.gender === "female"})
// console.log(isFemale)

//***FILTER

// ***SOME***
//1. Is there at least one male character?
const onemaleCharacter = characters.some((char)=>{
   return  char.gender === "male"
})
console.log(onemaleCharacter)
//2. Is there at least one character with blue eyes?
const oneblueeye = characters.some((char)=>{
    return char.eye_color === "blue"
})
console.log(oneblueeye)
//3. Is there at least one character taller than 210?
const tallerthan210 = characters.some((char)=>{
    return char.height > 210
})
console.log(tallerthan210)
//4. Is there at least one character that has mass less than 50?
const masslessthan50 = characters.some((char)=>{
    return char.mass < 50
})
console.log(masslessthan50)

