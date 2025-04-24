// 模拟登录
export const loginApi = (username, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ token: 'mock-token' });
      }, 500);
    });
  };
  
  // 模拟获取路由表
  export const getRouteApi = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { path: '/home', name: 'home', element: 'home' },
          { path: '/about', name: 'about', element: 'about' }
        ]);
      }, 500);
    });
  };
  