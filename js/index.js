//when the webpage is loaded, load this function
$(document).ready(function(){
  var quote;
  var author;
 function createQuoteRandom(){
   //making API request
   $.ajax({
   url:'https://api.forismatic.com/api/1.0/',
     jsonp:'jsonp',
     dataType:'jsonp',
     data:{
       method:'getQuote',
       lang:'en',
       format:'jsonp',
     },
     success:function(response){
      quote=response.quoteText;
      author=response.quoteAuthor;
       $('#quote').text('" '+ quote+'"');
   
     if (author){
     $('#author').text('by '+ author);
   }
          else{
          $('#author').text('unknown author');
          }
     }
   });
 }                
    createQuoteRandom(); 
  
  $('.next_Quote').on('click',function(){
    createQuoteRandom(); 
  });
  
 
  $('.tweet_ThisQuote').on('click',function(){
    window.open ('https://twitter.com/intent/tweet?text='+encodeURIComponent(quote+'--'+author));
  });
  
  $( document ).ready(function() {
    $('#change_bc').click(function() {
        var rand = Math.floor(0xfffff * Math.random());
        var color = '#' + rand;
        $('#quote').css('color', color );
      $('#author').css('color', color );
    });
});     

  
                  });