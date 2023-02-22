import { Outlet, Navigate } from 'react-router-dom'

export const PrivateRoute = () => {
  //creates a private route only accesible with token
  let auth = sessionStorage.getItem('token')
  return(
    auth ? <Outlet/> : <Navigate to="/"/>
  )
}