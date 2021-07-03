var onScreen = document.getElementById("screen")
var lastTotal = null
var operator = ""
var presentVal = ""
var clicked = false


function reset()
{
    onScreen.value = ""
    lastTotal = null
    presentVal = ""
    clicked = false
}

function screenClick()
{
    onScreen.value = ""
    clicked = true
}

function calc()
{

    if (lastTotal != null)
    {
        
        presentVal = parseFloat(onScreen.value)
        
        if(operator == "+"){
            lastTotal += presentVal
        }
        else if(operator == "-"){
            lastTotal -= presentVal
        }
        else if(operator == "*"){
            lastTotal *= presentVal
        }
        else if(operator == "/"){
            lastTotal /= presentVal
        }
        onScreen.value = lastTotal
    }
    else
    {
        lastTotal = parseFloat(onScreen.value)
    }
    clicked = false
}

function add()
{
    if(clicked){
        calc()
    }
    operator  = "+";
}

function sub()
{
    if(clicked){
        calc()
    }
    operator  = "-";
}
function mul()
{
    if(clicked){
        calc()
    }
    operator  = "*";
}
function div()
{
    if(clicked){
        calc()
    }
    operator  = "/";
}

function equal()
{
    if(clicked){
        calc()
    }
    else
    {
        if (lastTotal !== "")
        {
            if(operator == "+"){
                lastTotal += presentVal
            }
            else if(operator == "-"){
                lastTotal -= presentVal
            }
            else if(operator == "*"){
                lastTotal *= presentVal
            }
            else if(operator == "/"){
                lastTotal /= presentVal
            }

            onScreen.value = lastTotal
        }
        else
        {
            lastTotal = parseFloat(onScreen.value)
        }
    }
}
