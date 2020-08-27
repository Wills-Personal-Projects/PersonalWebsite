import React from 'react';
import myInfo from './images/my_info.jpg';

function InfoCard(){
    return (
          <div className="container-fluid">
              <div className="info-card">
              <div className="App-Info-Row">
                <h4>
                    wjett18@gmail.com
                </h4>
              </div>
              <div className="App-Info-Row">
                <h4>
                   (602)-370-5239
                </h4>
              </div>
              <div className="App-Info-Row">
                <a href="www.linkedin.com/in/williamjayjett">
                    <h4>
                        linkedin
                    </h4>
                </a>
              </div>
              </div>
          </div>
    );
}

export default InfoCard;