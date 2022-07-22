//Question1.
//Write the code to access element which is having id as "text".

const elementOne = document.getElementById("text");
console.log(elementOne);


//Question2
// Write the code to access element which is having tag as "h1"

const head = document.getElementsByTagName("h1");
console.log(head);


//Question3.
//Write the code to access element which is having class as "box".

const elementTwo = document.getElementsByClassName("box");
console.log(elementTwo);

//Question4.
//<h1>Hello </h1>
//Change the heading from ""Hello"" to ""Hello World"" using DOM functions.

const elementThree = document.getElementById("first");
elementThree.innerText = "Hello World";


//Question5.
//Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

function myFunction() {
    document.getElementById("main").style.flexDirection = "column";
}

//Question6.
//What’s the difference between window vs document?

//Ans. Window object : The window object is the topmost object of the DOM hierarchy.
//It represents a browser window or frame that displays the contents of the webpage. Whenever a window appears on the screen to display the contents of the document, the window object is created. 

//Document Object : The document object represent a web page that is loaded in the browser. 
//By accessing the document object, we can access the element in the HTML page. 
//With the help of document objects, we can add dynamic content to our web page. 
//The document object can be accessed with a window.document or just document.


//Question7.
//<h1>Hello </h1>
//Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions.

let elementFour = document.getElementById("hi");
elementFour.innerText = "Heading";
elementFour.style.color = "red";

//Question8.
//Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy".

function changeText(){
    document.getElementById("button1").value="Here";
    const elementFive = document.getElementById("hello");
    elementFive.innerText = "Welcome to Elevation academy"; 
}

//Question9.
//Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second.

let hour = document.getElementById("hour");
let minutes = document.getElementById("min");
let seconds = document.getElementById("sec");
let ams = document.getElementById("five");

let clock = setInterval(
    function time() {
        let date = new Date();
        let hr = date.getHours();
        let mins = date.getMinutes();
        let secs = date.getSeconds();

        if(hr >= 12){
            five.innerHTML = 'PM';
        }
        else{
            five.innerHTML = 'AM';
        }

        if(hr>12){
            hr = hr-12;
        }

        hour.textContent = hr;
        minutes.textContent = mins;
        seconds.textContent = secs;
    }
)

//Question10.
//Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected.

document.getElementById("btn").addEventListener("click", showYear);
function showYear() {
  let selected = document.querySelector("#year").value;
  document.querySelector(".yearselected").innerText = `Year selected : ${selected}`;
}

//Question11.
//Create a form having name ,email, phone no. , birth year. 
//Add validations - phone no. should start with 91 , it should be 10 digits.
//email should be domain prepbytes.com.
//birth year should be > 95.
