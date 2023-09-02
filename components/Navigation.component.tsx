import Image from "next/image";
import Link from "next/link";
// STYLES
import styles from "../styles/Navigation.module.scss";
// DATA
import data from "../api/navigation.json";

export const Navigation = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/icon/sarah-radtke-logo.svg"
              alt="sarah logo"
              layout="fill"
              objectFit="contain"
              priority
            />
            <span className={styles.logoSubline}>Privatpraxis Sarah Radtke</span>
          </Link>
        </div>
        <ul className={styles.navBar}>
          {data.map((item) => (
            <li key={item.id} className={styles.navItem}>
              <Link href={item.slug}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
