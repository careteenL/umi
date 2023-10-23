class Plugin{
    constructor(){
        this.hooks = {};
    }
    //{apply:{patchRoutes:fn}}
    register(plugin){//
       Object.keys(plugin.apply).forEach(key=>{
           if(!this.hooks[key])
               this.hooks[key]=[];
            this.hooks[key]=this.hooks[key].concat(plugin.apply[key]);

       })
    }
    applyPlugins({key,args}){
        if(!this.hooks[key])
            this.hooks[key]=[];
        this.hooks[key].forEach(hook=>hook(args));
    }
}
let plugin = new Plugin();

import * as Plugin_0 from '/Users/careteen/Desktop/careteen/@careteen/umi/examples/basic/src/app.js';

plugin.register({
    apply:Plugin_0,
    path:'/Users/careteen/Desktop/careteen/@careteen/umi/examples/basic/src/app.js'
});

export default plugin
