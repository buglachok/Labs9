'use strict'

function openWindow(dog) {
    let window = document.getElementById("window");
    let dogImage = document.getElementById("dog-img");
    let dogName = document.getElementById("dog-name");
    let dogSex = document.getElementById("dog-sex");
    let dogAge = document.getElementById("dog-age");
    let dogPersonality = document.getElementById("dog-personality");

    dogImage.src = 'https://usersdogs.dmytrominochkin.cloud' + dog.dogImage;
    dogName.textContent = dog.title;
    dogSex.textContent = dog.sex;
    dogAge.textContent = dog.age;
    dogPersonality.textContent = dog.description;

    window.style.display = "block";
}
function closeWindow() {
    let window = document.getElementById('window');
    window.style.display = 'none';
}

const getDogs = async function () {
    const dogs = await fetch('https://usersdogs.dmytrominochkin.cloud/dogs')
    if (!dogs.ok) throw new Error('Something went wrong')
    return await dogs.json()
}

let mainContainer = document.getElementById('main');

getDogs()
    .then(dogsData => {
        dogsData.forEach(function (dog) {
            let dogContainer = document.createElement('div');
            dogContainer.classList.add('container');
            dogContainer.onclick = function () {
                openWindow(dog);
            };

            let imgContainer = document.createElement('div');
            imgContainer.classList.add('img-centring');
            let dogImg = document.createElement('img');
            dogImg.src = 'https://usersdogs.dmytrominochkin.cloud' + dog.dogImage;
            dogImg.classList.add('icon');
            imgContainer.appendChild(dogImg);

            let shortInfoContainer = document.createElement('div');
            shortInfoContainer.classList.add('short-info');

            let dogName = document.createElement('div');
            dogName.classList.add('name');
            dogName.textContent = dog.title;

            let dogSex = document.createElement('div');
            dogSex.classList.add('sex');
            dogSex.textContent = dog.sex;

            shortInfoContainer.appendChild(dogName);
            shortInfoContainer.appendChild(dogSex);
            dogContainer.appendChild(imgContainer);
            dogContainer.appendChild(shortInfoContainer);
            mainContainer.appendChild(dogContainer);
        });
    })
    .catch(error => {
        console.error('Something went wrong');
    });
