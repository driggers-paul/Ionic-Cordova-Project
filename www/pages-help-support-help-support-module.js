(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-help-support-help-support-module"],{

/***/ "./node_modules/@ionic/pro/dist/ionic-pro.module.min.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/pro/dist/ionic-pro.module.min.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(global,factory){ true?factory(exports):undefined})(this,function(exports){"use strict";var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p]};return extendStatics(d,b)};function __extends(d,b){extendStatics(d,b);function __(){this.constructor=d}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __)}function __awaiter(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value)}).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})}function __generator(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),throw:verb(1),return:verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break}if(t[2])_.ops.pop();_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e];y=0}finally{f=t=0}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true}}}var postJson=function(url,data){return new Promise(function(resolve,reject){var xmlhttp=new XMLHttpRequest;xmlhttp.open("POST",url);xmlhttp.setRequestHeader("Content-Type","application/json");xmlhttp.onreadystatechange=function(){if(this.readyState===4){if(this.status>=200&&this.status<400){var result=JSON.parse(xmlhttp.responseText);resolve(result)}else{try{reject({status:this.status,response:JSON.parse(this.responseText)})}catch(e){reject({status:this.status})}}}};xmlhttp.send(JSON.stringify(data))})};var getJson=function(url){return new Promise(function(resolve,reject){var xmlhttp=new XMLHttpRequest;xmlhttp.open("GET",url);xmlhttp.onreadystatechange=function(){if(this.readyState===4){if(this.status===200){var result=JSON.parse(xmlhttp.responseText);resolve(result)}else{try{reject({status:this.status,response:JSON.parse(this.responseText)})}catch(e){reject({status:this.status})}}}};xmlhttp.send()})};var Api=function(){function Api(url){this.url=url}Api.prototype.post=function(endpoint,data){return postJson(this.url+endpoint,data)};return Api}();var checkIfAngular1=function(app){if(window.angular){window.angular.module("ionic").config(["$provide",function($provide){$provide.decorator("$exceptionHandler",["$delegate",function($delegate){return function(exception,cause){$delegate(exception,cause);exception.message=exception.stack;app.monitoring.handleNewError(exception)}}])}])}};var MonitoringCapture=function(){function MonitoringCapture(fields){for(var i in fields){this[i]=fields[i]}}return MonitoringCapture}();var MonitoringLog=function(_super){__extends(MonitoringLog,_super);function MonitoringLog(msg,options,error,extra){if(options===void 0){options={level:"error"}}if(extra===void 0){extra={}}return _super.call(this,{type:"log",message:msg,level:options.level,stack:error.stack,extra:extra})||this}return MonitoringLog}(MonitoringCapture);var MonitoringException=function(_super){__extends(MonitoringException,_super);function MonitoringException(error,extra){if(extra===void 0){extra={}}var _this=_super.call(this,{type:"exception",message:error.message,name:error.name,stack:error.stack,extra:extra})||this;_this.clean(error);return _this}MonitoringException.prototype.clean=function(err){if(err.url||err.headers){err.isHttp=true}err.timestamp=new Date;var aParser=document.createElement("a");var stack=err.stack;for(var _i=0,stack_1=stack;_i<stack_1.length;_i++){var frame=stack_1[_i];this.cleanOffendingFile(aParser,frame);if(!this.isFrameInApp(frame)){frame.in_app=false;frame.context=null;delete frame.context}else{frame.in_app=true}}return err};MonitoringException.prototype.cleanOffendingFile=function(a,frame){var url=frame.url;a.href=url;var path=a.pathname;var fileEnding=path.lastIndexOf("/");var file=path.substr(fileEnding+1);frame.url=file};MonitoringException.prototype.isFrameInApp=function(frame){var not_app_files=["vendor.js","polyfills.js"];var foundFiles=not_app_files.filter(function(file){return frame.url.indexOf(file)>=0});return foundFiles.length===0};return MonitoringException}(MonitoringCapture);var commonjsGlobal=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};function createCommonjsModule(fn,module){return module={exports:{}},fn(module,module.exports),module.exports}var tracekit$1=createCommonjsModule(function(module){(function(window,undefined){if(!window){return}var TraceKit={};var _oldTraceKit=window.TraceKit;var _slice=[].slice;var UNKNOWN_FUNCTION="?";var ERROR_TYPES_RE=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;function _has(object,key){return Object.prototype.hasOwnProperty.call(object,key)}function _isUndefined(what){return typeof what==="undefined"}TraceKit.noConflict=function noConflict(){window.TraceKit=_oldTraceKit;return TraceKit};TraceKit.wrap=function traceKitWrapper(func){function wrapped(){try{return func.apply(this,arguments)}catch(e){TraceKit.report(e);throw e}}return wrapped};TraceKit.report=function reportModuleWrapper(){var handlers=[],lastException=null,lastExceptionStack=null;function subscribe(handler){installGlobalHandler();handlers.push(handler)}function unsubscribe(handler){for(var i=handlers.length-1;i>=0;--i){if(handlers[i]===handler){handlers.splice(i,1)}}if(handlers.length===0){window.onerror=_oldOnerrorHandler;_onErrorHandlerInstalled=false}}function notifyHandlers(stack,isWindowError,error){var exception=null;if(isWindowError&&!TraceKit.collectWindowErrors){return}for(var i in handlers){if(_has(handlers,i)){try{handlers[i](stack,isWindowError,error)}catch(inner){exception=inner}}}if(exception){throw exception}}var _oldOnerrorHandler,_onErrorHandlerInstalled;function traceKitWindowOnError(message,url,lineNo,columnNo,errorObj){var stack=null;if(lastExceptionStack){TraceKit.computeStackTrace.augmentStackTraceWithInitialElement(lastExceptionStack,url,lineNo,message);processLastException()}else if(errorObj){stack=TraceKit.computeStackTrace(errorObj);notifyHandlers(stack,true,errorObj)}else{var location={url:url,line:lineNo,column:columnNo};var name;var msg=message;if({}.toString.call(message)==="[object String]"){var groups=message.match(ERROR_TYPES_RE);if(groups){name=groups[1];msg=groups[2]}}location.func=TraceKit.computeStackTrace.guessFunctionName(location.url,location.line);location.context=TraceKit.computeStackTrace.gatherContext(location.url,location.line);stack={name:name,message:msg,mode:"onerror",stack:[location]};notifyHandlers(stack,true,null)}if(_oldOnerrorHandler){return _oldOnerrorHandler.apply(this,arguments)}return false}function installGlobalHandler(){if(_onErrorHandlerInstalled===true){return}_oldOnerrorHandler=window.onerror;window.onerror=traceKitWindowOnError;_onErrorHandlerInstalled=true}function processLastException(){var _lastExceptionStack=lastExceptionStack,_lastException=lastException;lastExceptionStack=null;lastException=null;notifyHandlers(_lastExceptionStack,false,_lastException)}function report(ex){if(lastExceptionStack){if(lastException===ex){return}else{processLastException()}}var stack=TraceKit.computeStackTrace(ex);lastExceptionStack=stack;lastException=ex;setTimeout(function(){if(lastException===ex){processLastException()}},stack.incomplete?2e3:0);throw ex}report.subscribe=subscribe;report.unsubscribe=unsubscribe;return report}();TraceKit.computeStackTrace=function computeStackTraceWrapper(){var debug=false,sourceCache={};function loadSource(url){if(!TraceKit.remoteFetching){return""}try{var getXHR=function(){try{return new window.XMLHttpRequest}catch(e){return new window.ActiveXObject("Microsoft.XMLHTTP")}};var request=getXHR();request.open("GET",url,false);request.send("");return request.responseText}catch(e){return""}}function getSource(url){if(typeof url!=="string"){return[]}if(!_has(sourceCache,url)){var source="";var domain="";try{domain=window.document.domain}catch(e){}var match=/(.*)\:\/\/([^:\/]+)([:\d]*)\/{0,1}([\s\S]*)/.exec(url);if(match&&match[2]===domain){source=loadSource(url)}sourceCache[url]=source?source.split("\n"):[]}return sourceCache[url]}function guessFunctionName(url,lineNo){var reFunctionArgNames=/function ([^(]*)\(([^)]*)\)/,reGuessFunction=/['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,line="",maxLines=10,source=getSource(url),m;if(!source.length){return UNKNOWN_FUNCTION}for(var i=0;i<maxLines;++i){line=source[lineNo-i]+line;if(!_isUndefined(line)){if(m=reGuessFunction.exec(line)){return m[1]}else if(m=reFunctionArgNames.exec(line)){return m[1]}}}return UNKNOWN_FUNCTION}function gatherContext(url,line){var source=getSource(url);if(!source.length){return null}var context=[],linesBefore=Math.floor(TraceKit.linesOfContext/2),linesAfter=linesBefore+TraceKit.linesOfContext%2,start=Math.max(0,line-linesBefore-1),end=Math.min(source.length,line+linesAfter-1);line-=1;for(var i=start;i<end;++i){if(!_isUndefined(source[i])){context.push(source[i])}}return context.length>0?context:null}function escapeRegExp(text){return text.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g,"\\$&")}function escapeCodeAsRegExpForMatchingInsideHTML(body){return escapeRegExp(body).replace("<","(?:<|&lt;)").replace(">","(?:>|&gt;)").replace("&","(?:&|&amp;)").replace('"','(?:"|&quot;)').replace(/\s+/g,"\\s+")}function findSourceInUrls(re,urls){var source,m;for(var i=0,j=urls.length;i<j;++i){if((source=getSource(urls[i])).length){source=source.join("\n");if(m=re.exec(source)){return{url:urls[i],line:source.substring(0,m.index).split("\n").length,column:m.index-source.lastIndexOf("\n",m.index)-1}}}}return null}function findSourceInLine(fragment,url,line){var source=getSource(url),re=new RegExp("\\b"+escapeRegExp(fragment)+"\\b"),m;line-=1;if(source&&source.length>line&&(m=re.exec(source[line]))){return m.index}return null}function findSourceByFunctionBody(func){if(_isUndefined(window&&window.document)){return}var urls=[window.location.href],scripts=window.document.getElementsByTagName("script"),body,code=""+func,codeRE=/^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,eventRE=/^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,re,parts,result;for(var i=0;i<scripts.length;++i){var script=scripts[i];if(script.src){urls.push(script.src)}}if(!(parts=codeRE.exec(code))){re=new RegExp(escapeRegExp(code).replace(/\s+/g,"\\s+"))}else{var name=parts[1]?"\\s+"+parts[1]:"",args=parts[2].split(",").join("\\s*,\\s*");body=escapeRegExp(parts[3]).replace(/;$/,";?");re=new RegExp("function"+name+"\\s*\\(\\s*"+args+"\\s*\\)\\s*{\\s*"+body+"\\s*}")}if(result=findSourceInUrls(re,urls)){return result}if(parts=eventRE.exec(code)){var event=parts[1];body=escapeCodeAsRegExpForMatchingInsideHTML(parts[2]);re=new RegExp("on"+event+"=[\\'\"]\\s*"+body+"\\s*[\\'\"]","i");if(result=findSourceInUrls(re,urls[0])){return result}re=new RegExp(body);if(result=findSourceInUrls(re,urls)){return result}}return null}function computeStackTraceFromStackProp(ex){if(!ex.stack){return null}var chrome=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,gecko=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,winjs=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,isEval,geckoEval=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,chromeEval=/\((\S*)(?::(\d+))(?::(\d+))\)/,lines=ex.stack.split("\n"),stack=[],submatch,parts,element,reference=/^(.*) is undefined$/.exec(ex.message);for(var i=0,j=lines.length;i<j;++i){if(parts=chrome.exec(lines[i])){var isNative=parts[2]&&parts[2].indexOf("native")===0;isEval=parts[2]&&parts[2].indexOf("eval")===0;if(isEval&&(submatch=chromeEval.exec(parts[2]))){parts[2]=submatch[1];parts[3]=submatch[2];parts[4]=submatch[3]}element={url:!isNative?parts[2]:null,func:parts[1]||UNKNOWN_FUNCTION,args:isNative?[parts[2]]:[],line:parts[3]?+parts[3]:null,column:parts[4]?+parts[4]:null}}else if(parts=winjs.exec(lines[i])){element={url:parts[2],func:parts[1]||UNKNOWN_FUNCTION,args:[],line:+parts[3],column:parts[4]?+parts[4]:null}}else if(parts=gecko.exec(lines[i])){isEval=parts[3]&&parts[3].indexOf(" > eval")>-1;if(isEval&&(submatch=geckoEval.exec(parts[3]))){parts[3]=submatch[1];parts[4]=submatch[2];parts[5]=null}else if(i===0&&!parts[5]&&!_isUndefined(ex.columnNumber)){stack[0].column=ex.columnNumber+1}element={url:parts[3],func:parts[1]||UNKNOWN_FUNCTION,args:parts[2]?parts[2].split(","):[],line:parts[4]?+parts[4]:null,column:parts[5]?+parts[5]:null}}else{continue}if(!element.func&&element.line){element.func=guessFunctionName(element.url,element.line)}element.context=element.line?gatherContext(element.url,element.line):null;stack.push(element)}if(!stack.length){return null}if(stack[0]&&stack[0].line&&!stack[0].column&&reference){stack[0].column=findSourceInLine(reference[1],stack[0].url,stack[0].line)}return{mode:"stack",name:ex.name,message:ex.message,stack:stack}}function computeStackTraceFromStacktraceProp(ex){var stacktrace=ex.stacktrace;if(!stacktrace){return}var opera10Regex=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,opera11Regex=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,lines=stacktrace.split("\n"),stack=[],parts;for(var line=0;line<lines.length;line+=2){var element=null;if(parts=opera10Regex.exec(lines[line])){element={url:parts[2],line:+parts[1],column:null,func:parts[3],args:[]}}else if(parts=opera11Regex.exec(lines[line])){element={url:parts[6],line:+parts[1],column:+parts[2],func:parts[3]||parts[4],args:parts[5]?parts[5].split(","):[]}}if(element){if(!element.func&&element.line){element.func=guessFunctionName(element.url,element.line)}if(element.line){try{element.context=gatherContext(element.url,element.line)}catch(exc){}}if(!element.context){element.context=[lines[line+1]]}stack.push(element)}}if(!stack.length){return null}return{mode:"stacktrace",name:ex.name,message:ex.message,stack:stack}}function computeStackTraceFromOperaMultiLineMessage(ex){var lines=ex.message.split("\n");if(lines.length<4){return null}var lineRE1=/^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,lineRE2=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,lineRE3=/^\s*Line (\d+) of function script\s*$/i,stack=[],scripts=window&&window.document&&window.document.getElementsByTagName("script"),inlineScriptBlocks=[],parts;for(var s in scripts){if(_has(scripts,s)&&!scripts[s].src){inlineScriptBlocks.push(scripts[s])}}for(var line=2;line<lines.length;line+=2){var item=null;if(parts=lineRE1.exec(lines[line])){item={url:parts[2],func:parts[3],args:[],line:+parts[1],column:null}}else if(parts=lineRE2.exec(lines[line])){item={url:parts[3],func:parts[4],args:[],line:+parts[1],column:null};var relativeLine=+parts[1];var script=inlineScriptBlocks[parts[2]-1];if(script){var source=getSource(item.url);if(source){source=source.join("\n");var pos=source.indexOf(script.innerText);if(pos>=0){item.line=relativeLine+source.substring(0,pos).split("\n").length}}}}else if(parts=lineRE3.exec(lines[line])){var url=window.location.href.replace(/#.*$/,"");var re=new RegExp(escapeCodeAsRegExpForMatchingInsideHTML(lines[line+1]));var src=findSourceInUrls(re,[url]);item={url:url,func:"",args:[],line:src?src.line:parts[1],column:null}}if(item){if(!item.func){item.func=guessFunctionName(item.url,item.line)}var context=gatherContext(item.url,item.line);var midline=context?context[Math.floor(context.length/2)]:null;if(context&&midline.replace(/^\s*/,"")===lines[line+1].replace(/^\s*/,"")){item.context=context}else{item.context=[lines[line+1]]}stack.push(item)}}if(!stack.length){return null}return{mode:"multiline",name:ex.name,message:lines[0],stack:stack}}function augmentStackTraceWithInitialElement(stackInfo,url,lineNo,message){var initial={url:url,line:lineNo};if(initial.url&&initial.line){stackInfo.incomplete=false;if(!initial.func){initial.func=guessFunctionName(initial.url,initial.line)}if(!initial.context){initial.context=gatherContext(initial.url,initial.line)}var reference=/ '([^']+)' /.exec(message);if(reference){initial.column=findSourceInLine(reference[1],initial.url,initial.line)}if(stackInfo.stack.length>0){if(stackInfo.stack[0].url===initial.url){if(stackInfo.stack[0].line===initial.line){return false}else if(!stackInfo.stack[0].line&&stackInfo.stack[0].func===initial.func){stackInfo.stack[0].line=initial.line;stackInfo.stack[0].context=initial.context;return false}}}stackInfo.stack.unshift(initial);stackInfo.partial=true;return true}else{stackInfo.incomplete=true}return false}function computeStackTraceByWalkingCallerChain(ex,depth){var functionName=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,stack=[],funcs={},recursion=false,parts,item,source;for(var curr=computeStackTraceByWalkingCallerChain.caller;curr&&!recursion;curr=curr.caller){if(curr===computeStackTrace||curr===TraceKit.report){continue}item={url:null,func:UNKNOWN_FUNCTION,args:[],line:null,column:null};if(curr.name){item.func=curr.name}else if(parts=functionName.exec(curr.toString())){item.func=parts[1]}if(typeof item.func==="undefined"){try{item.func=parts.input.substring(0,parts.input.indexOf("{"))}catch(e){}}if(source=findSourceByFunctionBody(curr)){item.url=source.url;item.line=source.line;if(item.func===UNKNOWN_FUNCTION){item.func=guessFunctionName(item.url,item.line)}var reference=/ '([^']+)' /.exec(ex.message||ex.description);if(reference){item.column=findSourceInLine(reference[1],source.url,source.line)}}if(funcs[""+curr]){recursion=true}else{funcs[""+curr]=true}stack.push(item)}if(depth){stack.splice(0,depth)}var result={mode:"callers",name:ex.name,message:ex.message,stack:stack};augmentStackTraceWithInitialElement(result,ex.sourceURL||ex.fileName,ex.line||ex.lineNumber,ex.message||ex.description);return result}function computeStackTrace(ex,depth){var stack=null;depth=depth==null?0:+depth;try{stack=computeStackTraceFromStacktraceProp(ex);if(stack){return stack}}catch(e){if(debug){throw e}}try{stack=computeStackTraceFromStackProp(ex);if(stack){return stack}}catch(e){if(debug){throw e}}try{stack=computeStackTraceFromOperaMultiLineMessage(ex);if(stack){return stack}}catch(e){if(debug){throw e}}try{stack=computeStackTraceByWalkingCallerChain(ex,depth+1);if(stack){return stack}}catch(e){if(debug){throw e}}return{name:ex.name,message:ex.message,mode:"failed"}}function computeStackTraceOfCaller(depth){depth=(depth==null?0:+depth)+1;try{throw new Error}catch(ex){return computeStackTrace(ex,depth+1)}}computeStackTrace.augmentStackTraceWithInitialElement=augmentStackTraceWithInitialElement;computeStackTrace.computeStackTraceFromStackProp=computeStackTraceFromStackProp;computeStackTrace.guessFunctionName=guessFunctionName;computeStackTrace.gatherContext=gatherContext;computeStackTrace.ofCaller=computeStackTraceOfCaller;computeStackTrace.getSource=getSource;return computeStackTrace}();TraceKit.extendToAsynchronousCallbacks=function(){var _helper=function _helper(fnName){var originalFn=window[fnName];window[fnName]=function traceKitAsyncExtension(){var args=_slice.call(arguments);var originalCallback=args[0];if(typeof originalCallback==="function"){args[0]=TraceKit.wrap(originalCallback)}if(originalFn.apply){return originalFn.apply(this,args)}else{return originalFn(args[0],args[1])}}};_helper("setTimeout");_helper("setInterval")};if(!TraceKit.remoteFetching){TraceKit.remoteFetching=false}if(!TraceKit.collectWindowErrors){TraceKit.collectWindowErrors=true}if(!TraceKit.linesOfContext||TraceKit.linesOfContext<1){TraceKit.linesOfContext=11}if(typeof undefined==="function"&&undefined.amd){undefined("TraceKit",[],TraceKit)}else if( true&&module.exports&&window.module!==module){module.exports=TraceKit}else{window.TraceKit=TraceKit}})(typeof window!=="undefined"?window:commonjsGlobal)});var tracekit_1=tracekit$1.report;var tracekit_2=tracekit$1.computeStackTrace;var isError=function(value){var strVal={}.toString.call(value);switch(strVal){case"[object Error]":return true;case"[object Exception]":return true;case"[object DOMException]":return true;default:return value instanceof Error}};var Monitoring=function(){function Monitoring(app){var _this=this;this.app=app;this.queue=[];this.framework=app.getFramework();this.appId=app.appId;tracekit_1.subscribe(function(errorReport){if(typeof errorReport.message!=="string"){return}var error=new MonitoringException(errorReport);_this.handleCapture(error)});this.initPromise=this.init()}Monitoring.prototype.init=function(){return __awaiter(this,void 0,void 0,function(){var deviceInfo,e_1;return __generator(this,function(_a){switch(_a.label){case 0:_a.trys.push([0,2,,3]);return[4,this.app.device.loadDeviceInfo()];case 1:deviceInfo=_a.sent();return[3,3];case 2:e_1=_a.sent();console.error("Error loading device information. Continuing with basic data",e_1);return[3,3];case 3:return[2]}})})};Monitoring.prototype.handleNewError=function(err,extra){if(!isError(err)){return this.log(err,{level:"error",syntheticTrace:true},extra)}var stack=tracekit_2(err);var error=new MonitoringException(stack,extra);this.handleCapture(error)};Monitoring.prototype.wrap=function(fn,extra){var _this=this;return function(){return _this.call(fn,extra)}};Monitoring.prototype.call=function(fn,extra){try{return fn.apply(this,arguments)}catch(e){this.handleNewError(e,extra);throw e}};Monitoring.prototype.log=function(msg,options,extra){var ex;try{throw new Error(msg)}catch(e){ex=e}var newStack=tracekit_2(ex);var log=new MonitoringLog(msg,options,newStack,extra);this.handleCapture(log)};Monitoring.prototype.exception=function(err,extra){this.handleNewError(err,extra)};Monitoring.prototype.handleCapture=function(err){var _this=this;if(!err){return}this.initPromise.then(function(){_this.queue.push(err);if(!_this.timerId){_this.timerId=setTimeout(function(){_this.drainQueue()},_this.app.options.monitoringSyncFrequency)}})};Monitoring.prototype.drainQueue=function(){return __awaiter(this,void 0,void 0,function(){var manifest,payload,_a,_b;var _this=this;return __generator(this,function(_c){switch(_c.label){case 0:clearTimeout(this.timerId);this.timerId=null;manifest=this.app.manifest.data&&this.app.manifest.data.ionic||{};_a={app_id:this.appId,framework:this.framework,device:this.app.device.getInfo()};_b={version:manifest.app_version};return[4,this.app.getSnapshotId()];case 1:_b.snapshot_id=_c.sent()||manifest.snapshot_id;return[4,this.app.getChannel()];case 2:payload=(_a.pro=(_b.channel=_c.sent()||manifest.channel,_b.ts=+new Date,_b),_a.errors=this.queue.slice(),_a);this.app.api.post("/monitoring/"+this.app.appId+"/exceptions",payload).catch(function(err){console.error("Unable to send exception to server",err);if(err.response&&err.response.error==="no_such_app"){console.warn("No such app with App ID "+_this.app.appId+". Verify the App ID matches an app on Ionic Pro")}});this.queue.length=0;return[2]}})})};return Monitoring}();var AppManifest=function(){function AppManifest(){}AppManifest.prototype.saveManifest=function(data){this.data=data};AppManifest.prototype.load=function(){var _this=this;var path="manifest.json";if(this.data){return Promise.resolve(this.data)}return new Promise(function(resolve,reject){return getJson(path).then(function(data){_this.saveManifest(data);return resolve(_this.data)},function(err){console.error("Unable to parse manifest.json. Ensure the file is valid JSON");console.error(err);return reject(err)})})};return AppManifest}();var assign=function(target){var objs=[];for(var _i=1;_i<arguments.length;_i++){objs[_i-1]=arguments[_i]}var to=Object(target);for(var _a=0,objs_1=objs;_a<objs_1.length;_a++){var nextSource=objs_1[_a];if(nextSource!=null){for(var nextKey in nextSource){if(Object.prototype.hasOwnProperty.call(nextSource,nextKey)){to[nextKey]=nextSource[nextKey]}}}}return to};var Device=function(){function Device(app){this.app=app;this.deviceInfo={};this.app=app;this.codeVersion=app.version}Device.prototype.getInfo=function(){return this.deviceInfo};Device.prototype.loadDeviceInfo=function(){return __awaiter(this,void 0,void 0,function(){var _this=this;return __generator(this,function(_a){return[2,new Promise(function(resolve,reject){setTimeout(function(){if(window.cordova){document.addEventListener("deviceready",function(){_this.queryDeviceInfo().then(function(info){_this.deviceInfo=info;resolve(info)})})}else{var finishLoad=function(){_this.queryDeviceInfo().then(function(info){_this.deviceInfo=info;resolve(info)})};if(document.readyState==="complete"){finishLoad()}else{window.addEventListener("load",finishLoad.bind(_this))}}},20)})]})})};Device.prototype.tryGetOS=function(){var userAgent=navigator.userAgent||navigator.vendor||window.opera;if(/windows phone/i.test(userAgent)){return"wp"}if(/android/i.test(userAgent)){return"android"}if(/iPad|iPhone|iPod/.test(userAgent)&&!window.MSStream){return"ios"}return"desktop"};Device.prototype.getBrowserInfo=function(){var n=window.navigator;return{browserMobileOS:this.tryGetOS(),browserProduct:n.product,browserAppVersion:n.appVersion,browserUserAgent:n.userAgent,browserPlatform:n.platform,browserLanguage:n.language,browserAppName:n.appName,browserAppCodeName:n.appCodeName,viewportWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),viewportHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),utcOffset:-((new Date).getTimezoneOffset()/60)}};Device.prototype.queryDeviceInfo=function(){var _this=this;var codeVersion=this.codeVersion;return new Promise(function(resolve,reject){var info={version:codeVersion,proClientVersion:"2.0.4"};var d=window.device;if(d){assign(info,{model:d.model,platform:d.platform,uuid:d.uuid,osVersion:d.version,serial:d.serial,manufacturer:d.manufacturer,isNative:true})}assign(info,_this.getBrowserInfo());if(!window.IonicCordova){console.error("the cordova-plugin-ionic plugin is not installed. Install it for better device information for runtime errors.");return resolve(info)}window.IonicCordova.getAppInfo(function(appInfo){appInfo["nativeVersion"]=appInfo.version;delete appInfo["version"];var newInfo=assign(info,appInfo);resolve(newInfo)},function(err){reject(err)})})};return Device}();var uuidv4=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(c){var r=Math.random()*16|0,v=c==="x"?r:r&3|8;return v.toString(16)})};var DEFAULT_OPTIONS={apiUrl:"https://api.ionicjs.com",pluginResolveTimeout:1e3,monitoringSyncFrequency:2e3};var Pro=function(){function Pro(appId,customOptions){if(customOptions===void 0){customOptions={}}var _this=this;this.appId=appId;this.options=DEFAULT_OPTIONS;this.deviceInfo={};console.log("Ionic Pro initializing (app id: %c"+this.appId+"%c)","color: blue","color: black");this.options=assign.apply(void 0,[{}].concat(this.options,[customOptions]));this.version=this.options.appVersion;this.platformReadyPromise=this.watchPlatformReady();this.device=new Device(this);this.api=new Api(this.options.apiUrl);var uid=this.createUid();this.uid=uid;this._monitoring=new Monitoring(this);this.manifest=new AppManifest;this.manifest.load();this._deployProxy={get:function(target,property){return function(){var args=[];for(var _i=0;_i<arguments.length;_i++){args[_i]=arguments[_i]}return __awaiter(_this,void 0,void 0,function(){return __generator(this,function(_a){console.warn("IonicCordova is not available."+"Enabling debug mode and proxying requests to avoid errors.");console.warn.apply(console,[property.toString()+" called with arguments"].concat(args));return[2]})})}}}}Pro.init=function(appId,options){if(options===void 0){options={}}var pro=new Pro(appId,options);checkIfAngular1(pro);Pro._instance=pro;return pro};Pro.getApp=function(){return this._instance};Object.defineProperty(Pro.prototype,"monitoring",{get:function(){return this._monitoring},enumerable:true,configurable:true});Object.defineProperty(Pro.prototype,"deploy",{get:function(){return window.IonicCordova&&window.IonicCordova.deploy||new Proxy({},this._deployProxy)},enumerable:true,configurable:true});Object.defineProperty(Pro,"monitoring",{get:function(){return this.getApp()._monitoring},enumerable:true,configurable:true});Object.defineProperty(Pro,"deploy",{get:function(){return window.IonicCordova&&window.IonicCordova.deploy||new Proxy({},Pro._instance._deployProxy)},enumerable:true,configurable:true});Pro.prototype.getFramework=function(){return window.angular?"angular1":"angular2"};Pro.prototype.getAppId=function(){return this.appId};Pro.prototype.getPlugin=function(){return this.platformReady().then(function(platformInfo){if(platformInfo.system==="cordova"){if(window.IonicCordova){return Promise.resolve(window.IonicCordova)}else{return Promise.reject("cordova-plugin-ionic not found")}}else{console.warn("cordova-plugin-ionic not available outside of the cordova platform.");return Promise.resolve(undefined)}})};Pro.prototype.platformReady=function(){if(this.platformReadyInfo&&this.platformReadyInfo.ready===true){return Promise.resolve(this.platformReadyInfo)}return this.platformReadyPromise};Pro.prototype.getSnapshotId=function(){return __awaiter(this,void 0,void 0,function(){var currentVersion;return __generator(this,function(_a){switch(_a.label){case 0:if(!window.IonicCordova){return[2,""]}return[4,this.deploy.getCurrentVersion()];case 1:currentVersion=_a.sent();if(currentVersion){return[2,currentVersion.versionId]}return[2]}})})};Pro.prototype.getChannel=function(){return __awaiter(this,void 0,void 0,function(){var config;return __generator(this,function(_a){switch(_a.label){case 0:if(!window.IonicCordova){return[2,""]}return[4,this.deploy.getConfiguration()];case 1:config=_a.sent();return[2,config.channel]}})})};Pro.prototype.createUid=function(){if(!window.localStorage){return"FAKE_ID"}var uid=window.localStorage.getItem("_iouid");if(!uid){uid=uuidv4();window.localStorage.setItem("_iouid",uid)}return uid};Pro.prototype.watchPlatformReady=function(){var _this=this;return new Promise(function(resolve,reject){if(window.cordova){document.addEventListener("deviceready",function(){_this.platformReadyInfo={ready:true,system:"cordova"};resolve(_this.platformReadyInfo)})}else{window.addEventListener("load",function(){_this.platformReadyInfo={ready:true,system:"web"}})}})};return Pro}();window.Pro=Pro;exports.Pro=Pro;Object.defineProperty(exports,"__esModule",{value:true})});

/***/ }),

/***/ "./src/app/pages/help-support/help-support.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/help-support/help-support.module.ts ***!
  \***********************************************************/
/*! exports provided: HelpSupportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpSupportPageModule", function() { return HelpSupportPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _help_support_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./help-support.page */ "./src/app/pages/help-support/help-support.page.ts");
/* harmony import */ var _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/side-menu/side-menu.module */ "./src/app/components/side-menu/side-menu.module.ts");
/* harmony import */ var _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-purchase-2/ngx */ "./node_modules/@ionic-native/in-app-purchase-2/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _help_support_page__WEBPACK_IMPORTED_MODULE_5__["HelpSupportPage"]
    }
];
var HelpSupportPageModule = /** @class */ (function () {
    function HelpSupportPageModule() {
    }
    HelpSupportPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_side_menu_side_menu_module__WEBPACK_IMPORTED_MODULE_6__["SideMenuModule"]
            ],
            declarations: [_help_support_page__WEBPACK_IMPORTED_MODULE_5__["HelpSupportPage"]],
            providers: [
                _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppPurchase2"],
                _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]
            ]
        })
    ], HelpSupportPageModule);
    return HelpSupportPageModule;
}());



