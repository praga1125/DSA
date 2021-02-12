const nameVal  = document.getElementById('name')
// nameVal.setAttribute('value', 'Super');
// console.log(nameVal);

nameVal.addEventListener('keypress', function(event) {
    // alert('Key pressed')
    console.log(event.target.value);

})