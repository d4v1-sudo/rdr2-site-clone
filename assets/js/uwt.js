var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

twttr=window.twttr||{},twttr.conversion=function(){function e(e,t){var n=!1,i=!0,r=e.document,o=r.documentElement,a=r.addEventListener,s=a?"addEventListener":"attachEvent",u=a?"removeEventListener":"detachEvent",c=a?"":"on",d=function(i){"readystatechange"===i.type&&"complete"!==r.readyState||(("load"===i.type?e:r)[u](c+i.type,d,!1),!n&&(n=!0)&&t.call(e,i.type||i))},f=function(){try{o.doScroll("left")}catch(e){return void setTimeout(f,50)}d("poll")};if("complete"===r.readyState)t.call(e,"lazy");else{if(!a&&o.doScroll){try{i=!e.frameElement}catch(e){}i&&f()}r[s](c+"DOMContentLoaded",d,!1),e[s](c+"load",d,!1)}}function t(){this.pixelId="",this.eventQueue=[[]]}var n="//web.archive.org/web/20200524222813/https://t.co/i/adsct?p_id=Twitter&p_user_id=0",i="https://web.archive.org/web/20200524222813/https://analytics.twitter.com/i/adsct?p_id=Twitter&p_user_id=0",r=function(e,t){var n=t.toLowerCase();for(var i in e)if(i.toLowerCase()===n&&e.hasOwnProperty(i))return!0;return!1},o=function(e,t){var n=t.toLowerCase();for(var i in e)if(i.toLowerCase()===n&&e.hasOwnProperty(i))return e[i]};return t.prototype={setPixelId:function(e){this.pixelId=e},queueEvent:function(e,t){var n=this;e="function"!=typeof String.prototype.trim?e.toLowerCase().replace(/^\s+|\s+$/g,""):e.toLowerCase().trim(),n.eventQueue[n.eventQueue.length-1].push({event:[e,t],pixelId:n.pixelId}),setTimeout(function(){n.sendEvents()},0)},addFlushPoint:function(){var e=this;0!==e.eventQueue[e.eventQueue.length-1].length&&e.eventQueue.push([])},sendEventsWithParams:function(e,t){var n=this.getLegacyParams(e);n.events=this.stringifyObject(e),twttr.conversion.trackPid(t,n)},sendEvents:function(){var e=this;if(0!==e.eventQueue[0].length){var t=e.eventQueue.shift();0===e.eventQueue.length&&e.eventQueue.push([]);for(var n=0;n<t.length;n++)e.sendEventsWithParams([t[n].event],t[n].pixelId)}},getLegacyParams:function(e){var t={},n=this.isObject(e[0])?e[0]:{},i=this.isObject(n[1])?n[1]:{};return r(i,"value")&&(t.tw_sale_amount=o(i,"value")),r(i,"num_items")&&(t.tw_order_quantity=o(i,"num_items")),this.isObject(o(i,"content_ids"))&&(t.tw_product_id=o(i,"content_ids")[0]),r(i,"partner_id")&&(t.oct_p_id=o(i,"partner_id")),t},stringifyObject:function(e){return"undefined"!=typeof JSON&&"function"==typeof JSON.stringify?JSON.stringify(e):""},isObject:function(e){return Object(e)===e}},function(){if(window.twq){var e=new t;twq.exe=function(){var t,n=Array.prototype.slice.call(arguments),i=n[0],r=n.slice(1);switch(i){case"init":t=e.setPixelId;break;case"track":t=e.queueEvent;break;case"new_event":t=e.addFlushPoint}"function"==typeof t&&t.apply(e,r)};for(var n=0;n<twq.queue.length;n++)twq.exe.apply(null,twq.queue[n])}}(),{trackBase:function(e,t,n,i){if("string"==typeof t&&"string"==typeof n){var r=e+"&merch_id="+encodeURIComponent(t);r+="&event="+encodeURIComponent(n),void 0!==i&&(r+="&value="+encodeURIComponent(i)),this.buildPixel(r)}},trackPidBase:function(e,t,n,i){if(t){var r="";if("object"==typeof n){"tw_sale_amount"in n||(n.tw_sale_amount=0),"tw_order_quantity"in n||(n.tw_order_quantity=0);for(var o in n)n.hasOwnProperty(o)&&(r+="&"+encodeURIComponent(o)+"="+encodeURIComponent(n[o]))}else r="&tw_sale_amount=0&tw_order_quantity=0";var a=e+"&txn_id="+encodeURIComponent(t)+r,s=this.getIframeStatus();if(a+="&tw_iframe_status="+encodeURIComponent(s.value),s===this.IframeStatusCodes.IN_IFRAME&&""!=document.referrer){a+="&tw_document_referrer="+encodeURIComponent(document.referrer)}var u=this.buildPixel;i&&(a+="&tpx_cb=twttr.conversion.loadPixels",u=this.buildScript);a+="&tw_document_href="+encodeURIComponent(document.location.href);var c=this.getHiddenProp();this.isDocumentHidden()?this.buildPixelWhenVizChange(a,c,u):u(a)}},track:function(e,t,r){this.trackBase(i,e,t,r),this.trackBase(n,e,t,r)},trackPid:function(e,t){this.trackPidBase(i,e,t,!0),this.trackPidBase(n,e,t)},buildScript:function(t){var n=document.createElement("script");n.src=t,n.setAttribute("type","text/javascript"),e(window,function(){document.body.appendChild(n)})},cs:!0,buildIframe:function(t){if(twttr.conversion.cs){twttr.conversion.cs=!1;var n=document.createElement("iframe");n.src=t,n.hidden=!0,e(window,function(){document.body.appendChild(n)})}},buildPixel:function(e){(new Image).src=e},isDocumentHidden:function(){var e=this.getHiddenProp();return e&&document[e]},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null},buildPixelWhenVizChange:function(e,t,n){var i=t.replace(/[H|h]idden/,"")+"visibilitychange",r=function(){n(e),document.removeEventListener(i,r,!1)}.bind(this);document.addEventListener(i,r,!1)},getIframeStatus:function(){try{return this.isIframed()?this.IframeStatusCodes.IN_IFRAME:this.IframeStatusCodes.NOT_IN_IFRAME}catch(e){return this.IframeStatusCodes.ERROR}},isIframed:function(){return window.self!==window.top},IframeStatusCodes:{NOT_IN_IFRAME:{value:0},IN_IFRAME:{value:1},ERROR:{value:2}},loadPixels:function(e){var t,n;"hif"in e&&(t=e.hif,t.forEach(twttr.conversion.buildIframe)),"tags"in e&&(n=e.tags,n.forEach(twttr.conversion.buildPixel))}}}();

}
/*
     FILE ARCHIVED ON 22:28:13 May 24, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:16:06 Apr 21, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.626
  exclusion.robots: 0.064
  exclusion.robots.policy: 0.056
  cdx.remote: 0.085
  esindex: 0.008
  LoadShardBlock: 456.411 (6)
  PetaboxLoader3.resolve: 315.153 (5)
  PetaboxLoader3.datanode: 240.264 (8)
  load_resource: 237.114 (2)
*/