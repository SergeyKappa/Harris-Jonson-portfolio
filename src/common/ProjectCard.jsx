import styles from '../sections/Projects/Projects.module.css'

const ProjectCard = ({ src, link, h3, p }) => {
	return (
		<a href={link} target='_blank'>
			<img className={styles.hover} src={src} alt={`${h3}`} />
			<h3>{h3}</h3>
			<p>{p}</p>
		</a>
	)
}

export default ProjectCard
