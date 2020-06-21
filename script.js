let wrapGallery = document.querySelector('.wraps-gallery');
let left = 0;
let arrowRigth = document.querySelector('.arrow-rigth');
let arrowLeft = document.querySelector('.arrow-left');

if (left === 0) {
    arrowLeft.classList.remove('arrow-left');
}

arrowLeft.addEventListener('click', function (e) {
    if (left !== 0) {
        wrapGallery.style.marginLeft = `${left += 180}px`;
        if (left === -900) {
            arrowRigth.classList.add('arrow-rigth');
        }
        if (left === 0) {
            arrowLeft.classList.remove('arrow-left');
        }
    }
});

arrowRigth.addEventListener('click', function (e) {

    if (left !== -1080) {
        wrapGallery.style.marginLeft = `${left -= 180}px`;
        // console.log(left);
        if (left === -1080) {
            arrowRigth.classList.remove('arrow-rigth');
        }
        if (left === -180) {
            arrowLeft.classList.add('arrow-left');
        }
    }
});

let wrapFoto = document.querySelectorAll('.wrap-foto')

wrapFoto.forEach(function (e) {
    e.onclick = funcFoto;
})

function funcFoto() {
    let fullSizeFoto = document.querySelector('.fullSizeFoto');
    if (this.id == 'foto1') {
        fullSizeFoto.style.backgroundImage = 'url(img-gallery/foto1.jpg)';
    } else if (this.id == 'foto2') {
        fullSizeFoto.style.backgroundImage = 'url(img-gallery/foto2.jpg)';
    } else if (this.id == 'foto3') {
        fullSizeFoto.style.backgroundImage = 'url(img-gallery/foto3.jpg)';
    } else if (this.id == 'foto4') {
        fullSizeFoto.style.backgroundImage = 'url(img-gallery/foto4.png)';
    } else if (this.id == 'foto5') {
        fullSizeFoto.style.backgroundImage = 'url(img-gallery/foto5.png)';
    } else if (this.id == 'foto6') {
        fullSizeFoto.style.backgroundImage = 'url(img-gallery/foto6.jpg)';
    } else if (this.id == 'foto7') {
        fullSizeFoto.style.backgroundImage = 'url(img-gallery/foto7.jpg)';
    } else if (this.id == 'foto8') {
        fullSizeFoto.style.backgroundImage = 'url(img-gallery/foto8.png)';
    } else if (this.id == 'foto9') {
        fullSizeFoto.style.backgroundImage = 'url(img-gallery/foto9.png)';
    } else if (this.id == 'foto10') {
        fullSizeFoto.style.backgroundImage = 'url(img-gallery/foto10.png)';
    }
};





