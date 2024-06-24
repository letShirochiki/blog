import{_ as i,r as p,c as o,b as a,w as e,d as s,a as c,o as r,e as n}from"./app-aCtIAlKl.js";const u={},d=s("h1",{id:"cesium",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#cesium"},[s("span",null,"Cesium")])],-1),k=s("h2",{id:"getting-started",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#getting-started"},[s("span",null,"Getting started")])],-1),m=s("div",{class:"language-bash","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token function"},"yarn"),n(),s("span",{class:"token function"},"add"),n(" cesium vite-plugin-cesium")]),n(`
`),s("span",{class:"line"})])])],-1),v=s("div",{class:"language-bash","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token function"},"npm"),n(),s("span",{class:"token function"},"install"),n(" cesium vite-plugin-cesium")]),n(`
`),s("span",{class:"line"})])])],-1),g=s("div",{class:"language-bash","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token function"},"pnpm"),n(),s("span",{class:"token function"},"install"),n(" cesium vite-plugin-cesium")]),n(`
`),s("span",{class:"line"})])])],-1),h=c(`<h2 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h2><blockquote><p>vite config</p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="vite.config.js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span></span>
<span class="line"><span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span class="token keyword">import</span> cesium <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-cesium&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">cesium</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>import</p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="App.vue"><pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Cesium <span class="token keyword">from</span> <span class="token string">&#39;cesium&#39;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Cesium<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>example</p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;cesiumContainer&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Cesium <span class="token keyword">from</span> <span class="token string">&#39;cesium&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 使用Cesium的Ion服务进行认证</span></span>
<span class="line">  Cesium<span class="token punctuation">.</span>Ion<span class="token punctuation">.</span>defaultAccessToken <span class="token operator">=</span> <span class="token string">&#39;你的Token&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 创建一个Viewer实例</span></span>
<span class="line">  <span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&#39;cesiumContainer&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 使用默认的影像图层和地形图层</span></span>
<span class="line">    <span class="token literal-property property">terrainProvider</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span><span class="token function">createWorldTerrain</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">requestWaterMask</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 其他初始化操作...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span></span>
<span class="line">#cesiumContainer <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">width</span><span class="token operator">:</span> 100vw<span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">height</span><span class="token operator">:</span> 100vh<span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function b(f,y){const t=p("CodeGroupItem"),l=p("CodeGroup");return r(),o("div",null,[d,k,a(l,null,{default:e(()=>[a(t,{title:"yarn"},{default:e(()=>[m]),_:1}),a(t,{title:"npm"},{default:e(()=>[v]),_:1}),a(t,{title:"pnpm"},{default:e(()=>[g]),_:1})]),_:1}),h])}const w=i(u,[["render",b],["__file","cesium.html.vue"]]),C=JSON.parse('{"path":"/posts/frontends/cesium.html","title":"Cesium","lang":"zh-CN","frontmatter":{"date":"2024-06-03T00:00:00.000Z","author":"letshirochi","category":["Cesium"],"tag":["frontend","cesium"],"type":"frontend","excerpt":"<s>A sticky article demo.</s>"},"headers":[{"level":2,"title":"Getting started","slug":"getting-started","link":"#getting-started","children":[]},{"level":2,"title":"Config","slug":"config","link":"#config","children":[]}],"git":{"updatedTime":1719211060000,"contributors":[{"name":"letshirochiki","email":"1487377445@qq.com","commits":1}]},"filePathRelative":"posts/frontends/cesium.md"}');export{w as comp,C as data};