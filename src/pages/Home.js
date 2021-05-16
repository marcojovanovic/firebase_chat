import React from 'react';
import Navbar from '../components/Navbar';

import './home.css';

function Home() {
  return (
    <div>
      <Navbar />
      <section className="container">
        <div className="listOfUsers">

        <div className="displayName">
                  <div className="displayPic">
                      <img src="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" alt="" />
                  </div>
                  <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', margin: '0 10px'}}>
                      <span style={{fontWeight: 500}}>Milisav Samardzic</span>
                      <span >Online</span>
                  </div>
              </div>


        </div>

        <div className="chatArea">
          <div className="chatHeader"></div>
          <div className="messageSections">

            <div style={{textAlign:'left'}}>
              <p className='messageStyle'>Hello User</p>
            </div>

          </div>

          <div className="chatControls">
            <textarea
              value=''
              //onChange={(e) => setMessage(e.target.value)}
              placeholder="Write Message"
            />
            <button >Send</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
