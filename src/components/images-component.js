import { useSelector } from "react-redux";
import 'animate.css';

export default function ImagesComponent(){
    const userData = useSelector((state) => state.formReducer.userInfo);

    return (
        <section className="section-img animate__animated animate__bounceInLeft">
            <div className="img-bg"></div>
            <img src="/images/bg-card-back.png" alt="" className="back" />
            <p className="user-data-cvv">{userData.cvv}</p>
            <img src="/images/bg-card-front.png" alt="" className="front" />
            <p className="user-data-number">{userData.number}</p>
            <div className="user-data-row">
                <div>
                    <p className="user-data-name">{userData.name}</p>
                </div>
                <div>
                    <p className="user-data-time">{userData.month}/{userData.year}</p>
                </div>
            </div>
            <img src="/images/card-logo.svg" alt="" className="logo" />
        </section>
    )
}