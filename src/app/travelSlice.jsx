import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    video: 1,
    content: [
        {
            title: "Island Beach Bliss",
            desc1: "Experience the ultimate island beach bliss with our stunning beach. With its crystal clear waters, pristine white sand, and breathtaking views of the ocean, you’ll feel like you’re in paradise. Relax under the sun and let your worries drift away as you soak up the serene atmosphere. Whether you’re looking for adventure or just want to unwind and recharge, our island beach is the perfect destination.",
            desc2: "Discover the perfect island beach getaway with our stunning beach. With its tranquil atmosphere and stunning natural beauty, it’s the perfect place to escape from the hustle and bustle of everyday life. Whether you’re looking for adventure or just want to relax and unwind, our island beach has something for everyone."
        },
        {
            title: "Desert Car Safari Adventures",
            desc1: "A car safari in the desert can be an exciting way to explore the landscape and wildlife of arid regions. These safaris typically involve driving through sand dunes and other desert terrain in a specially equipped vehicle, such as a 4x4 or dune buggy.",
            desc2: "Along the way, you may encounter unique flora and fauna, such as cacti, lizards, and birds of prey. Some car safari tours also include stops at cultural sites or opportunities to learn about local traditions."
        },
        {
            title: "Fly High with Our Premium Flying Service",
            desc1: "Experience the ultimate in-flight luxury with our premium flying service. With spacious seating, gourmet dining, and personalized service, you’ll feel like you’re flying in your own private jet.",
            desc2: "Take your travel experience to new heights with our premium flying service. Whether you’re traveling for business or pleasure, our luxurious amenities and exceptional service will make your journey unforgettable."
        },
        {
            title: "Touring Bikes for Road Travel",
            desc1: "Touring bikes are designed for long-distance travel on paved roads and can be used for everything from commuting to cross-country bike tours. These bikes typically feature a comfortable riding position, sturdy frame construction, and a range of gears to tackle hills and other obstacles. ",
            desc2: "They may also include features such as racks for carrying gear, fenders to protect against mud and water, and lights for visibility in low-light conditions."
        },
        {
            title: "The Three Types of Rocks",
            desc1: "Rocks are classified into three types: igneous, sedimentary, and metamorphic. Igneous rocks form from the cooling of molten rock (magma or lava), sedimentary rocks form from the accumulation of sediment or organic material, and metamorphic rocks form from the alteration of existing rock types through heat, pressure, or chemical processes.",
            desc2: "Each type of rock has its own unique characteristics and can provide clues about the geological history of an area."
        }
    ]
}

const travelSlice = createSlice({
    name: "travel",
    initialState,
    reducers: {
        slide: (state, action) => {
            state.video = +(action.payload)
        },
        autoSlide: (state) => {
            if (state.video === 5){
                state.video = 1
            }
            else {
                state.video += 1
            }
        }
    }
})

export default travelSlice.reducer
export const {slide, autoSlide} = travelSlice.actions
export const myVideo = (state) => (state.travel.video)
export const myContent = (state) => (state.travel.content)