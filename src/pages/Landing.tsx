import { useState } from 'react';
import TechStack from '../components/TechStack';
import './Landing.css';

export default function Landing() {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <main className="scroll-smooth">
      {/* Top Navigation */}
      <nav className="top-nav">
        <ul>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#stack">Tech Stack</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section id="profile" className="hero-section two-column-hero">
        <div className="hero-left">
          <img
            src="/profile/profile.jpg"
            alt="류승환 프로필"
            className="profile-image"
            onClick={() => setIsImageOpen(true)}
          />
          <h1 className="hero-title">류승환</h1>
          <p className="hero-subtitle">매출을 만드는 기술,<br />효율을 설계하는 개발자</p>
          <a href="#projects" className="cta-button">
            프로젝트 보러가기
          </a>
        </div>

        <div className="hero-right">
          <h2 className="career-title">이력</h2>
          <ul className="timeline hero-timeline">
            <li><span className="year">2002~2005</span><p className="event">동래중학교 졸업</p></li>
            <li><span className="year">2005~2008</span><p className="event">충렬고등학교 이과계열 졸업</p></li>
            <li><span className="year">2008~2012</span><p className="event">동국대학교 정보통신학과 졸업</p></li>
            <li><span className="year">2012~2016</span><p className="event">육군 장교 (소초장, 작전장교, 동원과장, 중대장)</p></li>
            <li><span className="year">2016~2018</span><p className="event">네이버웹툰 (서버 개발팀)</p></li>
            <li><span className="year">2019~2021</span><p className="event">폭스바겐그룹코리아 (개발팀)</p></li>
            <li><span className="year">2021~2022</span><p className="event">미리해봐 (백엔드 개발팀)</p></li>
            <li><span className="year">2022~Now</span><p className="event">앰비언스 (CTO)</p></li>
          </ul>
        </div>
      </section>

      {isImageOpen && (
        <div className="overlay" onClick={() => setIsImageOpen(false)}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsImageOpen(false)}>✕</button>
            <img src="/profile/profile.jpg" alt="류승환 프로필 확대" className="zoomed-image" />
          </div>
        </div>
      )}

      {/* About */}
      <section id="about" className="about-section">
        <div className="content-box">
          <h2 className="section-title">About Me</h2>
          <p className="paragraph">
            저는 <strong>13년 경력의 풀스택 개발자</strong>로, 다양한 산업에서 전사 시스템을 기획하고 운영해온 경험을 가지고 있습니다. 
            개발자의 본질은 "기술"이 아니라 "문제 해결력"이라는 철학 아래, 
            단순한 기능 구현이 아닌 <strong>비즈니스 성과에 직결되는 시스템</strong>을 설계하고 실행해 왔습니다.
          </p>

          <p className="paragraph">
            육군 장교로 복무하며 전략적 사고와 리더십을 다졌고, 
            네이버웹툰, 폭스바겐그룹코리아, 미리해봐, 그리고 현재 재직 중인 앰비언스에서 
            풀스택 개발자 및 팀 리더, CTO로 활동하며 기술 기반의 성장을 리딩해왔습니다.
          </p>

          <p className="paragraph">
            특히 앰비언스에서는 ERP, AI 조명 추천 플랫폼, 헬스케어 SaaS, 브랜드 폐쇄몰 등 
            <strong> 전사 운영을 아우르는 시스템 아키텍처를 제로베이스에서 직접 설계·개발</strong>하고 있으며, 
            실질적인 매출 성장과 운영 효율화를 이끌었습니다.
          </p>

          <p className="paragraph">
            기술 선택은 문제 해결의 수단일 뿐입니다. 
            Java든 Node.js든, React든 Vue든 중요한 건 “무엇을 어떻게 해결할 것인가”입니다. 
            그래서 저는 최신 기술보다 <strong>적시에 정확한 솔루션</strong>을 설계하는 데 집중합니다.
          </p>

          <p className="paragraph">
            실무에서는 기획자·디자이너·운영팀과의 협업뿐 아니라 
            일정 관리, 예산 배분, 기술 검증, 운영 최적화까지 책임지는 
            <strong>End-to-End Ownership</strong>을 실현해왔고, 
            언제나 '믿고 맡기는 개발자'로서 평가받아 왔습니다.
          </p>

          <p className="paragraph">
            현재 저는 앰비언스에서 CTO이자 본부장으로서, 
            회사의 전략 방향과 기술 구조를 연결하는 중간다리 역할을 수행하고 있습니다.
            기술과 비즈니스의 간극을 메우는 사람이 바로 제가 되고자 하는 개발자상입니다.
          </p>

          <p className="quote">“기술은 수단일 뿐, 목적은 비즈니스 임팩트입니다.”</p>
        </div>
      </section>

      {/* Tech Stack */}
      <TechStack />

      {/* Projects */}
      <section id="projects" className="projects-section">
        <div className="content-box">
          <h2 className="section-title">Projects</h2>
          <div className="project-grid">
            <ProjectCard
              title="앰비언스 ERP 시스템"
              description="전사적 물류, 회계, 영업 데이터를 통합한 ERP 시스템. 수작업 기반의 업무를 자동화하며 오차율 90% 감소"
            />
            <ProjectCard
              title="AI 조명 추천 플랫폼"
              description="고객 공간 정보를 바탕으로 AI가 조명 제품을 추천. 시공 예약 → 설치까지 연결되는 전과정 플랫폼"
            />
            <ProjectCard
              title="솔레노어 헬스케어 플랫폼"
              description="PT 예약, 식단 피드백, 체력 평가를 통합한 헬스 SaaS. 고객용 앱 + 관리자용 웹을 동시 구축"
            />
            <ProjectCard
              title="성형 미리보기 플랫폼"
              description="얼굴 분석을 기반으로 성형 시뮬레이션 제공. 병원 예약 및 관리 기능도 포함"
            />
            <ProjectCard
              title="브랜드 폐쇄몰 시스템"
              description="루이스폴센, 베르판 등 독점 브랜드의 거래처 전용몰. 실시간 재고 및 납기 확인, 주문서 자동화 기능 구축"
            />
            <ProjectCard
              title="크롤링 기반 인테리어 업체 매칭 시스템"
              description="Python 크롤링으로 실시간 업체 리스트 확보 및 검색. 내부 ERP와 연동하여 자동 매칭"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Contact</h2>
        <p>📧 fbtmdghks11@naver.com</p>
        <p>💼 GitHub: <a href="https://github.com/Ryu0408" className="link">github.com/Ryu0408</a></p>
      </section>
    </main>
  );
}

function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>
    </div>
  );
}
