 const loadCategories = async() =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`);
    const data = await res.json();
    // console.log(data.categories)
displayCategories(data.categories)

}

function removeActiveClass(){
    const button = document.getElementsByClassName('category-btn');
    for(let btn of button){
         btn.classList.remove('active','rounded-2xl')
    }
}



const loadButtonCategories = async (categoryName) =>{
    // console.log(categoryName)
    document.getElementById('loadingSpinner').classList.remove('hidden')
    removeActiveClass()
 setTimeout(async() => {
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`);
 const data = await res.json();
  console.log(data)
      document.getElementById('loadingSpinner').classList.add('hidden')


displayCard(data.data)
}, 2000);
const activeClass = document.getElementById(`btn-${categoryName}`)
 activeClass.classList.add("active","rounded-2xl");
 
 
  
}


function displayCategories(category){
    // console.log(category)

    const buttonContainer = document.getElementById('button-container')
    category.forEach(item =>{
        const button = document.createElement('div');
        button.classList= ""
        button.innerHTML=`
        <button id="btn-${item.category}" onclick="loadButtonCategories('${item.category}')" class="btn lg:gap-4 font-bold lg:text-2xl lg:p-7 p-1 category-btn"><span><img class="lg:w-10 w-5 mx-auto" src="${item.category_icon}" /></span>
         ${item.category}</button>
        `
    buttonContainer.appendChild(button)
    })

}

 


loadCategories()