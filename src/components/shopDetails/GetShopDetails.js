import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { Input, Button } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons"; // Import icons from antd
import styles from "./ShopDetails.module.css"; // Assuming you have a CSS module for styling
import { getShop } from "../../services/service"; // Import the getShop service

const GetShopDetails = () => {
  const [shopId, setShopId] = useState("");
  const [shopDetails, setShopDetails] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetDetailsClick = async () => {
    try {
      const response = await getShop();
      setShopDetails(response?.data[0]); // Update shopDetails state
      console.log("Shop details fetched successfully:", response);
    } catch (error) {
      console.error("Error fetching shop details:", error);
    }
  };

  const handleAddClick = () => {
    navigate("CreateAndUpdateShopDetails"); // Redirect to CreateAndUpdateShopDetails
  };

  const handleEditClick = () => {
    if (shopDetails && shopDetails._id) {
      navigate(`CreateAndUpdateShopDetails/${shopDetails._id}`); // Redirect to CreateAndUpdateShopDetails with shopId
    }
  };

  useEffect(() => {
    handleGetDetailsClick();
  }, []);
  return (
    <div className={styles.shopDetailsWrapper}>
      <div className={styles.shopDetailsContainer}>
        <div className={styles.shopDetails}>
          <h3>Shop Details</h3>
          {shopDetails ? (
            <>
              <p>
                <strong>Shop Name:</strong> {shopDetails.shopName}
              </p>
              <p>
                <strong>GSTIN/UIN:</strong> {shopDetails.gstin}
              </p>
              <p>
                <strong>Email:</strong> {shopDetails.email}
              </p>
              <p>
                <strong>Mobile No:</strong> {shopDetails.mobileNo}
              </p>
              <p>
                <strong>Address:</strong> {shopDetails.address}
              </p>
              <p>
                <strong>District:</strong> {shopDetails.district}
              </p>
              <p>
                <strong>State:</strong> {shopDetails.state}
              </p>
              <p>
                <strong>Pincode:</strong> {shopDetails.pincode}
              </p>
              <Button
                icon={<EditOutlined />}
                style={{ marginRight: 8 }}
                onClick={handleEditClick}
              >
                Edit
              </Button>
              <Button icon={<DeleteOutlined />} danger>
                Delete
              </Button>
            </>
          ) : (
            <p>No shop details available.</p>
          )}
          {!shopDetails && (
            <Button icon={<PlusOutlined />} onClick={handleAddClick}>
              Add Shop Details
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetShopDetails;
