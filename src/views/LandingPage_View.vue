<template>
    <div id="top">
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<div class="wrapper row0">
  <header id="header" class="hoc clear"> 
    <!-- ################################################################################################ -->
    <div id="logo" class="one_quarter first">
      <h1><a  @click="$router.push({name: 'home'})"><span>C</span>afeteria<span>V</span>ue</a></h1>
    </div>
    <div class="three_quarter">
      <ul class="nospace clear">
        <li class="one_third first">
          <div class="block clear"><i class="fas fa-phone"></i> <span><strong>Marcanos:</strong> +00 (123) 456 7890</span></div>
        </li>
        <li class="one_third">
          <div class="block clear"><i class="fas fa-envelope"></i> <span><strong>Envíanos un correo:</strong> ingepasillasg@gmail.com</span></div>
        </li>
        <li class="one_third">
          <div class="block clear"><i class="fas fa-clock"></i> <span><strong> Lun. - Sab.:</strong> 08.00am - 18.00pm</span></div>
        </li>
      </ul>
    </div>
    <!-- ################################################################################################ -->
  </header>
</div>
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<div class="wrapper row1">
  <!-- <section class="hoc clear">     
    <nav id="mainav">
      <ul class="clear">
        <li class="active"><a href="index.html">Home</a></li>
        <li><a class="drop" href="#">Pages</a>
          <ul>
            <li><a href="pages/gallery.html">Gallery</a></li>
            <li><a href="pages/full-width.html">Full Width</a></li>
            <li><a href="pages/sidebar-left.html">Sidebar Left</a></li>
            <li><a href="pages/sidebar-right.html">Sidebar Right</a></li>
            <li><a href="pages/basic-grid.html">Basic Grid</a></li>
            <li><a href="pages/font-icons.html">Font Icons</a></li>
          </ul>
        </li>
        <li><a class="drop" href="#">Dropdown</a>
          <ul>
            <li><a href="#">Level 2</a></li>
            <li><a class="drop" href="#">Level 2 + Drop</a>
              <ul>
                <li><a href="#">Level 3</a></li>
                <li><a href="#">Level 3</a></li>
                <li><a href="#">Level 3</a></li>
              </ul>
            </li>
            <li><a href="#">Level 2</a></li>
          </ul>
        </li>
        <li><a href="#">Link Text</a></li>
        <li><a href="#">Link Text</a></li>
        <li><a href="#">Link Text</a></li>
        <li><a href="#">Long Link Text</a></li>
      </ul>
    </nav>    
    <div id="searchform">
      <div>
        <form action="#" method="post">
          <fieldset>
            <legend>Quick Search:</legend>
            <input type="text" placeholder="Enter search term&hellip;">
            <button type="submit"><i class="fas fa-search"></i></button>
          </fieldset>
        </form>
      </div>
    </div>    
  </section> -->
</div>
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<div class="wrapper bgded overlay" >
  <div id="pageintro" class="hoc clear"> 
    <!-- ################################################################################################ -->
    <article>
      <p>Bienvenido</p>
      <h3 class="heading">Cefeteria Vue</h3>
      <p>El lugar donde satisfacemos tu paladar</p>
      <footer><a class="btn" @click="gotToProducts">Conoce nuestros productos <i class="fas fa-angle-right"></i></a></footer>
    </article>
    <!-- ################################################################################################ -->
  </div>
</div>
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<div class="wrapper row3">
  <main class="hoc container clear"> 
    <!-- main body -->
    <!-- ################################################################################################ -->
    <div class="sectiontitle">
      <h6 class="heading">Conoce nuestros servicios</h6>      
    </div>
    <div class="group center btmspace-80">
      <article class="one_third first"><a class="ringcon btmspace-50"><i class="fas fa-coffee"></i></a>
        <h6 class="heading">Productos</h6>
        <p>Gran variedad de productos para todos los gustos</p>
      </article>
      <article class="one_third"><a class="ringcon btmspace-50"><i class="fas fa-car"></i></a>
        <h6 class="heading">Orderna</h6>
        <p>Y pasa a recoger en tu automóvil.</p>
      </article>
      <article class="one_third"><a class="ringcon btmspace-50"><i class="fas fa-credit-card"></i></a>
        <h6 class="heading">Paga con Paypal</h6>
        <p>Ya contamos con pagos por Paypal.</p>
      </article>
    </div>
    <p class="center"><a class="btn"  @click="gotToProducts">Conoce más <i class="fas fa-angle-right"></i></a></p>
    <!-- ################################################################################################ -->
    <!-- / main body -->
    <div class="clear"></div>
  </main>
