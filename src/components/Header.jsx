import React, { useEffect, useState } from 'react'

const Header = (props) => {

    const [title, setTitle] = useState("Welcome to Scrolling Nav");

    const changeTitle = () => {
        setTitle("Hola Mundo desde un clik")
    }

    useEffect(() => {
        console.log("Componente Renderizado...")

        return () => {
            console.log("Componente Eliminado!!!")
        }

    }, [])

    useEffect(() => {
        console.log("Ha cambiado el title");
    }, [title]);

    return (
        <header className="bg-primary bg-gradient text-white">
            <div className="container px-4 text-center">
                <h1 className="fw-bolder">{title}</h1>
                <p className="lead">A functional Bootstrap 5 boilerplate for one page scrolling websites</p>
                <a className="btn btn-lg btn-light" href="#about">Start scrolling!</a>
                <button onClick={changeTitle}>Cambiar datos</button>
            </div>
        </header>
    )
}

export default Header