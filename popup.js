// document.addEventListener("click", function(){
//     document.getElementById("clickMe").innerHTML = "Hello World";
// });


document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('clickMe');
    // onClick's logic below:
    link.addEventListener('click', function() {
        console.log('did something')
    });
});