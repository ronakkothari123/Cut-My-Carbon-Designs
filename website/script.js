function resize(){
    document.documentElement.style.setProperty('--size', document.getElementById('size-input').value);
    document.getElementById('size-span').innerHTML = document.getElementById('size-input').value;
}

document.getElementById('size-input').value = 0.25;
resize()