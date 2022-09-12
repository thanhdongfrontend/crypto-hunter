var selectedField = document.getElementById("selectedField");
var selectedText = document.getElementById("selectedText");
var selectedImg = document.getElementById("selectedImg");
var options = document.getElementsByClassName("selection-item");
var arrowIcon = document.getElementById("arrowIcon");
var coinList = document.getElementById("coinList");

for (option of options) {
    $(option).click(function(){
        selectedText.textContent = this.textContent;
        var imgUrl = $(this).find("img").attr("src");
        selectedImg.src = imgUrl;
        coinInfoImgLg.src = imgUrl;
    })
    
}




arrowIcon.addEventListener('click',function(){
    coinList.classList.toggle('active')
    arrowIcon.classList.toggle('down')
    arrowIcon.classList.toggle('fa-xmark')
    arrowIcon.classList.toggle('fa-angle-right')
})

