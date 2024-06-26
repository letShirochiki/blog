export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"History":{"path":"/category/history/","indexes":[0,1]},"CategoryA":{"path":"/category/categorya/","indexes":[2,3,4,5,6,7,8,9,10,11,12,13,14]},"CategoryB":{"path":"/category/categoryb/","indexes":[2,3,4,5,6,7,8,10,11,12,13]},"CategoryC":{"path":"/category/categoryc/","indexes":[15,16]},"Node":{"path":"/category/node/","indexes":[17]},"WebSocket":{"path":"/category/websocket/","indexes":[18]},"Cesium":{"path":"/category/cesium/","indexes":[19]},"WebWorkers":{"path":"/category/webworkers/","indexes":[20]}}}},"tag":{"/":{"path":"/tag/","map":{"WWI":{"path":"/tag/wwi/","indexes":[1]},"WWII":{"path":"/tag/wwii/","indexes":[0]},"tag A":{"path":"/tag/tag-a/","indexes":[5,6,7,8,9,14]},"tag B":{"path":"/tag/tag-b/","indexes":[5,6,7,8,9,14]},"tag C":{"path":"/tag/tag-c/","indexes":[2,3,4,10,11,12,13]},"tag D":{"path":"/tag/tag-d/","indexes":[2,3,4,11,12,13]},"tag F":{"path":"/tag/tag-f/","indexes":[10]},"tag E":{"path":"/tag/tag-e/","indexes":[15,16]},"backend":{"path":"/tag/backend/","indexes":[17]},"other":{"path":"/tag/other/","indexes":[18]},"websocket":{"path":"/tag/websocket/","indexes":[18]},"frontend":{"path":"/tag/frontend/","indexes":[20,19]},"cesium":{"path":"/tag/cesium/","indexes":[19]},"webworkers":{"path":"/tag/webworkers/","indexes":[20]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

