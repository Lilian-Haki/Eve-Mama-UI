import { useState, React } from "react";
import childbirth from "../assets/images/childbirth.jpg"
import prenatal from "../assets/images/prenatal.jpg"
import postbirth from "../assets/images/postbirth.jpg"
import bessentials from "../assets/images/childbirth.jpg"
import about from "../components/landingpage.jsx";

function LandingPage() {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="">
    {/* TOP NAV SECTION */}
      <nav className="h-[80px] bg-yellow-100">
        <div className="inline-flex">
          <div>Eve Mama Midwife Clinic</div>
          <div className="inline-flex mt-[40px] gap-5 ml-[620px]">
            <p><a href="/">Home</a></p>
            <p><a href="#about">About</a></p>
            <p><a href="#services">Services</a></p>
            <p><a href="#contact">Contact</a></p>
            <div className="flex">
              <select
                className=" "
                value={selectedOption}
                onChange={handleChange}
              >
                <option value="" disabled>Login</option>
                <option value="option1">Staff</option>
                <option value="option2">Patient</option>
              </select>
              {selectedOption && <p>You selected: {selectedOption}</p>}
            </div>
          </div>
        </div>
      </nav>
      {/* MAIN BODY CONTENT */}
      <main>
        <div>
          <img className="w-full h-[400px]" src={childbirth} alt="" />
          <div className="-mt-[300px]">
            <p>Welcome to Eves Mama Midwife Clinic</p>
            <p>Your Patner in safe and comfortable birth experiences</p>
            <h3>Are you expetig? Here at eves mama we are excited to be a part of your journey. Our mission is simple:to provide pregnant women with the warmest and safest birthing experience.</h3>
        </div>
        </div>
        {/* About Section */}
        <div id="about" className="text-center mt-[250px] ml-[180px] mr-[190px]">
          <p>About Us</p>
          <h3 className="font-roboto text-slate-400">Midwife led, continuous, quality, and evidence based care and support is what parents and their families get from eve’smama during their Pre-pregnancy, Pregnancy, Birth and Early Parenting Phases of their life.
            We believe in a woman’s ability to birth her baby. We therefore provide practical guidance, support and information to build her confidence and enable her to make informed choices on how to birth. We believe the experience of childbirth is beyond the physical event, and is a profound emotional, mental and spiritual experience for both the mother and her family.We therefore provide one to one care that is personalized and holistic. We ensure that every parent has the chance to create a relationship of trust with a midwife who knows what they want and truly respects their wishes. We embrace collaboration with others and will involve Physicians, Obstetricians, Pediatricians, Counsellors, Massage Therapists and other care providers when need arises.</h3>
        </div>
        {/* Services Section */}
        <div id="services">
        <p className="text-center m-8">Our Services</p>
        {/* Prenatal */}
        <div className="flex mb-[100px]">
            <div className="w-[7000px]">
              <img className="h-[350px] w-[500px] rounded-[20px] ml-16" src={prenatal} alt="" />
            </div>
            <div>
                <p>Prenatal Care</p>
                <h3 className="text-zinc-500">Our one hour visits allows us to get to know one another. We take time to empower, support and educate you and your family so you are able to make your own birth decisions.

                  The first visit is more detailed, we discuss your medical history with more emphasis on your Gynecological history. We do a full physical examination, calculate your pregnancy age and estimate when your baby will arrive. We then recommend basic blood tests to just make sure your blood level is okay and check if you have infections that can be passed to your baby.

                  Subsequent visits are planned monthly till week 32 then every 2 weeks till the Baby’s arrival. The plan can change depending on how you are. During each visit we discuss your health, nutrition, exercise, body changes, and emotional state. We answer questions and unfold the pregnancy journey to ensure you enjoy and manage every step. Our clients can call us 24/7 or email if they have any questions.

                  If you’re getting Prenatal care elsewhere but need to discuss issues in your pregnancy with a midwife, we are available and provide consultations  for you and help you explore available options.

                  Prenatal visits can be done at the Office or Home on Request.</h3>
            </div>
            </div>
            {/* Birth Essentials */}
            <div className="flex mb-[100px]">
            <div className="ml-16">
                <p>Birth Essentials Program</p>
                <h3>This is our experiential, informative, interactive and fun to be at child birth preparation program for Mums and their birth partners. Through teaching, sharing during group discussion, role play and creative expression, the 5 weeks, 3 hour session a week creates a non-judgmental, supportive environment to explore your understanding of birth.

                  The sessions will help you integrate mind, body and heart knowledge to prepare for your birth experience and transition into parenthood. This information enables you to have an open mind towards labor. Then you are in your birth and not at your birth.

                  Enroll for the program between week 30 and 32 so you have finished by week 37.

                  We host both group and private classes.</h3>
            </div>
            <div className="w-[7000px] ">
              <img className="h-[350px] w-[600px] rounded-[20px] ml-16" src={bessentials} alt="" />
            </div>
            </div>
            {/* ChildBirth */}
          <div className="flex mb-[100px] ">
          <div className="w-[7000px]">
          <img className="h-[500px] w-[500px] rounded-[20px] ml-16" src={childbirth} alt="" />
            </div>
            <div>
                <p>Childbirth</p>
                <h3>Home Birth:<br></br>
                  Through out history, birth in most cultures was a family oriented ceremony that happened in the home.
                  In Africa, home births still take the lead the disadvantage being that they are attended by unskilled persons but with a skilled midwife and a non-interruptive approach, a home birth can be a safe option to a low-risk mother.

                  A Home birth as an option needs to be a choice and desire above all else. Birth needs to happen in a place where the mother feels safe and comfortable. The familiar surrounding provides much needed comfort and relaxation that is essential for coping with labor.  Generally, a home birth allows the mum to write her own script, take center stage and have people she wants supporting her birth. Mother and baby have less chances of getting infections during birth at home.

                  At no extra charge, mothers get to enjoy the benefits of using water as a pain relief option during labor.
                  The warm water, enhances buoyancy allowing the mother to relax and open up. For mothers who want, birthing in water is a possibility too.

                  Birthing in water helps avoid tears or reduce the severity. It provides a very gentle landing for the baby as they are born into an environment similar to the one they are from.

                  Water births are generally very peaceful and calming allowing the mum and/or dad to participate in the reception of her baby.</h3>
                  <h3>Birth Support at Your Hospital Birth<br></br>
                  Finding someone who understands what you are going through tends to lessen any burden.

                  A Doula is a companion who does this for an expectant mother and her family. They know and understand her preferences and support her physically and emotionally through her season of pregnancy, labor, birthing and after the birth of her child. This includes support to Mums who have to have an elective Caesarian section.

                  Enroll for our Labor Support and Coaching service by week 30 so you can establish the relationship way in advance of labor with your Doula.</h3>
            </div>
            </div>
            {/* PostBirth */}
           <div className="flex mb-[100px] ">
            <div className="ml-16">
                <p>Postnatal Support</p>
                <h3>Parenting instincts kick in as soon as a parent gets to see and hold their child. However, there are many skills you will need to learn so as to take care of your child with confidence, while your body returns to its pre-pregnancy state.
                  Our support and care helps you make adjustments to motherhood and learn the basic skills needed to take care of your baby.
                  Postpartum care includes:
                  First visit done at home or hospital 24-48 hours after birth
                  Second visit at the end of week one or in the second week
                  Third visit in week 4-6 at our birth center
                  Breastfeeding support throughout the post birth period</h3>
            </div>
            <div className="w-[6000px]">
           <img className="h-[350px] w-[600px] rounded-[20px] ml-16" src={postbirth} alt="" />
            </div>
            </div>
        </div>

        {/* Contact section */}
        <div id="contact" className="text-center bg-yellow-50">
            <p>Contact Us</p>
            <p>Ready to start our journey with us?Reach out to us.</p>
            <div className="flex gap-[100px] ml-[160px]">
                <div>
                    <p>Location</p>
                    <h4>Nairobi, Kenya and its environs.</h4>
                </div>
                <div>
                    <p>Contacts</p>
                    <h4>evemama@gmail.com</h4>
                    <h4>+254765768964</h4>
                </div>
                <div className="">
                    <p>Follow our socials</p>
                    <h4>facebook</h4>
                    <h4>instagram</h4>
                    <h4>youtube</h4>
                </div>
                <div>
                    <p>Opening Hours</p>
                    <h4>Mon-Fri: 9am - 6pm</h4>
                    <h4>Sat: 9am - 5pm</h4>
                </div>
            </div>
        </div>
      </main>
      <footer className="bg-purple-800">
      <p className="text-center"> &#xA9;2025 All Rights Reserved || Built and designed by <span>Lilian Haki</span></p>
      <div></div>
      <div></div>
      </footer>
    </div>
  );
}
export default LandingPage;
