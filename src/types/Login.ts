export interface User {
  login: string,
  password?: string
}
export interface LoginState {
  userData: User,
  loginError: string | null,
  isUserLoggedIn: boolean
}