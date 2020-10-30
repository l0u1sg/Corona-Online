const axios = require("axios");

function fetchData() {
  axios.get("https://api.covid19api.com/summary").then((res) => {
    console.log(res.data.Global);
    const newConfirmed = res.data.Global.NewConfirmed;
    const newDeaths = res.data.Global.NewDeaths;
    const newRecovered = res.data.Global.NewRecovered;
    document.getElementById("totalCase").innerHTML =
      "Nous avons " +
      newConfirmed +
      " nouveaux cas dans le monde par rapport à hier";
    document.getElementById("newDeaths").innerHTML =
      "Nous avons " +
      newDeaths +
      " nouveaux décès dans le monde par rapport à hier";
    document.getElementById("newRecovered").innerHTML =
      "Nous avons " +
      newRecovered +
      " nouvelles personnes sauvées dans le monde par rapport à hier";
  });
}

fetchData();
