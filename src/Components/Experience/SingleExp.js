import './experience.css';
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

const SingleExp = (exp) => {
    const [newBullets, setNewBullets] = useState([])

    let stDate = new Date(String(exp.startDate));
    let endDate = new Date(String(exp.endDate));
    stDate = format(stDate, 'dd-MMM-yy').toLowerCase();
    endDate = format(endDate, 'dd-MMM-yy').toLowerCase();

    useEffect(()=>{
        let len = exp.bulletPoints.length
        setNewBullets(exp.bulletPoints.slice(0, len < 3 ? len : 3))
    },[exp])

    return (
        <div className='col-md-4 col-sm-6 col-12 singleExp'>
            <div className='expCompanyInfo'>
                <div className='userImage'>
                    <img src={exp.url} alt='user'/>
                </div>
                <div className='title jobTitle'>{exp.jobTitle}</div>
                <div className='company_name'>{exp.company_name}</div>
                <div className='dates'>
                    <div>{stDate + "   -"}</div>
                    <div>{"--  " + endDate}</div>
                </div>
                <div className='location'>
                    <div>
                        {"- " + exp.jobLocation}
                    </div>
                </div>
            </div>
            <div className='expInfo'>
                <div className='expSummary'>
                    {exp.summary}
                </div>
                <div className='bulletPoints'>
                    {exp.bulletPoints && newBullets.length !== 0 && (
                        newBullets.map(one => <div key={one}>{"* "+ one}</div>)
                    )}
                </div>
            </div>
        </div>
    )
}

export default SingleExp
