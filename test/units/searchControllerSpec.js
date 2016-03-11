describe('SearchController', function () {
  var ctrl, MockSearchService, dummyData;

  beforeEach(module('OctoSearch'));

  beforeEach(function () {

    MockSearchService = {
      getUserData: function () {
        return dummyData;
      }
    };

    inject(function ($controller) {
      // TODO: inject mock search service
      // $controller('SearchController', {SearchService: MockSearchService})
      ctrl = $controller('SearchController');
    });

    spyOn(ctrl, 'getUserData').and.returnValue(parsedDummyData);
  });

  it('initializes with an empty users property', function () {
    expect(ctrl.users.length).toEqual(0);
  });

  it('initializes with an empty search term property', function(){
    expect(ctrl.searchTerm).toEqual("");
  });

  describe('#getUserData', function(){
    // TODO: make this test pass
    xit('gets users from the search service', function () {
      spyOn(MockSearchService, 'getUserData').and.callThrough();
      ctrl.getUsers();
      expect(ctrl.getUserData).toHaveBeenCalled();
    });

    it('sets the users property to the users from the payload', function(){
      ctrl.getUsers();
      expect(ctrl.users.length).toEqual(4);
    });

    it('sets the users property with each username from the payload', function(){
      ctrl.getUsers();
      expect(ctrl.users[0]).toEqual('mike');
    });

  });

  parsedDummyData = ['mike', 'mbostock', 'MikePall', 'prime31'];
});
