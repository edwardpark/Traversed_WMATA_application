var BusView = function(bus){
  this.bus = bus;
  this.$el = $("<div class='bus'></div>");
}

BusView.prototype = {
  render: function(){
    var self = this;

    self.$el.html(self.busTemplate(self.bus));
    $(".buses").append(self.$el);
  },

  busTemplate: function(bus){
    var html = $("<div>");
    html.append("<h2>" + bus.routeID + " " + bus.minutes+" min</h2>")
    return(html);
  }
}
