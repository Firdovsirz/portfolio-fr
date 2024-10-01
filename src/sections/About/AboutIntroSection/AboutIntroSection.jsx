import React from 'react'
import AboutPersonal from '../../../containers/About/AboutPersonal/AboutPersonal';
import AboutSocial from '../../../containers/About/AboutSocial/AboutSocial';
import AboutTools from '../../../containers/About/AboutTools/AboutTools';
import AboutAwards from '../../../containers/About/AboutAwards/AboutAwards';

export default function AboutIntroSection() {
    return (
        <main className='about-main'>
            <section className='about-intro-section' style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
                <AboutPersonal />
                <AboutSocial />
                <AboutTools />
            </section>
            <section className='about-section-main' style={{ display: "flex", justifyContent: "space-between" }}>
                <AboutAwards />
            </section>
        </main>
    )
}
