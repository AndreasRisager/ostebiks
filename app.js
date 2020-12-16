fetch("https://osteapi.herokuapp.com/api/v1/cheeses")
.then(res => res.json())
.then(function(data) {
    console.log(data);
})