let Mustache = require('mustache');
let content = Mustache.render(routesTpl,{
    routes:JSON.stringify(routes,replacer,2).replace(/\"component\": (\"(.+?)\")/g, (global, m1, m2) => {
     return `"component": ${m2.replace(/\^/g, '"')}`
 })
});
