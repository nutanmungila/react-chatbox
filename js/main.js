var React = require('react');
var ChatBox = React.createClass({

	getInitialState:function() {
		return {msg : []}
	},

    handleKeyPress:function(event) {

        if(event.keyCode === 13){
        	this.setState({msg : [...this.state.msg,event.target.value]});
            //this.refs.myInput.getDOMNode().setValue("");
            React.findDOMNode(this.refs.myInput).value = "";
        }
    	
    },
    render:function() {
            return (
            	<div>
            	 	<input type="text" ref="myInput" onKeyDown={this.handleKeyPress}  />
	            	<div>
	            	
	            	{this.state.msg.map(function(item) {
	            		return( <div>{item}</div>)
	            	})}

	            	</div>
            	</div>
            	
            	);
        }

});

 
    
 React.render(<ChatBox />,document.getElementById("div1"));

