// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
  $(".gallery").empty();
  var searched=$("#search-term").val();
  var custom_url="https://api.giphy.com/v1/gifs/search?q="+searched+"&rating=pg&api_key=dc6zaTOxFJmzC";
  
 
  $.ajax({
      url:custom_url,
      method:"GET",
      success: function(response){
        var randomizer = Math.floor(Math.random() * response.data.length);
        $(".gallery").append("<img src='" + response.data[randomizer].images.fixed_width.url + "'/>");
        
      }
  });
  
  
});

