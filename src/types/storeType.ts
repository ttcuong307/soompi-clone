
import { UserType } from "./type"

export type stateUserType = {
  currentUser?: UserType,
  isLoading: boolean,
  error?: string,
}
