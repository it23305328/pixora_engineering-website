import React, { useState } from "react";

// ==========================================
// WhatsApp Floating Button Component
// ==========================================
// Change WHATSAPP_NUMBER to your actual number
// Format: country code + number (no + or spaces)
// Example Sri Lanka: 94771234567
// ==========================================
const WHATSAPP_NUMBER = "94779137263";
const WHATSAPP_MESSAGE =
  "Hello! I'm interested in your services. Please assist me.";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Tooltip label */}
      <div
        style={{
          position: "fixed",
          bottom: "90px",
          right: isHovered ? "80px" : "-200px",
          backgroundColor: "#fff",
          color: "#333",
          padding: "8px 14px",
          borderRadius: "20px",
          fontSize: "13px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "600",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          whiteSpace: "nowrap",
          transition: "right 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          zIndex: 9998,
          pointerEvents: "none",
          border: "1px solid rgba(37,211,102,0.3)",
        }}
      >
        💬 Chat with us!
      </div>

      {/* Pulse ring */}
      <div
        style={{
          position: "fixed",
          bottom: "33px",
          right: "33px",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          backgroundColor: "rgba(37, 211, 102, 0.35)",
          zIndex: 9997,
          animation: "whatsapp-pulse 2s ease-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* Main WhatsApp Button */}
      <button
        id="whatsapp-floating-btn"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        title="Chat with us on WhatsApp"
        aria-label="Open WhatsApp chat"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: isHovered ? "#1da851" : "#25D366",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: isHovered
            ? "0 8px 30px rgba(37, 211, 102, 0.6)"
            : "0 4px 20px rgba(37, 211, 102, 0.4)",
          zIndex: 9999,
          transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          transform: isHovered ? "scale(1.12) translateY(-3px)" : "scale(1)",
        }}
      >
        {/* Official WhatsApp Brand Icon (inline SVG) */}
        <img
          src="/src/assets/pngegg.png"
          alt="WhatsApp"
          width="28"
          height="28"
          style={{
            objectFit: "contain",
            display: "block",
          }}
        />
      </button>

      {/* CSS Animations */}
      <style>{`
        @keyframes whatsapp-pulse {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          70% {
            transform: scale(1.6);
            opacity: 0;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
