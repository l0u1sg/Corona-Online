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
      
      newConfirmedGlobal ;
    document.getElementById("newDeaths").innerHTML =
    
      newDeathsGlobal ;
    document.getElementById("newRecovered").innerHTML =
      
      newRecoveredGlobal ;
  });
}

fetchData();

Swal.fire({
  title: "Vous êtes sur une bêta",
  text: "Des bugs peuvent être rencontrés",
  icon: "warning",
  confirmButtonText: "OK",
});
