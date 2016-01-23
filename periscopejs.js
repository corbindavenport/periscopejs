(function(window){
    'use strict';
    function define_perjs(){
        var perjs = {};
        var username = "";
        perjs.user = function(username, request){
          var xmlhttp=new XMLHttpRequest();
          xmlhttp.open("GET", "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fwww.periscope.tv%2F" + encodeURI(username) + "%22%20and%20compat%3D%22html5%22%20and%20xpath%3D'%2F%2Fmeta%5B%40id%3D%22broadcast-data%22%5D%2F%40content'&format=json&diagnostics=true&callback=", false);
          xmlhttp.send();
          var data = JSON.parse(xmlhttp.responseText);
          var query = JSON.parse(data.query.results.meta.content)["user"];
          console.log(query);
          if (request === "" || request === null || request === undefined) {
            console.log("[PeriscopeJS] No property was requested for user " + username);
            return undefined;
          } else {
            return query[request];
          }
        }
        perjs.broadcast = function(username, request){
          var xmlhttp=new XMLHttpRequest();
          xmlhttp.open("GET", "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fwww.periscope.tv%2F" + encodeURI(username) + "%22%20and%20compat%3D%22html5%22%20and%20xpath%3D'%2F%2Fmeta%5B%40id%3D%22broadcast-data%22%5D%2F%40content'&format=json&diagnostics=true&callback=", false);
          xmlhttp.send();
          var data = JSON.parse(xmlhttp.responseText);
          var query = JSON.parse(data.query.results.meta.content)["broadcast"];
          console.log(query);
          if (request === "" || request === null || request === undefined) {
            console.log("[PeriscopeJS] No property was requested for user " + username);
            return undefined;
          } else {
            return query[request];
          }
        }
        return perjs;
    }
    //define globally if it doesn't already exist
    if(typeof(perjs) === 'undefined'){
        window.perjs = define_perjs();
    }
    else{
        console.log("[PeriscopeJS] perjs already defined");
    }
})(window);
