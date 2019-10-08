const sliderItems = [{
        imageLink: "https://res.cloudinary.com/john-pels/image/upload/v1568628373/team-rebel/Home-01/Ellipse.png",
        description: "Lorem ipsum is placeholder text commonly  <br> text commonly",
        role: "Kerry Johnes — Some Company"
    },
    {
        imageLink: "https://res.cloudinary.com/john-pels/image/upload/v1568628407/team-rebel/Home-02/Ellipse_big.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br> text commonly",
        role: "Seun  Agbeye — Andela"
    },
    {
        imageLink: "https://res.cloudinary.com/john-pels/image/upload/v1568628443/team-rebel/Home-03/Ellipse.png",
        description: "sed do eiusmod tempor incididunt ut labore et dolore  <br> text commonly",
        role: "Chidi Okoye — Node.js "
    },
    {
        imageLink: "https://res.cloudinary.com/john-pels/image/upload/v1568628208/team-rebel/About-01/Ellipse.png",
        description: "magna aliqua. Ut enim ad minim veniam, quis nostrud  <br> text commonly",
        role: "Olufemi O.  — Front-End Dev "
    },
    {
        imageLink: "https://res.cloudinary.com/john-pels/image/upload/v1568628579/team-rebel/Team-02/Team-4.png",
        description: "exercitation ullamco laboris nisi ut aliquip ex ea  <br> text commonly",
        role: "Arafah O.  —  Front-End Dev"
    },
    {
        imageLink: "https://res.cloudinary.com/john-pels/image/upload/v1568628407/team-rebel/Home-02/Ellipse_big.png",
        description: "commodo consequat. Duis aute irure dolor in  <br> text commonly",
        role: "John O.  —  Front-End Dev"
    },
    {
        imageLink: "https://res.cloudinary.com/john-pels/image/upload/v1568628286/team-rebel/About-04/Ellipse.png",
        description: "reprehenderit in voluptate velit esse cillum dolore eu  <br> text commonly",
        role: "Olanrewaju O.  —  Front-End Dev"
    },
    {
        imageLink: "https://res.cloudinary.com/john-pels/image/upload/v1568628478/team-rebel/Service-01/Ellipse.png",
        description: "reprehenderit in voluptate velit esse cillum dolore eu  <br> text commonly",
        role: "Zainab A.  —  Front-End Dev"
    },
    {
        imageLink: "https://res.cloudinary.com/john-pels/image/upload/v1568628580/team-rebel/Team-02/Team-3.png",
        description: "non proident, sunt in culpa qui officia deserunt mollit <br>  text commonly",
        role: "Muhktar L.  —  Front-End Dev"
    },
    {
        imageLink: "https://res.cloudinary.com/john-pels/image/upload/v1568628550/team-rebel/Team-01/Team-3.png",
        description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text  <br> text commonly",
        role: "Samuel N.  —  Front-End Dev"
    },
    {
        imageLink: "https://res.cloudinary.com/john-pels/image/upload/v1568628549/team-rebel/Team-01/Team-1.png",
        description: "used in laying out print, graphic or web designs. The passage is <br>  text commonly",
        role: "Idris A.  —  Front-End Dev"
    },
    {
        imageLink: "https://res.cloudinary.com/john-pels/image/upload/v1568628548/team-rebel/Team-01/Team-5.png",
        description: "attributed to an unknown typesetter in the 15th century who is <br>  text commonly",
        role: "Tunde A.  —  Back-End Dev"
    }
]


let arrowRight = document.querySelector('.fa-arrow-right');
let arrowLeft = document.querySelector('.fa-arrow-left');
let imageDiv = document.querySelector('.card-center-image');
let description = document.querySelector('.card__photos-h3');
let role = document.querySelector('.card__photos-tagline');
let currentImageIndex = 0;



const onChangeRight = () => {

    currentImageIndex += 1;

    let condition = (currentImageIndex < sliderItems.length) ?
        (imageDiv.classList.add('imageChange'),
            imageDiv.src = sliderItems[currentImageIndex].imageLink,
            description.innerHTML = sliderItems[currentImageIndex].description,
            role.classList.add('secondary'),
            role.innerHTML = sliderItems[currentImageIndex].role) :
        (currentImageIndex = 0);
    return condition;

}

const onChangeLeft = () => {
    if (currentImageIndex > 0) {
        currentImageIndex -= 1;
        let condition = (currentImageIndex < sliderItems.length) ?
            (imageDiv.src = sliderItems[currentImageIndex].imageLink,
                description.innerHTML = sliderItems[currentImageIndex].description,
                role.innerHTML = sliderItems[currentImageIndex].role) :
            null;
        return condition;
    } else {
        currentImageIndex = 12;
        currentImageIndex -= 1;
        let condition = (currentImageIndex < sliderItems.length) ?
            (imageDiv.src = sliderItems[currentImageIndex].imageLink,
                description.innerHTML = sliderItems[currentImageIndex].description,
                role.classList.add('secondary'),
                role.innerHTML = sliderItems[currentImageIndex].role) :
            null;
        return condition;
    }


}

arrowRight.addEventListener('click', onChangeRight);
arrowLeft.addEventListener('click', onChangeLeft);