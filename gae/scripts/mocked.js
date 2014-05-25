!function(a,b,c){"use strict";function d(a){var b;if(b=a.match(j)){var c=new Date(0),d=0,f=0;return b[9]&&(d=e(b[9]+b[10]),f=e(b[9]+b[11])),c.setUTCFullYear(e(b[1]),e(b[2])-1,e(b[3])),c.setUTCHours(e(b[4]||0)-d,e(b[5]||0)-f,e(b[6]||0),e(b[7]||0)),c}return a}function e(a){return parseInt(a,10)}function f(a,b,c){var d="";for(0>a&&(d="-",a=-a),a=""+a;a.length<b;)a="0"+a;return c&&(a=a.substr(a.length-b)),d+a}function g(a,d,e){function f(a,c,d){return b.isFunction(a)?a:function(){return b.isNumber(a)?[a,c,d]:[200,a,c]}}function g(a,f,g,h,j,p,q){function r(a){return b.isString(a)||b.isFunction(a)||a instanceof RegExp?a:b.toJson(a)}function s(b){function d(){var c=b.response(a,f,g,j);t.$$respHeaders=c[2],h(o(c[0]),o(c[1]),t.getAllResponseHeaders())}function i(){for(var a=0,b=m.length;b>a;a++)if(m[a]===d){m.splice(a,1),h(-1,c,"");break}}return!e&&p&&p.then&&p.then(i),d}var t=new i,u=l[0],v=!1;if(u&&u.match(a,f)){if(!u.matchData(g))throw new Error("Expected "+u+" with different data\nEXPECTED: "+r(u.data)+"\nGOT:      "+g);if(!u.matchHeaders(j))throw new Error("Expected "+u+" with different headers\nEXPECTED: "+r(u.headers)+"\nGOT:      "+r(j));if(l.shift(),u.response)return void m.push(s(u));v=!0}for(var w,x=-1;w=k[++x];)if(w.match(a,f,g,j||{})){if(w.response)(e?e.defer:n)(s(w));else{if(!w.passThrough)throw new Error("No response defined !");d(a,f,g,h,j,p,q)}return}throw new Error(v?"No response defined !":"Unexpected request: "+a+" "+f+"\n"+(u?"Expected "+u:"No more request expected"))}function j(a){b.forEach(["GET","DELETE","JSONP"],function(b){g[a+b]=function(d,e){return g[a](b,d,c,e)}}),b.forEach(["PUT","POST","PATCH"],function(b){g[a+b]=function(c,d,e){return g[a](b,c,d,e)}})}var k=[],l=[],m=[],n=b.bind(m,m.push),o=b.copy;return g.when=function(a,b,c,d){var g=new h(a,b,c,d),i={respond:function(a,b,c){g.response=f(a,b,c)}};return e&&(i.passThrough=function(){g.passThrough=!0}),k.push(g),i},j("when"),g.expect=function(a,b,c,d){var e=new h(a,b,c,d);return l.push(e),{respond:function(a,b,c){e.response=f(a,b,c)}}},j("expect"),g.flush=function(c){if(a.$digest(),!m.length)throw new Error("No pending request to flush !");if(b.isDefined(c))for(;c--;){if(!m.length)throw new Error("No more pending request to flush !");m.shift()()}else for(;m.length;)m.shift()();g.verifyNoOutstandingExpectation()},g.verifyNoOutstandingExpectation=function(){if(a.$digest(),l.length)throw new Error("Unsatisfied requests: "+l.join(", "))},g.verifyNoOutstandingRequest=function(){if(m.length)throw new Error("Unflushed requests: "+m.length)},g.resetExpectations=function(){l.length=0,m.length=0},g}function h(a,c,d,e){this.data=d,this.headers=e,this.match=function(c,d,e,f){return a!=c?!1:this.matchUrl(d)?b.isDefined(e)&&!this.matchData(e)?!1:b.isDefined(f)&&!this.matchHeaders(f)?!1:!0:!1},this.matchUrl=function(a){return c?b.isFunction(c.test)?c.test(a):c==a:!0},this.matchHeaders=function(a){return b.isUndefined(e)?!0:b.isFunction(e)?e(a):b.equals(e,a)},this.matchData=function(a){return b.isUndefined(d)?!0:d&&b.isFunction(d.test)?d.test(a):d&&b.isFunction(d)?d(a):d&&!b.isString(d)?b.equals(d,b.fromJson(a)):d==a},this.toString=function(){return a+" "+c}}function i(){i.$$lastInstance=this,this.open=function(a,b,c){this.$$method=a,this.$$url=b,this.$$async=c,this.$$reqHeaders={},this.$$respHeaders={}},this.send=function(a){this.$$data=a},this.setRequestHeader=function(a,b){this.$$reqHeaders[a]=b},this.getResponseHeader=function(a){var d=this.$$respHeaders[a];return d?d:(a=b.lowercase(a),(d=this.$$respHeaders[a])?d:(d=c,b.forEach(this.$$respHeaders,function(c,e){d||b.lowercase(e)!=a||(d=c)}),d))},this.getAllResponseHeaders=function(){var a=[];return b.forEach(this.$$respHeaders,function(b,c){a.push(c+": "+b)}),a.join("\n")},this.abort=b.noop}b.mock={},b.mock.$BrowserProvider=function(){this.$get=function(){return new b.mock.$Browser}},b.mock.$Browser=function(){var a=this;this.isMock=!0,a.$$url="http://server/",a.$$lastUrl=a.$$url,a.pollFns=[],a.$$completeOutstandingRequest=b.noop,a.$$incOutstandingRequestCount=b.noop,a.onUrlChange=function(b){return a.pollFns.push(function(){a.$$lastUrl!=a.$$url&&(a.$$lastUrl=a.$$url,b(a.$$url))}),b},a.cookieHash={},a.lastCookieHash={},a.deferredFns=[],a.deferredNextId=0,a.defer=function(b,c){return c=c||0,a.deferredFns.push({time:a.defer.now+c,fn:b,id:a.deferredNextId}),a.deferredFns.sort(function(a,b){return a.time-b.time}),a.deferredNextId++},a.defer.now=0,a.defer.cancel=function(d){var e;return b.forEach(a.deferredFns,function(a,b){a.id===d&&(e=b)}),e!==c?(a.deferredFns.splice(e,1),!0):!1},a.defer.flush=function(c){if(b.isDefined(c))a.defer.now+=c;else{if(!a.deferredFns.length)throw new Error("No deferred tasks to be flushed");a.defer.now=a.deferredFns[a.deferredFns.length-1].time}for(;a.deferredFns.length&&a.deferredFns[0].time<=a.defer.now;)a.deferredFns.shift().fn()},a.$$baseHref="",a.baseHref=function(){return this.$$baseHref}},b.mock.$Browser.prototype={poll:function(){b.forEach(this.pollFns,function(a){a()})},addPollFn:function(a){return this.pollFns.push(a),a},url:function(a){return a?(this.$$url=a,this):this.$$url},cookies:function(a,c){return a?void(b.isUndefined(c)?delete this.cookieHash[a]:b.isString(c)&&c.length<=4096&&(this.cookieHash[a]=c)):(b.equals(this.cookieHash,this.lastCookieHash)||(this.lastCookieHash=b.copy(this.cookieHash),this.cookieHash=b.copy(this.cookieHash)),this.cookieHash)},notifyWhenNoOutstandingRequests:function(a){a()}},b.mock.$ExceptionHandlerProvider=function(){var a;this.mode=function(b){switch(b){case"rethrow":a=function(a){throw a};break;case"log":var c=[];a=function(a){c.push(1==arguments.length?a:[].slice.call(arguments,0))},a.errors=c;break;default:throw new Error("Unknown mode '"+b+"', only 'log'/'rethrow' modes are allowed!")}},this.$get=function(){return a},this.mode("rethrow")},b.mock.$LogProvider=function(){function a(a,b,c){return a.concat(Array.prototype.slice.call(b,c))}var c=!0;this.debugEnabled=function(a){return b.isDefined(a)?(c=a,this):c},this.$get=function(){var d={log:function(){d.log.logs.push(a([],arguments,0))},warn:function(){d.warn.logs.push(a([],arguments,0))},info:function(){d.info.logs.push(a([],arguments,0))},error:function(){d.error.logs.push(a([],arguments,0))},debug:function(){c&&d.debug.logs.push(a([],arguments,0))}};return d.reset=function(){d.log.logs=[],d.info.logs=[],d.warn.logs=[],d.error.logs=[],d.debug.logs=[]},d.assertEmpty=function(){var a=[];if(b.forEach(["error","warn","info","log","debug"],function(c){b.forEach(d[c].logs,function(d){b.forEach(d,function(b){a.push("MOCK $log ("+c+"): "+String(b)+"\n"+(b.stack||""))})})}),a.length)throw a.unshift("Expected $log to be empty! Either a message was logged unexpectedly, or an expected log message was not checked and removed:"),a.push(""),new Error(a.join("\n---------\n"))},d.reset(),d}},b.mock.$IntervalProvider=function(){this.$get=["$rootScope","$q",function(a,d){var e=[],f=0,g=0,h=function(h,i,j,k){function l(){if(m.notify(o++),j>0&&o>=j){var d;m.resolve(o),b.forEach(e,function(a,b){a.id===n.$$intervalId&&(d=b)}),d!==c&&e.splice(d,1)}p||a.$apply()}var m=d.defer(),n=m.promise,o=0,p=b.isDefined(k)&&!k;return j=b.isDefined(j)?j:0,n.then(null,null,h),n.$$intervalId=f,e.push({nextTime:g+i,delay:i,fn:l,id:f,deferred:m}),e.sort(function(a,b){return a.nextTime-b.nextTime}),f++,n};return h.cancel=function(a){var d;return b.forEach(e,function(b,c){b.id===a.$$intervalId&&(d=c)}),d!==c?(e[d].deferred.reject("canceled"),e.splice(d,1),!0):!1},h.flush=function(a){for(g+=a;e.length&&e[0].nextTime<=g;){var b=e[0];b.fn(),b.nextTime+=b.delay,e.sort(function(a,b){return a.nextTime-b.nextTime})}return a},h}]};var j=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?:\:?(\d\d)(?:\:?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;b.mock.TzDate=function(a,c){var e=new Date(0);if(b.isString(c)){var g=c;if(e.origDate=d(c),c=e.origDate.getTime(),isNaN(c))throw{name:"Illegal Argument",message:"Arg '"+g+"' passed into TzDate constructor is not a valid date string"}}else e.origDate=new Date(c);var h=new Date(c).getTimezoneOffset();e.offsetDiff=60*h*1e3-1e3*a*60*60,e.date=new Date(c+e.offsetDiff),e.getTime=function(){return e.date.getTime()-e.offsetDiff},e.toLocaleDateString=function(){return e.date.toLocaleDateString()},e.getFullYear=function(){return e.date.getFullYear()},e.getMonth=function(){return e.date.getMonth()},e.getDate=function(){return e.date.getDate()},e.getHours=function(){return e.date.getHours()},e.getMinutes=function(){return e.date.getMinutes()},e.getSeconds=function(){return e.date.getSeconds()},e.getMilliseconds=function(){return e.date.getMilliseconds()},e.getTimezoneOffset=function(){return 60*a},e.getUTCFullYear=function(){return e.origDate.getUTCFullYear()},e.getUTCMonth=function(){return e.origDate.getUTCMonth()},e.getUTCDate=function(){return e.origDate.getUTCDate()},e.getUTCHours=function(){return e.origDate.getUTCHours()},e.getUTCMinutes=function(){return e.origDate.getUTCMinutes()},e.getUTCSeconds=function(){return e.origDate.getUTCSeconds()},e.getUTCMilliseconds=function(){return e.origDate.getUTCMilliseconds()},e.getDay=function(){return e.date.getDay()},e.toISOString&&(e.toISOString=function(){return f(e.origDate.getUTCFullYear(),4)+"-"+f(e.origDate.getUTCMonth()+1,2)+"-"+f(e.origDate.getUTCDate(),2)+"T"+f(e.origDate.getUTCHours(),2)+":"+f(e.origDate.getUTCMinutes(),2)+":"+f(e.origDate.getUTCSeconds(),2)+"."+f(e.origDate.getUTCMilliseconds(),3)+"Z"});var i=["getUTCDay","getYear","setDate","setFullYear","setHours","setMilliseconds","setMinutes","setMonth","setSeconds","setTime","setUTCDate","setUTCFullYear","setUTCHours","setUTCMilliseconds","setUTCMinutes","setUTCMonth","setUTCSeconds","setYear","toDateString","toGMTString","toJSON","toLocaleFormat","toLocaleString","toLocaleTimeString","toSource","toString","toTimeString","toUTCString","valueOf"];return b.forEach(i,function(a){e[a]=function(){throw new Error("Method '"+a+"' is not implemented in the TzDate mock")}}),e},b.mock.TzDate.prototype=Date.prototype;var k;try{b.module("ngAnimate"),k=!0}catch(l){}if(k&&b.module("ngAnimate").config(["$provide",function(a){var c=[];a.value("$$animateReflow",function(a){return c.push(a),b.noop}),a.decorator("$animate",function(a){return a.triggerReflow=function(){if(0===c.length)throw new Error("No animation reflows present");b.forEach(c,function(a){a()}),c=[]},a})}]),b.mock.animate=b.module("mock.animate",["ng"]).config(["$provide",function(a){a.decorator("$animate",function(a){var c={queue:[],enabled:a.enabled,flushNext:function(a){var b=c.queue.shift();if(!b)throw new Error("No animation to be flushed");if(b.method!==a)throw new Error('The next animation is not "'+a+'", but is "'+b.method+'"');return b.fn(),b}};return b.forEach(["enter","leave","move","addClass","removeClass"],function(d){c[d]=function(){var e=arguments;c.queue.push({method:d,params:e,element:b.isElement(e[0])&&e[0],parent:b.isElement(e[1])&&e[1],after:b.isElement(e[2])&&e[2],fn:function(){a[d].apply(a,e)}})}}),c})}]),b.mock.dump=function(a){function c(a){var e;return b.isElement(a)?(a=b.element(a),e=b.element("<div></div>"),b.forEach(a,function(a){e.append(b.element(a).clone())}),e=e.html()):b.isArray(a)?(e=[],b.forEach(a,function(a){e.push(c(a))}),e="[ "+e.join(", ")+" ]"):e=b.isObject(a)?b.isFunction(a.$eval)&&b.isFunction(a.$apply)?d(a):a instanceof Error?a.stack||""+a.name+": "+a.message:b.toJson(a,!0):String(a),e}function d(a,c){c=c||"  ";var e=[c+"Scope("+a.$id+"): {"];for(var f in a)Object.prototype.hasOwnProperty.call(a,f)&&!f.match(/^(\$|this)/)&&e.push("  "+f+": "+b.toJson(a[f]));for(var g=a.$$childHead;g;)e.push(d(g,c+"  ")),g=g.$$nextSibling;return e.push("}"),e.join("\n"+c)}return c(a)},b.mock.$HttpBackendProvider=function(){this.$get=["$rootScope",g]},b.mock.$TimeoutDecorator=function(a,c){function d(a){var c=[];return b.forEach(a,function(a){c.push("{id: "+a.id+", time: "+a.time+"}")}),c.join(", ")}return a.flush=function(a){c.defer.flush(a)},a.verifyNoPendingTasks=function(){if(c.deferredFns.length)throw new Error("Deferred tasks to flush ("+c.deferredFns.length+"): "+d(c.deferredFns))},a},b.mock.$RootElementProvider=function(){this.$get=function(){return b.element("<div ng-app></div>")}},b.module("ngMock",["ng"]).provider({$browser:b.mock.$BrowserProvider,$exceptionHandler:b.mock.$ExceptionHandlerProvider,$log:b.mock.$LogProvider,$interval:b.mock.$IntervalProvider,$httpBackend:b.mock.$HttpBackendProvider,$rootElement:b.mock.$RootElementProvider}).config(["$provide",function(a){a.decorator("$timeout",b.mock.$TimeoutDecorator)}]),b.module("ngMockE2E",["ng"]).config(["$provide",function(a){a.decorator("$httpBackend",b.mock.e2e.$httpBackendDecorator)}]),b.mock.e2e={},b.mock.e2e.$httpBackendDecorator=["$rootScope","$delegate","$browser",g],b.mock.clearDataCache=function(){var a,c=b.element.cache;for(a in c)if(Object.prototype.hasOwnProperty.call(c,a)){var d=c[a].handle;d&&b.element(d.elem).off(),delete c[a]}},a.jasmine||a.mocha){var m=null,n=function(){return!!m};beforeEach(function(){m=this}),afterEach(function(){var a=m.$injector;m.$injector=null,m.$modules=null,m=null,a&&(a.get("$rootElement").off(),a.get("$browser").pollFns.length=0),b.mock.clearDataCache(),b.forEach(b.element.fragments,function(a,c){delete b.element.fragments[c]}),i.$$lastInstance=null,b.forEach(b.callbacks,function(a,c){delete b.callbacks[c]}),b.callbacks.counter=0}),a.module=b.mock.module=function(){function a(){if(m.$injector)throw new Error("Injector already created, can not register a module!");var a=m.$modules||(m.$modules=[]);b.forEach(c,function(c){a.push(b.isObject(c)&&!b.isArray(c)?function(a){b.forEach(c,function(b,c){a.value(c,b)})}:c)})}var c=Array.prototype.slice.call(arguments,0);return n()?a():a};var o=function(a,b){this.message=a.message,this.name=a.name,a.line&&(this.line=a.line),a.sourceId&&(this.sourceId=a.sourceId),a.stack&&b&&(this.stack=a.stack+"\n"+b.stack),a.stackArray&&(this.stackArray=a.stackArray)};o.prototype.toString=Error.prototype.toString,a.inject=b.mock.inject=function(){function a(){var a=m.$modules||[];a.unshift("ngMock"),a.unshift("ng");var e=m.$injector;e||(e=m.$injector=b.injector(a));for(var f=0,g=c.length;g>f;f++)try{e.invoke(c[f]||b.noop,this)}catch(h){if(h.stack&&d)throw new o(h,d);throw h}finally{d=null}}var c=Array.prototype.slice.call(arguments,0),d=new Error("Declaration Location");return n()?a():a}}}(window,window.angular);var app=angular.module("liftApp.mocked",["restangular","ngMockE2E","liftApp"]);app.constant("Config",{useMocks:!0,viewDir:"views/",fakeDelay:100}),app.constant("PATIENTS",{data:{patients:[{id:1,firstName:"Patient",lastName:"One",name:"Patient One",address:"Address of the user",dateOfBirth:new Date,gender:"male",phoneNumber:"12345678901",emailAddress:"patient1@somewhere.com",prescriptions:[{id:1,name:"Amoxicillin",type:"tablet",quantity:60,dose:1,schedule:[1,0,1],date:new Date},{id:2,name:"Doxycycline 100 mg",type:"capsule",quantity:60,dose:1,schedule:[0,0,1],date:new Date},{id:3,name:"Cycloproxyvon 100 mg",type:"capsule",quantity:60,dose:1,schedule:[1,1,1],date:new Date},{id:4,name:"Monitor Glucose",schedule:[1,0,1],type:"data",date:new Date,range:{start:80,end:500}},{id:5,name:"Monitor Temperature",schedule:[1,1,1],type:"data",date:new Date,range:{start:90,end:110}}]},{id:2,name:"Patient Two",firstName:"Patient",lastName:"Two",address:"Address of the user",dateOfBirth:new Date,gender:"female",phoneNumber:"12345678901",emailAddress:"patient2@somewhere.com"}]}}),app.run(["$httpBackend","API_BASE_URL","Config","PATIENTS",function(a,b,c,d){function e(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function f(a){var b=null;return angular.forEach(g.data.patients,function(c){c.id==a&&(b=c)}),b}var g=d;a.whenGET(new RegExp(e(c.viewDir))).passThrough(),a.whenGET("api/v1/patients").respond(function(){return[200,g.data]}),a.whenGET(/^api\/v1\/patients\/(\d+)/).respond(function(a,b){var c=/^api\/v1\/patients\/(\d+)/,d=c.exec(b),e=d[1],g=f(e);return[200,g]}),a.whenPOST("api/v1/patients").respond(function(a,b,c){console.log(""+c);var d=JSON.parse(c);return d.id=g.data.patients.length,console.log(d),g.data.patients.push(d),[200,c]}),a.whenPOST(/^api\/v1\/patients\/(\d+)\/medication/).respond(function(a,b,c){console.log(c);var d=/^api\/v1\/patients\/(\d+)\/medication/,e=d.exec(b),g=e[1],h=f(g),i=JSON.parse(c);return console.log(i),h&&(h.prescriptions=h.prescriptions||[],h.prescriptions.push(i)),[200,h]})}]),app.config(["$httpProvider","Config",function(a,b){b.useMocks&&a.interceptors.push(function(a,b,c,d){return{request:function(a){return d.log("Requesting "+a.url,a),a},response:function(d){var e=a.defer();return 0==d.config.url.indexOf(c.view_dir)?d:(b(function(){e.resolve(d)},c.fakeDelay),e.promise)}}})}]);