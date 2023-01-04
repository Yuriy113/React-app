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
    console.warn('Obsolete method')
    return profileAPI.getProfile(userId)
  },

}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId)
  },

  getStatus(userId) {
    return instance.get('profile/status/' + userId)
  },

  updateStatus(status) {
    return instance.put('profile/status/', { status: status })
  },

}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe })
  },
  logout(email, password, rememberMe = false) {
    return instance.delete(`auth/login`)
  },
}