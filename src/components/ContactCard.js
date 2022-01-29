import React from "react";
import user from "../images/user.png";

const CardContact = (props) => {
    const {id,name,mobile,email,address,city} = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"/>
            <div className="content">
            <div className="header">{name}</div>
            <div className="">{mobile}</div>
            <div className="">{email}</div>
            <div className="">{address}</div>
            <div className="">{city}</div>
            </div>
            <i className="trash alternate outline icon"
            onClick={()=> props.clickHandler(id)}
            style={{color : "red", marginTop:"7px"}}></i>
         </div>
    );
}

export default CardContact;