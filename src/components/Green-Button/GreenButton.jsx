import styles from "./greenButton.module.css"

function GreenButton ({children}){
   return <button className={styles.directoryBtn}>{children}</button>
}

export default GreenButton