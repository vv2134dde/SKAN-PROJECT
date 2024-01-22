import React from "react"

import "./styles/WhyUsSlide.css"
import { slideWhyUsList } from "../../../../export/lists";


export default function WhyUsSlide() {
    let orientation = false
    const [slice, setSlice] = React.useState([]);

    function changeslice() {
        if (window.matchMedia('(orientation: landscape)').matches) {
            setSlice([0, 3])
        };
        if (!window.matchMedia('(orientation: landscape)').matches) {
            setSlice([0, 1])
        };
    }

    function slideRight() {
        if (slice[1] < slideWhyUsList.length) {
            setSlice([slice[0] + 1, slice[1] + 1])
        }
    }

    function slideLeft() {
        if (slice[0] > 0) {
            setSlice([slice[0] - 1, slice[1] - 1])
        }
    }

    React.useEffect(() => {
        changeslice()
        window.addEventListener("resize", () => {
            if (!orientation === window.matchMedia('(orientation: landscape)').matches) {
                orientation = window.matchMedia('(orientation: landscape)').matches
                changeslice()
            }
        });
    }, [])

    return(
        <>
        <div className="shevron shevron-left" onClick={slideLeft}/>
        <div className="whyus-slide">
            { slideWhyUsList.slice(slice[0], slice[1]).map((slide) => 
            <div className="whyus-slide-container" key={slide.id}>
                <div className="whyus-slide-container-content">
                    <img src={slide.img}/>
                    <p>{slide.content}</p>
                </div>
            </div>) }
        </div>
        <div className="shevron shevron-right" onClick={slideRight}/>
        </>
    )
}



    



