import React from 'react'
import AboutTools from '../../containers/About/AboutTools/AboutTools';
import AboutSocial from '../../containers/About/AboutSocial/AboutSocial';
import AboutAwards from '../../containers/About/AboutAwards/AboutAwards';
import AboutContact from '../../containers/About/AboutContact/AboutContact';
import AboutPersonal from '../../containers/About/AboutPersonal/AboutPersonal';
import AboutWorkExp from '../../containers/About/AboutWorkExperience/AboutWorkExp';
import Header from '../../components/Header/Header';

export default function AboutIntroSection() {
    return (
        <>
            <Header />
            <main className='about-main'>
                <section className='about-intro-section' style={{ display: "flex", justifyContent: "space-between", marginBottom: 20, padding: "0 30px 0 30px" }}>
                    <AboutPersonal />
                    <AboutSocial />
                    <AboutTools />
                </section>
                <section className='about-section-main' style={{ display: "flex", justifyContent: "space-between", padding: "0 30px 20px 30px" }}>
                    <AboutAwards />
                    <AboutWorkExp />
                    <AboutContact />
                </section>
                <section className='development-section' style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: 20, marginBottom: 20, color: "#999999" }}>
                    <h4>Developed by Firdovsi</h4>
                </section>
            </main>
        </>
    )
}