</div>
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<div class="wrapper row2">
  <section class="hoc container clear"> 
    <!-- ################################################################################################ -->
    <article class="one_third first">
      <h6 class="heading">Ahora puedes crear tu perfil</h6>
      <p>Ya puedes crear un perfil para revisar tus pedidos realizados y hacer nuevos.</p>
      <p class="btmspace-30">Tambien puedes personalizarlo a tu gusto.</p>
      <p><a class="btn"  @click="gotToSigin">Inicia Sesión <i class="fas fa-angle-right"></i></a></p>
    </article>
    <figure class="one_third"><img class="img-fluid" style="margin-left: 80%;" src="../images/demo/backgrounds/petr-sevcovic-qE1jxYXiwOA-unsplash.jpg" alt=""></figure>    
    <!-- ################################################################################################ -->
  </section>
</div>
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- <div class="wrapper row3">
  <section class="hoc container clear">     
    <div class="sectiontitle">
      <h6 class="heading">Libero morbi tincidunt nulla sit</h6>
      <p>Amet ipsum praesent at velit aliquam ullamcorper sem a auctor</p>
    </div>
    <ul class="nospace group btmspace-80 overview">
      <li class="one_third">
        <article><a><i class="fas fa-smile"></i></a>
          <h6 class="heading"><a href="#">Dapibus nisi nunc vehicula</a></h6>
          <p>Nunc quis mattis pede turpis at elit phasellus sed sem pellentesque nunc&hellip;</p>
          <footer><a href="#">View Details <i class="fas fa-angle-right"></i></a></footer>
        </article>
      </li>
      <li class="one_third">
        <article><a href="#"><i class="fas fa-trash"></i></a>
          <h6 class="heading"><a href="#">Dignissim consequat proin</a></h6>
          <p>Nec odio nam in lacus ac purus dapibus pretium sed ornare eleifend tellus&hellip;</p>
          <footer><a href="#">View Details <i class="fas fa-angle-right"></i></a></footer>
        </article>
      </li>
      <li class="one_third">
        <article><a href="#"><i class="fas fa-life-ring"></i></a>
          <h6 class="heading"><a href="#">Aliquam mollis neque ut</a></h6>
          <p>Ullamcorper tempor dolor tortor varius nisi id euismod risus neque curabitur&hellip;</p>
          <footer><a href="#">View Details <i class="fas fa-angle-right"></i></a></footer>
        </article>
      </li>
      <li class="one_third">
        <article><a href="#"><i class=" fas fa-low-vision"></i></a>
          <h6 class="heading"><a href="#">Sodales dui sit amet mi</a></h6>
          <p>Donec cursus sapien neque gravida nulla cursus lorem ut tempor massa &hellip;</p>
          <footer><a href="#">View Details <i class="fas fa-angle-right"></i></a></footer>
        </article>
      </li>
      <li class="one_third">
        <article><a href="#"><i class="fas fa-bug"></i></a>
          <h6 class="heading"><a href="#">Porta libero at scelerisque</a></h6>
          <p>Lorem ipsum et arcu mauris consequat semper vivamus lobortis consequat&hellip;</p>
          <footer><a href="#">View Details <i class="fas fa-angle-right"></i></a></footer>
        </article>
      </li>
      <li class="one_third">
        <article><a href="#"><i class="fas fa-bicycle"></i></a>
          <h6 class="heading"><a href="#">Purus fusce consectetuer</a></h6>
          <p>Nisl in massa phasellus feugiat arcu sed lacinia egestas augue lorem posuere&hellip;</p>
          <footer><a href="#">View Details</a> <i class="fas fa-angle-right"></i></footer>
        </article>
      </li>
    </ul>
    <footer class="center"><a class="btn" href="#">Vestibulum suspendisse <i class="fas fa-angle-right"></i></a></footer>
    
  </section>
</div> -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- <div class="wrapper row2">
  <section class="hoc container clear"> 
   
    <div class="sectiontitle">
      <h6 class="heading">Felis sed pretium tortor nunc quis</h6>
      <p>Dolor in fermentum ipsum vel mi mattis venenatis vivamus</p>
    </div>
    <div id="latest" class="group">
      <article class="one_third first"><a class="imgover" href="#"><img src="../images/demo/348x261.png" alt=""></a>
        <div class="excerpt">
          <h6 class="heading">Elementum laoreet lorem donec</h6>
          <p>Pede nam quis mauris nunc volutpat elementum sapien in hendrerit justo non nisl sed dictum libero et nisi.</p>
          <footer><a href="#">Read More <i class="fas fa-angle-right"></i></a></footer>
        </div>
      </article>
      <article class="one_third"><a class="imgover" href="#"><img src="../images/demo/348x261.png" alt=""></a>
        <div class="excerpt">
          <h6 class="heading">Vestibulum accumsan sagittis</h6>
          <p>Orci nulla purus pellentesque risus magna vulputate vitae sodales in aliquam at tortor praesent tincidunt.</p>
          <footer><a href="#">Read More <i class="fas fa-angle-right"></i></a></footer>
        </div>
      </article>
      <article class="one_third"><a class="imgover" href="#"><img src="../images/demo/348x261.png" alt=""></a>
        <div class="excerpt">
          <h6 class="heading">Lorem in odio pellentesque at</h6>
          <p>Donec faucibus lorem ut neque pellentesque quam donec imperdiet nisl sed euismod ullamcorper tortor cras.</p>
          <footer><a href="#">Read More <i class="fas fa-angle-right"></i></a></footer>
        </div>
      </article>
    </div>
    <footer class="center"><a class="btn" href="#">Pharetra pulvinar risus <i class="fas fa-angle-right"></i></a></footer>    
  </section>
