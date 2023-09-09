import './filtersection.css'

const Filtersection = () => {
  return (
    <>
        <section className='filter-section'>
            <h2 className="haading">Latest Posts</h2>
            <div className="fliter-text">
                <img src="https://static.vecteezy.com/system/resources/previews/010/155/655/non_2x/filter-icon-sign-symbol-design-free-png.png" alt="fliterimage" />
                
                <span style={{margin: "0px 0px 15px 8px "}} className="filter-tex1t" >Fliter by category</span>
                
            </div>
        </section>
        <section className="categories">
            <div className="category-item active">All</div>
            <div className="category-item">Artificial Intelligence</div>
            <div className="category-item">Cloud Computing</div>
            <div className="category-item">DevOps</div>
            <div className="category-item">Mobile Application Development</div>
            <div className="category-item">Programming Languages</div>
            <div className="category-item">Technology and Tools</div>
            <div className="category-item">Get a Job in a Tech Company</div>
            <div className="category-item">Others</div>
        </section>
    </>
  )
}

export default Filtersection