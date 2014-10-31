"use strict";
(function($window) {
  "use strict";
  var Catwalk = function Catwalk() {};
  ($traceurRuntime.createClass)(Catwalk, {createCollection: function(name, properties) {
      return new $window.Catwalk.Collection(name, properties);
    }}, {});
  $window.Catwalk = Catwalk;
})(window);

"use strict";
(function($Catwalk, $object) {
  "use strict";
  var CATWALK_PROPERTY = '__catwalkId';
  var CatwalkCollection = function CatwalkCollection(name, properties) {
    this.id = 0;
    this.name = name;
    this.properties = properties;
    this.models = [];
  };
  ($traceurRuntime.createClass)(CatwalkCollection, {
    getModels: $traceurRuntime.initGeneratorFunction(function $__3() {
      var $__1,
          $__2,
          model;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $__1 = this.models[Symbol.iterator]();
              $ctx.state = 14;
              break;
            case 14:
              $ctx.state = (!($__2 = $__1.next()).done) ? 9 : -2;
              break;
            case 9:
              $ctx.pushTry(7, null);
              $ctx.state = 10;
              break;
            case 10:
              throw undefined;
              $ctx.state = 12;
              break;
            case 12:
              $ctx.popTry();
              $ctx.state = 14;
              break;
            case 7:
              $ctx.popTry();
              model = $ctx.storedException;
              $ctx.state = 5;
              break;
            case 5:
              model = $__2.value;
              $ctx.state = 6;
              break;
            case 6:
              $ctx.state = 2;
              return model;
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 14;
              break;
            default:
              return $ctx.end();
          }
      }, $__3, this);
    }),
    addModel: function(properties) {
      var model = {};
      model[CATWALK_PROPERTY] = ++this.id;
      $object.keys(properties).forEach(function forEach(property) {
        model[property] = properties[property];
      });
      this.models.push($object.freeze(model));
      return model;
    },
    deleteModel: function(model) {
      var index = this.models.indexOf(model);
      this.models.splice(index, 1);
      return model;
    },
    clearModels: function() {
      this.models.length = 0;
    }
  }, {});
  $Catwalk.Collection = CatwalkCollection;
})(window.Catwalk, window.Object);

