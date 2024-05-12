import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { RootState } from '../../../store/store';
import { Link } from 'react-router-dom';
import styles from "./CatalogList.module.css"


const CatalogList = () => {


    return (
        <div className={styles.container}>
                <div className={styles.catalog}>
                    
                </div>
        </div>
    );
};

export default CatalogList;

