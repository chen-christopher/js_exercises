const app = {
  dogURL: "https://dog.ceo/api/breeds/image/random",
  initialize: function () {
    $("#refresh").click(function () {
      console.log("Clicked");
      app.getData();
    });
  },

  getData: function () {
    let url = app.dogURL + "?origin=*";
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
