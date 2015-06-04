var output = {}
var query = document.location.search
query = query.replace('?',"");
var subQuery = query.split('&');
for (i=0; i<subQuery.length; i++){
    var key = subQuery[i].split('=')[0];
    var val = subQuery[i].split('=')[1];
    output[key]= val;
}

var h1 = document.createElement('h1');
h1.innerHTML= "OMDB Movie Information";
document.body.appendChild(h1);

var xhr = new XMLHttpRequest();
xhr.open('get', 'http://www.omdbapi.com/?i=' + output.i);

xhr.addEventListener('load', function () {
  var response = xhr.response;
  var responseData = JSON.parse(response);

  console.log(responseData);
  console.log(responseData.Title);
    var p = document.createElement('p');
    p.innerHTML = "<h3>"+responseData.Title+"</h3>" + "<br>" + "Runtime:  "+responseData.Runtime +
     "<br>"+ "Rated:  " +responseData.Rated +"<br>"+ "Year:  "+responseData.Year+ "<br>"+ "Release Date:  "+responseData.Released;
    document.body.appendChild(p);
// }

})


xhr.send();
