import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "./Loading";
import { setLoading } from "../redux/reducers/rootSlice";
import { useDispatch, useSelector } from "react-redux";
import Empty from "./Empty";
import fetchData from "../helper/apiCall";
import "../styles/user.css";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

const AdminApplications = () => {
  const applications = [
    {
      _id: "1",
      userId: {
        pic: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        firstname: "John",
        lastname: "Doe",
        email: "johndoe@vnu.edu.com",
        mobile: "1234567890",
      },
      age: "35",
      gender: "Male",
    },
    {
      _id: "2",
      userId: {
        pic: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        firstname: "Jane",
        lastname: "Smith",
        email: "janesmith@vnu.edu.com",
        mobile: "9876543210",
      },
      age: "24",
      gender: "Female",
    },
    {
      _id: "3",
      userId: {
      pic: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      firstname: "Jane",
      lastname: "Doe",
      email: "janedoe@vnu.edu.com",
      mobile: "098689752",
      },
      age: "30",
      gender: "Female",
    },
    {
      _id: "4",
      userId: {
      pic: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      firstname: "Alice",
      lastname: "Border",
      email: "alicesmith@vnu.edu.com",
      mobile: "9458932210"
      },
      age: "28",
      gender: "Female"
    },
    {
      "_id": "5",
      "userId": {
      "pic": "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      "firstname": "Michael",
      "lastname": "Johnson",
      "email": "michaeljohnson@vnu.edu.com",
      "mobile": "9451785210"
      },
      "age": "40",
      "gender": "Male"
    },
    {
      "_id": "6",
      "userId": {
      "pic": "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      "firstname": "Emily",
      "lastname": "Watson",
      "email": "emilywatson@vnu.edu.com",
      "mobile": "9896325468"
      },
      "age": "25",
      "gender": "Female"
    },
    {
      "_id": "7",
      "userId": {
      "pic": "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      "firstname": "David",
      "lastname": "Beckham",
      "email": "davidBeckham@vnu.edu.com",
      "mobile": "9876543210"
      },
      "age": "35",
      "gender": "Male"
    },

  ];

  return (
    <div>
      <h3 style={{ marginTop: '80px', marginRight: '210px' }}>ALL USERS</h3>
      <section className="user-section">
        
          <div className="user-container">
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Pic</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Mobile No.</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {applications?.map((ele, i) => {
                  return (
                    <tr key={ele?._id}>
                      <td>{i + 1}</td>
                      <td>
                        <img
                          className="user-table-pic"
                          src={
                            ele?.userId?.pic ||
                            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                          }
                          alt={ele?.userId?.firstname}
                        />
                      </td>
                      <td>{ele?.userId?.firstname}</td>
                      <td>{ele?.userId?.lastname}</td>
                      <td>{ele?.userId?.email}</td>
                      <td>{ele?.userId?.mobile}</td>
                      <td>{ele?.age}</td>
                      <td>{ele?.gender}</td>
                      <td className="select">
                        <button
                          className="btn user-btn accept-btn"
                          
                        >
                          Validate
                        </button>
                        <button
                          className="btn user-btn"
                          
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
      </section>
    </div>
  );
};

export default AdminApplications;
