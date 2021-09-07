(function () {
  const NxAbstractSearchQuery = require('../src');
  const initialState = {
    pageNo: 1,
    pageSize: 10,
    keyword: '',
    types: [],
    labels: []
  };

  describe('NxAbstractSearchQuery.methods', function () {
    test('basic update pageNo/keyword', function () {
      var nxSearchQuery = new NxAbstractSearchQuery({
        ...initialState
      });

      nxSearchQuery.set('pageNo', 2);
      expect(nxSearchQuery.get()).toBe('pageNo=2&pageSize=10');
      nxSearchQuery.set('keyword', 'abc');
      expect(nxSearchQuery.get()).toBe('pageNo=2&pageSize=10&keyword=abc');
    });

    test('update array query', () => {
      var nxSearchQuery = new NxAbstractSearchQuery({
        ...initialState
      });
      nxSearchQuery.set('labels', ['lb1', 'lb2']);
      expect(nxSearchQuery.get()).toBe('pageNo=1&pageSize=10&labels=lb1,lb2');
    });

    test('change event', () => {
      var times = 0;
      var nxSearchQuery = new NxAbstractSearchQuery(
        {
          ...initialState
        },
        {
          onChange: (event) => {
            // console.log('changed:', event);
            times++;
          }
        }
      );

      nxSearchQuery.set('labels', ['lb1', 'lb2']);
      nxSearchQuery.set('labels', ['lb1', 'lb2']);
      nxSearchQuery.set('pageNo', 2);
      expect(times).toBe(3);
      expect(nxSearchQuery.get()).toBe('pageNo=2&pageSize=10&labels=lb1,lb2');
    });

    test('Hook.set for set data/key/value', () => {
      var nxSearchQuery = new NxAbstractSearchQuery(
        {
          ...initialState
        },
        {
          set: (data, key, value) => {
            nx.set(data, key, value);
            if (!key.includes('page')) {
              data.pageNo = 1;
            }
          }
        }
      );
      nxSearchQuery.set('pageNo', 2);
      expect(nxSearchQuery.get()).toBe('pageNo=2&pageSize=10');
      nxSearchQuery.set('labels', ['lb1', 'lb2']);
      expect(nxSearchQuery.get()).toBe('pageNo=1&pageSize=10&labels=lb1,lb2');
    });

    test('to hash will get the data', () => {
      var nxSearchQuery = new NxAbstractSearchQuery({
        ...initialState
      });
      nxSearchQuery.set('pageNo', 2);
      nxSearchQuery.set('labels', ['lb1', 'lb2']);
      expect(nxSearchQuery.data).toEqual({
        pageNo: 2,
        pageSize: 10,
        keyword: '',
        types: [],
        labels: ['lb1', 'lb2']
      });
    });

    test('sets will only trigger one time', () => {
      var times = 0;
      var nxSearchQuery = new NxAbstractSearchQuery(
        {
          ...initialState
        },
        {
          onChange: function (params) {
            times++;
          }
        }
      );
      nxSearchQuery.sets({ pageNo: 2, labels: ['x1', 'x2'] });
      expect(times).toBe(2);
      expect(nxSearchQuery.data).toEqual({
        pageNo: 2,
        pageSize: 10,
        keyword: '',
        types: [],
        labels: ['x1', 'x2']
      });
    });

    test('touched will be equal initial', () => {
      var nxSearchQuery = new NxAbstractSearchQuery({
        ...initialState
      });
      nxSearchQuery.sets({ pageNo: 2, labels: ['x1', 'x2'] });
      expect(nxSearchQuery.touched).toBe(true);
      nxSearchQuery.sets({ pageNo: 1, labels: [] });
      expect(nxSearchQuery.touched).toBe(false);
    });

    test('event target is null when initial change', () => {
      var nxSearchQuery = new NxAbstractSearchQuery(
        {
          ...initialState
        },
        {
          onChange: (e) => {
            expect(e.target.value).toEqual(null);
          }
        }
      );
    });
  });
})();
