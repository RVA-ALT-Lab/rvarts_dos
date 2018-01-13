fetch(
  "https://rvarts.org/wp-json/tribe/events/v1/events?per_page=20"
)
  .then(function(response) {
  // Convert to JSON
  return response.json();
})
  .then(function(data) {
  // GOOD!
  data = data.events;
  for (i = 0; i < data.length; i++) {
   //console.log(data[i].title);
   var destination = getDestination(data[i]);
    writeEvents(data[i], destination);
  } 
}).then(function(){
  colorRand(); 
});


function writeEvents(data, destination) {
var match =  classDate(data);
  var post = jQuery(destination).append(
    jQuery(
      '<div id="' +
      data.id +
      '" class="event '+classDate(data)+ '"' +
      '><a href="'+data.website+'"><div class="event-bg"><div class="card event-content text-center h-100"><img src="'+featuredImg(data)+'"><h2 class="card-title event-title">' +
      data.title +
      '</h2>'+theDate(data)+'<div class="date-holder"></div></div></div></a></div>' 
    ) 
  );
}

function getDestination (data) {
   var today = new Date();
  var thisMonth = today.getMonth()+1;
  var thisDay = today.getDate()+1;
  //get event date
  var month = data.start_date_details.month;
  var day = data.start_date_details.day;
  if (thisMonth+thisDay == month+day ){
      return '#dayContent'
      }
  if (thisMonth == month) {
    return '#monthContent'
  } else {
    return '#otherContent'
  }
}


function theDate(data){
  var today = new Date();
  var thisMonth = today.getMonth()+1;
  var thisDay = today.getDate()+1;
  //get event date
  var year = data.start_date_details.year;
  var month = data.start_date_details.month;
  var day = data.start_date_details.day;
  var hour = data.start_date_details.hour;
  var minute = data.start_date_details.minutes;
  return '<div class="date">'+ month + '/' + day + '@' + hour + ':' +minute + "</div>";
}


function dayMatch(today,eventDate){
  if (today == eventDate){
    return 'today';
  }
}

function monthMatch(thisMonth, eventMonth){
  if (thisMonth == eventMonth){
    return 'month';
  }
}


function classDate(data){
  var today = new Date();
  var thisMonth = today.getMonth()+1;
  var thisDay = today.getDate()+1;
  //get event date
  var month = data.start_date_details.month;
  var day = data.start_date_details.day;
  if (thisMonth+thisDay == month+day ){
      return 'col-md-12'
      }
  if (thisMonth == month) {
    return 'col-md-6'
  } else {
    return 'col-md-4'
  }
  
}


function colorRand(){
  var colors = ['black','blue','green','pink','red','yellow'];
  var dates = document.querySelectorAll('.date-holder'); 
  for (i = 0; i < dates.length; i++){
     var color = colors[Math.floor(Math.random()*colors.length)];
     dates[i].classList.add(color);
  }
}

function featuredImg(data){
  if (data.image.url != null){   
    return data.image.url;
  } else {
    return 'https://c1.staticflickr.com/5/4535/26665820059_1d68b36a35_z.jpg';//replace with RVArts logo 
  }
}


