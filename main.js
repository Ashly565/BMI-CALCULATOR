let btn=document.getElementById('btn');

btn.addEventListener('click',function(){
    let weight=document.getElementById('weight-input').value;
    let height=document.getElementById('height-input').value;
    let results=document.getElementById('result')

    if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
        alert('Please fill the fields ');
        return;
    }
    let bmi=(weight/(height*height)*10000).toFixed(2);
    document.getElementById('btn').value=bmi;

    if(bmi>25){
       results.innerHTML= bmi + "-Over-weight"
    }else if(bmi<18){
         results.innerHTML= bmi + " -NORMAL"
    }else{
         results.innerHTML= bmi + "-Under-weight"
    }
})