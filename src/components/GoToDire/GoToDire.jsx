import "./go-to-dire.css";


function GoToDire({ }) {
    return (
        <div className="go-to-dire">
            <div class="container">
            <h1 class="text-center">Планируете сделать <span>принт?</span>
                Вы пришли по адресу</h1>
                <p class="text-center">Reklem - только оптовая работа высокого качества с индивидуальным подходом. Работаем с 2008 года.</p>
                <button class="directory-btn text-center">Перейти в каталог</button>
            </div>
            <div className="backgorund-container">
                <div className="background-inner">
            <a href="#"><img src={require('../../images/cofta.png')} /></a>
            <a href="#"><img src={require('../../images/crujka.png')} /></a>
            <a href="#"><img src={require('../../images/fleshka.png')} /></a>
            <a href="#"><img src={require('../../images/pen.png')} /></a>
            <a href="#"><img src={require('../../images/electro.png')} /></a>
            </div>
               </div>
        </div>
    );
  }                                              
  
  export default GoToDire;