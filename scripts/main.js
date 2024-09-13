window.addEventListener("load", function() {
    const overLayText = document.getElementsByClassName("overlayText")[0];
    const mainContainer = document.getElementById("mainContainer");
    const secondContainer = document.getElementById("secondContainer");
    const topBar = document.getElementById("topBar");

    const scrollLimit = mainContainer.offsetHeight + secondContainer.offsetHeight;

    window.addEventListener("scroll", function() {
        if (window.scrollY > scrollLimit) {
            overLayText.classList.add("hidden");
            topBar.classList.add("hidden");
        } else {
            overLayText.classList.remove("hidden");
            topBar.classList.remove("hidden");
        }
    });
});