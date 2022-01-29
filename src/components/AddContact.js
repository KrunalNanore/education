import React from "react";

class AddContact extends React.Component{
    state = {
        name: "",
        mobile: "",
        email: "",
        address: "",
        city:""
    }
    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" &&( this.state.mobile==="" || this.state.email)
        && this.state.address === "" && this.state.city===""){
            alert("All fields are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({
            name: "",
            mobile: "",
            email: "",
            address: "",
            city:""
        });
    }
    render(){
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name"
                        value={this.state.name}
                        onChange={ (e)=>this.setState({name:e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Mobile Number</label>
                        <input type="text" name="mobile" placeholder="Mobile Number"
                        value={this.state.mobile}
                        onChange={ (e)=>this.setState({mobile:e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email"
                        value={this.state.email}
                        onChange={ (e)=>this.setState({email:e.target.value})}/>
                   
                    </div>
                    <div className="field">
                        <label>Address</label>
                        <input type="text" name="address" placeholder="Address"
                        value={this.state.address}
                        onChange={ (e)=>this.setState({address:e.target.value})}/>
                   
                    </div>
                    <div className="field">
                        <label>City</label>
                        <input type="text" name="city" placeholder="City"
                        value={this.state.city}
                        onChange={ (e)=>this.setState({city:e.target.value})}/>
                   </div>
                <button className="ui button blue" >Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact;