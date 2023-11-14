'use strict';
$(function() {
   var btnTitle = $(".btn-upload-input-title").html();
   var btnTitleHtml = $.parseHTML(btnTitle);
   $(".btn-upload-input input:file").change(function (){
      console.log("im clicked" + this.files.length);
      if( this.files && this.files.length >= 1 ) {
         var file = this.files[0];
            var reader = new FileReader();
            // Set preview image into the popover data-content
            reader.onload = function (e) {
               $(".btn-upload-input-title").text(file.name);
            }
            reader.readAsDataURL(file);
      }
      else {
         $(".btn-upload-input-title").html(btnTitle);
      }
        
    });   
});
$(function(){
    setTimeout(function() {
        $(".alert").fadeTo(500, 0).slideUp(500, function(){
            $(this).remove(); 
        });
    }, 8000);
});
//nav
let togglee =document.querySelector('.navbar-toggler');
let vavber = document.querySelector('.nav-sidebar');
let minber = document.querySelector('.bg-dark-navber');
let contentd = document.querySelector('.content-admin');
togglee.onclick = function(){
  vavber.classList.toggle('active');
  minber.classList.toggle('active');
  contentd.classList.toggle('active');
}
///////
function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          $('#file_upload')
              .attr('src', e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
  }
}
$('.accordion-button').on('keydown',function (e) {
 
 
   $('.accordion-collapse').toggle("show")
   
 })
    