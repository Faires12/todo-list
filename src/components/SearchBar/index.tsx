import styles from './styles.module.css'

interface Props{
  value: string
  changeValue(v: string): void
}

export const SearchBar = ({value, changeValue}: Props) => {
  return (
    <input type="text" className={styles.main} placeholder='Adicione uma nova tarefa' value={value} 
    onChange={e => changeValue(e.target.value)}/>
  )
}
