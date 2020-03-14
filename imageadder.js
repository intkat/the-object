let i = 0;

document.body.addEventListener('click', function(){
    
let all = document.querySelectorAll('h1');

// if (i == all.length-1) {
//     i = 0
// }

all[i].style.setProperty('visibility', 'visible');

i++

});