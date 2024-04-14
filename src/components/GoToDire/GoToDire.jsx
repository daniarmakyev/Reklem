import "./go-to-dire.css";


function GoToDire({ }) {
    return (

        <div className="go-to-dire">
        <div className="backgorund-container">
            <div className="container">
                <h1 className="text-center">Планируете сделать <span>принт?</span> Вы пришли по адресу</h1>
                <p className="text-center">Reklem - только оптовая работа высокого качества с индивидуальным подходом. Работаем с 2008 года.</p>
                <button className="directory-btn text-center">Перейти в каталог</button>
            </div>
    
            <div className="background-inner">
                <a href="#" className="go-links">
                    <img className="images coftaOne" src={require('../../images/cofta.png')} alt="Cofta One" />
                    <img className="coftaTwo images" src={require('../../images/coftaTwo.png')} alt="Cofta Two" />
                    <span className="">Текстиль</span>
                </a>
                <a href="#" className="go-links">
                    <img className="images crujkaOne" src={require('../../images/crujka.png')} alt="Crujka One" />
                    <img className="crujkaTwo images" src={require('../../images/crujkaTwo.png')} alt="Crujka Two" />
                    <span className="">Кружки и термокружки</span>
                </a>
                <a href="#" className="go-links">
                    <img className="images fleshkaOne" src={require('../../images/fleshka.png')} alt="Fleshka One" />
                    <img className="fleshkaTwo images" src={require('../../images/fleshkaTwo.png')} alt="Fleshka Two" />
                    <span className="">Флеш-карты</span>
                </a>
                <a href="#" className="go-links">
                    <img className="images penOne" src={require('../../images/pen.png')} alt="Pen One" />
                    <img className="penTwo images" src={require('../../images/penTwo.png')} alt="Pen Two" />
                    <span className="">Канцелярия</span>
                </a>
                <a href="#" className="go-links">
                    <img className="images electroOne" src={require('../../images/electro.png')} alt="Electro One" />
                    <img className="electroTwo images" src={require('../../images/electroTwo.png')} alt="Electro Two" />
                    <span className="label">Аксессуары</span>
                </a>
            </div>
        </div>
    </div>
    
    );
  }                                              
  
  export default GoToDire;