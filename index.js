import style from "./Header.module.css";

function Header() {
    return (
        <header className={style.header}>
            <span>TableFinder</span>
            <nav>
                <a href="">Home</a>
                <a href="">Sair</a>
            </nav>
        </header>
    );
}

export default Header;