function onClickAppLink() {
    document.getElementById('app-link').onclick(
        window.open("https://play.google.com/store/apps/details?id=com.byprasaanth.expenses_calculator", "_blank")
    );
}

function onClickLinkedInLink() {
    document.getElementById('linked-in-link').onclick(
        window.open("https://in.linkedin.com/in/prasaanth-s-333986229", "_blank")
    );
}

function onClickDownload() {
    document.getElementById('resume').onclick(
        window.open("E:\\academic lab\\presonal_dev\\portfolio\\pdf\\resume.pdf", "_blank")
    );
}

document.addEventListener("DOMContentLoaded", function() {
    var homeLink = document.getElementById("home_link");
    homeLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        history.replaceState(null, null, "#home"); 
    });
});