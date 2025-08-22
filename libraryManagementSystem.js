const prompt = require("prompt-sync")();

let library = [
    { title: "JavaScript Basics", author: "John Doe", price: 500 },
    { title: "Learn CSS", author: "Jane Smith", price: 400 },
    { title: "Mastering HTML", author: "Chris Adams", price: 300 },
    { title: "React for Beginners", author: "Mike Lee", price: 800 }
];

function addBook(title, author, price){
    library.push({title: title.trim(), author: author.trim(), price: Number(price)});
    console.log(`${title.trim()} : added successfully!`);
}

function removeBookByIndex(idx){
    if(idx >= 0 && idx < library.length){
        let removed = library.splice(idx, 1);
        console.log(`Removed : "${removed[0].title}"`);
    } else {
        console.log("Invalid book number");
    }
}

function showBooks(){
    if(library.length === 0){
        console.log("Library is empty");
        return;
    }
    console.log(`===== Library Books =====\n`);
    library.forEach((book, index) => {
        console.log(`${index + 1}. ${book.title} by ${book.author} - Rs.${book.price}`);
    });
}

function getAllTitlesUppercase(){
    if(library.length === 0){
        console.log("Library is empty");
        return;
    }
    library.forEach((b) => {
        console.log(b.title.trim().toUpperCase());
    });
}

function filterBooksSimple(choice) {
    let filtered;
    if (choice === "1") {
        filtered = library.filter(b => b.price > 500);
        console.log("\n--- Expensive Books ---");
    } else if (choice === "2") {
        filtered = library.filter(b => b.price <= 500);
        console.log("\n--- Cheap Books ---");
    } else {
        console.log("Invalid choice!");
        return;
    }

    if (filtered.length === 0) {
        console.log("No books match");
    } else {
        filtered.forEach((book, i) => console.log(`${i + 1}. ${book.title} - Rs.${book.price}`));
    }
}

function searchBook(query){
    let q = query.trim().toLowerCase();
    let book = library.find(val => val.title.toLowerCase().trim() === q);
    if(book){
        console.log(`Found: ${book.title} by ${book.author} - Rs.${book.price}`);
    } else {
        console.log("Book Not Found!");
    }
}

function booksAverage(){
    if(library.length === 0){
        console.log("Empty Library");
        return;
    }
    let total = library.reduce((sum, book) => sum + book.price, 0);
    let average = (total / library.length).toFixed(2);
    console.log(`Average price: Rs.${average}`);
}

function highestLowest(){
    if(library.length === 0){
        console.log("Library is empty");
        return;
    }
    let highest = library[0];
    let lowest = library[0];

    for(const val of library){
        if(val.price > highest.price) highest = val;
        if(val.price < lowest.price) lowest = val;
    }
    console.log(`Highest Price: ${highest.title} - Rs.${highest.price}`);
    console.log(`Lowest Price: ${lowest.title} - Rs.${lowest.price}`);
}

function extraMethodsDemo() {
    const authors = library.map(b => b.author);
    const more = authors.concat(["Unknown"]);
    console.log("Authors:", authors);
    console.log("Authors (joined):", more.join(", "));
    console.log("Slice(0,3):", more.slice(0,3));
    console.log("Includes 'John Doe'?", more.includes("John Doe"));
    console.log("IndexOf 'Jane Smith':", more.indexOf("Jane Smith"));

    const sample = "   Learn JavaScript Fast   ";
    console.log('Original:', `"${sample}"`);
    console.log('Trimmed:', `"${sample.trim()}"`);
    console.log('Upper  :', sample.toUpperCase());
    console.log('Lower  :', sample.toLowerCase());
    console.log('Slice(0,10):', sample.slice(0,10));
    console.log("Includes 'JavaScript'?", sample.includes("JavaScript"));
}

// ===== MAIN MENU LOOP =====
let choice = "";

while(true){
    choice = prompt(`Choose an option:
1. View all books                
2. Add a book                    
3. Remove a book (by number)     
4. Search a book (by title)     
5. Filter books by price         
6. Average price of books        
7. Highest & lowest priced book  
8. Get ALL TITLES (UPPERCASE)    
9. Extra array & string demos    
0. Exit
`);

    if(choice=="1"){
        showBooks();
    }
    else if(choice==="2"){
        const title = prompt("Enter book title:").trim();
        const author = prompt("Enter author name:").trim();
        const priceS = prompt("Enter price (number):").trim();
        const price = Number(priceS);
        if(!title || !author || Number.isNaN(price) || price < 0){
            console.log("Invalid input! Try again.");
        } else {
            addBook(title, author, price);
        }
    }
    else if(choice==="3"){
        showBooks();
        const idxS = prompt(`Enter book number to remove (1-${library.length}):`).trim();
        const idx = Number(idxS) - 1;
        removeBookByIndex(idx);
    }
    else if(choice==="4"){
        const q = prompt("Enter title to search:").trim();
        searchBook(q);
    }
    else if(choice==="5"){
        const f = prompt("Type 1 for Expensive  or 2 for Cheap:").trim();
        filterBooksSimple(f);
    }
    else if(choice==="6"){
        booksAverage();
    }
    else if(choice==="7"){
        highestLowest();
    }
    else if(choice==="8"){
        getAllTitlesUppercase();
    }
    else if(choice==="9"){
        extraMethodsDemo();
    }
    else if(choice==="0"){
        console.log("Goodbye!");
        break;
    }
    else{
        console.log("Invalid option, try again.");
    }

    console.log("\n"); 
}
