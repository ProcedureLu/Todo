import request from '../utils/request';

// 获取团队列表
export const getTeams = async () => {
  // 正式接口代码
  // return request('/teams', 'GET');
  // Mock 数据（开发时使用）
  const teams = await request('/team.json', 'GET'); // 请求团队数据
  return teams; // 返回团队列表
};

// 获取单个团队详情
export const getTeamById = async (teamId) => {
  // 正式接口代码
  // return request(`/teams/${teamId}`, 'GET');
  // Mock 数据（开发时使用）
  const teams = await request('/team.json', 'GET'); // 请求团队数据
  return teams.find(team => team.id === teamId); // 根据团队 ID 查找团队详情
};

// 获取团队任务列表
export const getTeamTasks = async () => {
  // 正式接口代码
  // return request('/team-tasks', 'GET');
  // Mock 数据（开发时使用）
  const tasks = await request('/teamtasks.json', 'GET'); // 请求团队任务数据
  return tasks; // 返回任务列表
};

// 获取单个任务详情
export const getTaskById = async (taskId) => {
  // 正式接口代码
  // return request(`/team-tasks/${taskId}`, 'GET');
  // Mock 数据（开发时使用）
  const tasks = await request('/teamtasks.json', 'GET'); // 请求团队任务数据
  return tasks.find(task => task.id === taskId); // 根据任务 ID 查找任务详情
};
// 根据用户 ID 获取用户参与的团队列表
export const getTeamsByUserId = async (userId) => {
  const teams = await request('/team.json', 'GET'); // 请求团队数据
  return teams.filter(team => team.members.some(member => member.id === userId)); // 筛选出用户参与的团队
};

// 根据用户 ID 获取用户参与的任务列表
export const getTasksByUserId = async (userId) => {
  const tasks = await request('/teamtasks.json', 'GET'); // 请求团队任务数据

  const userTasks = tasks.filter(task =>
    task.assignedTo.some(member => member.id === userId)
  );

  return userTasks; 
};
