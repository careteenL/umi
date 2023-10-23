

export function patchRoutes({routes}){
    routes.unshift({
      path:'/foo',
      exact:true,
      component:require('@/foo').default
  });
}