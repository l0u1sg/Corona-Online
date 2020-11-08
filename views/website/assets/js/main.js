const axios = require("axios")


axios.get("https://corona.lmao.ninja/v2/all").then((res) => {
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }
    const totalCase = formatNumber(res.data.cases);
    const totalDeaths = formatNumber(res.data.deaths);
    const totalRecoveries = formatNumber(res.data.recovered);
    const activeCases = formatNumber(res.data.active);
    const todayCase = formatNumber(res.data.todayCases)
    const todayDeaths = formatNumber(res.data.todayDeaths)
    const todayRecovered = formatNumber(res.data.todayRecovered)
    document.getElementById("totalCaseTxt").innerHTML = totalCase;
    document.getElementById("totalDeathsTxt").innerHTML = totalDeaths;
    document.getElementById("totalRecoveriesTxt").innerHTML = totalRecoveries;
    document.getElementById("activeCasesTxt").innerHTML = activeCases;
    document.getElementById("todayCases").innerHTML = "+ " + todayCase;
    document.getElementById("todayDeaths").innerHTML = "+ " + todayDeaths;
    document.getElementById("todayRecovered").innerHTML = "+ " + todayRecovered;
});