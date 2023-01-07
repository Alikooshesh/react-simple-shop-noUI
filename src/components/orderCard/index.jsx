const OrderCard = ({name , count , price , id , orderList , setOrderList})=>{

    const clickHandler = ()=> {
        let tempOrderList = [...orderList]
        const indexFinder = tempOrderList.findIndex(item => item.id === id)

        if (count === 1){
            tempOrderList = tempOrderList.filter(item => item.id !== id)
        }else {
            tempOrderList[indexFinder].count -=1
        }

        setOrderList(tempOrderList)

    }

    return(
        <>
            <div style={{display:"flex" , border : "1px solid black" , gap : "8px"}} onClick={clickHandler}>
                <p>{name}</p>
                <p>count : {count}</p>
                <p>final Price : {count * price}</p>
            </div>
        </>
    )
}

export default OrderCard