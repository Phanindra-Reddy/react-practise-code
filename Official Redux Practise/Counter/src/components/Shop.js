import React from 'react';
import './Shop.css';
import {connect} from 'react-redux';
import { buyLaptop } from '../redux/actions';
import { Component } from 'react';

class Shop extends Component{

    render(){
        return (
            <div>
                <div className="item">
                    <h3>Apple M1 Mackbook Pro</h3>
                    <div className="info">
                        <p>Avaialble Laptops : {this.props.numOfLaptops}</p>
                        <button onClick={this.props.buyLaptop}>Buy</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        numOfLaptops: state.numOfLaptops
    }
}

const mapDispatchToProps = (diaptch) =>{
    return{
        buyLaptop: () => diaptch(buyLaptop())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
