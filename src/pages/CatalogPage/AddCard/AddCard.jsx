import React, { useContext, useState } from 'react';
import styles from './addCard.module.css';
import { mainContext } from '../../../context/MainContext';
import AddInput from '../../../components/addInput/AddInput';
import GreenButton from '../../../components/Green-Button/GreenButton';
import RedButton from '../../../components/RedButton/RedButton';

const AddCard = () => {
    const { createProduct } = useContext(mainContext);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');


    const addCard = (e) => {
        e.preventDefault();

        const newProduct = {
            name,
            description,
            price,
            imageUrl
        };

        createProduct(newProduct);

        setName('');
        setDescription('');
        setPrice('');
        setImageUrl('');
    };

    return (
        <div className="container">
            <form className={styles.addForm} onSubmit={addCard}>
                <AddInput
                    type="text"
                    placeholder="Имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <AddInput
                    type="text"
                    placeholder="Описание"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <AddInput
                    type="text"
                    placeholder="Цена"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <AddInput
                    type="url"
                    placeholder="Ссылка на картинку (URL)"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <div>
                    <GreenButton type="submit">Добавить</GreenButton>
                    <RedButton>Удалить</RedButton>
                </div>
            </form>
        </div>
    );
};

export default AddCard;

