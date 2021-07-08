self.addEventListener("install", e=> {
    e.waitUntil(
        caches.open("static").then(cache=>
            {
                return cache.addAll(["./istoria.html","./index.html","./contact.html","./registration.html",
                 "./Mundial.jpg","./first.jpg","./Qatar-mundial.jpg","./trophy.jpg",
                "./Maradona.jpg","./Mbappe.jpg","./ball.png","./green.jpg","./message.png","./icon.png","./reg.png"
            ])
            })
    );
        });

       
        self.addEventListener("fetch",e =>
{
    e.respondWith(
        caches.match(e.request).then( response =>
            {
                return response || fetch(e.request);
            })
        
    );
    
});