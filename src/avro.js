/*! JS Avro Phonetic v1.0 http://omicronlab.com | https://raw.github.com/torifat/jsAvroPhonetic/master/MPL-1.1.txt */
var OmicronLab={Avro:{}};
OmicronLab.Avro.Phonetic={parse:function(a){for(var a=this.fixString(a),f="",c=0;c<a.length;++c){for(var e=c,g=c+1,h=e-1,k=!1,h=0;h<this.data.patterns.length;++h){var i=this.data.patterns[h],g=c+i.find.length;if(g<=a.length&&a.substring(e,g)==i.find){h=e-1;if(i.rules)for(var l=0;l<i.rules.length;++l){for(var m=i.rules[l],j=!0,d=0,n=0;n<m.matches.length;++n){var b=m.matches[n],d=b.type==="suffix"?g:h;b.negative=!0;if(b.scope.charAt(0)==="!")b.negative=!1,b.scope=b.scope.substring(1);if(b.scope==="punctuation"){if(!(d<
0&&b.type==="prefix"||d>=a.length&&b.type==="suffix"||this.isPunctuation(a.charAt(d)))^b.negative){j=!1;break}}else if(b.scope==="vowel"){if(!((d>=0&&b.type==="prefix"||d<a.length&&b.type==="suffix")&&this.isVowel(a.charAt(d)))^b.negative){j=!1;break}}else if(b.scope==="consonant"){if(!((d>=0&&b.type==="prefix"||d<a.length&&b.type==="suffix")&&this.isConsonant(a.charAt(d)))^b.negative){j=!1;break}}else if(b.scope==="exact"){var o;b.type==="suffix"?(d=g,o=g+b.value.length):(d=e-b.value.length,o=e);
if(!this.isExact(b.value,a,d,o,b.negative)){j=!1;break}}}if(j){f+=m.replace;c=g-1;k=!0;break}}if(k==!0)break;f+=i.replace;c=g-1;k=!0;break}}k||(f+=a.charAt(c))}return f},fixString:function(a){for(var f="",c=0;c<a.length;++c){var e=a.charAt(c);f+=this.isCaseSensitive(e)?e:e.toLowerCase()}return f},isVowel:function(a){return this.data.vowel.indexOf(a.toLowerCase())>=0},isConsonant:function(a){return this.data.consonant.indexOf(a.toLowerCase())>=0},isPunctuation:function(a){return!(this.isVowel(a)||
this.isConsonant(a))},isExact:function(a,f,c,e,g){return(c>=0&&e<f.length&&f.substring(c,e)===a)^g},isCaseSensitive:function(a){return this.data.casesensitive.indexOf(a.toLowerCase())>=0},data:{patterns:[{find:"bhl",replace:"\u09ad\u09cd\u09b2"},{find:"psh",replace:"\u09aa\u09b6"},{find:"bj",replace:"\u09ac\u09cd\u099c"},{find:"bd",replace:"\u09ac\u09cd\u09a6"},{find:"bb",replace:"\u09ac\u09cd\u09ac"},{find:"bl",replace:"\u09ac\u09cd\u09b2"},{find:"bh",replace:"\u09ad"},{find:"vl",replace:"\u09ad\u09cd\u09b2"},
{find:"b",replace:"\u09ac"},{find:"v",replace:"\u09ad"},{find:"cNG",replace:"\u099a\u09cd\u099e"},{find:"cch",replace:"\u099a\u09cd\u099b"},{find:"cc",replace:"\u099a\u09cd\u099a"},{find:"ch",replace:"\u099b"},{find:"c",replace:"\u099a"},{find:"dhn",replace:"\u09a7\u09cd\u09a8"},{find:"dhm",replace:"\u09a7\u09cd\u09ae"},{find:"dgh",replace:"\u09a6\u09cd\u0998"},{find:"ddh",replace:"\u09a6\u09cd\u09a7"},{find:"dbh",replace:"\u09a6\u09cd\u09ad"},{find:"dv",replace:"\u09a6\u09cd\u09ad"},{find:"dm",replace:"\u09a6\u09cd\u09ae"},
{find:"DD",replace:"\u09a1\u09cd\u09a1"},{find:"Dh",replace:"\u09a2"},{find:"dh",replace:"\u09a7"},{find:"dg",replace:"\u09a6\u09cd\u0997"},{find:"dd",replace:"\u09a6\u09cd\u09a6"},{find:"D",replace:"\u09a1"},{find:"d",replace:"\u09a6"},{find:"...",replace:"..."},{find:".`",replace:"."},{find:"..",replace:"\u0964\u0964"},{find:".",replace:"\u0964"},{find:"ghn",replace:"\u0998\u09cd\u09a8"},{find:"Ghn",replace:"\u0998\u09cd\u09a8"},{find:"gdh",replace:"\u0997\u09cd\u09a7"},{find:"Gdh",replace:"\u0997\u09cd\u09a7"},
{find:"gN",replace:"\u0997\u09cd\u09a3"},{find:"GN",replace:"\u0997\u09cd\u09a3"},{find:"gn",replace:"\u0997\u09cd\u09a8"},{find:"Gn",replace:"\u0997\u09cd\u09a8"},{find:"gm",replace:"\u0997\u09cd\u09ae"},{find:"Gm",replace:"\u0997\u09cd\u09ae"},{find:"gl",replace:"\u0997\u09cd\u09b2"},{find:"Gl",replace:"\u0997\u09cd\u09b2"},{find:"gg",replace:"\u099c\u09cd\u099e"},{find:"GG",replace:"\u099c\u09cd\u099e"},{find:"Gg",replace:"\u099c\u09cd\u099e"},{find:"gG",replace:"\u099c\u09cd\u099e"},{find:"gh",
replace:"\u0998"},{find:"Gh",replace:"\u0998"},{find:"g",replace:"\u0997"},{find:"G",replace:"\u0997"},{find:"hN",replace:"\u09b9\u09cd\u09a3"},{find:"hn",replace:"\u09b9\u09cd\u09a8"},{find:"hm",replace:"\u09b9\u09cd\u09ae"},{find:"hl",replace:"\u09b9\u09cd\u09b2"},{find:"h",replace:"\u09b9"},{find:"jjh",replace:"\u099c\u09cd\u099d"},{find:"jNG",replace:"\u099c\u09cd\u099e"},{find:"jh",replace:"\u099d"},{find:"jj",replace:"\u099c\u09cd\u099c"},{find:"j",replace:"\u099c"},{find:"J",replace:"\u099c"},
{find:"kkhN",replace:"\u0995\u09cd\u09b7\u09cd\u09a3"},{find:"kShN",replace:"\u0995\u09cd\u09b7\u09cd\u09a3"},{find:"kkhm",replace:"\u0995\u09cd\u09b7\u09cd\u09ae"},{find:"kShm",replace:"\u0995\u09cd\u09b7\u09cd\u09ae"},{find:"kxN",replace:"\u0995\u09cd\u09b7\u09cd\u09a3"},{find:"kxm",replace:"\u0995\u09cd\u09b7\u09cd\u09ae"},{find:"kkh",replace:"\u0995\u09cd\u09b7"},{find:"kSh",replace:"\u0995\u09cd\u09b7"},{find:"ksh",replace:"\u0995\u09b6"},{find:"kx",replace:"\u0995\u09cd\u09b7"},{find:"kk",replace:"\u0995\u09cd\u0995"},
{find:"kT",replace:"\u0995\u09cd\u099f"},{find:"kt",replace:"\u0995\u09cd\u09a4"},{find:"kl",replace:"\u0995\u09cd\u09b2"},{find:"ks",replace:"\u0995\u09cd\u09b8"},{find:"kh",replace:"\u0996"},{find:"k",replace:"\u0995"},{find:"lbh",replace:"\u09b2\u09cd\u09ad"},{find:"ldh",replace:"\u09b2\u09cd\u09a7"},{find:"lkh",replace:"\u09b2\u0996"},{find:"lgh",replace:"\u09b2\u0998"},{find:"lph",replace:"\u09b2\u09ab"},{find:"lk",replace:"\u09b2\u09cd\u0995"},{find:"lg",replace:"\u09b2\u09cd\u0997"},{find:"lT",
replace:"\u09b2\u09cd\u099f"},{find:"lD",replace:"\u09b2\u09cd\u09a1"},{find:"lp",replace:"\u09b2\u09cd\u09aa"},{find:"lv",replace:"\u09b2\u09cd\u09ad"},{find:"lm",replace:"\u09b2\u09cd\u09ae"},{find:"ll",replace:"\u09b2\u09cd\u09b2"},{find:"lb",replace:"\u09b2\u09cd\u09ac"},{find:"l",replace:"\u09b2"},{find:"mth",replace:"\u09ae\u09cd\u09a5"},{find:"mph",replace:"\u09ae\u09cd\u09ab"},{find:"mbh",replace:"\u09ae\u09cd\u09ad"},{find:"mpl",replace:"\u09ae\u09aa\u09cd\u09b2"},{find:"mn",replace:"\u09ae\u09cd\u09a8"},
{find:"mp",replace:"\u09ae\u09cd\u09aa"},{find:"mv",replace:"\u09ae\u09cd\u09ad"},{find:"mm",replace:"\u09ae\u09cd\u09ae"},{find:"ml",replace:"\u09ae\u09cd\u09b2"},{find:"mb",replace:"\u09ae\u09cd\u09ac"},{find:"mf",replace:"\u09ae\u09cd\u09ab"},{find:"m",replace:"\u09ae"},{find:"0",replace:"\u09e6"},{find:"1",replace:"\u09e7"},{find:"2",replace:"\u09e8"},{find:"3",replace:"\u09e9"},{find:"4",replace:"\u09ea"},{find:"5",replace:"\u09eb"},{find:"6",replace:"\u09ec"},{find:"7",replace:"\u09ed"},{find:"8",
replace:"\u09ee"},{find:"9",replace:"\u09ef"},{find:"NgkSh",replace:"\u0999\u09cd\u0995\u09cd\u09b7"},{find:"Ngkkh",replace:"\u0999\u09cd\u0995\u09cd\u09b7"},{find:"NGch",replace:"\u099e\u09cd\u099b"},{find:"Nggh",replace:"\u0999\u09cd\u0998"},{find:"Ngkh",replace:"\u0999\u09cd\u0996"},{find:"NGjh",replace:"\u099e\u09cd\u099d"},{find:"ngOU",replace:"\u0999\u09cd\u0997\u09cc"},{find:"ngOI",replace:"\u0999\u09cd\u0997\u09c8"},{find:"Ngkx",replace:"\u0999\u09cd\u0995\u09cd\u09b7"},{find:"NGc",replace:"\u099e\u09cd\u099a"},
{find:"nch",replace:"\u099e\u09cd\u099b"},{find:"njh",replace:"\u099e\u09cd\u099d"},{find:"ngh",replace:"\u0999\u09cd\u0998"},{find:"Ngk",replace:"\u0999\u09cd\u0995"},{find:"Ngx",replace:"\u0999\u09cd\u09b7"},{find:"Ngg",replace:"\u0999\u09cd\u0997"},{find:"Ngm",replace:"\u0999\u09cd\u09ae"},{find:"NGj",replace:"\u099e\u09cd\u099c"},{find:"ndh",replace:"\u09a8\u09cd\u09a7"},{find:"nTh",replace:"\u09a8\u09cd\u09a0"},{find:"NTh",replace:"\u09a3\u09cd\u09a0"},{find:"nth",replace:"\u09a8\u09cd\u09a5"},
{find:"nkh",replace:"\u0999\u09cd\u0996"},{find:"ngo",replace:"\u0999\u09cd\u0997"},{find:"nga",replace:"\u0999\u09cd\u0997\u09be"},{find:"ngi",replace:"\u0999\u09cd\u0997\u09bf"},{find:"ngI",replace:"\u0999\u09cd\u0997\u09c0"},{find:"ngu",replace:"\u0999\u09cd\u0997\u09c1"},{find:"ngU",replace:"\u0999\u09cd\u0997\u09c2"},{find:"nge",replace:"\u0999\u09cd\u0997\u09c7"},{find:"ngO",replace:"\u0999\u09cd\u0997\u09cb"},{find:"NDh",replace:"\u09a3\u09cd\u09a2"},{find:"nsh",replace:"\u09a8\u09b6"},{find:"Ngr",
replace:"\u0999\u09b0"},{find:"NGr",replace:"\u099e\u09b0"},{find:"ngr",replace:"\u0982\u09b0"},{find:"nj",replace:"\u099e\u09cd\u099c"},{find:"Ng",replace:"\u0999"},{find:"NG",replace:"\u099e"},{find:"nk",replace:"\u0999\u09cd\u0995"},{find:"ng",replace:"\u0982"},{find:"nn",replace:"\u09a8\u09cd\u09a8"},{find:"NN",replace:"\u09a3\u09cd\u09a3"},{find:"Nn",replace:"\u09a3\u09cd\u09a8"},{find:"nm",replace:"\u09a8\u09cd\u09ae"},{find:"Nm",replace:"\u09a3\u09cd\u09ae"},{find:"nd",replace:"\u09a8\u09cd\u09a6"},
{find:"nT",replace:"\u09a8\u09cd\u099f"},{find:"NT",replace:"\u09a3\u09cd\u099f"},{find:"nD",replace:"\u09a8\u09cd\u09a1"},{find:"ND",replace:"\u09a3\u09cd\u09a1"},{find:"nt",replace:"\u09a8\u09cd\u09a4"},{find:"ns",replace:"\u09a8\u09cd\u09b8"},{find:"nc",replace:"\u099e\u09cd\u099a"},{find:"n",replace:"\u09a8"},{find:"N",replace:"\u09a3"},{find:"OI`",replace:"\u09c8"},{find:"OU`",replace:"\u09cc"},{find:"O`",replace:"\u09cb"},{find:"OI",replace:"\u09c8",rules:[{matches:[{type:"prefix",scope:"!consonant",
value:""}],replace:"\u0990"},{matches:[{type:"prefix",scope:"punctuation",value:""}],replace:"\u0990"}]},{find:"OU",replace:"\u09cc",rules:[{matches:[{type:"prefix",scope:"!consonant",value:""}],replace:"\u0994"},{matches:[{type:"prefix",scope:"punctuation",value:""}],replace:"\u0994"}]},{find:"O",replace:"\u09cb",rules:[{matches:[{type:"prefix",scope:"!consonant",value:""}],replace:"\u0993"},{matches:[{type:"prefix",scope:"punctuation",value:""}],replace:"\u0993"}]},{find:"phl",replace:"\u09ab\u09cd\u09b2"},
{find:"pT",replace:"\u09aa\u09cd\u099f"},{find:"pt",replace:"\u09aa\u09cd\u09a4"},{find:"pn",replace:"\u09aa\u09cd\u09a8"},{find:"pp",replace:"\u09aa\u09cd\u09aa"},{find:"pl",replace:"\u09aa\u09cd\u09b2"},{find:"ps",replace:"\u09aa\u09cd\u09b8"},{find:"ph",replace:"\u09ab"},{find:"fl",replace:"\u09ab\u09cd\u09b2"},{find:"f",replace:"\u09ab"},{find:"p",replace:"\u09aa"},{find:"rri`",replace:"\u09c3"},{find:"rri",replace:"\u09c3",rules:[{matches:[{type:"prefix",scope:"!consonant",value:""}],replace:"\u098b"},
{matches:[{type:"prefix",scope:"punctuation",value:""}],replace:"\u098b"}]},{find:"rrZ",replace:"\u09b0\u09b0\u200d\u09cd\u09af"},{find:"rry",replace:"\u09b0\u09b0\u200d\u09cd\u09af"},{find:"rZ",replace:"\u09b0\u200d\u09cd\u09af",rules:[{matches:[{type:"prefix",scope:"consonant",value:""},{type:"prefix",scope:"!exact",value:"r"},{type:"prefix",scope:"!exact",value:"y"},{type:"prefix",scope:"!exact",value:"w"},{type:"prefix",scope:"!exact",value:"x"}],replace:"\u09cd\u09b0\u09cd\u09af"}]},{find:"ry",
replace:"\u09b0\u200d\u09cd\u09af",rules:[{matches:[{type:"prefix",scope:"consonant",value:""},{type:"prefix",scope:"!exact",value:"r"},{type:"prefix",scope:"!exact",value:"y"},{type:"prefix",scope:"!exact",value:"w"},{type:"prefix",scope:"!exact",value:"x"}],replace:"\u09cd\u09b0\u09cd\u09af"}]},{find:"rr",replace:"\u09b0\u09b0",rules:[{matches:[{type:"prefix",scope:"!consonant",value:""},{type:"suffix",scope:"!vowel",value:""},{type:"suffix",scope:"!exact",value:"r"},{type:"suffix",scope:"punctuation",
value:""}],replace:"\u09b0\u09cd"},{matches:[{type:"prefix",scope:"consonant",value:""},{type:"prefix",scope:"!exact",value:"r"}],replace:"\u09cd\u09b0\u09b0"}]},{find:"Rg",replace:"\u09a1\u09bc\u09cd\u0997"},{find:"Rh",replace:"\u09a2\u09bc"},{find:"R",replace:"\u09a1\u09bc"},{find:"r",replace:"\u09b0",rules:[{matches:[{type:"prefix",scope:"consonant",value:""},{type:"prefix",scope:"!exact",value:"r"},{type:"prefix",scope:"!exact",value:"y"},{type:"prefix",scope:"!exact",value:"w"},{type:"prefix",
scope:"!exact",value:"x"},{type:"prefix",scope:"!exact",value:"Z"}],replace:"\u09cd\u09b0"}]},{find:"shch",replace:"\u09b6\u09cd\u099b"},{find:"ShTh",replace:"\u09b7\u09cd\u09a0"},{find:"Shph",replace:"\u09b7\u09cd\u09ab"},{find:"Sch",replace:"\u09b6\u09cd\u099b"},{find:"skl",replace:"\u09b8\u09cd\u0995\u09cd\u09b2"},{find:"skh",replace:"\u09b8\u09cd\u0996"},{find:"sth",replace:"\u09b8\u09cd\u09a5"},{find:"sph",replace:"\u09b8\u09cd\u09ab"},{find:"shc",replace:"\u09b6\u09cd\u099a"},{find:"sht",replace:"\u09b6\u09cd\u09a4"},
{find:"shn",replace:"\u09b6\u09cd\u09a8"},{find:"shm",replace:"\u09b6\u09cd\u09ae"},{find:"shl",replace:"\u09b6\u09cd\u09b2"},{find:"Shk",replace:"\u09b7\u09cd\u0995"},{find:"ShT",replace:"\u09b7\u09cd\u099f"},{find:"ShN",replace:"\u09b7\u09cd\u09a3"},{find:"Shp",replace:"\u09b7\u09cd\u09aa"},{find:"Shf",replace:"\u09b7\u09cd\u09ab"},{find:"Shm",replace:"\u09b7\u09cd\u09ae"},{find:"spl",replace:"\u09b8\u09cd\u09aa\u09cd\u09b2"},{find:"sk",replace:"\u09b8\u09cd\u0995"},{find:"Sc",replace:"\u09b6\u09cd\u099a"},
{find:"sT",replace:"\u09b8\u09cd\u099f"},{find:"st",replace:"\u09b8\u09cd\u09a4"},{find:"sn",replace:"\u09b8\u09cd\u09a8"},{find:"sp",replace:"\u09b8\u09cd\u09aa"},{find:"sf",replace:"\u09b8\u09cd\u09ab"},{find:"sm",replace:"\u09b8\u09cd\u09ae"},{find:"sl",replace:"\u09b8\u09cd\u09b2"},{find:"sh",replace:"\u09b6"},{find:"Sc",replace:"\u09b6\u09cd\u099a"},{find:"St",replace:"\u09b6\u09cd\u09a4"},{find:"Sn",replace:"\u09b6\u09cd\u09a8"},{find:"Sm",replace:"\u09b6\u09cd\u09ae"},{find:"Sl",replace:"\u09b6\u09cd\u09b2"},
{find:"Sh",replace:"\u09b7"},{find:"s",replace:"\u09b8"},{find:"S",replace:"\u09b6"},{find:"oo`",replace:"\u09c1"},{find:"oo",replace:"\u09c1",rules:[{matches:[{type:"prefix",scope:"!consonant",value:""},{type:"suffix",scope:"!exact",value:"`"}],replace:"\u0989"},{matches:[{type:"prefix",scope:"punctuation",value:""},{type:"suffix",scope:"!exact",value:"`"}],replace:"\u0989"}]},{find:"o`",replace:""},{find:"oZ",replace:"\u0985\u09cd\u09af"},{find:"o",replace:"",rules:[{matches:[{type:"prefix",scope:"vowel",
value:""},{type:"prefix",scope:"!exact",value:"o"}],replace:"\u0993"},{matches:[{type:"prefix",scope:"vowel",value:""},{type:"prefix",scope:"exact",value:"o"}],replace:"\u0985"},{matches:[{type:"prefix",scope:"punctuation",value:""}],replace:"\u0985"}]},{find:"tth",replace:"\u09a4\u09cd\u09a5"},{find:"t``",replace:"\u09ce"},{find:"TT",replace:"\u099f\u09cd\u099f"},{find:"Tm",replace:"\u099f\u09cd\u09ae"},{find:"Th",replace:"\u09a0"},{find:"tn",replace:"\u09a4\u09cd\u09a8"},{find:"tm",replace:"\u09a4\u09cd\u09ae"},
{find:"th",replace:"\u09a5"},{find:"tt",replace:"\u09a4\u09cd\u09a4"},{find:"T",replace:"\u099f"},{find:"t",replace:"\u09a4"},{find:"aZ",replace:"\u0985\u09cd\u09af\u09be"},{find:"AZ",replace:"\u0985\u09cd\u09af\u09be"},{find:"a`",replace:"\u09be"},{find:"A`",replace:"\u09be"},{find:"a",replace:"\u09be",rules:[{matches:[{type:"prefix",scope:"punctuation",value:""},{type:"suffix",scope:"!exact",value:"`"}],replace:"\u0986"},{matches:[{type:"prefix",scope:"!consonant",value:""},{type:"prefix",scope:"!exact",
value:"a"},{type:"suffix",scope:"!exact",value:"`"}],replace:"\u09af\u09bc\u09be"},{matches:[{type:"prefix",scope:"exact",value:"a"},{type:"suffix",scope:"!exact",value:"`"}],replace:"\u0986"}]},{find:"i`",replace:"\u09bf"},{find:"i",replace:"\u09bf",rules:[{matches:[{type:"prefix",scope:"!consonant",value:""},{type:"suffix",scope:"!exact",value:"`"}],replace:"\u0987"},{matches:[{type:"prefix",scope:"punctuation",value:""},{type:"suffix",scope:"!exact",value:"`"}],replace:"\u0987"}]},{find:"I`",replace:"\u09c0"},
{find:"I",replace:"\u09c0",rules:[{matches:[{type:"prefix",scope:"!consonant",value:""},{type:"suffix",scope:"!exact",value:"`"}],replace:"\u0988"},{matches:[{type:"prefix",scope:"punctuation",value:""},{type:"suffix",scope:"!exact",value:"`"}],replace:"\u0988"}]},{find:"u`",replace:"\u09c1"},{find:"u",replace:"\u09c1",rules:[{matches:[{type:"prefix",scope:"!consonant",value:""},{type:"suffix",scope:"!exact",value:"`"}],replace:"\u0989"},{matches:[{type:"prefix",scope:"punctuation",value:""},{type:"suffix",
scope:"!exact",value:"`"}],replace:"\u0989"}]},{find:"U`",replace:"\u09c2"},{find:"U",replace:"\u09c2",rules:[{matches:[{type:"prefix",scope:"!consonant",value:""},{type:"suffix",scope:"!exact",value:"`"}],replace:"\u098a"},{matches:[{type:"prefix",scope:"punctuation",value:""},{type:"suffix",scope:"!exact",value:"`"}],replace:"\u098a"}]},{find:"ee`",replace:"\u09c0"},{find:"ee",replace:"\u09c0",rules:[{matches:[{type:"prefix",scope:"!consonant",value:""},{type:"suffix",scope:"!exact",value:"`"}],
replace:"\u0988"},{matches:[{type:"prefix",scope:"punctuation",value:""},{type:"suffix",scope:"!exact",value:"`"}],replace:"\u0988"}]},{find:"e`",replace:"\u09c7"},{find:"e",replace:"\u09c7",rules:[{matches:[{type:"prefix",scope:"!consonant",value:""},{type:"suffix",scope:"!exact",value:"`"}],replace:"\u098f"},{matches:[{type:"prefix",scope:"punctuation",value:""},{type:"suffix",scope:"!exact",value:"`"}],replace:"\u098f"}]},{find:"z",replace:"\u09af"},{find:"Z",replace:"\u09cd\u09af"},{find:"y",
replace:"\u09cd\u09af",rules:[{matches:[{type:"prefix",scope:"!consonant",value:""},{type:"prefix",scope:"!punctuation",value:""}],replace:"\u09af\u09bc"},{matches:[{type:"prefix",scope:"punctuation",value:""}],replace:"\u0987\u09af\u09bc"}]},{find:"Y",replace:"\u09af\u09bc"},{find:"q",replace:"\u0995"},{find:"w",replace:"\u0993",rules:[{matches:[{type:"prefix",scope:"punctuation",value:""},{type:"suffix",scope:"vowel",value:""}],replace:"\u0993\u09af\u09bc"},{matches:[{type:"prefix",scope:"consonant",
value:""}],replace:"\u09cd\u09ac"}]},{find:"x",replace:"\u0995\u09cd\u09b8",rules:[{matches:[{type:"prefix",scope:"punctuation",value:""}],replace:"\u098f\u0995\u09cd\u09b8"}]},{find:":`",replace:":"},{find:":",replace:"\u0983"},{find:"^`",replace:"^"},{find:"^",replace:"\u0981"},{find:",,",replace:"\u09cd\u200c"},{find:",",replace:","},{find:"$",replace:"\u09f3"},{find:"`",replace:""}],vowel:"aeiou",consonant:"bcdfghjklmnpqrstvwxyz",casesensitive:"oiudgjnrstyz"}};
(function(d){var b={opt:{bn:!0},callback:null,init:function(a,c){a&&d.extend(b.opt,a);if(c&&typeof c==="function")b.callback=c,c(b.opt.bn);return this.each(function(){d(this).bind("keypress.avro",b.keypress)})},destroy:function(){return this.each(function(){d(this).unbind(".avro")})},keypress:function(a){var c=a.keyCode||a.which||a.charCode,e=a.currentTarget||a.target||a.srcElement;if(a.ctrlKey&&c===(d.browser.mozilla?109:13))b.opt.bn=!b.opt.bn,typeof b.callback==="function"&&b.callback(b.opt.bn),
a.preventDefault();b.opt.bn&&(c===32||c===13||c===9)&&b.replace(e)},replace:function(a){var c=b.getCaret(a),e=b.findLast(a,c),d=OmicronLab.Avro.Phonetic.parse(a.value.substring(e,c));document.selection?(a=document.selection.createRange(),a.moveStart("character",-1*Math.abs(c-e)),a.text=d,a.collapse(!0)):(a.value=a.value.substring(0,e)+d+a.value.substring(c),a.selectionStart=a.selectionEnd=c-(Math.abs(c-e)-d.length))},findLast:function(a,c){for(var b=c-1;a.value.charAt(b)!==" "&&b>0;)b--;return b},
getCaret:function(a){if(a.selectionStart)return a.selectionStart;else if(document.selection){a.focus();var b=document.selection.createRange();if(b==null)return 0;var a=a.createTextRange(),d=a.duplicate();a.moveToBookmark(b.getBookmark());d.setEndPoint("EndToStart",a);return d.text.length}return 0}};d.fn.avro=function(a){if(b[a])return b[a].apply(this,Array.prototype.slice.call(arguments,1));else if(typeof a==="object"||!a)return b.init.apply(this,arguments);else d.error("Method "+a+" does not exist on jQuery.avro")}})(jQuery);