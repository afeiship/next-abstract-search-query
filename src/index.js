(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nxParam = nx.param || require('@jswork/next-param');
  var NULL_TARGET = { target: { value: null } };
  var defaults = {
    url: null,
    onChange: nx.noop,
    set: nx.set,
    isEmpty: function (value) {
      return !value || value.length === 0;
    },
    transform: function (key, value) {
      var _value = Array.isArray(value) ? value.join() : value;
      return key + '=' + _value;
    }
  };

  var NxAbstractSearchQuery = nx.declare('nx.AbstractSearchQuery', {
    properties: {
      touched: function () {
        var value = this.get();
        return this.initial !== value;
      },
      changed: function () {
        var value = this.get();
        return value !== this.latest;
      },
      target: function () {
        return { target: { value: this.get() } };
      }
    },
    methods: {
      __muted__: false,
      init: function (inData, inOptions) {
        this.data = inData;
        this.options = nx.mix(null, defaults, inOptions);
        this.latest = null;
        this.initial = this.get();
        this.__onChange__(NULL_TARGET);
      },
      get: function () {
        var { url, transform, isEmpty } = this.options;
        return nxParam(this.data, url, { transform, isEmpty });
      },
      set: function (inKey, inValue) {
        this.options.set(this.data, inKey, inValue);
        var value = this.get();
        if (this.changed) {
          this.latest = value;
          this.__onChange__();
        }
      },
      sets: function (inObj) {
        var self = this;
        this.__muted__ = true;
        nx.forIn(inObj, function (key, value) {
          self.set(key, value);
        });
        this.__muted__ = false;
        this.__onChange__();
      },
      __onChange__: function (inTarget) {
        if (!this.__muted__) {
          var target = typeof inTarget === 'undefined' ? this.target : inTarget;
          this.options.onChange(target);
        }
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxAbstractSearchQuery;
  }
})();