</div> -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- <div class="wrapper row4">
  <footer id="footer" class="hoc clear"> 
   
    <div class="one_third first">
      <h6 class="heading">Nulla facilisi praesent</h6>
      <p>Diam libero interdum at fringilla id interdum eu ante phasellus nec mauris non risus fermentum condimentum in.</p>
      <p class="btmspace-30">Vulputate ante ut adipiscing egestas risus orci tincidunt nulla ac lacinia lacus felis et augue donec lacus [<a href="#"><i class="fas fa-arrow-right"></i></a>]</p>
      <ul class="faico clear">
        <li><a class="faicon-dribble" href="#"><i class="fab fa-dribbble"></i></a></li>
        <li><a class="faicon-facebook" href="#"><i class="fab fa-facebook"></i></a></li>
        <li><a class="faicon-google-plus" href="#"><i class="fab fa-google-plus-g"></i></a></li>
        <li><a class="faicon-linkedin" href="#"><i class="fab fa-linkedin"></i></a></li>
        <li><a class="faicon-twitter" href="#"><i class="fab fa-twitter"></i></a></li>
        <li><a class="faicon-vk" href="#"><i class="fab fa-vk"></i></a></li>
      </ul>
    </div>
    <div class="one_third">
      <h6 class="heading">Aenean lobortis quam at</h6>
      <ul class="nospace clear latestimg">
        <li><a href="#"><img src="../images/demo/100x100.png" alt=""></a></li>
        <li><a href="#"><img src="../images/demo/100x100.png" alt=""></a></li>
        <li><a href="#"><img src="../images/demo/100x100.png" alt=""></a></li>
        <li><a href="#"><img src="../images/demo/100x100.png" alt=""></a></li>
        <li><a href="#"><img src="../images/demo/100x100.png" alt=""></a></li>
        <li><a href="#"><img src="../images/demo/100x100.png" alt=""></a></li>
      </ul>
    </div>
    <div class="one_third">
      <h6 class="heading">Enim fusce venenatis laoreet</h6>
      <p class="nospace btmspace-15">Elit sed est tortor molestie in consectetuer fringilla suscipit ut odio in.</p>
      <form method="post" action="#">
        <fieldset>
          <legend>Newsletter:</legend>
          <input class="btmspace-15" type="text" value="" placeholder="Name">
          <input class="btmspace-15" type="text" value="" placeholder="Email">
          <button type="submit" value="submit">Submit</button>
        </fieldset>
      </form>
    </div>   
  </footer>
</div> -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<div class="wrapper row5">
  <div id="copyright" class="hoc clear"> 
    <!-- ################################################################################################ -->
    <p class="fl_left">Copyright &copy; 2024 - All Rights Reserved - Ezequiel Pasillas Gonzalez</p>
    <p class="fl_right">Template by <a target="_blank" href="https://www.os-templates.com/" title="Free Website Templates">OS Templates</a></p>
    <!-- ################################################################################################ -->
  </div>
</div>
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<a id="backtotop" href="#top"><i class="fas fa-chevron-up"></i></a>
<!-- JAVASCRIPTS -->
<!-- <script src="layout/scripts/jquery.min.js"></script>
<script src="layout/scripts/jquery.backtotop.js"></script>
<script src="layout/scripts/jquery.mobilemenu.js"></script> -->
</div>
</template>

<script>
export default {
    methods:{
        gotToProducts(){
        this.$router.push({name: 'products'}) //? Igual de como esta en el router que se exporta del modules
      },
      gotToSigin(){
        this.$router.push({name: 'login'}) //? Igual de como esta en el router que se exporta del modules
      }
    }
}
</script>

<style lang='css' scoped>
@charset "utf-8";
/*
Template Name: Wavefire
Author: <a href="https://www.os-templates.com/">OS Templates</a>
Author URI: https://www.os-templates.com/
Copyright: OS-Templates.com
Licence: Free to use under our free template licence terms
Licence URI: https://www.os-templates.com/template-terms
File: Layout CSS
*/

