import React from 'react'
import './top-card-list.css'

function TopCardList(){

    return(
        <section className="top-cards">
     <div className="wraper">
         <div className="grid">
            <article className="card facebook">
                <p className="card-title">
                    <img src="images/icon-facebook.svg" alt=""/>
                    @Juanjosmurillo
                </p>
                <p className="card-followers">
                    <span className="card-followers-number"> 1422</span> 
                    <span className="card-followers-title">Followers</span>
                   
                   
                </p>
                <p className="card-followers-today">
                    <img src="images/icon-up.svg" alt=""/>
                    <span> 12 today</span>
                </p>
            </article>
            <article className="card twitter">
                <p className="card-title">
                    <img src="images/icon-twitter.svg" alt=""/>
                    @Juanjosmurillo
                </p>
                <p className="card-followers">
                    <span className="card-followers-number"> 3300</span> 
                    <span className="card-followers-title">Followers</span>
                   
                   
                </p>
                <p className="card-followers-today">
                    <img src="images/icon-up.svg" alt=""/>
                    <span> 12 today</span>
                </p>
            </article>
            <article className="card instagram">
                <p className="card-title">
                    <img src="images/icon-instagram.svg" alt=""/>
                    @Juanjosmurillo
                </p>
                <p className="card-followers">
                    <span className="card-followers-number"> 2000</span> 
                    <span className="card-followers-title">Followers</span>
                   
                   
                </p>
                <p className="card-followers-today">
                    <img src="images/icon-up.svg" alt=""/>
                    <span> 12 today</span>
                </p>
            </article>
            <article className="card youtube">
                <p className="card-title">
                    <img src="images/icon-youtube.svg" alt=""/>
                    @Juanjosmurillo
                </p>
                <p className="card-followers">
                    <span className="card-followers-number"> 300k</span> 
                    <span className="card-followers-title">Followers</span>
                   
                   
                </p>
                <p className="card-followers-today">
                    <img src="images/icon-up.svg" alt=""/>
                    <span> 12 today</span>
                </p>
            </article>
         </div>
        
        
     </div>
    </section>
    )
}

export default TopCardList 