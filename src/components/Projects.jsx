import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
    return (
    <motion.section 
        id="projects" 
        className="projects" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
    >
        <motion.h2 
            variants={fadeInUp} 
            initial="initial" 
            whileInView="animate" 
            viewport={{ once: true }}
        > 
            My Projects
        </motion.h2>
            <motion.div 
                className="project-grid"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <motion.div 
                    className="project-card" 
                    variants={fadeInUp} 
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                    <motion.div 
                        className="project-image" 
                        style={{ backgroundImage: "url('/projects/QuickQR.png')" }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    />
                        <h3> Quick QR</h3>
                        <p>
                            project-quickqr is an open-source backend service for generating customizable QR codes in web applications. Built with Node.js and Express, 
                            it provides a dynamic API that creates QR code images on demand based on user input, with support for size and color customization. 
                            The project emphasizes performance, scalability, and ease of integration, making it suitable for use in modern web architectures and extensible for a wide range of use cases.
                        </p>
                        <div className="project-tech">
                            <span>JavaScript</span>
                            <span>HTML & CSS</span>
                        </div>
                        <div className="project-url">
                            <a href="https://github.com/BIGBEN300/project-quickqr" target="blank">Visit GitHub Repo</a>
                        </div>
                </motion.div>

                <motion.div 
                    className="project-card" 
                    variants={fadeInUp} 
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                    <motion.div 
                        className="project-image" 
                        style={{ backgroundImage: "url('/projects/projectUE.png')" }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    />
                        <h3> Project UE</h3>
                        <p>
                            With my team we created a game in Unreal Engine. My role within the group was Programmer and Game Engine Level Designer. 
                            In this role, I was tasked to make the user interfaces in the game (main menu, pause menu, settings etc.), different puzzle systems, equipment system and the games NPC’s (enemies and animals).
                            Alongside my taskes I also got opportunities to try different aspects on game making like 3D modelling and concept art, which is shown in the game design document. 
                        </p>
                        <div className="project-tech">
                            <span>C++</span>
                            <span>Blueprints</span>
                            <span>Blender</span>
                        </div>
                        <div className="project-url">
                            <a href="https://github.com/BIGBEN300" target="blank">Visit Website</a>
                        </div>
                </motion.div>
                
                <motion.div 
                    className="project-card" 
                    variants={fadeInUp} 
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                    <motion.div 
                        className="project-image" 
                        style={{ backgroundImage: "url('/projects/chatbot.png')" }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    />
                        <h3> Personal Chatbot</h3>
                        <p>
                            My current project I'm working on is a personal Chatbot that I will be able to answer questions and explain them in detail, help with learning and skills building,
                            and decision making/brainstorming.
                        </p>
                        <div className="project-tech">
                            <span>Javascript</span>
                            <span>HTML & CSS</span>
                        </div>
                        <div className="project-url">
                            <a href="https://github.com/BIGBEN300" target="blank">Visit Website</a>
                        </div>
                </motion.div>
            </motion.div>
    </motion.section>
    );
};

export default Projects