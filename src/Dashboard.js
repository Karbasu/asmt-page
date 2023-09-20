import React, { useState } from "react";
import "./Dashboard.css";
import PopulationChart from "./PopulationChart.js";
import Modal from "react-modal";
import {Link} from 'react-router-dom'

function Dashboard() {
  // here are image icons
  const addUser = require("./Images/total user.png");
  const transaction = require("./Images/price-tag.png");
  const toatalUsers = require("./Images/user.png");
  const like = require("./Images/like.png");
  const revenue = require("./Images/revenue.png");
  const circle_graph = require("./Images/circle-graph.png");
  const adUser = require("./Images/total user.png");

  const [showBasic, setShowBasic] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [instagramId, setInstagramId] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [addedProfiles, setAddedProfiles] = useState([]); // State for added profiles

  const openModal = () => {
    setIsModalOpen(true);
    setShowButtons(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowBasic(false);
    setShowContact(false);
    setShowButtons(false);
    // Clear form fields when the modal is closed
    setName("");
    setEmail("");
    setPhoneNumber("");
    setInstagramId("");
    setYoutubeLink("");
  };

  const openBasicSection = () => {
    setShowBasic(true);
    setShowContact(false);
  };

  const openContactSection = () => {
    setShowBasic(false);
    setShowContact(true);
  };

  const handleAddProfile = () => {
    // Check if all fields are filled

    if (name && email && phoneNumber && instagramId && youtubeLink) {
      // Create a new profile object
      const newProfile = {
        name,
        email,
        phoneNumber,
        instagramId,
        youtubeLink,
      };

     // Clear the existing content in the dashboard_profile div
    const dashboardProfile = document.querySelector(".dashboard_profile");
    dashboardProfile.innerHTML = "";

    // Create a div for the name
    const nameElement = document.createElement("h3");
    nameElement.textContent = `${newProfile.name}`;
   
    // Create a new div element for displaying the profile
    const profileDiv = document.createElement("div");
    profileDiv.className = "added-profile";

    // Create a parent div for basic information (email and phone number)
    const basicInfoDiv = document.createElement("div");
    basicInfoDiv.className = "dashboard_profile_basic";
    const emailElement = document.createElement("p");
    emailElement.textContent = `Email: ${newProfile.email}`;
    basicInfoDiv.appendChild(emailElement);
    const phoneElement = document.createElement("p");
    phoneElement.textContent = `Phone Number: ${newProfile.phoneNumber}`;
    basicInfoDiv.appendChild(phoneElement);

    // Create a parent div for social information (Instagram ID and YouTube link)
    const socialInfoDiv = document.createElement("div");
    socialInfoDiv.className = "dashboard_profile_social";
    const instagramElement = document.createElement("p");
    instagramElement.textContent = `Instagram ID: ${newProfile.instagramId}`;
    socialInfoDiv.appendChild(instagramElement);
    const youtubeElement = document.createElement("p");
    youtubeElement.textContent = `YouTube Link: ${newProfile.youtubeLink}`;
    socialInfoDiv.appendChild(youtubeElement);

    // Append the basic and social info divs to the profileDiv
    profileDiv.appendChild(basicInfoDiv);
    profileDiv.appendChild(socialInfoDiv);

      // Append the profileDiv to the dashboard_profile
      dashboardProfile.appendChild(nameElement);
    dashboardProfile.appendChild(profileDiv);
      // Add the new profile to the list of added profiles
      setAddedProfiles([...addedProfiles, newProfile]);

      // Close the modal and reset the form fields
      closeModal();
    }
    else {
      alert("please fill all the fields");
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard_container">
        <div className="dashboard_nav_bar">
          <h2>Board.</h2>
          <h4>Dashboard</h4>
          <h4>Transactions</h4>
          <h4>Schedules</h4>
          <h4>Users</h4>
          <h4>settings</h4>
          <p className="help">Help</p>
          <p>Contact Us</p>
        </div>
        <div className="dashboard_contents">
          <h3>  Dashboard</h3>
          <div className="dashboard_numbers">
            <div>
              <img src={revenue} alt="" />
              <p>Total Revenues</p>
              <h2>
                2,219,000 <span>+2.5%</span>
              </h2>
            </div>
            <div>
              <img src={transaction} alt="" />
              <p>Total Transactions</p>
              <h2>
                1,500 <span>+1.5%</span>
              </h2>
            </div>
            <div>
              <img src={like} alt="" />
              <p>Total Likes</p>
              <h2>
                9,700 <span>+2.0%</span>
              </h2>
            </div>
            <div>
              <img src={adUser} alt="" />
              <p>Total Users</p>
              <h2>
                9,000 <span>+3.0%</span>
              </h2>
            </div>
          </div>
          <div className="dashboard_graph">
            <div>
              <PopulationChart />
            </div>
          </div>
          <div className="dashboard_productAndprofile">
            <div className="dashboard_top_products">
              <div>
                <h2>Top Products</h2>
                <img src={circle_graph} alt="" />
              </div>
              <div className="dashboard_items">
                <p>August-September 2023</p>
                <h3>Basic Tees</h3>
                <p>55%</p>
                <h3>Custom short Pants</h3>
                <p>20%</p>
                <h3>Super Hoodies</h3>
                <p>25%</p>
              </div>
            </div>
            <div className="dashboard_profile">
              <div>
                <img onClick={openModal} src={adUser} alt="" />
              </div>
              <p>Add Profile</p>
            </div>
          </div>
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Add New Profile"
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <div className="Add_profile_heading">
            <span onClick={closeModal}>close</span>
            <h2>Add New Profile</h2>
          </div>

          {showButtons && (
            <div className="section-buttons">
              <h3 onClick={openBasicSection}>Basic</h3>
              <h3 className="section-buttons_social" onClick={openContactSection}>
                Social
              </h3>
            </div>
          )}

          <div className="dashboard_sections">
            {showBasic && (
              <div className="section">
                <h3>Name</h3>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <h3>Email</h3>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <h3>Phone Number</h3>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
            )}

            {showContact && (
              <div className="section">
                <h3>Instagram ID</h3>
                <input
                  type="text"
                  placeholder="Instagram ID"
                  value={instagramId}
                  onChange={(e) => setInstagramId(e.target.value)}
                  required
                />
                <h3>YouTube Link</h3>
                <input
                  type="text"
                  placeholder="YouTube Link"
                  value={youtubeLink}
                  onChange={(e) => setYoutubeLink(e.target.value)}
                  required
                />
              </div>
            )}
          </div>

          <button className="profile_add" onClick={handleAddProfile}>Submit</button>
        </Modal>
      </div>
    </div>
  );
}

export default Dashboard;


