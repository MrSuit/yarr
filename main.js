var mouseEvent = "empty";

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    var width = screen.width;
    new_width = screen.width-70;
    new_height = screen.height-300;
    if(width<992){
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
        
    }
    
    
    color = "black";
    width_of_line = 2;

    
    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        console.log("my_touchstart")
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offTop;
    }

    /*
    Create an event listener for "mousemove"
    and call function my_mousemove
    */
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.touches[0].clientY - canvas.offTop; 
        
        console.log("last position of x and y coordinates = ");
        console.log("x  = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y)
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y)
        last_position_of_x = current_position_of_mouse_x;
        last_position_of_y = current_position_of_mouse_y;
        


        

    }

    /*Create an event listener for "mouseup"
    and call function my_mouseup

    Create a function named my_mouseup with
    event e as parameter.
    
    Assign "mouseUP" to mouseEvent
    within the function
    */
    
    /*Create an event listener for "mouseleave"
    and call function my_mouseleave

    Create a function named my_mouseleave with
    event e as parameter.
    
    Assign "mouseleave" to mouseEvent
    within the function
    */

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
