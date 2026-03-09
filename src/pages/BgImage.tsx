import bg from '../assets/laba-laba-dub-dub.png';
import styles from '../App.module.css';


export const BgImage = () => {
    console.log('styles: ', styles);
    return (
        <img src={bg} className={styles.bgImage} alt="background"/>
    )
}
