let imageUrls = [
  // 'https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?width=700&crop=2:1',
  // 'https://images.theconversation.com/files/38926/original/5cwx89t4-1389586191.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop,',
  // 'https://www.abc.net.au/cm/rimage/12008266-16x9-large.jpg?v=2',
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

function updateGallery() {
  $gallery.innerHTML = ""
  for (let i = 0; i < imageUrls.length; i++) {
    let anchorElement = document.createElement('a')
    anchorElement.href = imageUrls[i]
    anchorElement.target = '_blank'

    let imageElement = document.createElement('img')
    imageElement.src = imageUrls[i]
    imageElement.className = 'gallery-image'

    let deleteButton = document.createElement('button')
    deleteButton.className = 'delete-button'
    deleteButton.id = 'delete-' + i
    deleteButton.innerText = 'X'
    deleteButton.addEventListener('click', deleteImage)

    anchorElement.appendChild(imageElement)
    $gallery.appendChild(anchorElement)
    $gallery.appendChild(deleteButton)

  }
}

function deleteImage(event){
  let indexOfDelete = event.currentTarget.id.split('-')[1]
  imageUrls.splice(indexOfDelete, 1)
  updateGallery()
}

updateGallery()
