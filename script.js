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
        window.open("https://github.com/prasaanth11/Portfolio/blob/main/pdf/resume.pdf", "_blank")
    );

    var downloadLink = document.createAttribute("a");
    
    downloadLink.href = "https://github.com/prasaanth11/Portfolio/blob/main/pdf/resume.pdf";
    downloadLink.setAttribute("download", "resume.pdf");

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);


}

document.addEventListener("DOMContentLoaded", function() {
    var homeLink = document.getElementById("home_link");
    homeLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        history.replaceState(null, null, "#home"); 
    });
});
