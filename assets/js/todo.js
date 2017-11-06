$("ul").on("click","li",function(){ 
  $(this).toggleClass("completed");       
    });
$("ul").on("click","span",function(e){
  $(this).parent().fadeOut(600,function(){
    $(this).remove();
    })
 e.stopPropagation(); 
});

$("input[type='text']").keypress(function(e){
  if(e.which===13){
   let todoText = $(this).val();
   $(this).val("");
   $("ul").append("<li><span>x </span>" + todoText +"</li>");
  }
  });