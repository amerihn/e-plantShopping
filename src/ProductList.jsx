import React, { useState, useEffect } from 'react';
import './ProductList.css'
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from './CreatSlice';
import Cart from './CartItem';
import CartItem from './CartItem';

function ProductList() {
  
    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15", price: 15
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12", price: 12
                },
                {
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
                    description: "Removes mold spores and purifies the air.",
                    cost: "$18", price: 18
                },
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                {
                    name: "Basil",
                    image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
                    description: "Repels flies and mosquitoes, also used in cooking.",
                    cost: "$9", price: 9
                },
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20", price: 20
                },
                {
                    name: "Catnip",
                    image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
                    description: "Repels mosquitoes and attracts cats.",
                    cost: "$13", price: 13
                }
            ]
        },
    ];

    const dispatch = useDispatch();

    //ADD TO CART
    const [addedToCart, setAddedToCart] = useState([]);
    const handleAddToCart = (plant) => {
        dispatch(addItemToCart(plant));
        setAddedToCart([...addedToCart, plant.name]);
        // console.log(plant);
    };
        //TOTAL CART QUANTITY
        const [totalCartQuantity, setTotalCartQuantity] = useState(0);
        const cartQuantity = useSelector(store => store.cart.cartItems);
        useEffect(() => {
            let total = 0;
            cartQuantity.forEach(item => total += item.quantity);
            setTotalCartQuantity(total);
        }, 
        [cartQuantity]);
    
    
    //SHOW CART PAGE
    const [showCart, setShowCart] = useState(false);
    const handleShowCart = () => {
        console.log("handleShowCart called");
        setShowCart(!showCart);
    };

    const styleObj={
    backgroundColor: '#4CAF50',
    color: '#fff!important',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignIems: 'center',
    fontSize: '20px',
   }
   const styleObjUl={
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
   }
   const styleA={
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
   }

    return (
        <div>
        {/* NAVBAR */}
        <div className="navbar" style={styleObj}>
            <div className="tag">
               <div className="luxury">
               <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
               <a href="/" style={{textDecoration:'none'}}>
                        <div>
                    <h3 style={{color:'white'}}>Paradise Nursery</h3>
                    <i style={{color:'white'}}>Where Green Meets Serenity</i>
                    </div>
                    </a>
                </div>              
            </div>
            <div style={styleObjUl}>
                <div> <a href="#" style={styleA}>Plants</a></div>
                <div id='cart' onClick={() => setShowCart(!showCart)}> 
                    <a href="#" style={styleA}>
                        <div className='cart-icon-wrapper' >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
                                <rect width="156" height="156" fill="none"></rect>
                                <circle cx="80" cy="216" r="12"></circle>
                                <circle cx="184" cy="216" r="12"></circle>
                                <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" 
                                    fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    id="mainIconPathAttribute"></path>
                            </svg>
                            <span>{totalCartQuantity}</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        {/* PRODUCTS */}
    <div>
    {!showCart ? (
        <div>

        <div className="product-grid">
        {plantsArray.map((category, index) => (
            <div key={index}>
                <h1><div>{category.category}</div></h1>
                <div className="product-list">
                {category.plants.map((plant, plantIndex) => (
                    <div className="product-card" key={plantIndex}>
                        <img className="product-image" src={plant.image} alt={plant.name} />
                        <div className="product-title">{plant.name}</div>
                        <div>{plant.description}</div>
                        <div className='product-price'>{plant.cost}</div>
                        <button   
                            className={`product-button ${addedToCart.includes(plant.name) ? 'disabled' : ''}`}
                            onClick={() => handleAddToCart(plant)}
                            disabled={addedToCart.includes(plant.name)}
                        > {addedToCart.includes(plant.name) ? 'Added' : 'Add'} to Cart
                        </button>
                    </div>
                ))}
                </div>
            </div>
        ))}
        </div>

    </div>
        ) : (
            <div>
                <CartItem handleClick={handleShowCart}
                />
            </div>
        )}
    </div>


    </div>
    );
}


export default ProductList;
