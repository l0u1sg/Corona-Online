const axios = require("axios");
const Swal = require("sweetalert2");

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

Swal.fire({
  title: "Vous êtes sur une bêta",
  text: "Des bugs peuvent être rencontrés",
  icon: "warning",
  confirmButtonText: "OK",
});
