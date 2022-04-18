import styles from './styles.module.scss'

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.footerCenter}>
          <a href="#">Caker Camp </a>
          <span className={styles.hideOnLow}>- Game Vicio Redesign</span>
        </div>
        <div className={styles.footerCenter}>
          <a className={styles.whiteText} href="https://cheesecakelabs.com/">
            Cheesecake Labs
          </a>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
