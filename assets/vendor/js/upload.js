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
 
 
   $('.accordion-collapse').collapse("toggle")
  
   
 })
 /***firstDropDownTree */
 var arr4=[
   {title:"St Fatima",href:"#1",dataAttrs:[{title:"dataattr1",data:"value1"},{title:"dataattr2",data:"value2"},{title:"dataattr3",data:"value3"}]}
   ,
   {title:"Korba",href:"#2",dataAttrs:[{title:"dataattr4",data:"value4"},{title:"dataattr5",data:"value5"},{title:"dataattr6",data:"value6"}]}
   ,
   {title:"Roxi",href:"#3",dataAttrs:[{title:"dataattr7",data:"value7"},{title:"dataattr8",data:"value8"},{title:"dataattr9",data:"value9"}]}
   ];
   
 var arr3=[
   {title:"Abbas Al Akkad",href:"#1",dataAttrs:[{title:"dataattr1",data:"value1"},{title:"dataattr2",data:"value2"},{title:"dataattr3",data:"value3"}]}
   ,
   {title:"Makram Obeid",href:"#2",dataAttrs:[{title:"dataattr4",data:"value4"},{title:"dataattr5",data:"value5"},{title:"dataattr6",data:"value6"}],data:arr4}
   ,
   {title:"Mostafa Al Nahas",href:"#3",dataAttrs:[{title:"dataattr7",data:"value7"},{title:"dataattr8",data:"value8"},{title:"dataattr9",data:"value9"}]}
   ];
   
   var arr2=[
   {title:"Teriumph",href:"#1",dataAttrs:[{title:"dataattr1",data:"value1"},{title:"dataattr2",data:"value2"},{title:"dataattr3",data:"value3"}] ,data:arr3}
   ,
   {title:"Safir",href:"#2",dataAttrs:[{title:"dataattr4",data:"value4"},{title:"dataattr5",data:"value5"},{title:"dataattr6",data:"value6"}]}
   ,
   {title:"El-Hegaz Sq",href:"#3",dataAttrs:[{title:"dataattr7",data:"value7"},{title:"dataattr8",data:"value8"},{title:"dataattr9",data:"value9"}]}
   ];
 var arr=[
   {title:"Heliopolis",href:"#1",dataAttrs:[{title:"dataattr1",data:"value1"},{title:"dataattr2",data:"value2"},{title:"dataattr3",data:"value3"}], data: arr2}
   ,
   {title:"Nasr City",href:"#2",dataAttrs:[{title:"dataattr4",data:"value4"},{title:"dataattr5",data:"value5"},{title:"dataattr6",data:"value6"}]}
   ,
   {title:"Down Town",href:"#3",dataAttrs:[{title:"dataattr7",data:"value7"},{title:"dataattr8",data:"value8"},{title:"dataattr9",data:"value9"}],data:arr3}
   ];
   
   var options = {
      title : "Areas 2",
      data: arr,
      maxHeight: 300,
      clickHandler: function(element){
         //gets clicked element parents
         console.log($(element).GetParents());
         //element is the clicked element
         console.log(element);
         $("#firstDropDownTree").SetTitle($(element).find("a").first().text());
         console.log("Selected Elements",$("#firstDropDownTree").GetSelected());
      },
      expandHandler: function(element,expanded){
         console.log("expand",element,expanded);
      },
      checkHandler: function(element,checked){
         console.log("check",element,checked);
      },
      closedArrow: '<i class="fa fa-caret-right" aria-hidden="true"></i>',
      openedArrow: '<i class="fa fa-caret-down" aria-hidden="true"></i>',
      multiSelect: true,
      selectChildren: true,
   }
   
   $("#firstDropDownTree").DropDownTree(options);  
/**endfirstDropDownTree */
var options2 = {
	title : "Areas 1",
	data: arr3,
	maxHeight: 3000,
	clickHandler: function(element){
				//gets clicked element parents
		console.log($(element).GetParents());
		//element is the clicked element
		console.log(element);
		$("#firstDropDownTree2").SetTitle($(element).find("a").first().text());
		console.log("Selected Elements",$("#firstDropDownTree2").GetSelected());
	},
	closedArrow: '<i class="fa fa-caret-right" aria-hidden="true"></i>',
	openedArrow: '<i class="fa fa-caret-down" aria-hidden="true"></i>',
	multiSelect: true,
}


$("#firstDropDownTree2").DropDownTree(options2);
  
