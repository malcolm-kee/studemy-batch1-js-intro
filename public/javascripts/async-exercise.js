/* eslint-disable */

// TODO: rewrite the following code using Promise instead of callback
function getServerTime(callback) {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open('HEAD', window.location.href);
  xmlHttp.setRequestHeader('Content-Type', 'text/html');
  xmlHttp.addEventListener('load', () => {
    callback(xmlHttp.getResponseHeader('Date'));
  });
  xmlHttp.send('');
}

getServerTime((serverDate) => console.log(`Server date is ${serverDate}`));

function getServerTimeV2() {
  return new Promise((resolve) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('HEAD', window.location.href);
    xmlHttp.setRequestHeader('Content-Type', 'text/html');
    xmlHttp.addEventListener('load', () => {
      resolve(xmlHttp.getResponseHeader('Date'));
    });
    xmlHttp.send('');
  });
}

getServerTimeV2().then((serverDate) =>
  console.log(`Server date with Promise is ${serverDate}`)
);

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/

// TODO: rewrite the following code using async function
function wait(second) {
  return new Promise((resolve) => setTimeout(resolve, second * 1000));
}

async function fetchPricingData() {
  const res = await fetch('/api/pricing');
  return res.json();
}

// function fetchDataThenWait() {
//   return fetchPricingData().then((pricingData) => {
//     return wait(1).then(() => pricingData);
//   });
// }

async function fetchDataThenWait() {
  const pricingData = await fetchPricingData();
  await wait(1);
  return pricingData;
}
