document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').slice(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Open fullscreen image
function openFullscreen(img) {
    var modal = document.getElementById("fullscreen-modal");
    var modalImg = document.getElementById("fullscreen-image");
    modal.style.display = "block";
    modalImg.src = img.src;
}

// Close fullscreen image
function closeFullscreen() {
    var modal = document.getElementById("fullscreen-modal");
    modal.style.display = "none";
}

