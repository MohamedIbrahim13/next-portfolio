export default function Jobs({ jobs }) {
  return (
    <div className="timeline">
      {jobs?.jobs.map(job => {
        return (
          <div className="timeline-item" key={job.id}>
            <div className="tl-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <p className="tl-duration">{job.salary ? job.salary : "N/A"}</p>
            <h5>
              {job.title}
              <span> - {job.company_name}</span>
            </h5>
            <h6>
              <a href={job.url} target="_blank" rel="noreferrer">
                Apply Here
              </a>
            </h6>
          </div>
        );
      })}
    </div>
  );
}
