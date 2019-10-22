$(document).ready(function(){
 
    $("#js-shopping-list-form").on("submit", function (event) {
     
      event.preventDefault();
      
      const listEntry = $('input[name="shopping-list-entry"]').val();
      const newCopy = $(".container ul li").last().clone();
      const updated = $(".container ul ").last().append(newCopy);
      const added = $('.container ul li').last().find('.shopping-item').text(listEntry);
  
      $('input[name="shopping-list-entry"]').val('');
  
      $('.container ul li').last().find('.shopping-item-toggle').on('click', function (event) {
        $(this).closest('div').prev().toggleClass('shopping-item__checked');
      });
  
      $('.container ul li').last().find('.shopping-item-delete').on('click', function (event) {
        $(this).closest('div').parent().remove();
      });
    });
    $('.shopping-item-toggle').on('click', function (event) {
      $(this).closest('div').prev().toggleClass('shopping-item__checked');
    });
    $('.shopping-item-delete').on('click', function (event) {
      $(this).closest('div').parent().remove();
    
    });
  
 
});
