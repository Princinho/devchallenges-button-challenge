import React from "react";
export default function Button(props){
    const classes=`${props.variant==="outline"?" outline-variant":""}
    ${props.variant==="text"?" text-variant": ""}
    ${props.disableShadow?" disable-shadow":""}
    ${props.disabled?" disabled-btn":""}
    ${props.size==="sm"?" sm":""}
    ${props.size==="md"?" md":""}
    ${props.size==="lg"?" lg":""}
    ${props.color==="primary"?" primary":""}
    ${props.color==="secondary"?" secondary":""}
    ${props.color==="danger"?" danger":""}`
    return (
    <button  className={classes.replace(/\s+/g, " ")}>
        {props.startIcon==="local_grocery_store"&&
        (<span class="material-symbols-outlined button-material-icons start-icon">
            add_shopping_cart
        </span>)}        
        
        Default
        
        {props.endIcon==="local_grocery_store"&&
        (<span class="material-symbols-outlined button-material-icons end-icon">
            add_shopping_cart
        </span>)}   
    </button>
    )
}