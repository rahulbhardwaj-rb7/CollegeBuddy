import React from 'react';
import "./infoCard.css"

interface InfoCardProps {
    icon: React.ReactNode;
    number: string;
    label: string;
  }

  const InfoCard: React.FC<InfoCardProps> = ({ icon, number, label }) => {
    return (
      <div className="info-card">
        <div className="icon">{icon}</div>
        <div className="number">{number}</div>
        <div className="label">{label}</div>
      </div>
    );
  };

export default InfoCard;