/***/ }),

/***/ "./src/app/pages/help-support/help-support.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/help-support/help-support.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <app-menu-button></app-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Help & Support</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list>\r\n        <ion-list-header>Common Questions</ion-list-header>\r\n        <ion-item lines=\"none\">\r\n            Need help managing your subscription? Have questions about functionality or app features?<br/>\r\n            Your question has probably already been answered! Check the Help Guide for more information.\r\n        </ion-item>\r\n        <div padding>\r\n        <ion-button type=\"button\" color=\"primary\" size=\"large\" fill=\"outline\" expand=\"full\" (click)=\"viewSupportPage()\">\r\n            View Help Guide\r\n        </ion-button>\r\n        </div>\r\n        <ion-item lines=\"none\" text-center><p class=\"small-warn\">Please note that we cannot cancel or manage Premium Subscriptions. Please refer to the help guide for more information.</p></ion-item>\r\n        <ion-list-header>Contact Support</ion-list-header>\r\n        <ion-item lines=\"none\">\r\n            If you are still having problems after reviewing the above, or if you have other feedback, please use the link below to email us.\r\n        </ion-item>\r\n        <div class=\"global-input global-margin-top-25\">\r\n            <ion-button type=\"button\" color=\"tertiary\" fill=\"outline\" expand=\"full\" [href]=\"emailHref\">Email support</ion-button>\r\n        </div>\r\n        <ion-list-header>App Information</ion-list-header>\r\n        <ion-item>\r\n            <ion-label>App version</ion-label>\r\n            <ion-note slot=\"end\">{{ appVersion || 'n/a' }}</ion-note>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Build version</ion-label>\r\n            <ion-note slot=\"end\">{{ buildVersion || 'n/a' }}</ion-note>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Deploy version</ion-label>\r\n            <ion-note slot=\"end\">{{ ionicVersion || 'n/a' }}</ion-note>\r\n        </ion-item>\r\n        <ion-list-header>Advanced</ion-list-header>\r\n        <ion-item text-center>\r\n            <ion-button expand=\"fill\" color=\"secondary\" (click)=\"checkPremiumSubscription()\">Refresh\r\n                Premium Status\r\n            </ion-button>\r\n        </ion-item>\r\n        <ion-item text-center>\r\n            <ion-button expand=\"fill\" color=\"secondary\" (click)=\"clearCaches()\">\r\n                Clear Caches\r\n            </ion-button>\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/help-support/help-support.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/help-support/help-support.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.small-warn {\n  line-height: 1.25em;\n  font-size: 12px;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVscC1zdXBwb3J0L0U6XFxpb25pY1xcVmVydmVDb21tZXJjZVxcTmV3RGV2XFxtdHN0LWFwcC9zcmNcXGFwcFxccGFnZXNcXGhlbHAtc3VwcG9ydFxcaGVscC1zdXBwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oZWxwLXN1cHBvcnQvaGVscC1zdXBwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAuc21hbGwtd2FybiB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/help-support/help-support.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/help-support/help-support.page.ts ***!
  \*********************************************************/
