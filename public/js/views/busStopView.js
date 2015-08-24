var BusStopView = function(busStop){
  this.busStop = busStop;

  this.$el = $("<div class='busStops'></div>");
  this.render();

  $(".busStops").append(this.$el);
};

BusStopView.prototype = {
  render: function(){
    var self = this;

    self.$el.html(self.busStopTemplate(self.busStop));
    $(".busStops").append(self.$el);
  },
  busStopTemplate: function(busStop){
    var html = $("<div>");
    html.append("<h3>" + busStop.name + "</h3>");
    html.append("<p>" + busStop.stopID + "</p></div>");
    return(html);
  }
};
