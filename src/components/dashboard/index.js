import React, { Component } from 'react'
import Header from '../../shared/header';
import ProductList from '../products-list';
import getProductListData from '../../product-list-api';
import ProductModal from '../../shared/product-modal';


class DashboardComponent extends Component {
    state = {
        startDate: new Date(),
        ismodal: false,
        product: [],
        productlistData: getProductListData,
        searchData: [],
    };

    handleDelete = (id) => {
        const { productlistData } = this.state;
        if (productlistData.length > 1) {
            const index = productlistData.findIndex(item => item.id === id);
            this.setState({
                ...productlistData.splice(index, 1),
            })
        }
    }


    handleModal = (id, name, rate, quality) => {
        const { ismodal, productlistData } = this.state;
        this.setState({
            ismodal: !ismodal,
            product: id ? productlistData.filter((item) => item.id === id) : [],
        })
        if (name) {
            if (id) {
                const index = productlistData.findIndex(item => item.id === id);
                productlistData[index].name = name;
                productlistData[index].rate = rate;
                productlistData[index].quality = quality;
            } else {
                const newproduct = {
                    "id": productlistData && productlistData[productlistData.length - 1].id + 1,
                    "name": name,
                    "rate": rate,
                    "quality": quality,
                }
                productlistData.push(newproduct);
            }
        }
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '30px' }}>
                <Header />
                {this.state.ismodal && <ProductModal handleModal={this.handleModal} product={this.state.product} />}
                <div className="ui grid">
                    <div className="left floated two wide column">
                        <div className="title">List Of Product</div>
                    </div>
                    <div className="right floated two wide column">
                        <div className="ui small positive button" onClick={() => this.handleModal()}>Add Product</div>
                    </div>
                </div>
                <br />
                {/* Product list*/}
                <ProductList data={this.state.productlistData} handleModal={this.handleModal} handleDelete={this.handleDelete} />
            </div>
        )
    }
}
export default DashboardComponent;