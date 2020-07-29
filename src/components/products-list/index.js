import React from 'react';
import DeleteProductModal from '../../shared/delete-product-modal';

class ProductList extends React.Component {
    state = {
        productlist: this.props.data,
        product: null,
    }

    handleDelete = (id) => {
        this.setState({
            product: null
        })
        if (id) {
            this.props.handleDelete(id)
        }
    }

    render() {

        return (
            <div>
                {this.state.product && <DeleteProductModal handleDelete={this.handleDelete} product={this.state.product} />}
                <form className="ui form">
                    <div className="ui bottom attached segment">
                        <table id="myTable" className="ui sortable celled table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Rate</th>
                                    <th>Quality</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.productlist && this.state.productlist.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.rate}</td>
                                        <td>{item.quality}</td>
                                        <td>
                                            <i className="bordered inverted blue edit outline icon" onClick={() => this.props.handleModal(item.id)}></i>
                                            <i className="bordered inverted red trash alternate outline icon" onClick={() => this.setState({ product: item })}></i>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        )
    }
}

export default ProductList;