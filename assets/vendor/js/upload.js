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

