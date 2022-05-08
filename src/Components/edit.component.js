import React, { Component } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
function withRouter(Component) {
    function ComponentWithRouter(props) {
        let params = useParams();
        return <Component {...props} params={params} />
    }
    return ComponentWithRouter
}
class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name: '',
            Price: '',
            postId: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:7000/posts/' + this.props.params.postId)
            .then(response => {
                this.setState({
                    Name: response.data.Name,
                    Price: response.data.Price,
                    postId: response.data.postId
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }
    onChangePrice(e) {
        this.setState({
            Price: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            Name: this.state.Name,
            Price: this.state.Price,
        };
        axios.patch('http://localhost:7000/posts/' + this.props.params.postId, obj)
            .then(res => console.log(res.data));

    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">ID:{this.props.params.postId}</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Price}
                            onChange={this.onChangePrice}
                        />
                    </div>
                    <div className="form-group">
                        <Link to='/Login/index'>Index</Link>
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value="Update Post"
                            className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(Edit);