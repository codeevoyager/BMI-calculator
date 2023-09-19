
document.getElementById('calculateBmi').addEventListener('click',()=>{

    const weightValue = document.getElementById('weightValue');
    const heightValue = document.getElementById('heightValue');
    const result = document.getElementById('result');
    
    
    const weight = parseFloat(weightValue.value);
    const height = parseFloat(heightValue.value)/100;

    if(weight<0 || height<0 || isNaN(weight) || isNaN(height)){
        result.innerHTML = "Enter the valid numbers";
        result.style.color = "red";
    }
    else{

    const bmiValue = weight / (height * height);
    const bmi = bmiValue.toFixed(2);

    let category;

    if(bmi<18.5){
        category = 'Underweight';
    }else if(bmi<25){
        category = 'Normal Weight';
    }else if(bmi<30){
        category = 'Overweight';
    }else{
        category = 'Obese';
    }


    result.innerHTML =`Your BMI is <span>${bmi}</span> <br>Category: <span>${category}</span>`;

    resultColor = result.querySelectorAll('span');
    resultColor.forEach((value)=> {
        if(bmi<18.5){
            value.style.color = 'red';
        }else if(bmi<25){
            value.style.color = 'rgb(13, 128, 211)';
        }else{
            value.style.color = 'red';
        }
    });
    }
})


