mydiv.addEventListener('mousemove', function(event) {
    const parentElement = event.target.parentNode
    console.log(parentElement);
        const red = Math.floor(Math.random() * 250);
        const green = Math.floor(Math.random() * 250);
        const blue = Math.floor(Math.random() * 250);
        console.log(red, green, blue);
        parentElement.style.backgroundColor =  `rgb(${red}, ${green}, ${blue})`;
})
