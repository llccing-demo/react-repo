var React = require('react');
var ProductBox;

ProductBox = React.createClass({
    getInitialState:function(){
      this.state
    },
    handlerClick:function(event){
      alert();
    },
    render:function(){
       return (
           <div className="productBox">
               hello react es2015 webpack!
               <button onClick={this.handlerClick}>click</button>
           </div>
       );
   }
});

module.exports = ProductBox;