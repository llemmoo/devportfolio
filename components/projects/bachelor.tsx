import React from 'react'

export default function bachelor() {
  return (
    <>
        <div className="h-full flex flex-col items-center  bg-[#f5f0e8] p-2">
            <h1 className="text-2xl  text-[#8b4513] font-semibold retro-text mb-3">
                Exploring Vision-Based Interactions in VR Horror Games
            </h1>
                <img
                  src="/images/bachelorPic1.png"
                  alt="Bachelor Project"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
            <p className="text-center text-lg retro-text mt-4 mb-4">
                Our thesis concerned the use of eye-tracking in VR-gaming. 
                The purpose was to mimic eye-tracking interactions, without the use of eye-tracking technology. 
                We called this vision-based interactions.
                The project was built with C# and the Unity game engine, with the use of a Meta Quest 2.
                <br/>
            </p>
            <h2 className="text-xl text-[#8b4513] font-retro italic -mb3">Underneath is an excerpt from the thesis.</h2>
            <p className="text-lg text-center retro-text mb-2">
                "Gaze interaction in video games, using eye tracking, is in growth. 
                No longer only used for novelty interaction but also as an integral part of the game’s mechanics. 
                However, while gaze interaction is becoming more and more prevalent, gaze aversion appears to continue in novelty. 
                Within this paper, we explore the dichotomy of ”see” and ”not see”(look, don’t look”) interactions with what we define as 
                ”vision-based interactions” as an alternative to traditional eye-tracking gaze interaction for VR horror game elements 
                <br/>
                ... 
                <br/>
                Our results suggest that we might be capable of expecting different interactions with differing intricacies to 
                elicit stronger responses from users to VR horror game elements.""
            </p>
            <a className='mt-4  text-[#8b4513] text-xl font-bold underline font-retro' href='/reports/bachelorReport.pdf' target='_blank'>Download the report</a>
        </div>
    </>
  )
}
