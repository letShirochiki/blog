      export const typesMap = {"frontend":{"/":{"path":"/frontend/","indexes":[20,19]}},"backend":{"/":{"path":"/backend/","indexes":[17]}},"other":{"/":{"path":"/other/","indexes":[18]}},"timeline":{"/":{"path":"/timeline/","indexes":[18,20,17,19,11,10,12,13,2,3,4,5,6,7,8,9,14,16,15,0,1]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

      