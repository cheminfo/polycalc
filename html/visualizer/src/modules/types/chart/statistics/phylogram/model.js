'use strict';define(["modules/default/defaultmodel","src/util/datatraversing"],function(a,b){"use strict";function c(){}return $.extend(!0,c.prototype,a,{getjPath:function(a){if("leaf"===a){var c=[];return b.getJPathsFromElement(this.module.controller._data,c),c}return[]}}),c});