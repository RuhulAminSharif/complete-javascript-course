"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
      <img class="country__img" src=" ${data.flag} " />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region"> ${data.region} </h4>
        <p class="country__row"><span>👫</span> ${(
          +data.population / 1000000
        ).toFixed(1)}M People </p>
        <p class="country__row"><span>🗣️</span> ${data.languages[0].name} </p>
        <p class="country__row"><span>💰</span> ${data.currencies[0].name} </p>
      </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

/*
///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    // console.log(data);

    const html = `
    <article class="country">
        <img class="country__img" src=" ${data.flag} " />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region"> ${data.region} </h4>
          <p class="country__row"><span>👫</span> ${(
            +data.population / 1000000
          ).toFixed(1)}M People </p>
          <p class="country__row"><span>🗣️</span> ${data.languages[0].name} </p>
          <p class="country__row"><span>💰</span> ${
            data.currencies[0].name
          } </p>
        </div>
      </article>
    `;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData("bangladesh");
getCountryData("portugal");
getCountryData("usa");

*/

/*
///////////////////////////////////////
// Welcome to Callback Hell

const getCountryAndNeighbour = function (country) {
  // AJAX call caountry 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    // console.log(data);

    // Render country 1
    renderCountry(data);

    // GEt neighbour country
    const [neighbour] = data.borders;
    if (!neighbour) return;

    // AJAX call caountry 2
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      const data2 = JSON.parse(this.responseText);
      renderCountry(data2, "neighbour");
    });
  });
};

getCountryAndNeighbour("bangladesh");

setTimeout(function () {
  console.log("1 second passed");
  setTimeout(function () {
    console.log("2 second passed");
    setTimeout(function () {
      console.log("3 second passed");
      setTimeout(function () {
        console.log("4 second passed");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

*/

/*
///////////////////////////////////////
// Consuming Promises

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      // console.log(response);
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      renderCountry(data[0]); // [data] = data;
    });
};

getCountryData("bangladesh");

*/

///////////////////////////////////////
// Chaining Promises
// Handling Rejected Promises
// Throwing Errors Manually

/*
const getCountryAndNeighbour = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(
      function (response) {
        // console.log(response);
        if (response.ok === false) {
          throw new Error(`Country not found (${response.status})`);
        }
        return response.json();
      }
      // function (err) {
      //   alert(err);
      // }
    )
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);

      // GEt neighbour country
      const neighbour = data[0]?.borders?.[0];
      if (!neighbour) return;
      console.log(neighbour);
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(
      function (response) {
        if (response.ok === false) {
          throw new Error(`Country not found (${response.status})`);
        }
        return response.json();
      }
      // function (err) {
      //   alert(err);
      // }
    )
    .then(function (data2) {
      renderCountry(data2, "neighbour");
    })
    .catch(function (err) {
      // alert(err);
      // console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(function () {
      countriesContainer.style.opacity = 1;
    });
};
*/

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then(function (response) {
    if (response.ok === false) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
};

const getCountryAndNeighbour = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, "Country Not Found")
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);

      // GEt neighbour country
      const neighbour = data[0]?.borders?.[0];
      if (!neighbour) {
        throw new Error("No neighbour found!");
      }
      console.log(neighbour);
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        "Country Not Found"
      );
    })
    .then(function (data2) {
      renderCountry(data2, "neighbour");
    })
    .catch(function (err) {
      // alert(err);
      // console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(function () {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  // getCountryAndNeighbour("bangladesh");
});
getCountryAndNeighbour("bangladesh");
getCountryAndNeighbour("australia");
