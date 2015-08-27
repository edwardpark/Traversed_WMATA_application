var BusView = function(bus){ //creates the bus view contructor
  this.bus = bus;
  this.$el = $("<div class='bus'></div>");
}

BusView.prototype = {
  render: function(){ //renders the view on the screen
    var self = this; //binds this to the context of the object

    self.$el.html(self.busTemplate(self.bus)); //changes the inner html of the element to our template
    $(".show").append(self.$el); //appends our view to the empty div

  },

  busTemplate: function(bus){
    var html = $("<div>");
    html.append("<h2>" + this.bus.RouteID + " " + this.bus.Minutes+" min</h2>")
    return(html);
  }
}
