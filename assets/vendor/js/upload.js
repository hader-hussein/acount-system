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
// let togglee =document.querySelector('.navbar-toggler');
// let vavber = document.querySelector('.nav-sidebar');
// let minber = document.querySelector('.bg-dark-navber');
// let contentd = document.querySelector('.content-admin');
// togglee.onclick = function(){
//   vavber.classList.toggle('active');
//   minber.classList.toggle('active');
//   contentd.classList.toggle('active');
// }
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
 
 
   $('.accordion-collapse').collapse("toggle")
  
   
 })
 /***firstDropDownTree */
$("#dropdowntree").kendoDropDownTree({
   placeholder: "Select ...",
   filter: "startswith",
   dataSource: [
       {
           text: "Furniture", expanded: true, items: [
               { text: "Tables & Chairs" },
               { text: "Sofas" },
               { text: "Occasional Furniture" }
           ]
       },
       {
           text: "Decor", items: [
               { text: "Bed Linen" },
               { text: "Curtains & Blinds" },
               { text: "Carpets" }
           ]
       }
   ]
});
/**tow */
$("#dropdowntree-tow").kendoDropDownTree({
   placeholder: "Select ...",
   filter: "startswith",
   dataSource: [
       {
           text: "Furniture", expanded: true, items: [
               { text: "Tables & Chairs" },
               { text: "Sofas" },
               { text: "Occasional Furniture" }
           ]
       },
       {
           text: "Decor", items: [
               { text: "Bed Linen" },
               { text: "Curtains & Blinds" },
               { text: "Carpets" }
           ]
       }
   ]
});


 // Function to handle the keyboard shortcut
 
 function handleKeyboardShortcut(event) {
    if (event.ctrlKey && event.keyCode === 83 || event.key == "Enter") {
        event.preventDefault(); // Prevent the browser's save dialog
        document.getElementById("saveButton").click(); // Trigger the "Save" button click
    }
}

// Function to display the printout message
function displayPrintoutMessage() {
    alert("save data");
    save();
}

// Attach the event listeners
document.addEventListener("keydown", handleKeyboardShortcut);
document.getElementById("saveButton").addEventListener("click", displayPrintoutMessage);

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
  }
  $("#imageUpload").change(function() {
    readURL(this);
  });
