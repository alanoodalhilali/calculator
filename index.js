const display=document.getElementById("display")
function displayy(charachter){
    display.value+=charachter

}
function calculateResult(){
    try{
        display.value=eval(display.value)

    }
    catch(error){
        display.value="error"
    }
  
}
function clearyisplay(){
    display.value=""
}
