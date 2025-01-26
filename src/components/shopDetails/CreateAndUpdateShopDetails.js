import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import { useParams } from "react-router-dom";
import styles from "./ShopDetails.module.css"; // Assuming you have a CSS module for styling
import { createShop, getShopDetails, updateShop } from "../../services/service"; // Import the createShop, getShopDetails, and updateShop services

const CreateAndUpdateShopDetails = () => {
  const { id } = useParams();
  const [shopName, setShopName] = useState("");
  const [gstin, setGstin] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    if (id) {
      // Fetch shop details if id is present
      const fetchShopDetails = async () => {
        try {
          const shopDetails = await getShopDetails(id);
          setShopName(shopDetails?.data.shopName);
          setGstin(shopDetails?.data.gstin);
          setEmail(shopDetails?.data.email);
          setMobileNo(shopDetails?.data.mobileNo);
          setAddress(shopDetails?.data.address);
          setDistrict(shopDetails?.data.district);
          setState(shopDetails?.data.state);
          setPincode(shopDetails?.data.pincode);
        } catch (error) {
          console.error("Error fetching shop details:", error);
        }
      };
      fetchShopDetails();
    }
  }, [id]);

  const handleSaveClick = async () => {
    const shopData = {
      shopName,
      gstin,
      email,
      mobileNo,
      address,
      district,
      state,
      pincode,
    };
    console.log("Shop data:", shopData);
    try {
      if (id) {
        const response = await updateShop(id, shopData);
        console.log("Shop updated successfully:", response);
      } else {
        const response = await createShop(shopData);
        console.log("Shop created successfully:", response);
      }
      // Add any additional logic after successful creation or update
    } catch (error) {
      console.error("Error saving shop:", error);
    }
  };

  return (
    <div className={styles.shopDetailsWrapper}>
      <div className={styles.shopDetailsContainer}>
        <div className={styles.inputRow}>
          <label style={{ width: "170px" }}>Shop Name</label>
          <Input
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
          />
        </div>
        <div className={styles.inputRow}>
          <label style={{ width: "170px" }}>GSTIN/UIN</label>
          <Input value={gstin} onChange={(e) => setGstin(e.target.value)} />
        </div>
        <div className={styles.inputRow}>
          <label style={{ width: "170px" }}>Email</label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.inputRow}>
          <label style={{ width: "170px" }}>Mobile No</label>
          <Input
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </div>
        <div className={styles.inputRow}>
          <label style={{ width: "170px" }}>Address</label>
          <Input value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className={styles.inputRow}>
          <label style={{ width: "170px" }}>District</label>
          <Input
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
        </div>
        <div className={styles.inputRow}>
          <label style={{ width: "170px" }}>State</label>
          <Input value={state} onChange={(e) => setState(e.target.value)} />
        </div>
        <div className={styles.inputRow}>
          <label style={{ width: "170px" }}>Pincode</label>
          <Input value={pincode} onChange={(e) => setPincode(e.target.value)} />
        </div>
        <div className={styles.buttonRow}>
          <Button type="primary" onClick={handleSaveClick}>
            {id ? "Update" : "Register"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateAndUpdateShopDetails;
