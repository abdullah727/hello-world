
import React, { Component } from 'react';

class Footer extends Component   {
    constructor(props) {
        super(props);
        this.state = {
        //  clickRender:0
        };
      }

    render()
    {
        return(
           <div>
               <span class="itemsLeft">{this.props.itemsCount} items left</span>
               <button id="btn-all" class="btn btn-success btn-sm" onClick={this.props.allClick}>ALL</button>
               <button id="btn-complete" class="btn btn-success btn-sm" onClick={this.props.completeClick}>Completed</button>
               <button id="btn" onClick={this.props.clearClick}>Clear Completed</button>
            </div>
        );
    }
}


export default Footer;
