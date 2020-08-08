let finalResult = 0.00;

function calc(clickedId) {
    var number1 = document.getElementById("value1").value
    var number2 = document.getElementById("value2").value
    
    
    if(!number1 || !number2){
        alert('Null Values are passed!')
    }else {
        try {
            console.log(clickedId)
            console.log(typeof clickedId);
            switch(clickedId) {
                case "add":
                    console.log('Hello add');
                    addition(number1, number2);
                    break
                
                case "mul":
                    multiply(number1, number2)
                    break
                
                case "div":
                    divide(number1, number2)
                    break
            
                default:
                    alert('Something went wrong!')
                    break
            }
        } catch (error) {
            console.log(error)
        }
    }
}

const addition = (value1, value2) => {
    finalResult = parseFloat(value1) + parseFloat(value2)
    document.getElementById('finalresult').innerText = finalResult
    return finalResult
}

const multiply = (value1, value2) => {
    finalResult = parseFloat(value1) * parseFloat(value2)
    document.getElementById('finalresult').innerText = finalResult
    return finalResult
}
//dividel
const divide = (value1, value2) => {
    finalResult = parseFloat(value1) * parseFloat(value2)
    document.getElementById('finalresult').innerText = finalResult
    document.getElementById('puppy').src = '/public/pug.jpg'
    return finalResult
}

//export the modules
exports.addition = addition
exports.multiply = multiply
exports.divide   = divide 