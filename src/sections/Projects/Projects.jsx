import styles from './Projects.module.css'
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import hipster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'
import ProjectCard from '../../common/ProjectCard'


export const Projects = () => {
	return (
		<section id='projects' className={styles.container}>
			<h1 className='sectionTitle'>Projects</h1>
			<div className={styles.projectsContainer}>
				<ProjectCard
					src={viberr}
					link='https://rezka.ag/films/best/'
					h3='Viberr'
					p='Streaming App'
				/>
				<ProjectCard
					src={freshBurger}
					link='https://rezka.ag/films/best/'
					h3='Fresh Burger'
					p='Hamburger Restourant'
				/>
				<ProjectCard
					src={hipster}
					link='https://rezka.ag/films/best/'
					h3='Hipsster'
					p='Glasses Shop'
				/>
				<ProjectCard
					src={fitLift}
					link='https://rezka.ag/films/best/'
					h3='FitLift'
					p='Fitness App'
				/>
			</div>
		</section>
	)
}
