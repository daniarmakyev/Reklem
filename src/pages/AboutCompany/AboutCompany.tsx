import React from 'react'
import styles from "./aboutCompany.module.css"
import TopText from '../../components/TopText/TopText'

const AboutCompany = () => {
  return (
    <div>
        <TopText title={'О компании'}/>
        <div className="container">
            <section className={styles.preview}>
            <div className={styles.previewText}>
                <h2 className='text-3xl'>О компании</h2>
            <p>В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые особенности структуры проекта.</p>
            <p>
                В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые особенности структуры проекта опыт мы упускаем, что ключевые особенности структуры проекта.
                </p>
                <p>
                Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для системы массового участия. Учитывая ключевые сценарии поведения, выбранный нами инновационный путь способствует повышению качества первоочередных требований. Имеется спорная точка зрения, гласящая примерно следующее.
            </p>
            </div>
            <div className={styles.previewImg}>
            <img className="" src={require('../../components/images/keyboard.jpeg')} alt="keyboard" />
            </div>
            </section>
        </div>
    </div>
  )
}

export default AboutCompany
