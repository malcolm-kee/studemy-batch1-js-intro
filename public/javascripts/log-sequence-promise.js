function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

console.log('Start');

(async function () {
  await wait(1000);
  console.log('1 sec passed');
  await wait(2000);
  console.log('another 2 sec passed');
  await wait(2000);
  console.log('End');
})();
