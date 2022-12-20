import axios from 'axios';



const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'cfa12cc4-b756-4cc2-b349-4e9a8f10c646'
  }
});

export const userAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },

  follow(userId) {
    return instance.post(`follow/${userId}`) // userId?
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`) // userUd?
  },

  getProfile(userId) {
    return instance.get(`profile/` + userId)
  },

}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  }
}