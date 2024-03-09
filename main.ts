//2.	Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let myname:string="Eric";
let message:string="would you like to learn some Python today?";
console.log(`"Hello ${myname}, ${message}"`);


//3.	Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

//lowercase
let personName:string = "MUHAMMAD SAJID"
console.log(personName.toLowerCase());

//uppercase
let personName1:string = "muhammad sajid";
console.log(personName1.toUpperCase());

//titlecase
let personName2:string = "sajid";
console.log(personName2.charAt(0).toUpperCase() + personName2.slice(1));

//4.	Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”

//I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.	Martin Luther King

let famousPerson:string = "Martin Luther King";

console.log(`${famousPerson} once said, "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character."`);

//5.	Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

//I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.	Martin Luther King

let famousPerson1:string = "Martin Luther King";
let quote:string = "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.";

console.log(`${famousPerson1} once said, "${quote}"`);

//6.	Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let personName3:string = "\tMuhammad Sajid\t";
console.log(personName3);

let personName11:string = "\nMuhammad Sajid\n";
console.log(personName11);

let personName22:string = "\n\tMuhammad Sajid\t\n";
console.log(personName22);

let stipped= personName22.trim();
console.log(stipped);

//7.	Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results

let addition:number = 4 + 4;
console.log("addition",addition);

let subtraction:number = 16 - 8;
console.log("subtraction",subtraction);

let multiplication:number = 4 * 2;
console.log("multiplication",multiplication);

let division:number = 16 / 2;
console.log("division",division);

//8.	You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.

//addition
console.log(4+4);
//subtraction
console.log(12-4);
//multiplication
console.log(4*2);
//division
console.log(16/2);

//9.	Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let myFavouritenumber:number = 6;
let message1:string = "my favourite number is " + myFavouritenumber;
console.log(message1);

//10.	Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

//My name is Muhammad Sajid
//Current date is 9/3/2024
//simple print "Hello World"
console.log("Hello World");