// var h1 = document.createElement('h1');
// h1.innerHTML= "OMDB MOVIES";
// document.body.appendChild(h1);

//go to OMDB
//search ?s=____  the start of the search url path
/// new xhr
///xhr.open (get, url
///xhr.when you load   add event listener
///xhr.send
////Query algo for the search bar///
var output = {};
var query = document.location.search
query = query.replace('?',"");
var subQuery = query.split('&');
for (i=0; i<subQuery.length; i++){
    var key = subQuery[i].split('=')[0];
    var val = subQuery[i].split('=')[1];
    output[key]= val;
}
/////THis is the format  concatenate the path and the query params from index.html
////sickdude is the name of the input and also starts the search path in the url
var xhr = new XMLHttpRequest();
xhr.open('get', 'http://www.omdbapi.com/?s='+output.Search);
xhr.addEventListener('load', function () {
///do stuff inside the function
  ///this is just a string  but we want to make it to an object  the standard response
  ///from the api is raw in the form of a string
  var response = xhr.response;
  ///parse with json to make object
  var responseData = JSON.parse(response);
  ///Check to see we now have a dropdown to search through with an array inside
  ///but it isss an object
  console.log(responseData);
  var list = document.getElementById('list');
///use a for loop to go through everything under the Search array and spit out
//every movie title in each object
  for (var i = 0; i < responseData.Search.length; i++) {
    var a = document.createElement('a');
    a.innerHTML = responseData.Search[i].Title;
    a.href ='/show.html?i=' + responseData.Search[i].imdbID ;
    console.log(responseData.Search[i].imdbID)
////create a space to put your results
    var p = document.createElement('p');
///insert your data by grabbing the object/array and navigating through it
///capitalization also matters
    p.appendChild(a);
///now actually append them to the page
    document.body.appendChild(p);
}

})


xhr.send();
