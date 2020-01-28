// Mobile
const navSlide = () => {
   const burguer = $('.burguer')
   const nav = $('.nav-links')
   const navLinks = $('.nav-links li')

   // Active Nav on mophile
   burguer.click(() => {
      nav.toggleClass('nav-active')

      // Animate Links
      navLinks.each((index) => {
         $(this).css("animation", `navLinkFade 0.5s ease forwards`)
      })

      // Animate Burguer
      burguer.toggleClass('toggle')
   })

}




const app = ()=> {
   navSlide()
}

app()
