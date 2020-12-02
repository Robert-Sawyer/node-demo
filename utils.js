const greetings = () => {
    console.log('hello node');
}

const adding = (a, b) => {
    console.log(a + b);
}

console.log("the file is loaded");

module.exports = {
    greetings,
    adding
}; //eksportuję funkcję greetings i add i impotuję ją w app.js ale tam nazwa moze być inna