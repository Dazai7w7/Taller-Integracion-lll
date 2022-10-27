import React, { useContext } from 'react'
import data from '../data'

const Home = () => {
  const {userdata, setUserData} = useContext(data)
  console.log(userdata.username)


  const logout = ()=>{
    setUserData({})
  }
  return (
    <div className='container container-home'>
        <h1>BIENVENIDO A NUESTRO SITIO WEB!</h1>
        <h2 className="username-home">Bienvenido {userdata.name} {userdata.username}</h2>
        <button className='btn' onClick={logout}>Logout</button>
    </div>
  )
}

export default Home