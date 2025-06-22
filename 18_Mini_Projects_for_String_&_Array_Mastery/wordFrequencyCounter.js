//✅ 1. Take a Paragraph String
let paragraph = "The quick brown fox jumps over the lazy dog. The sun is shining. The birds are singing. The cat is sleeping. The dog is barking. The world is wonderful."

//✅ 2. Split it into words
const splitted = paragraph.toLowerCase().split(" ");
console.log(splitted);


//✅ 3. count how many times each word appears 
const count = {};

splitted.forEach(word => {
    count[word] = (count[word] || 0) + 1;
});
console.log("count ::>", count);
const myArray = [];

const sort = (obj) => {
    for (const key in obj) {
            myArray.push({[key] : obj[key]})
        }
    }
sort(count);

myArray.sort((a,b) => {
    const aVal = Object.values(a)[0];
    const bVal = Object.values(b)[0];
    return bVal - aVal;    
})
console.log("myArray ::>", myArray);








// console.log(sort(count));




//✅ 4. 

//✅ 5. o