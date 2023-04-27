const header1 = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header1.classList.add('header-scrolled')
    }
})


function donateChangeCurrency() {
    var selectionObj = document.getElementById('donate_currency_code');
    var selection = selectionObj.value;
    var currencyObj = document.getElementById('donate_symbol_currency');
    if (currencyObj) {
        var currencySymbols = { 'INR': '₹', 'CAD': '$', 'USD': '$', 'GBP': '&pound;', 'AUD': '$', 'JPY': '&yen;', 'EUR': '&euro;', 'CHF': 'CHF', 'CZK': 'CZK', 'DKK': 'DKK', 'HKD': '$', 'HUF': 'HUF', 'NOK': 'NOK', 'NZD': '$', 'PLN': 'PLN', 'SEK': 'SEK', 'SGD': '$' };
        var currencySymbol = currencySymbols[selection];
        currencyObj.innerHTML = currencySymbol;
    }
}
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});