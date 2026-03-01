import Special from "../components/Home/Special"
import Categories from "../components/Home/Categories"
import Products from "../components/Home/Products"

function Home() {
  return (
    <section className="container">
          <Special/>
          <Categories/>
          <Products/>
    </section>
  )
}

export default Home