@import url("../styles/fontawesome-free/css/fontawesome-all.min.css");
@import url("../styles/framework.css");

/* Rows
--------------------------------------------------------------------------------------------------------------- */
.row0,
.row0 a {}

.row1,
.row1 a {}

.row2,
.row2 a {}

.row3,
.row3 a {}

.row4,
.row4 a {}

.row5,
.row5 a {}


/* Header
--------------------------------------------------------------------------------------------------------------- */
#header {
  padding: 50px 0;
}

#header #logo * {
  margin: 0;
  padding: 0;
  line-height: 1;
}

#header #logo h1 {
  display: inline-block;
  position: relative;
  padding-bottom: 8px;
  font-size: 32px;
}

#header #logo h1::before,
#header #logo h1::after {
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1px;
  content: "";
}

/* Creates the 2 lines underneath the logo */
#header #logo h1::before {
  bottom: 3px;
}

#header #logo h1 span {
  text-transform: uppercase;
}

#header ul {}

#header ul li {}

#header ul li div {
  position: relative;
  min-height: 30px;
  padding: 0 0 0 35px;
  line-height: 1;
}

#header ul li div i {
  position: absolute;
  top: 0;
  left: 0;
  width: 25px;
  height: 23px;
  font-size: 20px;
  text-align: center;
}

#header ul li div span {
  display: block;
}

#header ul li div strong {
  display: block;
  margin: 0 0 8px 0;
}

#header div:last-child {
  margin-bottom: 0;
}

/* Used when elements stack in small viewports */


/* Search Form
--------------------------------------------------------------------------------------------------------------- */
#searchform {
  display: block;
  position: relative;
  float: right;
  height: 58px;
  line-height: 1;
  z-index: 999;
}

#searchform::after {
  display: block;
  height: 58px;
  line-height: 58px;
  padding: 0 15px;
  font-size: 20px;
  font-family: "Font Awesome\ 5 Free";
  font-weight: 900;
  content: "\f002"
    /* fa-search */
  ;
}

#searchform:hover::after,
#searchform button {
  cursor: pointer;
}

#searchform>div {
  position: absolute;
  top: 58px;
  right: 0;
  width: 280px;
  visibility: hidden;
  opacity: 0
    /* Required for transition effect */
  ;
}

#searchform:hover>div {
  visibility: visible;
  opacity: 1
    /* Required for transition effect */
  ;
}

#searchform form {
  display: block;
  position: relative;
}

#searchform form * {
  border: none;
}

#searchform input {
  display: block;
  width: 100%;
  height: 36px;
  padding: 8px 40px 8px 10px;
  font-size: 1rem;
}

#searchform ::placeholder {
  text-transform: capitalize;
}

#searchform button {
  display: block;
  position: absolute;
  top: 3px;
  right: 2px;
  height: 30px;
  font-size: 16px;
  line-height: 1;
}


/* Page Intro
--------------------------------------------------------------------------------------------------------------- */
#pageintro {
  padding: 180px 0;
}

#pageintro article {
  display: block;
  max-width: 60%;
  margin: 0 auto;
  text-align: center;
}

#pageintro .heading {
  margin-bottom: 20px;
  font-size: 4rem;
}

#pageintro p:first-of-type {
  margin: 0 0 20px 0;
  text-transform: uppercase;
  font-size: 1.6rem;
  letter-spacing: 5px;
}

#pageintro footer {
  margin-top: 50px;
}


/* Content Area
--------------------------------------------------------------------------------------------------------------- */
.container {
  padding: 80px 0;
}

/* Content */
.container .content {}

.sectiontitle {
  display: block;
  max-width: 55%;
  margin: 0 auto 80px;
  text-align: center;
}

.sectiontitle * {
  margin: 0;
}

.ringcon,
.ringcon::before {
  border-radius: 50%;
}

.ringcon {
  display: inline-block;
  position: relative;
}

.ringcon::before {
  display: block;
  position: absolute;
  top: 20px;
  left: 20px;
  width: 120px;
  height: 120px;
  border: 2px solid;
  content: "";
}

.ringcon i {
  display: block;
  position: relative;
  width: 160px;
  height: 160px;
  line-height: 160px;
  font-size: 50px;
}

.overview {}

.overview>li {
  margin-bottom: 50px;
}

.overview>li:nth-last-child(-n+3) {
  margin-bottom: 0;
}

/* Removes bottom margin from the last three items - margin is restored in the media queries when items stack */
.overview>li:nth-child(3n+1) {
  margin-left: 0;
  clear: left;
}

/* Removes the need to add class="first" */
.overview article {
  display: block;
  position: relative;
  padding: 0 0 0 65px;
}

