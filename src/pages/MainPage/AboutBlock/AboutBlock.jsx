import React from 'react';
import styles from './aboutUs.module.css';
import GreenButton from '../../../components/Green-Button/GreenButton';

function AboutBlock() {
    return (
        <div className={styles.aboutUs}>
            <div className={styles.aboutUsContainer}>
                <div className={styles.aboutLeft}>
                    <h2><span className={styles.orangeUnderline}>Пара слов</span> о нас, производстве и брендинге</h2>
                    <p>В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые особенности структуры проекта.</p>
                    <p>В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые особенности структуры проекта опыт мы упускаем, что ключевые особенности структуры проекта.</p>
                    <GreenButton className={styles.aboutBtn}>О компании</GreenButton>
                </div>
                <div className={styles.aboutRight}><img className="" src={require('../../../components/images/keyboard.jpeg')} alt="keyboard" /></div>
            </div>
        </div>
    );
}

export default AboutBlock;
