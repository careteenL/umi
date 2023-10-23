let {AsyncParallelHook} = require('tapable');
let hook1 = {key:'click',fn:async ()=>{console.log('click1');return Promise.resolve('click1')}};
let hook2 = {key:'click',fn:async ()=>{console.log('click2');return Promise.resolve('click2')}};

let hook3 = {key:'mousemove',fn:async ()=>Promise.resolve('mousemove1')};
let hook4 = {key:'mousemove',fn:async ()=>Promise.resolve('mousemove1')};
//有很多插件，每个插件可能会注册多个hook,每个hook的事件类型不一样的

let hooksByPluginId={
    'plugin1':[hook1,hook3],
    'plugin2':[hook2,hook4]
};
let hooks = {}
//按事件类型来分组
Object.keys(hooksByPluginId).forEach(pluginId=>{
    let pluginHooks = hooksByPluginId[pluginId];
    pluginHooks.forEach(hook=>{
        const {key} =hook;
        hook.pluginId = pluginId;//这个hook是哪个插件挂载上来的
        hooks[key]=(hooks[key]||[]).concat(hook);
    });
});

async function applyPlugins(opts){
    let hooksForKey = hooks[opts.key]||[];
    let tEvent = new AsyncParallelHook(['_']);
    for(const hook of hooksForKey){
        tEvent.tapPromise({name:hook.pluginId},hook.fn);
    }
    tEvent.promise();
}
applyPlugins({key:'click'});
