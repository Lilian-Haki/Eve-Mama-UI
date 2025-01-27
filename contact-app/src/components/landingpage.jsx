import { useState, React } from "react";
import { Link } from "react-router-dom";
import {ClockCircleOutlined,PhoneOutlined,MailOutlined,FacebookOutlined,InstagramOutlined,YoutubeOutlined} from '@ant-design/icons'
import childbirth from "../assets/images/childbirth.jpg";
import prenatal from "../assets/images/prenatal.jpg";
import postbirth from "../assets/images/postbirth.jpg";
import bessentials from "../assets/images/childbirth.jpg";

function LandingPage() {
  const [selectedOption, setSelectedOption] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="">
      {/* TOP NAV SECTION */}
      <nav className="h-[60px] bg-amber-100">
        <div className="inline-flex">
          <div className="mt-[16px] ml-4 text-[25px] font-cursive ">
            {" "}
            <span className="text-purple-800">Eve </span>Mama&apos;s{" "}
            <span className="text-purple-800">Midwfe</span> Clinic
          </div>
          <div className="font-roboto inline-flex mt-[40px] gap-10 ml-[250px]">
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <a href="#about">About</a>
            </p>
            <p>
              <a href="#services">Services</a>
            </p>
            <p>
              <a href="#contact">Contact</a>
            </p>
          </div>

          <div className="mt-[16px] text-[25px] font-cursive ml-[400px]">
            <div className="flex">
              <select
                className=" "
                value={selectedOption}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Login
                </option>
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
          <img className="w-full h-[500px] " src={childbirth} alt="" />
          <div className="ml-[90px] -mt-[400px]">
            <p className="font-cursive text-[30px]">
              Welcome to Eves Mama Midwife Clinic
            </p>
            <p className="text-[15px] font-roboto">
              Your Patner in safe and comfortable birth experiences
            </p>
            <h3 className="text-[15px] font-roboto">
              Are you expectant? Here at Eves Mama we are excited to be a part
              of your journey. Our mission is simple: To provide pregnant women
              with the warmest and safest birthing experience.<br></br>We
              provide skilled and professional assist from the beginning of your
              journey until the end.
            </h3>
          </div>
        </div>
        {/* About Section */}
        <div id="about" className=" mt-[350px]">
        <p className="ml-[550px] flex gap-3 text-3xl font-bold text-purple-700 text-center mb-10">
           <p className="h-[5px] w-[50px] bg-purple-300 rounded-1 mt-[20px]"></p> About Us <p className="h-[5px] w-[50px] bg-purple-300 mt-[20px]"></p>
          </p>
          <h3 className="font-roboto text-slate-400 ml-[50px] mr-[50px] text-center">
            Midwife led, continuous, quality, and evidence based care and
            support is what parents and their families get from eve’smama during
            their Pre-pregnancy, Pregnancy, Birth and Early Parenting Phases of
            their life. We believe in a woman’s ability to birth her baby. We
            therefore provide practical guidance, support and information to
            build her confidence and enable her to make informed choices on how
            to birth. We believe the experience of childbirth is beyond the
            physical event, and is a profound emotional, mental and spiritual
            experience for both the mother and her family.We therefore provide
            one to one care that is personalized and holistic. We ensure that
            every parent has the chance to create a relationship of trust with a
            midwife who knows what they want and truly respects their wishes. We
            embrace collaboration with others and will involve Physicians,
            Obstetricians, Pediatricians, Counsellors, Massage Therapists and
            other care providers when need arises.
          </h3>
        </div>
        {/* Services Section */}
        <div id="services" className="mt-[60px]">
          <p className="ml-[520px] flex gap-2 text-3xl font-bold text-purple-700 text-center mb-10">
           <p className="h-[5px] w-[50px] bg-purple-300 mt-[30px]"></p> Our Services <p className="h-[5px] w-[50px] bg-purple-300 mt-[30px]"></p>
          </p>
          {/* Prenatal */}
          <div className="flex pt-8">
            <div className="w-[600px]">
              <img
                className="h-[350px] w-[500px] rounded-[20px] ml-16"
                src={prenatal}
                alt="Prenatal Care"
              />
            </div>
            <div className="mt-[60px] max-w-2xl" > 
              <p className="text-[30px] font-roboto italic text-center">
                Prenatal Care
              </p>
    {/* Wrap content inside a fixed-width container */}
    <h3 className="text-zinc-500 leading-relaxed">
            <span className="block">
          {isExpanded ? (
            // Full content when expanded
            <>
              Our one-hour visits allow us to get to know one another. We take
              time to empower, support, and educate you and your family so you
              are able to make your own birth decisions. The first visit is more
              detailed, we discuss your medical history with more emphasis on
              your Gynecological history. We do a full physical examination,
              calculate your pregnancy age, and estimate when your baby will
              arrive. We then recommend basic blood tests to just make sure your
              blood level is okay and check if you have infections that can be
              passed to your baby. Subsequent visits are planned monthly till
              week 32, then every 2 weeks till the Baby’s arrival. The plan can
              change depending on how you are. During each visit, we discuss
              your health, nutrition, exercise, body changes, and emotional
              state. We answer questions and unfold the pregnancy journey to
              ensure you enjoy and manage every step. Our clients can call us
              24/7 or email if they have any questions. If you’re getting
              Prenatal care elsewhere but need to discuss issues in your
              pregnancy with a midwife, we are available and provide
              consultations for you and help you explore available options.
              Prenatal visits can be done at the Office or Home on Request.
            </>
          ) : (
            // Condensed content when collapsed
            <>
              Our one-hour visits allow us to get to know one another. We take
              time to empower, support, and educate you and your family so you
              are able to make your own birth decisions. The first visit is more
              detailed, we discuss your medical history with more emphasis on
              your Gynecological history. We do a full physical examination,
              calculate your pregnancy age, and...
            </>
          )}
        </span>
      </h3>

      {/* Read More / Read Less Button */}
      <button
        onClick={toggleReadMore}
        className="mt-4 text-purple-600 font-semibold hover:underline"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
            </div>
          </div>

          {/* Birth Essentials */}
<div className="flex flex-col md:flex-row items-center md:items-start">
  {/* Text Section */}
  <div className="mt-[90px] md:ml-16 max-w-2xl mb-14">
    <p className="text-[30px] font-roboto italic text-center">
      Birth Essentials Program
    </p>
    <h3 className="text-zinc-500 leading-relaxed mt-4">
      <span className="block">
        {isExpanded ? (
          // Full content when expanded
          <>
            This is our experiential, informative, interactive, and fun-to-be-at childbirth preparation program for Mums and their birth partners. Through teaching, sharing during group discussions, role play, and creative expression, the 5 weeks, 3-hour session a week creates a non-judgmental, supportive environment to explore your understanding of birth. The sessions will help you integrate mind, body, and heart knowledge to prepare for your birth experience and transition into parenthood. This information enables you to have an open mind toward labor. Then you are in your birth and not at your birth. Enroll for the program between week 30 and 32 so you have finished by week 37. We host both group and private classes.
          </>
        ) : (
          // Condensed content when collapsed
          <>
            This is our experiential, informative, interactive, and fun-to-be-at childbirth preparation program for Mums and their birth partners. Through teaching, sharing during group discussions, role play, and creative expression, the 5 weeks, 3-hour session a week creates a non-judgmental, supportive environment to explore your...
          </>
        )}
      </span>
    </h3>

    {/* Read More / Read Less Button */}
    <button
      onClick={toggleReadMore}
      className="mt-4 text-purple-600 font-semibold hover:underline"
    >
      {isExpanded ? "Read Less" : "Read More"}
    </button>
  </div>

  {/* Image Section */}
  <div className="mt-8 md:mt-0 md:ml-10 mr-6">
    <img
      className="h-[350px] w-[600px] rounded-[20px]"
      src={bessentials}
      alt="Birth Essentials Program"
    />
  </div>
</div>

        
          {/* Childbirth */}
<div className="flex flex-col md:flex-row items-center md:items-start">
  {/* Image Section */}
  <div className="mt-8 pt-7 md:mt-0 md:ml-16">
    <img
      className="h-[400px] w-[550px] rounded-[20px]"
      src={childbirth}
      alt="Childbirth"
    />
  </div>

  {/* Text Section */}
  <div className="mt-[100px] md:ml-16 max-w-2xl">
    <p className="text-[30px] font-roboto italic text-center">
      Childbirth
    </p>
    <h3 className="text-zinc-500 leading-relaxed mt-4">
      <span className="block">
        {isExpanded ? (
          // Full content when expanded
          <>
            <strong>Home Birth:</strong>
            <br />
            Throughout history, birth in most cultures was a family-oriented ceremony that happened in the home. In Africa, home births still take the lead, the disadvantage being that they are attended by unskilled persons. However, with a skilled midwife and a non-interruptive approach, a home birth can be a safe option for a low-risk mother. A home birth as an option needs to be a choice and desire above all else. Birth needs to happen in a place where the mother feels safe and comfortable. The familiar surrounding provides much-needed comfort and relaxation essential for coping with labor. Generally, a home birth allows the mum to write her own script, take center stage, and have people she wants supporting her birth. Mother and baby have less chance of getting infections during birth at home. At no extra charge, mothers enjoy the benefits of using water as a pain relief option during labor. The warm water enhances buoyancy, allowing the mother to relax and open up. For mothers who want, birthing in water is a possibility too. Birthing in water helps avoid tears or reduce the severity. It provides a very gentle landing for the baby as they are born into an environment similar to the one they are from. Water births are generally very peaceful and calming, allowing the mum and/or dad to participate in the reception of their baby.

            <br /><br />

            <strong>Birth Support at Your Hospital Birth:</strong>
            <br />
            Finding someone who understands what you are going through tends to lessen any burden. A Doula is a companion who does this for an expectant mother and her family. They know and understand her preferences and support her physically and emotionally through her season of pregnancy, labor, birthing, and after the birth of her child. This includes support for mums who have to have an elective Caesarian section. Enroll in our Labor Support and Coaching service by week 30 so you can establish the relationship with your Doula well in advance of labor.
          </>
        ) : (
          // Condensed content when collapsed
          <>
            <strong>Home Birth:</strong> Throughout history, birth in most cultures was a family-oriented ceremony that happened in the home... 
            <br /><br />
            <strong>Birth Support at Your Hospital Birth:</strong> Finding someone who understands what you are going through tends to lessen any burden...
          </>
        )}
      </span>
    </h3>

    {/* Read More / Read Less Button */}
    <button
      onClick={toggleReadMore}
      className="mt-4 text-purple-600 font-semibold hover:underline"
    >
      {isExpanded ? "Read Less" : "Read More"}
    </button>
  </div>
</div>

       {/* Postnatal Support */}
<div className="flex flex-col md:flex-row mb-[100px] items-center md:items-start">
  {/* Text Section */}
  <div className="mt-[60px] pt-[130px] md:mt-0 md:ml-16 max-w-2xl">
    <p className="text-[30px] font-roboto italic text-center">
      Postnatal Support
    </p>
    <h3 className="text-zinc-500 leading-relaxed mt-4">
      <span className="block">
        {isExpanded ? (
          // Full content when expanded
          <>
            Parenting instincts kick in as soon as a parent gets to see and hold their child. However, there are many skills you will need to learn to take care of your child with confidence, while your body returns to its pre-pregnancy state. Our support and care help you make adjustments to motherhood and learn the basic skills needed to take care of your baby. Postpartum care includes: 
            <br /><br />
            - First visit done at home or hospital 24-48 hours after birth. 
            <br />
            - Second visit at the end of week one or in the second week. 
            <br />
            - Third visit in week 4-6 at our birth center. 
            <br />
            - Breastfeeding support throughout the post-birth period.
          </>
        ) : (
          // Condensed content when collapsed
          <>
            Parenting instincts kick in as soon as a parent gets to see and hold their child. However, there are many skills you will need to learn to take care of your child with confidence...
          </>
        )}
      </span>
    </h3>

    {/* Read More / Read Less Button */}
    <button
      onClick={toggleReadMore}
      className="mt-4 text-purple-600 font-semibold hover:underline"
    >
      {isExpanded ? "Read Less" : "Read More"}
    </button>
  </div>

  {/* Image Section */}
  <div className="mt-8 md:mt-0 md:ml-16 mr-7">
    <img
      className="h-[350px] w-[600px] rounded-[20px]"
      src={postbirth}
      alt="Postnatal Support"
    />
  </div>
</div>

        </div>

        {/* Contact section */}
        <div id="contact" className=" text-center bg-purple-800">
          <p className="text-3xl font-bold text-slate-200 mb-4  text-center">
            Contact Us
          </p>
          <p className="text-lg text-zinc-800 mb-8 text-center">Ready to start our journey with us?Reach out to us.</p>

        <div className="flex"> 
          <div className="rounded-[10px] flex flex-col mt-5 ml-[80px] px-5 py-10 mb-5 bg-purple-50 ">
            <h1 className="text-3xl font-bold text-purple-700 mb-4">
              Get In Touch with Us
            </h1>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Have any questions or feedback? Reach out to us!
            </p>
            <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
              {submitted && (
                <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
                  Thank you! Your message has been submitted successfully.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  ></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  ></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    required
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  ></label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Input your message"
                    required
                    className="w-full h-[100px] px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-purple-600 rounded-lg shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

        <div className="mt-[20px]">
          <div className="ml-[160px]">
        <h1 className="text-2xl font-bold text-justify text-black mb-4">
              Contact Details
            </h1>
            <p className="text-lg text-black mb-8 text-justify">
              More ways you can reach us. Available for you Anytime.
            </p>
            </div>
          <div className="flex gap-[100px] ml-[160px]">
            <div className="">

            <div className="text-justify mb-10 flex">
            <div className="rounded-[7px] h-[40px] w-[40px] text-center pt-2 mr-4 bg-neutral-800"><ClockCircleOutlined style={{ fontSize: '16px', color: '#E8E8E8' }} /></div>
                <div><p className="text-1xl font-bold">Location</p>
                <h4>Nairobi, Kenya and its environs.</h4></div>
              </div>

              <div className="text-justify mb-5 flex">
              <div className="rounded-[7px] h-[40px] w-[40px] text-center pt-2 mr-4 bg-neutral-800"><ClockCircleOutlined style={{ fontSize: '16px', color: '#E8E8E8' }} /></div>
                <div><p className="text-1xl font-bold">Opening Hours</p>
                <h4>Mon-Fri: 9am - 6pm</h4>
                <h4>Sat: 9am - 5pm</h4></div>
              </div>

            </div>
            <div>

            <div className="text-justify mb-10 flex">
            <div className="rounded-[7px] h-[40px] w-[40px] text-center pt-2 mr-4 bg-neutral-800"><PhoneOutlined style={{ fontSize: '16px', color: '#E8E8E8' }} /></div>
                <div><p className="text-1xl font-bold">Mobile</p>
                <h4>+254765768964</h4></div>
              </div>
              <div className="text-justify mb-5 flex">
              <div className="rounded-[7px] h-[40px] w-[40px] text-center pt-2 mr-4 bg-neutral-800"><MailOutlined style={{ fontSize: '16px', color: '#E8E8E8' }} /></div>
                <div><p className="text-1xl font-bold">Email</p>
                <h4>evemama@gmail.com</h4></div>
              </div>
            </div>
          </div>
          <div className="flex ml-[160px] mt-9">
            <p className="pr-5">Follow us on our socials: </p>
            <div className="flex">
            <div className="rounded-[7px] h-[25px] w-[25px] text-center pt-0 mr-4 bg-neutral-800"><FacebookOutlined style={{ fontSize: '16px', color: '#E8E8E8' }} /></div>
            <div className="rounded-[7px] h-[25px] w-[25px] text-center pt-0 mr-4 bg-neutral-800"><InstagramOutlined style={{ fontSize: '16px', color: '#E8E8E8' }} /></div>
            <div className="rounded-[7px] h-[25px] w-[25px] text-center pt-0 mr-4 bg-neutral-800"><YoutubeOutlined style={{ fontSize: '16px', color: '#E8E8E8' }} /></div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </main>
      <footer className="bg-amber-300">
        <p className="text-center">
          {" "}
          &#xA9;2025 All Rights Reserved || Built and designed by{" "}
          <span>Lilian Haki</span>
        </p>
        <div></div>
        <div></div>
      </footer>
    </div>
  );
}
export default LandingPage;
