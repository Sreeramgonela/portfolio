import Navbar from "../../Components/Navbar/Navbar";
import styles from "./ProjectPage.module.css";
import ProjectCard from "../../Components/ProjectCard/projectCard";
import calculatorIMG from "../../assets/calculatorIMG.png";
import easytripIMG from "../../assets/easytripIMG.png";
import promptImg from '../../assets/promptIMG.png';
import PingGameIMG from '../../assets/PingGameIMG.png';
import numguessIMG from '../../assets/numguessIMG.png'
import Age_cal from '../../assets/Age_cal.png'
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";

function Projects() {
  return (
    <div>
      <Navbar />
      <Circle right={"-6rem"} top={"-8rem"} />
      <MainContainer>
        <div className={styles.project_page_component}>
          <ComponentTitle title={"My projects"} />
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
            className={styles.projects_component}
          >
            <ProjectCard
              previewLink={"https://trip-easy-delta.vercel.app/"}
              githubLink={"https://github.com/Sreeramgonela/trip_easy"}
              projectName={"EASY TRIP  App"}
              projectDetails={
                "Easy Trip App: Developed EasyExplore,Travel Advisor API to help users discover near by attractions,hotels, and restaurants."
              }
              demoImage={easytripIMG}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
            <ProjectCard
              previewLink={"https://prompt-ai-bice.vercel.app/"}
              githubLink={"https://github.com/Sreeramgonela/prompt_ai_"}
              projectName={"Prompt (AI) App"}
              projectDetails={
                "PromptAI is a dynamic, It offers AI-powered solutions to generate images, videos, and various types of content, providing relevant sources for every query.This is React Weather App for you to see how the day is going. "
              }
              demoImage={promptImg}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
              ]}
            />
            <ProjectCard
              previewLink={"https://ping-game-zeta.vercel.app/"}
              githubLink={"https://github.com/Sreeramgonela/ping_game"}
              projectName={"Ping game App"}
              projectDetails={
                "It is a ping game."
              }
              demoImage={PingGameIMG}
              key={"Ping game App"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
            <ProjectCard
              previewLink={"https://number-guessing-liard.vercel.app/"}
              githubLink={"https://github.com/Sreeramgonela/Number_guessing"}
              projectName={"Number guessing App"}
              projectDetails={
                "A Number Guessing game is to have players try to guess a randomly chosen number within a specified range, often receiving hints about whether their guesses are too high or too low. This creates an engaging and competitive experience!"
              }
              demoImage={numguessIMG}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
              ]}
            />

            <ProjectCard
              previewLink={"https://calculator-kohl-sigma.vercel.app/"}
              githubLink={"https://github.com/Sreeramgonela/calculator"}
              projectName={"calculator App"}
              projectDetails={
                "A calculator in JavaScript is a web-based application that allows users to perform arithmetic operations directly in their browse"
              }
              demoImage={calculatorIMG}
              key={"calculator App"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
            <ProjectCard
              previewLink={"https://age-calculator-sigma-one.vercel.app/"}
              githubLink={"https://github.com/Sreeramgonela/age_calculator"}
              projectName={"Age_calculator App"}
              projectDetails={
                "An age calculator in JavaScript is a web application that allows users to calculate their age based on their birthdate"
              }
              demoImage={Age_cal}
              key={"Age_calculator App"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
          </motion.div>
        </div>
      </MainContainer>
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: ".3", stiffness: "150" }}
        className="component_container"
      ></motion.div>
    </div>
  );
}

export default Projects;
