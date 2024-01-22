import React from "react"

import "./styles/Login.css"
import { oauthList } from "../../../export/lists"
import { login } from "../../../export/featchAPI"


export default function Login(){
    const username = React.createRef()
    const password = React.createRef()
    const passwordError = React.createRef()
    const authButton = React.createRef()

    async function auth() {
        setButtonStatus(false)
        const logpass = {
            login: username.current.value,
            password: password.current.value
        }
        try { 
            await login(logpass)
        } catch(error) {
            console.log(error)
            document.getElementById("input-userpassword").classList.add("invalid") // ref ты меня подвёл
            document.getElementById("password-error").classList.remove("hidden") // дважды
        }
    }

    function activateButton() {
        if (username.current.value && password.current.value) {
            setButtonStatus(true)
        } else {
            setButtonStatus(false)
        }
    }

    function setButtonStatus(active) {
        if (active) {
            authButton.current.addEventListener("click", auth)
            authButton.current.className = "button-active"
        } else {
            authButton.current.removeEventListener("onclick", auth)
            authButton.current.className = "button-inactive"
        }
    }

    function updatePasswordStatus() {
        password.current.classList.remove("invalid")
        passwordError.current.classList.add("hidden")
    }

    function writeCorrection (e) {
        e.target.value = e.target.value.replace(/\s/g, "")
    }

    React.useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            location.replace(location.origin)
        }
    }, [])

    return(
        <div className="main-login">
            <div className="main-login-content">
                <div className="login-title">
                    <h1>для оформления подписки на тариф, необходимо авторизоваться.</h1>
                </div>
                <div className="login-container">
                    <img className="login-lock" src="/media/resources/login-lock.svg"></img>
                    <div className="login-container-header">
                        <button>Войти</button>
                        <button>Зарегистророваться</button>
                    </div>
                    <div className="login-container-main">
                        <p>Логин или номер телефона:</p>
                        <input id="input-username" className="login-input-username" ref={username} type="text" onChange={writeCorrection} onInput={activateButton}/>
                        <p>Пароль:</p>
                        <input id="input-userpassword" className="login-input-password password" ref={password} type="password" onChange={writeCorrection} onInput={activateButton} onFocus={updatePasswordStatus}/>
                        <p id="password-error" className="password-error hidden" ref={passwordError}>Неправильный пароль</p>
                        <button className="button-inactive" ref={authButton}>Войти</button>
                        <a>Восстановить пароль</a>
                        <div className="oauth">
                            <p>Войти через:</p>
                        </div>
                        <div className="oauth-list">
                            { oauthList.map((obj) =>
                            <img className="oauth-list-img" key={obj.id} src={obj.img}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}