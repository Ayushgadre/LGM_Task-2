import React from "react";
import "./style.css";
export default function Cards(props){
    return(
        <>
        {props.userData.map((user,index)=>{
            return(
                <div class="column">
                    <div class="img1">
                        <img src={user.avatar} alt="" />
                        <div class="details">
                            <h2>
                                <span>{user.first_name}</span>
                                {user.last_name}
                            </h2>
                        <p>{user.email}</p>
                        <div class="more">
                            <a href="#services" class="read-more">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            );
        })}
        </>
    );
}