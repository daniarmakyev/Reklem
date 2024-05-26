import React from 'react'
import styles from "./orangeunderline.module.css"

const OrangeUnderline = ({children}) => {
  return (
        <h3 className={styles.text}>
            {children}
        </h3>
  )
}

export default OrangeUnderline
