import React, {Fragment, useState, useEffect, useContext} from 'react'
import cls from './Sidebar.module.css'
import {NavLink, Link} from 'react-router-dom'
import BurgerImg from '../../assets/images/burger_icon.svg'
import AccountImg from '../../assets/images/avatar.jpg'
import ExitImg from '../../assets/images/exit.svg'
import { GoogleLogout } from 'react-google-login'
import FacebookLogin from 'react-facebook-login'

const links = [
    {to: '/', label: 'Current weather', exact: true},
    {to: '/themes', label: 'Themes', exact: false},
]

const renderLinks = () => {
    return links.map((link, index) => {
        return(
            <NavLink
                className={cls.sidebar__item}
                to={link.to}
                exact={link.exact}
                activeClassName={cls.active}
                key={index}
                // onClick={clickHandler}
            >
                {link.label}
            </NavLink>
        )
    })
}

const Sidebar = () => {
    const [xPosition, setX] = useState(-300)
    const [rotatePosition, setRotate] = useState(0)
    const [maskDisplay, setDisplay] = useState('none')
    const [status, setStatus] = useState(false)

    const toggleMenu = () => {
        if(xPosition < 0) {
            setX(0)
            setRotate(180)
            setDisplay('block')
        } else {
            setX(-300)
            setRotate(0)
            setDisplay('none')
        }
    }
    
    
    useEffect(() => {
        setX(-300)
        setRotate(0)
        setDisplay('none')
    }, [])

    const logout = () => {
        localStorage.setItem('isRegistered', '')
    }
    
    
    return(
        <Fragment>
            <div className={cls.sidebar__outer}>
                <div 
                    className={cls.sidebar}
                    style={{
                        transform: `translatex(${xPosition}px)`
                    }}
                >
                    <div className={cls.sidebar__inner}>
                        <div className={cls.account__wrapper}>
                            <Link
                                className={cls.sidebar__account}
                                to="/auth"
                            >
                                <img
                                    className={cls.account__img} 
                                    src={AccountImg}
                                    alt="avatar" />
                            </Link>
                        </div>
                        {renderLinks()}
                    </div>
                    <button
                        className={cls.toggle__menu}
                        onClick={() => toggleMenu()}
                    >
                        <img
                            className={cls.burger} 
                            src={BurgerImg}
                            alt="burger"
                            style={{
                                transform: `rotatez(${rotatePosition}deg)`
                            }}
                        />
                    </button>
                </div>
                <div 
                    className={cls.sidebar__mask}
                    onClick={ () => toggleMenu() }
                    style={{
                        display: `${maskDisplay}`,
                    }}></div>
            </div>
        </Fragment>
    )
}

export default Sidebar



