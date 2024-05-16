import React from "react";

function YouTubeMulImg() {
  return (
    <div>
      {/*======================
      youtube header section
      =========================
      */}
      <header
        style={{
          display: "flex",
        }}
      >
        <img
          style={{
            borderRadius: "50%",
            gap: "20px",
          }}
          src="https://yt3.googleusercontent.com/OoVuuL6C86aY1WQVxMouogyZcvhsMty_0C9k1KTQi303O-SlyivduPeozs9SvApxj6nwjq9EpA=s176-c-k-c0x00ffffff-no-rj"
          alt="Ashok IT"
        ></img>
        <div>
          <h2>Ashok IT</h2>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
            type="none"
          >
            <li>. @ashokit</li>
            <li>‧ 80.7K subscribers</li>
            <li>‧ 1.1K videos</li>
          </ul>
          <div>
            <a href="https://www.ashokitech.com">About Ashok IT :</a>
          </div>
          <div style={{paddingTop:"20px"}}>
            <button
              style={{
                border: "none",
                padding: "8px 20px",
                backgroundColor: "black",
                borderRadius: "20px",
                color: "white",
                marginRight: "10px",
                fontWeight: "550",
              }}
            >
              Subscribed{" "}
            </button>

            <button
              style={{
                border: "2px solid grey",
                padding: "8px 20px",
                backgroundColor: "white",
                borderRadius: "20px",
                fontWeight: "550",
              }}
            >
              Join
            </button>
          </div>
        </div>
      </header>
      <hr />
      <section>
        {/*youtube Video Card 1*/}
        <h3>Popular Videos</h3>
        <div style={{
            display: "flex",
            gap: "20px",
          }}>
        <article style={{ borderRadius: "20px"}}>
          <img 
            src="https://i.ytimg.com/vi/Ri-URt8gPCk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwlnuhoE6zjAAmneD7IYXaelGVLQ"
            alt="Remove Dublicate Character"
          />
          <h6>
            Java Program To Remove Duplicate Characters In String | Ashok IT
          </h6>
          <p>145K views 3 years ago</p>
        </article>
        <article style={{ borderRadius: "20px"}}>
          <img 
            src="https://i.ytimg.com/vi/aAxtUJrpMWQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvVRlZH033cDH-K9dXbNRV8E0f9Q"
            alt="Devops"
          />
          <h6>
          DevOps Interview For Experience : First Round Selected
          </h6>
          <p>1134K views1 year ago</p>
        </article>
        <article style={{ borderRadius: "20px"}}>
          <img 
            src="https://i.ytimg.com/vi/2HZ77GR-o84/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMc2yIj4stH5cz84tFraB8tVGOWA"
            alt="Devops"
          />
          <h6>
          Java Program To Reverse Given String | Ashok IT
          </h6>
          <p>109K views 3 years ago/</p>
        </article>
        <article style={{ borderRadius: "20px"}}>
          <img 
            src="https://i.ytimg.com/an_webp/qJ8gUp0O25k/mqdefault_6s.webp?du=3000&sqp=CK-XlbIG&rs=AOn4CLD341HAySuY4ISGQATQZQQ9SscCyA"
            alt="CICD"
          />
          <h6>
          DevOps Project Setup By Mr. Ashok |  CI CD Pipeline @ashokit
          </h6>
          <p>98K views 1 year ago</p>
        </article>
        </div>

        <h3>Interview Preparation Guide @ashokit</h3>
        <div style={{
            display: "flex",
            gap: "20px",
          }}>
        <article style={{ borderRadius: "20px"}}>
          <img 
            src="https://i.ytimg.com/vi/72tbMvbXAq4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDoq_g8wHL0KIjQkzttaR6nx9skYg"
            alt="Java Developer"
          />
          <h6>
          Java Developers Roles and Responsibilities in JOB | Interview Questions
          </h6>
          <p>25K views 1 years ago</p>
        </article>
        <article style={{ borderRadius: "20px"}}>
          <img 
            src="https://i.ytimg.com/vi/lxxFkSZsdaM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdmoay4aLfWTEfH0M_d2zQ27orow"
            alt="Devops"
          />
          <h6>
          DevOps Engineer Roles and Responsibilities @ashokit
          </h6>
          <p>6k views 1 year ago</p>
        </article>
        <article style={{ borderRadius: "20px"}}>
          <img 
            src="https://i.ytimg.com/an_webp/xvSO8cIOmlE/mqdefault_6s.webp?du=3000&sqp=CNGflbIG&rs=AOn4CLBwic97GMdqdS9U6Ek7wJ8-ajXhYw"
            alt="My Self"
          />
          <h6>
          How to explain self introduction in interviews @ashokit
          </h6>
          <p>15K views 1 years ago/</p>
        </article>
        <article style={{ borderRadius: "20px"}}>
          <img 
            src="https://i.ytimg.com/vi/I8gb_ScUs9U/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-YwTnH0LZ5hOcOReMmVye4xDKEA"
            alt="Java"
          />
          <h6>
          Top 80 Java Interview Questions & Answers For Experienced People
          </h6>
          <p>80K views 1 year ago</p>
        </article>
        </div>
      </section>
    </div>
  );
}

export default YouTubeMulImg;
