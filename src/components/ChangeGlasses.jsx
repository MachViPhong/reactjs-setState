import React, { Component } from 'react';
import style from './changeGlasses.module.css';

const data = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./glassesImage/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./glassesImage/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./glassesImage/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./glassesImage/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./glassesImage/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./glassesImage/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./glassesImage/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./glassesImage/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
];

export default class ChangeGlasses extends Component {
    state = {
        id: 9,
        price: 60,
        name: "FENDI F4300",
        url: "./glassesImage/v9.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
    renderGlasses = () => {
        return data.map((item, index) => {
            return (
                <div className='col-2 m-2' key={index}>
                    <button className={`${style["btn-glass"]}`} onClick={() => {
                        this.setState({
                            id: item.id,
                            price: item.price,
                            name: item.name,
                            url: item.url,
                            desc: item.desc
                        })
                    }}>
                        <img className='w-100' src={item.url} alt="..." />
                    </button>
                </div>
            )
        })
    }
    render() {
        return (
            //   <div>ChangeGlasses</div>
            <div className={`${style["bg-gray"]}`}>

                <div className={`${style["header"]} py-5 text-white`}> TRY GLASSES APP ONLINE</div >
                <div className="carousel">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5 mx-auto">
                            {/* <img className={`${style["image"]}`} src="./glassesImage/model.jpg" alt="..." /> */}
                            <div className={`${style["image"]}`}>
                                <img className={`${style["glass"]}`} src={this.state.url} alt="..." />
                                <div className={`${style["detail"]}`}>
                                    <h1 className={`${style["name"]}`}>{this.state.name}</h1>
                                    <p className={`${style["description"]}`}>{this.state.desc}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5 mx-auto">
                            <img src="./glassesImage/model.jpg" alt="..." />

                        </div>
                    </div>
                </div>

                <div className="list-glasses pt-5 mx-5">
                    <div className="container">
                        <h1 className='text-center'>Choose Glass</h1>
                        <div className={`${style["list"]} row`}>
                            {this.renderGlasses()}
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}
