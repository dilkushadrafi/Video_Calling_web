import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

function VideoComp() {
    const { roomID } = useParams();
    const containerRef = useRef(null);

    useEffect(() => {
        if (!roomID || !containerRef.current) return;

        const appID = 658476482;
        const serverSecret = "15979772344fb187d28212c8d5bcae4c";

        // Generate the Kit Token for testing
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomID,
            Date.now().toString(),
            "Aamir"
        );

        // Create the meeting room
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: containerRef.current,
            sharedLinks: [
                {
                    name: 'Personal link',
                    url: `${window.location.protocol}//${window.location.host}/room/${roomID}`,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
        });

        // Cleanup function to properly remove Zego UI on component unmount
        return () => {
            if (zp) {
                zp.destroy(); // Destroy instance if available
            }
        };
    }, [roomID]);

    return (
        <div
            className="myCallContainer"
            ref={containerRef}
            style={{ width: '100vw', height: '100vh' }}
        ></div>
    );
}

export default VideoComp;
