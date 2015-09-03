var BusStopView = function(busStop){
  this.busStop = busStop;

  this.$el = $("<div class='busStops'></div>");
  this.render();

  $(".busStops").append(this.$el);
};

BusStopView.prototype = {
  render: function(){
    // since there are no callbacks, you don't need the self=this statement
    // (it's not wrong per se, but convention is to only use it when you need it)
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
