import { Link } from 'react-router';
import styles from '../styles/Header.module.css';
import logo from '../assets/logo-fsyachina.png';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="logo"/>
            </div>

            <nav className={styles.nav}>
                <Link className={styles.link} to={{
                  pathname: '/'
                }}>Home</Link>
                <Link className={styles.link} to={{
                    pathname: '/about'
                }}>About me</Link>
            </nav>
        </header>
    );
}
