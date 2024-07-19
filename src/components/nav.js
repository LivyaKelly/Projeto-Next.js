import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.css';

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <Link className={styles.logo} href="/">
                <Image src='/images/log-tvd.png' alt='logo' width={100} height={40}/>
            </Link>
            
            <div className={styles.links}>

                <Link className={styles.link2} href="/personagens">
                    Personagens
                </Link>

                <Link className={styles.link3} href="/curiosidades">
                    Curiosidades 
                </Link>
            </div>
        </nav>
    );
}