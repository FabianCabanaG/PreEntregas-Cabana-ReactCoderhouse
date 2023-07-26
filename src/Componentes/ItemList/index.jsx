import Item from "../Item"

const ItemList = (props) => {
    return (
        <div className='d-flex justify-content-around align-items-center flex-wrap'>
            {props.products.map((prod)=> <Item key={prod.id} product={prod}/>)}
        </div>
    )


}

export default ItemList
