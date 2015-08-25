var busView = function(bus){
  this.bus = bus;
  this.$el = $("<div class='bus'></div>");
}

busView.prototype = {
  render: function(){
    var self = this;

    self.$el.html(self.busTemplate(self.bus));
    $(".buses").append(self.$el);
  },

  busTemplate: function(bus){
    var html = $("<div>");
    html.append("<h2>" + bus.RouteID + "</h2>")
    html.append("<p>arrives in " + bus.minutes+"</p>")
    return(html);
  }
}
