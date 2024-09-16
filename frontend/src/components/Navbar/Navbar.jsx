import React, { useContext, useState } from 'react';
import './Navbar.css'
import search_icon from '../../assets/frontend_assets/search_icon.png';
import foodieLogo from '../../assets/admin_assets/foodieLogo.png';
import basket_icon from '../../assets/frontend_assets/basket_icon.png'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import profile_icon from '../../assets/frontend_assets/profile_icon.png';
import bag_icon from '../../assets/frontend_assets/bag_icon.png';
import logout_icon from '../../assets/frontend_assets/logout_icon.png';



const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("home");

    const {getTotalCartAmount, token , setToken} = useContext(StoreContext);

    const navigate = useNavigate();

    const logout = ()=>{
        localStorage.removeItem("token")
        setToken("");
        navigate("/")
    }
  return (
    <div className='navbar'>
        <Link to='/'><img src={foodieLogo} alt='' className='logo'/></Link>
        <ul className="navbar-menu">
            <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"?"active" : ""}>Home</Link>
            <a href="#explore-menu" onClick={()=>setMenu("menu")} className={menu==="menu"?"active" : ""}>Menu</a>
            <a href="#app-download" onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active" : ""}>Mobile-app</a>
            <a href="#footer" onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active" : ""}>Contact-Us</a>
        </ul>
        <div className="navbar-right">
            <img src={search_icon} alt=""/>
            <div className='navbar-search-icon'>
                <Link to='/cart'><img src={basket_icon} alt=""/></Link>
                <div className={getTotalCartAmount()===0?"": "dot"}>

                </div>
            </div>
            {!token? <button onClick={()=>setShowLogin(true)}>sign in</button>
         : <div className='navbar-profile'>
            <img src={profile_icon} alt="" />
            <ul className='nav-profile-dropdown'>
              <li onClick={()=> navigate("/myorders")}><img src={bag_icon} alt="" /><p>Orders</p></li>
              <hr/>
              <li onClick={logout}><img src={logout_icon} alt="" /><p>Logout</p></li>
            </ul>
         </div>    
        }
            
        </div>

    </div>
  )
}

export default Navbar