import styles from './header.module.css'
import { FaSearch, FaBell } from 'react-icons/fa';

function Header() {
    const hasNotifications = true; // Флаг наличия уведомлений
    return (
        <header className={styles.header}>
            <div className={styles.container1}>
        {/* Логотип */}
        <div className="logo">
          <a href="/">
            <img src="/logo.png" alt="Logo" />
          </a>
        </div>

        {/* Вертикальная разделяющая полоса */}
        <div className={styles.divider}></div>

        {/* Навигация */}
        <nav className={styles.nav}>
          <a href="#discover" className={styles.nav_link}>
            Discover
          </a>
          <a href="#how-it-works" className={styles.nav_link}>
            How It Works
          </a>
        </nav>

      

        {/* Меню в правом верхнем углу */}
        <div className={styles.right_menu}>

            {/* Строка поиска */}
        <form className={styles.search_form} role="search">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            aria-label="Search"
          />
          <button type="submit" className={styles.search_button} aria-label="Search">
            <FaSearch />
          </button>
        </form>
          {/* Иконка уведомлений */}
          <div className={styles.notification}>
            <FaBell />
            {hasNotifications && <span className={styles.notification_dot}></span>}
          </div>

          {/* Кнопки */}
          <button className={styles.button && styles.upload_button}>Upload</button>
          <button className={styles.button && styles.wallet_button}>Connect Wallet</button>
        </div>
      </div>
        </header>
    )
}

export default Header;