const followBtn = document.querySelector('.follow-btn')
const likeBtn = document.querySelector('.like-btn')
const commentBtn = document.querySelector('.comment-btn')
const commentbox = document.querySelector('.comment')

followBtn.addEventListener('click', function() {
  if (this.following) {
    followBtn.innerHTML = "Follow"
    followBtn.classList.remove('following')
    
  } else {
    followBtn.innerHTML = "Following"
    followBtn.classList.add('following')
  }
  this.following = !this.following
})
followBtn.following = false


likeBtn.addEventListener('click', function() {
  if (this.following) {
    likeBtn.innerHTML = "10 Likes"
    likeBtn.classList.remove('active')
  } else {
    likeBtn.innerHTML = "11 Likes"
    likeBtn.classList.add('active')
  }
  this.following = !this.following
})
likeBtn.following = false

commentBtn.addEventListener('click', function() {
  if (this.active) {
    commentbox.classList.remove('active')
  } else {
    commentbox.classList.add('active')
  }
  this.active = !this.active
})
commentBtn.active = false