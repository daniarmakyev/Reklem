import React, { useContext, useState, useEffect } from 'react';
import styles from './addCard.module.css';
import { mainContext } from '../../../context/MainContext';
import AddInput from '../../../components/addInput/AddInput';
import GreenButton from '../../../components/Green-Button/GreenButton';
import { useNavigate } from 'react-router-dom';

const AddCard = () => {
    const { createProduct, getProducts } = useContext(mainContext);

    const[name, setName] = useState('');
    const[desc, setDesc] = useState('');
    const[price, setPrice] = useState('');
    const[imageUrl, setImageUrl] = useState('')

    const exit = useNavigate();

    function clickAdd(e){
        
        e.preventDefault()

        if(!name.trim() || !desc.trim() || !price.trim() || !imageUrl.trim()){
            alert('Заполните поля!');
            setName(name, '');
            setDesc(e.target.value, '');
            setPrice(e.target.value, '');
            setImageUrl(e.target.value, '');
            return;
        }

        const newObj = {
            name,
            desc,
            price,
            imageUrl
        }

        createProduct(newObj)
        exit("/catalog");
        setName('');
        setDesc('');
        setPrice('');
        setImageUrl('');
                


    }

    return (
        <div className="container">
            <form className={styles.addForm} onSubmit={clickAdd}>
                <h1>Создать продукт</h1>
                <AddInput name="Название товара: " type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
                <AddInput name="Описание товара: " type="text" placeholder="Описание" value={desc} onChange={(e) => setDesc(e.target.value)}/>
                <AddInput name="Цена товара: " type="text" placeholder="Цена" value={price} onChange={(e) => setPrice(e.target.value)}/>
                <AddInput name="Картинка: " type="url" placeholder="Ссылка на картинку (URL)" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
                <div>
                    <GreenButton type="submit">Добавить</GreenButton>

                </div>
            </form>
        </div>
    );
};

export default AddCard;


