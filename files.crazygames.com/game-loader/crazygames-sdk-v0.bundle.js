!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){function e(){this.gameFrame=this.getGameframe(),this.eventHandler=this.eventHandler.bind(this),this.initialized=!1}return e.getInstance=function(){return this.instance||(this.instance=new e),this.instance},e.prototype.init=function(e){if(!this.initialized){this.initialized=!0;var t=e.crazySDKObjectName;this.crazySDKObjectName=t,this.registerEventHandlers()}},e.prototype.requestAd=function(e){this.gameFrame.requestAd(e)},e.prototype.getGameframe=function(){return window.Crazygames},e.prototype.registerEventHandlers=function(){var e=this,t=this.gameFrame.constants;[t.AD_STARTED,t.AD_COMPLETED,t.AD_ERROR,t.AD_FINISHED].forEach(function(t){e.registerEventHandler(t)})},e.prototype.registerEventHandler=function(e){var t=this;document.addEventListener(e,function(e){return t.eventHandler(e)},!1)},e.prototype.eventHandler=function(e){var t=this.gameFrame.getUnityInstance();if(t&&this.crazySDKObjectName){var n=this.createUnityEventString(e);t.SendMessage(this.crazySDKObjectName,"AdEvent",n)}},e.prototype.createUnityEventString=function(e){var t=this.gameFrame.constants,n=t.AD_STARTED,r=t.AD_COMPLETED,i=t.AD_ERROR,a=t.AD_FINISHED;switch(e.type){case n:return"adStarted";case r:return"adCompleted";case i:return"adError";case a:return"adFinished";default:throw new Error("[CrazySDK] Unexpected Event Type "+e.type)}},e}().getInstance();window.CrazySDK=r}]);