"use strict";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhdHdhbGsuanMiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMSIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8yIiwiQ29sbGVjdGlvbi5qcyIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8xNCIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8xMyIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci80IiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzEyIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzMiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvOSIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci82IiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzciLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvOCIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8xMCIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci81IiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzExIiwiUmVsYXRpb25zaGlwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsQUFBQyxTQUFTLE9BQU07QUFFWixhQUFXLENBQUM7QUNGaEIsQUFBSSxJQUFBLFVEU0EsU0FBTSxRQUFNLENBTUcsQUFBQyxDQUFFLEdDZmtCLEFEaUJoQyxDQ2pCZ0M7QUNBeEMsRUFBQyxlQUFjLFlBQVksQ0FBQyxBQUFDLFdGeUJyQixnQkFBZSxDQUFmLFVBQWlCLElBQUcsQ0FBRyxDQUFBLFVBQVMsQ0FBRztBQUMvQixXQUFPLElBQUksQ0FBQSxPQUFNLFFBQVEsV0FBVyxBQUFDLENBQUMsSUFBRyxDQUFHLFdBQVMsQ0FBQyxDQUFDO0lBQzNELE1FM0I2RTtBRmdDakYsUUFBTSxRQUFRLEVBQUksUUFBTSxDQUFDO0FBRTdCLENBQUMsQUFBQyxDQUFDLE1BQUssQ0FBQyxDQUFDO0FBQUE7QUdsQ1Y7QUFBQSxBQUFDLFNBQVMsUUFBTyxDQUFHLENBQUEsT0FBTTtBQUV0QixhQUFXLENBQUM7SUFNTixDQUFBLGdCQUFlLEVBQUksY0FBWTtBRlJ6QyxBQUFJLElBQUEsb0JFZUEsU0FBTSxrQkFBZ0IsQ0FRTixJQUFHLENBQUcsQ0FBQSxVQUFTLENBQUc7QUFDMUIsT0FBRyxHQUFHLEVBQVksRUFBQSxDQUFDO0FBQ25CLE9BQUcsS0FBSyxFQUFVLEtBQUcsQ0FBQztBQUN0QixPQUFHLFdBQVcsRUFBSSxXQUFTLENBQUM7QUFDNUIsT0FBRyxPQUFPLEVBQVEsR0FBQyxDQUFDO0VGM0JRLEFFNkJoQyxDRjdCZ0M7QUNBeEMsRUFBQyxlQUFjLFlBQVksQ0FBQyxBQUFDO0FDb0NwQixZQUFRLENDcENqQixDQUFBLGVBQWMsc0JBQXNCLEFBQUMsQ0RvQzdCLGNBQVUsQUFBQzs7OztBRXBDbkIsV0FBTyxDQ0FQLGVBQWMsd0JEQVUsQUNBYyxDQ0F0QyxTQUFTLElBQUcsQ0FBRztBQUNULGNBQU8sSUFBRzs7O21CQ0NDLENMb0NhLElBQUcsT0FBTyxDS3BDTCxNQUFLLFNBQVMsQ0FBQyxBQUFDLEVBQUM7Ozs7QUNGcEQsaUJBQUcsTUFBTSxFQUFJLENBQUEsQ0RJQSxDQUFDLENBQUMsTUFBb0IsQ0FBQSxTQUFxQixBQUFDLEVBQUMsQ0FBQyxLQUFLLENDSmpDLFNBQXdDLENBQUM7QUFDaEUsbUJBQUk7O0FDRFosaUJBQUcsUUFBUSxBQUFDLFNBRWlCLENBQUM7Ozs7Ozs7O0FDRjlCLGlCQUFHLE9BQU8sQUFBQyxFQUFDLENBQUM7Ozs7QUNDQyxpQkFBRyxPQUFPLEFBQUMsRUFBQyxDQUFDO0FBQ2Isb0JBQW9CLENBQUEsSUFBRyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0FDRnRELG1CVnVDc0IsTUFBSSxDVXZDSDs7QUNBdkIsaUJBQUcsV0FBVyxBQUFDLEVBQUMsQ0FBQTs7OztBQ0FoQixtQkFBTyxDQUFBLElBQUcsSUFBSSxBQUFDLEVBQUMsQ0FBQTs7QVJDbUIsTUFDL0IsT0ZBNkIsS0FBRyxDQUFDLENBQUM7SUZ3QzlCLENDMUMrQztBRGlEOUMsV0FBTyxDQUFQLFVBQVMsVUFBUztRQUVYLENBQUEsS0FBSSxFQUFJLEdBQUM7QUFDYixVQUFJLENBQUUsZ0JBQWUsQ0FBQyxFQUFJLEdBQUUsSUFBRyxHQUFHLENBQUM7QUFFbkMsWUFBTSxLQUFLLEFBQUMsQ0FBQyxVQUFTLENBQUMsUUFBUSxBQUFDLENBQUMsUUFBUyxRQUFNLENBQUUsUUFBTyxDQUFHO0FBQ3hELFlBQUksQ0FBRSxRQUFPLENBQUMsRUFBSSxDQUFBLFVBQVMsQ0FBRSxRQUFPLENBQUMsQ0FBQztNQUMxQyxDQUFDLENBQUM7QUFHRixTQUFHLE9BQU8sS0FBSyxBQUFDLENBQUMsT0FBTSxPQUFPLEFBQUMsQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLFdBQU8sTUFBSSxDQUFDO0lBRWhCO0FBT0EsY0FBVSxDQUFWLFVBQVksS0FBSTtRQUVSLENBQUEsS0FBSSxFQUFJLENBQUEsSUFBRyxPQUFPLFFBQVEsQUFBQyxDQUFDLEtBQUksQ0FBQztBQUNyQyxTQUFHLE9BQU8sT0FBTyxBQUFDLENBQUMsS0FBSSxDQUFHLEVBQUEsQ0FBQyxDQUFDO0FBQzVCLFdBQU8sTUFBSSxDQUFDO0lBRWhCO0FBTUEsY0FBVSxDQUFWLFVBQVcsQUFBQyxDQUFFO0FBQ1YsU0FBRyxPQUFPLE9BQU8sRUFBSSxFQUFBLENBQUM7SUFDMUI7QUFBQSxPRG5GNkU7QUN3RmpGLFNBQU8sV0FBVyxFQUFJLGtCQUFnQixDQUFDO0FBRTNDLENBQUMsQUFBQyxDQUFDLE1BQUssUUFBUSxDQUFHLENBQUEsTUFBSyxPQUFPLENBQUMsQ0FBQztBQUFBO0FhL0RaO0FBQUQiLCJmaWxlIjoiY2F0d2Fsay5lczUudGVzdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJHdpbmRvdykge1xuXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBAY2xhc3MgQ2F0d2Fsa1xuICAgICAqIEBhdXRob3IgQWRhbSBUaW1iZXJsYWtlXG4gICAgICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL1dpbGRob25leS9DYXR3YWxrLmpzXG4gICAgICovXG4gICAgY2xhc3MgQ2F0d2FsayB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKiBAcmV0dXJuIHtDYXR3YWxrfVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWV0aG9kIGNyZWF0ZUNvbGxlY3Rpb25cbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXNcbiAgICAgICAgICogQHJldHVybiB7d2luZG93LkNhdHdhbGsuQ29sbGVjdGlvbn1cbiAgICAgICAgICovXG4gICAgICAgIGNyZWF0ZUNvbGxlY3Rpb24obmFtZSwgcHJvcGVydGllcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyAkd2luZG93LkNhdHdhbGsuQ29sbGVjdGlvbihuYW1lLCBwcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gRXhwb3NlIHRoZSBgQ2F0d2Fsa2AgY2xhc3MuXG4gICAgJHdpbmRvdy5DYXR3YWxrID0gQ2F0d2FsaztcblxufSkod2luZG93KTsiLCJ2YXIgJF9fcGxhY2Vob2xkZXJfXzAgPSAkX19wbGFjZWhvbGRlcl9fMSIsIigkdHJhY2V1clJ1bnRpbWUuY3JlYXRlQ2xhc3MpKCRfX3BsYWNlaG9sZGVyX18wLCAkX19wbGFjZWhvbGRlcl9fMSwgJF9fcGxhY2Vob2xkZXJfXzIpIiwiKGZ1bmN0aW9uKCRDYXR3YWxrLCAkb2JqZWN0KSB7XG5cbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdGFudCBDQVRXQUxLX1BST1BFUlRZXG4gICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgKi9cbiAgICBjb25zdCBDQVRXQUxLX1BST1BFUlRZID0gJ19fY2F0d2Fsa0lkJztcblxuICAgIC8qKlxuICAgICAqIEBjbGFzcyBDYXR3YWxrXG4gICAgICogQGF1dGhvciBBZGFtIFRpbWJlcmxha2VcbiAgICAgKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vV2lsZGhvbmV5L0NhdHdhbGsuanNcbiAgICAgKi9cbiAgICBjbGFzcyBDYXR3YWxrQ29sbGVjdGlvbiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZXRob2QgY29uc3RydWN0b3JcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXNcbiAgICAgICAgICogQHJldHVybiB7Q2F0d2Fsa0NvbGxlY3Rpb259XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lLCBwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICB0aGlzLmlkICAgICAgICAgPSAwO1xuICAgICAgICAgICAgdGhpcy5uYW1lICAgICAgID0gbmFtZTtcbiAgICAgICAgICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgICAgICAgICB0aGlzLm1vZGVscyAgICAgPSBbXTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZXRob2QgZ2V0TW9kZWxzXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgICAgICogQGdlbmVyYXRvclxuICAgICAgICAgKi9cbiAgICAgICAgKmdldE1vZGVscygpIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgbW9kZWwgb2YgdGhpcy5tb2RlbHMpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBtb2RlbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZXRob2QgYWRkTW9kZWxcbiAgICAgICAgICogQHBhcmFtIHByb3BlcnRpZXMge09iamVjdH1cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgIGFkZE1vZGVsKHByb3BlcnRpZXMpIHtcblxuICAgICAgICAgICAgbGV0IG1vZGVsID0ge307XG4gICAgICAgICAgICBtb2RlbFtDQVRXQUxLX1BST1BFUlRZXSA9ICsrdGhpcy5pZDtcblxuICAgICAgICAgICAgJG9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmZvckVhY2goZnVuY3Rpb24gZm9yRWFjaChwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgIG1vZGVsW3Byb3BlcnR5XSA9IHByb3BlcnRpZXNbcHJvcGVydHldO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIE1ha2UgdGhlIG1vZGVsIGltbXV0YWJsZSwgYW5kIHRoZW4gYWRkIGl0IHRvIHRoZSBhcnJheS5cbiAgICAgICAgICAgIHRoaXMubW9kZWxzLnB1c2goJG9iamVjdC5mcmVlemUobW9kZWwpKTtcbiAgICAgICAgICAgIHJldHVybiBtb2RlbDtcblxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZXRob2QgZGVsZXRlTW9kZWxcbiAgICAgICAgICogQHBhcmFtIG1vZGVsIHtPYmplY3R9XG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIGRlbGV0ZU1vZGVsKG1vZGVsKSB7XG5cbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMubW9kZWxzLmluZGV4T2YobW9kZWwpO1xuICAgICAgICAgICAgdGhpcy5tb2RlbHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHJldHVybiBtb2RlbDtcblxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZXRob2QgY2xlYXJNb2RlbHNcbiAgICAgICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgICAgICovXG4gICAgICAgIGNsZWFyTW9kZWxzKCkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbHMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gRXhwb3NlIHRoZSBgQ2F0d2Fsay5Db2xsZWN0aW9uYCBwcm9wZXJ0eS5cbiAgICAkQ2F0d2Fsay5Db2xsZWN0aW9uID0gQ2F0d2Fsa0NvbGxlY3Rpb247XG5cbn0pKHdpbmRvdy5DYXR3YWxrLCB3aW5kb3cuT2JqZWN0KTsiLCIkdHJhY2V1clJ1bnRpbWUuaW5pdEdlbmVyYXRvckZ1bmN0aW9uKCRfX3BsYWNlaG9sZGVyX18wKSIsInJldHVybiAkX19wbGFjZWhvbGRlcl9fMChcbiAgICAgICAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzEsXG4gICAgICAgICAgICAgICRfX3BsYWNlaG9sZGVyX18yLCB0aGlzKTsiLCIkdHJhY2V1clJ1bnRpbWUuY3JlYXRlR2VuZXJhdG9ySW5zdGFuY2UiLCJmdW5jdGlvbigkY3R4KSB7XG4gICAgICB3aGlsZSAodHJ1ZSkgJF9fcGxhY2Vob2xkZXJfXzBcbiAgICB9IiwiXG4gICAgICAgIGZvciAodmFyICRfX3BsYWNlaG9sZGVyX18wID1cbiAgICAgICAgICAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzFbU3ltYm9sLml0ZXJhdG9yXSgpLFxuICAgICAgICAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fMjtcbiAgICAgICAgICAgICAhKCRfX3BsYWNlaG9sZGVyX18zID0gJF9fcGxhY2Vob2xkZXJfXzQubmV4dCgpKS5kb25lOyApIHtcbiAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fNTtcbiAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fNjtcbiAgICAgICAgfSIsIiRjdHguc3RhdGUgPSAoJF9fcGxhY2Vob2xkZXJfXzApID8gJF9fcGxhY2Vob2xkZXJfXzEgOiAkX19wbGFjZWhvbGRlcl9fMjtcbiAgICAgICAgYnJlYWsiLCIkY3R4LnB1c2hUcnkoXG4gICAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fMCxcbiAgICAgICAgICAgICRfX3BsYWNlaG9sZGVyX18xKTsiLCIkY3R4LnBvcFRyeSgpOyIsIlxuICAgICAgICAgICAgICAkY3R4LnBvcFRyeSgpO1xuICAgICAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fMCA9ICRjdHguc3RvcmVkRXhjZXB0aW9uOyIsInJldHVybiAkX19wbGFjZWhvbGRlcl9fMCIsIiRjdHgubWF5YmVUaHJvdygpIiwicmV0dXJuICRjdHguZW5kKCkiLCIvLyhmdW5jdGlvbigkQ2F0d2Fsaykge1xuLy9cbi8vICAgIFwidXNlIHN0cmljdFwiO1xuLy9cbi8vICAgIC8qKlxuLy8gICAgICogQGNsYXNzIENhdHdhbGtcbi8vICAgICAqIEBhdXRob3IgQWRhbSBUaW1iZXJsYWtlXG4vLyAgICAgKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vV2lsZGhvbmV5L0NhdHdhbGsuanNcbi8vICAgICAqL1xuLy8gICAgY2xhc3MgQ2F0d2Fsa0NvbGxlY3Rpb24ge1xuLy9cbi8vICAgICAgICAvKipcbi8vICAgICAgICAgKiBAbWV0aG9kIGNvbnN0cnVjdG9yXG4vLyAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbi8vICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllc1xuLy8gICAgICAgICAqIEByZXR1cm4ge0NhdHdhbGtDb2xsZWN0aW9ufVxuLy8gICAgICAgICAqL1xuLy8gICAgICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByb3BlcnRpZXMpIHtcbi8vICAgICAgICAgICAgdGhpcy5fbmFtZSAgICAgICA9IG5hbWU7XG4vLyAgICAgICAgICAgIHRoaXMuX3Byb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuLy8gICAgICAgIH1cbi8vXG4vLyAgICB9XG4vL1xuLy8gICAgLy8gRXhwb3NlIHRoZSBgQ2F0d2Fsay5Db2xsZWN0aW9uYCBwcm9wZXJ0eS5cbi8vICAgICRDYXR3YWxrLkNvbGxlY3Rpb24gPSBDYXR3YWxrQ29sbGVjdGlvbjtcbi8vXG4vL30pKHdpbmRvdy5DYXR3YWxrKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=