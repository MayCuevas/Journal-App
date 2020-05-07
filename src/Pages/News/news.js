import React from "react";
import "./news.scss";

import Aside from "../../components/aside/aside";

const NewsLayout = () =>{
    return (
     
      <div className="general-container">
            
             <Aside></Aside>
          {/* <arcticle></arcticle>
          
          <weather></weather> */}
      </div>
    );
  }

  export default NewsLayout;