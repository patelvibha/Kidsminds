
// ********************   Header   **********************

class Myheader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      
      <!-- ======= Header ======= -->
      <header id="header" class="header">
      <div class="container-fluid top-header">
        <div class="container d-flex justify-content-between align-items-center">
          <div class="text-left contact-info">
          <a class="Email" href="mailto:enquiries@kidsminds.co.uk"><i class="bi bi-envelope-at"></i><span id="et-info-email">enquiries@kidsminds.co.uk</span></a>
          <a class="Phone" href="tel:44 02034886800"><i class="bi bi-phone icon"></i><span>+44 0000000000</span></a>         
          </div>
          
          <div class="social-links d-flex">
            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
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
             
              <li class="dropdown"><a href="#"><span>Nursery</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
    
                  <li class="dropdown"><a href="#"><span>For Child</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                    <ul>
                      <li><a href="#">startup Training</a></li>
                      <li><a href="#">Childcare Course</a></li>
                      <li><a href="#">DBS Check</a></li>
                      <li><a href="#">Nursary Appliation Form</a></li>                  
                      <li><a href="#">Child Application Form</a></li>
                    </ul>
                  </li>
                  
                  <li class="dropdown"><a href="#"><span>For Parents</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                    <ul>
                      <li><a href="#">Parents Application Form</a></li>
                      <li><a href="#">Ofsted Registration Details</a></li>
                      <li><a href="#">Nursery</a></li>
                    </ul>
                  </li>
                 
                </ul>
              </li>
    
              <li><a href="">local authority</a></li>
    
              <li><a href="#contact">Career</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="#contact">Support</a></li>
              <li><a href="contact-us.html">Contact</a></li>
            </ul>
          </nav><!-- .navbar -->
    
          <a class="btn-signin" href="#join-us">Join Us</a>
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
                 <li><i class="bi bi-geo-fill"></i> <p class="pr-5">A108 Adamn Street, Wolky ways, 535022 - UK</p></li>
                 <li><i class="bi bi-telephone"></i><p>+44 1234567890</p></li>
                 <li><i class="bi bi-envelope-at"></i><p>kidsminds@help.uk</p></li>
                 <li><i class="pt-1 bi bi-clock icon"></i><div><p>Mon-Sat : 11AM - 18PM</p> <p>Sunday : Closed</p></div></li>
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
               <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
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







