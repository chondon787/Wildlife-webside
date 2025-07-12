const likeButton = (like) =>{
     
 

    
const likeContainer = document.getElementById('like-container');
const div = document.createElement('div');
 
div.innerHTML=`
<div class="lg:w-28 w-56 lg:h-24 h-40 mx-auto  mb-3">
 <img class="w-full h-full rounded-sm object-cover" src="${like}"/>
 </div>
`
likeContainer.appendChild(div)
}