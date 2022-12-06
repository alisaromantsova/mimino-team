
// рефси, посилання на елементи у дом дереві
const refsRoom = {
    openModalBtn: document.querySelector('[data-modal-room-open]'),
    openModalBtn1: document.querySelector('[data-modal-room-open-1]'),
    closeModalBtn: document.querySelector('[data-modal-room-close]'),
    modal: document.querySelector('[data-modal-room-1]'),
    submitButtons: document.querySelectorAll(".form-button"),
    closeModalCompleteBtn: document.querySelector('[data-modal-complete-close]'),
    modalComplete: document.querySelector('[data-modal-complete]'),
  };
// фу-я відкриття та закриття модалки 
  function toggleModalRoom() {
    refsRoom.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
// фун-я клікАутсайд для закриття модалки по кліку на бекграунд
  function toggleModalClickOutsideRoom(e) {
    if(e.target === refsRoom.modal){
      refsRoom.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
    }
  }
// фун-я закриття модалки та відкриття компліт модалки
const completeFnRoom = (e, modal, modalCompl,name,phone,) => {
        console.log(name.value)
    if (name.value.length === 0 || +name.value === NaN  || phone.value.length < 13) {
      return 
    }
    
    if (modal)modal.classList.toggle('is-hidden');
    document.body.classList.remove('modal-open');
    setTimeout(() => { 
        modalCompl.classList.toggle('is-hidden');
    }, 500)
  setTimeout(() => {
      if (modalCompl.classList.contains('is-hidden')) return
        modalCompl.classList.toggle('is-hidden');
        
    }, 2500);
  e.preventDefault();
}

//додавання слухача, на кнопку закриття компліт модалки
refsRoom.closeModalCompleteBtn.addEventListener('click',()=> {
  refsRoom.modalComplete.classList.add('is-hidden')
  document.body.classList.remove('modal-open');
})

// перебор всіх елементів на сторінці за одинаковим классом, та навішування на них слухачів для відкриття компліт модалки
refsRoom.submitButtons.forEach(elem => {
  const name = refsRoom.modal.children[0].children[1].elements[0]
  const phone  = refsRoom.modal.children[0].children[1].elements[1]
  if(elem.dataset.room ) elem.addEventListener('click', (e) => completeFnRoom(e, refsRoom.modal, refsRoom.modalComplete,name,phone))
})
  
// функція додавання слухача на кнопки для для відкриття модалки
const modalOpenRoom = (refs) => {
  console.log(refs)
  console.log(123)
  if(refs.openModalBtn)refs.openModalBtn.addEventListener('click', toggleModalRoom);
  if(refs.openModalBtn1)refs.openModalBtn1.addEventListener('click', toggleModalRoom);
  if(refs.closeModalBtn)refs.closeModalBtn.addEventListener('click', toggleModalRoom);
  document.addEventListener('click',toggleModalClickOutsideRoom)
}
modalOpenRoom(refsRoom)