// рефси, посилання на елементи у дом дереві

const refsTable = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtn1: document.querySelector('[data-modal-open-1]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    submitButtons: document.querySelectorAll(".form-button"),
    closeModalCompleteBtn: document.querySelector('[data-modal-complete-close]'),
    modalComplete: document.querySelector('[data-modal-complete]'),
};
  
// фу-я відкриття та закриття модалки 
  function toggleModalTable() {
    refsTable.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }

// фун-я клікАутсайд для закриття модалки по кліку на бекграунд 
  function toggleModalClickOutsideTable(e) {
    if(e.target === refsTable.modal){
      refsTable.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
    }
  }
// фун-я закриття модалки та відкриття компліт модалки
  const completeFnTable = (e,modal, modalCompl,name,phone,) => {
    
    console.log(name.value)
    if (name.value.length === 0 || +name.value === NaN  || phone.value.length < 13) {
      return 
    }
    
    if (modal) modal.classList.toggle('is-hidden');
        document.body.classList.remove('modal-open');
    setTimeout(() => { 
        modalCompl.classList.toggle('is-hidden');
    }, 300)
    setTimeout(() => {
      if (modalCompl.classList.contains('is-hidden')) return
      modalCompl.classList.toggle('is-hidden');

    }, 2500);
    e.preventDefault();
  }

//додавання слухача, на кнопку закриття компліт модалки
refsTable.closeModalCompleteBtn.addEventListener('click',()=> {
  refsTable.modalComplete.classList.add('is-hidden')
  document.body.classList.remove('modal-open');
})

// перебор всіх елементів на сторінці за одинаковим классом, та навішування на них слухачів для відкриття компліт модалки
refsTable.submitButtons.forEach(elem => {
  const name = refsTable?.modal?.children[0]?.children[1]?.elements[0]
  const phone  = refsTable?.modal?.children[0]?.children[1]?.elements[1]

  if (elem.dataset.table) elem.addEventListener('click', (e) => completeFnTable(e, refsTable.modal, refsTable.modalComplete,name,phone))
})

// функція додавання слухача на кнопки для для відкриття модалки
  const modalOpenTable = (refs) => {
    console.log(refs)
    console.log(123)
    if(refs.openModalBtn)refs.openModalBtn.addEventListener('click', toggleModalTable);
    if(refs.openModalBtn1)refs.openModalBtn1.addEventListener('click', toggleModalTable);
    if(refs.closeModalBtn)refs.closeModalBtn.addEventListener('click', toggleModalTable);
    document.addEventListener('click',toggleModalClickOutsideTable)
  }
  modalOpenTable(refsTable)