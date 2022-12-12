import SearchBar from "./SearchBar";
import logo from '../images/ic_logo_rickandmorty.png'
import styles from './Nav.modules.css'
import { Link } from "react-router-dom";

export default function Nav ({onSearch}) {


    return (
        <div className='navContainer'>
            <img src={logo} className='item' />
            <span className='item' >
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <SearchBar
                    onSearch={onSearch}
                />
            </span>
        </div>
    )
}