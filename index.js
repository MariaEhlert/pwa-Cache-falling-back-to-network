if ( "serviceWorker" in navigator) {

    navigator.serviceWorker.register("sw.js")

    .then(registration => {
        console.log('sw registered');
        console.log(registration);
    }).catch(error => {
        console.log('sw reg fail');
        console.log(error);
    })
} 

fetch('https://dog.ceo/api/breeds/image/random/1')
.then(response => response.json())
.then(data => {
    (data && data.message.map((item) =>{
        getData(item);
    }))
})
.catch(err => {
    window.location.href = "https://mariaehlert.github.io/pwa-Cache-falling-back-to-network/info.html";
    //indhold ved offline (i stedet for api billeder)
    const wrapper = document.querySelector('.dogImage');
    const offline = document.createElement('h2');
    offline.innerHTML = 'Du er offline!';
    wrapper.append(offline);
    const img = document.createElement('img'); 
    img.setAttribute('src', './assets/images/n02092339_7210.jpg');
    wrapper.append(img);
    const message = document.createElement('h3');
    message.innerText ='Opret internet for at se et nyt billede';
    wrapper.append(message);
})

const getData = (dogImg) => {
        const wrapper = document.querySelector('.dogImage');
        const img = document.createElement('img');
        img.setAttribute('src', dogImg);
        wrapper.append(img);

}

