/*

I can click a button to see a random Wikipedia entry.

I can search Wikipedia entries in a search box and see the resulting Wikipedia entries. Things needed:
  
 
*/

$(function(){
  
  var rslt = "";
  $('#search').click(function(){
    var searchEntry= $('#searchEntry').val();
    
    
  
  //var results;
  $.ajax({
    type:'GET',
    url:'https://en.wikipedia.org/w/api.php?action=opensearch&search='+ searchEntry + '&callback=?',
    async:false,
    dataType:'jsonp', 
    format:'jsonp',
   
    
    success:function(data){
   // console.log(data);
      $("#results").empty().append(rslt);
    for(var i=0;i<10;i++){
     $('#results').append('</br></br>'+ '<a href=' + data[3][i] + ' target="blank" >' + data[1][i] + '</h4></a></br>' + data[2][i] + '</br>')
    } 
      
    },
    
       error:function(err){
    alert("Err")
  },
    
   
    
    
  })
    
  
  });
  
      
      
  
  
  }); 
  //press the glyficon to search