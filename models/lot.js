Sobi.Lot = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  auctionDate: DS.attr(),
  price: DS.attr(),
  imgUrl: DS.attr(),
  backStory: DS.attr(),
  items: DS.hasMany('item', {async: true})
});
