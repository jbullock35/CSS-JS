<script>
  // The <script> tags are necessary when being source by xaringan.
  // [2020 10 10].
  
  
  // window.onload = function () {


  /* Scroll to top of presenter notes when moving to a new slide. See
     https://github.com/gnab/remark/wiki/Configuration#api for more.
     [2021 03 27] */
  function scrollNotesToTop() {
		presenterNotes = document.querySelector(".remark-notes")
    presenterNotes.scrollTo(0,0)  
  }
  slideshow.on('showSlide', scrollNotesToTop);



  /* Reduce gap between a paragraph and the following code block. */
  myPre = document.querySelectorAll("p + pre");
  for (const pre of myPre) { pre.previousElementSibling.style.marginBottom = "0.2em" };


  /* Adjust list numbering. It may be possible to do this more 
     elegantly with a remark.js macro, such that I don't need a 
     different pair of JS commands for each new start number. See 
     https://slides.yihui.org/xaringan/#33. */
  let myLists3 = document.querySelectorAll(".listStart3 ol");
  myLists3.forEach(function (x) { x.setAttribute("start", 3) } );
  
  let myLists4 = document.querySelectorAll(".listStart4 ol");
  myLists4.forEach(function (x) { x.setAttribute("start", 4) } );

  let myLists5 = document.querySelectorAll(".listStart5 ol");
  myLists5.forEach(function (x) { x.setAttribute("start", 5) } );
//}
</script>
