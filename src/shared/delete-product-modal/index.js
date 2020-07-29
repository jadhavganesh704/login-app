import React from 'react';

const DeleteProductModal = (props) => {
    return (
        <div className="ui active tiny modal">
            <div className="header">{props.product.name}</div>
            <div className="content">
                <label>Do you want to delete this product?</label>
            </div>
            <div className="actions">
                <div className="ui button" onClick={() => props.handleDelete()}>No</div>
                <div className="ui positive button" onClick={() => props.handleDelete(props.product.id)}>Yes</div>
            </div>
        </div>
    )
}

export default DeleteProductModal;