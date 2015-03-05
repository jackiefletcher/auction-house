Sobi.NewItemController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      debugger;
      var item = this.get('model');
      item.save();
      this.transitionToRoute('lot', item.get('lot'));
    }
  }
});
