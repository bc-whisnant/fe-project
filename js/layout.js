
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


