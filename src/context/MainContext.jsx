    import axios from 'axios';
    import React, { createContext, useState, useEffect } from 'react';

    export const mainContext = createContext();

    const API = "http://localhost:8000/product";
    const MainProvider = ({ children }) => {

        const [products, setProducts] = useState([]);

        const getProducts = async () => {
           try {
            const dbObj = await axios.get(API);
            setProducts(dbObj.data)
           }catch{
            alert("Ошибка получаения!")
            console.error(error);
           }
        }



        

        useEffect(() => {
            getProducts();
        }, []); 
        return (
            <mainContext.Provider value={{ products, createProduct, getProducts }}>
                {children}
            </mainContext.Provider>
        );
    };

    export default MainProvider;
