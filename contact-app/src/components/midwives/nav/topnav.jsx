import { useState, React } from "react";
import profile from "../../../assets/images/profilef.jpg";

function TopNav() {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="ml-[250px]">
      <nav className="h-[80px] bg-yellow-100">
        <div className="inline-flex">
          <div>Eve Mama Midwife Clinic</div>
          <div className="inline-flex mt-[40px] gap-5 ml-[620px]">
            <p>
              Hello, Good Afternoon<span> Lilian</span>
            </p>
            <div className="flex">
              <img
                className="relative rounded-[100%] h-[40px] w-[40px]"
                src={profile}
                alt=""
              />
              <select
                className="-ml-14 "
                value={selectedOption}
                onChange={handleChange}
              >
                <option value="" disabled></option>
                <option value="option1">Profile</option>
                <option value="option2">About</option>
                <option value="option3">Contacts</option>
                <option value="option3">Help</option>
                <option value="option3">Logout</option>
              </select>
              {selectedOption && <p>You selected: {selectedOption}</p>}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default TopNav;
