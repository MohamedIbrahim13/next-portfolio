import Image from "next/image";

export default function Skills({ skills }) {
  const { proglang, frameworks, softwares } = skills;
  return (
    <div className="progress-bars">
      {proglang?.map(lang => {
        return (
          <div className="progress-bar" key={lang.id}>
            <p className="prog-title">{lang.name}</p>
            <p>
              {" "}
              <Image src={lang.icon} alt={lang.name} width="24" height="24" />
            </p>
            <div className="progress-con">
              <p className="prog-text">75%</p>
              <div className="progress">
                <span></span>
              </div>
            </div>
          </div>
        );
      })}
      {frameworks?.map(framework => {
        return (
          <div className="progress-bar" key={framework.id}>
            <p className="prog-title">{framework.name}</p>
            <p>
              {" "}
              <img src={framework.icon} alt={framework.name} />
            </p>
            <div className="progress-con">
              <p className="prog-text">75%</p>
              <div className="progress">
                <span></span>
              </div>
            </div>
          </div>
        );
      })}
      {softwares?.map(software => {
        return (
          <div className="progress-bar" key={software.id}>
            <p className="prog-title">{software.name}</p>
            <p>
              {" "}
              <Image
                src={software.icon}
                alt={software.name}
                width="24"
                height="24"
              />
            </p>
            <div className="progress-con">
              <p className="prog-text">75%</p>
              <div className="progress">
                <span></span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
