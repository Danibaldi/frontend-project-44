import readlineSync from 'readline-sync';

function hello() {
    console.log("Welcome to the Brain Games!")
    const name = readlineSync.question("May I have your name?: ");
    console.log(`Hello, ${name}!`);
}
export default hello;
//console.log("May I have your name?")
//const name = readlineSync.question('Your answer: ');
//console.log("Hello," (name))