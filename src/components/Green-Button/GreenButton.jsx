import styles from "./greenButton.module.css"

function GreenButton ({children}){
   return <button type="submit" className={styles.directoryBtn}>{children}</button>
}

export default GreenButton