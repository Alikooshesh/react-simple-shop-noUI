
import './App.css';
import { useState } from 'react';
import ProductCard from "./components/productCard";
import OrderCard from "./components/orderCard";

function App() {

    const [productList , setProductList] = useState([
        {
            id : 1,
            name : "iphone 13",
            price : 1100
        },
        {
            id : 2,
            name : "iphone 14",
            price : 1200
        },
        {
            id :3,
            name : "iphone 15",
            price : 1300
        },
        {
            id : 4,
            name : "iphone 16",
            price : 1400
        },
        {
            id : 5,
            name : "iphone 17",
            price : 1500
        },
    ])

    const [orderList , setOrderList] = useState([
        {
            id : 5,
            count : 7
        }
    ])

  return (
    <>
        {productList.map(product =>
            <ProductCard key={product.id} name={product.name} id={product.id} price={product.price} orderList={orderList} setOrderList={setOrderList}/>
        )}

        <div style={{marginTop : "64px"}}>
            order List :
            {orderList.map(order => {
                const temp = productList.find(item => item.id === order.id)
                return(
                    <OrderCard id={order.id} name={temp.name} price={temp.price} count={order.count} orderList={orderList} setOrderList={setOrderList}/>
                )
            })}
        </div>
    </>
  );
}

export default App;
