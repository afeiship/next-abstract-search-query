(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nxParam = nx.param || require('@jswork/next-param');
  var CHAR_EQ = '=';
  var defaults = {
    url: null,
    onChange: nx.noop,
    set: function (data, key, value) {
      nx.set(data, key, value);
    },
    isEmpty: function (value) {
      return !value || value.length === 0;
    },
    transform: function (key, value) {
      var _value = Array.isArray(value) ? value.join() : value;
      return key + CHAR_EQ + _value;
    }
  };

  var NxAbstractSearchQuery = nx.declare('nx.AbstractSearchQuery', {
    properties: {
      touched: function () {
        var value = this.get();
        return value !== this.latest;
      }
    },
    methods: {
      __muted__: false,
      init: function (inData, inOptions) {
        this.data = inData;
        this.options = nx.mix(null, defaults, inOptions);
        this.latest = null;
      },
      get: function () {
        var { url, transform, isEmpty } = this.options;
        return nxParam(this.data, url, { transform, isEmpty });
      },
      set: function (inKey, inValue) {
        this.options.set(this.data, inKey, inValue);
        var value = this.get();
        if (this.touched) {
          this.latest = value;
          if (!this.__muted__) {
            this.options.onChange({
              target: { value: value }
            });
          }
        }
      },
      sets: function (inObj) {
        var self = this;
        this.__muted__ = true;
        nx.forIn(inObj, function (key, value) {
          self.set(key, value);
        });
        this.__muted__ = false;
        this.options.onChange({
          target: { value: this.get() }
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxAbstractSearchQuery;
  }
})();
