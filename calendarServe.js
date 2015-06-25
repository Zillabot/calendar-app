var CalendarModel = Backbone.Model.extend({
    defaults : {"value" : ""}
});

var CalendarCollection = Backbone.Collection.extend({
   model : CalendarModel
});

var coll = new CalendarCollection([{value : 3},{value : 8},{value : 7}]);

var GridView = Backbone.View.extend({
    render: function () {
        for (var i = 0; i < 31; i++) {
            this.views[i].render();
        }
    },
    initialize: function () {
        this.views = [];
        for (var counter = 0; counter < 31; counter++) {
            var view = new CellView({model : this.collection.models[counter]});
            this.$el.append(view.el);
            this.views.push(view);
        };
        this.render();
    }
});

var CellView = Backbone.View.extend({
    render: function () {
        var myCounter = this.model.get("value");
        this.$el.html("<div>" + myCounter + "</div>");
    }
});

$(document).ready(function() {
    var grid = new GridView({collection : coll});
    $("#caldiv").append(grid.$el);
    console.log("Working");
});
