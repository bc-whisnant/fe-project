
// the following javascript listens for a click and then shows or hides section 1 dropdown
// if the display is none then the contents are showed - if display is block contents are hidden


document.getElementById('section1-click').addEventListener('click', showAndHide);

function showAndHide() {

    var sectionOne = document.getElementById('section-1-container');

    if (sectionOne.style.display === "none") {
        sectionOne.style.display = "block";
    } else {
        sectionOne.style.display = "none";
    }

}

document.getElementById('section2-click').addEventListener('click', showAndHide);

function showAndHide() {

    var sectionTwo = document.getElementById('section-2-container');

    if (sectionTwo.style.display === "none") {
        sectionTwo.style.display = "block";
    } else {
        sectionTwo.style.display = "none";
    }

}


