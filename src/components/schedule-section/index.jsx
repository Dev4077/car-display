import React from 'react'
import glassRepair from "../../assets/images/glassExperts.jpg";
import './index.scss'

const ScheduleSection = () => {
    return (
        <div className='ScheduleSec'>
            <div className="mt-5">
                <div className="container">
                    <div className="mb-4 position-relative">
                        <img src={glassRepair} className="main-img" />
                        <div className="sch-button position-absolute">
                            <button>
                                SCHEDULE TODAY
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleSection
