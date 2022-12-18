import axios from 'axios'

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'cfa12cc4-b756-4cc2-b349-4e9a8f10c646'
  }
}) 

export const getUsers = (currentPage, pageSize) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
  .then(response => response.data)
}


// axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
//       withCredentials: true
//     })
