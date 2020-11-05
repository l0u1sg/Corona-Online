const axios = require("axios")


axios.get("https://corona.lmao.ninja/v2/all").then((res) => {
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }
    const totalCase = res.data.cases;
    const totalDeaths = res.data.deaths;
    const totalRecoveries = res.data.recovered;
    const activeCases = res.data.active;
    const totalCaseNb = formatNumber(totalCase)
    const totalDeathsNb = formatNumber(totalDeaths)
    const totalRecoveriesNb = formatNumber(totalRecoveries)
    const activeCasesNb = formatNumber(activeCases)
    // console.log(totalCase);
    // console.log(totalDeaths);
    // console.log(totalRecoveries);
    // console.log(activeCases);
    document.getElementById("totalCaseTxt").innerHTML = totalCaseNb;
    document.getElementById("totalDeathsTxt").innerHTML = totalDeathsNb;
    document.getElementById("totalRecoveriesTxt").innerHTML = totalRecoveriesNb;
    document.getElementById("activeCasesTxt").innerHTML = activeCasesNb;
});