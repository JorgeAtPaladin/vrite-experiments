var f=Symbol("usableEnv"),m=Symbol("value"),s=Symbol("id"),u=Symbol("componentName"),l={data:{},func:{},views:{},currentScope:null},b={},C=()=>`_${Math.random().toString(36).substring(2,9)}`,e=new Proxy({},{get(t,o){let r=()=>{};return Object.defineProperty(r,u,{value:o}),r}});var n=(t,o,...r)=>({component:t[u]||"Fragment",slot:r,props:Object.fromEntries(Object.keys(o||{}).map(i=>{let a=o[i];return a&&a[s]?[i,a[s]]:[i,a]}))});var d=t=>{let o=C(),r={[s]:o,[m]:t};return l.views[o]=r,r},y=t=>{let o=b[t];o&&(o.func.forEach(r=>{delete l.func[r]}),o.temp.forEach(r=>{let i=l.data.temp;i()&&delete i()[r]}))},g=t=>({getEnvironment:()=>l,getMetadata:()=>({__value:m,__id:s,__componentName:u,__usableEnv:f}),generateRuntimeSpec:()=>({...t,onUninstall:t.onUninstall?.[s],onConfigure:t.onConfigure?.[s],configurationView:t.configurationView?.[s],contentPieceView:t.contentPieceView?.[s],blockActions:t.blockActions?.map(o=>({...o,view:o.view[s]})),elements:t.elements?.map(o=>({...o,view:o.view[s]}))}),generateView:async(o,r,i)=>{let a=l.views[o]?.[m];if(a){l.currentScope={func:[],temp:[],uid:i};let p=await a(r);return b[`view:${i}`]=l.currentScope,l.currentScope=null,p}return{component:"",slot:[]}},runFunction:async(o,r,i)=>{let a=l.func[o];a&&(l.currentScope={func:[],temp:[],uid:i},await a(r),b[`func:${i}`]=l.currentScope,l.currentScope=null,y(`func:${i}`))},removeScope:y});var h=g({elements:[{type:"Audit",view:d(({use:t,css:o})=>{let[r,i]=t("props.network");r||i("Ethereum");let[a,p]=t("props.language");a||p("Solidity");let[w,c]=t("props.url");return n(e.View,{class:o`items-center justify-start p-2 m-0 my-4 border-b-2 border-gray-200 dark:border-gray-700`},n(e.Content,null,n(e.Element,{type:"Title"},n(e.View,{class:o`border-b-2 border-gray-200 dark:border-gray-700`},n(e.Content,{allowed:["heading"]}))),n(e.Element,{type:"Metadata"},n(e.View,{class:o`flex flex-row gap-2`},n(e.Element,{type:"Network"},n(e.Field,{type:"text",label:"Network",placeholder:"Ethereum","bind:value":r})),n(e.Element,{type:"Language"},n(e.Field,{type:"text",label:"Language",placeholder:"Solidity","bind:value":a})),n(e.Element,{type:"URL"},n(e.Field,{type:"text",label:"URL",placeholder:"https://...","bind:value":w})))),n(e.Element,{type:"Scope"},n(e.View,null,n(e.View,{class:o`mr-1 text-gray-500 dark:text-gray-400 font-bold text-base h-[35px] font-mono min-w-40`},"Scope"),n(e.Content,null))),n(e.Element,{type:"Contracts"},n(e.View,{class:o``},n(e.View,{class:o`mr-1 text-gray-500 dark:text-gray-400 font-bold text-base h-[35px] font-mono min-w-40`},"Contracts"),n(e.Content,null)))))})},{type:"Contract",view:d(({use:t,css:o})=>{let[r,i]=t("props.liveMatch"),[a,p]=t("props.liveMatchContract");return r||i("pending"),a||p(""),n(e.View,{class:o`items-center justify-start p-2 m-0 my-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700`},n(e.Content,null,n(e.Element,{type:"Title"},n(e.View,{class:o`items-start p-4 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-t-2xl`},n(e.Content,{allowed:["paragraph"]}))),n(e.Element,{type:"LiveMatch"},n(e.View,{class:o`border-b-2 p-4 border-gray-200 dark:border-gray-700`},n(e.View,{class:o`mr-1 text-gray-500 dark:text-gray-400 font-bold text-base h-[130px] font-mono min-w-60 items-center`},n(e.Element,{type:"LiveMatchContract"},n(e.Field,{type:"text",label:"Live Match",placeholder:"0x...","bind:value":a})),n(e.Element,{type:"LiveMatchStatus"},n(e.Select,{"bind:value":r,class:"mx-0 w-full",options:[{label:"Pending",value:"pending"},{label:"Matched",value:"matched"},{label:"Failed",value:"failed"},{label:"Dependency",value:"dependency"},{label:"Not Deployed",value:"undeployed"}]}))))),n(e.Element,{type:"Description"},n(e.View,{class:o`border-b-2 p-4 border-gray-200 dark:border-gray-700`},n(e.View,{class:o`mr-1 text-gray-500 dark:text-gray-400 font-bold text-base h-[35px] font-mono min-w-40 inline-flex items-center`},"Description"),n(e.Content,null))),n(e.Element,{type:"PrivilegedFunctions"},n(e.View,{class:o`border-b-2 p-4 border-gray-200 dark:border-gray-700`},n(e.View,{class:o`mr-1 text-gray-500 dark:text-gray-400 font-bold text-base h-[35px] font-mono min-w-40 inline-flex items-center`},"Privileged functions"),n(e.Content,null))),n(e.Element,{type:"Issues"},n(e.View,{class:o`border-b-2 p-4 border-gray-200 dark:border-gray-700`},n(e.View,{class:o`mr-1 text-gray-500 dark:text-gray-400 font-bold text-base h-[35px] font-mono min-w-40 inline-flex items-center`},"Issues"),n(e.Content,null)))))})},{type:"Issue",view:d(({use:t,css:o})=>{let[r,i]=t("props.severity"),[a,p]=t("props.resolution");return r()||i("informational"),a()||p("pending"),n(e.View,{class:o`flex flex-col items-center justify-start m-0 my-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 [&_p]:pl-4 [&_blockquote]:pl-4 [&_ol]:pl-4 [&_ul]:pl-4 [&_h1]:pl-4 [&_h2]:pl-4 [&_h3]:pl-4 [&_h4]:pl-4 [&_h5]:pl-4 [&_h6]:pl-4`},n(e.Content,null,n(e.Element,{type:"Title"},n(e.View,{class:o`flex items-start border-b-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-t-2xl`},n(e.View,{class:o`mr-1 text-gray-500 dark:text-gray-400 font-bold text-base h-[35px] font-mono min-w-50 px-2 inline-flex items-center`},"Issue"),n(e.Content,{allowed:["paragraph"]}))),n(e.Element,{type:"Severity"},n(e.View,{class:o`flex items-start border-b-2 border-gray-200 dark:border-gray-700`},n(e.View,{class:o`text-gray-500 dark:text-gray-400 mr-1 font-bold text-base h-10 font-mono min-w-50 px-2 inline-flex items-center`},"Severity"),n(e.View,{class:o`flex items-center`},n(e.Select,{"bind:value":r,class:"mx-0",options:[{label:"Informational",value:"informational"},{label:"Low",value:"low"},{label:"Medium",value:"medium"},{label:"High",value:"high"},{label:"Governance",value:"governance"}]})))),n(e.Element,{type:"Description"},n(e.View,{class:o`flex items-start border-b-2 py-2 border-gray-200 dark:border-gray-700`},n(e.View,{class:o`text-gray-500 dark:text-gray-400 mr-1 font-bold text-base h-[35px] font-mono min-w-50 px-2 inline-flex items-center`},"Description"),n(e.Content,null))),n(e.Element,{type:"Recommendation"},n(e.View,{class:o`flex items-start border-b-2 py-2 border-gray-200 dark:border-gray-700`},n(e.View,{class:o`text-gray-500 dark:text-gray-400 mr-1 font-bold text-base h-[35px] font-mono min-w-50 px-2 inline-flex items-center`},"Recommendation"),n(e.Content,null))),n(e.Element,{type:"Resolution"},n(e.View,{class:o`flex items-start py-2 border-gray-200 dark:border-gray-700 rounded-b-2xl`},n(e.View,{class:o`mr-1 text-base h-[60px] font-mono min-w-50 flex items-start flex-col`},n(e.View,{class:o`text-gray-500 font-bold px-2 dark:text-gray-400`},"Resolution"),n(e.Element,{type:"ResolutionState"},n(e.Select,{"bind:value":a,options:[{label:"Pending",value:"pending"},{label:"Acknowledged",value:"acknowledged"},{label:"Partial",value:"partially"},{label:"Resolved",value:"resolved"}]}))),n(e.Content,null)))))})}]});export{h as default};
