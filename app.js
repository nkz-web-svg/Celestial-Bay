
const cards = document.querySelectorAll(".fade-in");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const isActive = card.classList.contains("active");
        
        cards.forEach(c => c.classList.remove("active"));

        if (!isActive) {
            card.classList.add("active");
        }
    });

});


document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const offcanvasEl = document.getElementById('offcanvasDarkNavbar');

    let offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (!offcanvas) {
      offcanvas = new bootstrap.Offcanvas(offcanvasEl);
    }

    offcanvas.hide();
  });
});
