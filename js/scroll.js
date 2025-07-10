
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
   }
   
   function contact(){
     document.getElementById('shadowHeader').classList.add('shadow-sm')
      const contactSection= document.getElementById('contact-container');
   
      contactSection.scrollIntoView({behavior: "smooth"})
      mainContainerRemoveHiden()
   hiddenAbout()
 }


 function animale(){
   document.getElementById('shadowHeader').classList.add('shadow-sm')
  const animalescroll = document.getElementById('animale-scroll');
  animalescroll.scrollIntoView({behavior: "smooth"})
   mainContainerRemoveHiden()
 hiddenAbout()
 }
 
 function aboutButton(){
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