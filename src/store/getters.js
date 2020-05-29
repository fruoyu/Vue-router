const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  userName: state => state.app.userName,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles
}
export default getters
