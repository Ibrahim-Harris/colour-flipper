const body = document.getElementsByTagName("body")[0]// Document access the html element. The attrubute specifies which segements and that is then specified by the string body, as we would like to acces the whole tags within the body element. Note that if there were element with the body tag then we would get an array of the elemens that have this tag name "body" tags returned. The way we access the tag is by the use of index. Here as we only have one body tag we used the value 0 to return the one and only body tag in our html doc.   
// The next [part is when we click on the button we change the back ground color]
function setColor(name) {
    body.style.backgroundColor = name;} // The name represents the name of the color we want to set the background to when we call the function. 
setColor ("green") // We now call the function by specifying the name of the function and pass you pass to it any of the pramiters that you specify. In this case the pramiter values name.  









    