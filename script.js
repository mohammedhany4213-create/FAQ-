const buttons = document.querySelectorAll(".btn-plus");

buttons.forEach((btn) => {
    btn.addEventListener("click", function () {

        const answer = btn.parentElement.nextElementSibling;
        const img = btn.querySelector("img");

        if (getComputedStyle(answer).display === "none") {
            answer.style.display = "block";
            img.src = "./assets/images/icon-minus.svg";
        } else {
            answer.style.display = "none";
            img.src = "./assets/images/icon-plus.svg";
        }
    });
});