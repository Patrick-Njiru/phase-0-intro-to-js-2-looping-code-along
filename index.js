// Code your solutions in this file

const names=['Guadapule','Ollie','Aki'], newArray=[],
birthday='surprise'

function writeCards(names, birthday) {
    for(let i=0; i<1; i++ ) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`)
    }
    for (let i=1; i<2; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`)
    }
    for (let i=2; i<3; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`)
    }
    return newArray;
}

function countDown(number) {
    let  i=number
    while(i>=0) {
        console.log(i);
        i--
    }   
}

countDown(10);