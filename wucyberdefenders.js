function getElementByXPath(xpath) {
  return new XPathEvaluator()
    .createExpression(xpath)
    .evaluate(document, XPathResult.FIRST_ORDERED_NODE_TYPE)
    .singleNodeValue
}

function download(content, filename){
  const a = document.createElement('a') // Create "a" element
  const blob = new Blob([content], {type: "text/markdown"}) // Create a blob (file-like object)
  const url = URL.createObjectURL(blob) // Create an object URL from blob
  a.setAttribute('href', url) // Set "a" element link
  a.setAttribute('download', filename) // Set download filename
  a.click() // Start downloading
}

function onSuccess() {
  console.log("Downloaded successfully");
}

function onError(error) {
    console.log(`Error: ${error}`);
}

console.log("borderify.js loaded");
str= document.URL;
matches = str.match(/\d+$/) // get the last two digits of the URL
if (matches) {
    console.log(matches[0])
    document.body.style.border = "5px solid red";
    title = getElementByXPath("/html/body/main/section/div/div[1]/div/div/div[1]/span").innerText  // Title 
    rows = document.getElementsByTagName("table")[1].rows;
    size=rows.length-1
    questions=[]
    for (var i = 1; i < size; i+=3) {
        questions.push(rows[i].cells[1].innerText)
    }
    console.log("Title: "+title)
    console.log(questions)
    myFileString= "# "+ title + "\n"
    for (var i = 0; i < questions.length; i++) {
        myFileString += "### "+ i + " - "+ questions[i] + "\n\n\n"
    }
    console.log(myFileString)
    process = download(myFileString, title+".md")
}
