describe('SearchController', function () {
  beforeEach(module('OctoSearch'));

  var ctrl;

  beforeEach(inject(function ($controller) {
    ctrl = $controller('SearchController');
  }));

  it('initializes with an empty search result and term', function () {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });
});
