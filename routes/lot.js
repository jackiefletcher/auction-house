Sobi.LotRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('lot', params.post_id);
  }
});
