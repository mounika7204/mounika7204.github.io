const openModalButtons = [
    document.getElementById("openModalButton1"),
    document.getElementById("openModalButton2"),
    document.getElementById("openModalButton3"),
    document.getElementById("openModalButton4"),
    document.getElementById("openModalButton5")
];

const closeModalButton = document.getElementById("closeModalButton");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        modal.style.display = "block";
        overlay.style.display = "block";

        console.log(`Opening Wallet ${index + 1}`);
    });
});

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
});
