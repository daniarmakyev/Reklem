import React from 'react'
import styles from './editInput.module.css'

const EditInput = ({type, placeholder,name,onChange,value}) => {
    return (
      <div className={styles.inputBlocks}>
          <label className={styles.label}><p>{name}</p>
          <input type={type}  placeholder={placeholder} className={styles.input} value={value} onChange={onChange}/>
          </label>
      </div>
    )
  }

export default EditInput