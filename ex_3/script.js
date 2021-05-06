function delay(ms) {
  let promise = new Promise ( resolve => setTimeout(resolve, ms));
  return promise;
}


let ms = 1000;

delay(ms).then(() => alert(`выполнилось через ${ms} секунды`));