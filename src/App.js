import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [job, setjob] = useState([]);
  const [value, setValue] = useState(0);
  const fetchJob = async () => {
    const res = await fetch(url);
    const Getjob = await res.json();
    setjob(Getjob);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJob();
  }, []);

  if (isLoading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    );
  }
  console.log(job);
  const { id, title, dates, duties, company } = job[value];
  return (
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {job.map((jobs, index) => {
            const { company } = jobs;
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {company}
              </button>
            );
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon' />
                <p> {duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
