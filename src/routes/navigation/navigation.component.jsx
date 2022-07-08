import {useContext} from 'react';
import { Outlet,Link } from "react-router-dom"

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'
import {UserContext} from '../../context/user.context'

import {signOutUser} from '../../utils/firebase/firebase.utils'
const Navigation = () =>{

  const {currentUser} = useContext(UserContext)


    return (
      <>
        <div className="navigation">
            <Link className="logo-container" to='/'>
          <CrwnLogo className="logo"/>
          </Link>
          <div className="nav-links-container">
              <Link className="nav-link" to='/shop'>
                SHOP

              </Link>
              {
                currentUser ? (
                  <span className='nav-link' onClick={signOutUser}>Sign Out</span> ):
              <Link className="nav-link" to='/authentication'>
                SIGN IN
              </Link>

                
              }

          </div>
      
        </div>
        <Outlet />
      </>
    )
  }
  export default Navigation