import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../Pages/singin.css';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name: '',
            Price: ''
        }
    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }

    onChangePrice(e) {
        this.setState({
            Price: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            Name: this.state.Name,
            Price: this.state.Price
        };
        axios.post('http://localhost:7000/posts', obj)
            .then(res => console.log(res.data));

        this.setState({
            Name: '',
            Price: ''
        })
    }

    render() {
        return (
            <div className='Container'>
                <h3>Add New Post</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group"><Link to='/Login/index' style={{color:'red'}}>Index</Link></div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" className="form-control"
                               value={this.state.Name}
                               onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input type="text" className="form-control" value={this.state.Price}
                               onChange={this.onChangePrice}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Post" className="btn btn-primary"/>
                    </div>
                    
                </form>
            </div>
        )
    }
}