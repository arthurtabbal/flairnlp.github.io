"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},o="Quick Start",l={unversionedId:"intro",id:"intro",title:"Quick Start",description:"Let's discover Flair in less than 5 minutes.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/flairNLP/flairnlp.github.io/edit/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial 1: Basic Tagging",permalink:"/docs/category/tutorial-1-basic-tagging"}},s={},p=[{value:"Requirements and Installation",id:"requirements-and-installation",level:3},{value:"Example 1: Tag Entities in Text",id:"example-1-tag-entities-in-text",level:3},{value:"Example 2: Detect Sentiment",id:"example-2-detect-sentiment",level:3},{value:"Summary",id:"summary",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,"Let's discover ",(0,a.kt)("strong",{parentName:"p"},"Flair in less than 5 minutes"),"."),(0,a.kt)("h3",{id:"requirements-and-installation"},"Requirements and Installation"),(0,a.kt)("p",null,"In your favorite virtual environment, simply do:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pip install flair\n")),(0,a.kt)("p",null,"Flair requires Python 3.7+. "),(0,a.kt)("h3",{id:"example-1-tag-entities-in-text"},"Example 1: Tag Entities in Text"),(0,a.kt)("p",null,"Let's run ",(0,a.kt)("strong",{parentName:"p"},"named entity recognition"),'  (NER) over the following example sentence: "',(0,a.kt)("em",{parentName:"p"},"I love Berlin and New York."),'"'),(0,a.kt)("p",null,"Our goal is to identify names in this sentence, and their types."),(0,a.kt)("p",null,"To do this, all you need is to make a ",(0,a.kt)("inlineCode",{parentName:"p"},"Sentence")," for this text, load a pre-trained model and use it to predict tags for the sentence:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from flair.data import Sentence\nfrom flair.nn import Classifier\n\n# make a sentence\nsentence = Sentence('I love Berlin and New York.')\n\n# load the NER tagger\ntagger = Classifier.load('ner')\n\n# run NER over sentence\ntagger.predict(sentence)\n\n# print the sentence with all annotations\nprint(sentence)\n")),(0,a.kt)("p",null,"This should print:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'Sentence[7]: "I love Berlin and New York." \u2192 ["Berlin"/LOC, "New York"/LOC]\n')),(0,a.kt)("p",null,'The output shows that both "Berlin" and "New York" were tagged as ',(0,a.kt)("strong",{parentName:"p"},"location entities")," (LOC) in this sentence."),(0,a.kt)("h3",{id:"example-2-detect-sentiment"},"Example 2: Detect Sentiment"),(0,a.kt)("p",null,"Let's run ",(0,a.kt)("strong",{parentName:"p"},"sentiment analysis")," over the same sentence to determine whether it is POSITIVE or NEGATIVE."),(0,a.kt)("p",null,"You can do this with essentially the same code as above. Just instead of loading the 'ner' model, you now load the 'sentiment' model:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from flair.data import Sentence\nfrom flair.nn import Classifier\n\n# make a sentence\nsentence = Sentence('I love Berlin and New York.')\n\n# load the sentiment tagger\ntagger = Classifier.load('sentiment')\n\n# run sentiment analysis over sentence\ntagger.predict(sentence)\n\n# print the sentence with all annotations\nprint(sentence)\n\n")),(0,a.kt)("p",null,"This should print:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'Sentence[7]: "I love Berlin and New York." \u2192 POSITIVE (0.9982)\n')),(0,a.kt)("p",null,'The output shows that the sentence "',(0,a.kt)("em",{parentName:"p"},"I love Berlin and New York."),'" was tagged as having ',(0,a.kt)("strong",{parentName:"p"},"POSITIVE")," sentiment. "),(0,a.kt)("h3",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Congrats, you now know how to use Flair to find entities and detect sentiment!"))}m.isMDXComponent=!0}}]);