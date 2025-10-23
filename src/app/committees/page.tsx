// app/committees/page.tsx
import React from 'react';
import './committees.css';

interface Committee {
  id: number;
  name: string;
  fullName: string;
  agenda: string;
  logoUrl: string;
  freezeDate?: string;
}

const committees: Committee[] = [
  {
    id: 1,
    name: "DISEC",
    fullName: "Disarmament and International Security Committee",
    agenda: "Addressing the Threats to International Security Posed by Terrorism and Violent Non-state actors with a special emphasis on Middle East and North Africa",
    logoUrl: "/committees/disec.png"
  },
  {
    id: 2,
    name: "UNHRC",
    fullName: "United Nations Human Rights Council",
    agenda: "Discussing accountability mechanisms for the disproportionate use of force and collective punishment in conflict zones, with an emphasis on the protection of journalists and humanitarian aid workers",
    logoUrl: "/committees/unhrc.png"
  },
  {
    id: 3,
    name: "UNICEF",
    fullName: "United Nations Children's Fund",
    agenda: "Discussing strategies to protect children in crisis and conflict zones",
    logoUrl: "/committees/unicef.png"
  },
  {
    id: 4,
    name: "CCPCJ",
    fullName: "Commission on Crime Prevention and Criminal Justice",
    agenda: "Strengthening international cooperation in addressing the smuggling of migrants",
    logoUrl: "/committees/ccpcj.png"
  },
  {
    id: 5,
    name: "IAEA",
    fullName: "International Atomic Energy Agency",
    agenda: "Deliberating upon the International Response to Reported Israeli Strikes on Iranian Nuclear Facilities",
    logoUrl: "/committees/iaea.png",
    freezeDate: "13 June 2025"
  },
  {
    id: 6,
    name: "Lok Sabha",
    fullName: "Indian Parliament - Lower House",
    agenda: "Deliberation upon 'The Great Nicobar Island project': A path towards development or ecological risk, with special emphasis on the Forest Rights Act (FRA), 2006 and the Wildlife Protection Act, 1972",
    logoUrl: "/committees/loksabha.png"
  },
  {
    id: 7,
    name: "ESL",
    fullName: "European Super League",
    agenda: "Discussing the Implications of the European Super League on Domestic Leagues, Competitive Balance, and Grassroots Football",
    logoUrl: "/committees/esl.png"
  }
];

export default function CommitteesPage() {
  return (
    <div className="committees-container">
      <div className="committees-hero">
        <h1 className="committees-title">Our Committees</h1>
        <p className="committees-subtitle">
          Explore the diverse range of committees at CHIREC JMUN 2025
        </p>
      </div>

      <div className="committees-grid">
        {committees.map((committee) => (
          <div key={committee.id} className="committee-card">
            <div className="committee-logo-container">
              <img 
                src={committee.logoUrl} 
                alt={`${committee.name} Logo`}
                className="committee-logo"
              />
            </div>
            
            <div className="committee-content">
              <h2 className="committee-name">{committee.name}</h2>
              <h3 className="committee-full-name">{committee.fullName}</h3>
              
              <div className="committee-agenda">
                <h4>Agenda</h4>
                <p>{committee.agenda}</p>
              </div>

              {committee.freezeDate && (
                <div className="freeze-date">
                  <span className="freeze-label">Freeze Date:</span>
                  <span className="freeze-value">{committee.freezeDate}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}