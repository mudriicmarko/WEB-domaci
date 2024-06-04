const mainImage = document.getElementById('mainImage');
const imageDescription = document.getElementById('imageDescription');
const thumbnailsContainer = document.querySelector('.thumbnail-images');

// Функција за учитавање описа слике
function loadImageDescription(imageName) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `images/${imageName}.txt`, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            imageDescription.textContent = xhr.responseText;
        }
    };
    xhr.send();
}

// Функција за приказ слике и описа
function displayImage(imageName) {
    mainImage.src = `images/${imageName}.jpg`;
    loadImageDescription(imageName);
}

// Функција за генерисање минијатурних слика
function createThumbnails() {
    for (let i = 1; i <= 10; i++) {
        const thumbnail = document.createElement('img');
        thumbnail.src = `images/slika${i}.jpg`;
        thumbnail.alt = `Слика ${i}`;
        thumbnail.addEventListener('click', () => displayImage(`slika${i}`));
        thumbnailsContainer.appendChild(thumbnail);
    }
}

// Покретање иницијализације
createThumbnails();
displayImage('slika1');