/*! exports provided: HelpSupportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpSupportPage", function() { return HelpSupportPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_pro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/pro */ "./node_modules/@ionic/pro/dist/ionic-pro.module.min.js");
/* harmony import */ var _ionic_pro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ionic_pro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/toast-service/toast-service.service */ "./src/app/services/toast-service/toast-service.service.ts");
/* harmony import */ var _services_interceptors_caching_request_caching_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/interceptors/caching/request-caching.service */ "./src/app/services/interceptors/caching/request-caching.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var rollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rollbar */ "./node_modules/rollbar/dist/rollbar.umd.min.js");
/* harmony import */ var rollbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rollbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _rollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../rollbar */ "./src/app/rollbar.ts");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/analytics/analytics.service */ "./src/app/services/analytics/analytics.service.ts");
/* harmony import */ var _services_analytics_analytic_events_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../services/analytics/analytic-events.enum */ "./src/app/services/analytics/analytic-events.enum.ts");
/* harmony import */ var _services_in_app_purchase_in_app_purchase_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/in-app-purchase/in-app-purchase.service */ "./src/app/services/in-app-purchase/in-app-purchase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var HelpSupportPage = /** @class */ (function () {
    function HelpSupportPage(platform, purchaseService, iab, cachingService, rollbar, toastSvc, appVer, analyticService) {
        this.platform = platform;
        this.purchaseService = purchaseService;
        this.iab = iab;
        this.cachingService = cachingService;
        this.rollbar = rollbar;
        this.toastSvc = toastSvc;
        this.appVer = appVer;
        this.analyticService = analyticService;
        this.buildVersion = '';
        this.appVersion = '';
        this.ionicVersion = 'default';
    }
    HelpSupportPage.prototype.ngOnInit = function () {
        this.setupBundleInfo();
        this.setupIonicBuildInfo();
    };
    HelpSupportPage.prototype.setupBundleInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, versionCode, versionNumber, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        if (!this.platform.is('cordova')) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.all([
                                this.appVer.getVersionCode(),
                                this.appVer.getVersionNumber(),
                            ])];
                    case 1:
                        _a = _b.sent(), versionCode = _a[0], versionNumber = _a[1];
                        this.buildVersion = "" + versionCode;
                        this.appVersion = versionNumber;
                        _b.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HelpSupportPage.prototype.viewSupportPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.iab
                    .create('https://www.mytransphormationstartstoday.com/help', '_blank');
                this.analyticService.logEvent(_services_analytics_analytic_events_enum__WEBPACK_IMPORTED_MODULE_10__["AnalyticEvents"].HelpView, {});
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(HelpSupportPage.prototype, "emailHref", {
        get: function () {
            var body = 'Version: ' + this.appVersion + '%0D%0A'
                + 'Build: ' + this.buildVersion + '%0D%0A'
                + 'Deployed: ' + this.ionicVersion + '%0D%0A%0D%0A';
            body = body.replace(' ', '%20');
            return "mailto:transphorm@1stphorm.com?subject=Support%20Request&body=" + body;
        },
        enumerable: true,
        configurable: true
    });
    HelpSupportPage.prototype.checkPremiumSubscription = function () {
        return __awaiter(this, void 0, void 0, function () {
            var platform;
            var _this = this;
            return __generator(this, function (_a) {
                platform = this.platform.is('ios') ? 'ios' : 'android';
                this.purchaseService.store.error(function (e) {
                    _this.rollbar.error(e);
                    _this.toastSvc.flash('Error refreshing subscription: ' + e);
                });
                this.purchaseService.registerProducts(this.purchaseService.platformProductsArray(), platform);
                this.purchaseService.store.refresh();
                return [2 /*return*/];
            });
        });
    };
    HelpSupportPage.prototype.clearCaches = function () {
        this.cachingService.clearAll();
        this.toastSvc.flash('Caches cleared.');
    };
    HelpSupportPage.prototype.setupIonicBuildInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentVersion, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!this.platform.is('cordova')) return [3 /*break*/, 2];
                        return [4 /*yield*/, _ionic_pro__WEBPACK_IMPORTED_MODULE_2__["Pro"].deploy.getCurrentVersion()];
                    case 1:
                        currentVersion = _a.sent();
                        if (currentVersion) {
                            this.ionicVersion = currentVersion.versionId;
                        }
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HelpSupportPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help-support',
            template: __webpack_require__(/*! ./help-support.page.html */ "./src/app/pages/help-support/help-support.page.html"),
            providers: [_ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_8__["AppVersion"]],
            styles: [__webpack_require__(/*! ./help-support.page.scss */ "./src/app/pages/help-support/help-support.page.scss")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_rollbar__WEBPACK_IMPORTED_MODULE_7__["RollbarService"])),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
            _services_in_app_purchase_in_app_purchase_service__WEBPACK_IMPORTED_MODULE_11__["InAppPurchaseService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"],
            _services_interceptors_caching_request_caching_service__WEBPACK_IMPORTED_MODULE_4__["RequestCachingService"],
            rollbar__WEBPACK_IMPORTED_MODULE_6__,
            _services_toast_service_toast_service_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"],
            _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_8__["AppVersion"],
            _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_9__["AnalyticsService"]])
    ], HelpSupportPage);
    return HelpSupportPage;
}());



