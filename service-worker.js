self.addEventListener("install",e=>{

e.waitUntil(

caches.open("ranking-cache").then(cache=>{

return cache.addAll([

"/",
"/index.html",
"/css/style.css"

])

})

)

})

self.addEventListener("fetch",e=>{

e.respondWith(

caches.match(e.request).then(resp=>{

return resp||fetch(e.request)

})

)

})
