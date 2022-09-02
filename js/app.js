// check if sw is supported 
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js') // this is a promise it may or may not return something , it will take time to process 
    .then((reg) => console.log('sw is registerd',reg))
    .catch((err) => console.log('sw is not registerd', err))
}