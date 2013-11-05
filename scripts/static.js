(function() {
  'use strict';

  var globals = typeof window === 'undefined' ? global : window;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';

    if (has(cache, path)) return cache[path].exports;
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex].exports;
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  var list = function() {
    var result = [];
    for (var item in modules) {
      if (has(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.list = list;
  globals.require.brunch = true;
})();
require.register("compare", function(exports, require, module) {
var __templateData = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),nav = locals_.nav,filename = locals_.filename,social = locals_.social;buf.push("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><title>Brunch | HTML5 application assembler</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/favicon.ico\"><link rel=\"stylesheet\" href=\"styles/app.css\"><!--[if lt IE 9]>\n<script src=\"//html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n<![endif]--><!-- Grunticon Loader: place this in the head of your page -->\n<script>\n/* grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license. */\nwindow.grunticon=function(e){if(e&&3===e.length){var t=window,n=!(!t.document.createElementNS||!t.document.createElementNS(\"http://www.w3.org/2000/svg\",\"svg\").createSVGRect||!document.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/feature#Image\",\"1.1\")||window.opera&&-1===navigator.userAgent.indexOf(\"Chrome\")),o=function(o){var r=t.document.createElement(\"link\"),a=t.document.getElementsByTagName(\"script\")[0];r.rel=\"stylesheet\",r.href=e[o&&n?0:o?1:2],a.parentNode.insertBefore(r,a)},r=new t.Image;r.onerror=function(){o(!1)},r.onload=function(){o(1===r.width&&1===r.height)},r.src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==\"}};\ngrunticon( [ \"/images/svg/icons.data.svg.css\", \"/images/svg/icons.data.png.css\", \"/images/svg/icons.fallback.css\" ] );</script>\n<noscript><link href=\"/images/svg/icons.fallback.css\" rel=\"stylesheet\"></noscript></head><body><div id=\"navbar\"><div class=\"container\"><a href=\"/\" class=\"icon-brunch-logo-web\"></a><ul class=\"nav nav--main-nav\">");
// iterate nav
;(function(){
  var $$obj = nav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

var active = ((filename == item.path + '.jade') || (filename == 'index.jade' && !item.path));
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':('/'+item.path+(item.path?'.html':'')), "class": [('nav__item--main-nav'),(active?'active':null)] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = item.title) ? "" : jade.interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

var active = ((filename == item.path + '.jade') || (filename == 'index.jade' && !item.path));
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':('/'+item.path+(item.path?'.html':'')), "class": [('nav__item--main-nav'),(active?'active':null)] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = item.title) ? "" : jade.interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div></div><div class=\"page__content container\"><div class=\"grid\"><div style=\"float:right\" class=\"grid__item one-whole desk-one-third\"><div class=\"social-buttons\">");
// iterate social
;(function(){
  var $$obj = social;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var service = $$obj[$index];

buf.push("<div><iframe" + (jade.attrs({ terse: true, 'allowtransparency':("true"), 'frameborder':("0"), 'scrolling':("no"), 'src':(service.src), 'style':("width: " + (service.width) + "; height:30px;"), "class": [("social-button-" + (service.classname) + "")] }, {"class":true,"allowtransparency":true,"frameborder":true,"scrolling":true,"src":true,"style":true})) + "></iframe></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var service = $$obj[$index];

buf.push("<div><iframe" + (jade.attrs({ terse: true, 'allowtransparency':("true"), 'frameborder':("0"), 'scrolling':("no"), 'src':(service.src), 'style':("width: " + (service.width) + "; height:30px;"), "class": [("social-button-" + (service.classname) + "")] }, {"class":true,"allowtransparency":true,"frameborder":true,"scrolling":true,"src":true,"style":true})) + "></iframe></div>");
    }

  }
}).call(this);

buf.push("</div><h3>People love Brunch!</h3><a class=\"twitter-timeline\" data-dnt=\"true\" href=\"https://twitter.com/brunch/favorites\" data-widget-id=\"397311715655684096\">Favorite Tweets by @brunch</a>\n<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script></div><div class=\"grid__item one-whole desk-two-thirds\"><h2 id=\"compare\">Compare</h2>\n<p>Brunch is similar to <a href=\"http://gruntjs.com\">Grunt</a>, LiveReload and CodeKit.</p>\n<p>And it’s also different.</p>\n<p>LiveReload and CodeKit partly resemble Brunch compilation pipeline, file watching and auto reloading, but they don’t support advanced features like modules, Bower support or source maps generation</p>\n<p>Grunt task manager is in some ways more flexible than Brunch, but its flexibility and explicitness can quickly become complexity.</p></p>\n</div></div><table>\n  <tr>\n    <th>Feature</th>\n    <th>Brunch</th>\n    <th>Grunt</th>\n    <th><span title=\"The Rails asset pipeline\">Rails</span></th>\n    <th>Comment</th>\n  </tr>\n  <tr>\n    <th>Builder, linter, concatenator, minifier</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td>Brunch can compile your JS, CoffeeScript, Stylus, Sass (+ Compass), LESS, Mustache, Handlebars, Jade, Eco (and much more) files, concatenate output to and minify it. It just doesn’t care about languages or frameworks you use.</td>\n  </tr>\n  <tr>\n    <th>File watcher</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td>Brunch recompiles and concats all your stuff automatically on any change, headlessly. No more need in compicated Makefiles and watchers.</td>\n  </tr>\n  <tr>\n    <th>Auto-reload</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td>Brunch reloads your browser window every time you change stuff (with autoreload plugin)</td>\n  </tr>\n  <tr>\n    <th>Framework-agnostic</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td>Brunch just doesn’t care about stuff you’re using for structure. You can use any backend you like, be it node.js, Rails or Lift. You can even keep frontend and backend as separate projects.</td>\n  </tr>\n  <tr>\n    <th>Auto-support for modules</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td>All script and template files may be wrapped in modules (CommonJS or AMD) to prohibit global public access and encapsulate code. Brunch may also do the job of r.js optimizer automatically.</td>\n  </tr>\n  <tr>\n    <th>Skeletons / boilerplates</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td>Brunch can generate your project from predefined template. There’s a lot of great skeleton projects you can use already.</a></td>\n  </tr>\n  <tr>\n    <th>Blazing fast</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td>Speed is important for app watchers. Usual brunch compilation takes less time than you need to alt-tab to browser window. Unlike Grunt, Brunch recompiles only changed parts of your app and extensively uses caching for others.</td>\n  </tr>\n  <tr>\n    <th>Incredibly simple</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td>All you need to do with Brunch is run one command and everything will be managed for you, without need to write <a href=\"https://gist.github.com/paulmillr/3697384\">sophisticated 300LOC build configs</a>.</td>\n  </tr>\n  <tr>\n    <th>Headless <a href=\"http://bower.io\">Bower</a> integration</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td>Brunch supports <a href=\"https://github.com/brunch/brunch/blob/stable/docs/faq.md#how-to-use-bower\">headless integration</a> with Bower package manager. Unlike with Grunt, you don’t need to specify all used files in details — brunch will auto-detect them in most cases and automatically concat in correct order</td>\n  </tr>\n  <tr>\n    <th>Headless source maps generation</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td>Brunch automatically generates source maps for all your files so debugging becomes very simple even when all files are concatenated and minified. <!--Brunch simply generates even sophisticated source maps (compile coffeescript and templates -> concatenate all files -> minify with uglify.js)--></td>\n  </tr>\n  <tr>\n    <th>Cross-platform and free</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td>Brunch is free, both as in beer and as in speech and works everywhere.</td>\n  </tr>\n</table><footer><hr class=\"rule\"><p><small>Hosted on <a href=\"https://github.com/brunch/brunch.github.com\">GitHub Pages</a>. The content on this website is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by/3.0/deed.en_US\">CC BY 3.0</a>.</small></p></footer></div><script src=\"scripts/app.js\"></script><script>require('scripts/app');\n</script>  <script type=\"text/javascript\">\n    var _gauges = _gauges || [];\n    (function() {\n      var t   = document.createElement('script');\n      t.type  = 'text/javascript';\n      t.async = true;\n      t.id    = 'gauges-tracker';\n      t.setAttribute('data-site-id', '4f1631bbcb25bc723b000007');\n      t.src = '//secure.gaug.es/track.js';\n      var s = document.getElementsByTagName('script')[0];\n      s.parentNode.insertBefore(t, s);\n    })();\n  </script>\n</body></html>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("examples", function(exports, require, module) {
var __templateData = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),nav = locals_.nav,filename = locals_.filename,social = locals_.social;buf.push("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><title>Brunch | HTML5 application assembler</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/favicon.ico\"><link rel=\"stylesheet\" href=\"styles/app.css\"><!--[if lt IE 9]>\n<script src=\"//html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n<![endif]--><!-- Grunticon Loader: place this in the head of your page -->\n<script>\n/* grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license. */\nwindow.grunticon=function(e){if(e&&3===e.length){var t=window,n=!(!t.document.createElementNS||!t.document.createElementNS(\"http://www.w3.org/2000/svg\",\"svg\").createSVGRect||!document.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/feature#Image\",\"1.1\")||window.opera&&-1===navigator.userAgent.indexOf(\"Chrome\")),o=function(o){var r=t.document.createElement(\"link\"),a=t.document.getElementsByTagName(\"script\")[0];r.rel=\"stylesheet\",r.href=e[o&&n?0:o?1:2],a.parentNode.insertBefore(r,a)},r=new t.Image;r.onerror=function(){o(!1)},r.onload=function(){o(1===r.width&&1===r.height)},r.src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==\"}};\ngrunticon( [ \"/images/svg/icons.data.svg.css\", \"/images/svg/icons.data.png.css\", \"/images/svg/icons.fallback.css\" ] );</script>\n<noscript><link href=\"/images/svg/icons.fallback.css\" rel=\"stylesheet\"></noscript></head><body><div id=\"navbar\"><div class=\"container\"><a href=\"/\" class=\"icon-brunch-logo-web\"></a><ul class=\"nav nav--main-nav\">");
// iterate nav
;(function(){
  var $$obj = nav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

var active = ((filename == item.path + '.jade') || (filename == 'index.jade' && !item.path));
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':('/'+item.path+(item.path?'.html':'')), "class": [('nav__item--main-nav'),(active?'active':null)] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = item.title) ? "" : jade.interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

var active = ((filename == item.path + '.jade') || (filename == 'index.jade' && !item.path));
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':('/'+item.path+(item.path?'.html':'')), "class": [('nav__item--main-nav'),(active?'active':null)] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = item.title) ? "" : jade.interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div></div><div class=\"page__content container\"><div class=\"grid\"><div style=\"float:right\" class=\"grid__item one-whole desk-one-third\"><div class=\"social-buttons\">");
// iterate social
;(function(){
  var $$obj = social;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var service = $$obj[$index];

buf.push("<div><iframe" + (jade.attrs({ terse: true, 'allowtransparency':("true"), 'frameborder':("0"), 'scrolling':("no"), 'src':(service.src), 'style':("width: " + (service.width) + "; height:30px;"), "class": [("social-button-" + (service.classname) + "")] }, {"class":true,"allowtransparency":true,"frameborder":true,"scrolling":true,"src":true,"style":true})) + "></iframe></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var service = $$obj[$index];

buf.push("<div><iframe" + (jade.attrs({ terse: true, 'allowtransparency':("true"), 'frameborder':("0"), 'scrolling':("no"), 'src':(service.src), 'style':("width: " + (service.width) + "; height:30px;"), "class": [("social-button-" + (service.classname) + "")] }, {"class":true,"allowtransparency":true,"frameborder":true,"scrolling":true,"src":true,"style":true})) + "></iframe></div>");
    }

  }
}).call(this);

buf.push("</div><h3>People love Brunch!</h3><a class=\"twitter-timeline\" data-dnt=\"true\" href=\"https://twitter.com/brunch/favorites\" data-widget-id=\"397311715655684096\">Favorite Tweets by @brunch</a>\n<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script></div><div class=\"grid__item one-whole desk-two-thirds\">\n<h1>Examples</h1>\n\n<p>\n  We know of a few folks who are using brunch already.\n  Ranging from internal tooling to high traffic facebook apps.\n</p>\n\n<p class=\"users\">\n  <img src=\"images/users/jimbeam.png\" alt=\"Jim Beam\">\n  <img src=\"images/users/redbull.png\" alt=\"Red Bull\">\n  <img src=\"images/users/uber.png\" alt=\"Uber\">\n  <img src=\"images/users/ykky.png\" alt=\"YKKY\">\n</p>\n\n<p>If you want to add your project here, simply <a href=\"https://github.com/brunch/brunch.github.com/blob/master/examples.html\">edit this page</a> and submit a pull request.</p>\n\n<h2>Ostio</h2>\n\n<p><a href=\"http://ost.io/\">Ostio</a> is an open-source forum for GitHub projects (<a href=\"https://github.com/paulmillr/ostio\">code</a>). Uses default <a href=\"https://github.com/paulmillr/brunch-with-chaplin\">Chaplin</a> as app skeleton and Rails for backend.</p>\n\n<p class=\"example-screenshot\">\n  <a href=\"http://ost.io/\">\n    <img src=\"images/screenshots/ostio.png\" alt=\"\">\n  </a>\n</p>\n\n<h2>Todos</h2>\n\n<p><a href=\"http://todomvc.com/labs/dependency-examples/chaplin-brunch/public/\">Todos</a> (<a href=\"https://github.com/addyosmani/todomvc/tree/gh-pages/labs/dependency-examples/chaplin-brunch\">code</a>) is a port of the famous backbone todos example app. Uses localStorage to persist data.</p>\n\n<p class=\"example-screenshot\">\n  <a href=\"http://todomvc.com/labs/dependency-examples/chaplin-brunch/public/\">\n    <img src=\"http://todomvc.com/site-assets/screenshot.png\" alt=\"\" />\n  </a>\n</p>\n\n<h2>Hackerank</h2>\n\n<p>\n  <a href=\"http://hackerank.herokuapp.com/\">Hackerank</a> is an example app that finds the top hackers of a github repo search.\n\n  Uses <a href=\"https://github.com/elving/brunch-with-hipsters\">brunch with hipsters</a> as base skeleton.\n</p>\n\n<p class=\"example-screenshot\">\n  <a href=\"http://hackerank.herokuapp.com/\">\n    <img src=\"images/screenshots/hackerank.png\" alt=\"Hackerank\" />\n  </a>\n</p>\n\n<h2>Ember-bloggr</h2>\n\n<p>\n  <a href=\"https://github.com/gcollazo/ember-bloggr\">Ember-bloggr</a>\n  is a simple demo app based on the\n  <a href=\"http://www.youtube.com/watch?v=Ga99hMi7wfY\">Building an App with Ember.js video</a>.\n</p>\n\n<p class=\"example-screenshot\">\n  <a href=\"http://dev.gcollazo.com/ember-bloggr/\">\n    <img src=\"https://a248.e.akamai.net/camo.github.com/4a4f78b309767559bfcde423941b9accab185762/687474703a2f2f692e696d6775722e636f6d2f47706e64794b792e706e67\" alt=\"Bloggr\">\n  </a>\n</p>\n\n<h1>In production</h1>\n\n<h2>Delicious</h2>\n<p><a href=\"https://delicious.com\">Delicious</a> is a free service designed to be the best place to save what you love on the web, whether it's a video, picture, product, blog post, article or music. We then help you remember and find it later. It’s using Brunch as application builder and <a href=\"http://chaplinjs.org\">Chaplin</a> as a framework on top of Backbone.</p>\n\n<p class=\"example-screenshot\">\n  <a href=\"https://delicious.com\">\n    <img src=\"images/screenshots/delicious.png\" alt=\"Delicious\" />\n  </a>\n</p>\n\n<h2>blossom</h2>\n<p><a href=\"https://www.blossom.io\">Blossom</a> is a lightweight project management tool for lean teams. Backbone.js is heavily used in combination with CoffeeScript to provide a smooth interaction experience. The RESTful backend is built with Flask on Google App Engine.</p>\n\n<p class=\"example-screenshot\">\n  <a href=\"https://www.blossom.io/\">\n    <img src=\"images/screenshots/blossom.png\" alt=\"Blossom\" />\n  </a>\n</p>\n\n<h2>ChainCal</h2>\n<p><a href=\"http://chaincalapp.com\">ChainCal</a> is an iPhone app that helps you to track your daily goals in a minimalist, visual way. The app is written almost entirely in CoffeeScript, Backbone handles the models, collections and views, and persistence is done with a Backbone.sync localStorage adapter. Templates are written in Eco and the app is packaged with Brunch and deployed with Phonegap.</p>\n\n<p>\n  <a href=\"http://chaincalapp.com\">\n    <img src=\"images/screenshots/chaincal.png\" alt=\"Chaincal\" />\n  </a>\n</p>\n\n\n<h2>Blimp</h2>\n<p>\n  <a href=\"http://www.getblimp.com/\">Blimp</a> is a super easy to use and beautiful project management software for people who want to DO more and manage less.\n</p>\n<p class=\"example-screenshot\">\n  <a href=\"http://www.getblimp.com/\">\n    <img src=\"https://github-camo.global.ssl.fastly.net/fe80a77a9d6ff081b4603c19a4af00b2bd43a2d6/687474703a2f2f692e696d6775722e636f6d2f30454a757576582e706e67\" alt=\"\" />\n  </a>\n</p>\n\n\n<h2>Dogkr</h2>\n<p>\n  <a href=\"http://www.dogkr.com\">Dogkr</a> is an online logger to record all your beloved dogs’ life moments, even tiny instants became timeless memories.\n</p>\n<p>Brunch.js, along with Chaplin.js, is the major framework used in Dogkr's front-end. It helped us increase development productivity dramatically. Brunch.js made the whole project retain at manageable scale while the project size and complexity goes up wildly.</p>\n<p class=\"example-screenshot\">\n  <a href=\"http://dogkr.com\">\n    <img src=\"https://github-camo.global.ssl.fastly.net/e61eb63e444eed708f07e15622a82950128e4331/687474703a2f2f63646e2e646f676b722e636f6d2f7374617469632f696d616765732f686f6d655f73686f742e6a7067\" alt=\"\" />\n  </a>\n</p>\n\n<h2>Cozy Cloud</h2>\n<p>\n  <a href=\"https://www.cozycloud.cc/\">Cozy Cloud</a> is your own private personal cloud. A server you can trust to store your personal data and host web apps. You can host it with us at Cozy or host it at home, it's up to you!\n</p>\n\n<p>\n  Cozy cloud aims at using only standard execution environments. For each of them they suggest a coherent set of powerful technologies.\n</p>\n\n<p class=\"example-screenshot\">\n  <a href=\"http://www.cozycloud.cc\">\n    <img src=\"images/screenshots/cozycloud.png\" alt=\"Cozycloud\" />\n  </a>\n</p>\n\n\n<h2>MazeMap</h2>\n<p>\n  <a href=\"http://use.mazemap.com/\">MazeMap</a> <a href=\"use.mazemap.com\">(test site)</a> is an indoor navigation utility that works in the browser on desktop and mobile devices. Customers with big indoor areas can provide MazeMap as a service to their visitors who can then use the MazeMap application to find their way around with a-to-b indoor paths, and viewing their own position inside a building where GPS signals don't work. Searching for any room also works beautifully.\n\n</p>\n<p class=\"example-screenshot\">\n  <a href=\"http://use.mazemap.com/\">\n    <img src=\"https://github-camo.global.ssl.fastly.net/62be3b07faf65d0cb04961fcd20198293f7d3076/687474703a2f2f7331362e706f7374696d672e6f72672f636e3771396a6b68682f6272756e63685f77696b695f73637265656e73686f745f6269672e706e67\" alt=\"\" />\n  </a>\n</p>\n\n\n\n<h2>Hopstop</h2>\n<p>\n  <a href=\"https://github.com/jhabdas/hopstop\">Hopstop</a> enables instant retrieval of beer information accessible through Untappd. It comes in handy for searching the basics while on the go.\n</p>\n<p class=\"example-screenshot\">\n  <a href=\"http://lab.habdas.org\">\n    <img src=\"https://f.cloud.github.com/assets/440298/983199/47d5cf20-0847-11e3-89bf-d36f3cd0b844.png\" alt=\"\" />\n  </a>\n</p>\n\n<h2>Uber</h2>\n<p>\n  <a href=\"http://uber.com\">Uber</a> is everyone’s private driver. Their <a href=\"http://clients.uber.com/\">clients app</a> is made with brunch.\n</p>\n</div></div><footer><hr class=\"rule\"><p><small>Hosted on <a href=\"https://github.com/brunch/brunch.github.com\">GitHub Pages</a>. The content on this website is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by/3.0/deed.en_US\">CC BY 3.0</a>.</small></p></footer></div><script src=\"scripts/app.js\"></script><script>require('scripts/app');\n</script>  <script type=\"text/javascript\">\n    var _gauges = _gauges || [];\n    (function() {\n      var t   = document.createElement('script');\n      t.type  = 'text/javascript';\n      t.async = true;\n      t.id    = 'gauges-tracker';\n      t.setAttribute('data-site-id', '4f1631bbcb25bc723b000007');\n      t.src = '//secure.gaug.es/track.js';\n      var s = document.getElementsByTagName('script')[0];\n      s.parentNode.insertBefore(t, s);\n    })();\n  </script>\n</body></html>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("index", function(exports, require, module) {
var __templateData = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),nav = locals_.nav,filename = locals_.filename,social = locals_.social;buf.push("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><title>Brunch | HTML5 application assembler</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/favicon.ico\"><link rel=\"stylesheet\" href=\"styles/app.css\"><!--[if lt IE 9]>\n<script src=\"//html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n<![endif]--><!-- Grunticon Loader: place this in the head of your page -->\n<script>\n/* grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license. */\nwindow.grunticon=function(e){if(e&&3===e.length){var t=window,n=!(!t.document.createElementNS||!t.document.createElementNS(\"http://www.w3.org/2000/svg\",\"svg\").createSVGRect||!document.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/feature#Image\",\"1.1\")||window.opera&&-1===navigator.userAgent.indexOf(\"Chrome\")),o=function(o){var r=t.document.createElement(\"link\"),a=t.document.getElementsByTagName(\"script\")[0];r.rel=\"stylesheet\",r.href=e[o&&n?0:o?1:2],a.parentNode.insertBefore(r,a)},r=new t.Image;r.onerror=function(){o(!1)},r.onload=function(){o(1===r.width&&1===r.height)},r.src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==\"}};\ngrunticon( [ \"/images/svg/icons.data.svg.css\", \"/images/svg/icons.data.png.css\", \"/images/svg/icons.fallback.css\" ] );</script>\n<noscript><link href=\"/images/svg/icons.fallback.css\" rel=\"stylesheet\"></noscript></head><body><div id=\"navbar\"><div class=\"container\"><a href=\"/\" class=\"icon-brunch-logo-web\"></a><ul class=\"nav nav--main-nav\">");
// iterate nav
;(function(){
  var $$obj = nav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

var active = ((filename == item.path + '.jade') || (filename == 'index.jade' && !item.path));
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':('/'+item.path+(item.path?'.html':'')), "class": [('nav__item--main-nav'),(active?'active':null)] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = item.title) ? "" : jade.interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

var active = ((filename == item.path + '.jade') || (filename == 'index.jade' && !item.path));
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':('/'+item.path+(item.path?'.html':'')), "class": [('nav__item--main-nav'),(active?'active':null)] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = item.title) ? "" : jade.interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div></div><div class=\"hero\"><div class=\"container\"><div class=\"grid\"><div class=\"grid__item one-whole desk-one-third\"><div class=\"icon-brunch-logo-napkin\"></div></div><div class=\"grid__item one-whole desk-two-thirds\"><div class=\"hero__content\"><h1 class=\"kilo\">Will you be coming to brunch?</h1><h3 class=\"flush--bottom soft-half--bottom\">Brunch...</h3><ul class=\"nav nav--keywords nav--sentence\"><li><strong>compiles</strong> your scripts, templates, styles</li><li><strong>lints</strong> them</li><li><strong>wraps</strong> the scripts and templates in common.js / AMD modules.</li><li><strong>concatenates</strong> scripts and styles</li><li><strong>generates source maps</strong> for concatenated files</li><li><strong>copies</strong> assets and static files</li><li><strong>shrinks</strong> the output by minifying code and optimizing images</li><li><strong>watches</strong> your files for changes</li><li><strong>notifies</strong> you about errors via console and system notifications</li></ul></div></div></div></div></div><div class=\"page__content container\"><div class=\"grid\"><div style=\"float:right\" class=\"grid__item one-whole desk-one-third\"><div class=\"social-buttons\">");
// iterate social
;(function(){
  var $$obj = social;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var service = $$obj[$index];

buf.push("<div><iframe" + (jade.attrs({ terse: true, 'allowtransparency':("true"), 'frameborder':("0"), 'scrolling':("no"), 'src':(service.src), 'style':("width: " + (service.width) + "; height:30px;"), "class": [("social-button-" + (service.classname) + "")] }, {"class":true,"allowtransparency":true,"frameborder":true,"scrolling":true,"src":true,"style":true})) + "></iframe></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var service = $$obj[$index];

buf.push("<div><iframe" + (jade.attrs({ terse: true, 'allowtransparency':("true"), 'frameborder':("0"), 'scrolling':("no"), 'src':(service.src), 'style':("width: " + (service.width) + "; height:30px;"), "class": [("social-button-" + (service.classname) + "")] }, {"class":true,"allowtransparency":true,"frameborder":true,"scrolling":true,"src":true,"style":true})) + "></iframe></div>");
    }

  }
}).call(this);

buf.push("</div><h3>People love Brunch!</h3><a class=\"twitter-timeline\" data-dnt=\"true\" href=\"https://twitter.com/brunch/favorites\" data-widget-id=\"397311715655684096\">Favorite Tweets by @brunch</a>\n<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script></div><div class=\"grid__item one-whole desk-two-thirds\"><h1>Brunch is an assembler for HTML5 applications</h1><p>Installation is one-line, once you have <a href=\"http://nodejs.org/download/\">node.js</a>. In your console, run:</p>\n<pre><code>npm install -g brunch</code></pre>\n<h2 id=\"getting-started\">Getting started</h2>\n<h4 id=\"create-a-new-brunch-project-\">Create a new Brunch project:</h4>\n<pre><code>brunch new &lt;skeleton-URL&gt; [optional-output-dir]</code></pre>\n<p><code>skeleton-URL</code> specifies a <a href=\"/skeletons.html\">skeleton</a> from which your application will be initialized.</p>\n<p>See the <a href=\"https://github.com/brunch/brunch/blob/stable/docs/README.md\">README</a> for a complete description of app structure.</p>\n<h4 id=\"develop-with-brunch-\">Develop with Brunch:</h4>\n<pre><code>brunch watch --server</code></pre>\n<p>tells Brunch to watch your project and incrementally rebuild it when source files are changed. The optional <code>server</code> flag launches a simple web server with <a href=\"http://diveintohtml5.info/history.html\">pushState</a> support.</p>\n<p>If you use OS X and want brunch to show system notification every time compilation error happens, you will need to install <a href=\"https://github.com/alloy/terminal-notifier\">terminal-notifier</a>: <code>[sudo] gem install terminal-notifier</code>.</p>\n<h4 id=\"build-with-brunch-\">Build with Brunch:</h4>\n<pre><code>brunch build --production</code></pre>\n<p>builds a project for distribution. By default it enables minification.</p>\n<h1 id=\"documentation\">Documentation</h1>\n<p>All docs are available <a href=\"https://github.com/brunch/brunch/tree/stable/docs\">on GitHub</a>.</p>\n<h2 id=\"a-quick-demo\">A Quick Demo</h2>\n<p>See the <a href=\"http://vimeo.com/61056660\">video that shows starting new app with Brunch</a>:</p>\n<iframe src=\"http://player.vimeo.com/video/75702540\" style=\"width: 100%; height: 400px\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>\n\n<h2>Deploying</h2>\n\n<p>\n  Brunch-generated applications are a bunch of simple static files. You can\n  host them everywhere, even on free hostings, like\n  <a href=\"http://help.github.com/pages/\">GitHub pages</a>.\n\n  Because production environments are usually\n  slightly different than development envs,\n  brunch has <code>production</code> option.\n</p>\n\n<p>To build application that has minified JS and CSS, execute <code>brunch build --production</code>. Then you can deploy it:</p>\n\n<ul>\n  <li>\n    If you use <strong>static hosting site</strong>: build your application\n    on your machine and just upload <code>public/</code>\n    directory to the directory that is served by a webserver.\n  </li>\n  <li>\n    If you use <strong>hosting that supports node.js</strong>, you can\n    install brunch there and auto-build app every time.\n  </li>\n  <li>\n    If you prefer <a href=\"http://heroku.com/\">Heroku</a>,\n    there is <a href=\"https://gist.github.com/3596447\">a nice small guide</a>\n    on deploying.\n    Should work even on free instances.\n  </li>\n  <li>\n    If you’re into\n    <a href=\"http://help.github.com/pages/\">GitHub pages</a>,\n    you’ll need to build your app,\n    move <code>public/</code> directory to somewhere,\n    <a href=\"http://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging\">switch to <code>gh-pages</code>\n    git branch</a>,\n    remove files from directory and move files from your temporary\n    dir here.\n  </li>\n</ul>\n\n<h2>Brought to you by</h2><ul class=\"block-list\"><li><a href=\"http://paulmillr.com/\" rel=\"author\"><img src=\"https://secure.gravatar.com/avatar/d342e4ef045c54a6a6f41d070d8a0406?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\" width=\"48\" alt=\"Paul Miller\"><span class=\"name\">Paul</span> Miller</a></li><li><a href=\"http://nikgraf.com/\"><img src=\"https://secure.gravatar.com/avatar/8fc75580dbacd91ff28514b68baf1a8a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\" width=\"48\" alt=\"Nik Graf\"><span class=\"name\">Nik</span> Graf</a></li><li><a href=\"http://ramen.io/\"><img src=\"https://secure.gravatar.com/avatar/37c5132eed30539456c79906dd8c6065?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\" width=\"48\" alt=\"Thomas Schranz\"><span class=\"name\">Thomas</span> Schranz</a></li><li><a href=\"https://github.com/es128\"><img src=\"https://secure.gravatar.com/avatar/c8c06173c01b4e95594e4af3a8a815f1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\" width=\"48\" alt=\"Elan Shanker\"><span class=\"name\">Elan</span> Shanker</a></li></ul></div></div><footer><hr class=\"rule\"><p><small>Hosted on <a href=\"https://github.com/brunch/brunch.github.com\">GitHub Pages</a>. The content on this website is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by/3.0/deed.en_US\">CC BY 3.0</a>.</small></p></footer></div><script src=\"scripts/app.js\"></script><script>require('scripts/app');\n</script>  <script type=\"text/javascript\">\n    var _gauges = _gauges || [];\n    (function() {\n      var t   = document.createElement('script');\n      t.type  = 'text/javascript';\n      t.async = true;\n      t.id    = 'gauges-tracker';\n      t.setAttribute('data-site-id', '4f1631bbcb25bc723b000007');\n      t.src = '//secure.gaug.es/track.js';\n      var s = document.getElementsByTagName('script')[0];\n      s.parentNode.insertBefore(t, s);\n    })();\n  </script>\n</body></html>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("plugins", function(exports, require, module) {
var __templateData = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),nav = locals_.nav,filename = locals_.filename,social = locals_.social;buf.push("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><title>Brunch | HTML5 application assembler</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/favicon.ico\"><link rel=\"stylesheet\" href=\"styles/app.css\"><!--[if lt IE 9]>\n<script src=\"//html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n<![endif]--><!-- Grunticon Loader: place this in the head of your page -->\n<script>\n/* grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license. */\nwindow.grunticon=function(e){if(e&&3===e.length){var t=window,n=!(!t.document.createElementNS||!t.document.createElementNS(\"http://www.w3.org/2000/svg\",\"svg\").createSVGRect||!document.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/feature#Image\",\"1.1\")||window.opera&&-1===navigator.userAgent.indexOf(\"Chrome\")),o=function(o){var r=t.document.createElement(\"link\"),a=t.document.getElementsByTagName(\"script\")[0];r.rel=\"stylesheet\",r.href=e[o&&n?0:o?1:2],a.parentNode.insertBefore(r,a)},r=new t.Image;r.onerror=function(){o(!1)},r.onload=function(){o(1===r.width&&1===r.height)},r.src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==\"}};\ngrunticon( [ \"/images/svg/icons.data.svg.css\", \"/images/svg/icons.data.png.css\", \"/images/svg/icons.fallback.css\" ] );</script>\n<noscript><link href=\"/images/svg/icons.fallback.css\" rel=\"stylesheet\"></noscript></head><body><div id=\"navbar\"><div class=\"container\"><a href=\"/\" class=\"icon-brunch-logo-web\"></a><ul class=\"nav nav--main-nav\">");
// iterate nav
;(function(){
  var $$obj = nav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

var active = ((filename == item.path + '.jade') || (filename == 'index.jade' && !item.path));
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':('/'+item.path+(item.path?'.html':'')), "class": [('nav__item--main-nav'),(active?'active':null)] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = item.title) ? "" : jade.interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

var active = ((filename == item.path + '.jade') || (filename == 'index.jade' && !item.path));
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':('/'+item.path+(item.path?'.html':'')), "class": [('nav__item--main-nav'),(active?'active':null)] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = item.title) ? "" : jade.interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div></div><div class=\"page__content container\"><div class=\"grid\"><div style=\"float:right\" class=\"grid__item one-whole desk-one-third\"><div class=\"social-buttons\">");
// iterate social
;(function(){
  var $$obj = social;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var service = $$obj[$index];

buf.push("<div><iframe" + (jade.attrs({ terse: true, 'allowtransparency':("true"), 'frameborder':("0"), 'scrolling':("no"), 'src':(service.src), 'style':("width: " + (service.width) + "; height:30px;"), "class": [("social-button-" + (service.classname) + "")] }, {"class":true,"allowtransparency":true,"frameborder":true,"scrolling":true,"src":true,"style":true})) + "></iframe></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var service = $$obj[$index];

buf.push("<div><iframe" + (jade.attrs({ terse: true, 'allowtransparency':("true"), 'frameborder':("0"), 'scrolling':("no"), 'src':(service.src), 'style':("width: " + (service.width) + "; height:30px;"), "class": [("social-button-" + (service.classname) + "")] }, {"class":true,"allowtransparency":true,"frameborder":true,"scrolling":true,"src":true,"style":true})) + "></iframe></div>");
    }

  }
}).call(this);

buf.push("</div><h3>People love Brunch!</h3><a class=\"twitter-timeline\" data-dnt=\"true\" href=\"https://twitter.com/brunch/favorites\" data-widget-id=\"397311715655684096\">Favorite Tweets by @brunch</a>\n<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script></div><div class=\"grid__item one-whole desk-two-thirds\"><h1 id=\"plugins\">Plugins</h1>\n<p>\n  Brunch has a plugin ecosystem to achieve interoperability\n  with various stuff simply via\n  <a href=\"http://brunch.readthedocs.org/en/latest/plugins.html\">plugin API</a>.\n</p>\n\n<p>\n  For example, if you use JavaScript files in your project,\n  you’ll need a plugin that adds JS support.\n  Same with styles, templates, minifiers, linters and much more.\n</p>\n\n<p>\n  To install new plugin, simply execute <code>npm install --save plugin-name</code>. This will install its node.js dependencies and save to <code>package.json</code>.\n</p>\n\n<p>To remove it, edit <code>package.json</code>’s <code>dependencies</code> hash.\n  See <a href=\"http://npmjs.org/doc/json.html#dependencies\">npm docs</a>\n  for more docs on packages.\n</p>\n\n<p>\n  All plugins are available at\n  <a href=\"https://github.com/brunch/brunch/wiki/Plugins\">the Plugins wiki page</a>.\n  Feel free to add your plugins to it.\n  Some interesting plugins from there:\n</p>\n\n<ul>\n  <li>\n    Programming languages: JavaScript,\n    <a href=\"http://coffeescript.org\">CoffeeScript</a>,\n    <a href=\"http://livescript.net\">LiveScript</a>,\n    <a href=\"http://maxtaco.github.com/coffee-script\">IcedCoffeeScript</a>,\n    <a href=\"http://roy.brianmckenna.org\">Roy</a>\n  </li>\n\n  <li>\n    Pre-compiled templates:\n    <a href=\"http://handlebarsjs.com/\">Handlebars.js</a>,\n    <a href=\"http://visionmedia.github.com/jade/\">Jade</a>,\n    <a href=\"http://twitter.github.com/hogan.js/\">Mustache</a>,\n    <a href=\"https://github.com/sstephenson/eco\">Eco</a>,\n    <a href=\"https://github.com/machty/emblem-brunch\">Emblem</a>,\n    <a href=\"https://github.com/mgarbacz/dustjs-linkedin-brunch\">Dust</a>\n  </li>\n\n  <li>\n    Styles: CSS,\n    <a href=\"http://learnboost.github.com/stylus/\">Stylus</a>,\n    <a href=\"http://lesscss.org/\">LESS</a>,\n    <a href=\"http://sass-lang.com/\">Sass</a>\n  </li>\n\n  <li>\n    Linters:\n    <a href=\"http://www.jshint.com\">JSHint</a>,\n    <a href=\"http://www.coffeelint.org\">CoffeeLint</a>\n  </li>\n\n  <li>\n    Optimizers:\n    <a href=\"https://github.com/mishoo/UglifyJS2\">uglify.js</a>,\n    <a href=\"https://github.com/GoalSmashers/clean-css\">clean-css</a>,\n    <a href=\"https://github.com/steffenmllr/imageoptmizer-brunch\">OptiPNG / OptiJPG</a>\n  </li>\n</ul>\n\n<h2>Scaffolding and testing</h2>\n\n<p>\n  If you need scaffolding, there is a separate\n  <a href=\"https://github.com/paulmillr/scaffolt\">scaffolt</a> project,\n  which was once used to be a part of brunch as <code>brunch generate</code>.\n  It is the simplest one, with implementation based on JSON scaffolder specifications and Handlebars templates for stuff.\n  Use it like this: <code>scaffolt model user</code>.\n</p>\n\n<p>\n  If you need console test runner and don’t want to launch browser,\n  there is a separate\n  <a href=\"http://metaskills.net/mocha-phantomjs/\">mocha-phantomjs</a> project,\n  a successor of <code>brunch test</code> command.\n  Use it like this: <code>mocha-phantomjs public/test/index.html</code>.\n</p></div></div><footer><hr class=\"rule\"><p><small>Hosted on <a href=\"https://github.com/brunch/brunch.github.com\">GitHub Pages</a>. The content on this website is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by/3.0/deed.en_US\">CC BY 3.0</a>.</small></p></footer></div><script src=\"scripts/app.js\"></script><script>require('scripts/app');\n</script>  <script type=\"text/javascript\">\n    var _gauges = _gauges || [];\n    (function() {\n      var t   = document.createElement('script');\n      t.type  = 'text/javascript';\n      t.async = true;\n      t.id    = 'gauges-tracker';\n      t.setAttribute('data-site-id', '4f1631bbcb25bc723b000007');\n      t.src = '//secure.gaug.es/track.js';\n      var s = document.getElementsByTagName('script')[0];\n      s.parentNode.insertBefore(t, s);\n    })();\n  </script>\n</body></html>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("skeletons", function(exports, require, module) {
var __templateData = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),nav = locals_.nav,filename = locals_.filename,social = locals_.social;buf.push("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><title>Brunch | HTML5 application assembler</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/favicon.ico\"><link rel=\"stylesheet\" href=\"styles/app.css\"><!--[if lt IE 9]>\n<script src=\"//html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n<![endif]--><!-- Grunticon Loader: place this in the head of your page -->\n<script>\n/* grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license. */\nwindow.grunticon=function(e){if(e&&3===e.length){var t=window,n=!(!t.document.createElementNS||!t.document.createElementNS(\"http://www.w3.org/2000/svg\",\"svg\").createSVGRect||!document.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/feature#Image\",\"1.1\")||window.opera&&-1===navigator.userAgent.indexOf(\"Chrome\")),o=function(o){var r=t.document.createElement(\"link\"),a=t.document.getElementsByTagName(\"script\")[0];r.rel=\"stylesheet\",r.href=e[o&&n?0:o?1:2],a.parentNode.insertBefore(r,a)},r=new t.Image;r.onerror=function(){o(!1)},r.onload=function(){o(1===r.width&&1===r.height)},r.src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==\"}};\ngrunticon( [ \"/images/svg/icons.data.svg.css\", \"/images/svg/icons.data.png.css\", \"/images/svg/icons.fallback.css\" ] );</script>\n<noscript><link href=\"/images/svg/icons.fallback.css\" rel=\"stylesheet\"></noscript></head><body><div id=\"navbar\"><div class=\"container\"><a href=\"/\" class=\"icon-brunch-logo-web\"></a><ul class=\"nav nav--main-nav\">");
// iterate nav
;(function(){
  var $$obj = nav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

var active = ((filename == item.path + '.jade') || (filename == 'index.jade' && !item.path));
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':('/'+item.path+(item.path?'.html':'')), "class": [('nav__item--main-nav'),(active?'active':null)] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = item.title) ? "" : jade.interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

var active = ((filename == item.path + '.jade') || (filename == 'index.jade' && !item.path));
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':('/'+item.path+(item.path?'.html':'')), "class": [('nav__item--main-nav'),(active?'active':null)] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = item.title) ? "" : jade.interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div></div><div class=\"page__content container\"><div class=\"grid\"><div style=\"float:right\" class=\"grid__item one-whole desk-one-third\"><div class=\"social-buttons\">");
// iterate social
;(function(){
  var $$obj = social;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var service = $$obj[$index];

buf.push("<div><iframe" + (jade.attrs({ terse: true, 'allowtransparency':("true"), 'frameborder':("0"), 'scrolling':("no"), 'src':(service.src), 'style':("width: " + (service.width) + "; height:30px;"), "class": [("social-button-" + (service.classname) + "")] }, {"class":true,"allowtransparency":true,"frameborder":true,"scrolling":true,"src":true,"style":true})) + "></iframe></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var service = $$obj[$index];

buf.push("<div><iframe" + (jade.attrs({ terse: true, 'allowtransparency':("true"), 'frameborder':("0"), 'scrolling':("no"), 'src':(service.src), 'style':("width: " + (service.width) + "; height:30px;"), "class": [("social-button-" + (service.classname) + "")] }, {"class":true,"allowtransparency":true,"frameborder":true,"scrolling":true,"src":true,"style":true})) + "></iframe></div>");
    }

  }
}).call(this);

buf.push("</div><h3>People love Brunch!</h3><a class=\"twitter-timeline\" data-dnt=\"true\" href=\"https://twitter.com/brunch/favorites\" data-widget-id=\"397311715655684096\">Favorite Tweets by @brunch</a>\n<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script></div><div class=\"grid__item one-whole desk-two-thirds\"><h1 id=\"skeletons\">Skeletons</h1>\n<p>A Brunch skeleton is basically an application boilerplate that provides a good starting point for new applications.</p>\n<p>Creating new application with any skeleton is pretty simple:</p>\n<pre><code>brunch new &lt;path-or-URI&gt; [optional-output-dir]\n# Example from GitHub\nbrunch new gh:brunch/dead-simple\n# Example from a full URL\nbrunch new https://github.com/paulmillr/brunch-with-chaplin</code></pre>\n<p>Brunch doesn’t encourage you to use any particular technology,\nbut application skeletons can start you on your way with a specific pattern.</p>\n<p>The <a href=\"https://github.com/brunch/brunch/wiki/Skeletons\">complete skeletons list</a> is on GitHub. If you create your own open-source skeleton,\nfeel free to add it!</p>\n<table style=\"border: 1px solid black\">\n<thead><tr><th>Name</th><th>URL</th><th>Technologies</th><th>Description</th></tr></thead>\n<tr><td>★ <a href=\"https://github.com/paulmillr/brunch-with-chaplin\">Brunch with Chaplin</a> 216 ★</td><td><code>gh:paulmillr/brunch-with-chaplin</code></td><td>CoffeeScript, Stylus, Handlebars</td><td>Chaplin, Backbone, HTML5 Boilerplate, jQuery. Perfect for big applications</td></tr><tr><td>★ <a href=\"https://github.com/scotch/angular-brunch-seed\">Brunch with AngularJS</a> 159 ★</td><td><code>gh:scotch/angular-brunch-seed</code></td><td>Coffeescript, Less, Jade</td><td>Twitter Bootstrap with themes, <a href=\"https://github.com/vojtajina/testacular\">Testacular</a> for unit tests</td></tr><tr><td><a href=\"https://github.com/icholy/ember-brunch\">Brunch with Ember</a> 88 ★</td><td><code>gh:icholy/ember-brunch</code></td><td>JavaScript, CSS, Handlebars</td><td>Twitter Bootstrap, jQuery</td></tr><tr><td><a href=\"https://github.com/elving/brunch-with-hipsters\">Brunch with Hipsters</a> 85 ★</td><td><code>gh:elving/brunch-with-hipsters</code></td><td>CoffeeScript, Stylus, Handlebars</td><td>Swag, Lodash, Font Awesome, Normalize.css, HTML5 Boilerplate CSS Helpers, Brunch Auto-Reload, coffeelint-brunch and imageoptmizer-brunch. Works with Bower, includes generators and testing with Karma-Runner.</td></tr><tr><td><a href=\"https://github.com/nezoomie/brunch-eggs-and-bacon\">Brunch with eggs and bacon</a> 43 ★</td><td><code>gh:nezoomie/brunch-eggs-and-bacon</code></td><td>JavaScript, Sass, LESS, Handlebars</td><td>Twitter Bootstrap, Mediator</td></tr><tr><td><a href=\"https://github.com/gcollazo/brunch-with-ember-reloaded\">Brunch with Ember Reloaded</a> 38 ★</td><td><code>gh:gcollazo/brunch-with-ember-reloaded</code></td><td>CoffeeScript, Stylus, Handlebars</td><td>HTML5 Boilerplate, jQuery and Auto Reload</td></tr><tr><td><a href=\"https://github.com/brunch/simple-coffee-skeleton\">Brunch with Coffee</a> 27 ★</td><td><code>gh:brunch/simple-coffee-skeleton</code></td><td>CoffeeScript, Stylus, Handlebars</td><td>HTML5 Boilerplate, jQuery. It was the default skeleton in brunch 1.1. Unsupported but still working.</td></tr><tr><td><a href=\"https://github.com/Anaphase/brunch-banana-pancakes\">Brunch with Banana Pancakes</a> 24 ★</td><td><code>gh:Anaphase/brunch-banana-pancakes</code></td><td>JavaScript, Sass, LESS, Handlebars</td><td>Twitter Bootstrap, Mediator. Essentially the same as <a href=\"https://github.com/nezoomie/brunch-eggs-and-bacon\">Brunch with Eggs and Bacon</a>, but constantly updated to the latest library versions.</td></tr><tr><td><a href=\"https://github.com/brunch/simple-js-skeleton\">Brunch with JS</a> 22 ★</td><td><code>gh:brunch/simple-js-skeleton</code></td><td>JavaScript, Stylus, Handlebars</td><td>HTML5 Boilerplate, jQuery. Unsupported but still working.</td></tr><tr><td><a href=\"https://github.com/exlee/brunch-on-asteroids\">Brunch On Asteroids</a> 21 ★</td><td><code>gh:exlee/brunch-on-asteroids</code></td><td>Jade, Sass, CoffeeScript/LiveScript</td><td>Brunch with Twitter Bootstrap 2.3 extended by Bootswatch themes, Angular.JS, optional LiveScript or CoffeeScript and some extra libraries preconfigured and included such as D3.js, AngularUI, jQuery UI.  </td></tr><tr><td><a href=\"https://github.com/jerfowler/ExpressBrunchJade\">Express Brunch with Jade</a> 20 ★</td><td><code>gh:jerfowler/ExpressBrunchJade</code></td><td>CoffeeScript, Stylus, Jade</td><td>Custom server.coffee that watches your Express server files and restarts on hot code changes. Uses Jade for client and server side templates. Includes express framework generators and Mocha/Chai/Sinon for testacular testing. Everything hipsters has, and more...</td></tr><tr><td><a href=\"https://github.com/SimbCo/brunch-with-marionette\">Brunch with MarionetteJS</a> 16 ★</td><td><code>gh:SimbCo/brunch-with-marionette</code></td><td>CoffeeScript, Stylus, Handlebars</td><td>Based on the template we have been using for our MarionetteJS projects. Includes Twitter Bootstrap.</td></tr><tr><td><a href=\"https://github.com/scoarescoare/angular-brunch-true-north\">Brunch Facing True North</a> 14 ★</td><td><code>gh:scoarescoare/angular-brunch-true-north</code></td><td>Coffeescript, Compass, Sass, Jade, Initializr</td><td>Built on the amazing <a href=\"https://github.com/scotch/angular-brunch-seed\">Brunch with Angular skeleton</a> with a few tweaks including: Compass, Bootstrap SASS, HTML5BP</td></tr><tr><td><a href=\"https://github.com/damassi/Javascript-App-Skeleton\">JavaScript App Skeleton</a> 13 ★</td><td><code>gh:damassi/Javascript-App-Skeleton</code></td><td>JavaScript, SASS, Handlebars</td><td>LiveReload, Backbone.Mediator, Mocha, Advanced Structure</td></tr><tr><td><a href=\"https://github.com/monokrome/brunch-with-brunch\">Brunch with brunch</a> 13 ★</td><td><code>gh:monokrome/brunch-with-brunch</code></td><td>—</td><td>As minimal as possible for building your own toolchain on top of.</td></tr><tr><td>★ <a href=\"https://github.com/wordofchristian/brunch-with-hampsters\">Brunch with Hampsters</a> 12 ★</td><td><code>gh:wordofchristian/brunch-with-hampsters</code></td><td>CoffeeScript, Stylus, <a href=\"http://emblemjs.com/\">Emblem.js</a></td><td>Also useful for rapid prototyping. Includes html5 boilerplate, Modernizer, and Twitter Bootstrap.</td></tr><tr><td><a href=\"https://github.com/mutewinter/tapas-with-ember\">Tapas with Ember</a> 12 ★</td><td><code>gh:mutewinter/tapas-with-ember</code></td><td>CoffeeScript, Stylus, Handlebars, Ember Data, Ember Model</td><td>A skeleton for rapid Ember development. Including automated Ember installation scripts, environment-specific JS builds, generators, and Ember.vim support.    </td></tr><tr><td><a href=\"https://github.com/jokull/brunch-template\">@jokull's skeleton</a> 11 ★</td><td><code>gh:jokull/brunch-template</code></td><td>CoffeeScript, Stylus, Handlebars</td><td>Zepto, Stylus responsive grid, Modernizr, Facebook login, slideshow</td></tr><tr><td><a href=\"https://github.com/clkao/angular-brunch-seed-livescript\">Brunch with AngularJS in LiveScript</a> 11 ★</td><td><code>gh:clkao/angular-brunch-seed-livescript</code></td><td>LiveScript, Sass, Jade</td><td>Twitter Bootstrap in Sass, LiveScript</td></tr><tr><td><a href=\"https://github.com/pheuter/brunch-socket-soup\">Brunch with SocketSoup</a> 10 ★</td><td><code>gh:pheuter/brunch-socket-soup</code></td><td>Coffeescript, Stylus, Handlebars </td><td>HTML5 Boilerplate, Twitter Bootstrap, Express, Socket.io</td></tr><tr><td><a href=\"https://github.com/damiencaselli/spine-on-brunch\">Spine on Brunch</a> 10 ★</td><td><code>gh:damiencaselli/spine-on-brunch</code></td><td>CoffeeScript, CSS, Handlebars</td><td>HTML5 Boilerplate, jQuery</td></tr><tr><td><a href=\"https://github.com/jupl/chapless-brunch\">Chapless Brunch</a> 9 ★</td><td><code>gh:jupl/chapless-brunch</code></td><td>CoffeeScript, LESS, eco</td><td>jQuery, Clearless, Twitter Bootstrap, Font Awesome, Backbone.stickit, Underscore.string. Cake tasks included. There's also a <a href=\"https://github.com/jupl/chapless-brunch/tree/cordova\">variant with Cordova.</a></td></tr><tr><td><a href=\"https://github.com/eriwen/brunch-jade-bootstrap-and-coffee\">Brunch with Bootstrap, Sass, and Coffee</a> 9 ★</td><td><code>gh:eriwen/brunch-jade-bootstrap-and-coffee</code></td><td>CoffeeScript, Sass, Jade</td><td>Twitter Bootstrap, Bootstrap-Sass, Mediator, jQuery</td></tr><tr><td><a href=\"https://github.com/gkz/brunch-bare-livescript\">Brunch with bare livescript</a> 9 ★</td><td><code>gh:gkz/brunch-bare-livescript</code></td><td>LiveScript, Less</td><td>Extremely simple skeleton without any frameworks</td></tr><tr><td><a href=\"https://github.com/bc-luke/sassy-brunch\">Sassy Brunch</a> 8 ★</td><td><code>gh:bc-luke/sassy-brunch</code></td><td>CoffeeScript, <a href=\"https://sass-lang.org\">Sass</a>, Handlebars</td><td>Just like Brunch with Chaplin, but replaces Stylus with Sass</td></tr><tr><td><a href=\"https://github.com/damassi/Coffeescript-App-Skeleton\">CoffeeScript App Skeleton</a> 7 ★</td><td><code>gh:damassi/Coffeescript-App-Skeleton</code></td><td>CoffeeScript, Stylus, Handlebars</td><td>HTML5 Boilerplate, jQuery, Mediator, advanced structure</td></tr><tr><td><a href=\"https://github.com/eliellis/brunch-bacon-pancakes/\">Brunch with Bacon Pancakes</a> 6 ★</td><td><code>gh:eliellis/brunch-bacon-pancakes</code></td><td>JavaScript, Sass, LESS, Handlebars</td><td>Created with <a href=\"https://github.com/Anaphase/brunch-banana-pancakes\">Brunch with Banana Pancakes</a> as a base, Brunch with Bacon Pancakes includes Twitter Bootstrap with FontAwesome as style boilerplate.</td></tr><tr><td><a href=\"https://github.com/edgycircle/cinder-plate\">Cinder Plate</a> 6 ★</td><td><code>gh:edgycircle/cinder-plate</code></td><td>CoffeeScript, SASS, Handlebars</td><td>CoffeeScript, SASS, Handlebars template pre-compilation, production and development builds with appropriate Ember.js version (debug or production).</td></tr><tr><td><a href=\"https://github.com/Nami-Doc/brunch-with-ketchup\">Brunch With Ketchup</a> 6 ★</td><td><code>gh:Nami-Doc/brunch-with-ketchup</code></td><td>LiveScript, Stylus, Jade</td><td>Meant for large applications. Includes express-resource.</td></tr><tr><td><a href=\"https://github.com/vip32/brunch-with-chaplin-and-bootstrap\">Brunch with Chaplin and Bootstrap</a> 5 ★</td><td><code>gh:vip32/brunch-with-chaplin-and-bootstrap</code></td><td>CoffeeScript, Stylus, Handlebars</td><td>HTML5 Boilerplate, Bootstrap, jQuery</td></tr><tr><td><a href=\"https://github.com/tricinel/brunch-ember-sassy\">Sassy Brunch with Ember and CoffeeSoup</a> 5 ★</td><td><code>gh:tricinel/brunch-ember-sassy</code></td><td>CoffeeScript, Sass, Handlebars</td><td>HTML5 Boilerplate, Twitter Bootstrap (Compass), jQuery</td></tr><tr><td><a href=\"https://github.com/meleyal/brunch-crumbs\">Brunch Crumbs</a> 4 ★</td><td><code>gh:meleyal/brunch-crumbs</code></td><td>CoffeeScript, jQuery, Sass, Eco</td><td>Minimal structure based on H5BP, testing via Karma/Jasmine, Docs via Docco, deployment via Heroku.</td></tr><tr><td><a href=\"https://github.com/tUrG0n/brunch-chrunb\">Brunch chrunb</a> 4 ★</td><td><code>gh:tUrG0n/brunch-chrunb</code></td><td>CoffeeScript, Stylus, Jade</td><td>Twitter Bootstrap, jQuery</td></tr><tr><td><a href=\"https://github.com/EnosFeedler/brunch-dutch-baby\">Brunch Dutch Baby</a> 4 ★</td><td><code>gh:EnosFeedler/brunch-dutch-baby</code></td><td>Coffeescript, Stylus, Jade</td><td>Backbone.js, Bootstrap 3, Karma Test Runner</td></tr><tr><td><a href=\"https://github.com/ocombe/angular-brunch-seed-no-fuss\">Angular &amp; Brunch - No fuss</a> 4 ★</td><td><code>gh:ocombe/angular-brunch-seed-no-fuss</code></td><td>Compass, Sass, Initializr</td><td>Built on <a href=\"https://github.com/scoarescoare/angular-brunch-true-north\">Brunch Facing True North</a> with updated libs and without Jade / Coffeescript</td></tr><tr><td><a href=\"https://github.com/connorblack/brunch-with-moby\">Brunch with Moby</a> 4 ★</td><td><code>gh:connorblack/brunch-with-moby</code></td><td><a href=\"http://phonegap.com/\">PhoneGap (Cordova)</a>, <a href=\"http://lungo.tapquo.com/\">Lungo.js</a></td><td>Simple skeleton optimized for PhoneGap and integrated with Lungo.js for sexy prototyping. Easily create native-like mobile apps!</td></tr><tr><td><a href=\"https://github.com/brunch/dead-simple\">Dead-simple brunch</a> 4 ★</td><td><code>gh:brunch/dead-simple</code></td><td>—</td><td>Dead-simple brunch skeleton. No opinions, just empty dirs and minimal configs.</td></tr><tr><td><a href=\"https://github.com/DallanQ/brunch-with-chaplin-and-initializr\">Brunch with Chaplin and Initializr</a> 3 ★</td><td><code>gh:DallanQ/brunch-with-chaplin-and-initializr</code></td><td>CoffeeScript, Stylus, LESS, Handlebars</td><td>HTML5 Boilerplate, Bootstrap, jQuery, Modernizr — includes individual bootstrap style files and javascript plugins so you can omit or modify them</td></tr><tr><td><a href=\"https://github.com/cbosco/coffee-purist-brunch\">Coffee purist brunch</a> 3 ★</td><td><code>gh:cbosco/coffee-purist-brunch</code></td><td>CoffeeScript, LESS, eco templates</td><td>jQuery, Mocha. Tests run with no need to build into public/ directory or duplicate test/vendor libraries. For those who want to bundle libs specifically made for CoffeeScript.</td></tr><tr><td><a href=\"https://github.com/Anaphase/cinnamon-toast-brunch\">Cinnamon Toast Brunch</a> 3 ★</td><td><code>gh:Anaphase/cinnamon-toast-brunch</code></td><td>CoffeeScript, Stylus, &amp; SIML</td><td>Never write a semicolon again! Cinnamon Toast Brunch focuses on concise and clean code.</td></tr><tr><td><a href=\"https://github.com/aheuermann/Ultimate-Omelette-Brunch\">Ultimate Omelette Brunch</a> 3 ★</td><td><code>gh:aheuermann/Ultimate-Omelette-Brunch</code></td><td>CoffeeScript, Less, Jade</td><td>CoffeeScript, Less, Jade, Bootstrap (<a href=\"http://bootswatch.com/flatly/\">Flatly Theme</a>), <a href=\"http://angular-ui.github.io/bootstrap/\">Angular UI-Bootstrap</a></td></tr><tr><td><a href=\"https://github.com/Nami-Doc/sticky-brunch\">Sticky Brunch</a> 2 ★</td><td><code>gh:Nami-Doc/sticky-brunch</code></td><td>LiveScript, Stylus, Jade</td><td>Includes <a href=\"http://nytimes.github.com/backbone.stickit/\">Stickit</a> for MVVM-like behavior. No CSS framework included.</td></tr><tr><td><a href=\"https://github.com/felipesabino/brunch-with-sass-and-jade\">Brunch With Sass and Jade</a> 2 ★</td><td><code>gh:felipesabino/brunch-with-sass-and-jade</code></td><td>CoffeeScript, <a href=\"https://sass-lang.org\">Sass</a>, <a href=\"http://jade-lang.com\">Jade</a></td><td>Brunch with Chaplin, Sass, Jade, jQuery and Underscore</td></tr><tr><td><a href=\"https://github.com/sandy98/brunch-with-puppets\">Brunch with Puppets</a> 2 ★</td><td><code>gh:sandy98/brunch-with-puppets</code></td><td>CoffeeScript, Stylus</td><td>MarionetteJS - Twitter Bootstrap based skeleton with expanded, login prepared menu and some other goodies</td></tr><tr><td><a href=\"https://github.com/KyleAMathews/simple-brunch\">Simple Brunch</a> 2 ★</td><td><code>gh:KyleAMathews/simple-brunch</code></td><td>CoffeeScript, <a href=\"https://sass-lang.org\">Sass</a>/<a href=\"http://compass-style.org\">Compass</a>, Eco</td><td>Includes some nice typography defaults and <a href=\"http://susy.oddbird.net/\">Susy</a>, a responsive grid system.</td></tr><tr><td><a href=\"https://github.com/smazurov/brunch-marcos\">Brunch Marcos</a> 2 ★</td><td><code>gh:smazurov/brunch-marcos</code></td><td>JavaScript, <a href=\"http://learnboost.github.com/stylus/\">Stylus</a>/<a href=\"http://handlebarsjs.com\">Handlebars</a></td><td><a href=\"http://layoutmanager.org/\">LayoutManager</a>, <b>Tests</b>, Sensible structure to write large maintainable apps.</td></tr><tr><td><a href=\"https://github.com/thomdixon/brunch-chicken-and-waffles\">Brunch with chicken and waffles</a> 2 ★</td><td><code>gh:thomdixon/brunch-chicken-and-waffles</code></td><td>CoffeeScript</td><td>Angular, AngularUI, and Bootstrap 3</td></tr><tr><td><a href=\"https://github.com/codevinsky/brunch-with-edge-benedict\">Brunch with Edge Benedict</a> 2 ★</td><td><code>gh:codevinsky/brunch-with-edge-benedict</code></td><td>Coffeescript, Less, Jade</td><td>Always kept up-to-date with the newest libraries: AngularJS 1.2.0-rc.3, Bootstrap 3, jQuery 2.0.3, Sling UI 0.2.3</td></tr><tr><td><a href=\"https://github.com/vip32/brunch-with-marionette\">Brunch with MarionetteJS</a> 1 ★</td><td><code>gh:vip32/brunch-with-marionette</code></td><td>CoffeeScript, Stylus, Handlebars, Bootstrap 3</td><td>Copy of SimbCo/brunch-with-marionette which has specific implementation of routes/views</td></tr><tr><td><a href=\"https://github.com/talentriot/brunch-foundation\">Brunch Foundation</a> 1 ★</td><td><code>gh:talentriot/brunch-foundation</code></td><td>JavaScript, SASS/<a href=\"http://handlebarsjs.com\">Handlebars</a></td><td>Foundation CSS framework, <a href=\"http://layoutmanager.org/\">LayoutManager</a>, <b>Tests</b>, Sensible structure to write large maintainable apps. Intended for mobile-first</td></tr><tr><td><a href=\"https://github.com/sjlu/brunch-time\">Brunch Time</a> 1 ★</td><td><code>gh:sjlu/brunch-time</code></td><td>Javascript, LESS, Handlebars</td><td>Bower, Backbone.js, Normalize.css, lesshat</td></tr><tr><td><a href=\"https://github.com/ksnyde/brunch-with-ember-sideloaded\">Brunch with Ember Sideloaded</a> 1 ★</td><td><code>gh:ksnyde/brunch-with-ember-sideloaded</code></td><td>Javascript, LESS, Handlebars</td><td>Bootstrap 3, MomentJS, HTML5 Boilerplate, jQuery and Auto Reload</td></tr><tr><td><a href=\"https://github.com/clonn/angular-express\">Brunch with Angular-Express</a> 1 ★</td><td><code>gh:clonn/angular-express</code></td><td>Coffeescript, Stylus, Angular, Express</td><td>HTML5 Boilerplate, Angular.js, Express</td></tr><tr><td><a href=\"https://github.com/stefanvermaas/brunch-with-sass\">Brunch with SASS</a></td><td><code>gh:stefanvermaas/brunch-with-sass</code></td><td>CoffeeScript, <a href=\"https://sass-lang.org\">Sass</a>, Handlebars</td><td>Brunch with SASS provides a working Brunch with Chaplin skeleton with SASS enabled instead of Stylus</td></tr><tr><td><a href=\"https://github.com/monokrome/brunch-with-grits\">Brunch with Grits</a></td><td>Backbone, <a href=\"https://github.com/marionettejs/backbone.marionette\">Marionette</a></td><td>CoffeeScript, Stylus</td><td>Brunch with CoffeeScript, Stylus, Backbone, Marrionette, and jQuery.</td></tr><tr><td><a href=\"https://github.com/pkmishra/Dhancha\">Brunch with Coffee &amp; Dust</a></td><td></td><td>CoffeeScript, LESS, Dust.js</td><td>Twitter Bootstrap and Aura based skeleton.</td></tr><tr><td><a href=\"https://github.com/timebox-designs/pineapple-in-a-can\">Pineapple in a Can</a></td><td><code>gh:timebox-designs/pineapple-in-a-can</code></td><td>JavaScript, Stylus</td><td>Backbone, bootstrap, font awesome, handlebars, jQuery, marionette, swag and underscore. Chock full of yummy goodness!</td></tr><tr><td><a href=\"https://github.com/timebox-designs/canned-coral\">Canned Coral</a></td><td><code>gh:timebox-designs/canned-coral</code></td><td>JavaScript, Stylus</td><td>A copy of Pineapple in a Can with a reverse proxy.</td></tr><tr><td><a href=\"https://github.com/damassi/Backbone.Create\">Brunch for CreateJS Canvas</a></td><td><code>gh:damassi/Backbone.Create</code></td><td>JavaScript, Sass, Handlebars</td><td>A Backbone.js-based framework for CreateJS canvas projects.  Also included is TweenMax for super fast animation.</td></tr><tr><td><a href=\"https://github.com/davidfregoli/brunch-with-underscore-js-less\">Brunch with Underscore, LESS and JS</a></td><td><code>gh:davidfregoli/brunch-with-underscore-js-less</code></td><td>Underscore templates, LESS styles, plain JS</td><td>Minimal Brunch Skeleton with Underscore templates, LESS styles and vanilla JS</td></tr><tr><td><a href=\"https://github.com/askalyuk/brunch-fruits\">Brunch with Fruits</a></td><td><code>gh:askalyuk/brunch-fruits</code></td><td>JavaScript, Handlebars, LESS/SASS</td><td>Bootstrap, Mocha/Chai. It has example of deployed full-stack application.</td></tr><tr><td><a href=\"https://github.com/huafu/brunch-with-ember-and-bootstrap\">Brunch with Ember and Bootstrap</a></td><td><code>gh:huafu/brunch-with-ember-and-bootstrap</code></td><td>CoffeeScript, Ember, Ember data, Stylus and Handlebars</td><td>HTML5 Boilerplate, Twitter Bootstrap (Stylus version), jQuery, Keyword, Ember Bootstrap and Auto Reload</td></tr><tr><td><a href=\"https://github.com/jupl/cinder-brunch\">Cinder Brunch</a></td><td><code>gh:jupl/cinder-brunch</code></td><td>CoffeeScript, Handlebars, LESS</td><td>Clearless, Twitter Bootstrap, Font Awesome. Require statements are not need for Ember modules. Cake tasks included. There's also a <a href=\"https://github.com/jupl/cinder-brunch/tree/cordova\">variant with Cordova.</a></td></tr><tr><td><a href=\"https://github.com/abronte/brunch-on-fire\">Brunch on fire</a></td><td><code>gh:abronte/brunch-on-fire</code></td><td>CoffeeScript, SASS, Handlebars</td><td>Straightforward ember bundle. Includes jQuery and tests are setup using mocha + chai.</td></tr><tr><td>★ <a href=\"https://github.com/markmarijnissen/spine-livescript-brunch-skeleton\">Spine.js with Bootstrap OR jQuery Mobile</a></td><td><code>gh:markmarijnissen/spine-livescript-brunch-skeleton</code></td><td>LiveScript, Less, Jade</td><td>jQuery<br>    optionally add Twitter Bootstrap (LESS code!) or jQuery Mobile using generators. Also includes an Android Eclipse project using PhoneGap!</td></tr><tr><td><a href=\"https://github.com/ashleydavis/AngularJS-Skeleton\">Simple Brunch with AngularJS</a></td><td><code>gh:ashleydavis/AngularJS-Skeleton</code></td><td></td><td>AngularJS v1.1.4 and jQuery v2.0.2</td></tr><tr><td><a href=\"https://github.com/monokrome/brunch-for-libs\">Brunch for libs</a></td><td><code>gh:monokrome/brunch-for-libs</code></td><td>—</td><td>A super minimal brunch configuration for building Javascript libraries on top of.</td></tr><tr><td><a href=\"https://github.com/jupl/cordova-brunch\">Cordova Brunch</a></td><td><code>gh:jupl/cordova-brunch</code></td><td>—</td><td>Bare skeleton that includes support for building apps using Apache Cordova.</td></tr><tr><td><a href=\"https://github.com/sandy98/brunch-with-wisp\">Brunch with Wisp</a></td><td><code>gh:sandy98/brunch-with-wisp</code></td><td><a href=\"https://github.com/Gozala/wisp\">Wisp</a></td><td>Tiny skeleton meant to be a proof of concept for the use of Wisp, the Clojure-like Lisp dialect with Brunch.</td></tr><tr><td><a href=\"https://github.com/GulinSS/brunch-bower-site\">Brunch with CoffeeScript, Jade, Less, Bower</a></td><td><code>gh:GulinSS/brunch-bower-site</code></td><td>CoffeeScript, Jade, Less, Bower</td><td>Minimal skeleton for modern Client-Side development based on stack.</td></tr><tr><td><a href=\"https://github.com/TessaHarmon/brunch-jade-stylus\">Brunch with Jade and Stylus</a></td><td><code>gh:TessaHarmon/brunch-jade-stylus</code></td><td>Jade, Stylus</td><td>Minimal skeleton based on brunch-with-brunch for jade/stylus lovers.</td></tr>\n</table></div></div><footer><hr class=\"rule\"><p><small>Hosted on <a href=\"https://github.com/brunch/brunch.github.com\">GitHub Pages</a>. The content on this website is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by/3.0/deed.en_US\">CC BY 3.0</a>.</small></p></footer></div><script src=\"scripts/app.js\"></script><script>require('scripts/app');\n</script>  <script type=\"text/javascript\">\n    var _gauges = _gauges || [];\n    (function() {\n      var t   = document.createElement('script');\n      t.type  = 'text/javascript';\n      t.async = true;\n      t.id    = 'gauges-tracker';\n      t.setAttribute('data-site-id', '4f1631bbcb25bc723b000007');\n      t.src = '//secure.gaug.es/track.js';\n      var s = document.getElementsByTagName('script')[0];\n      s.parentNode.insertBefore(t, s);\n    })();\n  </script>\n</body></html>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("support", function(exports, require, module) {
var __templateData = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),nav = locals_.nav,filename = locals_.filename,social = locals_.social;buf.push("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><title>Brunch | HTML5 application assembler</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/favicon.ico\"><link rel=\"stylesheet\" href=\"styles/app.css\"><!--[if lt IE 9]>\n<script src=\"//html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n<![endif]--><!-- Grunticon Loader: place this in the head of your page -->\n<script>\n/* grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license. */\nwindow.grunticon=function(e){if(e&&3===e.length){var t=window,n=!(!t.document.createElementNS||!t.document.createElementNS(\"http://www.w3.org/2000/svg\",\"svg\").createSVGRect||!document.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/feature#Image\",\"1.1\")||window.opera&&-1===navigator.userAgent.indexOf(\"Chrome\")),o=function(o){var r=t.document.createElement(\"link\"),a=t.document.getElementsByTagName(\"script\")[0];r.rel=\"stylesheet\",r.href=e[o&&n?0:o?1:2],a.parentNode.insertBefore(r,a)},r=new t.Image;r.onerror=function(){o(!1)},r.onload=function(){o(1===r.width&&1===r.height)},r.src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==\"}};\ngrunticon( [ \"/images/svg/icons.data.svg.css\", \"/images/svg/icons.data.png.css\", \"/images/svg/icons.fallback.css\" ] );</script>\n<noscript><link href=\"/images/svg/icons.fallback.css\" rel=\"stylesheet\"></noscript></head><body><div id=\"navbar\"><div class=\"container\"><a href=\"/\" class=\"icon-brunch-logo-web\"></a><ul class=\"nav nav--main-nav\">");
// iterate nav
;(function(){
  var $$obj = nav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

var active = ((filename == item.path + '.jade') || (filename == 'index.jade' && !item.path));
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':('/'+item.path+(item.path?'.html':'')), "class": [('nav__item--main-nav'),(active?'active':null)] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = item.title) ? "" : jade.interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

var active = ((filename == item.path + '.jade') || (filename == 'index.jade' && !item.path));
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':('/'+item.path+(item.path?'.html':'')), "class": [('nav__item--main-nav'),(active?'active':null)] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = item.title) ? "" : jade.interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div></div><div class=\"page__content container\"><div class=\"grid\"><div style=\"float:right\" class=\"grid__item one-whole desk-one-third\"><div class=\"social-buttons\">");
// iterate social
;(function(){
  var $$obj = social;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var service = $$obj[$index];

buf.push("<div><iframe" + (jade.attrs({ terse: true, 'allowtransparency':("true"), 'frameborder':("0"), 'scrolling':("no"), 'src':(service.src), 'style':("width: " + (service.width) + "; height:30px;"), "class": [("social-button-" + (service.classname) + "")] }, {"class":true,"allowtransparency":true,"frameborder":true,"scrolling":true,"src":true,"style":true})) + "></iframe></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var service = $$obj[$index];

buf.push("<div><iframe" + (jade.attrs({ terse: true, 'allowtransparency':("true"), 'frameborder':("0"), 'scrolling':("no"), 'src':(service.src), 'style':("width: " + (service.width) + "; height:30px;"), "class": [("social-button-" + (service.classname) + "")] }, {"class":true,"allowtransparency":true,"frameborder":true,"scrolling":true,"src":true,"style":true})) + "></iframe></div>");
    }

  }
}).call(this);

buf.push("</div><h3>People love Brunch!</h3><a class=\"twitter-timeline\" data-dnt=\"true\" href=\"https://twitter.com/brunch/favorites\" data-widget-id=\"397311715655684096\">Favorite Tweets by @brunch</a>\n<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script></div><div class=\"grid__item one-whole desk-two-thirds\"><h1>Community</h1>\n\n<p>Follow <a href=\"http://twitter.com/brunch\">@brunch</a> and <a href=\"http://twitter.com/paulmillr\">@paulmillr</a> on twitter to get latest updates &amp; news.\nFeel free to discuss things with other users and ask for help in our ost.io <a href=\"http://ost.io/@brunch/brunch\">forum section</a>.\n\nYou can also ask questions with <a href=\"http://stackoverflow.com/questions/tagged/brunch\">#brunch tag at Stack Overflow</a>\n</p>\n\n<p>\n  If you want to add something new to brunch or\n  create your own plugin, <a href=\"https://github.com/brunch/brunch/blob/master/CONTRIBUTING.md\">contributing guidelines</a>\n  can help you.\n</p>\n\n<p>There are also some text editor plugins that simplify developing apps:</p>\n\n<ul>\n  <li><a href=\"https://github.com/drichard/vim-brunch\">Vim-brunch</a> by <a href=\"https://github.com/drichard\">@drichard</a></li>\n</ul>\n\n<h2>Commercial support</h2>\n\n<p>\n  <a href=\"http://paulmillr.com/\">Paul</a>, brunch core dev is offering\n  commercial support, consulting and training for Brunch, Chaplin and Backbone-based web\n  applications. Send him\n  <a href=\"mailto:&#112;&#97;&#117;&#108;&#43;&#99;&#111;&#110;&#115;&#117;&#108;&#116;&#105;&#110;&#103;&#64;&#112;&#97;&#117;&#108;&#109;&#105;&#108;&#108;&#114;&#46;&#99;&#111;&#109;\">an email</a>\n  for more information.\n</p>\n\n<p>\n   <a href=\"http://andriy.drozdyuk.com\">Andriy Drozdyuk</a> in Fredericton, NB, Canada. Contact me at <a href=\"mailto:drozzy@gmail.com\">drozzy@gmail.com</a> for more information.\n   Local only.\n</p>\n<p>Are you providing Brunch consulting too? <a href=\"https://github.com/brunch/brunch.github.com/edit/master/index.html\">Place yourself here!</a></p>\n</div></div><footer><hr class=\"rule\"><p><small>Hosted on <a href=\"https://github.com/brunch/brunch.github.com\">GitHub Pages</a>. The content on this website is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by/3.0/deed.en_US\">CC BY 3.0</a>.</small></p></footer></div><script src=\"scripts/app.js\"></script><script>require('scripts/app');\n</script>  <script type=\"text/javascript\">\n    var _gauges = _gauges || [];\n    (function() {\n      var t   = document.createElement('script');\n      t.type  = 'text/javascript';\n      t.async = true;\n      t.id    = 'gauges-tracker';\n      t.setAttribute('data-site-id', '4f1631bbcb25bc723b000007');\n      t.src = '//secure.gaug.es/track.js';\n      var s = document.getElementsByTagName('script')[0];\n      s.parentNode.insertBefore(t, s);\n    })();\n  </script>\n</body></html>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;
//# sourceMappingURL=static.js.map