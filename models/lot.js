Sobi.Lot = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  auctionDate: DS.attr(),
  items: DS.hasMany('item', {async: true})
});
