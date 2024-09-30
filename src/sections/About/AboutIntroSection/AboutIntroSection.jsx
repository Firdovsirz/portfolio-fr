import React from 'react'
import AboutPersonal from '../../../containers/About/AboutPersonal/AboutPersonal';
import AboutSocial from '../../../containers/About/AboutSocial/AboutSocial';

export default function AboutIntroSection() {
    return (
        <section className='about-intro-section' style={{display: "flex"}}>
            <AboutPersonal />
            <AboutSocial />
        </section>
    )
}
