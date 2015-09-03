var BusView = function(bus){ //creates the bus view contructor
  this.bus = bus;
  this.$el = $("<div class='bus'></div>");
}

BusView.prototype = {
  render: function(){ //renders the view on the screen
    var self = this; //binds this to the context of the object

    self.$el.html(self.busTemplate(self.bus)); //changes the inner html of the element to our template
    $(".buses").append(self.$el); //appends our view to the empty div

    var moreButton = self.$el.find("img.more-icon");
    var busDetails = self.$el.find("div.bus-details");

    busDetails.hide(); // hide div until it's populated with songs

    $( moreButton ).click(function() {
        console.log("more button is working")
        busDetails.toggle(); // toggle (note: busDetails starts hidden)
        console.log("this weather is: " + this.weather)
    });

  },
  busTemplate: function(bus){
    var html = $("<div class='bus-content'>");
    console.log(bus.RouteID);

    // same note as in weatherView... best to just fade in the whole element
    // when you render it.
    html.append("<img class='more-icon' src='../public/images/icon-more.png'>").fadeIn(2000);
    html.append("<h2><span class='busroute'>"+ this.bus.RouteID + "</span></h2>").fadeIn(2000);
    html.append("<h4><span class='busroute'>"+ this.bus.Minutes + " min </span></h4>").fadeIn(2000);
    html.append("<h5><div class='bus-details'>"+ this.bus.DirectionText + "</div> " + "</h5>").fadeIn(2000);
    return(html);
  }
}
