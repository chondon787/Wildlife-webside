const likeButton = (like) =>{
const likeContainer = document.getElementById('like-container');
const div = document.createElement('div');
// div.classList.add("grid","grid-cols-2","gap-5")
div.innerHTML=`
<div class="lg:w-28 w-28 mx-auto  mb-3">
 <img class="w-full rounded-sm" src=${like}/>
`
likeContainer.appendChild(div)
}