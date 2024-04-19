import React, { useContext, useState } from 'react';
import styles from './addCard.module.css';
import { mainContext } from '../../../context/MainContext';
import AddInput from '../../../components/addInput/AddInput';
import GreenButton from '../../../components/Green-Button/GreenButton';

const AddCard = () => {
    const { createProduct } = useContext(mainContext);

    const[name, setName] = useState('');
    const[desc, setDesc] = useState('');
    const[price, setPrice] = useState('');
    const[imageUrl, setImageUrl] = useState('')

    function clickAdd(){
        if(!name || !desc || !price || !imageUrl){
            alert('Заполните поля!')
            return;
        }

        const newObj = {
            name,
            desc,
            price,
            imageUrl
        }

        createProduct(newObj);
        
        setName('');
        setDesc('');
        setPrice('');
        setImageUrl('')
    }

    return (
        <div className="container">
            <form className={styles.addForm} onSubmit={clickAdd}>
                <AddInput name="Название товара: " type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
                <AddInput name="Описание товара: " type="text" placeholder="Описание" value={description} onChange={(e) => setDesc(e.target.value)}/>
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


