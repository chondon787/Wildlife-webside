const loadAbout = async () =>{
const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/dog`);
 const data = await res.json();
 displayAbout(data.data)

}

function displayAbout(cards){
    const aboutMainContainer = document.getElementById('about-main-container');
 cards.forEach(card =>{
    console.log(card)
    const {image,category,price,gender} = card
    const div = document.createElement('div')
    div.innerHTML =`
    <div>
    <img class="w-48 h-32 flex mx-auto items-center justify-center" src=${image}/>
    <p>${price}</p>
    
    </div>
    `
    aboutMainContainer.appendChild(div)
 })
}



// const megikFuntion  = () =>{
//     const aboutMainContainer = document.getElementById('about-main-container');
//  aboutMainContainer.innerHTML=`
//  displayCard()
//  `
// }
// megikFuntion()