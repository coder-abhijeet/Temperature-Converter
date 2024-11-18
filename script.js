window.onload = function() {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false);
    document.getElementById("temp_box").value = ""; // Reset the input field
};

    const temp_box = document.getElementById("temp_box");
    const toFahrenheit = document.getElementById("toFahrenheit");
    const toCelcius = document.getElementById("toCelcius");
    const result = document.getElementById("result");



function convert(){
    if (toFahrenheit.checked){
        temp = Number(temp_box.value);
        temp = temp*9/5 + 32;
        temp = temp.toFixed(2)
        result.textContent=temp +"°F";
    }

    else if (toCelcius.checked){
        temp = Number(temp_box.value);
        temp = (temp-32)*5/9;
        temp = temp.toFixed(2)
        result.textContent=temp +"°C";
    }
    
    else {
        result.textContent="Select a unit, Dude!";
    }
}