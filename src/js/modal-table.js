// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//     document.body.classList.toggle('modal-open');
//   }
// })();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open-1]'),
//     modal: document.querySelector('[data-modal-1]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//     document.body.classList.toggle('modal-open');
//   }
// })();

const refsTable = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtn1: document.querySelector('[data-modal-open-1]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  function toggleModalTable() {
    refsTable.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
  function toggleModalClickOutsideTable(e) {
    if(e.target === refsTable.modal){
      refsTable.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
    }
  }

  

  const modalOpenTable = (refs) => {
    console.log(refs)
    console.log(123)
    if(refs.openModalBtn)refs.openModalBtn.addEventListener('click', toggleModalTable);
    if(refs.openModalBtn1)refs.openModalBtn1.addEventListener('click', toggleModalTable);
    if(refs.closeModalBtn)refs.closeModalBtn.addEventListener('click', toggleModalTable);
    document.addEventListener('click',toggleModalClickOutsideTable)
  }
  modalOpenTable(refsTable)