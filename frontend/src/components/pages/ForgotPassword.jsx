import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [identifier, setIdentifier] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/user/forgot-password",
        { identifier }
      );

      if (data.success) {
        toast.success(data.message);
        setStep(2);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error sending OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/user/reset-password",
        { identifier, otp, newPassword }
      );

      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error resetting password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {step === 1 ? (
        <form onSubmit={handleSendOtp}>
          <input
            type="text"
            placeholder="Enter your email or phone number"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </form>
      ) : (
        <form onSubmit={handleResetPassword}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Resetting Password..." : "Reset Password"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;