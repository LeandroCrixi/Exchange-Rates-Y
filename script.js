async function getData() {
    const url = "https://api.hgbrasil.com/finance?format=json-cors&key=5dabf770";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        const usdValue = json.results.currencies.USD.buy
        const eurValue = json.results.currencies.EUR.buy

        // function to set the correct currency value
        const brlCurrency = (locale, curr, value)=>{
            const result = new Intl.NumberFormat(locale, { style: 'currency', currency: curr }).format(value)
            return result
        }

        const today = new Date();
        const formattedDate = new Intl.DateTimeFormat('en-GB').format(today);
        console.log(formattedDate);

        document.querySelector('.currency-list h2').innerHTML += formattedDate

        //Setting the currency name and value
        document.querySelector('.usd-brl .initial').innerHTML = 'Conversion rate: ' + brlCurrency('pt-BR', 'BRL', usdValue)
        document.querySelector('.brl-usd .initial').innerHTML = 'Conversion rate: ' + brlCurrency('en-US', 'USD', 1/usdValue)
        document.querySelector('.eur-brl .initial').innerHTML = 'Conversion rate: ' + brlCurrency('pt-BR', 'BRL', eurValue)
        document.querySelector('.brl-eur .initial').innerHTML = 'Conversion rate: ' + brlCurrency('de-DE', 'EUR', 1/eurValue)
        

        //Setting the result of the conversion
        //.usd-brl
        document.querySelector('.result').innerHTML = brlCurrency('pt-BR', 'BRL', 1*usdValue)
        document.querySelector('.usd-brl input').addEventListener('input', function(event) {
            let value = event.target.value
            let usdResult = document.querySelector('.usd-brl .result')
            usdResult.innerHTML = brlCurrency('pt-BR', 'BRL', value * usdValue)
        })
        //.brl-usd
        document.querySelector('.brl-usd .result').innerHTML = brlCurrency('en-US', 'USD', 1/usdValue)
        document.querySelector('.brl-usd input').addEventListener('input', function(event) {
            let value = event.target.value
            let usdResult = document.querySelector('.brl-usd .result')
            usdResult.innerHTML = brlCurrency('en-US', 'USD', value / usdValue)
        })
        //.eur-brl
        document.querySelector('.eur-brl .result').innerHTML = brlCurrency('pt-BR', 'BRL', 1 * eurValue)
        document.querySelector('.eur-brl input').addEventListener('input', function(event) {
            let value = event.target.value
            let eurResult = document.querySelector('.eur-brl .result')
            eurResult.innerHTML = brlCurrency('pt-BR', 'BRL', value * eurValue)
        })
        //.brl-eur
        document.querySelector('.brl-eur .result').innerHTML = brlCurrency('de-DE', 'EUR', 1 / eurValue)
        document.querySelector('.brl-eur input').addEventListener('input', function(event) {
            let value = event.target.value
            let eurResult = document.querySelector('.brl-eur .result')
            eurResult.innerHTML = brlCurrency('de-DE', 'EUR', value / eurValue)
        })
    } catch (error) {
      console.error(error.message);
    }
  }

  getData()
