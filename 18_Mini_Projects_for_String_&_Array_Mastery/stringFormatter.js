const paragraphString = " hEllo WORld Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore error dolorum porro similique veniam vel, in repellendus iste sapiente dolor facere, rerum vitae praesentium ex cupiditate at, sed enim vero.";

const stringFormatter = (str) => {
    const splittedStr = str.trim().split(" ");

    const format = [];

    splittedStr.map(word => {
        const firstPart = word.slice(0,1).toUpperCase();
        const otherPart = word.slice(1).toLowerCase();
        format.push(firstPart.concat(otherPart));
    })

    const formattedString = format.join(" ");
    return formattedString;
}



console.log("formattedString ::>", stringFormatter(paragraphString));
