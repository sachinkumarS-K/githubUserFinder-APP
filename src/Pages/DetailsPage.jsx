import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useGetDetail } from "../hooks/useGetDetail";
import Loader from "../Components/Loader/Loader";
import './DetailsPage.css'
function DetailsPage({name}) {
  const { id } = useParams();
  const { details } = useGetDetail(name , id);
  //console.log(details);
  return (
    <div className="detail-wrapper">
      {details.loading ? (
        <Loader />
      ) : (
        <div className="details">
          
            <div className="image">
                <img src={details.data.image} alt="" />
            </div>
            <div className="userInfo">
                <h2>Name :  <span>{details.data.name}</span></h2>
                <p> Bio : <span>{(details.data.bio) ? (details.data.bio) : ("#######")}</span> </p>
              <ul className="list">
                <li>  <span>Followers : </span>{details.data.followers}</li>
                <div className="line"></div>
                <li> <span>Following : </span> {details.data.following}</li>
              </ul>
              <div className="link">
                <p>Github link  : <NavLink to={details.data.link}>{ details.data.link}</NavLink></p>
              </div>
            </div>
        </div>
      )}
    </div>
  );
}

export default DetailsPage;
