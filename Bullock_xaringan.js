<script>
  // The <script> tags are necessary when being source by xaringan.
  // [2020 10 10].
  
  
  // window.onload = function () {

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

//}
</script>
