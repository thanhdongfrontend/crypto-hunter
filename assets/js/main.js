var selectedField = document.getElementById("selectedField");
var selectedText = document.getElementById("selectedText");
var selectedImg = document.getElementById("selectedImg");
var options = document.getElementsByClassName("selection-item");
var arrowIcon = document.getElementById("arrowIcon");
var coinList = document.getElementById("coinList");
var selectedCurrencyName = document.getElementById('selectedCurrencyName');
var currencyList = document.getElementById('currency-list');
var curOption = document.getElementsByClassName('currency-item');
var arrowCur = document.getElementById('arrowIconCurr');
var subHeading = document.getElementById('sub-heading');
var chatFooter = document.getElementById('chart-footer')

for (option of options) {
    $(option).click(function(){
        selectedText.textContent = this.textContent;
        var imgUrl = $(this).find("img").attr("src");
        selectedImg.src = imgUrl;
        coinInfoImgLg.src = imgUrl;
    })
    
}



for (opt of curOption){
    $(opt).click(function(){
        selectedCurrencyName.textContent = this.textContent;
        subHeading.textContent = 'in ' + this.textContent;
        currency = this.textContent.toLowerCase().trim();
        console.log(currency);
        chatFooter.classList.add('active')
        label = 'Price ( Pass ' + day + ' Day) in '+ currency.toLocaleUpperCase();
        getCoinInfo();
        main();
    })
}

arrowCur.addEventListener('click',function(){
    currencyList.classList.toggle('active');
    arrowCur.classList.toggle('down')
    arrowCur.classList.toggle('fa-xmark')
    arrowCur.classList.toggle('fa-angle-right')
})


arrowIcon.addEventListener('click',function(){
    coinList.classList.toggle('active')
    arrowIcon.classList.toggle('down')
    arrowIcon.classList.toggle('fa-xmark')
    arrowIcon.classList.toggle('fa-angle-right')
})

