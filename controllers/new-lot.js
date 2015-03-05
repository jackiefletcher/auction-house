Sobi.NewLotController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        name: this.get('name'),
        description: this.get('description'),
        auctionDate: this.get('auctionDate'),
        imgUrl: this.get('imgUrl'),

        // format: "YYYYMMDD",
        // date: null,
        // auctionDate: function() {
        //   var date = this.get('date'),
        //       format = this.get('format');
        //   return moment(date).format(format);
        // }.property('date', 'format'),

      });
      newLot.save().then(function() {
      });
      this.transitionToRoute('lots');
    }
  }
});
