"use client"; // Make sure to add this for Next.js 13+ with App Router

function Loader() {
    return (
        <div
            className="Loader fixed w-full h-svh inset-0  z-[1000]"
            aria-live="assertive"
        >
            <div className="Container flex items-center justify-center">
                effe
            </div>
        </div>
    );
}

// function Loader() {
//     return (
//         <div
//             className=" bg-light-bg"
//             aria-live="assertive"
//         >
//             <div className="relative w-[15vw] h-[15vw] filter blur-sm contrast-[10]">
//                 <div className="absolute inset-0">
//                     <div className="relative w-full h-full small-dots">
//                         {Array.from({ length: 9 }).map((_, i) => (
//                             <span
//                                 key={i}
//                                 className="absolute w-[12%] h-[12%] bg-dark rounded-full"
//                                 style={{
//                                     transform: `translate(
//                       calc(50% + calc(50% * cos(${(360 / 9) * i}deg))),
//                       calc(50% + calc(50% * sin(${(360 / 9) * i}deg)))
//                     )`,
//                                 }}
//                             ></span>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="absolute inset-0">
//                     <div className="relative w-full h-full big-dots">
//                         {Array.from({ length: 3 }).map((_, i) => (
//                             <span
//                                 key={i}
//                                 className="absolute w-[18%] h-[18%] bg-dark rounded-full"
//                                 style={{
//                                     transform: `translate(
//                       calc(50% + calc(50% * cos(${(360 / 3) * i}deg))),
//                       calc(50% + calc(50% * sin(${(360 / 3) * i}deg)))
//                     )`,
//                                 }}
//                             ></span>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default Loader;

// function Loader() {
//     return (
//         <div className="loader" aria-live="assertive">
//             <div className="loading-spinner">
//                 <div className="absolute">
//                     <div className="small-dots circle spinner">
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                     </div>
//                 </div>
//                 <div className="absolute">
//                     <div className="big-dots circle spinner">
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                     </div>
//                 </div>
//             </div>

//             {/* <div className="Container">
//                 <p>0%</p>
//                 <div className="loading-par" aria-label="loading par">
//                     <div className="skeleton">
//                         <span role="progressbar"></span>
//                     </div>
//                 </div>
//                 <p>100%</p>
//             </div> */}
//         </div>
//     );
// }

// export default Loader;
