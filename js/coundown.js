let interval = null;
function coundown(){
 
    const coundownText = document.getElementById('coundown-number')
    const modal= document.getElementById('my_modal_3')
    modal.showModal()
    let counter = 3;
       
    if(interval){
        clearInterval(interval)
    }
    coundownText.innerHTML= `
        <div class="text-center">
        <img class="lg:w-52 w-36 mx-auto rounded-sm" src="./image/my.jpg"/>
            <h1 class="text-2xl mt-2 font-bold">Congrates</h1>
        <h3 class=" font-bold">Adoption Process in Start Fory your Pet</h3>
        <h1 class="font-bold text-2xl">${counter}</h1>
        </div>
        `;
     interval = setInterval(() => {
        counter--;
        coundownText.innerHTML= `
        <div class="text-center">
        <img class="lg:w-52 w-36 mx-auto rounded-sm" src="./image/my.jpg"/>
            <h1 class="text-2xl mt-2 font-bold">Congrates</h1>
        <h3 class=" font-bold">Adoption Process in Start Fory your Pet</h3>
        <h1 class="font-bold text-2xl">${counter}</h1>
        </div>
        `;
        if(counter <= 0){
            clearInterval(interval)
            modal.close()
            interval = null;
        }
    }, 1000);
     
    
}
    

     

