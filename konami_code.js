const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
let index = 0;
document.addEventListener('keydown', function(event) {

const key = parseInt(event.detail || event.which);
if (key === code[index]) {
  alert('Horray!')
  index++
} else {
index = 0;
}
})
}