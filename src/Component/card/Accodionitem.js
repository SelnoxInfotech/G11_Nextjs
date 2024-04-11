import React, { useEffect, useRef, useState } from "react";
import style from "../../styles/Style.module.scss"
import { FaMinus , FaPlus  } from "react-icons/fa";

const Accodionitem = (props) => {
    const [active, setActive] = useState(false);
    const content = useRef(null);
    const [height, setHeight] = useState("0px");
  
  
  
    function toggleAccordion(){
      setActive(!active);
      setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
    }
  return (
    <div className={style.accordion__section}>
      <div
        className={`${style.accordion} , ${active ? style.activeaccordion : ""}`}
        onClick={toggleAccordion}
      >
        <h2 className={style.accordion__title}>{props.title}</h2>
        <span style={{ marginLeft: "20px" }}>{active ? <FaMinus /> : <FaPlus />}</span>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className={style.accordion__content}
      >
        <div
          className={style.accordion__text}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  )
}

export default Accodionitem