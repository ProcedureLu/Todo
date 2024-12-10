// api/user.js
import request from '../utils/request';

export const login = async (username, password) => {
  // 正式接口代码
  // return request('/login', 'POST', { username, password });
  // Mock 数据（开发时使用）
  const users = await request('/users.json', 'GET'); // 等待请求完成
  return users.find(user => user.username === username && user.password === password);
};

export const getUserInfo = async (userId) => {
  // 正式接口代码
  // return request(`/users/${userId}`, 'GET');
  // Mock 数据（开发时使用）
  const response = await request('/users.json', 'GET'); // 等待请求完成
  const users = response.users; // 假设返回的数据结构中有一个 `users` 数组
  return users.find(user => user.id === userId);
};
