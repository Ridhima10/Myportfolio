import styles from './ProjectsStyles.module.css';
import upasthiti from '../../assets/upasthiti.png';
import pull from '../../assets/thepull.png'
import technoWeb from '../../assets/technoWeb.png';
import portfolio from '../../assets/portfolio.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={portfolio}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Ridhima Jain"
          p="Portfolio"
        />
      <ProjectCard
          src={upasthiti}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="UPASTHITI"
          p="Online attendance website"
        />
        <ProjectCard
          src={pull}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="THE PULL"
          p="Ecommerce website"
          className={styles.pull}
        />
        <ProjectCard
          src={technoWeb}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="TECHNO-WEB"
          p="Technical Training Website"
        />
        
      </div>
    </section>
  );
}

export default Projects;
