// generate a random Colour


const randomColour = function(){
    const hex = "0123456789ADCDEF"
    let color = '#'
    // #123456 6 characters for a color
    for (let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

let intervalId

const startChangingColor = function () {
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000)
    }
    
    function changeBgColor( ) {
        document.body.style.background = randomColour();
    }
}

document.querySelector("#start").addEventListener('click', startChangingColor)

const stopChangingColor = function () {
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector("#stop").addEventListener('click', stopChangingColor)
