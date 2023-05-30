import { useEffect } from "react"
import styles from './styles.module.css'
import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate()

    useEffect(() => {
        document.body.style.backgroundColor = '#1E6F9F'

        return () => {
            document.body.style.backgroundColor = '#454545'
        }
    }, [])

    return (
        <div className={styles.main}>
            <div className={styles.subDiv} onClick={() => navigate('/list')}>
                <p className={styles.text}>ToDo List</p>
                <img src="/preview.svg" className={styles.image}/>
            </div>
        </div>
    )
}