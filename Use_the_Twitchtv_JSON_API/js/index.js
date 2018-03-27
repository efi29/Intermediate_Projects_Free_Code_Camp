/*["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]*/

//start main function

$(function(){
  
  var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  
 $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/freecodecamp').done(function(data){
 //console.log(data); 
   if(data.stream===null){
     $('#fcc').html(' offline');
   }
   else{
     $('#fcc').html('is online');
   }
   
   
   
 });
  
  for (var i=0 ; i < users.length; i++){
   $.ajax({
     type:'GET',
     url:'https://wind-bow.glitch.me/twitch-api/channels/'+users[i],
     success:function(dataU){
       //console.log(dataU);
       
       $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/'+ dataU.name).done(function(data2){
 console.log(data2); 
         
  var name = data2._links.self.slice(37);
         //console.log(name);
         
   if(data2.stream===null){
     $('#user').append('<br><a target= "_blank" href="https://www.twitch.tv/' + name + '">' + name +' </a></br>');
   $('#status').append('<br>offline</br>'); 
     $('#channel').append(' <br>NULL</br>');
   }
   else{
     $('#user').append('<br><a target= "_blank" href="https://www.twitch.tv/' + name + '">' + name +' </a></br>');
     $('#status').append('<br>online</br>');
     $('#channel').append('<br>'+ data2.stream.game+'</br>');
   }
   
   
   
 });
       
       
       
       
     },
 
     
     
     
     error:function(err){
    alert("Err");
       
  }
     
     
   }) 
    
  };
})