Sobi.Item = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  auctionDate: DS.attr(),
  price: DS.attr(),
  imgUrl: DS.attr(),
  backStory: DS.attr(),
  lot: DS.belongsTo('lot', {async: true})
})
