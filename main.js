let imageUrls = [
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://etcanada.com/wp-content/uploads/2016/06/58c0500b2ac4c342c6fc4ab096ada150.jpg?quality=80&strip=all&crop=0px%2C21px%2C500px%2C333px&resize=720%2C480',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg'
]
const $gallery = document.querySelector('main')
const $imageUrlInput = document.querySelector('input')
const $addImageButton = document.querySelector('button')

$addImageButton.addEventListener('click', () => {
  if ($imageUrlInput.value !== "") imageUrls.push($imageUrlInput.value)
  $imageUrlInput.value = ''
  updateGallery()
})
$imageUrlInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13){
    if ($imageUrlInput.value !== "") imageUrls.push($imageUrlInput.value)
    $imageUrlInput.value = ''
    updateGallery()
  }
})

function updateGallery(){
  $gallery.innerHTML = ""
  for (let i = 0; i < imageUrls.length; i++){
    let imageElement = document.createElement('img')
    imageElement.classList.add('gallery-image')
    imageElement.src = imageUrls[i]
    $gallery.appendChild(imageElement)
  }
}

updateGallery()
