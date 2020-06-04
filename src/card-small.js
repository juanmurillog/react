import React from 'react'
import './card-small.css'
function CardSmall(){

  return(
    <section className="overview">
        
    <div className="wraper">
    <h2>Overview - Today</h2>
    <div className="grid">
        <div className="card-small">
            <p className="card-small-views">Page views</p>
            <p className="card-small-icon"><img src="images/icon-facebook.svg" alt=""/></p>
            <p className="card-small-number">87</p>
            <p className="card-small-porcentage">
                <span><img src="images/icon-up.svg" alt=""/>
                 3%</span></p>
           


         </div>
         <div className="card-small">
             <p className="card-small-views">Likes</p>
             <p className="card-small-icon"><img src="images/icon-facebook.svg" alt=""/></p>
             <p className="card-small-number">52</p>
             <p className="card-small-porcentage is-danger">
                 <span><img src="images/icon-down.svg" alt=""/>
                  2%</span></p>
            


          </div>
          <div className="card-small">
             <p className="card-small-views">Likes</p>
             <p className="card-small-icon"><img src="images/icon-instagram.svg" alt=""/></p>
             <p className="card-small-number">5462</p>
             <p className="card-small-porcentage">
                 <span><img src="images/icon-up.svg" alt=""/>
                  2257%</span></p>
            


          </div>
          <div className="card-small">
             <p className="card-small-views">Profile views</p>
             <p className="card-small-icon"><img src="images/icon-instagram.svg" alt=""/></p>
             <p className="card-small-number">52k</p>
             <p className="card-small-porcentage">
                 <span><img src="images/icon-up.svg" alt=""/>
                  2%</span></p>
            


          </div>
          <div className="card-small">
             <p className="card-small-views">Retweets</p>
             <p className="card-small-icon"><img src="images/icon-twitter.svg" alt=""/></p>
             <p className="card-small-number">118</p>
             <p className="card-small-porcentage">
                 <span><img src="images/icon-up.svg" alt=""/>
                  303%</span></p>
            


          </div>
          <div className="card-small">
             <p className="card-small-views">Likess</p>
             <p className="card-small-icon"><img src="images/icon-twitter.svg" alt=""/></p>
             <p className="card-small-number">508</p>
             <p className="card-small-porcentage">
                 <span><img src="images/icon-up.svg" alt=""/>
                  553%</span></p>
            


          </div>
          <div className="card-small">
             <p className="card-small-views">Likes</p>
             <p className="card-small-icon"><img src="images/icon-youtube.svg" alt=""/></p>
             <p className="card-small-number">107</p>
             <p className="card-small-porcentage is-danger">
                 <span><img src="images/icon-down.svg" alt=""/>
                  19%</span></p>
            


          </div>
          <div className="card-small">
             <p className="card-small-views">Totalviews</p>
             <p className="card-small-icon"><img src="images/icon-youtube.svg" alt=""/></p>
             <p className="card-small-number">1407</p>
             <p className="card-small-porcentage is-danger">
                 <span><img src="images/icon-down.svg" alt=""/>
                  12%</span></p>
            


          </div>
    </div>
        
    </div>
</section>
  )

}
export default CardSmall
