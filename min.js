var majinbuu=function(){"use strict";function t(t,n){var e,c,r=Math.min,u=t.length,p=n.length,s=0,a=0,f=0,l=0;if(u<1)p&&t.splice.apply(t,[0,0].concat(n));else{if(p<1)return t.splice(0);for(e=[[0]];l++<p;)e[0][l]=l;for(;f++<u;){for(s=l=0,c=t[a],e[f]=[f];l++<p;)e[f][l]=r(e[a][l]+1,e[f][s]+1,e[a][s]+(c===n[s]?0:1)),s++;a++}o(t,i(t,n,e))}}function n(t){n.prototype=s,this._=t,this.splice=c}function e(t,n,e,i,o,c){t.unshift({type:n,x:e,y:i,count:o,items:c})}function i(t,n,i){for(var o,c,s,a,f=[],l=t.length+1-1,y=n.length+1-1;y&&l;)o=i[l][y],c=i[l-1][y],s=i[l][y-1],(a=i[l-1][y-1])<=s&&a<=c&&a<=o?(y--,l--,a<o&&e(f,p,y,l,1,[n[y]])):s<=c&&s<=o?e(f,u,--y,l,0,[n[y]]):e(f,r,y,--l,1,[]);for(;y--;)e(f,u,y,l,0,[n[y]]);for(;l--;)e(f,r,y,l,1,[]);return f}function o(t,n){var e,i,o,c=0,p=1,s=n.length;if(s){for(o=i=n[0];p<s;)e=n[p++],i.type===e.type&&e.x-i.x<=1&&e.y-i.y<=1?(o.count+=e.count,o.items=o.items.concat(e.items)):(t.splice.apply(t,[o.y+c,o.count].concat(o.items)),c+=o.type===u?o.items.length:o.type===r?-o.count:0,o=e),i=e;t.splice.apply(t,[o.y+c,o.count].concat(o.items))}}function c(){return this._.splice.apply(this._,arguments)}/*! Copyright (c) 2017, Andrea Giammarchi, @WebReflection */
var r="del",u="ins",p="sub",s=n.prototype;return t.aura=function(t,e){return n.prototype=e,new n(t)},t}();try{module.exports=majinbuu}catch(t){}