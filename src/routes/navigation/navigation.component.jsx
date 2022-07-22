import {useContext} from 'react';
import { Outlet } from "react-router-dom"

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import {NavigationContainer,NavLinks,NavLink,LogoContainer} from './navigation.styles'
import {UserContext} from '../../context/user.context'
import { CartContext } from '../../context/cart.context';

import {signOutUser} from '../../utils/firebase/firebase.utils'

const Navigation = () =>{

  const {currentUser} = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext);


    return (
      <>
        <NavigationContainer>
            <LogoContainer to='/'>
          <CrwnLogo className="logo"/>
          </LogoContainer>
          <NavLinks>
              <NavLink to='/shop'>
                SHOP

              </NavLink>
              {
                currentUser ? (
                  <NavLink as = 'span' onClick={signOutUser}>Sign Out</NavLink> ):
              <NavLink to='/authentication'>
                SIGN IN
              </NavLink>

                
              }
              <CartIcon/>

          </NavLinks>
          {isCartOpen && <CartDropdown/>}
      
        </NavigationContainer>
        <Outlet />
      </>
    )
  }
  export default Navigation