import React from 'react';
import Input from '../../shared/input';

class ProductModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            rate: '',
            quality: '',
        };
    }

    componentWillMount() {
        const { id, name, rate, quality } = this.props.product && this.props.product.length > 0 && this.props.product[0];
        if (this.props.product && this.props.product.length > 0) {
            this.setState({
                id,
                name,
                rate,
                quality,
            })
        }
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value,
        });
    };

    handleSubmit = () => {
        this.props.handleModal(this.state.id, this.state.name, this.state.rate, this.state.quality);
    }
    render() {
        return (
            <div className="ui active modal">
                <div className="header">{this.state.id ? 'Edit Product' : 'Add Product'}</div>
                <div className="content">
                    <form className="ui form">
                        <div className="field">
                            <label>Name</label>
                            <Input
                                name="name"
                                fluid
                                placeholder='Name'
                                value={this.state.name}
                                handleChange={this.handleChange}
                                // errors={this.state.errorName}
                            />
                        </div>
                        <div className="field">
                            <label>Rate</label>
                            <Input
                                type="number"
                                name="rate"
                                fluid
                                placeholder='Rate'
                                value={this.state.rate}
                                handleChange={this.handleChange}
                                // errors={this.state.errorRate}
                            />
                        </div>
                        <div className="field">
                            <label>Quality</label>
                            <select className="ui fluid dropdown" value={this.state.quality} onChange={e => this.setState({ quality: e.target.value })}>
                                <option value="">None</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div className="actions">
                    <div className="ui button" onClick={() => this.props.handleModal()}>Cancel</div>
                    <div className="ui positive button" onClick={() => this.handleSubmit()}>Save</div>
                </div>
            </div>
        )
    }
}

export default ProductModal;