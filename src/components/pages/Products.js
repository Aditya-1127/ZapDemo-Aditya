import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartactions'
import { Dropdown } from 'semantic-ui-react';

const categories = [
    {
        key: 1,
        text: 'Whisky',
        value: 1
  
    },
    {
        key: 2,
        text: 'Gin',
        value: 2
    },
    {
      key: 3,
      text: 'Beer',
      value: 3
    },
    {
      key: 4,
      text: 'Vodka',
      value: 'vodka'
    },
    
    {
      key: 5,
      text: 'Rum',
      value: 5   
    },
    {
      key: 6,
      text: 'Champagne',
      value: 6
    },
  ]
  
class Products extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }
    constructor (props) {
        super (props)
        this.state = {
          val2: 0
           
        }
      }
    
      showCategory=(event,data) => {
          // console.log(data.value)
        this.setState({
          val2 : data.value
        })
       
      }
    render(){
        let itemList = this.props.items.map(item=>{
           
            // if(this.state.val2==4){
                // console.log(this.state.val2)
                if(item.desc=='Vodka'){
                return(
                    <div className="card" key={item.id}>
                            <div className="card-image">
                                <img src={item.img} alt={item.title}/>
                                <span className="card-title">{item.title}</span>
                                <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" ><i onClick={()=>{this.handleClick(item.id)}} class="fa fa-plus" aria-hidden="true">add</i></span>
                            </div>
                            <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}Rs.</b></p>
                            </div>
                     </div>
    
                )
            }
            
        // }
            else if (this.state.val2 ==0){
                return(
                    <div className="card" key={item.id}>
                            <div className="card-image">
                                <img src={item.img} alt={item.title}/>
                                <span className="card-title">{item.title}</span>
                                <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" ><i onClick={()=>{this.handleClick(item.id)}} class="fa fa-plus" aria-hidden="true">add</i></span>
                            </div>
                            <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}Rs.</b></p>
                            </div>
                     </div>
    
                )
            }
            
        })

        return(
            <div className="container">
              <Dropdown
    // placeholder='Search'
    // search
     selection
    options={categories}
    onChange={this.showCategory}
  
  />
                <h3 className="">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
}
const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products)