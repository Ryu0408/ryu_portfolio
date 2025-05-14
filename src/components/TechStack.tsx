import {
    SiJavascript, SiTypescript, SiReact, SiNextdotjs,
    SiNodedotjs, SiNestjs, SiSpringboot, SiPhp, SiLaravel, SiPython,
    SiMysql, SiMongodb, SiPostgresql, SiOracle, SiMariadb, SiRedis,
    SiDocker, SiApache, SiNginx, SiJenkins,
    SiGithub, SiGraphql, SiLinux, SiExpress, SiExpo, SiDotnet,
    SiCodeigniter, SiKotlin, SiSwift, SiJira, SiFigma, SiSlack, SiNotion,
    SiAmazonrds, SiAmazon, SiAmazonec2, SiAmazons3, SiAmazonroute53, SiOpenai, SiVite
} from 'react-icons/si';
import './TechStack.css';

const stackGroups = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: <SiReact color="#61dafb" /> },
      { name: 'Vue.js', icon: <SiJavascript color="#42b883" /> },
      { name: 'Next.js', icon: <SiNextdotjs color="#000000" /> },
      { name: 'Vite', icon: <SiVite color="#646CFF" /> },  // ← 요거 추가!
      { name: 'JavaScript', icon: <SiJavascript color="#f7df1e" /> },
      { name: 'TypeScript', icon: <SiTypescript color="#3178c6" /> },
    ]
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: <SiNodedotjs color="#68a063" /> },
      { name: 'Express.js', icon: <SiExpress color="#000000" /> },
      { name: 'Nest.js', icon: <SiNestjs color="#e0234e" /> },
      { name: 'Spring Boot', icon: <SiSpringboot color="#6db33f" /> },
      { name: 'PHP', icon: <SiPhp color="#8892be" /> },
      { name: 'Laravel', icon: <SiLaravel color="#ff2d20" /> },
      { name: 'CodeIgniter', icon: <SiCodeigniter color="#ee4623" /> },
      { name: 'ASP.NET', icon: <SiDotnet color="#512bd4" /> },
      { name: 'Python', icon: <SiPython color="#3776ab" /> },
    ]
  },
  {
    title: 'Database',
    items: [
      { name: 'MySQL', icon: <SiMysql color="#00758f" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
      { name: 'MongoDB', icon: <SiMongodb color="#47a248" /> },
      { name: 'MariaDB', icon: <SiMariadb color="#003545" /> },
      { name: 'OracleDB', icon: <SiOracle color="#f80000" /> },
      { name: 'Redis', icon: <SiRedis color="#d82c20" /> },
    ]
  },
  {
    title: 'DevOps / Infra',
    items: [
      { name: 'AWS Lambda', icon: <SiAmazon color="#ff9900" /> },
      { name: 'AWS Route 53', icon: <SiAmazonroute53 color="#ff9900" /> },
      { name: 'AWS S3', icon: <SiAmazons3 color="#ff9900" /> },
      { name: 'AWS EC2', icon: <SiAmazonec2 color="#ff9900" /> },
      { name: 'AWS RDS', icon: <SiAmazonrds color="#ff9900" /> },
      { name: 'Docker', icon: <SiDocker color="#0db7ed" /> },
      { name: 'Jenkins', icon: <SiJenkins color="#d33833" /> },
      { name: 'GraphQL', icon: <SiGraphql color="#e535ab" /> },
      { name: 'Nginx', icon: <SiNginx color="#009639" /> },
      { name: 'Apache', icon: <SiApache color="#d22128" /> },
      { name: 'Linux', icon: <SiLinux color="#333333" /> },
      { name: 'GitHub', icon: <SiGithub color="#181717" /> },
    ]
  },
  {
    title: 'Mobile',
    items: [
      { name: 'React Native', icon: <SiReact color="#61dafb" /> },
      { name: 'Expo', icon: <SiExpo color="#000000" /> },
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
      { name: 'ChatGPT', icon: <SiOpenai color="#000000" /> },
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
