
import { Outlet } from "react-router-dom"
import {useSelector} from 'react-redux'

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import {selectIsCartOpen} from '../../store/cart/cart.selector'
import {selectCurrentUser} from '../../store/user/user.selector'

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

import {NavigationContainer,NavLinks,NavLink,LogoContainer} from './navigation.styles'
import {signOutUser} from '../../utils/firebase/firebase.utils'

const Navigation = () =>{
  
  const currentUser =  useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)



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