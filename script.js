document.querySelector('body').addEventListener('mousemove', eyeball);

function eyeball(){
    var eye = document.querySelectorAll('.eye');
    eye.forEach(function (eye){
        // Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
        // The clientWidth property returns the viewable width of an element in pixels, including padding, but not the border, scrollbar or margin.
        // The clientWidth property returns the viewable height of an element in pixels, including padding, but not the border, scrollbar or margin.
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth/2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight/2);

        // The pageX property returns the document relative X coordinate of the mouse pointer when a mouse event occurs.
        // The pageY property returns the document relative Y coordinate of the mouse pointer when a mouse event occurs.

        let radian = Math.atan2(event.pageX - x, event.pageY - y)
        let rot = (radian * (180/Math.PI * -1) + 270);
        eye.style.transform = "rotate("+rot+"deg)";
    })
}