import "./aboutUs.css";
import GreenButton from "../Green-Button/GreenButton";

function AboutUs({ }) {
    return (
        <div className="about-us">
            <div className="about-us-container">
                <div className="about-left">
                <h2><span className="orange-underline">Пара слов</span> о нас, производстве и брендинге</h2>
                <p>В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые особенности структуры проекта.</p>
                <p>В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые особенности структуры проекта опыт мы упускаем, что ключевые особенности структуры проекта.</p>
                <GreenButton className="about-btn">О компании</GreenButton>
                </div>
                <div className="about-right"><img className="" src={require('../../images/keyboard.jpeg')} alt="keyboard" /></div>
            </div>
        </div>
    );
  }                                              
  
  export default AboutUs;