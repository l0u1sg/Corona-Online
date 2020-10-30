const axios = require("axios");

function fetchData() {
  axios.get("https://api.covid19api.com/summary").then((res) => {
    console.log(res.data.Global);
  });
}

fetchData();
