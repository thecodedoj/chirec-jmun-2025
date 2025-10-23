// app/committees/page.tsx
"use client";

import React from "react";
import Link from "next/link"; // ✅ import Link for navigation
import "./committees.css";

import disecLogo from "./disec.png";
import unhrcLogo from "./unhrc.png";
import ccpjLogo from "./ccpj.png";
import eslLogo from "./esl.png";
import iaeaLogo from "./iaea.png";
import lokLogo from "./lok-sabha.png";
import unicefLogo from "./unicef.png";
import ipLogo from "./ip.png";

interface Committee {
  id: number;
  name: string;
  fullName: string;
  agenda?: string;
  logoUrl: { src: string };
  freezeDate?: string;
}

const committees: Committee[] = [
  {
    id: 1,
    name: "DISEC",
    fullName: "Disarmament and International Security Committee",
    agenda:
      "Addressing the Threats to International Security Posed by Terrorism and Violent Non-state actors with a special emphasis on Middle East and North Africa",
    logoUrl: disecLogo,
  },
  {
    id: 2,
    name: "UNHRC",
    fullName: "United Nations Human Rights Council",
    agenda:
      "Discussing accountability mechanisms for the disproportionate use of force and collective punishment in conflict zones, with an emphasis on the protection of journalists and humanitarian aid workers",
    logoUrl: unhrcLogo,
  },
  {
    id: 3,
    name: "UNICEF",
    fullName: "United Nations Children's Fund",
    agenda:
      "Discussing strategies to protect children in crisis and conflict zones",
    logoUrl: unicefLogo,
  },
  {
    id: 4,
    name: "CCPCJ",
    fullName: "Commission on Crime Prevention and Criminal Justice",
    agenda:
      "Strengthening international cooperation in addressing the smuggling of migrants",
    logoUrl: ccpjLogo,
  },
  {
    id: 5,
    name: "IAEA",
    fullName: "International Atomic Energy Agency",
    agenda:
      "Deliberating upon the International Response to Reported Israeli Strikes on Iranian Nuclear Facilities",
    logoUrl: iaeaLogo,
    freezeDate: "13 June 2025",
  },
  {
    id: 6,
    name: "Lok Sabha",
    fullName: "Indian Parliament - Lower House",
    agenda:
      "Deliberation upon 'The Great Nicobar Island project': A path towards development or ecological risk, with special emphasis on the Forest Rights Act (FRA), 2006 and the Wildlife Protection Act, 1972",
    logoUrl: lokLogo,
  },
  {
    id: 7,
    name: "ESL",
    fullName: "European Super League",
    agenda:
      "Discussing the Implications of the European Super League on Domestic Leagues, Competitive Balance, and Grassroots Football",
    logoUrl: eslLogo,
  },
  {
    id: 8,
    name: "IP",
    fullName: "International Press",
    logoUrl: ipLogo,
  },
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
          <Link
            key={committee.id}
            href={`/${committee.name.toLowerCase().replace(" ", "-")}`}
            className="committee-card" // ✅ apply card styling directly to Link
          >
            <div className="committee-logo-container">
              <img
                src={committee.logoUrl.src}
                alt={`${committee.name} Logo`}
                className="committee-logo"
              />
            </div>

            <div className="committee-content">
              <h2 className="committee-name">{committee.name}</h2>
              <h3 className="committee-full-name">{committee.fullName}</h3>

              {committee.agenda && (
                <div className="committee-agenda">
                  <h4>Agenda</h4>
                  <p>{committee.agenda}</p>
                </div>
              )}

              {committee.freezeDate && (
                <div className="freeze-date">
                  <span className="freeze-label">Freeze Date:</span>{" "}
                  <span className="freeze-value">{committee.freezeDate}</span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
