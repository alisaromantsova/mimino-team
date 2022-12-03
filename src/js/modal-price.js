// const refs = {
//   openModalBtn: document.querySelector('[data-modal-price-open]'),
//   closeModalBtn: document.querySelector('[data-modal-price-close]'),
//   modal: document.querySelector('[data-modal-price]'),
//   modalinner:document.querySelector('.modal-price'),
// };
// function toggleModal() {
//   refs.modal.classList.toggle('is-hidden');
//   document.body.classList.toggle('modal-open');
// }
// function toggleModalClickOutside(e) {
//   if(e.target === refs.modal){
//   refs.modal.classList.toggle('is-hidden');
//   document.body.classList.toggle('modal-open');
//   }
// }



// (() => {
//   if(refs.openModalBtn)refs.openModalBtn.addEventListener('click', toggleModal);
//   if(refs.closeModalBtn)refs.closeModalBtn.addEventListener('click', toggleModal);
//   document.addEventListener('click',toggleModalClickOutside)
// })();
const refsPrice = {
  openModalBtn: document.querySelector('[data-modal-price-open]'),
  closeModalBtn: document.querySelector('[data-modal-price-close]'),
  openModalBtn1: document.querySelector('[data-modal-price-1-open]'),
  openModalBtn2: document.querySelector('[data-modal-price-3p-open]'),
  openModalBtn3: document.querySelector('[data-modal-price-2p-open]'),
  modal: document.querySelector('[data-modal-price]'),
};
function toggleModalPrice() {
  refsPrice.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
}
function toggleModalClickOutsidePrice(e) {
  if(e.target === refsPrice.modal){
    refsPrice.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
  }
}




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

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-price-1-open]'),
//     modal: document.querySelector('[data-modal-price-1]'),
//   };

//   if(refs.openModalBtn)refs.openModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//     document.body.classList.toggle('modal-open');
//   }
// })();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-price-2-open]'),
//     modal: document.querySelector('[data-modal-price-2]'),
//   };

//   if(refs.openModalBtn)refs.openModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//     document.body.classList.toggle('modal-open');
//   }
// })();



// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-price-3-open]'),
//     modal: document.querySelector('[data-modal-price-3]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//     document.body.classList.toggle('modal-open');
//   }
// })();
