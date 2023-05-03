export interface User {
  login: string,
  password: string
}
export interface LoginState {
  user: User,
  isLoginCorrect: boolean,
  isPasswordCorrect: boolean
}