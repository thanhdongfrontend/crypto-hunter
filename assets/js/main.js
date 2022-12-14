const selectedField = document.getElementById("selectedField");
const selectedText = document.getElementById("selectedText");
const selectedImg = document.getElementById("selectedImg");
const options = document.getElementsByClassName("selection-item");
const arrowIcon = document.getElementById("arrowIcon");
const coinList = document.getElementById("coinList");
const selectedCurrencyName = document.getElementById('selectedCurrencyName');
const currencyList = document.getElementById('currency-list');
const curOption = document.getElementsByClassName('currency-item');
const arrowCur = document.getElementById('arrowIconCurr');
const subHeading = document.getElementById('sub-heading');
const arrowInteval = document.getElementById('arrowIconInte');
const intervalList = document.getElementById('interval-list');
const intervalItems = document.getElementsByClassName('interval-item');
const selectedInterval = document.getElementById('selected-interval');

var intervaltime;
var timeout = setTimeout(function() {
    getDefaultCoinInfo()
    main();
},1)
var interval;

arrowInteval.addEventListener('click',function(){
    intervalList.classList.toggle('active');
    arrowInteval.classList.toggle('down')
    arrowInteval.classList.toggle('fa-xmark')
    arrowInteval.classList.toggle('fa-angle-right')
})



for (option of options) {
    $(option).click(function(){
        selectedText.textContent = this.textContent;
        var imgUrl = $(this).find("img").attr("src");
        coinList.classList.toggle('active')
        arrowIcon.classList.toggle('down')
        arrowIcon.classList.toggle('fa-xmark')
        arrowIcon.classList.toggle('fa-angle-right')
        selectedImg.src = imgUrl;
        coinInfoImgLg.src = imgUrl;
    })
    
}

for(inter of intervalItems) {
    $(inter).click(function(){
        selectedInterval.textContent = this.textContent;
        intervalList.classList.toggle('active');
        arrowInteval.classList.toggle('down')
        arrowInteval.classList.toggle('fa-xmark')
        arrowInteval.classList.toggle('fa-angle-right')
        intervaltime = Number(this.id);
        clearInterval(interval);
        interval = setInterval(function(){
            getCoinInfo();
            main();
        },intervaltime); 
    })
}



for (opt of curOption){
    $(opt).click(function(){
        selectedCurrencyName.textContent = this.textContent;
        currencyList.classList.toggle('active')
        arrowCur.classList.toggle('down')
        arrowCur.classList.toggle('fa-xmark')
        arrowCur.classList.toggle('fa-angle-right')
        subHeading.textContent = 'in ' + this.textContent;
        currency = this.textContent.toLowerCase().trim();
        label = 'Price ( Pass ' + day + ' Days) in '+ currency.toLocaleUpperCase();
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

