const loadCard= async ()=>{
const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`);
const data = await response.json();

displayCard(data.pets)
 
}


function displayCard(cards){
 
  const cardContainer = document.getElementById('card-conteiner')
  cardContainer.innerHTML= "";
  if(cards.length == 0){
    cardContainer.classList.remove('grid')
    cardContainer.innerHTML=`
    <div class="w-[560px] mx-auto flex flex-col justify-center text-center lg:p-10 p-4">
    <img class="lg:w-25 w-10 mx-auto" src="../image/error.webp"/>
    <h1 class="font-bold text-2xl">No Information Available</h1>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a.</p>
    </div>
      `
      return;
    }cardContainer.classList.add('grid')
    cards.forEach(card =>{
      // console.log(card)
        const {image,breed,date_of_birth,gender,price,pet_name,petId} = card;
        const div = document.createElement('div');
        div.classList.add("border-2","border-gray-200","p-3","text-center","gap-3");
        div.innerHTML = `
        <div class="  ">
        <figure class="lg:w-[200px]  mx-auto object-cover">
    <img class="w-full h-full rounded-sm object-cover"
    src= ${image}
    alt="Shoes" />
    </figure>
    <div class="">
    <h2 class="font-bold my-2">${pet_name}</h2>
    <p class="flex gap-2 items-center"><span><img class="w-5" src="https://img.icons8.com/?size=100&id=11135&format=png"/></span>Breed:${breed}</p>
    <p class="flex gap-2 items-center"><span><img class="w-5" src="https://img.icons8.com/?size=128&id=X4ao1jZ1KbNj&format=png"/></span>Gender:${gender}</p>
    
    <p class="flex gap-2 items-center"><span><img class="w-5" src="https://img.icons8.com/?size=96&id=5VOqBjvi7siv&format=png"/></span>Birth:${date_of_birth}</p>
    <p class="flex gap-2 items-center"><span><img class="w-5" src="https://img.icons8.com/?size=100&id=7163&format=png"/></span>Price:${price}$</p>
    <div class="divider"></div>
    <div class="flex items-center  justify-evenly gap-1 ">
    <button onclick="likeButton('${image}')" class="btn"><img class="w-8" src="https://img.icons8.com/?size=100&id=24816&format=png"/></button>
    <button id="coundown-button" onclick="coundown()" class="btn text-blue-500">Adopt</button>
    <button onclick="buttonDetails('${petId}')" class="btn text-blue-500">Details</button>
    </div>
  </div>
  </div>
        `
        cardContainer.appendChild(div) 
    })
}




loadCard()
   
 