var  selectedCoin;
var currency;
var day;
var bitcoin = document.getElementById('bitcoin');
bitcoin.addEventListener('click',function(){
    selectedCoin = 'bitcoin';
    coinApi = "https://api.coingecko.com/api/v3/coins/" +selectedCoin;
    getCoinInfo();
    main(); 
})

var tether = document.getElementById('tether');
tether.addEventListener('click',function(){
    selectedCoin = 'tether';
    coinApi = "https://api.coingecko.com/api/v3/coins/" +selectedCoin;
    getCoinInfo();
    main();
    
})

var shiba = document.getElementById('shiba');
shiba.addEventListener('click',function(){
    selectedCoin = 'shiba-inu';
    coinApi = "https://api.coingecko.com/api/v3/coins/" +selectedCoin;
    getCoinInfo();
    main();   
})

var ethereum = document.getElementById('ethereum')
ethereum.addEventListener('click',function(){
    selectedCoin = 'ethereum'
    coinApi = "https://api.coingecko.com/api/v3/coins/" +selectedCoin;
    getCoinInfo();
    main();
     
})

var usd_coin = document.getElementById('usd-coin')
usd_coin.addEventListener('click',function(){
    selectedCoin = 'usd-coin';
    coinApi = "https://api.coingecko.com/api/v3/coins/" +selectedCoin;
    getCoinInfo();
    main();  
})

var binancecoin = document.getElementById('binancecoin')
binancecoin.addEventListener('click',function(){
    selectedCoin  = 'binancecoin';
    coinApi = "https://api.coingecko.com/api/v3/coins/" +selectedCoin;
    getCoinInfo();
    main();  
})

var binance_usd = document.getElementById('binance-usd')
binance_usd.addEventListener('click',function(){
    selectedCoin = 'binance-usd';
    coinApi = "https://api.coingecko.com/api/v3/coins/" +selectedCoin;
    getCoinInfo();
    main();   
})

var ripple = document.getElementById('ripple')
ripple.addEventListener('click',function(){
    selectedCoin = 'ripple';
    coinApi = "https://api.coingecko.com/api/v3/coins/" +selectedCoin;
    getCoinInfo();
    main();  
})

function main() {
    fetch(
        "https://api.coingecko.com/api/v3/coins/" +selectedCoin +"/market_chart?vs_currency="+currency+"&days=" + duration
      )
        .then((response) => response.json())
        .then((data) => {
          let result = renderPrice(data.prices);
          const { dayList, pricesList } = result;
          show({ dayList, pricesList });
        })
        .catch((error) => {
          console.error("Error:", error);
        });

        const renderPrice = (list) => {
        let dayList = [];
        let pricesList = [];
        if(duration === 1) {
            list.forEach((item) => {
                dayList = [...dayList, getHours(item[0])];
                pricesList = [...pricesList, item[1]];
              });
        }
        else{
            list.forEach((item) => {
                dayList = [...dayList, getDayMonthYear(item[0])];
                pricesList = [...pricesList, item[1]];
              });
        }
        return {
          dayList,
          pricesList,
        };
      };    
}

const getHours = (timestampt) => {
    const result = new Date(timestampt);
    return result.getHours() > 12
    ? `${result.getHours() - 12}:${result.getMinutes()} PM`
    : `${result.getHours()}:${result.getMinutes()} AM`;
}
const getDayMonthYear = (timestampt) => {
    const result = new Date(timestampt);
    const year = result.getFullYear();
    const month = ("0" + (result.getMonth() + 1)).slice(-2);
    const day = result.getDate();
    return `${day}/${month}/${year}`;
  };
  
  const chart = ({ dayList: dayList, pricesList: pricesList }) => {
    
  };
  const show = ({ dayList: dayList, pricesList: pricesList }) => {
    const labels = dayList;

    const data = {
      labels: labels,
      datasets: [
        {
          label: label,
          backgroundColor: "transparent",
          borderColor: "#EFFF00 ",
          data: pricesList,
          pointRadius: 0,
          borderWidth: 3,
          pointBorderColor: '#EFFF00',
          pointBackgroundColor: '#EFFF00',
          pointHoverBackgroundColor: '#EFFF00',
          pointHoverBorderColor: '#EFFF00',
        },
      ],
    };
  
    const config = {
      type: "line",
      data: data,
      options: {
        hover: {
            intersect: false,
        }
      },
    };
  
    document.getElementById("viewChart").innerHTML =
      '<canvas id="myChart"></canvas>';
  
    const myChart = new Chart(document.getElementById("myChart"), config);
};

$('.btn').on('click', function() {
    $('.btn').removeClass('clicked');
    $(this).addClass('clicked');
 });


//duration-piker
var duration;
var one_day = document.getElementById('1day');
var month = document.getElementById('30days');
var three_months = document.getElementById('90days');
var year = document.getElementById('365days');

one_day.addEventListener('click', function(){  
    duration = 1;
    day =1;
    label = 'Price ( Pass ' + day + ' Day) in '+ currency.toLocaleUpperCase();
    $("canvas#myChart").remove();
    main();
})

month.addEventListener('click',function(){
    duration = 30;
    day = 30;
    label = 'Price ( Pass ' + day +' Days) in ' + currency.toLocaleUpperCase();

    $("canvas#myChart").remove();
    main();
})

three_months.addEventListener('click',function(){
    duration = 90;
    day = 90;
    label = 'Price ( Pass ' + day + ' Days) in ' + currency.toLocaleUpperCase();
    $("canvas#myChart").remove();
    main();
})

year.addEventListener('click',function(){
    duration = 365;
    day = 135;
    label = 'Price ( Pass ' + day + ' Days) in ' + currency.toLocaleUpperCase();
    $("canvas#myChart").remove();
    main();
})