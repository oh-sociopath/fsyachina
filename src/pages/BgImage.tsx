import bg from '../assets/coming-soon.png';
import styles from '../App.module.css';


export const BgImage = () => {
    console.log('styles: ', styles);
    return (
        <img src={bg} className={styles.bgImage} alt="background"/>
    )
}
