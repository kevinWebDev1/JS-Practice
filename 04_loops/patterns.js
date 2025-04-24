// 1. Right Angled Triangle

// *
// * *
// * * *
// * * * *
// * * * * * output

for(let i = 1; i <= 5; i++) {
    let pattern = ""
    for(j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern)
    
}

// 2. Inverted Triangle

// * * * * *
// * * * *
// * * *
// * *
// *

for(i = 1; i <=5; i++) {
    let pattern = "";
    for(let j = 5; j >= i; j--) {
        pattern += "* "
    }
    console.log(pattern)
}

// 3. Pyramid (Centered Triangle)
//     *    
//    * *   
//   * * *  
//  * * * * 
// * * * * *

let pattern = ""; 
for(let i = 1; i <= 5; i++) {
    let space = "";
    for (let j = 5; j > i; j--) {
        space += " ";
    }
    pattern += "* "
     console.log(space + pattern)
}
