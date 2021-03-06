function loadScript(src, callback) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));
  
    document.head.append(script);
  })
  
}

let promise = loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js');
promise.then(
  script => console.log(script),
  error => console.log(error)
)