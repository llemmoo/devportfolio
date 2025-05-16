import React from 'react'

export default function myGrade() {
  return (
    <>
        <div className="h-full flex flex-col items-center  bg-[#f5f0e8] p-2">
            <h1 className="text-2xl  text-[#8b4513] font-semibold retro-text mb-3">
                MyGrade, a easier way to get your grades
            </h1>
                <img
                  src="/images/myGradePic1.png"
                  alt="MyGrade Homepage"
                  style={{ maxWidth: "60%", height: "auto" }}
                />
            <p className=" text-lg retro-text mt-2 mb-2">MyGrade lets you can upload a PDF transcript and get your GPA back in both Danish and US systems.</p>
            <p className=" text-lg retro-text mt-2 mb-2">
                Having had the need to provide my GPA, on more than one occasion, I found it to be a quite tedious
                process calculating it either by hand, or with tools that would require you to input all the data
                by hand, negating much of the use of the tool. I wanted to change that, and give students a tool
                which would be enable them to simply upload a PDF transcript, and get their GPA back in multiple scales.
                <br/>
            </p>
            <p className="text-lg retro-text mb-2">
                Using PdfPig I was able to parse through PDF transcripts, experimenting with the different methods
                of segmentation available, printing the segmentation methods onto the transcript and trying to see
                if I had any way of parsing through said segmentation to any meaningful degree.Having tried and found a
                successful way to parse the transcript PDF with PdfPig, I extended the solution with a Blazor web application and
                quickly prototyped a GUI.
            </p>
            <h3 className="text-xl  text-[#8b4513] font-retro italic">Technologies</h3>
            <p className="text-lg retro-text mb-2"> .NET 8, Blazor, MudBlazor, PdfPig </p>
            <a className='mt-4  text-[#8b4513] text-xl font-bold underline font-retro' href='https://github.com/llemmoo/mygrade' target='_blank'>Github Repo</a>
        </div>
    </>
  )
}