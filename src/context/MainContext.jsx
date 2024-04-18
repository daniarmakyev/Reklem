import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const mainContext = createContext();

const API = "http://localhost:8000/product";
const MainProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const obj = await axios.get(API);
            console.log(obj.data); 
            setProducts(obj.data);
        } catch (error) {
            console.error('Ошибка при выполнении запроса getProducts:', error);
        }
    };

    const createProduct = async (newProduct) => {
        try {
            await axios.post(API, newProduct);
            getProducts(); 
        } catch (error) {
            alert('Ошибка при выполнении', `${error}`);
        }
    };

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
