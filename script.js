const nameInput   = document.querySelector('#clientName');
const emailInput  = document.querySelector('#clientEmail');
const phoneInput  = document.querySelector('#clientPhone');

const clientForm  = document.querySelector('#clientForm');
const clientCards = document.querySelector('#clientCards');

clientForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const clientName  = nameInput.value.trim();
    const clientEmail = emailInput.value.trim();
    const clientPhone = phoneInput.value.trim();

    if (!clientName || !clientEmail || !clientPhone) return;

    // card banao
    const card = document.createElement('div');
    card.classList.add('client-card');

    card.innerHTML = `
        <div>
            <h2>${clientName}</h2>
            <p><strong>Email:</strong> ${clientEmail}</p>
            <p><strong>Phone:</strong> ${clientPhone}</p>
        </div>
        
    `;

    // card ko DOM me daalo
    clientCards.prepend(card);

    // yahin pe us card ke delete button ka reference lo
    const deleteBtn = card.querySelector('.delete-btn');

    // aur usi button pe listener laga do
    deleteBtn.addEventListener('click', function () {
        card.remove();           // sirf ye card delete hoga
    });

    // form reset
    clientForm.reset();
});
