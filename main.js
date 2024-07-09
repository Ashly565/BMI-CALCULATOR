let btn=document.getElementById('btn');

btn.addEventListener('click',function(){
    let weight=document.getElementById('weight-input').value;
    let height=document.getElementById('height-input').value;
    if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
        alert('Please fill the fields ');
        return;
    }
    let bmi=(weight/(height*height)*10000);
    document.getElementById('bmi-output').value=bmi;
    if(bmi>25){
        document.getElementById('hlt-output').value="Over-Weight";
    }else if(bmi<18){
        document.getElementById('hlt-output').value="Under-Weight";
    }else{
        document.getElementById('hlt-output').value="Normal";
    }
})