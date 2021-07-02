import React, {useEffect,useState} from 'react';
import Course from './Course';

const CourseLayout = (props) => {
   
   return(
        <React.Fragment>
            <div className="container">
            <div className="row mt-5">
            {
            props.data.map((value, index) => {
               return <div key={index} className="col-lg-3"><Course 
                       id={value.id}
                       title={value.title}
                       desc={value.discription}/>
                </div>
            })
           }
             </div>
             </div>
            </React.Fragment>
    );
}
 
  
export default CourseLayout;