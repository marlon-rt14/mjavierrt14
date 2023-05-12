import React from "react";

interface IProps {
  title: string;
  type: "gallery-project-mobile" | "gallery-project";
  children: React.ReactNode;
}

export const ProjectTemplate = ({title, type, children}: IProps) => {
  return (
    <section className="section-project">
      <div className="waves waves-up" id="waves-project"></div>
      <div className="">
        <article className="article-project">
          <h1>{title}</h1>
          <div className="">
            <div className={type}>{children}</div>
          </div>
        </article>
      </div>
      <div className="waves waves-down" id="waves-project"></div>
    </section>
  );
};
