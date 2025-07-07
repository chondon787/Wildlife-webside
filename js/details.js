const buttonDetails =async (id) =>{
    console.log(id)
const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`);
const data = await res.json();
displayDetails(data.petData)
my_modal_5.showModal()
}

function displayDetails(details){
console.log(details)
 const {image,breed,date_of_birth,gender,price,pet_name,petId,pet_details} = details;
const modalContainer = document.getElementById('modal-container');
modalContainer.innerHTML=`
<div class="flex flex-row">
<div class="w-6/12  mx-auto object-cover">
<img src=${image}/>
 <h2 class="font-bold my-2">${pet_name}</h2>
    <p class="flex gap-2 items-center"><span><img class="w-5" src="https://img.icons8.com/?size=100&id=11135&format=png"/></span>Breed:${breed}</p>
    <p class="flex gap-2 items-center"><span><img class="w-5" src="https://img.icons8.com/?size=128&id=X4ao1jZ1KbNj&format=png"/></span>Gender:${gender}</p>
   
    <p class="flex gap-2 items-center"><span><img class="w-5" src="https://img.icons8.com/?size=96&id=5VOqBjvi7siv&format=png"/></span>Birth:${date_of_birth}</p>
    <p class="flex gap-2 items-center"><span><img class="w-5" src="https://img.icons8.com/?size=100&id=7163&format=png"/></span>Price:${price}$</p>
    <p class="flex gap-2 items-center"><span><img class="w-5" src="https://img.icons8.com/?size=96&id=YqeA1aT8vUEf&format=png"/></span>Pet Id Number:${petId}</p>
        
</div>
 


    
<div class="w-6/12 ml-4 -mt-2"><span class="font-bold justified-text">Description:</span>${pet_details}</div>
</div>
`
}