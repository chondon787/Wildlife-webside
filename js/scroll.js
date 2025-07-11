
 function scrollAdoptSection(){
   document.getElementById('shadowHeader').classList.add('shadow-sm')
    const scrollSection = document.getElementById('view-scroll-section')
    scrollSection.scrollIntoView({behavior: "smooth"})
     
    mainContainerRemoveHiden()
   }
   
   function homeSection(){
     document.getElementById('shadowHeader').classList.add('shadow-sm')
     const home = document.getElementById('home-section');
     home.scrollIntoView({behavior: "smooth"})
     mainContainerRemoveHiden()
     hiddenAbout()
     removeActive()
     document.getElementById('homeSectionId').classList.add('active')
   }
   
   function contact(){
     document.getElementById('shadowHeader').classList.add('shadow-sm')
      const contactSection= document.getElementById('contact-container');
      contactSection.scrollIntoView({behavior: "smooth"})
      mainContainerRemoveHiden()
   hiddenAbout()
   removeActive()
   document.getElementById('contactId').classList.add('active')
 }


 function animale(){
   document.getElementById('shadowHeader').classList.add('shadow-sm')
  const animalescroll = document.getElementById('animale-scroll');
  animalescroll.scrollIntoView({behavior: "smooth"})
   mainContainerRemoveHiden()
 hiddenAbout()
 removeActive()
 document.getElementById('animaleSectionId').classList.add('active')
 }
 
 function aboutButton(){
  removeActive()
   document.getElementById('aboutButtonId').classList.add("active")
  
 document.getElementById('main-container').classList.add('hidden')
    document.getElementById('hidden-about').classList.remove('hidden')
 
 loadAbout()
 
 }

//  about us section buton
function viewMoreMemberButton(){
  document.getElementById('viewMoreMember').classList.remove('hidden')
  document.getElementById('viewMoreId').classList.add('hidden')
  document.getElementById('noMoreId').classList.remove('hidden')
  
}


function NoMoreMemberButton(){
  document.getElementById('noMoreId').classList.add('hidden')
 document.getElementById('viewMoreId').classList.remove('hidden')
document.getElementById('viewMoreMember').classList.add('hidden')}

 // extra container
 

 function hiddenAbout(){
   document.getElementById('hidden-about').classList.add('hidden')
 }
  
 
 function mainContainerRemoveHiden(){
  const mainContainer = document.getElementById('main-container');
  mainContainer.classList.remove('hidden')
 }

 function removeActive() {
  const navItems = document.querySelectorAll('.remove-active');
  // console.log(navItems)
  navItems.forEach(item => item.classList.remove('active'));
}


const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('touchstart', () => card.classList.add('scale-125'));
  card.addEventListener('touchend', ()   => card.classList.remove('scale-125'));
});

 