var BusView = function(bus){ //creates the bus view contructor
  this.bus = bus;
  this.$el = $("<div class='bus'></div>");
}

BusView.prototype = {
  render: function(){ //renders the view on the screen
    var self = this; //binds this to the context of the object

    self.$el.html(self.busTemplate(self.bus)); //changes the inner html of the element to our template
    $(".buses").append(self.$el); //appends our view to the empty div

    var moreButton = self.$el.find(".more-icon");
    console.log("more button is: " + moreButton)
    var busDiv   = self.$el.find("div.bus");

    busDiv.hide(); // hide div until it's populated with songs

    moreButton.on("click", function(){
      console.log("more button is working")
      self.toggleBus(busDiv);
    });

  },
  toggleBus: function(songsDiv){
  var self = this;
  // if not in DOM, populate
  if(songsDiv.children().length === 0){
    this.artist.fetchSongs().then(function(songs){
      self.appendSongs(songs, songsDiv);
    });
  }
  // toggle (note: songsDiv starts hidden)
  songsDiv.toggle();
  this.toggleButton(songsDiv);
  },
  busTemplate: function(bus){
    var html = $("<div>");
    console.log(bus.RouteID);
    html.append("<img class='more-icon' src='../public/images/icon-more.png'>").fadeIn(2000);
    html.append("<h2><span class='busroute'>"+ this.bus.RouteID + "</span> " + this.bus.Minutes+" min</h2>").fadeIn(2000);
    return(html);
  }
}
