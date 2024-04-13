import "./header.css";


function Header({ }) {
  return (
    <header class="header">
    <div class="container">
        <div class="logo">
        <img src={require('../../images/logotype.png')} />
        </div>
        <nav class="navigation">
            <ul>
                <li><a href="#">О компании</a></li>
                <li><a href="#">Каталог</a></li>
                <li><a href="#">Акции</a></li>
                <li><a href="#">Услуги</a></li>
                <li><a href="#">Контакты</a></li>
                    <div>
                        <svg width="15.000000" height="15.000000" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <defs/>
                            <path id="Icon" d="M8.98 9.87C6.77 11.64 3.54 11.5 1.5 9.45C-0.7 7.25 -0.7 3.69 1.5 1.49C3.69 -0.7 7.25 -0.7 9.45 1.49C11.5 3.54 11.64 6.77 9.87 8.98L14.16 13.28C14.41 13.52 14.41 13.92 14.16 14.16C13.92 14.41 13.52 14.41 13.28 14.16L8.98 9.87ZM2.38 8.56C0.67 6.86 0.67 4.09 2.38 2.38C4.08 0.67 6.86 0.67 8.57 2.38C10.27 4.09 10.27 6.85 8.57 8.56C8.57 8.56 8.57 8.56 8.57 8.56C8.57 8.57 8.56 8.57 8.56 8.57C6.85 10.27 4.08 10.27 2.38 8.56Z" fill="#000000" fill-opacity="1.000000" fill-rule="evenodd"/>
                        </svg>
                    </div> 
            </ul>
        </nav>
    </div>
    <hr />
</header>
  );
}                                              

export default Header;