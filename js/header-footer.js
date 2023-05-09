
// ********************   Header   **********************

class Myheader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      
      <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top d-flex align-items-center">
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
          <li><a href="#contact">Blog</a></li>
          <li><a href="#contact">Support</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav><!-- .navbar -->

      <a class="btn-signin" href="#join-us">Log In</a>
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
        <i class="bi bi-geo-alt icon"></i>
        <div>
          <h4>Address</h4>
          <p>
            A108 Adam Street <br>
            United Kingdom, NY 535022 - US<br>
          </p>
        </div>

      </div>

      <div class="col-lg-3 col-md-6 footer-links d-flex">
        <i class="bi bi-telephone icon"></i>
        <div>
          <h4>contacts</h4>
          <p>
            <strong>Phone:</strong> +1 5589 55488 55<br>
            <strong>Email:</strong> info@example.com<br>
          </p>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 footer-links d-flex">
        <i class="bi bi-clock icon"></i>
        <div>
          <h4>Opening Hours</h4>
          <p>
            <strong>Mon-Sat: 11AM</strong> - 23PM<br>
            Sunday: Closed
          </p>
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
      &copy; Copyright <strong><span>Kidsminds</span></strong>. All Rights Reserved
    </div>
    
  </div>

</footer>
<!-- End Footer -->


      
      `;
    }
  }
      
  customElements.define('my-footer', Myfooter);







