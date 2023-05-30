import styles from './styles.module.css'

interface Props{
  click(): void
}

export const CreateButton = ({click}: Props) => {
  return (
    <button className={styles.main} onClick={click}>
        Criar
    </button>
  )
}
