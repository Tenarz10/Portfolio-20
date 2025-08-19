
  // Smooth scroll for in-page links (Bootstrap already handles collapse)
  document.querySelectorAll('.nav-link[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const id=a.getAttribute('href');
      if(id.length>1){e.preventDefault();document.querySelector(id).scrollIntoView({behavior:'smooth'})}
    })
  })
  // Reveal on scroll
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}})
  },{threshold:.1});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  // Animate skill bars when visible
  const bars=document.querySelectorAll('#skills .progress-bar');
  const io2=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){
      const bar=e.target;bar.style.width=bar.dataset.target+"%";io2.unobserve(bar)}})
  },{threshold:.4});
  bars.forEach(b=>io2.observe(b));

  // WhatsApp chat button
  const whatsappButton=document.getElementById('whatsappButton');
  if(whatsappButton){
    whatsappButton.addEventListener('click',e=>{
      e.preventDefault();
      const url="https://api.whatsapp.com/send?phone=2349031234567&text=Hello%20Samuel,%20I%20would%20like%20to%20discuss%20a%20project.";
      window.open(url,'_blank');
    });
  }

  // Back to Top button functionality
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});
backToTop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
