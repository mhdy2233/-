/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /gh/kasuie/alist-customize@1.0.1/v3/js/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
let footer=!1;const footerStyle="\n  .footer {\n    padding-bottom: 10px;\n    padding-top: 10px;\n    display: flex !important;\n  }\n  .mio-footer-main {\n    font-size: 14px;\n    transition: all 0.3s ease-in-out;\n  }\n  .mio-footer-main > img {\n    width: 18px !important;\n    height: 18px !important;\n    border-radius: 50%;\n  }\n\n  .mio-footer-main > a:hover {\n    text-decoration: underline;\n  }\n\n  .markdown-body li>p {\n    font-size: 14px;\n    margin-top: 10px;\n    margin-bottom: 0px;\n  }\n",onPatchStyle=e=>{const t=document.createElement("style");t.textContent=e;(document.head||document.getElementsByTagName("head")[0]).appendChild(t)},onCreateElement=(e,t)=>{const n=document.createElement(e);if(t&&"object"==typeof t)for(const e in t)Object.hasOwnProperty.call(t,e)&&t[e]&&n.setAttribute(e,t[e]);return n},renderFooter=e=>{const t=document.querySelector(".footer > div");if(t){if(onPatchStyle(footerStyle),t.innerHTML="",t.classList.add("mio-footer-main"),e?.length)for(let n=0;n<e.length;n++){const{url:o,text:r,icon:i,target:a}=e[n],l=onCreateElement("a",{target:a||null,href:o}),d=i?onCreateElement("img",{src:`https://api.iowen.cn/favicon/${new URL(o).host}.png`}):null;if(l&&(l.innerText=r),n){const e=onCreateElement("span",null);e.innerText="|",e&&t.appendChild(e)}d&&t.appendChild(d),l&&t.appendChild(l)}footer=!0}},init=()=>{if(document.querySelector("#footer-data")){let e=JSON.parse(document.querySelector("#footer-data").innerText),t=0;const n=setInterval((()=>{(footer||t>10)&&clearInterval(n),++t,renderFooter(e)}),300)}};init();

// 添加生成雪花效果的代码
const snowflakeCount = 100;

for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.width = `${Math.random() * 10 + 5}px`;
    snowflake.style.height = snowflake.style.width;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(snowflake);
}
//# sourceMappingURL=/sm/a806d5721bcac34acc0080584cebfb2deb3778bc2d68a73f8b6d3d284c963a97.map