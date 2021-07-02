
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {Link, useParams} from 'react-router-dom';


const CourseView = () => {
    let { id } = useParams();
    const [CourseData, setCourseData] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/course/${id}`)
        .then(respose =>respose.json()) 
        .then(data => setCourseData(data))
    }, )

    
  return(
      <div className="container">
          <div className="row">
              <div className="col-lg-9">
                  <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus vitae, tenetur quae labore mollitia veniam eveniet sed excepturi exercitationem numquam nesciunt, saepe quia, dignissimos dolor ipsum officiis commodi architecto voluptas?</p>
              </div>
              <div className="col-lg-3">
                  <div className="card">
                 <img src="" alt="" />
                 <div className="card-body">
                     <h5>{CourseData.title}</h5>
                     <Link to={"/course/view"} className="btn btn-success d-block">Lets Start</Link>
                 </div>
                  </div>
              </div>
          </div>
      </div>
  ) ; 
};

export default CourseView;