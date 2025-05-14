import {
    SiJavascript, SiTypescript, SiReact, SiNextdotjs,
    SiNodedotjs, SiNestjs, SiSpringboot, SiPhp, SiLaravel, SiPython,
    SiMysql, SiMongodb, SiPostgresql, SiOracle, SiRedis,
    SiAmazon, SiDocker,
    SiKotlin, SiSwift,
    SiJira, SiFigma, SiSlack, SiNotion
  } from 'react-icons/si';
  import './TechStack.css';
  
  const stackGroups = [
    {
      title: 'Frontend',
      items: [
        { name: 'React', icon: <SiReact color="#61dafb" /> },
        { name: 'Vue.js', icon: <SiJavascript color="#42b883" /> },
        { name: 'Next.js', icon: <SiNextdotjs color="#000000" /> },
        { name: 'JavaScript', icon: <SiJavascript color="#f7df1e" /> },
        { name: 'TypeScript', icon: <SiTypescript color="#3178c6" /> },
      ]
    },
    {
      title: 'Backend',
      items: [
        { name: 'Node.js', icon: <SiNodedotjs color="#68a063" /> },
        { name: 'Nest.js', icon: <SiNestjs color="#e0234e" /> },
        { name: 'Spring Boot', icon: <SiSpringboot color="#6db33f" /> },
        { name: 'PHP', icon: <SiPhp color="#8892be" /> },
        { name: 'Laravel', icon: <SiLaravel color="#ff2d20" /> },
        { name: 'Python', icon: <SiPython color="#3776ab" /> },
      ]
    },
    {
      title: 'Database',
      items: [
        { name: 'MySQL', icon: <SiMysql color="#00758f" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
        { name: 'MongoDB', icon: <SiMongodb color="#47a248" /> },
        { name: 'OracleDB', icon: <SiOracle color="#f80000" /> },
        { name: 'Redis', icon: <SiRedis color="#d82c20" /> },
      ]
    },
    {
      title: 'DevOps / Infra',
      items: [
        { name: 'AWS', icon: <SiAmazon color="#ff9900" /> },
        { name: 'Docker', icon: <SiDocker color="#0db7ed" /> },
      ]
    },
    {
      title: 'Mobile',
      items: [
        { name: 'React Native', icon: <SiReact color="#61dafb" /> },
        { name: 'Kotlin', icon: <SiKotlin color="#7f52ff" /> },
        { name: 'Swift', icon: <SiSwift color="#f05138" /> },
      ]
    },
    {
      title: 'Collaboration',
      items: [
        { name: 'Jira', icon: <SiJira color="#0052cc" /> },
        { name: 'Figma', icon: <SiFigma color="#a259ff" /> },
        { name: 'Slack', icon: <SiSlack color="#611f69" /> },
        { name: 'Notion', icon: <SiNotion color="#000000" /> },
      ]
    },
  ];
  
  export default function TechStack() {
    return (
      <section className="stack-section" id="stack">
        <div className="container">
          <h2 className="section-title">Tech Stack</h2>
          <div className="stack-grid">
            {stackGroups.map((group) => (
              <div key={group.title} className="stack-group">
                <h3 className="group-title">{group.title}</h3>
                <div className="stack-items">
                  {group.items.map(({ name, icon }) => (
                    <div key={name} className="stack-item">
                      <div className="icon-circle">{icon}</div>
                      <span className="icon-label">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}