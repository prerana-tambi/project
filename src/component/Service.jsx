import React from 'react'
import allotreat from './allotreat.png'
import ayutreatment from './ayutreatment.png'
import integrative from './integrative.jpg'
import consult from './consult.jpeg'
import sepacialty from './sepacialty.jpeg'

const Service = () => {
  return (
    <div>
        <h1> Our Service</h1>
       
       <div class="Serviceparent">
         <div class="child">
             <img src={allotreat} class="img3"/>
         </div>
             <div class="head">
                 <p  style={{marginLeft: "300px"}}> <a href="#allotreat"> AllopathyTreatment</a></p>
                 <p style={{marginleft: "300px"}}> Allopathy, also known as modern medicine, is a system of healthcare that uses evidence-based treatments to diagnose, prevent, and cure diseases. It relies on scientifically tested medications, surgical interventions, and advanced diagnostic tools to provide comprehensive care. Allopathic medicine is effective in treating acute illnesses, managing chronic conditions, and improving patient outcomes through a systematic and precise approach.</p>
             </div>
         
       </div>
 
       <div class="Serviceparent">
 
         <div class="head">
             <p> <a href="ayutreatment"> AyurvedicTreatment</a></p>
             <p>Ayurveda, the ancient system of medicine that originated in India over 5,000 years ago, is a holistic healing approach that seeks to bring balance to the body, mind, and spirit. It is based on the understanding that each person is unique, and health can be maintained by harmonizing the natural elements within the body: Vata (air and ether), Pitta (fire and water), and Kapha (earth and water). Ayurvedic treatments aim to restore balance and promote wellness through natural therapies, lifestyle changes, and herbal remedies.</p>
         </div>
         <div class="child" style={{marginleft: "650px"}}>
             <img src={ayutreatment} class="img3"/>
 
         </div>
             
         
       </div>
 
 
         <div class="Serviceparent">
         <div class="child">
             <img src={integrative} class="img3"/>
         </div>
             <div class="head">
                 <p   style={{marginleft: "300px"}}> <a href="#integrative"> IntegrativeMedicine</a></p>
                 <p  style={{marginleft: "300px"}}>Integrative medicine is a holistic approach that combines the best practices of conventional (allopathic) medicine with complementary therapies, such as Ayurveda, to treat the whole person—body, mind, and spirit. This approach recognizes that each individual is unique, and optimal health can be achieved by integrating various treatment modalities tailored to the patient's specific needs. Integrative medicine emphasizes the importance of the patient-practitioner relationship, focusing on personalized care, prevention, and healing.</p>
             </div>
         
         </div>
 
 
         <div class="Serviceparent">
 
             <div class="head">
                 <p><a href="#appointment">Consultation</a> </p>
                 <p>At AlloAyu , we understand that every individual’s health journey is unique. Our consultation services are designed to provide personalized guidance and treatment plans that address your specific health concerns, whether you're seeking Ayurvedic wisdom, allopathic precision, or a combination of both. Our team of experienced practitioners is committed to helping you achieve optimal health through a thorough understanding of your medical history, lifestyle, and individual needs.</p>
             </div>
         
         <div class="child"    style={{marginleft: "750px"}}>
             <img src={consult} class="img3"   />
         </div>
             
         </div>
 
 
 
         <div class="Serviceparent">
         <div class="child" >
             <img src={sepacialty} class="img3"   />
 
         </div>
             <div class="head">
                 <p  style={{marginleft: "300px"}}><a href="#specialcare">Specialty care</a> </p>
                 <p   style={{marginleft: "300px"}}>"Specialized care is essential for managing complex health conditions. Our specialty care services.Our specialists are committed to providing top-notch care with a personalized approach, ensuring the best outcomes for our patients."</p>
             </div>
         
       </div>
 
    </div>
  )
}

export default Service