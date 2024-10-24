import ActionBox from "../../Components/ActionBox/ActionBox";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./AboutPage.module.css";
import ContainerTitle from "../../Components/ComponentTitle/ComponentTitle";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <Circle bottom={"19rem"} right={"-25rem"} />
      <MainContainer>
        <div className={style.about_component}>
          <ContainerTitle title={"About me"} />
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Education</h1>
            <div className={style.timeline_box}>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2017 - 2018"}
                  timeline_title={"High School "}
                  location={"Tejaswi High School, HanumaKonda"}
                  details={
                    "Completed my High School Degree from State Board with 88%."
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2018 - 2020"}
                  timeline_title={"Intermiediate"}
                  location={"Narayana Junior College, Ghatkesar"}
                  details={
                    "Completed my Intermediate from State Board with 74.1%."
                  }
                />
              </div>
              <div className= {`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2020 - 2024"}
                  timeline_title={"Bachelor's in Electronics and Communications Engineering"}
                  location={"Sreenidhi Institute Of Science and Technology | SNIST , Ghatkesar"}
                  details={"Pursued the Bachelor's in Electronics and Communications Engineering with 7.1 cgpa."}
                />
              </div>
              <div className= {`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2024 - 2025"}
                  timeline_title={"Certification in MERN Stack"}
                  location={"Hyderbad"}
                  details={
                    "Currently completing Certification in Mern Stack from Vector India Institute."
                  }
                />
              </div>
            </div>
          </div>
          {/* <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Experience</h1>
            <div className={style.timeline_box}>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2022 - 2023"}
                  timeline_title={"TGT Teacher"}
                  location={"Bal Bharti Public School, Kotdwara"}
                  details={
                    "I have worked as a junior teacher in school and also worked in management. "
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2023 - 2024"}
                  timeline_title={"Apprentice Engineer "}
                  location={"Bharat Electronics Limited, Ktd."}
                  details={
                    "Worked as an Apprentice Engineer for 1 year under BEL Kotdwara, Ministry of External Affairs"
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2024"}
                  timeline_title={"PGT Teacher"}
                  location={"Navyug Public School, Kotdwara"}
                  details={
                    "I am working as an IT Teacher at senior secondary level."
                  }
                />
              </div>
             
            </div>
          </div> */}
        </div>
      </MainContainer>
    </div>
  );
}

export default AboutPage;
