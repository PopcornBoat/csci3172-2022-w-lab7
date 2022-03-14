import React from 'react';
import { useNavigate } from "react-router-dom";

const Profile = ({ props }) => {
    const nav = useNavigate();
    return (
        <div className="container-sm mx-auto mt-5 text-center border border-2 rounded">
            <h1>Profile</h1>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Email: {props.email}</p>
            <p>Favourite Season: {props.favSeason}</p>
            <button className="mt-3 btn btn-primary mb-3"
                onClick={() => {
                    nav("/dashboard");
                }}>go to dashboard</button>
        </div>
    );
}

export default Profile;