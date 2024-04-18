import React from 'react'
import styles from "./addInput.module.css"
const AddInput = ({type, placeholder,name}) => {
  return (
    <div className={styles.inputBlocks}>
        <label className={styles.label}><p>{name}</p>
        <input type={type} placeholder={placeholder} className={styles.input}/>
        </label>
    </div>
  )
}

export default AddInput
