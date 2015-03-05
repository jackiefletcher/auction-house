Sobi.NewLotController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        name: this.get('name'),
        description: this.get('description'),
        auctionDate: this.get('auctionDate'),
        price: this.get('price'),
        imgUrl: this.get('imgUrl'),
        backStory: this.get('backStory')
      });
      newLot.save().then(function() {
      });
      this.transitionToRoute('lots');
    }
  }
});
