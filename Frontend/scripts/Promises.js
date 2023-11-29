const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomValue = Math.random();
      if (randomValue > 0.5) {
        resolve(randomValue);
      } else {
        reject(randomValue);
      }
    }, 2000);
  });
  
myPromise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

  console.log("Finish");