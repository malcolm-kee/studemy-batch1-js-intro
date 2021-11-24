console.log('Start');

setTimeout(function () {
  console.log('1 sec passed.');

  setTimeout(function () {
    console.log('another 2 sec passed.');

    setTimeout(function () {
      console.log('End');
    }, 2000);
  }, 2000);
}, 1000);
