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


$('.accordion-button').on('keydown',function (e) {
 
 
   $('.accordion-collapse').collapse("toggle")
  
   
 })
 

 // Function to handle the keyboard shortcut
 
//  function handleKeyboardShortcut(event) {
//     if (event.ctrlKey && event.keyCode === 83 || event.key == "Enter") {
//         event.preventDefault(); // Prevent the browser's save dialog
//         document.getElementById("saveButton").click(); // Trigger the "Save" button click
//     }
// }

// Function to display the printout message
// function displayPrintoutMessage() {
//     alert("save data");
//     save();
// }

// Attach the event listeners
// document.addEventListener("keydown", handleKeyboardShortcut);
// document.getElementById("saveButton").addEventListener("click", displayPrintoutMessage);

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

/**upload-file */
//     const uploadArea = document.querySelector('.upload-area');
//     const fileList = document.querySelector('.file-list');

//     uploadArea.addEventListener('dragover', (e) => {
//       e.preventDefault();
//       uploadArea.style.border = '2px dashed #007bff';
//     });

//     uploadArea.addEventListener('dragleave', () => {
//       uploadArea.style.border = '2px dashed #ccc';
//     });

//     uploadArea.addEventListener('drop', (e) => {
//       e.preventDefault();
//       uploadArea.style.border = '2px dashed #ccc';
//       const files = e.dataTransfer.files;
//       handleFiles(files);
//     });

//     uploadArea.addEventListener('click', () => {
//       const input = document.createElement('input');
//       input.type = 'file';
//       input.multiple = true;
//       input.click();
//       input.addEventListener('change', () => {
//         const files = input.files;
//         handleFiles(files);
//       });
//     });

//     function handleFiles(files) {
//       for (const file of files) {
//         const listItem = document.createElement('li');
//         listItem.innerHTML = `
//           <span class="file-name">${file.name}</span>
//           <span class="file-size">${formatFileSize(file.size)}</span>
//           <button type="button" class="remove-button" data-file-name="${file.name}">Remove</button>
//         `;
//         fileList.appendChild(listItem);
//       }

//       const removeButtons = document.querySelectorAll('.remove-button');
//       removeButtons.forEach(button => {
//         button.addEventListener('click', () => {
//           const fileName = button.dataset.fileName;
//           removeFile(fileName);
//         });
//       });
//     }

//     function formatFileSize(bytes) {
//       if (bytes < 1024) return bytes + ' B';
//       if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
//       if (bytes < 1073741824) return (bytes / 1048576).toFixed(1) + ' MB';
//       return (bytes / 1073741824).toFixed(1) + ' GB';
//     }

//     function removeFile(fileName) {
//   const listItems = fileList.children;
//   for (const item of listItems) {
//     if (item.querySelector('.file-name').textContent === fileName) {
//       item.remove();
//       break;
//     }
//   }
// }
  
