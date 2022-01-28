import React,{useState} from 'react';

export const Product = ({addProductProp}) => {

    const [name, setName] = useState("");
    const [qty, setQty] = useState(0);
    const [price, setPrice] = useState(0);

    const addProduct = (event) =>{
        if(parseInt(qty)){
            addProductProp({
                name:name,
                qty:qty,
                price:price
            })
        }else{
            alert("Please add atleast one product!")
        }
    }

  return <div>
      <h1>Add Product</h1>
      <form action="">
        <input type="text" placeholder='Name' value={name} onChange={(event) =>{
            setName(event.target.value)
        }}/>
        <input type="number" placeholder='Qty' min="0" value={qty} onChange={(event) =>{
            setQty(event.target.value)
        }}/>
        <input type="text" placeholder='Price' value={price}  onChange={(event) =>{
            setPrice(event.target.value)}}/>
        <input type="button" value='Add' onClick={addProduct}/>
      </form>
  </div>;
};