.overview article * {
  margin: 0;
  padding: 0;
}

.overview article>a>i {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  overflow: hidden;
  line-height: 1;
  font-size: 42px;
}

.overview article .heading,
.overview article p {
  margin-bottom: 20px;
}

/* Comments */
#comments ul {
  margin: 0 0 40px 0;
  padding: 0;
  list-style: none;
}

#comments li {
  margin: 0 0 10px 0;
  padding: 15px;
}

#comments .avatar {
  float: right;
  margin: 0 0 10px 10px;
  padding: 3px;
  border: 1px solid;
}

#comments address {
  font-weight: bold;
}

#comments time {
  font-size: smaller;
}

#comments .comcont {
  display: block;
  margin: 0;
  padding: 0;
}

#comments .comcont p {
  margin: 10px 5px 10px 0;
  padding: 0;
}

#comments form {
  display: block;
  width: 100%;
}

#comments input,
#comments textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid;
}

#comments textarea {
  overflow: auto;
}

#comments div {
  margin-bottom: 15px;
}

#comments input[type="submit"],
#comments input[type="reset"] {
  display: inline-block;
  width: auto;
  min-width: 150px;
  margin: 0;
  padding: 8px 5px;
  cursor: pointer;
}

/* Sidebar */
.container .sidebar {}

.sidebar .sdb_holder {
  margin-bottom: 50px;
}

.sidebar .sdb_holder:last-child {
  margin-bottom: 0;
}


/* Latest
--------------------------------------------------------------------------------------------------------------- */
#latest {
  margin-bottom: 80px;
}

#latest article {}

#latest article img {
  width: 100%;
}

/* Force the image to have the full width of parent at all times */
#latest article .heading {
  font-size: 1.3rem;
}

#latest article .excerpt {
  padding: 20px;
  border: solid;
  border-width: 0 1px 1px 1px;
}


/* Footer
--------------------------------------------------------------------------------------------------------------- */
#footer {
  padding: 80px 0;
}

#footer .heading {
  margin-bottom: 50px;
  font-size: 1.2rem;
}

#footer .linklist li {
  display: block;
  margin-bottom: 15px;
  padding: 0 0 15px 0;
  border-bottom: 1px solid;
}

#footer .linklist li:last-child {
  margin: 0;
  padding: 0;
  border: none;
}

#footer .linklist li::before,
#footer .linklist li::after {
  display: table;
  content: "";
}

#footer .linklist li,
#footer .linklist li::after {
  clear: both;
}

#footer input,
#footer button {
  border: 1px solid;
}

#footer input {
  display: block;
  width: 100%;
  padding: 8px;
}

#footer button {
  padding: 8px 18px 10px;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
}

.latestimg {}

.latestimg>li {
  display: inline-block;
  float: left;
  width: 30%;
  margin: 0 0 5% 5%;
}

.latestimg>li:nth-last-child(-n+3) {
  margin-bottom: 0;
}

/* Removes bottom margin from the last three items - margin is restored in the media queries when items stack */
.latestimg>li:nth-child(3n+1) {
  margin-left: 0;
  clear: left;
}

/* Removes the need to add class="first" */
.latestimg>li img {
  width: 100%;
}

/* Force the image to resize to take the full space - may have to be changed for tablets, depends on personal preference */


/* Copyright
--------------------------------------------------------------------------------------------------------------- */
#copyright {
  padding: 20px 0;
}

#copyright * {
  margin: 0;
  padding: 0;
}


/* Transition Fade
This gives a smooth transition to "ALL" elements used in the layout - other than the navigation form used in mobile devices
If you don't want it to fade all elements, you have to list the ones you want to be faded individually
Delete it completely to stop fading
--------------------------------------------------------------------------------------------------------------- */
*,
*::before,
*::after {
  transition: all .3s ease-in-out;
}

#mainav form * {
  transition: none !important;
}


/* ------------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------------ */


/* Navigation
--------------------------------------------------------------------------------------------------------------- */
nav ul,
nav ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

#mainav,
#breadcrumb,
.sidebar nav {
  line-height: normal;
}

#mainav .drop::after,
#mainav li li .drop::after,
#breadcrumb li a::after,
.sidebar nav a::after {
  position: absolute;
  font-family: "Font Awesome\ 5 Free";
  font-weight: 900;
  font-size: 10px;
  line-height: 10px;
}

/* Top Navigation */
#mainav {
  display: block;
  float: left;
}

#mainav ul {
  text-transform: uppercase;
}

#mainav ul ul {
  z-index: 9999;
  position: absolute;
  width: 180px;
  text-transform: none;
  text-align: left;
}

#mainav ul ul ul {
  left: 180px;
  top: 0;
}

