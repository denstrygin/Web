(()=>{"use strict";window.analytics=function(){let t=0,e=!1;const c=()=>t++;return document.addEventListener("click",c),{destroy(){document.removeEventListener("click",c),e=!0},getClicks:()=>e?`Analytics is destroyed. Total clicks = ${t}`:t}}()})();