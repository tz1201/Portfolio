// website
const openModalButtonsWebsite = document.querySelectorAll('[data-modal-target]')
const closeModalButtonsWebsite = document.querySelectorAll('[data-close-button]')
const overlayWebsite = document.getElementById('overlay-custom-website')

openModalButtonsWebsite.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlayWebsite.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal-custom-website.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtonsWebsite.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal-custom-website')
    closeModal(modal)
  })
})
// //website

// comics
const openModalButtonsComics = document.querySelectorAll('[data-modal-target]')
const closeModalButtonsComics = document.querySelectorAll('[data-close-button]')
const overlayComics = document.getElementById('overlay-custom-comics')

openModalButtonsComics.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlayComics.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal-custom-comics.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtonsComics.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal-custom-comics')
    closeModal(modal)
  })
})
// //comics

// sound
const openModalButtonsSound = document.querySelectorAll('[data-modal-target]')
const closeModalButtonsSound = document.querySelectorAll('[data-close-button]')
const overlaySound = document.getElementById('overlay-custom-sound')

openModalButtonsSound.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlaySound.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal-custom-sound.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtonsSound.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal-custom-sound')
    closeModal(modal)
  })
})
// //sound

// video
const openModalButtonsVideo = document.querySelectorAll('[data-modal-target]')
const closeModalButtonsVideo = document.querySelectorAll('[data-close-button]')
const overlayVideo = document.getElementById('overlay-custom-video')

openModalButtonsVideo.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlayVideo.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal-custom-video.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtonsVideo.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal-custom-video')
    closeModal(modal)
  })
})
// //video

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}