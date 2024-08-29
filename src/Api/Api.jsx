import axios from "axios";
import { ApiKey, baseUrlApi } from "../config";

export const getLogin = async (payload) => {
  console.log(payload.name, "payload");

  const formData = new FormData();
  formData.append("name", payload.name);
  formData.append("mobile", payload.mobile);
  // formData.append("X-Api-Key", ApiKey);
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
    return error

  }
};


export const VerifyOtp = async (otp,Mobile) => {
  const formData = new FormData();
  formData.append("otp", otp);
  formData.append("mobile", Mobile);
  // formData.append("X-Api-Key", ApiKey); 


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
    return error

  }
};



export const ForgotPswrd = async (Mobile) => {
  const formData = new FormData();
  formData.append("mobile", Mobile);
  formData.append("X-Api-Key", ApiKey);  
  
  try {
    const response = await axios.post( `${baseUrlApi}forgot_password/add/`,formData, {
        headers: {
          "X-Api-Key": "8YUI3673DEB6F281A8F2E856902HJKU7",
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response?.data;
  } catch (error) {
    return error
  }
};


export const RegisterMob = async (Mobile) => {
  const formData = new FormData();
  formData.append("mobile", Mobile);
  formData.append("X-Api-Key", ApiKey);  

  try {
    const response = await axios.post( `${baseUrlApi}register_otp/add/`,formData, {
        headers: {
          "X-Api-Key": "8YUI3673DEB6F281A8F2E856902HJKU7",
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response?.data;
  } catch (error) {
    return error
    // console.log(
    //   "ReactUserLogin---------",
    //   error
    // );
  }
};



export const VerifyOtpReg = async (otp,Mobile) => {
  const formData = new FormData();
  formData.append("otp", otp);
  formData.append("mobile", Mobile);
  formData.append("X-Api-Key", ApiKey);  
  try {
    const response = await axios.post( `${baseUrlApi}register_otp/update/`,formData, {
        headers: {
          "X-Api-Key": "8YUI3673DEB6F281A8F2E856902HJKU7",
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response?.data;
  } catch (error) {
    return error
  }
};

export const ForgotOtp = async (otp,Mobile) => {
  const formData = new FormData();
  formData.append("otp", otp);
  formData.append("mobile", Mobile);
  formData.append("X-Api-Key", ApiKey);  
  try {
    const response = await axios.post( `${baseUrlApi}forgot_password/update/`,formData, {
        headers: {
          "X-Api-Key": "8YUI3673DEB6F281A8F2E856902HJKU7",
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response?.data;
  } catch (error) {
    return error
  }
};


export const setpswrd = async (password,confirmPassword,name,Mobile) => {
  const formData = new FormData();
  formData.append("fullname", name);
  formData.append("password", password);
  formData.append("confirm_password", confirmPassword);
  formData.append("mobile", Mobile);
  formData.append("X-Api-Key", ApiKey);  
  try {
    const response = await axios.post( `${baseUrlApi}users/add/`,formData, {
        headers: {
          "X-Api-Key": "8YUI3673DEB6F281A8F2E856902HJKU7",
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response?.data;
  } catch (error) {
    return error
  }
};



export const cateList = async () => {
  try {
    const response = await axios.get( `${baseUrlApi}business_details/all/`, {
        headers: {
          "X-Api-Key": "8YUI3673DEB6F281A8F2E856902HJKU7",
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response?.data;
  } catch (error) {
    return error
  }
};