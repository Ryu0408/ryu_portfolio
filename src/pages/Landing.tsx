import { useState } from 'react';
import TechStack from '../components/TechStack';
import ProjectModal from '../components/ProjectModal';
import './Landing.css';

const projects = [
  {
    id: 'happytrain',
    title: "행복을 주는 사람들 플랫폼",
    description: "실시간 좌석 예약, 커뮤니티, 문자 발송 및 포인트 사용(적립) 시스템을 포함한 기차 여행 예약 플랫폼",
    url: "https://happytrain.co.kr/",
    icon: "🚆",
    details: true
  },
  {
    id: 'autobahn',
    title: "오토반 썬팅필름 브랜드 플랫폼",
    description: "전국 시공점 연결, 정품 확인 및 보증서 발급, 관리자 자료 공유, 이벤트 관리 기능을 제공하는 통합 브랜드 운영 플랫폼",
    url: "https://www.autobahnkorea.com/",
    icon: "🚗",
    details: true
  },
  {
    id: 'optimum',
    title: "옵티멈 윈도우 필름 플랫폼",
    description: "시공점 검색, 보증서 발급 및 관리, 브랜드 자료 공유와 더불어 공구몰 연동 기능까지 갖춘 윈도우 필름 브랜드 플랫폼",
    url: "https://www.optimumwindowfilm.com/",
    icon: "🔧",
    details: true
  }
];

export default function Landing() {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [modalProjectId, setModalProjectId] = useState<string | null>(null);

  const openModal = (id: string) => setModalProjectId(id);
  const closeModal = () => setModalProjectId(null);
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
        <div className="project-box">
          <h2 className="section-title">Projects</h2>
          <div className="project-grid">
            {projects.map((project, index) => {
              if (project.details) {
                return (
                  <div
                    key={index}
                    className="project-card clickable"
                    onClick={() => openModal(project.id)}
                  >
                    <div className="project-icon">{project.icon}</div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                  </div>
                );
              }
              return (
                <a
                  href={project.url}
                  key={index}
                  className="project-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="project-icon">{project.icon}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <ProjectModal
        isOpen={modalProjectId === 'happytrain'}
        onClose={closeModal}
        title="행복을 주는 사람들 – 기차 여행 예약 플랫폼"
        description="기차 여행 예약을 위한 종합 플랫폼으로, 사용자 친화적인 예약 시스템과 다양한 부가 기능을 제공합니다."
        features={[
          "예약 시스템: 실시간 좌석 배치도 기반 예약",
          "결제 기능: 다양한 결제 수단 지원",
          "커뮤니티: 사용자 간 소통 게시판",
          "제품 등록: 여행 상품 관리",
          "문자 발송: 예약 알림 문자 시스템",
          "포인트 시스템: 적립/사용 기반 고객 혜택",
        ]}
        link="https://happytrain.co.kr/"
        icon="🚆"
      />
      <ProjectModal
          isOpen={modalProjectId === 'optimum'}
          onClose={closeModal}
          title="옵티멈 윈도우 필름 브랜드 플랫폼"
          description="전국 시공점 안내, 보증서 발급, 자료실, 이벤트 게시판 등 브랜드 운영 핵심 기능과 함께 공구몰 연동 기능까지 포함한 복합형 플랫폼입니다."
          features={[
            "공식 시공점 검색",
            "정품 확인서 및 보증서 QR 발급",
            "이벤트 / 뉴스 게시판 운영",
            "브랜드 자료실 기능 (시공점용)",
            "보증서 이력 관리 및 검색",
            "공구몰 연동: 옵티멈 툴 사이트로 바로 이동 가능"
          ]}
          link="https://www.optimumwindowfilm.com/"
          icon="🔧"
        />
        <ProjectModal
          isOpen={modalProjectId === 'autobahn'}
          onClose={closeModal}
          title="오토반 썬팅필름 브랜드 운영 플랫폼"
          description="오토반 썬팅 필름의 공식 브랜드 사이트로, 전국 시공점 안내, 정품 보증서 발급, 자료실 공유, 뉴스 및 이벤트 관리 등 브랜드 운영에 필요한 핵심 기능을 제공합니다."
          features={[
            "공식 시공점 검색: 지역 기반 시공점 찾기",
            "정품 확인서 / 보증서 발급: QR 기반 고객 확인",
            "이벤트 & 뉴스 게시판 운영",
            "관리자 자료실: 시공점 대상 교육/홍보 자료 공유",
            "보증서 이력 관리: 시리얼 넘버 검색 및 수정 기능",
          ]}
          link="https://www.autobahnkorea.com/"
          icon="🚗"
        />

      {/* Contact */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Contact</h2>
        <p>📧 fbtmdghks11@naver.com</p>
        <p>💼 GitHub: <a href="https://github.com/Ryu0408" className="link">github.com/Ryu0408</a></p>
      </section>
    </main>
  );
}