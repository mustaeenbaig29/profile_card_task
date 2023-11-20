import React, { useState, useEffect } from "react";
import "./ProfileCard.css";

function ProfileCard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        const data = await response.json();
        setUserData(data.results[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="card-container">
      {userData && (
        <>
          <header>
            <img src={userData.picture.large} alt={`${userData.name.first} ${userData.name.last}`} />
          </header>
          <h1 className="bold-text">
            {`${userData.name.first} ${userData.name.last}`}{" "}
            <span className="normal-text">{userData.gender}</span>
          </h1>
          <h2 className="normal-text">{userData.location.city}</h2>
          <div className="details-container">
            <div className="followers">
              <h3 className="bold-text">{userData.location.street.name}</h3>
              <h2 className="smaller-text">City</h2>
            </div>
            <div className="details">
              <h2 className="bold-text">{userData.cell}</h2>
              <h2 className="smaller-text">Phone</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfileCard;
