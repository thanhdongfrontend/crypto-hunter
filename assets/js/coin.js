var coinApi;
var coinInfoImgLg = document.getElementById('coinInfoImgLg')
function getCoinInfo () {
    fetch(coinApi)
    .then((response) => response.json())
    .then((data) => {
        const { market_cap_rank, description, market_data, name} = data;
        render (market_cap_rank, description.en, market_data.current_price.usd, market_data.market_cap.usd,name);    
    })
    .catch((error) => {
        console.log("Error:",error);
    })
}
function render (marketCapRank, des, curPrice, marketCap, name) {
    const formater = new Intl.NumberFormat('en-IN',{ maximumSignificantDigits: 13 });
    document.getElementById('coinDes').innerHTML = des.split('. ')[0];
    document.getElementById('coinName').innerHTML = name;
    document.getElementById('rank-label').innerHTML = 'Rank:';
    document.getElementById('coin-rank').innerHTML = marketCapRank.toString();
    document.getElementById('currentPrice-label').innerHTML = "Currrent Price:";
    document.getElementById('currentPrice').innerHTML = "$ " + formater.format(curPrice).toString();
    document.getElementById('marketCap-label').innerHTML = 'Market Cap:'
    document.getElementById('marketCap').innerHTML = "$ " + marketCap.toLocaleString();
}
getCoinInfo();
