import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const mainContext = createContext();

const API = "http://localhost:8000/product";

const MainProvider = ({ children }) => {
    // Состояние для хранения списка продуктов
    const [products, setProducts] = useState([]);

    // Функция для загрузки продуктов с сервера
    const getProducts = async () => {
        try {
            const response = await axios.get(API);
            setProducts(response.data);
        } catch (error) {
            console.error('Ошибка при загрузке продуктов:', error);
        }
    };

    // Функция для создания нового продукта
    const createProduct = async (newProduct) => {
        try {
            await axios.post(API, newProduct);
            getProducts(); // Обновляем список продуктов после создания
        } catch (error) {
            console.error('Ошибка при создании продукта:', error);
        }
    };

    // Загрузка данных с сервера при монтировании компонента
    useEffect(() => {
        getProducts();
    }, []); // Пустой массив зависимостей, чтобы вызвать один раз при монтировании

    return (
        <mainContext.Provider value={{ products, createProduct, getProducts }}>
            {children}
        </mainContext.Provider>
    );
};

export default MainProvider;
