/*
The HTML Geolocation API is used to get the geographical position of a user.

Since this can compromise privacy, the position is not available unless the user approves it.*/
//299 thunserstorm https://cdn.pixabay.com/photo/2013/10/23/09/05/lightning-199651_1280.jpg
//499 drizzle https://www.geo.tv/assets/uploads/updates/2017-06-26/147089_5166454_updates.jpg
//599 rain http://weknowyourdreams.com/images/rain/rain-12.jpg
//699 snow https://cdn.24.co.za/files/Cms/General/d/4271/4ccfce54bf004676a8d57d54e1e67a4a.jpg
//799 fog https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/High_Desert_Fog.jpg/450px-High_Desert_Fog.jpg
//800 clear https://news.am/img/news/11/97/85/default.jpg
//>800 cloudy http://kurir.mk/en/wp-content/uploads/vreme3.jpg-5003.jpg
//apiid =3c2eb140b715349029defefd84c26d5d

$(function(){
  
var C;
var apiData;

  

  //image array for background
 /* backgroundImage = [
  'https://cdn.pixabay.com/photo/2013/10/23/09/05/lightning-199651_1280.jpg',
    'https://www.geo.tv/assets/uploads/updates/2017-06-26/147089_5166454_updates.jpg',
    'http://weknowyourdreams.com/images/rain/rain-12.jpg',
    'https://cdn.24.co.za/files/Cms/General/d/4271/4ccfce54bf004676a8d57d54e1e67a4a.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/High_Desert_Fog.jpg/450px-High_Desert_Fog.jpg',
    'https://news.am/img/news/11/97/85/default.jpg',
    'http://kurir.mk/en/wp-content/uploads/vreme3.jpg-5003.jpg',
]*/
  //helper function
  function showTemp(F,C){
  if (C) 
    return Math.round((F -32)*(5/9))+'&deg; C';
    return Math.round(F)+'&deg; F';
  }
  
  //showResult
  function render (data,C){
    var current_Icon = data.weather[0].icon;
    var current_Temp = showTemp(data.main.temp,C);
    
    $('#current_Temp').html(current_Temp);
    var current_Icon = 'https://api.openweathermap.org/img/w/'+ current_Icon + '.png'; 
  $('#current_Temp').prepend('<img src =' + current_Icon + '>' ) ;
    
  }
  
 $.getJSON('https://freegeoip.net/json/').done(function(location){
         console.log(location);                                      
      $('#country_Name').html(location.country_name);  
      $('#city_Name').html(location.city);
   
   
      $.getJSON('https://api.openweathermap.org/data/2.5/weather?lat='+location.latitude+'&lon='+location.longitude+'&units=imperial&appid=ae885aa0c3d0587733f03cf57abda96e', function(data){
        apiData=data;
       
        //console.log(data);
        //render(apiData,C);
        $('#c_f').click(function(){
          C = !C
          render(data,C);
        })
      })
   
                                               })
  
  
  
  
  
  
})