const axios = require("axios");
const Swal = require("sweetalert2");

function fetchData() {
  axios.get("https://api.covid19api.com/summary").then((res) => {
    console.log(res.data.Global);
    const newConfirmedGlobal = res.data.Global.NewConfirmed;
    const newDeathsGlobal = res.data.Global.NewDeaths;
    const newRecoveredGlobal = res.data.Global.NewRecovered;
    const newConfirmedFrance = res.data.Countries[59].NewConfirmed;
    const newDeathsFrance = res.data.Countries[59].NewDeaths;
    const newRecoveredFrance = res.data.Countries[59].NewRecovered;
    document.getElementById("totalCase").innerHTML =
      "Nous avons " +
      newConfirmedGlobal +
      " nouveaux cas dans le monde par rapport à hier";
    document.getElementById("newDeaths").innerHTML =
      "Nous avons " +
      newDeathsGlobal +
      " nouveaux décès dans le monde par rapport à hier";
    document.getElementById("newRecovered").innerHTML =
      "Nous avons " +
      newRecoveredGlobal +
      " nouvelles personnes sauvées dans le monde par rapport à hier";
  });
}

fetchData();

Swal.fire({
  title: "Vous êtes sur une bêta",
  text: "Des bugs peuvent être rencontrés",
  icon: "warning",
  confirmButtonText: "OK",
});
