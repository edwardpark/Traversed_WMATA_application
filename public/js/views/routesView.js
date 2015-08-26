var RouteView = function(route){ //creates the bus view contructor
  this.route = route;
  this.$el = $("<div class='route'></div>");
}

RouteView.prototype = {
  render: function(){ //renders the view on the screen
    var self = this; //binds this to the context of the object

    self.$el.html(self.routeTemplate(self.route)); //changes the inner html of the element to our template
    $(".buses").append(self.$el); //appends our view to the empty div
  },

  routeTemplate: function(route){
    var html = $("<div>");
    html.append("<h2>" + this.route +"</h2>")
    return(html);
  }
}

//route is a string like this "70"
//I need to cycle throught he array and append to the .bussess
