import axios from "axios";
import { ApiKey, baseUrlApi } from "../config";

export const getLogin = async (payload) => {
  console.log(payload.name, "payload");

  const formData = new FormData();
  formData.append("name", payload.name);
  formData.append("mobile", payload.mobile);
  formData.append("X-Api-Key", ApiKey);
  // Log FormData entries
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  try {
    const response = await axios.post(`${baseUrlApi}login_otp/add/`, formData, {
      headers: {
        "X-Api-Key": "8YUI3673DEB6F281A8F2E856902HJKU7",
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(formData);
    return response?.data;
  } catch (error) {
    console.log(
      "ReactUserLogin",
      error.response?.data?.errors || error.message
    );
  }
};


export const VerifyOtp = async (otp,Mobile) => {
  const formData = new FormData();
  formData.append("otp", otp);
  formData.append("mobile", Mobile);
  formData.append("X-Api-Key", ApiKey);  
  try {
    const response = await axios.post( `${baseUrlApi}login_otp/update/`,formData, {
        headers: {
          "X-Api-Key": "8YUI3673DEB6F281A8F2E856902HJKU7",
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response?.data;
  } catch (error) {
    console.log(
      "ReactUserLogin",
      error.response?.data?.errors || error.message
    );
  }
};



export const ForgotPassword = async (otp,Mobile) => {
  const formData = new FormData();
  formData.append("otp", otp);
  formData.append("mobile", Mobile);
  formData.append("X-Api-Key", ApiKey);  
  try {
    const response = await axios.post( `${baseUrlApi}login_otp/update/`,formData, {
        headers: {
          "X-Api-Key": "8YUI3673DEB6F281A8F2E856902HJKU7",
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response?.data;
  } catch (error) {
    console.log(
      "ReactUserLogin",
      error.response?.data?.errors || error.message
    );
  }
};
