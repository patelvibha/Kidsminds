
// ********************   Header   **********************

class Myheader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    
    <!-- ======= Header ======= -->
    <header id="header" class="header">
    <div class="container-fluid top-header">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="text-left contact-info">
        <a class="Email" href="mailto:smiles@kidsminds.uk"><i class="bi bi-envelope-at"></i><span id="et-info-email">smiles@kidsminds.uk</span></a>
        <a class="Phone" href="tel:+44 7577 996400"><i class="bi bi-phone icon"></i><span>+44 7577 996400</span></a>         
        </div>
        
        <div class="social-links d-flex">
          <a href="" class="google"><i class="bi bi-google"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100092993372694" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
          <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
        </div>
  
      </div>
    </div>
   
      <div class="container d-flex align-items-center justify-content-between">
  
        <a href="index.html" class="logo d-flex align-items-center me-auto me-lg-0">
         
           <img src="../img/logo.svg" alt=""> 
           <!-- <h1>Kidsminds<span>.</span></h1> -->
        </a>
  
        <nav id="navbar" class="navbar">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about-us.html">About</a></li>        
           
            <li class="dropdown"><a href="our-nursery.html"><span>Nursery</span> </a></li>
            <li><a href="local-authority.html">local authority</a></li>
            <li><a href="">Career</a></li>
            <li><a href="blog.html">Blog </a></li>
            <li><a href="support.html">Support</a></li>
            <li><a href="contact-us.html">Contact</a></li>
          </ul>
        </nav><!-- .navbar -->
  
        <a class="btn-signin primary-button" href="registration.html">Join Us</a>
        <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
  
      </div>
    </header><!-- End Header -->   
    `;
  }
}
    
customElements.define('my-header', Myheader);


// ********************   footer   **********************


class Myfooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- ======= Footer ======= -->
    <footer id="footer" class="footer">
   
     <div class="container">
       <div class="row gy-3">
   
         <div class="col-lg-3 col-md-6 d-flex">        
           <div class="footer-logo">
             <img src="../img/logo.svg" alt="" height="80px">
             <p>We’re on a mission to find every family flourish. creates awesome mini-humans, puts emotional wellbeing first, is easy to arrange, and doesn’t cost the earth.</p>
           </div>
         </div>
   
         <div class="col-lg-3 col-md-6 footer-contact footer-links d-flex">       
           <div>
             <h4>Contact us</h4>
             <ul>
               <li><i class="bi bi-geo-fill"></i> <p class="pr-5">32, Lynwood Gardens, Croydon, England, CR0 4QH</p></li>
               <li><i class="bi bi-telephone"></i><p>+44 7577 996400</p></li>
               <li><i class="bi bi-envelope-at"></i><p>smiles@kidsminds.uk</p></li>
               <li><i class="pt-1 bi bi-clock icon"></i><div><p>Mon-Fri : 09AM - 17PM</p> <p>Sat-Sun : Closed</p></div></li>
             </ul>      
           </div>
         </div>
   
         <div class="col-lg-3 col-md-6 footer-links d-flex">       
           <div>
             <h4>Quick Links</h4>
             <ul>
               <li><i class="bi bi-chevron-right"></i><a href="about-us.html">About Us</a></li>
               <li><i class="bi bi-chevron-right"></i><a href="career.html">career</a></li>
               <li><i class="bi bi-chevron-right"></i><a href="blog.html">Blog</a></li>
               <li><i class="bi bi-chevron-right"></i><a href="privacy_policy.html">privacy policy</a></li>
               <li><i class="bi bi-chevron-right"></i><a href="support.html">Support</a></li>
   
             </ul>          
           </div>
         </div>
       
   
         <div class="col-lg-3 col-md-6 footer-links">
           <h4>Follow Us</h4>
           <div class="social-links d-flex">
             <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
             <a href="https://www.facebook.com/profile.php?id=100092993372694" class="facebook"><i class="bi bi-facebook"></i></a>
             <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
             <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
           </div>
         </div>
   
       </div>
     </div>
   
     <div class="container">
       <div class="copyright">
         &copy; Copyright <span>KidsMinds.uk</span>. All Rights Reserved
       </div>
       
     </div>
   
   </footer>
   <!-- End Footer -->
    
    `;
  }
}
    
customElements.define('my-footer', Myfooter);







