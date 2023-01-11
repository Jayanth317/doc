import React from "react";
import p from './projects.module.css';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';

function Project () {
    return(
        <div>
           <div className={p.title1}>
                Project Page 
            </div>
            <div className={p.matrix}>
                <div className = {p.pro}>
                    <p className={p.image}><img src={pic1} alt={"pic1"}/></p>
                    <p className={p.text}> Air quality monitoring</p>
                </div>
                <div className = {p.pro}>
                    <p className={p.image}><img src={pic2} alt={"pic2"}/></p>
                    <p className={p.text}> Automated solar street light</p>
                </div>
                <div className = {p.pro}>
                    <p className={p.image}><img src={pic3} alt={"pic3"} /></p>
                    <p className={p.text}> Machine learning for PCB defect detection</p>
                </div>
           </div>
        </div>
    );
}
export default Project;