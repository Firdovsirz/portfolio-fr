import React from 'react'
import AboutPersonal from '../../../containers/About/AboutPersonal/AboutPersonal';
import AboutSocial from '../../../containers/About/AboutSocial/AboutSocial';
import AboutTools from '../../../containers/About/AboutTools/AboutTools';

export default function AboutIntroSection() {
    return (
        <section className='about-intro-section' style={{ display: "flex", justifyContent: "space-between" }}>
            <AboutPersonal />
            <AboutSocial />
            <AboutTools />
        </section>
    )
}
