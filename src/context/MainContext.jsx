    import axios from 'axios';
    import React, { createContext, useState, useEffect } from 'react';

    export const mainContext = createContext();

    const API = "http://localhost:8000/product";
    const MainProvider = ({ children }) => {

        const [products, setProducts] = useState([]);
        const [oneProduct, setOneProduct] = useState(null);
        const getProducts = async () => {
           try {
            const dbObj = await axios.get(API);
            setProducts(dbObj.data)
           }catch(error){
            alert("Ошибка получения!")
            console.error(error);
           }
        }

        const createProduct = async (obj) => {
            try {
                const postObj = await axios.post(API, obj);
                getProducts()
            }catch(error){
                alert("Ошибка при отправке!")
                console.error(error);
               }
        }
        
        const getOneProduct = async (id) => {
            try {
                const obj = await axios.get(`http://localhost:8000/product/${id}`);
                setOneProduct(obj.data)
            } catch (error) {
                alert('Ошибка при отправке!');
                console.error(error);
            }
        };

        const editProduct = async (id,newObj) => {
            try {
                axios.post(`http://localhost:8000/product/${id}`, newObj)
                getProducts();
            }catch (error) {
                alert('Ошибка при отправке!');
                console.error(error);
            }
        }

        useEffect(() => {
            getProducts();
        }, []); 
        return (
            <mainContext.Provider value={{ oneProduct,products, createProduct, getProducts,getOneProduct,editProduct }}>
                {children}
            </mainContext.Provider>
        );
    };

    export default MainProvider;
