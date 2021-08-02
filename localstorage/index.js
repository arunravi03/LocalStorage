let inptkey = document.getElementById("inptkey");
let inptvalue = document.getElementById("inptvalue");
let btn = document.getElementById("btn_value");
let output = document.getElementById("output");

btn_value.onclick = function() {
    const key = inptkey.value;
    const value = inptvalue.value;

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();

    }
};

for (let i=0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    
    output.innerHTML += `${key} ${value}`;
}