if ( "serviceWorker" in navigator) {

    navigator.serviceWorker.register("sw.js")

    .then(registration => {
        console.log('sw registered');
        console.log(registration);
    }).catch(error => {
        console.log('sw reg fail');
        console.log(error);
    })
} else {
    const wrapper = document.querySelector('.dogImage');
    const img = document.createElement('img'); 
    img.setAttribute('src', './assets/images/n02092339_7210.jpg')
    wrapper.append(img);
    const message = document.createElement('h3');
    message.innerText ='Opret internet for at se flere billeder';
    wrapper.append(message);
}



fetch('https://dog.ceo/api/breeds/image/random/1')
.then(response => response.json())
.then(data => {
    (data && data.message.map((item) =>{
        getData(item);
    }))
})
.catch(err => console.error(err))

const getData = (dogImg) => {
        const wrapper = document.querySelector('.dogImage');
        const img = document.createElement('img');
        img.setAttribute('src', dogImg);
        wrapper.append(img);

}

