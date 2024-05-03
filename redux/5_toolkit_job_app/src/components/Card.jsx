import React from 'react';
import DelButton from './DelButton';
import { IoLocationSharp } from 'react-icons/io5';
import { GiSuitcase } from 'react-icons/gi';
import { FaCalendarDays } from 'react-icons/fa6';

const Card = ({ job }) => {
  // durumlara göre renk tanımladığımız nesne
  const colors = {
    Mülakat: 'green',
    Reddedildi: 'red',
    'Devam Ediyor': 'orange',
  };

  return (
    <div className="card">
      <div className="head">
        <section>
          <div className="letter">
            <span> {job.company[0]}</span>
          </div>

          <div className="info">
            <p>{job.position}</p>
            <p>{job.company}</p>
          </div>
        </section>

        <section>
          <DelButton id={job.id} />
        </section>
      </div>

      <div className="body">
        <div className="field">
          <IoLocationSharp />
          <p>{job.location}</p>
        </div>

        <div className="field">
          <GiSuitcase />
          <p>{job.type}</p>
        </div>

        <div className="field">
          <FaCalendarDays />
          <p>{job.date}</p>
        </div>

        <div className="status">
          <p style={{ background: colors[job.status] }}>{job.status}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
