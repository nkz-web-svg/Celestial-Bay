
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
      
    const offcanvasC1 = document.getElementById('offcanvasDarkNavbar');

    let offcanvas = bootstrap.Offcanvas.getInstance(offcanvasC1);
    if (!offcanvas) {
      offcanvas = new bootstrap.Offcanvas(offcanvasC1);
    }

    offcanvas.hide();
  });
});

