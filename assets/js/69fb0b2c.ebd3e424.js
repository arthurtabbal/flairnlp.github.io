"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6498],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),o=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(s.Provider,{value:e},t.children)},p="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),p=o(n),u=r,k=p["".concat(s,".").concat(u)]||p[u]||g[u]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var d={};for(var s in e)hasOwnProperty.call(e,s)&&(d[s]=e[s]);d.originalType=t,d[p]="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7240:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:4,description:"Classic word embeddings (still sometimes useful!)"},i="Classic Word Embeddings",d={unversionedId:"tutorial-embeddings/classic-word-embeddings",id:"tutorial-embeddings/classic-word-embeddings",title:"Classic Word Embeddings",description:"Classic word embeddings (still sometimes useful!)",source:"@site/docs/tutorial-embeddings/classic-word-embeddings.md",sourceDirName:"tutorial-embeddings",slug:"/tutorial-embeddings/classic-word-embeddings",permalink:"/docs/tutorial-embeddings/classic-word-embeddings",draft:!1,editUrl:"https://github.com/flairNLP/flairnlp.github.io/edit/main/docs/tutorial-embeddings/classic-word-embeddings.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Classic word embeddings (still sometimes useful!)"},sidebar:"tutorialSidebar",previous:{title:"Flair embeddings",permalink:"/docs/tutorial-embeddings/flair-embeddings"},next:{title:"Other embeddings in Flair",permalink:"/docs/tutorial-embeddings/other-embeddings"}},s={},o=[],m={toc:o},p="wrapper";function g(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"classic-word-embeddings"},"Classic Word Embeddings"),(0,r.kt)("p",null,"Classic word embeddings are static and word-level, meaning that each distinct word gets exactly one pre-computed\nembedding. Most embeddings fall under this class, including the popular GloVe or Komninos embeddings."),(0,r.kt)("p",null,"Simply instantiate the ",(0,r.kt)("inlineCode",{parentName:"p"},"WordEmbeddings")," class and pass a string identifier of the embedding you wish to load. So, if\nyou want to use GloVe embeddings, pass the string 'glove' to the constructor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from flair.embeddings import WordEmbeddings\n\n# init embedding\nglove_embedding = WordEmbeddings('glove')\n")),(0,r.kt)("p",null,"Now, create an example sentence and call the embedding's ",(0,r.kt)("inlineCode",{parentName:"p"},"embed()")," method. You can also pass a list of sentences to\nthis method since some embedding types make use of batching to increase speed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# create sentence.\nsentence = Sentence('The grass is green .')\n\n# embed a sentence using glove.\nglove_embedding.embed(sentence)\n\n# now check out the embedded tokens.\nfor token in sentence:\n    print(token)\n    print(token.embedding)\n")),(0,r.kt)("p",null,"This prints out the tokens and their embeddings. GloVe embeddings are Pytorch vectors of dimensionality 100."),(0,r.kt)("p",null,"You choose which pre-trained embeddings you load by passing the appropriate\nid string to the constructor of the ",(0,r.kt)("inlineCode",{parentName:"p"},"WordEmbeddings")," class. Typically, you use\nthe ",(0,r.kt)("strong",{parentName:"p"},"two-letter language code")," to init an embedding, so 'en' for English and\n'de' for German and so on. By default, this will initialize FastText embeddings trained over Wikipedia.\nYou can also always use FastText embeddings over Web crawls, by instantiating with '-crawl'. So 'de-crawl'\nto use embeddings trained over German web crawls."),(0,r.kt)("p",null,"For English, we provide a few more options, so\nhere you can choose between instantiating 'en-glove', 'en-extvec' and so on."),(0,r.kt)("p",null,"The following embeddings are currently supported:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Language"),(0,r.kt)("th",{parentName:"tr",align:null},"Embedding"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'en-glove' (or 'glove')"),(0,r.kt)("td",{parentName:"tr",align:null},"English"),(0,r.kt)("td",{parentName:"tr",align:null},"GloVe embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'en-extvec' (or 'extvec')"),(0,r.kt)("td",{parentName:"tr",align:null},"English"),(0,r.kt)("td",{parentName:"tr",align:null},"Komninos embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'en-crawl' (or 'crawl')"),(0,r.kt)("td",{parentName:"tr",align:null},"English"),(0,r.kt)("td",{parentName:"tr",align:null},"FastText embeddings over Web crawls")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'en-twitter' (or 'twitter')"),(0,r.kt)("td",{parentName:"tr",align:null},"English"),(0,r.kt)("td",{parentName:"tr",align:null},"Twitter embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'en-turian' (or 'turian')"),(0,r.kt)("td",{parentName:"tr",align:null},"English"),(0,r.kt)("td",{parentName:"tr",align:null},"Turian embeddings (small)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'en' (or 'en-news' or 'news')"),(0,r.kt)("td",{parentName:"tr",align:null},"English"),(0,r.kt)("td",{parentName:"tr",align:null},"FastText embeddings over news and wikipedia data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'de'"),(0,r.kt)("td",{parentName:"tr",align:null},"German"),(0,r.kt)("td",{parentName:"tr",align:null},"German FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'nl'"),(0,r.kt)("td",{parentName:"tr",align:null},"Dutch"),(0,r.kt)("td",{parentName:"tr",align:null},"Dutch FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'fr'"),(0,r.kt)("td",{parentName:"tr",align:null},"French"),(0,r.kt)("td",{parentName:"tr",align:null},"French FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'it'"),(0,r.kt)("td",{parentName:"tr",align:null},"Italian"),(0,r.kt)("td",{parentName:"tr",align:null},"Italian FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'es'"),(0,r.kt)("td",{parentName:"tr",align:null},"Spanish"),(0,r.kt)("td",{parentName:"tr",align:null},"Spanish FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'pt'"),(0,r.kt)("td",{parentName:"tr",align:null},"Portuguese"),(0,r.kt)("td",{parentName:"tr",align:null},"Portuguese FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'ro'"),(0,r.kt)("td",{parentName:"tr",align:null},"Romanian"),(0,r.kt)("td",{parentName:"tr",align:null},"Romanian FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'ca'"),(0,r.kt)("td",{parentName:"tr",align:null},"Catalan"),(0,r.kt)("td",{parentName:"tr",align:null},"Catalan FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'sv'"),(0,r.kt)("td",{parentName:"tr",align:null},"Swedish"),(0,r.kt)("td",{parentName:"tr",align:null},"Swedish FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'da'"),(0,r.kt)("td",{parentName:"tr",align:null},"Danish"),(0,r.kt)("td",{parentName:"tr",align:null},"Danish FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'no'"),(0,r.kt)("td",{parentName:"tr",align:null},"Norwegian"),(0,r.kt)("td",{parentName:"tr",align:null},"Norwegian FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'fi'"),(0,r.kt)("td",{parentName:"tr",align:null},"Finnish"),(0,r.kt)("td",{parentName:"tr",align:null},"Finnish FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'pl'"),(0,r.kt)("td",{parentName:"tr",align:null},"Polish"),(0,r.kt)("td",{parentName:"tr",align:null},"Polish FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'cz'"),(0,r.kt)("td",{parentName:"tr",align:null},"Czech"),(0,r.kt)("td",{parentName:"tr",align:null},"Czech FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'sk'"),(0,r.kt)("td",{parentName:"tr",align:null},"Slovak"),(0,r.kt)("td",{parentName:"tr",align:null},"Slovak FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'sl'"),(0,r.kt)("td",{parentName:"tr",align:null},"Slovenian"),(0,r.kt)("td",{parentName:"tr",align:null},"Slovenian FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'sr'"),(0,r.kt)("td",{parentName:"tr",align:null},"Serbian"),(0,r.kt)("td",{parentName:"tr",align:null},"Serbian FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'hr'"),(0,r.kt)("td",{parentName:"tr",align:null},"Croatian"),(0,r.kt)("td",{parentName:"tr",align:null},"Croatian FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'bg'"),(0,r.kt)("td",{parentName:"tr",align:null},"Bulgarian"),(0,r.kt)("td",{parentName:"tr",align:null},"Bulgarian FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'ru'"),(0,r.kt)("td",{parentName:"tr",align:null},"Russian"),(0,r.kt)("td",{parentName:"tr",align:null},"Russian FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'ar'"),(0,r.kt)("td",{parentName:"tr",align:null},"Arabic"),(0,r.kt)("td",{parentName:"tr",align:null},"Arabic FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'he'"),(0,r.kt)("td",{parentName:"tr",align:null},"Hebrew"),(0,r.kt)("td",{parentName:"tr",align:null},"Hebrew FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'tr'"),(0,r.kt)("td",{parentName:"tr",align:null},"Turkish"),(0,r.kt)("td",{parentName:"tr",align:null},"Turkish FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'fa'"),(0,r.kt)("td",{parentName:"tr",align:null},"Persian"),(0,r.kt)("td",{parentName:"tr",align:null},"Persian FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'ja'"),(0,r.kt)("td",{parentName:"tr",align:null},"Japanese"),(0,r.kt)("td",{parentName:"tr",align:null},"Japanese FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'ko'"),(0,r.kt)("td",{parentName:"tr",align:null},"Korean"),(0,r.kt)("td",{parentName:"tr",align:null},"Korean FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'zh'"),(0,r.kt)("td",{parentName:"tr",align:null},"Chinese"),(0,r.kt)("td",{parentName:"tr",align:null},"Chinese FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'hi'"),(0,r.kt)("td",{parentName:"tr",align:null},"Hindi"),(0,r.kt)("td",{parentName:"tr",align:null},"Hindi FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'id'"),(0,r.kt)("td",{parentName:"tr",align:null},"Indonesian"),(0,r.kt)("td",{parentName:"tr",align:null},"Indonesian FastText embeddings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'eu'"),(0,r.kt)("td",{parentName:"tr",align:null},"Basque"),(0,r.kt)("td",{parentName:"tr",align:null},"Basque FastText embeddings")))),(0,r.kt)("p",null,"So, if you want to load German FastText embeddings, instantiate as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"german_embedding = WordEmbeddings('de')\n")),(0,r.kt)("p",null,"Alternatively, if you want to load German FastText embeddings trained over crawls, instantiate as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"german_embedding = WordEmbeddings('de-crawl')\n")),(0,r.kt)("p",null,"We generally recommend the FastText embeddings, or GloVe if you want a smaller model."),(0,r.kt)("p",null,"If you want to use any other embeddings (not listed in the list above), you can load those by calling"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"custom_embedding = WordEmbeddings('path/to/your/custom/embeddings.gensim')\n")),(0,r.kt)("p",null,"If you want to load custom embeddings you need to make sure that the custom embeddings are correctly formatted to\n",(0,r.kt)("a",{parentName:"p",href:"https://radimrehurek.com/gensim/models/word2vec.html"},"gensim"),"."),(0,r.kt)("p",null,"You can, for example, convert ",(0,r.kt)("a",{parentName:"p",href:"https://fasttext.cc/docs/en/crawl-vectors.html"},"FastText embeddings")," to gensim using the\nfollowing code snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import gensim\n\nword_vectors = gensim.models.KeyedVectors.load_word2vec_format('/path/to/fasttext/embeddings.txt', binary=False)\nword_vectors.save('/path/to/converted')\n")),(0,r.kt)("p",null,"However, FastText embeddings have the functionality of returning vectors for out of vocabulary words using the sub-word information. If you want to use this then try ",(0,r.kt)("inlineCode",{parentName:"p"},"FastTextEmbeddings")," class."))}g.isMDXComponent=!0}}]);