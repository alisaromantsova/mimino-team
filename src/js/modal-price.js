
// рефси, посилання на елементи у дом дереві
const refsPrice = {
  openModalBtn: document.querySelector('[data-modal-price-open]'),
  closeModalBtn: document.querySelector('[data-modal-price-close]'),
  openModalBtn1: document.querySelector('[data-modal-price-1-open]'),
  openModalBtn2: document.querySelector('[data-modal-price-3p-open]'),
  openModalBtn3: document.querySelector('[data-modal-price-2p-open]'),
  modal: document.querySelector('[data-modal-price]'),
  submitButtons: document.querySelectorAll(".form-button"),
  closeModalCompleteBtn: document.querySelector('[data-modal-complete-close]'),
  modalComplete: document.querySelector('[data-modal-complete]'),
};

// фу-я відкриття та закриття модалки 
function toggleModalPrice(e) {
  const modalApartmentType = refsPrice.modal.children[0].children[1].children[1]

  if (e.target === refsPrice.openModalBtn)modalApartmentType.textContent = 'Двомісний люкс'
  if (e.target === refsPrice.openModalBtn1)modalApartmentType.textContent = 'Двомісний люкс'
  if (e.target === refsPrice.openModalBtn3)modalApartmentType.textContent = 'Двомісний номер'
  if (e.target === refsPrice.openModalBtn2)modalApartmentType.textContent = 'Трьохмісний номер'
  refsPrice.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
}
// фун-я клікАутсайд для закриття модалки по кліку на бекграунд
function toggleModalClickOutsidePrice(e) {
  if(e.target === refsPrice.modal){
    refsPrice.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
  }
}

// фун-я закриття модалки та відкриття компліт модалки
const completeFnPrice = (e, modal, modalCompl) => {
    
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
refsPrice.closeModalCompleteBtn.addEventListener('click',()=> {
  refsPrice.modalComplete.classList.add('is-hidden')
  document.body.classList.remove('modal-open');
})

// перебор всіх елементів на сторінці за одинаковим классом, та навішування на них слухачів для відкриття компліт модалки
refsPrice.submitButtons.forEach(elem => {

  if(elem.dataset.price) elem.addEventListener('click', (e) => completeFnPrice(e,refsPrice.modal,refsPrice.modalComplete))
})

// функція додавання слухача на кнопки для для відкриття модалки
const modalOpenPrice = (refs) => {
  console.log(refs)
  console.log(123)
  if(refs.openModalBtn)refs.openModalBtn.addEventListener('click', toggleModalPrice);
  if(refs.openModalBtn1)refs.openModalBtn1.addEventListener('click', toggleModalPrice);
  if(refs.openModalBtn2)refs.openModalBtn2.addEventListener('click', toggleModalPrice);
  if(refs.openModalBtn3)refs.openModalBtn3.addEventListener('click', toggleModalPrice);
  if(refs.closeModalBtn)refs.closeModalBtn.addEventListener('click', toggleModalPrice);
  document.addEventListener('click',toggleModalClickOutsidePrice)
}
modalOpenPrice(refsPrice)


