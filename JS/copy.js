const popup_box = document.getElementById('popup')

function popup() {
  popup_box.style.animation = 'none'
  popup_box.offsetHeight
  popup_box.style.animation = null
  
  popup_box.classList.add('animate')
}

function copy_email() {
  navigator.clipboard.writeText("larryling.main@gmail.com")

  popup()
}

function copy_number() {
  navigator.clipboard.writeText("312-799-0681")

  popup()
}

