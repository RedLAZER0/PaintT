canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
canvas.addEventListener("mouseDown", my_mouseDown);

function my_mouseDown(e)
{
    color=document.getElementById("color").value
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value
mouseEvent="mouseDown";

}

canvas.addEventListener("mouseUp", my_mouseUp);

function my_mouseUp(e)
{
mouseEvent = "mouseUp"    
}

canvas.addEventListener("mouseLeave", my_mouseLeave);

function my_mouseLeave(e)
{
mouseEvent ="mouseLeave"    
}

canvas.addEventListener("mouseMove", my_mouseMove);

function my_mouseMove(e)
{
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if(mouseEvent == "mouseDown")
{
console.log("current position of x and y coordinates");
console.log("X =" + current_position_of_mouse_x + "Y =" + current_position_of_mouse_y);
ctx.beginpath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 ,2 * Math.PI);
    ctx.stroke();
    
}
}