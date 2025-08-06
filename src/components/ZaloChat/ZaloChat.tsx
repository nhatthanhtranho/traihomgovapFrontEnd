'use client';
// components/ZaloChatButton.jsx

import React from 'react';

const ZALO_PHONE = '0913673661'; // Replace with your phone number including country code, no '+'

export default function ZaloChatButton() {
  return (
    <>
      <style jsx>{`
        .zalo-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          cursor: pointer;
          z-index: 1000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ring {
          position: absolute;
          width: 80px;
          height: 80px;
          border: 3px solid #0068FF;
          border-radius: 50%;
          animation: ring-pulse 2s infinite;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          opacity: 0.6;
        }

        @keyframes ring-pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          70% {
            transform: translate(-50%, -50%) scale(1.6);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        .icon {
          width: 35px;
          height: 35px;
          position: relative;
          z-index: 1;
        }
      `}</style>

      <a
        href={`https://zalo.me/${ZALO_PHONE}`}
        target="_blank"
        rel="noopener noreferrer"
        className="zalo-button"
        aria-label="Chat with me on Zalo"
      >
        <span className="ring"></span>
        <img
          src="/assets/images/zalo.svg"
          className='h-20 w-20'
          alt="Zalo"
          draggable={false}
        />
      </a>
    </>
  );
}
