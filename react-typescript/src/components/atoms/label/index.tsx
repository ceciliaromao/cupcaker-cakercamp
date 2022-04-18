import styles from './styles.module.scss'

interface ILabelProps {
  labelTitle: string
}

const LabelType = ({ labelTitle }: ILabelProps): JSX.Element => {
  return (
    <a className={styles.labelTag} title={labelTitle}>
      #{labelTitle}
    </a>
  )
}

export { LabelType }