/***/ }),

/***/ "./src/app/services/analytics/analytic-events.enum.ts":
/*!************************************************************!*\
  !*** ./src/app/services/analytics/analytic-events.enum.ts ***!
  \************************************************************/
/*! exports provided: AnalyticEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticEvents", function() { return AnalyticEvents; });
var AnalyticEvents;
(function (AnalyticEvents) {
    AnalyticEvents["ViewingWorkouts"] = "viewing_workouts";
    AnalyticEvents["AddingWeightIn"] = "adding_weigh_in";
    AnalyticEvents["LoggingNutrition"] = "logging_nutrition";
    AnalyticEvents["MessagingWithTrainer"] = "messaging_with_trainer";
    AnalyticEvents["WatchingLiveStream"] = "watching_live_stream";
    AnalyticEvents["HelpView"] = "help_view";
    AnalyticEvents["WorkoutHelp"] = "workout_help";
    AnalyticEvents["SearchingAdvisor"] = "searching_advisor";
    AnalyticEvents["DroppingAdvisor"] = "dropping_advisor";
    AnalyticEvents["TakingPhotos"] = "taking_photos";
    AnalyticEvents["ViewingAnnouncements"] = "viewing_announcements";
    AnalyticEvents["UpdatingProfile"] = "updating_profile";
    AnalyticEvents["ChangingConfiguration"] = "changing_configuration";
})(AnalyticEvents || (AnalyticEvents = {}));


/***/ })

}]);
//# sourceMappingURL=pages-help-support-help-support-module.js.map