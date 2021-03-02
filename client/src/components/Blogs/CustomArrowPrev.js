import React from "react"
import {ReactComponent as ArrowSVG} from "../../assets/images/chevron.svg"

export default function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
             <ArrowSVG />
        </div>
    );
  }