import React, { useContext, useEffect, useState } from 'react';
import styles from './cardEdit.module.css';
import { mainContext } from '../../../context/MainContext';
import { useNavigate, useParams } from 'react-router-dom';
import GreenButton from '../../../components/Green-Button/GreenButton';
import EditInput from '../../../components/editInput/EditInput';

const EditCard = () => {
    const { getOneProduct, editProduct,oneProduct } = useContext(mainContext);
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        getOneProduct(id);
      }, []);

    const exit = useNavigate();

    console.log(oneProduct);

      
    useEffect(() => {
        if (oneProduct) {
            setName(oneProduct.name);
            setDesc(oneProduct.description);
            setPrice(oneProduct.price);
            setImageUrl(oneProduct.imageUrl);
            }
        },[oneProduct]);

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');


    function clickAdd (e) {
        e.preventDefault();

        if (!name.trim() || !desc.trim() || !price.trim() || !imageUrl.trim()) {
            alert('Заполните все поля!');
            return;
        }

        const updatedProduct = {
            name,
            desc,
            price,
            imageUrl
        };

            editProduct(id, updatedProduct)
            exit('/catalog');
            setName('');
            setDesc('');
            setPrice('');
            setImageUrl('');
    };

    return (
        <div className="container">
            <form className={styles.editForm} onSubmit={clickAdd}>
                <h1>Изменить продукт</h1>
                <EditInput
                    name="Название товара: "
                    type="text"
                    placeholder="Имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <EditInput
                    name="Описание товара: "
                    type="text"
                    placeholder="Описание"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                <EditInput
                    name="Цена товара: "
                    type="text"
                    placeholder="Цена"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <EditInput
                    name="Картинка: "
                    type="url"
                    placeholder="Ссылка на картинку (URL)"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <div>
                    <GreenButton type="submit">Изменить</GreenButton>
                </div>
            </form>
        </div>
    );
};

export default EditCard;
