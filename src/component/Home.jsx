import React from 'react'
import holistic from './holistic.png'
import care from './care.png'
import natural from './natural.png'
import conv from './conv.png'
import allopathic1 from './allopathic1.png'
import allopathy2 from './allopathy2.png'
import Ayurveda from './Ayurveda.png'
import AyurvedaAllopathy from './Ayurveda-Allopathy.png'

const Home = () => {
  return (
    <div>

<div class="image-slider">
        <img src={allopathic1} alt="Image 1" class="slide-image"/>
        <img src={allopathy2} alt="Image 2" class="slide-image"/>
        <img src={Ayurveda} alt="Image 3" class="slide-image"/>
        <img src={AyurvedaAllopathy} alt="Image 4" class="slide-image"/>
    </div>
         <section className="toChoosebox">
        <div className="choosecontain">
            <div className="context">
                <div className="icon">
                    <img src={holistic} id="img2" />
                </div>
                <p style={{textDecoration:"underline"}}><b>Holistic Health approach:</b></p>
                <p>
                    <b>Integrative Care:</b> We combine the wisdom of Ayurveda with the advancements of allopathic medicine to provide comprehensive and personalized care.
                </p>
                <p><b>Whole-Person Focus:</b> Our treatments address not just symptoms but also the root causes of health issues, ensuring holistic well-being.</p>
            </div>

            <div className="context">
                <div className="icon">
                    <img src={care} id="img2"/>
                </div>
                <p style={{textDecoration:"underline"}}><b>Patient-Centered care:</b></p>
                <p>
                    <b>Personalized Treatments:</b> Every patient receives a customized care plan that takes into account their unique health needs and preferences.
                </p>
                <p><b>Compassionate Service:</b> We prioritize patient comfort, trust, and satisfaction, offering supportive and empathetic care.</p>
            </div>

            <div className="context">
                <div className="icon">
                    <img src={natural} id="img2"/>
                </div>
                <p style={{textDecoration:"underline"}}><b>Natural and Safe Solution:</b></p>
                <p>
                    <b>Ayurvedic Remedies:</b> We use natural herbs and treatments that have been proven safe over centuries.
                </p>
                <p><b>Minimized Side Effects:</b> Our integrative approach aims to reduce reliance on pharmaceuticals, minimizing potential side effects.</p>
            </div>

            <div className="context">
                <div className="icon">
                    <img src={conv} id="img2" />
                </div>
                <p style={{textDecoration:"underline"}}><b>Convenient Access:</b></p>
                <p>
                    <b>Online Consultations:</b> We offer virtual consultations to make accessing care easy and convenient from the comfort of your home.
                </p>
                <p><b>Easy Appointment Scheduling:</b> Our user-friendly website allows you to book appointments effortlessly.</p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Home