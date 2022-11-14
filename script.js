let number = document.getElementById('num');
let counter = 0;

setInterval(() => {
    if(counter == 90){
        clearInterval();
    }else{
        counter +=1;
        number.innerHTML = counter + "%";
    }
}, 22);