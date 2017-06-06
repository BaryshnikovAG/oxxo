$(".super-btn").on("click", function() {      
   $('#imagepreview').attr('src', $(this).parents(".thumbnail").find("img").attr("src")); 
   $('#imagemodal').modal('show'); 
});