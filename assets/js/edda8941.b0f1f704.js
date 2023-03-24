"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1357],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var r=t(7294);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){d(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,d=function(e,n){if(null==e)return{};var t,r,d={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(d[t]=e[t]);return d}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}var s=r.createContext({}),m=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=m(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,d=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=m(t),b=d,u=c["".concat(s,".").concat(b)]||c[b]||g[b]||i;return t?r.createElement(u,a(a({ref:n},l),{},{components:t})):r.createElement(u,a({ref:n},l))}));function u(e,n){var t=arguments,d=n&&n.mdxType;if("string"==typeof e||d){var i=t.length,a=new Array(i);a[0]=b;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:d,a[1]=o;for(var m=2;m<i;m++)a[m]=t[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},3665:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=t(7462),d=(t(7294),t(3905));const i={sidebar_position:1,description:"An introduction to embeddings in Flair"},a="Embeddings",o={unversionedId:"tutorial-embeddings/embeddings",id:"tutorial-embeddings/embeddings",title:"Embeddings",description:"An introduction to embeddings in Flair",source:"@site/docs/tutorial-embeddings/embeddings.md",sourceDirName:"tutorial-embeddings",slug:"/tutorial-embeddings/embeddings",permalink:"/docs/tutorial-embeddings/embeddings",draft:!1,editUrl:"https://github.com/flairNLP/flairnlp.github.io/edit/main/docs/tutorial-embeddings/embeddings.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"An introduction to embeddings in Flair"},sidebar:"tutorialSidebar",previous:{title:"Tutorial 3: Embeddings",permalink:"/docs/category/tutorial-3-embeddings"},next:{title:"Transformer embeddings",permalink:"/docs/tutorial-embeddings/transformer-embeddings"}},s={},m=[{value:"Example 1: Embeddings Words with Transformers",id:"example-1-embeddings-words-with-transformers",level:2},{value:"Example 2: Embeddings Documents with Transformers",id:"example-2-embeddings-documents-with-transformers",level:2},{value:"How to Stack Embeddings",id:"how-to-stack-embeddings",level:2}],l={toc:m},c="wrapper";function g(e){let{components:n,...t}=e;return(0,d.kt)(c,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"embeddings"},"Embeddings"),(0,d.kt)("p",null,"This tutorial shows you how to use Flair to produce ",(0,d.kt)("strong",{parentName:"p"},"embeddings")," for words and documents. Embeddings\nare vector representations that are useful for a variety of reasons. All Flair models are trained on\ntop of embeddings, so if you want to train your own models, you should understand how embeddings work."),(0,d.kt)("h2",{id:"example-1-embeddings-words-with-transformers"},"Example 1: Embeddings Words with Transformers"),(0,d.kt)("p",null,'Let\'s use a standard BERT model (bert-base-uncased) to embed the sentence "the grass is green".'),(0,d.kt)("p",null,"Simply instantate ",(0,d.kt)("inlineCode",{parentName:"p"},"TransformerWordEmbeddings")," and call ",(0,d.kt)("inlineCode",{parentName:"p"},"embed()")," over an example sentence: "),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-python"},"from flair.embeddings import TransformerWordEmbeddings\nfrom flair.data import Sentence\n\n# init embedding\nembedding = TransformerWordEmbeddings('bert-base-uncased')\n\n# create a sentence\nsentence = Sentence('The grass is green .')\n\n# embed words in sentence\nembedding.embed(sentence)\n")),(0,d.kt)("p",null,"This will cause ",(0,d.kt)("strong",{parentName:"p"},"each word in the sentence")," to be embedded. You can iterate through the words and get\neach embedding like this:"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-python"},"# now check out the embedded tokens.\nfor token in sentence:\n    print(token)\n    print(token.embedding)\n")),(0,d.kt)("p",null,"This will print each token as a long PyTorch vector: "),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-console"},"Token[0]: \"The\"\ntensor([-0.0323, -0.3904, -1.1946,  0.1296,  0.5806, ..], device='cuda:0')\nToken[1]: \"grass\"\ntensor([-0.3973,  0.2652, -0.1337,  0.4473,  1.1641, ..], device='cuda:0')\nToken[2]: \"is\"\ntensor([ 0.1374, -0.3688, -0.8292, -0.4068,  0.7717, ..], device='cuda:0')\nToken[3]: \"green\"\ntensor([-0.7722, -0.1152,  0.3661,  0.3570,  0.6573, ..], device='cuda:0')\nToken[4]: \".\"\ntensor([ 0.1441, -0.1772, -0.5911,  0.2236, -0.0497, ..], device='cuda:0')\n")),(0,d.kt)("p",null,(0,d.kt)("em",{parentName:"p"},"(Output truncated for readability, actually the vectors are much longer.)")),(0,d.kt)("p",null,"Transformer word embeddings are the most important concept in Flair. Check out more info in this dedicated chapter."),(0,d.kt)("h2",{id:"example-2-embeddings-documents-with-transformers"},"Example 2: Embeddings Documents with Transformers"),(0,d.kt)("p",null,"Sometimes you want to have an ",(0,d.kt)("strong",{parentName:"p"},"embedding for a whole document"),", not only individual words. In this case, use one of the\nDocumentEmbeddings classes in Flair. "),(0,d.kt)("p",null,'Let\'s again use a standard BERT model to get an embedding for the entire sentence "the grass is green":  '),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-python"},"from flair.embeddings import TransformerDocumentEmbeddings\nfrom flair.data import Sentence\n\n# init embedding\nembedding = TransformerDocumentEmbeddings('bert-base-uncased')\n\n# create a sentence\nsentence = Sentence('The grass is green .')\n\n# embed words in sentence\nembedding.embed(sentence)\n")),(0,d.kt)("p",null,"Now, the whole sentence is embedded. Print the embedding like this: "),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-python"},"# now check out the embedded sentence\nprint(sentence.embedding)\n")),(0,d.kt)("p",null,"Transformer document embeddings are the most important concept in Flair. Check out more info in this dedicated chapter."),(0,d.kt)("h2",{id:"how-to-stack-embeddings"},"How to Stack Embeddings"),(0,d.kt)("p",null,'Flair allows you to combine embeddings into "embedding stacks". When not fine-tuning, using combinations of embeddings often gives best results!'),(0,d.kt)("p",null,"Use the ",(0,d.kt)("inlineCode",{parentName:"p"},"StackedEmbeddings")," class and instantiate it by passing a list of embeddings that you wish to combine. For instance, lets combine classic GloVe embeddings with forward and backward Flair embeddings. "),(0,d.kt)("p",null,"First, instantiate the two embeddings you wish to combine:"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-python"},"from flair.embeddings import WordEmbeddings, FlairEmbeddings\n\n# init standard GloVe embedding\nglove_embedding = WordEmbeddings('glove')\n\n# init Flair forward and backwards embeddings\nflair_embedding_forward = FlairEmbeddings('news-forward')\nflair_embedding_backward = FlairEmbeddings('news-backward')\n")),(0,d.kt)("p",null,"Now instantiate the ",(0,d.kt)("inlineCode",{parentName:"p"},"StackedEmbeddings")," class and pass it a list containing these two embeddings."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-python"},"from flair.embeddings import StackedEmbeddings\n\n# create a StackedEmbedding object that combines glove and forward/backward flair embeddings\nstacked_embeddings = StackedEmbeddings([\n                                        glove_embedding,\n                                        flair_embedding_forward,\n                                        flair_embedding_backward,\n                                       ])\n")),(0,d.kt)("p",null,"That's it! Now just use this embedding like all the other embeddings, i.e. call the ",(0,d.kt)("inlineCode",{parentName:"p"},"embed()")," method over your sentences."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-python"},"sentence = Sentence('The grass is green .')\n\n# just embed a sentence using the StackedEmbedding as you would with any single embedding.\nstacked_embeddings.embed(sentence)\n\n# now check out the embedded tokens.\nfor token in sentence:\n    print(token)\n    print(token.embedding)\n")),(0,d.kt)("p",null,"Words are now embedded using a concatenation of three different embeddings. This means that the resulting embedding\nvector is still a single PyTorch vector."))}g.isMDXComponent=!0}}]);