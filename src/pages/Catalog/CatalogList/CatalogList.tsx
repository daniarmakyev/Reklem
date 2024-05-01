import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { getProductsCatalog } from '../../../store/actions/mainCatalogProduct.action';
import { RootState } from '../../../store/store';
import { Link } from 'react-router-dom';
import { Product } from '../../../store/actions/mainCatalogProduct.action';
import styles from "./CatalogList.module.css"


const CatalogList = () => {
    const { product, loading } = useSelector((state: RootState) => state.products);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsCatalog());
    }, [dispatch]);

    console.log(product);
    console.log(typeof product);


    return (
        <div className={styles.container}>
            {loading ? (
                <h1>Loading...</h1>
            ) : (

                <div className={styles.catalog}>

                    {product.map((item: Product) => {
                        return (
                            <div className={styles.fullCard}>
                            <div className={styles.card} key={item.id}>
                                <div className={styles.background}></div>
                                <img src={item.imageUrl} alt="" />
                                <span>От {item.price} ₽</span>
                            </div>
                            <h3 className={styles.name}>{item.name}</h3>
                            <p className={styles.miniInfo}>{item.miniInfo}{item.color}</p>
                            <button className={styles.more}>
                                <Link to={`/detail/${item.id}`}
                                    state={{ 
                                        name: item.name, 
                                        price: item.price, 
                                        color: item.color, 
                                        desc: item.desc, 
                                        size: item.size,
                                        weight:item.weight,
                                        material:item.material,
                                        seecondImage:item.secondImageUrl,
                                        thirdImage:item.thirdImageUrl,
                                        image:item.imageUrl,
                                        fourthImage:item.fourthImageUrl
                                    }}
                                >
                                    Подробнее
                                </Link>
                            </button>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default CatalogList;

