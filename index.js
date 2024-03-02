function showFullText(blogId) {
    var fullText = document.getElementById("fullText_" + blogId);
    var readMoreBtn = document.querySelector(".read-more-btn_" + blogId);
    if (fullText.style.display === "none" || fullText.style.display === "") {
        fullText.style.display = "block";
        readMoreBtn.textContent = "Read Less";
    } else {
        fullText.style.display = "none";
        readMoreBtn.textContent = "Read More";
    }
}