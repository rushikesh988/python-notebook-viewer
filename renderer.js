var notebookJSON=JSON.parse(document.body.textContent) // read document content and convert to JSON
var notebook = nb.parse(notebookJSON); // parse it to Notebook.js format
var rendered = notebook.render(); // render it into HTML . rendered is a string containing html 

//Clear Document 
document.body.textContent="" 
document.body.innerHTML=""
document.body.outerHTML=""

// Set title.
document.title = window.location.pathname.split('/').pop()

// Create Favicon for Tab
var linkElement=document.createElement("link")
linkElement.setAttribute("href",browser.extension.getURL("icons/icon256.png"))
linkElement.setAttribute("rel","shortcut icon")
linkElement.setAttribute("type","image/x-icon")
document.head.appendChild(linkElement)

//add plugin logo image to top . This is done by adding image to DOM 
var logoImage=document.createElement("img")
logoImage.src=browser.extension.getURL("icons/icon256.png");
logoImage.style="height:48px;width:48px"

//add plugin name after image . This is done by adding text to DOM 
var headText=document.createElement("text")
headText.innerText="   Python Notebook Viewer"
headText.style="font-family:Consolas, Monaco, 'Andale Mono', monospace;font-size:48px;"

//add vertical line below plugin name . This is done by adding image to DOM 
var topHr=document.createElement("HR")
topHr.style="width:98%;"

// declare container space for above elements
var pluginHead=document.createElement("div")
pluginHead.id="pluginHead"
pluginHead.style="width: 85%;margin: auto;background:#ffffff;"

//put all the elements declared above in a container
pluginHead.appendChild(logoImage)
pluginHead.appendChild(headText)

//initiate space in page to put HTML of Jupyter Notebook.
var notebookCodeHolder=document.createElement("div")
notebookCodeHolder.id="notebook-code-holder"
notebookCodeHolder.style="width: 85%;margin: auto;background:#ffffff;"//"width: 80%;margin: auto;background:#ffffff;"
notebookCodeHolder.appendChild(rendered)

// Declare outer space to for HTML , this done for color adjustment. 
var notebookHolder=document.createElement("div")
notebookHolder.id="notebook-holder"
notebookHolder.style="margin: auto;background:#ffffff;"//"width: 90%;margin: auto;background:#ffffff;"
notebookHolder.appendChild(notebookCodeHolder)

// create a horizontal line 
var bottomHr=document.createElement("HR")
bottomHr.style="width:98%;"

//create main page holder for the for color arrangement
var pageHolder=document.createElement("div")
pageHolder.id="page-holder"
pageHolder.style="width: 78%;margin: auto;background:#ffffff;"


// add components by sequence.
pageHolder.appendChild(pluginHead)
pageHolder.appendChild(topHr)
pageHolder.appendChild(notebookHolder)
pageHolder.appendChild(bottomHr)

document.body.appendChild(pageHolder)

document.body.style="background:#f5f2f0;"

//call prism for Highlighting of code
Prism.highlightAll();
