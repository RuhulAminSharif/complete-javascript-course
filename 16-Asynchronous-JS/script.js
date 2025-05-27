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

/*
///////////////////////////////////////
// Chaining Promises
// Handling Rejected Promises
// Throwing Errors Manually


// const getCountryAndNeighbour = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(
//       function (response) {
//         // console.log(response);
//         if (response.ok === false) {
//           throw new Error(`Country not found (${response.status})`);
//         }
//         return response.json();
//       }
//       // function (err) {
//       //   alert(err);
//       // }
//     )
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);

//       // GEt neighbour country
//       const neighbour = data[0]?.borders?.[0];
//       if (!neighbour) return;
//       console.log(neighbour);
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(
//       function (response) {
//         if (response.ok === false) {
//           throw new Error(`Country not found (${response.status})`);
//         }
//         return response.json();
//       }
//       // function (err) {
//       //   alert(err);
//       // }
//     )
//     .then(function (data2) {
//       renderCountry(data2, "neighbour");
//     })
//     .catch(function (err) {
//       // alert(err);
//       // console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(function () {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getJSON = function (url, errorMsg = "Something went wrong") {
//   return fetch(url).then(function (response) {
//     if (response.ok === false) {
//       throw new Error(`${errorMsg} (${response.status})`);
//     }
//     return response.json();
//   });
// };

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
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as 
  inputs a latitude value (lat) and a longitude value (lng)
    (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates.
  Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name.
  Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.
  The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381.
  Use the fetch API and promises to get the data.
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location.
  Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second.
    If you reload fast, you will get this error with code 403.
    This is an error with the request. Remember, fetch() does NOT reject the promise in this case.
    So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country.
  So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
/*
const whereAmI = function (latitude, longitude) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  )
    .then(function (response) {
      if (response.ok === false) {
        throw new Error(`Problem with geocoding ${response.status}`);
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const city = data.city;
      const country = data.countryName;
      const location = `You are in ${city}, ${country}`;
      console.log(location);
      return fetch(`https://restcountries.com/v2/name/${country}`);
    })
    .then(function (response) {
      if (response.ok === false) {
        throw new Error(`Country not found (${response.status})`);
      }
      return response.json();
    })
    .then(function (data2) {
      renderCountry(data2[0]);
    })
    .catch(function (err) {
      console.error(`${err.message}`);
    });
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
whereAmI(40.7127281, -74.0060152);

*/

/*
///////////////////////////////////////
// The Event Loop in Practice
console.log("Test Start");
setTimeout(() => {
  console.log("0 sec timer");
}, 0);
Promise.resolve("Resolved promise 1").then(function (response) {
  console.log(response);
});

Promise.resolve("Resolved promise 2").then(function (response) {
  for (let i = 0; i < 1000000000; i += 1) {}
  console.log(response);
});
console.log("Test End");

*/

/*
///////////////////////////////////////
// Building a Simple Promise
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery draw is happening");
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("You WIN");
    } else {
      reject(new Error("You lost your money"));
    }
  }, 2000);
});

lotteryPromise
  .then(function (response) {
    console.log(response);
  })
  .catch(function (err) {
    console.error(err);
  });

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(2)
  .then(() => {
    console.log("Waited for 2 seconds");
    return wait(1);
  })
  .then(() => {
    console.log("waited for 1 seocond");
  });

  Promise.resolve("abs").then((x) => console.log(x));
  Promise.reject(new Error("Problem")).then((x) => console.error(x));

*/

/*
///////////////////////////////////////
// Promisifying the Geolocation API
console.log("Getting position");

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = function () {
  getPosition()
    .then(function (position) {
      const { latitude, longitude } = position.coords;
      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
      );
    })
    .then(function (response) {
      if (response.ok === false) {
        throw new Error(`Problem with geocoding ${response.status}`);
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const city = data.city;
      const country = data.countryName;
      const location = `You are in ${city}, ${country}`;
      console.log(location);
      return fetch(`https://restcountries.com/v2/name/${country}`);
    })
    .then(function (response) {
      if (response.ok === false) {
        throw new Error(`Country not found (${response.status})`);
      }
      return response.json();
    })
    .then(function (data2) {
      renderCountry(data2[0]);
    })
    .catch(function (err) {
      console.error(`${err.message}`);
    });
};
btn.addEventListener("click", whereAmI);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own.
Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input.
This function returns a promise which creates a new image (use document.createElement('img'))
and sets the .src attribute to the provided image path.
When the image is done loading, append it to the DOM element with the 'images' class,
and resolve the promise. The fulfilled value should be the image element itself.
In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image
  (HINT: Use the image element returned by the createImage promise to hide the current image.
  You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab,
            otherwise images load too fast.

GOOD LUCK 😀
*/
/*
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};
let currentImg;
createImage("img/img-1.jpg")
  .then(function (img) {
    currentImg = img;
    console.log("Image 1 loaded");
    return wait(2);
  })
  .then(function () {
    currentImg.style.dispaly = "none";
    return createImage("img/img-2.jpg");
  })
  .then(function (img) {
    currentImg = img;
    console.log("Image 2 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
  })
  .catch((err) => console.error(err));
*/

///////////////////////////////////////
// Consuming Promises with Async/Await
// Error Handling With try...catch

// fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res))

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const position = await getPosition();
    const { latitude, longitude } = position.coords;

    // Reverse GeoCoding
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
    );
    if( resGeo.ok === false ) {
      throw new Error("Problem getting location data");
    }
    const dataGeo = await resGeo.json();
    // console.log(dataGeo);

    // Country Data
    const response = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.countryName}`
    );
    if ( response.ok === false) {
      throw new Error("Problem getting country data");
    }
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    renderCountry(data[0]);
  } catch (error) {
    console.error(error.message);
  }
};
whereAmI();
console.log("first");
