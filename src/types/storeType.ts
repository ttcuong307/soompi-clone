
import { UserType } from "./type"

export type stateUserType = {
  currentUser?: UserType,
  isLoading: boolean,
  error?: string,
}

export type generalType ={
  isDark: boolean
}