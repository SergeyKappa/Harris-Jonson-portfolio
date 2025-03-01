import styles from './Skills.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

export const Skills = () => {
	return (
		<section id='skills' className={styles.container}>
			<h1 className='sectionTitle'>Skills</h1>
			<div className={styles.skillList}>
				<SkillList src={checkMarkIcon} skill='HTML' />
				<SkillList src={checkMarkIcon} skill='CSS' />
				<SkillList src={checkMarkIcon} skill='JavaScript' />
				<SkillList src={checkMarkIcon} skill='Node' />
				<SkillList src={checkMarkIcon} skill='TypeScript' />
			</div>
			<hr />
			<div className={styles.skillList}>
				<SkillList src={checkMarkIcon} skill='React' />
				<SkillList src={checkMarkIcon} skill='Angular' />
				<SkillList src={checkMarkIcon} skill='Vue' />
				<SkillList src={checkMarkIcon} skill='Tailwind CSS' />
				<SkillList src={checkMarkIcon} skill='Bootstrap' />
			</div>
			<hr />
			<div className={styles.skillList}>
				<SkillList src={checkMarkIcon} skill='Redux' />
				<SkillList src={checkMarkIcon} skill='Webpack' />
				<SkillList src={checkMarkIcon} skill='Git' />
				<SkillList src={checkMarkIcon} skill='Jest' />
				<SkillList src={checkMarkIcon} skill='Java' />
			</div>
		</section>
	)
}
