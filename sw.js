// console.log('service worker is inside of switch.js');

// install service worker

self.addEventListener("install", (evt) => {
  console.log("service worker has been installed");
});

//activate event

self.addEventListener("activate", (evt) => {
  console.log("service worker has been activated");
});

// fetch event 1:21:00
self.addEventListener("fetch", (evt) => {
  console.log(evt);
});
