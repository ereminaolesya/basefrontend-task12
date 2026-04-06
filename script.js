document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('btn-open-modal');
    const closeBtn = document.getElementById('btn-close-modal');
    const modal = document.getElementById('modal-overlay');

    const openModal = () => {
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
    };

    const closeModal = () => {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
    };

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});