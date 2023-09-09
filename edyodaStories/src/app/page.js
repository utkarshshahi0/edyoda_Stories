
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Blogcards from './components/cards/Blogcards'
import Filtersection from './components/filtersection/Filtersection'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <Filtersection/>
      <Blogcards/>
      <Footer/>
    </main>
  )
}
