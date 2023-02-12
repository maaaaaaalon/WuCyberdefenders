function download222(url, filename){
    console.log("download222")
    const a = document.createElement('a') // Create "a" element
    a.setAttribute('href', url) // Set "a" element link
    a.setAttribute('download', filename) // Set download filename
    a.click() // Start downloading 
}

function getFileName() {
    return document.getElementById("filename").value
}

function getUrl(bl){
    return URL.createObjectURL(bl);
}

function generate() {
    browser.tabs.executeScript({file: "../wucyberdefenders.js"}).then( (value) => {
        if(value[0] != ""){
            fn = getFileName();
            fileContent = value[0];
            theBlob = new Blob([fileContent], {type: "text/markdown"});
            url=getUrl(theBlob);
            download222(url, fn);
        }
        else{
            document.getElementById("error").style.display = "";
        }
    })
}
/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */
document.getElementById("error").style.display = "none";
document.getElementById("button").addEventListener("click", generate);