#mainav li {
  display: block;
  float: left;
  position: relative;
  margin: 0;
  padding: 0;
}

#mainav li:last-child {
  margin-right: 0;
}

#mainav li li {
  width: 100%;
  margin: 0;
}

#mainav li a {
  display: block;
  padding: 20px;
}

#mainav li li a {
  border: solid;
  border-width: 0 0 1px 0;
}

#mainav .drop {
  padding-left: 15px;
}

#mainav li li a,
#mainav li li .drop {
  display: block;
  margin: 0;
  padding: 10px 15px;
}

#mainav .drop::after,
#mainav li li .drop::after {
  content: "\f0d7";
}

#mainav .drop::after {
  top: 25px;
  left: 5px;
}

#mainav li li .drop::after {
  top: 15px;
  left: 5px;
}

#mainav ul ul {
  visibility: hidden;
  opacity: 0;
}

#mainav ul li:hover>ul {
  visibility: visible;
  opacity: 1;
}

#mainav form {
  display: none;
  width: 100%;
  margin: 0;
  padding: 0;
}

#mainav form select,
#mainav form select option {
  display: block;
  cursor: pointer;
  outline: none;
}

#mainav form select {
  width: 100%;
  padding: 5px;
  border: none;
}

#mainav form select option {
  margin: 5px;
  padding: 0;
  border: none;
}

/* Breadcrumb */
#breadcrumb {
  padding: 150px 0 30px;
}

#breadcrumb ul {
  margin: 0;
  padding: 0;
  list-style: none;
  text-transform: uppercase;
}

#breadcrumb li {
  display: inline-block;
  margin: 0 6px 0 0;
  padding: 0;
}

#breadcrumb li a {
  display: block;
  position: relative;
  margin: 0;
  padding: 0 12px 0 0;
  font-size: 12px;
}

#breadcrumb li a::after {
  top: 4px;
  right: 0;
  content: "\f0da";
}

#breadcrumb li:last-child a {
  margin: 0;
  padding: 0;
}

#breadcrumb li:last-child a::after {
  display: none;
}

#breadcrumb .heading {
  margin: 0;
  font-size: 2rem;
}

/* Sidebar Navigation */
.sidebar nav {
  display: block;
  width: 100%;
}

.sidebar nav li {
  margin: 0 0 3px 0;
  padding: 0;
}

.sidebar nav a {
  display: block;
  position: relative;
  margin: 0;
  padding: 5px 10px 5px 15px;
  text-decoration: none;
  border: solid;
  border-width: 0 0 1px 0;
}

.sidebar nav a::after {
  top: 10px;
  left: 5px;
  content: "\f0da";
}

.sidebar nav ul ul a {
  padding-left: 35px;
}

.sidebar nav ul ul a::after {
  left: 25px;
}

.sidebar nav ul ul ul a {
  padding-left: 55px;
}

.sidebar nav ul ul ul a::after {
  left: 45px;
}

/* Pagination */
.pagination {
  display: block;
  width: 100%;
  text-align: center;
  clear: both;
}

.pagination li {
  display: inline-block;
  margin: 0 2px 0 0;
}

.pagination li:last-child {
  margin-right: 0;
}

.pagination a,
.pagination strong {
  display: block;
  padding: 8px 11px;
  border: 1px solid;
  background-clip: padding-box;
  font-weight: normal;
}

/* Back to Top */
#backtotop {
  z-index: 999;
  display: inline-block;
  position: fixed;
  visibility: hidden;
  bottom: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  text-align: center;
  opacity: .2;
}

#backtotop i {
  display: block;
  width: 100%;
  height: 100%;
  line-height: inherit;
}

#backtotop.visible {
  visibility: visible;
  opacity: .5;
}

#backtotop:hover {
  opacity: 1;
}


/* Tables
--------------------------------------------------------------------------------------------------------------- */
table,
th,
td {
  border: 1px solid;
  border-collapse: collapse;
  vertical-align: top;
}

table,
th {
  table-layout: auto;
}

table {
  width: 100%;
  margin-bottom: 15px;
}

th,
td {
  padding: 5px 8px;
}

td {
  border-width: 0 1px;
}


/* Gallery
--------------------------------------------------------------------------------------------------------------- */
#gallery {
  display: block;
  width: 100%;
  margin-bottom: 50px;
}

#gallery figure figcaption {
  display: block;
  width: 100%;
  clear: both;
}

#gallery li {
  margin-bottom: 30px;
}


/* Font Awesome Social Icons
--------------------------------------------------------------------------------------------------------------- */
.faico {
  margin: 0;
  padding: 0;
  list-style: none;
}

.faico li {
  display: inline-block;
  margin: 8px 5px 0 0;
  padding: 0;
  line-height: normal;
}

