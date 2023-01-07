const ProductCard = ({id , name , price , orderList , setOrderList})=>{

    const clickHandler = ()=> {
        let tempOrderList = [...orderList]
        const indexFinder = tempOrderList.findIndex(item => item.id === id)

        if (indexFinder === -1){
            const newOrder = {
                id : id,
                count : 1
            }
            tempOrderList.push(newOrder)
        }else {
            tempOrderList[indexFinder].count +=1
        }

        setOrderList(tempOrderList)

    }

    return(
        <>
            <div style={{display:"flex" , border : "1px solid black" , gap : "8px"}} onClick={clickHandler}>
                <p>{name}</p>
                <p>{price}</p>
            </div>
        </>
    )
}

export default ProductCard