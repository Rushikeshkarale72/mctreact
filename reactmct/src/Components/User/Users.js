import React, { useContext, useState } from "react";
import { Global } from "../../App";
import Navbar from "../Navbar/Navbar";
import "./user.css";

const Users = () => {
  const obj = useContext(Global);
  const [gender, setGender] = useState("all");
  const [initial , seInitial] = useState(false)

  return (
    <div className="userContainer">
      <Navbar />
      <div className="Details">
        <h1>User Details</h1>
        <p>Lorem ipsum dolor sit amet. Et aliquam nesciunt quo voluptatem nobis sit sunt ullam qui galisum iste quo excepturi facilis. Id sint omnis qui veritatis unde eos autem pariatur qui facilis libero eum earum atque cum quam facilis! Eos ullam quia sit consequatur vero sit optio placeat qui distinctio minus et facilis consequuntur rem autem voluptatem sit illum voluptatum? Aut autem quibusdam ex voluptas aliquid ad explicabo voluptas et excepturi sint aut dolores atque qui dolore repellat.Quo consequuntur voluptatem est rerum sint est placeat sapiente ut fugiat sint. Ad temporibus fuga ut ullam iure qui asperiores voluptas. Aut perspiciatis eius aut corrupti Quis ut dolore quod?</p>

      </div>
      <div className="bigRadioContainer">
        <div className="radioBtn">
          <input
            onClick={(e) => {
              setGender(e.target.value);
              seInitial(true)
              console.log(obj.userData.results);
            }}
            type="radio"
            value="all"
            name="gender"
          />
          <label>All</label>
        </div>
        <div className="radioBtn">
          <input
            onClick={(e) => {
              setGender(e.target.value);
              seInitial(true)
              console.log(obj.userData.results);
            }}
            type="radio"
            value="male"
            name="gender"
          />
          <label>Male</label>
        </div>
        <div className="radioBtn">
          <input
            onClick={(e) => {
              setGender(e.target.value);
              seInitial(true)
              console.log(obj.userData.results);
            }}
            type="radio"
            value="female"
            name="gender"
          />
          <label>Female</label>
        </div>
      </div>
      <div className="userHeader">
        <div className="leftUser">
          <h4>Image</h4>
          <h4>Name</h4>
        </div>
        <div className="rightUser">
          <h4>Email</h4>
          <h4>Gender</h4>
        </div>
      </div>
      <div className="userInnerContainer">
        {initial &&
          obj.userData.results.map((ele) => {
            if (ele.gender === gender) {
              console.log(ele);
              return (
                <>
                  <div className="genderDataContainer">
                    <div className="leftUserGender">
                      <img src={ele.picture.medium} alt="Hello" />
                      <h4>{ele.name.first}</h4>
                    </div>
                    <div className="rightUserGender">
                      <h4>{ele.email}</h4>
                      <h4>{ele.gender}</h4>
                    </div>
                  </div>
                </>
              );
            } else if (gender === "all") {
              return (
                <>
                  <div className="genderDataContainer">
                    <div className="leftUserGender">
                      <img src={ele.picture.medium} alt="Hello" />
                      <h4>{ele.name.first}</h4>
                    </div>
                    <div className="rightUserGender">
                      <h4>{ele.email}</h4>
                      <h4>{ele.gender}</h4>
                    </div>
                  </div>
                </>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Users;