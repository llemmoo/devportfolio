import React from 'react'

export default function myGrade() {
  return (
    <>
        <div className="h-full flex flex-col items-center  bg-[#f5f0e8] p-2">
            <h1 className="text-2xl  text-[#8b4513] font-semibold retro-text mb-3">
                MyGrade, a easier way to get your grades
            </h1>
                {/* <img
                  src="/images/bachelor_pic_1.png"
                  alt="Bachelor Project"
                  style={{ maxWidth: "100%", height: "auto" }}
                /> */}
            <p className=" text-lg retro-text mt-2 mb-2">
                Our thesis concerned the use of eye-tracking in VR-gaming. 
                The purpose was to mimic eye-tracking interactions, without the use of eye-tracking technology. 
                We called this vision-based interactions.
                The project was built with C# and the Unity game engine, with the use of a Meta Quest 2.
                <br/>
                <br/>
            </p>
            <h2 className="text-xl  text-[#8b4513] font-retro italic -mb3">Techology and Stack</h2>
            <p className="text-lg retro-text mb-2">
                Having a lot of experience with C# and Blazor professionally, when I wanted to do a quick and easy proof
                of concept for an idea, I initially looked for existing PDF parsing libraries in C#. Having tried and found a
                successful way to parse the transcript PDF with PdfPig, I extended the solution with a Blazor web application and
                quickly prototyped a GUI.
            </p>
            <a className='mt-4  text-[#8b4513] text-xl font-bold underline font-retro' href='https://github.com/llemmoo/mygrade' target='_blank'>Github Repo</a>
        </div>
    </>
  )
}