const imageLinks = [
    "https://res.cloudinary.com/john-pels/image/upload/v1568628373/team-rebel/Home-01/Ellipse.png",
    "https://res.cloudinary.com/john-pels/image/upload/v1568628407/team-rebel/Home-02/Ellipse_big.png",
    "https://res.cloudinary.com/john-pels/image/upload/v1568628443/team-rebel/Home-03/Ellipse.png",
    "https://res.cloudinary.com/john-pels/image/upload/v1568628208/team-rebel/About-01/Ellipse.png",
    "https://res.cloudinary.com/john-pels/image/upload/v1568628579/team-rebel/Team-02/Team-4.png",
    "https://res.cloudinary.com/john-pels/image/upload/v1568628407/team-rebel/Home-02/Ellipse_big.png",
    "https://res.cloudinary.com/john-pels/image/upload/v1568628286/team-rebel/About-04/Ellipse.png",
    "https://res.cloudinary.com/john-pels/image/upload/v1568628478/team-rebel/Service-01/Ellipse.png",
    "https://res.cloudinary.com/john-pels/image/upload/v1568628580/team-rebel/Team-02/Team-3.png",
    "https://res.cloudinary.com/john-pels/image/upload/v1568628550/team-rebel/Team-01/Team-3.png",
    "https://res.cloudinary.com/john-pels/image/upload/v1568628549/team-rebel/Team-01/Team-1.png",
    "https://res.cloudinary.com/john-pels/image/upload/v1568628548/team-rebel/Team-01/Team-5.png"
];
const h3Texts = [
    'Lorem ipsum is placeholder text commonly  <br> text commonly',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br> text commonly',
    'sed do eiusmod tempor incididunt ut labore et dolore  <br> text commonly',
    'magna aliqua. Ut enim ad minim veniam, quis nostrud  <br> text commonly',
    'exercitation ullamco laboris nisi ut aliquip ex ea  <br> text commonly',
    'commodo consequat. Duis aute irure dolor in  <br> text commonly',
    'reprehenderit in voluptate velit esse cillum dolore eu  <br> text commonly',
    'fugiat nulla pariatur. Excepteur sint occaecat cupidatat  <br> text commonly',
    'non proident, sunt in culpa qui officia deserunt mollit <br>  text commonly',
    'Lorem ipsum, or lipsum as it is sometimes known, is dummy text  <br> text commonly',
    'used in laying out print, graphic or web designs. The passage is <br>  text commonly',
    'attributed to an unknown typesetter in the 15th century who is <br>  text commonly'
]
const tagline = [
    'Kerry Johnes — Some Company',
    'Seun  Agbeye — Andela ',
    'Chidi Okoye — Node.js ',
    'Olufemi O.  — Front-End Dev',
    'Arafah O.  —  Front-End Dev',
    'John O.  —  Front-End Dev',
    'Olanrewaju O.  —  Front-End Dev',
    'Zainab A.  —  Front-End Dev',
    'Muhktar L.  —  Front-End Dev',
    'Samuel N.  —  Front-End Dev',
    'Idris A.  —  Front-End Dev',
    'Tunde A.  —  Back-End Dev'
]

let arrowRight = document.querySelector('.fa-arrow-right');
let arrowLeft = document.querySelector('.fa-arrow-left');
let imageDiv = document.querySelector('.card-center-image');
let cardPhotosH3 = document.querySelector('.card__photos-h3');
let cardPhotosTagline = document.querySelector('.card__photos-tagline');
let currentImageIndex = 0;
let currentH3 = 0;
let currentTagline = 0


const onChangeRight = () => {

    currentImageIndex += 1;
    currentH3 += 1;
    currentTagline += 1;
    /* This is a conditonal statement for next arrow that checks if the currentImageIndex
        (1 and above) is less than the length of the imageLinks(12), if true, then it changes the image, heading h3 and the names, and if false, then it returns null
        */
    let condition = (currentImageIndex < imageLinks.length) ?
        (imageDiv.classList.add('imageChange'),
            imageDiv.src = imageLinks[currentImageIndex],
            cardPhotosH3.innerHTML = h3Texts[currentH3],
            cardPhotosTagline.classList.add('secondary'),
            cardPhotosTagline.innerHTML = tagline[currentTagline]) :
        (currentImageIndex = 0, currentH3 = 0, currentTagline = 0);
    return condition;

}

const onChangeLeft = () => {
    if (currentImageIndex > 0) {
        currentImageIndex -= 1;
        currentH3 -= 1;
        currentTagline -= 1;
        /* This is a conditonal statement for the previous arrow that checks if the currentImageIndex
        (1 and above) is less than the length of the imageLinks(12), if true, then it changes the image, heading h3 and the names, and if false, then it returns null
        */
        let condition = (currentImageIndex < imageLinks.length) ?
            (imageDiv.src = imageLinks[currentImageIndex],
                cardPhotosH3.innerHTML = h3Texts[currentH3],
                cardPhotosTagline.innerHTML = tagline[currentTagline]) :
            null;
        return condition;
    } else {
        currentImageIndex = 12;
        currentH3 = 12;
        currentTagline = 12;

        currentImageIndex -= 1;
        currentH3 -= 1;
        currentTagline -= 1;
        /* This is a conditonal statement for previous arrow when on 0 to returns the last imageLinks(12) , if true, then it changes the image, heading h3 and the names, and if false, then it returns null
         */
        let condition = (currentImageIndex < imageLinks.length) ?
            (imageDiv.src = imageLinks[currentImageIndex],
                cardPhotosH3.innerHTML = h3Texts[currentH3],
                cardPhotosTagline.classList.add('secondary'),
                cardPhotosTagline.innerHTML = tagline[currentTagline]) :
            null;
        return condition;
    }


}

arrowRight.addEventListener('click', onChangeRight);
arrowLeft.addEventListener('click', onChangeLeft);