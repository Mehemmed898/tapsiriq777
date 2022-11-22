import React,{Component} from 'react'

class Wine extends Component {
  render() {
    const {isInStock, title, price} = this.props;
 
    return (
      <div className="product">
     
       
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <p>{this.props.rating}</p>

     
      </div>
    );
  }
 }
 export default Wine