.faico li:last-child {
  margin-right: 0;
}

.faico a {
  display: inline-block;
  width: 36px;
  height: 36px;
  line-height: 36px;
  font-size: 18px;
  text-align: center;
}

.faico a {
  color: #FFFFFF;
  background-color: #2A2D34;
}

.faico a:hover {}

.faicon-dribble:hover {
  background-color: #EA4C89;
}

.faicon-facebook:hover {
  background-color: #3B5998;
}

.faicon-google-plus:hover {
  background-color: #DB4A39;
}

.faicon-linkedin:hover {
  background-color: #0E76A8;
}

.faicon-twitter:hover {
  background-color: #00ACEE;
}

.faicon-vk:hover {
  background-color: #4E658E;
}


/* ------------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------------ */


/* Colours
--------------------------------------------------------------------------------------------------------------- */
body {
  color: #474747;
  background-color: #FFFFFF;
}

a {
  color: #1d6042;
}

a:active,
a:focus {
  background: transparent;
}

/* IE10 + 11 Bugfix - prevents grey background */
hr,
.borderedbox {
  border-color: #D7D7D7;
}

label span {
  color: #FF0000;
  background-color: inherit;
}

input:focus,
textarea:focus,
*:required:focus {
  border-color: #1d6042;
}

.overlay {
  color: #FFFFFF;
  background-color: #2c3e50;
}

.overlay::after {
  color: inherit;
  background-color: rgba(0, 0, 0, .55);
}

.overlay.light {
  color: #474747;
}

.overlay.light::after {
  background-color: rgba(255, 255, 255, .7);
}

.btn,
.btn.inverse:hover {
  color: #FFFFFF;
  background-color: #1d6042;
  border-color: #1d6042;
}

.btn:hover,
.btn.inverse {
  color: inherit;
  background-color: transparent;
  border-color: inherit;
}

.imgover:hover::before {
  background: rgba(0, 0, 0, .55);
}

.imgover,
.imgover:hover::after {
  color: #1d6042;
}


/* Rows */
.row0 {
  color: #474747;
  background-color: #F4F4F4;
}

.row1,
.row1 a {
  color: #FFFFFF;
  background-color: #1d6042;
}

.row2 {
  color: #474747;
  background-color: #F4F4F4;
}

.row3 {
  color: #474747;
  background-color: #FFFFFF;
}

.row4 {
  color: #C1C2C4;
  background-color: #323639;
}

.row5,
.row5 a {
  color: #C1C2C4;
  background-color: #2A2D34;
}

.gradient {
  color: #FFFFFF;
  background: linear-gradient(to bottom right, #8F9297, #C1C2C4);
}


/* Header */
#header #logo h1::before {
  background-color: #474747;
}

#header #logo h1::after {
  background-color: #1d6042;
}

#header #logo h1 a {
  color: inherit;
}

#header #logo h1 span {
  color: #1d6042;
}


/* Search Form */
#searchform {
  color: rgba(255, 255, 255, .5);
  background: #2c3e50;
}

#searchform:hover {
  color: #1d6042;
}

#searchform input {
  color: #FFFFFF;
  background: #2c3e50;
}

#searchform button {
  color: #FFFFFF;
  background: transparent;
}


/* Page Intro */
#pageintro {
  color: #FFFFFF;
}


/* Content Area */
.ringcon {
  color: #FFFFFF;
  background-color: #1d6042;
}

.ringcon::before {
  background-color: #2c3e50;
  border-color: rgba(255, 255, 255, .3);
}

.ringcon:hover {
  background-color: #2c3e50;
}

.ringcon:hover::before {
  background-color: #1d6042;
}

.overview a {
  color: inherit;
}

.overview article:hover a {
  color: #1d6042;
}


/* Latest */
#latest article .excerpt {
  color: inherit;
  background-color: #FFFFFF;
  border-color: rgba(0, 0, 0, .2);
}


/* Footer */
#footer .heading {
  color: #FFFFFF;
}

#footer hr,
#footer .borderedbox,
#footer .linklist li {
  border-color: rgba(255, 255, 255, .1);
}

#footer input,
#footer button {
  border-color: transparent;
}

#footer input {
  color: #474747;
  background-color: #C1C2C4;
}

#footer input:focus {
  border-color: #1d6042;
}

#footer button {
  color: #FFFFFF;
  background-color: #1d6042;
}


/* Navigation */
#mainav {}

#mainav li a {
  color: inherit;
}

#mainav .active a,
#mainav a:hover,
#mainav li:hover>a {
  color: #D5ACBB;
  background-color: inherit;
}

#mainav li li a,
#mainav .active li a {
  color: #FFFFFF;
  background-color: rgba(149, 16, 59, .5);
  /* #1d6042 */
  border-color: rgba(0, 0, 0, .6);
}

