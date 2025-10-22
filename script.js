const name = "BHARATH THOKALA";
const h1 = document.getElementById('name');
h1.innerHTML = '<span class="cursor"></span>';
let i = 0;

function type() {
  if (i < name.length) {
    h1.innerHTML = name.substring(0, i + 1) + '<span class="cursor"></span>';
    i++;
    setTimeout(type, 150);
  }
}

setTimeout(type, 800);
