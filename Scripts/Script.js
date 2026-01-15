const ChangeButton = document.getElementById("Teste");

function Change(Button) {
    const source =  Button.querySelector('source');
    document.querySelector('.MovieVideo').setAttribute("src", source.src );

}

function AboutPage() {
    window.location.href = "AboutPage.html"

}

function HomePage() {
    window.location.href = "index.html"

}

function BackButton() {
    history.back()
}

function CheckPassword() {
    if (document.querySelector('.PASS').value === "RSFM") {
        document.querySelector(".pass1").style.display = "none"
        document.querySelector(".pass2").style.display = "block"
    } else if (document.querySelector('.PASS').value === "rafaels own") {
        console.log("parabens...")
       document.querySelector(".pass1").style.display = "block"
       document.querySelector(".pass2").style.display = "none"
    } else if (document.querySelector('.PASS').value === "rafaels own sfm videos.html") {
        window.location.href = "rafaels own sfm videos.html"
    }
    console.log("called")

}
