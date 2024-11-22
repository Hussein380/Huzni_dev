var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");

togglebtn.addEventListener("click", function () {
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

var typed = new Typed(".input", {
    strings: ["Software Engineer", "Backend Developer", "Web Developer"],
    typeSpeed: 70,
    backSpeed: 55,
    loop: true,
});


document.addEventListener('DOMContentLoaded', () => {
    const contactItems = document.querySelectorAll('.contact-item');

    contactItems.forEach(item => {
        item.addEventListener('click', () => {
            const contactText = item.querySelector('span').textContent;
            
            // Copy to clipboard
            navigator.clipboard.writeText(contactText.split(': ')[1]).then(() => {
                // Temporary tooltip
                const tooltip = document.createElement('div');
                tooltip.textContent = 'Copied!';
                tooltip.style.cssText = `
                    position: absolute;
                    top: -40px;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: #4a90e2;
                    color: white;
                    padding: 5px 10px;
                    border-radius: 4px;
                    font-size: 0.8rem;
                `;
                
                item.style.position = 'relative';
                item.appendChild(tooltip);

                // Remove tooltip after 2 seconds
                setTimeout(() => {
                    item.removeChild(tooltip);
                }, 2000);
            }).catch(err => {
                console.error('Could not copy text: ', err);
            });
        });

        // Add hover effect cursor
        item.style.cursor = 'pointer';
    });

    // WhatsApp and Email Direct Links
    const whatsappItem = document.querySelector('.contact-item i.fa-whatsapp').parentElement;
    const emailItem = document.querySelector('.contact-item i.fa-envelope').parentElement;

    whatsappItem.addEventListener('click', (e) => {
        e.stopPropagation();
        window.open(`https://wa.me/${whatsappItem.querySelector('span').textContent.replace(/[^\d]/g, '')}`, '_blank');
    });

    emailItem.addEventListener('click', (e) => {
        e.stopPropagation();
        window.open(`mailto:${emailItem.querySelector('span').textContent.split(': ')[1]}`, '_blank');
    });
});
