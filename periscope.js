(function () {
  'use strict';

  var PerJS;

  PerJS = (function () {
    function PerJS() {}

    PerJS.prototype._loadData = function (username, type) {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fwww.periscope.tv%2F" + encodeURI(username) + "%22%20and%20compat%3D%22html5%22%20and%20xpath%3D'%2F%2Fmeta%5B%40id%3D%22broadcast-data%22%5D%2F%40content'&format=json&diagnostics=true&callback=");

        xhr.onload = function () {
          var data;

          try {
            data = JSON.parse(xhr.responseText);
          } catch (e) {
            reject(e);
          }

          try {
            data = JSON.parse(data['query']['results']['meta']['content'])[type];
          } catch (e) {
            reject(e);
          }

          resolve(data);
        };

        xhr.onerror = function () {
          reject(new Error('Network error'));
        }

        xhr.send();
      });
    };

    PerJS.prototype._getItem = function (username, type, item) {
      var self = this;
      return new Promise(function (resolve, reject) {
        self._loadData(username, type).then(function (data) {
          if (!item) {
            return resolve(data);
          }

          return resolve(data[item]);
        }).catch(function (err) {
          return reject(err);
        });
      });
    };

    PerJS.prototype.getUserInformation = function (username, item) {
      return this._getItem(username, 'user', item);
    };
    PerJS.prototype['getUserInformation'] = PerJS.prototype.getUserInformation;

    PerJS.prototype.getBroadcastInformation = function (username, item) {
      return this._getItem(username, 'broadcast', item);
    };
    PerJS.prototype['getBroadcastInformation'] = PerJS.prototype.getBroadcastInformation;

    return PerJS;
  }());

  window['PerJS'] = new PerJS();
}());
