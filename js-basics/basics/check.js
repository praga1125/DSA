function check(){
    let name = document.getElementById('name');
    alert(`welcome ${name.value}`)
    document.write('signup sucessfullyy..')
}
let previousElement = null;
document.addEventListener('click',function (event) {
    const currentElement = event.target;
    const parentElement = event.target.parentNode
    if(parentElement.classList.value == 'form') {
        console.log(event.target.id);
        if(!previousElement) {
            previousElement = currentElement
        }
        previousElement.style.backgroundColor = 'white';
        currentElement.style.backgroundColor = 'green';
        previousElement = currentElement;
    }
})
