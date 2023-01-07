var N=Object.defineProperty;var O=(e,y,x)=>y in e?N(e,y,{enumerable:!0,configurable:!0,writable:!0,value:x}):e[y]=x;var m=(e,y,x)=>(O(e,typeof y!="symbol"?y+"":y,x),x);(function(){const y=document.createElement("link").relList;if(y&&y.supports&&y.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&p(n)}).observe(document,{childList:!0,subtree:!0});function x(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function p(t){if(t.ep)return;t.ep=!0;const s=x(t);fetch(t.href,s)}})();const A=(e,y)=>{const x=e.p1.x,p=e.p1.y,t=e.p2.x,s=e.p2.y,n=y.p1.x,r=y.p1.y,l=y.p2.x,h=y.p2.y,i=(x-t)*(r-h)-(p-s)*(n-l);if(i===0)return null;const o=((x*s-p*t)*(n-l)-(x-t)*(n*h-r*l))/i,d=((x*s-p*t)*(r-h)-(p-s)*(n*h-r*l))/i;return o<Math.min(x,t)||o>Math.max(x,t)||o<Math.min(n,l)||o>Math.max(n,l)||d<Math.min(p,s)||d>Math.max(p,s)||d<Math.min(r,h)||d>Math.max(r,h)?null:{x:o,y:d}},M=(e,y,x="#000")=>{e.beginPath(),e.moveTo(y.p1.x,y.p1.y),e.lineTo(y.p2.x,y.p2.y),e.strokeStyle=x,e.stroke()},g=(e,y)=>Math.sqrt((e.x-y.x)**2+(e.y-y.y)**2),I=(e,y)=>e.slice(0,Math.min(e.length,y.length)).map((x,p)=>[x,y[p]]),k=e=>e!=null,v=Math.tanh,P=(e,y)=>Math.random()<y?Math.random()*2-1:e;class b{constructor(y,x){m(this,"clone",()=>new b(this.weights.slice(),this.bias));this.weights=y,this.bias=x}forward(y){if(y.length!=this.weights.length)throw new Error("Size Missmatch");const x=I(y,this.weights).map(([p,t])=>p*t).reduce((p,t)=>p+t)+this.bias;return v(x)}}class L{constructor(y){m(this,"forward",y=>this.perceptrons.map(x=>x.forward(y)));m(this,"clone",()=>new L(this.perceptrons.map(y=>y.clone())));this.perceptrons=y}}class f{constructor(y){m(this,"forward",y=>this.layers.reduce((x,p)=>p.forward(x),y));m(this,"clone",()=>new f(this.layers.map(y=>y.clone())));this.layers=y}static fromShape(y){return new f(y.slice(1).map((x,p)=>new L(Array(x).fill(0).map(()=>new b(Array(y[p]).fill(0).map(()=>Math.random()*2-1),Math.random()*2-1)))))}mutate(y){const x=this.clone();return x.layers.forEach(p=>p.perceptrons.forEach(t=>{t.weights=t.weights.map(s=>P(s,y)),t.bias=P(t.bias,y)})),x}}const R={walls:[{p1:{x:205,y:127},p2:{x:286,y:129}},{p1:{x:286,y:129},p2:{x:296,y:54}},{p1:{x:296,y:54},p2:{x:203,y:50}},{p1:{x:203,y:50},p2:{x:111,y:49}},{p1:{x:111,y:49},p2:{x:59,y:47}},{p1:{x:59,y:47},p2:{x:38,y:124}},{p1:{x:38,y:124},p2:{x:112,y:134}},{p1:{x:112,y:134},p2:{x:127,y:192}},{p1:{x:127,y:192},p2:{x:121,y:246}},{p1:{x:121,y:246},p2:{x:97,y:302}},{p1:{x:97,y:302},p2:{x:89,y:355}},{p1:{x:89,y:355},p2:{x:74,y:429}},{p1:{x:74,y:429},p2:{x:74,y:479}},{p1:{x:74,y:479},p2:{x:67,y:547}},{p1:{x:67,y:547},p2:{x:69,y:598}},{p1:{x:69,y:598},p2:{x:81,y:657}},{p1:{x:81,y:657},p2:{x:99,y:689}},{p1:{x:99,y:689},p2:{x:129,y:718}},{p1:{x:129,y:718},p2:{x:178,y:723}},{p1:{x:178,y:723},p2:{x:236,y:730}},{p1:{x:236,y:730},p2:{x:303,y:732}},{p1:{x:303,y:732},p2:{x:342,y:732}},{p1:{x:342,y:732},p2:{x:374,y:750}},{p1:{x:374,y:750},p2:{x:426,y:757}},{p1:{x:426,y:757},p2:{x:491,y:746}},{p1:{x:491,y:746},p2:{x:507,y:701}},{p1:{x:507,y:701},p2:{x:510,y:665}},{p1:{x:510,y:665},p2:{x:538,y:612}},{p1:{x:538,y:612},p2:{x:594,y:584}},{p1:{x:594,y:584},p2:{x:638,y:571}},{p1:{x:638,y:571},p2:{x:696,y:539}},{p1:{x:696,y:539},p2:{x:722,y:491}},{p1:{x:722,y:491},p2:{x:728,y:419}},{p1:{x:728,y:419},p2:{x:710,y:379}},{p1:{x:710,y:379},p2:{x:678,y:346}},{p1:{x:678,y:346},p2:{x:669,y:314}},{p1:{x:669,y:314},p2:{x:699,y:285}},{p1:{x:699,y:285},p2:{x:740,y:262}},{p1:{x:740,y:262},p2:{x:755,y:193}},{p1:{x:755,y:193},p2:{x:752,y:154}},{p1:{x:752,y:154},p2:{x:734,y:128}},{p1:{x:734,y:128},p2:{x:695,y:98}},{p1:{x:695,y:98},p2:{x:647,y:78}},{p1:{x:647,y:78},p2:{x:593,y:78}},{p1:{x:593,y:78},p2:{x:560,y:101}},{p1:{x:560,y:101},p2:{x:554,y:139}},{p1:{x:554,y:139},p2:{x:515,y:174}},{p1:{x:515,y:174},p2:{x:469,y:165}},{p1:{x:469,y:165},p2:{x:426,y:154}},{p1:{x:426,y:154},p2:{x:374,y:182}},{p1:{x:374,y:182},p2:{x:406,y:240}},{p1:{x:406,y:240},p2:{x:457,y:220}},{p1:{x:457,y:220},p2:{x:522,y:238}},{p1:{x:522,y:238},p2:{x:584,y:200}},{p1:{x:584,y:200},p2:{x:603,y:170}},{p1:{x:603,y:170},p2:{x:613,y:153}},{p1:{x:613,y:153},p2:{x:640,y:155}},{p1:{x:640,y:155},p2:{x:664,y:161}},{p1:{x:664,y:161},p2:{x:666,y:180}},{p1:{x:666,y:180},p2:{x:670,y:196}},{p1:{x:670,y:196},p2:{x:670,y:211}},{p1:{x:670,y:211},p2:{x:670,y:235}},{p1:{x:670,y:235},p2:{x:638,y:240}},{p1:{x:638,y:240},p2:{x:611,y:262}},{p1:{x:611,y:262},p2:{x:604,y:300}},{p1:{x:604,y:300},p2:{x:595,y:339}},{p1:{x:595,y:339},p2:{x:622,y:360}},{p1:{x:622,y:360},p2:{x:642,y:372}},{p1:{x:642,y:372},p2:{x:645,y:397}},{p1:{x:645,y:397},p2:{x:654,y:413}},{p1:{x:654,y:413},p2:{x:654,y:436}},{p1:{x:654,y:436},p2:{x:648,y:473}},{p1:{x:648,y:473},p2:{x:622,y:482}},{p1:{x:622,y:482},p2:{x:609,y:491}},{p1:{x:609,y:491},p2:{x:574,y:500}},{p1:{x:574,y:500},p2:{x:550,y:514}},{p1:{x:550,y:514},p2:{x:538,y:526}},{p1:{x:538,y:526},p2:{x:507,y:550}},{p1:{x:507,y:550},p2:{x:506,y:568}},{p1:{x:506,y:568},p2:{x:481,y:572}},{p1:{x:481,y:572},p2:{x:442,y:573}},{p1:{x:442,y:573},p2:{x:441,y:586}},{p1:{x:441,y:586},p2:{x:433,y:621}},{p1:{x:433,y:621},p2:{x:429,y:651}},{p1:{x:429,y:651},p2:{x:414,y:652}},{p1:{x:414,y:652},p2:{x:376,y:664}},{p1:{x:376,y:664},p2:{x:340,y:667}},{p1:{x:340,y:667},p2:{x:290,y:652}},{p1:{x:290,y:652},p2:{x:248,y:630}},{p1:{x:248,y:630},p2:{x:214,y:641}},{p1:{x:214,y:641},p2:{x:204,y:635}},{p1:{x:204,y:635},p2:{x:182,y:622}},{p1:{x:182,y:622},p2:{x:180,y:597}},{p1:{x:180,y:597},p2:{x:173,y:572}},{p1:{x:173,y:572},p2:{x:174,y:548}},{p1:{x:174,y:548},p2:{x:181,y:529}},{p1:{x:181,y:529},p2:{x:206,y:480}},{p1:{x:206,y:480},p2:{x:220,y:414}},{p1:{x:220,y:414},p2:{x:227,y:377}},{p1:{x:227,y:377},p2:{x:232,y:356}},{p1:{x:232,y:356},p2:{x:230,y:323}},{p1:{x:230,y:323},p2:{x:221,y:295}},{p1:{x:221,y:295},p2:{x:214,y:261}},{p1:{x:214,y:261},p2:{x:204,y:228}},{p1:{x:204,y:228},p2:{x:199,y:193}},{p1:{x:199,y:193},p2:{x:187,y:161}},{p1:{x:187,y:161},p2:{x:205,y:126}}],rewards:[{x:155,y:153},{x:155,y:231},{x:153,y:283},{x:136,y:347},{x:116,y:410},{x:121,y:475},{x:112,y:544},{x:114,y:616},{x:141,y:659},{x:191,y:677},{x:250,y:698},{x:354,y:700},{x:459,y:671},{x:513,y:585},{x:570,y:557},{x:632,y:542},{x:680,y:505},{x:674,y:435},{x:675,y:402},{x:637,y:341},{x:663,y:280},{x:696,y:228},{x:697,y:160},{x:650,y:113},{x:586,y:121},{x:567,y:165},{x:523,y:200},{x:452,y:195},{x:417,y:203}]},q={walls:[{p1:{x:86,y:83},p2:{x:86,y:162}},{p1:{x:86,y:162},p2:{x:164,y:164}},{p1:{x:164,y:164},p2:{x:198,y:188}},{p1:{x:198,y:188},p2:{x:195,y:217}},{p1:{x:195,y:217},p2:{x:180,y:239}},{p1:{x:180,y:239},p2:{x:159,y:244}},{p1:{x:159,y:244},p2:{x:122,y:250}},{p1:{x:122,y:250},p2:{x:77,y:258}},{p1:{x:77,y:258},p2:{x:55,y:269}},{p1:{x:55,y:269},p2:{x:47,y:285}},{p1:{x:47,y:285},p2:{x:45,y:313}},{p1:{x:45,y:313},p2:{x:40,y:335}},{p1:{x:40,y:335},p2:{x:28,y:357}},{p1:{x:28,y:357},p2:{x:32,y:375}},{p1:{x:32,y:375},p2:{x:48,y:402}},{p1:{x:48,y:402},p2:{x:77,y:418}},{p1:{x:77,y:418},p2:{x:110,y:427}},{p1:{x:110,y:427},p2:{x:141,y:428}},{p1:{x:141,y:428},p2:{x:173,y:418}},{p1:{x:173,y:418},p2:{x:193,y:403}},{p1:{x:193,y:403},p2:{x:201,y:384}},{p1:{x:201,y:384},p2:{x:208,y:358}},{p1:{x:208,y:358},p2:{x:224,y:345}},{p1:{x:224,y:345},p2:{x:246,y:342}},{p1:{x:246,y:342},p2:{x:262,y:365}},{p1:{x:262,y:365},p2:{x:265,y:394}},{p1:{x:265,y:394},p2:{x:263,y:424}},{p1:{x:263,y:424},p2:{x:252,y:448}},{p1:{x:252,y:448},p2:{x:223,y:464}},{p1:{x:223,y:464},p2:{x:203,y:481}},{p1:{x:203,y:481},p2:{x:199,y:526}},{p1:{x:199,y:526},p2:{x:220,y:571}},{p1:{x:220,y:571},p2:{x:236,y:583}},{p1:{x:236,y:583},p2:{x:297,y:583}},{p1:{x:297,y:583},p2:{x:326,y:580}},{p1:{x:326,y:580},p2:{x:339,y:566}},{p1:{x:339,y:566},p2:{x:354,y:545}},{p1:{x:354,y:545},p2:{x:369,y:498}},{p1:{x:369,y:498},p2:{x:370,y:467}},{p1:{x:370,y:467},p2:{x:369,y:447}},{p1:{x:369,y:447},p2:{x:365,y:395}},{p1:{x:365,y:395},p2:{x:378,y:354}},{p1:{x:378,y:354},p2:{x:388,y:335}},{p1:{x:388,y:335},p2:{x:403,y:321}},{p1:{x:403,y:321},p2:{x:431,y:307}},{p1:{x:431,y:307},p2:{x:470,y:309}},{p1:{x:470,y:309},p2:{x:483,y:329}},{p1:{x:483,y:329},p2:{x:494,y:384}},{p1:{x:494,y:384},p2:{x:494,y:468}},{p1:{x:494,y:468},p2:{x:484,y:485}},{p1:{x:484,y:485},p2:{x:449,y:519}},{p1:{x:449,y:519},p2:{x:404,y:577}},{p1:{x:404,y:577},p2:{x:377,y:660}},{p1:{x:377,y:660},p2:{x:395,y:686}},{p1:{x:395,y:686},p2:{x:424,y:698}},{p1:{x:424,y:698},p2:{x:494,y:694}},{p1:{x:494,y:694},p2:{x:548,y:676}},{p1:{x:548,y:676},p2:{x:608,y:639}},{p1:{x:608,y:639},p2:{x:649,y:596}},{p1:{x:649,y:596},p2:{x:685,y:547}},{p1:{x:685,y:547},p2:{x:698,y:509}},{p1:{x:698,y:509},p2:{x:711,y:453}},{p1:{x:711,y:453},p2:{x:736,y:352}},{p1:{x:736,y:352},p2:{x:737,y:277}},{p1:{x:737,y:277},p2:{x:736,y:213}},{p1:{x:736,y:213},p2:{x:719,y:169}},{p1:{x:719,y:169},p2:{x:691,y:139}},{p1:{x:691,y:139},p2:{x:649,y:111}},{p1:{x:649,y:111},p2:{x:628,y:114}},{p1:{x:628,y:114},p2:{x:583,y:132}},{p1:{x:583,y:132},p2:{x:571,y:170}},{p1:{x:571,y:170},p2:{x:604,y:237}},{p1:{x:604,y:237},p2:{x:639,y:223}},{p1:{x:639,y:223},p2:{x:636,y:198}},{p1:{x:636,y:198},p2:{x:640,y:177}},{p1:{x:640,y:177},p2:{x:652,y:177}},{p1:{x:652,y:177},p2:{x:664,y:189}},{p1:{x:664,y:189},p2:{x:665,y:205}},{p1:{x:665,y:205},p2:{x:670,y:226}},{p1:{x:670,y:226},p2:{x:682,y:269}},{p1:{x:682,y:269},p2:{x:683,y:298}},{p1:{x:683,y:298},p2:{x:669,y:334}},{p1:{x:669,y:334},p2:{x:667,y:353}},{p1:{x:667,y:353},p2:{x:652,y:406}},{p1:{x:652,y:406},p2:{x:652,y:433}},{p1:{x:652,y:433},p2:{x:646,y:463}},{p1:{x:646,y:463},p2:{x:636,y:488}},{p1:{x:636,y:488},p2:{x:629,y:504}},{p1:{x:629,y:504},p2:{x:613,y:552}},{p1:{x:613,y:552},p2:{x:610,y:571}},{p1:{x:610,y:571},p2:{x:574,y:617}},{p1:{x:574,y:617},p2:{x:554,y:627}},{p1:{x:554,y:627},p2:{x:504,y:646}},{p1:{x:504,y:646},p2:{x:479,y:650}},{p1:{x:479,y:650},p2:{x:462,y:641}},{p1:{x:462,y:641},p2:{x:456,y:628}},{p1:{x:456,y:628},p2:{x:457,y:611}},{p1:{x:457,y:611},p2:{x:463,y:593}},{p1:{x:463,y:593},p2:{x:476,y:576}},{p1:{x:476,y:576},p2:{x:507,y:552}},{p1:{x:507,y:552},p2:{x:521,y:539}},{p1:{x:521,y:539},p2:{x:529,y:513}},{p1:{x:529,y:513},p2:{x:543,y:469}},{p1:{x:543,y:469},p2:{x:555,y:446}},{p1:{x:555,y:446},p2:{x:568,y:390}},{p1:{x:568,y:390},p2:{x:568,y:351}},{p1:{x:568,y:351},p2:{x:554,y:323}},{p1:{x:554,y:323},p2:{x:524,y:281}},{p1:{x:524,y:281},p2:{x:502,y:262}},{p1:{x:502,y:262},p2:{x:457,y:244}},{p1:{x:457,y:244},p2:{x:436,y:243}},{p1:{x:436,y:243},p2:{x:405,y:250}},{p1:{x:405,y:250},p2:{x:388,y:255}},{p1:{x:388,y:255},p2:{x:372,y:265}},{p1:{x:372,y:265},p2:{x:358,y:281}},{p1:{x:358,y:281},p2:{x:356,y:296}},{p1:{x:356,y:296},p2:{x:354,y:309}},{p1:{x:354,y:309},p2:{x:342,y:329}},{p1:{x:342,y:329},p2:{x:340,y:346}},{p1:{x:340,y:346},p2:{x:340,y:365}},{p1:{x:340,y:365},p2:{x:333,y:384}},{p1:{x:333,y:384},p2:{x:329,y:414}},{p1:{x:329,y:414},p2:{x:329,y:414}},{p1:{x:329,y:414},p2:{x:329,y:426}},{p1:{x:329,y:426},p2:{x:330,y:441}},{p1:{x:330,y:441},p2:{x:323,y:476}},{p1:{x:323,y:476},p2:{x:323,y:491}},{p1:{x:323,y:491},p2:{x:321,y:504}},{p1:{x:321,y:504},p2:{x:314,y:532}},{p1:{x:314,y:532},p2:{x:306,y:544}},{p1:{x:306,y:544},p2:{x:286,y:542}},{p1:{x:286,y:542},p2:{x:257,y:533}},{p1:{x:257,y:533},p2:{x:256,y:524}},{p1:{x:256,y:524},p2:{x:264,y:505}},{p1:{x:264,y:505},p2:{x:275,y:491}},{p1:{x:275,y:491},p2:{x:281,y:479}},{p1:{x:281,y:479},p2:{x:290,y:463}},{p1:{x:290,y:463},p2:{x:297,y:446}},{p1:{x:297,y:446},p2:{x:303,y:430}},{p1:{x:303,y:430},p2:{x:308,y:417}},{p1:{x:308,y:417},p2:{x:313,y:387}},{p1:{x:313,y:387},p2:{x:312,y:361}},{p1:{x:312,y:361},p2:{x:310,y:349}},{p1:{x:310,y:349},p2:{x:308,y:330}},{p1:{x:308,y:330},p2:{x:305,y:324}},{p1:{x:305,y:324},p2:{x:296,y:316}},{p1:{x:296,y:316},p2:{x:279,y:307}},{p1:{x:279,y:307},p2:{x:256,y:303}},{p1:{x:256,y:303},p2:{x:231,y:301}},{p1:{x:231,y:301},p2:{x:188,y:304}},{p1:{x:188,y:304},p2:{x:174,y:318}},{p1:{x:174,y:318},p2:{x:167,y:340}},{p1:{x:167,y:340},p2:{x:167,y:357}},{p1:{x:167,y:357},p2:{x:150,y:379}},{p1:{x:150,y:379},p2:{x:133,y:386}},{p1:{x:133,y:386},p2:{x:112,y:386}},{p1:{x:112,y:386},p2:{x:99,y:381}},{p1:{x:99,y:381},p2:{x:88,y:362}},{p1:{x:88,y:362},p2:{x:85,y:341}},{p1:{x:85,y:341},p2:{x:83,y:324}},{p1:{x:83,y:324},p2:{x:87,y:313}},{p1:{x:87,y:313},p2:{x:99,y:303}},{p1:{x:99,y:303},p2:{x:119,y:293}},{p1:{x:119,y:293},p2:{x:136,y:285}},{p1:{x:136,y:285},p2:{x:187,y:273}},{p1:{x:187,y:273},p2:{x:202,y:270}},{p1:{x:202,y:270},p2:{x:227,y:259}},{p1:{x:227,y:259},p2:{x:237,y:245}},{p1:{x:237,y:245},p2:{x:245,y:229}},{p1:{x:245,y:229},p2:{x:249,y:214}},{p1:{x:249,y:214},p2:{x:249,y:199}},{p1:{x:249,y:199},p2:{x:249,y:186}},{p1:{x:249,y:186},p2:{x:243,y:163}},{p1:{x:243,y:163},p2:{x:235,y:148}},{p1:{x:235,y:148},p2:{x:225,y:140}},{p1:{x:225,y:140},p2:{x:221,y:124}},{p1:{x:221,y:124},p2:{x:216,y:112}},{p1:{x:216,y:112},p2:{x:221,y:90}},{p1:{x:221,y:90},p2:{x:211,y:76}},{p1:{x:211,y:76},p2:{x:166,y:76}},{p1:{x:166,y:76},p2:{x:88,y:83}},{p1:{x:88,y:83},p2:{x:86,y:91}},{p1:{x:86,y:91},p2:{x:78,y:107}}],rewards:[{x:182,y:141},{x:220,y:191},{x:203,y:240},{x:145,y:262},{x:85,y:277},{x:61,y:328},{x:63,y:371},{x:101,y:402},{x:159,y:398},{x:192,y:349},{x:234,y:323},{x:278,y:343},{x:284,y:378},{x:281,y:414},{x:270,y:455},{x:232,y:496},{x:236,y:540},{x:277,y:560},{x:324,y:556},{x:341,y:521},{x:343,y:462},{x:349,y:411},{x:356,y:362},{x:370,y:322},{x:397,y:292},{x:430,y:277},{x:468,y:285},{x:494,y:302},{x:520,y:342},{x:529,y:389},{x:518,y:432},{x:508,y:472},{x:499,y:504},{x:463,y:531},{x:446,y:555},{x:430,y:589},{x:418,y:622},{x:417,y:663},{x:445,y:668},{x:475,y:668},{x:515,y:664},{x:565,y:644},{x:593,y:622},{x:610,y:594},{x:647,y:553},{x:663,y:497},{x:678,y:448},{x:690,y:403},{x:704,y:333},{x:705,y:267},{x:703,y:237},{x:690,y:195},{x:668,y:157},{x:601,y:144},{x:597,y:194}]},C={walls:[{p1:{x:78,y:86},p2:{x:75,y:156}},{p1:{x:75,y:156},p2:{x:149,y:162}},{p1:{x:149,y:162},p2:{x:214,y:176}},{p1:{x:214,y:176},p2:{x:220,y:195}},{p1:{x:220,y:195},p2:{x:221,y:211}},{p1:{x:221,y:211},p2:{x:212,y:223}},{p1:{x:212,y:223},p2:{x:171,y:229}},{p1:{x:171,y:229},p2:{x:149,y:229}},{p1:{x:149,y:229},p2:{x:117,y:229}},{p1:{x:117,y:229},p2:{x:68,y:228}},{p1:{x:68,y:228},p2:{x:53,y:242}},{p1:{x:53,y:242},p2:{x:44,y:283}},{p1:{x:44,y:283},p2:{x:44,y:316}},{p1:{x:44,y:316},p2:{x:55,y:338}},{p1:{x:55,y:338},p2:{x:71,y:357}},{p1:{x:71,y:357},p2:{x:88,y:357}},{p1:{x:88,y:357},p2:{x:134,y:356}},{p1:{x:134,y:356},p2:{x:174,y:356}},{p1:{x:174,y:356},p2:{x:229,y:349}},{p1:{x:229,y:349},p2:{x:274,y:356}},{p1:{x:274,y:356},p2:{x:304,y:398}},{p1:{x:304,y:398},p2:{x:301,y:419}},{p1:{x:301,y:419},p2:{x:280,y:436}},{p1:{x:280,y:436},p2:{x:224,y:443}},{p1:{x:224,y:443},p2:{x:155,y:444}},{p1:{x:155,y:444},p2:{x:107,y:452}},{p1:{x:107,y:452},p2:{x:77,y:463}},{p1:{x:77,y:463},p2:{x:58,y:506}},{p1:{x:58,y:506},p2:{x:40,y:576}},{p1:{x:40,y:576},p2:{x:47,y:593}},{p1:{x:47,y:593},p2:{x:75,y:633}},{p1:{x:75,y:633},p2:{x:111,y:650}},{p1:{x:111,y:650},p2:{x:149,y:657}},{p1:{x:149,y:657},p2:{x:196,y:664}},{p1:{x:196,y:664},p2:{x:251,y:665}},{p1:{x:251,y:665},p2:{x:295,y:665}},{p1:{x:295,y:665},p2:{x:318,y:662}},{p1:{x:318,y:662},p2:{x:331,y:656}},{p1:{x:331,y:656},p2:{x:349,y:643}},{p1:{x:349,y:643},p2:{x:370,y:631}},{p1:{x:370,y:631},p2:{x:381,y:614}},{p1:{x:381,y:614},p2:{x:394,y:582}},{p1:{x:394,y:582},p2:{x:397,y:563}},{p1:{x:397,y:563},p2:{x:392,y:534}},{p1:{x:392,y:534},p2:{x:391,y:507}},{p1:{x:391,y:507},p2:{x:401,y:445}},{p1:{x:401,y:445},p2:{x:426,y:429}},{p1:{x:426,y:429},p2:{x:445,y:435}},{p1:{x:445,y:435},p2:{x:461,y:497}},{p1:{x:461,y:497},p2:{x:467,y:536}},{p1:{x:467,y:536},p2:{x:464,y:567}},{p1:{x:464,y:567},p2:{x:463,y:580}},{p1:{x:463,y:580},p2:{x:455,y:601}},{p1:{x:455,y:601},p2:{x:452,y:613}},{p1:{x:452,y:613},p2:{x:438,y:637}},{p1:{x:438,y:637},p2:{x:428,y:667}},{p1:{x:428,y:667},p2:{x:424,y:685}},{p1:{x:424,y:685},p2:{x:429,y:730}},{p1:{x:429,y:730},p2:{x:435,y:736}},{p1:{x:435,y:736},p2:{x:500,y:765}},{p1:{x:500,y:765},p2:{x:611,y:775}},{p1:{x:611,y:775},p2:{x:677,y:760}},{p1:{x:677,y:760},p2:{x:706,y:735}},{p1:{x:706,y:735},p2:{x:730,y:706}},{p1:{x:730,y:706},p2:{x:744,y:678}},{p1:{x:744,y:678},p2:{x:757,y:642}},{p1:{x:757,y:642},p2:{x:758,y:628}},{p1:{x:758,y:628},p2:{x:731,y:603}},{p1:{x:731,y:603},p2:{x:684,y:609}},{p1:{x:684,y:609},p2:{x:685,y:642}},{p1:{x:685,y:642},p2:{x:675,y:672}},{p1:{x:675,y:672},p2:{x:650,y:705}},{p1:{x:650,y:705},p2:{x:634,y:722}},{p1:{x:634,y:722},p2:{x:573,y:724}},{p1:{x:573,y:724},p2:{x:527,y:700}},{p1:{x:527,y:700},p2:{x:507,y:687}},{p1:{x:507,y:687},p2:{x:512,y:647}},{p1:{x:512,y:647},p2:{x:518,y:628}},{p1:{x:518,y:628},p2:{x:524,y:589}},{p1:{x:524,y:589},p2:{x:528,y:570}},{p1:{x:528,y:570},p2:{x:528,y:539}},{p1:{x:528,y:539},p2:{x:529,y:513}},{p1:{x:529,y:513},p2:{x:525,y:487}},{p1:{x:525,y:487},p2:{x:521,y:453}},{p1:{x:521,y:453},p2:{x:507,y:421}},{p1:{x:507,y:421},p2:{x:493,y:399}},{p1:{x:493,y:399},p2:{x:451,y:387}},{p1:{x:451,y:387},p2:{x:429,y:383}},{p1:{x:429,y:383},p2:{x:414,y:393}},{p1:{x:414,y:393},p2:{x:386,y:404}},{p1:{x:386,y:404},p2:{x:376,y:429}},{p1:{x:376,y:429},p2:{x:370,y:451}},{p1:{x:370,y:451},p2:{x:355,y:495}},{p1:{x:355,y:495},p2:{x:346,y:517}},{p1:{x:346,y:517},p2:{x:335,y:543}},{p1:{x:335,y:543},p2:{x:320,y:558}},{p1:{x:320,y:558},p2:{x:286,y:579}},{p1:{x:286,y:579},p2:{x:261,y:590}},{p1:{x:261,y:590},p2:{x:218,y:597}},{p1:{x:218,y:597},p2:{x:168,y:594}},{p1:{x:168,y:594},p2:{x:116,y:575}},{p1:{x:116,y:575},p2:{x:115,y:541}},{p1:{x:115,y:541},p2:{x:125,y:531}},{p1:{x:125,y:531},p2:{x:181,y:510}},{p1:{x:181,y:510},p2:{x:218,y:507}},{p1:{x:218,y:507},p2:{x:246,y:506}},{p1:{x:246,y:506},p2:{x:263,y:494}},{p1:{x:263,y:494},p2:{x:278,y:488}},{p1:{x:278,y:488},p2:{x:327,y:470}},{p1:{x:327,y:470},p2:{x:351,y:444}},{p1:{x:351,y:444},p2:{x:362,y:408}},{p1:{x:362,y:408},p2:{x:377,y:355}},{p1:{x:377,y:355},p2:{x:372,y:344}},{p1:{x:372,y:344},p2:{x:364,y:327}},{p1:{x:364,y:327},p2:{x:334,y:308}},{p1:{x:334,y:308},p2:{x:270,y:296}},{p1:{x:270,y:296},p2:{x:216,y:301}},{p1:{x:216,y:301},p2:{x:206,y:305}},{p1:{x:206,y:305},p2:{x:171,y:308}},{p1:{x:171,y:308},p2:{x:148,y:305}},{p1:{x:148,y:305},p2:{x:151,y:299}},{p1:{x:151,y:299},p2:{x:176,y:280}},{p1:{x:176,y:280},p2:{x:221,y:278}},{p1:{x:221,y:278},p2:{x:286,y:271}},{p1:{x:286,y:271},p2:{x:300,y:270}},{p1:{x:300,y:270},p2:{x:331,y:253}},{p1:{x:331,y:253},p2:{x:334,y:239}},{p1:{x:334,y:239},p2:{x:331,y:212}},{p1:{x:331,y:212},p2:{x:324,y:189}},{p1:{x:324,y:189},p2:{x:317,y:170}},{p1:{x:317,y:170},p2:{x:309,y:165}},{p1:{x:309,y:165},p2:{x:284,y:157}},{p1:{x:284,y:157},p2:{x:261,y:152}},{p1:{x:261,y:152},p2:{x:216,y:138}},{p1:{x:216,y:138},p2:{x:214,y:124}},{p1:{x:214,y:124},p2:{x:214,y:93}},{p1:{x:214,y:93},p2:{x:86,y:84}},{p1:{x:86,y:84},p2:{x:69,y:97}}],rewards:[{x:185,y:147},{x:243,y:176},{x:250,y:238},{x:186,y:260},{x:134,y:264},{x:111,y:307},{x:158,y:330},{x:232,y:326},{x:292,y:330},{x:321,y:353},{x:331,y:403},{x:313,y:450},{x:246,y:476},{x:171,y:489},{x:119,y:496},{x:96,y:519},{x:83,y:551},{x:93,y:598},{x:127,y:616},{x:197,y:624},{x:239,y:625},{x:303,y:618},{x:337,y:594},{x:355,y:561},{x:370,y:511},{x:376,y:473},{x:385,y:439},{x:418,y:410},{x:470,y:431},{x:485,y:452},{x:491,y:489},{x:490,y:532},{x:497,y:573},{x:491,y:612},{x:468,y:649},{x:468,y:695},{x:495,y:718},{x:538,y:736},{x:563,y:736},{x:589,y:740},{x:623,y:740},{x:653,y:726},{x:676,y:711},{x:706,y:664},{x:708,y:657}]},D={walls:[{p1:{x:91,y:52},p2:{x:134,y:50}},{p1:{x:134,y:50},p2:{x:193,y:50}},{p1:{x:193,y:50},p2:{x:296,y:57}},{p1:{x:296,y:57},p2:{x:337,y:59}},{p1:{x:337,y:59},p2:{x:446,y:62}},{p1:{x:446,y:62},p2:{x:482,y:64}},{p1:{x:482,y:64},p2:{x:554,y:86}},{p1:{x:554,y:86},p2:{x:614,y:86}},{p1:{x:614,y:86},p2:{x:723,y:129}},{p1:{x:723,y:129},p2:{x:743,y:152}},{p1:{x:743,y:152},p2:{x:757,y:241}},{p1:{x:757,y:241},p2:{x:757,y:360}},{p1:{x:757,y:360},p2:{x:757,y:402}},{p1:{x:757,y:402},p2:{x:757,y:450}},{p1:{x:757,y:450},p2:{x:747,y:536}},{p1:{x:747,y:536},p2:{x:729,y:621}},{p1:{x:729,y:621},p2:{x:725,y:697}},{p1:{x:725,y:697},p2:{x:697,y:724}},{p1:{x:697,y:724},p2:{x:590,y:748}},{p1:{x:590,y:748},p2:{x:506,y:758}},{p1:{x:506,y:758},p2:{x:371,y:760}},{p1:{x:371,y:760},p2:{x:256,y:766}},{p1:{x:256,y:766},p2:{x:188,y:769}},{p1:{x:188,y:769},p2:{x:118,y:756}},{p1:{x:118,y:756},p2:{x:48,y:734}},{p1:{x:48,y:734},p2:{x:25,y:704}},{p1:{x:25,y:704},p2:{x:25,y:637}},{p1:{x:25,y:637},p2:{x:27,y:577}},{p1:{x:27,y:577},p2:{x:33,y:529}},{p1:{x:33,y:529},p2:{x:32,y:449}},{p1:{x:32,y:449},p2:{x:43,y:407}},{p1:{x:43,y:407},p2:{x:59,y:374}},{p1:{x:59,y:374},p2:{x:57,y:311}},{p1:{x:57,y:311},p2:{x:61,y:271}},{p1:{x:61,y:271},p2:{x:61,y:190}},{p1:{x:61,y:190},p2:{x:61,y:137}},{p1:{x:61,y:137},p2:{x:68,y:92}},{p1:{x:68,y:92},p2:{x:79,y:61}},{p1:{x:79,y:61},p2:{x:93,y:53}},{p1:{x:162,y:112},p2:{x:217,y:110}},{p1:{x:217,y:110},p2:{x:258,y:113}},{p1:{x:258,y:113},p2:{x:326,y:117}},{p1:{x:326,y:117},p2:{x:428,y:128}},{p1:{x:428,y:128},p2:{x:501,y:148}},{p1:{x:501,y:148},p2:{x:539,y:157}},{p1:{x:539,y:157},p2:{x:620,y:184}},{p1:{x:620,y:184},p2:{x:669,y:222}},{p1:{x:669,y:222},p2:{x:697,y:262}},{p1:{x:697,y:262},p2:{x:697,y:300}},{p1:{x:697,y:300},p2:{x:693,y:383}},{p1:{x:693,y:383},p2:{x:688,y:460}},{p1:{x:688,y:460},p2:{x:682,y:504}},{p1:{x:682,y:504},p2:{x:677,y:526}},{p1:{x:677,y:526},p2:{x:676,y:557}},{p1:{x:676,y:557},p2:{x:660,y:628}},{p1:{x:660,y:628},p2:{x:642,y:649}},{p1:{x:642,y:649},p2:{x:629,y:659}},{p1:{x:629,y:659},p2:{x:585,y:672}},{p1:{x:585,y:672},p2:{x:525,y:684}},{p1:{x:525,y:684},p2:{x:386,y:703}},{p1:{x:386,y:703},p2:{x:296,y:716}},{p1:{x:296,y:716},p2:{x:216,y:718}},{p1:{x:216,y:718},p2:{x:144,y:709}},{p1:{x:144,y:709},p2:{x:94,y:691}},{p1:{x:94,y:691},p2:{x:86,y:670}},{p1:{x:86,y:670},p2:{x:94,y:636}},{p1:{x:94,y:636},p2:{x:123,y:591}},{p1:{x:123,y:591},p2:{x:136,y:556}},{p1:{x:136,y:556},p2:{x:140,y:506}},{p1:{x:140,y:506},p2:{x:143,y:438}},{p1:{x:143,y:438},p2:{x:143,y:393}},{p1:{x:143,y:393},p2:{x:155,y:302}},{p1:{x:155,y:302},p2:{x:158,y:272}},{p1:{x:158,y:272},p2:{x:157,y:206}},{p1:{x:157,y:206},p2:{x:157,y:168}},{p1:{x:157,y:168},p2:{x:157,y:133}},{p1:{x:157,y:133},p2:{x:161,y:119}},{p1:{x:161,y:119},p2:{x:166,y:110}}],rewards:[{x:224,y:82},{x:349,y:85},{x:492,y:99},{x:608,y:130},{x:693,y:185},{x:726,y:379},{x:708,y:565},{x:668,y:673},{x:474,y:728},{x:293,y:748},{x:121,y:733},{x:47,y:652},{x:79,y:510},{x:106,y:388},{x:110,y:265},{x:114,y:142}]},F=[R,q,C,D],T=100,G=200,z=Math.PI/40,u=70,H=.15;class E{constructor(y,x={x:100,y:100},p={x:1,y:0},t=G,s=[{angle:-Math.PI/3,size:u},{angle:0,size:u*1.5},{angle:Math.PI/3,size:u}],n=20,r=10){this.brain=y,this.center=x,this.direction=p,this.speed=t,this.sensors=s,this.width=n,this.height=r}draw(y){y.save(),y.translate(this.center.x,this.center.y),y.rotate(Math.atan2(this.direction.y,this.direction.x)),y.beginPath(),y.rect(-this.width/2,-this.height/2,this.width,this.height),y.stroke(),y.restore()}steer(y){const x=y==="left"?-z:z,p=this.direction.x*Math.cos(x)-this.direction.y*Math.sin(x),t=this.direction.x*Math.sin(x)+this.direction.y*Math.cos(x);this.direction.x=p,this.direction.y=t}update(y){this.center.x+=this.direction.x*this.speed*y,this.center.y+=this.direction.y*this.speed*y}think(y){const[x]=this.brain.forward(y);x<-.2?this.steer("left"):x>.2&&this.steer("right")}sensorsLines(){return this.sensors.map(y=>({p1:this.center,p2:{x:this.center.x+y.size*Math.cos(y.angle+Math.atan2(this.direction.y,this.direction.x)),y:this.center.y+y.size*Math.sin(y.angle+Math.atan2(this.direction.y,this.direction.x))}}))}shapeLines(){const y=this.width/2,x=this.height/2;return[{p1:{x:-y,y:-x},p2:{x:y,y:-x}},{p1:{x:y,y:-x},p2:{x:y,y:x}},{p1:{x:y,y:x},p2:{x:-y,y:x}},{p1:{x:-y,y:x},p2:{x:-y,y:-x}}].map(p=>({p1:{x:this.center.x+p.p1.x*Math.cos(Math.atan2(this.direction.y,this.direction.x))-p.p1.y*Math.sin(Math.atan2(this.direction.y,this.direction.x)),y:this.center.y+p.p1.x*Math.sin(Math.atan2(this.direction.y,this.direction.x))+p.p1.y*Math.cos(Math.atan2(this.direction.y,this.direction.x))},p2:{x:this.center.x+p.p2.x*Math.cos(Math.atan2(this.direction.y,this.direction.x))-p.p2.y*Math.sin(Math.atan2(this.direction.y,this.direction.x)),y:this.center.y+p.p2.x*Math.sin(Math.atan2(this.direction.y,this.direction.x))+p.p2.y*Math.cos(Math.atan2(this.direction.y,this.direction.x))}}))}}const B=()=>{const e=document.getElementById("main-canvas"),y=e.getContext("2d"),x=F[1];let p=Array.from({length:T}).map(()=>new E(f.fromShape([3,10,5,1]))),t=0,s=performance.now();const n=()=>{const r=performance.now(),l=(r-s)/1e3;s=r,y.clearRect(0,0,e.width,e.height),x.walls.forEach(i=>M(y,i));const h=p.map(i=>{const o=i.sensorsLines(),d=i.shapeLines();d.forEach(a=>M(y,a));const S=o.map(a=>x.walls.map(c=>A(a,c)).filter(k).reduce((c,w)=>c?g(i.center,w)<g(i.center,c)?w:c:w,null)).map(a=>a===null?0:1-g(i.center,a)/u);return I(S,o).forEach(([a,c])=>M(y,c,`rgba(255,0,0,${a})`)),i.think(S),i.update(l),d.some(a=>x.walls.some(c=>A(a,c)!=null))});p.length===h.filter(i=>i).length?(p=Array.from({length:T}).map(()=>new E(p[0].brain.mutate(H))).concat([new E(p[0].brain.clone())]),document.getElementById("epoch").innerText=(++t).toString()):p=p.filter((i,o)=>!h[o]),requestAnimationFrame(n)};n()};B();