(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-price-2p-open]'),
    closeModalBtn: document.querySelector('[data-modal-price-2p-close]'),
    modal: document.querySelector('[data-modal-price-2p]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();