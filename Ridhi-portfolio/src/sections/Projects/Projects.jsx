import styles from './ProjectsStyles.module.css';
import upasthiti from '../../assets/upasthiti.png';
import pull from '../../assets/thepull.png'
import Jeevan from '../../assets/jeevan.png';
import portfolio from '../../assets/portfolio.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={portfolio}
          link="https://github.com/Ridhima10/Myportfolio"
          h3="Portfolio"
          p="Major project"
        />
      <ProjectCard
          src={upasthiti}
          link="https://github.com/wrench1815/upasthiti"
          h3="UPASTHITI"
          p="College Project"
        />
        <ProjectCard
          src={pull}
          link="https://github.com/Ridhima10/The_Pull"
          h3="THE PULL"
          p="Freelancing"
          className={styles.pull}
        />
        <ProjectCard
          src={Jeevan}
          link="https://github.com/rcrrags/Jeevan-Dairy"
          h3="JEEVAN DAIRY"
          p="Freelancing"
        />
        
      </div>
    </section>
  );
}

export default Projects;
