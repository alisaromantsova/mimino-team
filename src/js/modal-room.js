(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-room-open]'),
    closeModalBtn: document.querySelector('[data-modal-room-close]'),
    modal: document.querySelector('[data-modal-room]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-room-open-1]'),
    modal: document.querySelector('[data-modal-room-1]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal); 

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();
