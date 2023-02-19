import { Outlet, Navigate } from 'react-router-dom'

export const PrivateRoute = () => {
  let auth = sessionStorage.getItem('token')
  return(
    auth ? <Outlet/> : <Navigate to="/"/>
  )
}