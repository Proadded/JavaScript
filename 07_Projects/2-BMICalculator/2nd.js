const form = document.querySelector('form')
// we have to stop the form sending the info to server because we dont have one
form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    // input is in the string form so we have to change it into int 
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')



    if(height < 0 || height === '' || isNaN(height)){
        results.innerHTML = "Please enter a valid number"
    } 
    else if(weight < 0 || weight === '' || isNaN(weight)){
        results.innerHTML = "Please enter a valid number"
    }
    else{
        const BMI = (weight / ((height * height)/10000)).toFixed(2)

        if(BMI < 18.6){
            results.innerHTML = `${BMI}: You are Under-weight`
        }
        else if(BMI >= 18.6 && BMI <= 24.9){
            results.innerHTML = `${BMI}: You have Normal weight`
        }
        else{
            results.innerHTML = `${BMI}: You are Over-weight`
        }
    }
})