#mainav li li:hover>a,
#mainav .active .active>a {
  color: #D5ACBB;
  background-color: #1d6042;
}

#mainav form select {
  color: #474747;
  background-color: #FFFFFF;
}

#breadcrumb a {
  color: inherit;
  background-color: inherit;
}

#breadcrumb li:last-child a {
  color: #1d6042;
}

.container .sidebar nav a {
  color: inherit;
  border-color: #D7D7D7;
}

.container .sidebar nav a:hover {
  color: #1d6042;
}

.pagination a,
.pagination strong {
  border-color: #D7D7D7;
}

.pagination .current * {
  color: #FFFFFF;
  background-color: #1d6042;
}

#backtotop {
  color: #FFFFFF;
  background-color: #1d6042;
}


/* Tables + Comments */
table,
th,
td,
#comments .avatar,
#comments input,
#comments textarea {
  border-color: #D7D7D7;
}

#comments input:focus,
#comments textarea:focus,
#comments *:required:focus {
  border-color: #1d6042;
}

th {
  color: #FFFFFF;
  background-color: #373737;
}

tr,
#comments li,
#comments input[type="submit"],
#comments input[type="reset"] {
  color: inherit;
  background-color: #FBFBFB;
}

tr:nth-child(even),
#comments li:nth-child(even) {
  color: inherit;
  background-color: #F7F7F7;
}

table a,
#comments a {
  background-color: inherit;
}


/* ------------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------------ */


/* Media Queries
--------------------------------------------------------------------------------------------------------------- */
@-ms-viewport {
  width: device-width;
}


/* Max Wrapper Width - Laptop, Desktop etc.
--------------------------------------------------------------------------------------------------------------- */
@media screen and (min-width:1140px) {
  .hoc {
    max-width: 1140px;
  }
}

@media screen and (min-width:978px) and (max-width:1140px) {
  .hoc {
    max-width: 95%;
  }
}


/* Mobile Devices
--------------------------------------------------------------------------------------------------------------- */
@media screen and (max-width:978px) {
  .hoc {
    max-width: 90%;
  }

  #header {}

  #mainav {
    width: 80%;
    padding: 15px 0 0 0;
  }

  #mainav ul {
    display: none;
  }

  #mainav form {
    display: block;
  }

  #breadcrumb {}

  .container {}

  #comments input[type="reset"] {
    margin-top: 10px;
  }

  .pagination li {
    display: inline-block;
    margin: 0 5px 5px 0;
  }

  #footer {}

  #copyright {}

  #copyright p:first-of-type {
    margin-bottom: 10px;
  }
}

@media screen and (max-width:750px) {

  .imgl,
  .imgr {
    display: inline-block;
    float: none;
    margin: 0 0 10px 0;
  }

  .fl_left,
  .fl_right {
    display: block;
    float: none;
  }

  .group .group>*:last-child,
  .clear .clear>*:last-child,
  .clear .group>*:last-child,
  .group .clear>*:last-child {
    margin-bottom: 0;
  }

  /* Experimental - Needs more testing in different situations, stops double margin when stacking */
  .one_half,
  .one_third,
  .two_third,
  .one_quarter,
  .two_quarter,
  .three_quarter {
    display: block;
    float: none;
    width: auto;
    margin: 0 0 30px 0;
    padding: 0;
  }

  #header {}

  #mainav {
    float: none;
    width: 100%;
    padding: 15px 0;
  }

  #searchform {
    display: none;
  }

  #pageintro article {
    max-width: none;
  }

  #pageintro .heading {
    font-size: 2rem;
  }

  #pageintro p:first-of-type {
    font-size: 1rem;
  }

  .sectiontitle {
    max-width: none;
  }

  .overview>li:nth-last-child(-n+3) {
    margin-bottom: 30px;
  }

  #latest article {
    max-width: 348px;
  }

  /* Change it to suit your needs - default is the one_third grid width */

  #footer {
    padding-bottom: 50px;
  }

  /* Not required, just looks a little better */
}


/* Other
--------------------------------------------------------------------------------------------------------------- */
@media screen and (max-width:650px) {
  .scrollable {
    display: block;
    width: 100%;
    margin: 0 0 30px 0;
    padding: 0 0 15px 0;
    overflow: auto;
    overflow-x: scroll;
  }

  .scrollable table {
    margin: 0;
    padding: 0;
    white-space: nowrap;
  }

  .inline li {
    display: block;
    margin-bottom: 10px;
  }

  .pushright li {
    margin-right: 0;
  }

  .font-x2 {
    font-size: 1.4rem;
  }

  .font-x3 {
    font-size: 1.6rem;
  }
}
</style>