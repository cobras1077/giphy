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
  
  $("#emailLink").click(function(){
  var searched=$("#search-term").val();
  var custom_url="https://api.giphy.com/v1/gifs/search?q="+searched+"&rating=pg&api_key=dc6zaTOxFJmzC";
  
 
  $.ajax({
      url:custom_url,
      method:"GET",
      success: function(response){
      $('#emailLink').on('click', function (event) {
      event.preventDefault();
    alert("Huh");
    var email = 'test@theearth.com';
    var subject = 'Circle Around';
    var emailBody = response.data[Math.floor(Math.random() * response.data.length)].images.fixed_width.url;
    window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
  });
  
      }
      });
  });
  
  
});
$("#random-button").click(function(){
  $(".gallery").empty();
  var custom_url= "https://api.giphy.com/v1/gifs/search?q=random&rating=pg&api_key=dc6zaTOxFJmzC";
  $.ajax({
      url:custom_url,
      method:"GET",
      success: function(response){
      var randomizer = Math.floor(Math.random() * response.data.length);
      $(".gallery").append("<img src='" + response.data[randomizer].images.fixed_width.url + "'/>");
        
      }
  });
  
});

// $("#search-all").click(function(){
//   $(".gallery").empty();
//   var searched=$("#search-term").val();
//   var custom_url="https://api.giphy.com/v1/gifs/search?q="+searched+"&rating=pg&api_key=dc6zaTOxFJmzC";
  
 
//   $.ajax({
//       url:custom_url,
//       method:"GET",
//       success: function(response){
//       var length= response.data
//       var newHtml=[];
//       }
//   });
// });