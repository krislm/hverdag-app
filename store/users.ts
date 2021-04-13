export const state = () => ({
  username: null
})

export const mutations = {
  login (state: any, username: string, password: string) {
    state.username = username
  }
}
