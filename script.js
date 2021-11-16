const app = {
  initialize: () => {
    $(".square").click((e) => {
      console.log("clicked");
      $(e.currentTarget).toggleClass("moveMe");
    });

    $(".circle").click((e) => {
      $(e.currentTarget).toggleClass("moveMe");
    });
    $("#squareButton").click((e) => {
      console.log("clicked");
      app.addSquares();
    });
    $("#circleButton").click((e) => {
      console.log("clicked");
      app.delCircles();
    });
  },
  addSquares: () => {
    console.log("hello");
    const newSquare = document.createElement("div");
    newSquare.innerText = "new squares can't move...";
    newSquare.classList.add("square");
    $(".squares").append(newSquare);
  },
  delCircles: () => {
    console.log("bye");
    $(".circles").children().last().remove();
  },
};

//declare elements
let content1 = document.querySelector(".content1");
let monthInput = document.getElementById("month");
let submitButton = document.querySelector("#submitButton1");
let monthText = document.querySelector(".monthText");
let errorText = document.querySelector(".errorText");

//list for months so i don't have to manually print them with if statements
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//list to hold the different type of days per month
let days = ["28", "30", "31"];

//if i click the submit button
submitButton.addEventListener("click", function () {
  monthText.classList.add("empty"); //first add the class empty (display:none) to the 2 texts that are hiddne
  errorText.classList.add("empty");
  let monthVal = monthInput.value; //value to hold what's currently in the input field
  let dayVal; //initialize variable

  if (!isNaN(monthInput.value)) {
    //check if input is a nunber, if it is
    console.log("a number");
    if (monthVal > 0 && monthVal < 13) {
      //check if it is between 1-12
      console.log("withinNum"); //if it is, check if it is 2, even, or odd
      if (monthVal == 2) {
        //if it is 2, assign dayVal with the value of days[0] which is 28
        dayVal = days[0];
        console.log(dayVal);
      } else if (monthVal % 2 == 0) {
        //if it is even, assign the value days[1] which is 30
        dayVal = days[1];
      } else {
        //if it is odd, assign the value days[2], which is 31
        dayVal = days[2];
      }
      monthVal = monthVal - 1; //have to subtract 1 from monthVal since lists start from 0 not 1
      monthText.innerText = `In ${months[monthVal]} there are ${dayVal} days`; //change the innertext of the h3 with variables monthVal and days
      monthText.classList.remove("empty"); //remove the class empty
    } else {
      console.log("please input valid num"); //error checking, have it display a h3 telling to input a valid number
      errorRemoveEmpty();
    }
  } else {
    errorRemoveEmpty();
  }
});

function errorRemoveEmpty() {
  errorText.innerText = "PLEASE INPUT A VALID NUMBER";
  errorText.classList.remove("empty");
}

// second problem

//declaring variables
let submitButton2 = document.getElementById("submitButton2");
let content2 = document.querySelector(".content2");
let numContainer = document.querySelector(".numberContainer");

submitButton2.addEventListener("click", function () {
  //first remove all children from numContainer just in case (or else spamming will overload the page)
  while (numContainer.firstChild) {
    numContainer.removeChild(numContainer.firstChild);
  }
  //remove empty class
  numContainer.classList.remove("empty");

  //loop from 1-100
  for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
      //if i/15 with no remainders, print fizzbuzz
      console.log("fizzbuzz");
      let fizzBuzz = document.createElement("h4");
      fizzBuzz.innerText = "fizzbuzz";
      numContainer.appendChild(fizzBuzz);
    } else if (i % 5 == 0) {
      //if i/5 with no remainders, print buzz
      console.log("buzz");
      let buzz = document.createElement("h4");
      buzz.innerText = "buzz";
      numContainer.appendChild(buzz);
    } else if (i % 3 == 0) {
      //if i/3 no remainders, print fizz
      console.log("fizz");
      let fizz = document.createElement("h4");
      fizz.innerText = "fizz";
      numContainer.appendChild(fizz);
    } else {
      //else print the num
      console.log(i);
      let numI = document.createElement("h4");
      numI.innerText = i;
      numContainer.appendChild(numI);
    }
  }
});

//third problem
let submitButton3 = document.getElementById("submitButton3");
let input1 = document.getElementById("first");
let input2 = document.getElementById("second");
let operation = document.getElementById("operation");
let answer = document.getElementById("answer");

submitButton3.addEventListener("click", function () {
  //variable to store the answer
  let result;
  //if statements for each oepartion
  if (operation.value == "+") {
    result = parseInt(input1.value) + parseInt(input2.value);
  } else if (operation.value == "-") {
    result = parseInt(input1.value) - parseInt(input2.value);
  } else if (operation.value == "*") {
    result = parseInt(input1.value) * parseInt(input2.value);
  } else if (operation.value == "/") {
    result = parseInt(input1.value) / parseInt(input2.value);
  }
  console.log(result);
  //changing innerhtml with result
  answer.innerText = result;
});

//other js_exercise

//api exercise

const dogApp = {
  dogURL: "https://dog.ceo/api/breeds/image/random",
  initialize: function () {
    $("#refresh").click(function () {
      console.log("Clicked");
      dogApp.getData();
    });
  },

  getData: function () {
    let url = dogApp.dogURL + "?origin=*";
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        //Check the browser console to see the returned data
        console.log(response);
        $(".dogImg").attr("src", response.message);
        //Use jQuery to insert the search term into the appropriate DOM element
        //The data we want is the first item in the returned JSON, hence value "0"
        // 	$("#searchTerm").html(response[0]);
        // 	//The data we want is the second item in the returned JSON, hence value "1"
        // 	//Create a var to save the array of search results
        // 	var searchResults = response[1];
        // 	var urlResults = response[3];
        // 	//Loop through the array of results
        // 	for (var i = 0; i < searchResults.length; i++){
        // //		debugger;
        // 		var htmlString =
        // 			`<p class='wikiResults'>
        // 				<a href=${urlResults[i]}>${searchResults[i]}</a>
        // 			</p>`;
        // 		//Use jQuery's append() function to add the searchResults to the DOM
        // 		$("#results").append(htmlString);
        // 	}
      })
      .catch(function (error) {
        console.log("We got problems");
        console.log(error);
      });
  },
};
