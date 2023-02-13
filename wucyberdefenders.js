function getElementByXPath(xpath) {
    return new XPathEvaluator()
        .createExpression(xpath)
        .evaluate(document, XPathResult.FIRST_ORDERED_NODE_TYPE)
        .singleNodeValue
}

function download(content, filename){
    const a = document.createElement('a') // Create "a" element
    const url = URL.createObjectURL(blob) // Create an object URL from blob
    /*a.setAttribute('href', url) // Set "a" element link
    a.setAttribute('download', filename) // Set download filename
    a.click() // Start downloading
    */
    return url
}

function onSuccess() {
    console.log("Downloaded successfully");
}

function onError(error) {
    console.log(`Error: ${error}`);
}


function retrieveData() {
    title = getElementByXPath("/html/body/main/section/div/div[1]/div/div/div[1]/span").innerText  // Title 
    tags= getElementByXPath("/html/body/main/section/div/div[1]/div/div/div[2]/div/table/tbody/tr[5]/td[2]")
    console.log(tags)
    rows = document.getElementsByTagName("table")[1].rows;
    size=rows.length-1
    questions=[]
    for (var i = 1; i < size; i+=3) {
        questions.push(rows[i].cells[1].innerText)
    }
    //console.log("Title: "+title)
    //console.log(questions)
    myFileString= "# "+ title + "\n"
    for (var i = 0; i < questions.length; i++) {
        j=i+1
        myFileString += "### "+ j + " - "+ questions[i] + "\n\n"
        myFileString += "**answer** : \n\n"
    }
    //console.log(myFileString)
    return myFileString
}


function main(){
    str= document.URL;
    matches = str.match(/\d+$/) // get the last two digits of the URL
    if (matches) {
        return retrieveData()
    }else{
        return ""
    }
}

main()
