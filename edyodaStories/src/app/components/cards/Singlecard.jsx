import React from 'react'
import './singlecard.css'

const Singlecard = ({menuData}) => {
  return (
    <>
    <section className="blogs">
        {menuData.map( (currentElm) =>{
            return(
                <>
                    <div className="blog-items" key={currentElm.id}>
                            <div className="blog-img">
                                <img src={currentElm.image} alt={currentElm.name} />
                            </div>
                            <div className="blog-content">
                                <h2 className="blog-title">
                                {currentElm.name}
                                </h2>
                                <p className="blog-author"> {currentElm.Author}<span className="blog-date"> | {currentElm.Date}</span></p>
                                <p className="blog-text">
                                   {currentElm.discription}
                                </p>
                            </div>
                    </div>
                </>
            );
        })}
     </section>
    
    </>
  )
}

export default Singlecard