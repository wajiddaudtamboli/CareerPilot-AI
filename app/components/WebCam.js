"use client";
import React from "react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Lightbulb, WebcamIcon } from "lucide-react";
import { Button } from "../../components/ui/button";

// Dynamic import to avoid SSR issues
const Webcam = dynamic(() => import("react-webcam"), { ssr: false });

function WebCam() {
  const [webCamEnabled, setWebCamEnabled] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div>
        <WebcamIcon className="h-72 w-full my-7 p-20 bg-secondary rounded-lg border" />
      </div>
    );
  }

  return (
    <>
      <div>
        {webCamEnabled ? (
          <>
            <div>
              <Webcam
                onUserMedia={() => setWebCamEnabled(true)}
                onUserMediaError={() => setWebCamEnabled(false)}
                mirrored={true}
                style={{
                  height: 300,
                  width: 800,
                }}
              />
            </div>
          </>
        ) : (
          <>
            <WebcamIcon className="h-72 w-full my-7 p-20 bg-secondary rounded-lg border" />
          </>
        )}
      </div>
    </>
  );
}

export default WebCam;
