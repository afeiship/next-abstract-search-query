(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var defaults = { context: global };

  var NxAbstractSearchQuery = nx.declare('nx.AbstractSearchQuery', {
    methods: {
      init: function (inOptions) {
        this.options = nx.mix(null, defaults, inOptions);
      },
      stringify: function (params) {},
      parse: function (params) {},
      update: function (params) {},
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxAbstractSearchQuery;
  }
})();
