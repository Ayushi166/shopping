import React from 'react';

export const Product = ({itemProp, deleteProductProp, editProductProp}) => {

  const deleteItem = (event) => {
    deleteProductProp(itemProp);
  }

  const editItem = (event) => {
    editProductProp(itemProp);
  }

  return <div>
      <div>
          {itemProp.name}
      </div>
      <div>
            {itemProp.qty}
      </div>
      <div>
            {itemProp.price}
      </div>

      <input type="button" value="Edit" onClick={editItem} />
      <input type="button" value="Delete" onClick={deleteItem} />
      
  </div>;
};
