type IMainProvider = {
  user?: IUser
  setUser?: Function
  mainLoading?: boolean
  setMainLoading?: Function
}

type IChildren = {
  children?: React.ReactNode
}
