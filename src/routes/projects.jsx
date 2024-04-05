import React from "react"

export default function Projects() {
    return(
        // <div class="bg-amber-500 snap-mandatory snap-x relative w-full overflow-hidden flex flex-no-wrap scroll-smooth">
        <div class="relative w-full h-screen overflow-x-hidden">
            <div class="absolute inset-0 flex flex-nowrap"  style={{pointerEvents: "none"}}>
                {/* <!-- Card 1 --> */}
                <div class="flex-shrink-0 w-64 h-64 scroll-m-8 bg-white rounded-lg shadow-lg transform scale-100 z-10 transition-transform duration-500 hover:scale-125 hover:bg-gray-100 hover:shadow-xl">
                    {/* <!-- Card content --> */}
                    <h2>death</h2>
                </div>

                {/* <!-- Card 2 --> */}
                <div class="flex-shrink-0 w-64 h-64 scroll-m-8 bg-white rounded-lg shadow-lg transform scale-100 z-20 transition-transform duration-500 hover:scale-125 hover:bg-gray-100 hover:shadow-xl ml-4">
                    {/* <!-- Card content --> */}
                    <h2>kill</h2>
                </div>

                {/* <!-- Add more cards as needed -->  */}
                <div class="flex-shrink-0 w-64 h-64 scroll-m-8 bg-white rounded-lg shadow-lg transform scale-100 z-30 transition-transform duration-500 hover:scale-125 hover:bg-gray-100 hover:shadow-xl ml-4">
                    {/* <!-- Card content --> */}
                    <h2>murder</h2>
                </div>

                <div class="flex-shrink-0 w-64 h-64 scroll-m-8 bg-white rounded-lg shadow-lg transform scale-100 z-40 transition-transform duration-500 hover:scale-125 hover:bg-gray-100 hover:shadow-xl ml-4">
                    {/* <!-- Card content --> */}
                    <h2>decay</h2>
                </div>

                <div class="flex-shrink-0 w-64 h-64 scroll-m-8 bg-white rounded-lg shadow-lg transform scale-100 z-50 transition-transform duration-500 hover:scale-125 hover:bg-gray-100 hover:shadow-xl ml-4">
                    {/* <!-- Card content --> */}
                    <h2>destroy</h2>
                </div>
            </div>
            <div class="absolute inset-0 overflow-x-auto" style={{pointerEvents: "auto"}}>
                
            </div>
        </div>

    )
}