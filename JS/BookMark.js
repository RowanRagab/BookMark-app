// declaration
var siteName = document.getElementById("siteName");
var SiteURL = document.getElementById("SiteURL");
var webName = document.getElementById("webName");
var visitBtn = document.getElementById("visitBtn");
var delBtn = document.getElementById("delBtn");
var SubmitBtn = document.getElementById("submitBtn");
var siteArr;
// siteArr declaration
if(localStorage.getItem('site-details') == null)
{
    siteArr =[]
}
else{
    siteArr =  JSON.parse(localStorage.getItem('site-details'))
}
// submit BTN onclick event
SubmitBtn.onclick = function () {
    addSite();
};
// add site to array
function addSite() {
    if(regexBM() == true ){
    site = {
        wName: siteName.value,
        wURL: SiteURL.value,
    };
    siteArr.push(site);
    localStorage.setItem('site-details' , JSON.stringify(siteArr))
    display();
}}
// display site 
function display() {
    var box = "";
    for (var i = 0; i < siteArr.length; i++) {
        box += `
    <div class="col-9 p-2">
        <h3 id="webName">${siteArr[i].wName}</h3>
        <p class="opacity-0">${siteArr[i].wURL}</p>  
    </div>
    <div class="col-3 p-4">
    <a href="${siteArr[i].wURL}" target="_blank"> 
    <button class="btn btn-info" id="visitBtn">Visit</button></a>
        <button class="btn btn-danger" onclick="deleteSite(${i})" id="delBtn">Delete</button>
</div>`;
    }
    document.getElementById("webContent").innerHTML = box;
    clearForm()
}
// delete a bookmark from array
function deleteSite(index) {
    siteArr.splice(index, 1);
    localStorage.setItem("site-details" , JSON.stringify(siteArr))
    display();
}
// clear after submit
function clearForm(){
    siteName.value = ""
    SiteURL.value = ""
}
// Regex Fun
function regexBM(){
    var regex = /^[A-Z][a-z]{1,}$/;
    if(regex.test(siteName.value) == true)
    return true;
    else
    {
        alert('wrong Pattern Please Insert a word start with Capital (A to Z)')
        return false;
    };
}