import React, { useState } from 'react';
import './testimonials.css';
import SingleTestimonial from './SingleTestimonial';

const Testimonials = ({ testimonials }) => {
    const [count, setCount] = useState(3)
    let activeTestimonials = testimonials ? testimonials.filter((one => one.enabled === true)) : [];
    let activeTestimonialsNew = activeTestimonials.slice(0, activeTestimonials.length < count ? activeTestimonials.length : count)
    const showMore = ()=>{
        setCount(prev => prev === 3 ? activeTestimonials.length : 3)
    }
    return (
        <section className="section testi" aria-label="what our client says" id="review">
            <div className="container">
                { activeTestimonialsNew && activeTestimonialsNew.length !== 0 && (
                    activeTestimonialsNew.map(one => <SingleTestimonial  key={one._id} {...one}/>)
                ) }
            </div>
            {(
                <div className='showMoreDiv container'>
                <button className='showMore' onClick={showMore}>{ activeTestimonials.length === count ? "Show Less"  :"Show More" }</button>
            </div>
            ) }
        </section>
    )
}


export default Testimonials;