var notebookJSON=JSON.parse(document.body.textContent)
var notebook = nb.parse(notebookJSON);
var rendered = notebook.render();
document.body.textContent=""
document.body.innerHTML=""
document.body.outerHTML=""

var logoImage=document.createElement("img")
logoImage.src=browser.extension.getURL("icons/icon256.png");
logoImage.style="height:48px;width:48px"

var headText=document.createElement("text")
headText.innerText="   Python Notebook Viewer"
headText.style="font-family:Consolas, Monaco, 'Andale Mono', monospace;font-size:48px;"

var topHr=document.createElement("HR")
topHr.style="width:98%;"

var pluginHead=document.createElement("div")
pluginHead.id="pluginHead"
pluginHead.style="width: 85%;margin: auto;background:#ffffff;"

pluginHead.appendChild(logoImage)
pluginHead.appendChild(headText)

var notebookCodeHolder=document.createElement("div")
notebookCodeHolder.id="notebook-code-holder"
notebookCodeHolder.style="width: 85%;margin: auto;background:#ffffff;"//"width: 80%;margin: auto;background:#ffffff;"
notebookCodeHolder.appendChild(rendered)

var notebookHolder=document.createElement("div")
notebookHolder.id="notebook-holder"
notebookHolder.style="margin: auto;background:#ffffff;"//"width: 90%;margin: auto;background:#ffffff;"
notebookHolder.appendChild(notebookCodeHolder)

var bottomHr=document.createElement("HR")
bottomHr.style="width:98%;"

var pageHolder=document.createElement("div")
pageHolder.id="page-holder"
pageHolder.style="width: 78%;margin: auto;background:#ffffff;"

pageHolder.appendChild(pluginHead)
pageHolder.appendChild(topHr)
pageHolder.appendChild(notebookHolder)
pageHolder.appendChild(bottomHr)

document.body.appendChild(pageHolder)

document.body.style="background:#f5f2f0;"
Prism.highlightAll();

