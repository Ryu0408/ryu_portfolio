import { useState } from 'react';
import TechStack from '../components/TechStack';
import ProjectModal from '../components/ProjectModal';
import './Landing.css';

const projects = [
  {
    id: 'ambience-erp',
    title: "Ambience 전사 ERP 시스템",
    description: "본사, 백화점, 시공사, 거래처, 헬스케어 등 Ambience의 모든 사업영역을 아우르는 전사 통합 운영 플랫폼",
    url: "https://aws.ambience.kr/",
    icon: "📊",
    details: true
  },
  {
    id: 'ablack',
    title: "에이블랙 – 프리미엄 조명 시공 앱",
    description: "전국 어디서나 동일 견적, 실시간 시공 관리, 포인트 기반 예약까지 가능한 하이엔드 조명 설치 플랫폼",
    url: "https://play.google.com/store/apps/details?id=com.ambience.ablack&hl=ko",
    icon: "💡",
    details: true
  },
  {
    id: 'ablack-web',
    title: "에이블랙 – 거래처 전용 웹 플랫폼",
    description: "하이엔드 조명 시공 파트너를 위한 견적, 예약, 포인트 기능이 통합된 거래처 중심 웹 플랫폼",
    url: "https://ablack.ambience.kr/",
    icon: "🖥️",
    details: true
  },
  {
    id: 'ambience-closedmall',
    title: "Ambience - 고객, 거래처 전용 폐쇄몰",
    description: "실시간 재고 확인, 견적 생성, 거래처별 할인율 자동 적용까지 가능한 B2B, B2C 전용 조명 구매 플랫폼",
    url: "https://shop.ambience.kr/home",
    icon: "🔐",
    details: true
  },
  {
    id: 'milihaebwa',
    title: "미리해봐 – AI 성형 시뮬레이션",
    description: "AI 얼굴 분석과 성형 시뮬레이션을 통해 성형을 계획할 수 있도록 돕는 맞춤형 성형 플랫폼 (현재 서비스 종료)",
    url: "https://worldhearts.tistory.com/266",
    icon: "🧪",
    details: true
  },
  {
    id: 'vw-korea',
    title: "폭스바겐그룹코리아 – 딜러 및 물류 관리 시스템",
    description: "수입차 업계 특화 시스템을 중심으로 딜러사, 물류, 계약, 시승, 전자방명록까지 통합한 백오피스 솔루션 개발",
    url: "https://www.vw.co.kr/",
    icon: "🚘",
    details: true
  },
  {
    id: 'naver-webtoon',
    title: "네이버웹툰 글로벌 백엔드 개발 참여",
    description: "수백만 유저를 대상으로 하는 대용량 트래픽 플랫폼의 서버 안정성과 성능 최적화를 경험한 글로벌 서비스 백엔드 개발 프로젝트",
    url: "https://www.webtoons.com",
    icon: "📚",
    details: true
  },
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
  },

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
        isOpen={modalProjectId === 'ambience-erp'}
        onClose={closeModal}
        title="Ambience 전사 ERP 시스템"
        description="앰비언스의 모든 사업 부문을 실시간으로 통합 관리하는 전사 ERP 플랫폼. 본사, 백화점, 시공사, 헬스케어, 가맹점, 거래처 등 모든 이해관계자가 하나의 시스템으로 연결됩니다."
        features={[
          "[운영 전반 기능]",
          "권한 기반 메뉴 설정 및 사용 히스토리 관리",
          "시공사, 거래처, 할인율, 백화점 인력 및 근무표 관리",
          "마케팅 (유입, 구매, 배너, 팝업, 프로모션 등) 설정 및 분석",
          "제품, 고객, 판매, 예약, 쿠폰, 발주, 선적, 재고, 대여 관리",
          "자사몰 연동, 사업부별 인사이트 대시보드",
          "상담일지 관리, 데일리보드, 월별 결산까지 실시간 관리",
          "[헬스케어 사업 기능]",
          "점포 및 트레이너/상담자 인력 관리",
          "PT 스케줄 및 실적 관리",
          "식단 관리 앱 연동 (식단 등록 및 분석)",
          "샐러드/의류 등 부가 제품 관리",
          "헬스 고객 DB 및 상담일지 기록",
          "지점별 매출 관리 및 가맹 운영 시스템",
          "[접속 주소]",
          "신형 ERP: https://aws.ambience.kr/",
          "구형 ERP: https://operation.ambienceinstall.com/"
        ]}
        link="https://aws.ambience.kr/"
        link2="https://operation.ambienceinstall.com/"
        icon="📊"
      />
      <ProjectModal
        isOpen={modalProjectId === 'ablack'}
        onClose={closeModal}
        title="에이블랙 – 프리미엄 조명 시공 앱"
        description="전국 어디서든 고급 조명을 동일한 견적으로 설치하고, 예약부터 실시간 관리까지 한 번에 가능한 고객 중심 조명 시공 플랫폼"
        features={[
          "▶ 핵심 기능",
          "시공 예약 / 이동시공 예약 / A/S 예약 통합 처리",
          "고객 중심의 실시간 시공 상태 확인 (날짜, 담당자, 단계)",
          "전국 어디서든 동일 견적 제공 (지역별 차별 없음)",
          "간편한 조명 견적 계산기 기능 제공",
          "▶ 프리미엄 브랜드 조명 지원",
          "루이스폴센, 비비아, 베르판 등 하이엔드 브랜드 시공 가능",
          "브랜드별 제품 정보 및 예약 연동",
          "▶ 포인트 시스템 (AP 포인트)",
          "구매 시 포인트 적립 및 사용 가능",
          "포인트샵 또는 예약 시 사용 가능",
          "포인트 내역 관리 기능 포함",
          "▶ 커뮤니티 & 포트폴리오",
          "조명 시공 포트폴리오 열람 및 태깅/보관",
          "커뮤니티 콘텐츠 좋아요, 태그, 보관함 기능",
          "▶ 기타 기능",
          "푸시 알림을 통한 예약 및 상태 알림",
          "앱 내 사용자 친화 UI/UX 설계",
          "▶ 앱 다운로드 링크",
          "∙ Android: https://play.google.com/store/apps/details?id=com.ambience.ablack&hl=ko",
          "∙ iOS: https://apps.apple.com/kr/app/%EC%97%90%EC%9D%B4%EB%B8%94%EB%9E%99-%EB%B9%9B-%EB%84%88%EB%A8%B8%EC%9D%98-%EB%AA%A8%EB%93%A0-%EA%B2%83/id6443521702"
        ]}
        link="https://play.google.com/store/apps/details?id=com.ambience.ablack&hl=ko"
        link2="https://apps.apple.com/kr/app/%EC%97%90%EC%9D%B4%EB%B8%94%EB%9E%99-%EB%B9%9B-%EB%84%88%EB%A8%B8%EC%9D%98-%EB%AA%A8%EB%93%A0-%EA%B2%83/id6443521702"
        icon="💡"
      />
      <ProjectModal
        isOpen={modalProjectId === 'ablack-web'}
        onClose={closeModal}
        title="에이블랙 – 거래처 전용 웹 플랫폼"
        description="앰비언스와 MOU 체결된 인테리어 거래처가 쉽게 견적을 만들고, 시공을 예약하며, 포인트를 활용할 수 있도록 설계된 조명 시공 웹 전용 플랫폼"
        features={[
          "▶ 거래처 중심 UX",
          "앱 설치 없이도 바로 사용 가능한 반응형 웹 플랫폼",
          "복잡한 앱 다운로드 없이 로그인 후 바로 견적 생성 가능",
          "메뉴얼 및 자주 묻는 질문(FAQ) 제공으로 실무자 접근성 향상",
          "▶ 주요 기능 (앱 기능 포함)",
          "∙공 예약 / A/S 예약 / 이동 시공 예약 기능 그대로 웹 제공",
          "실시간 시공 진행 상황 확인",
          "전국 동일 견적 및 자동 계산기 기능 제공",
          "▶ 브랜드 & 제품 연동",
          "루이스폴센, 베르판, 비비아 등 프리미엄 브랜드 제품 연동",
          "제품 기반 견적서 생성 및 고객 공유 기능 제공",
          "▶ 포인트 시스템 (AP 포인트)",
          "거래처 포인트 적립 및 사용 가능",
          "예약 시 포인트 차감 가능 / 포인트 사용 내역 조회",
          "▶ 관리자 및 실무자 기능",
          "다계정 로그인 및 권한 분리 (매니저 / 팀원)",
          "메뉴얼 열람 및 PDF 다운로드 기능",
          "실시간 예약 리스트 조회 및 엑셀 다운로드 지원",
          "※ 웹 전용 플랫폼으로, 앱 대비 사용 편의성과 접근성을 높인 구조입니다."
        ]}
        link="https://ablack.ambience.kr/"
        icon="🖥️"
      />
      <ProjectModal
        isOpen={modalProjectId === 'ambience-closedmall'}
        onClose={closeModal}
        title="Ambience 고객, 거래처 전용 폐쇄몰"
        description="고객과 거래처를 위한 로그인 기반 폐쇄형 플랫폼으로, 브랜드별 제품의 할인율 적용, 실시간 재고 확인, 발주 및 견적·주문 관리가 가능한 B2B, B2C 전용 조명 구매 시스템입니다."
        features={[
          "▶ 로그인 기반 거래처 전용 접근",
          "고객 및 거래처 구분 로그인",
          "거래처별 할인율 자동 적용",
          "거래처별 장바구니, 견적서, 주문서 개별 처리",
          "▶ 실시간 발주/재고 확인",
          "발주 / 생산 / 선적 / 창고 4단계 기반 실시간 재고 파악",
          "제품별 재고 수량 확인 가능",
          "빠른 납기 일정 확인 기능 포함",
          "▶ 견적/주문 자동화",
          "장바구니 기반 빠른 견적 생성",
          "다운로드 가능한 견적서, 주문서, 영수증 제공",
          "견적 이력 및 주문 이력 확인 기능",
          "▶ 브랜드별 할인 구조 반영",
          "루이스폴센, 베르판, 비비아 등 제품별 할인율 적용 로직 내장",
          "비공개 판매가로 B2B 전용 가격 정책 운영",
          "▶ 거래처 실무 효율화",
          "매장 담당자 및 실무자가 쉽게 사용할 수 있는 UI",
          "모바일·PC 환경 모두 대응하는 반응형 설계",
          "폐쇄몰: https://shop.ambience.kr/",
          "카탈로그: https://pick.ambience.kr/product"
        ]}
        link="https://shop.ambience.kr/"
        link2="https://pick.ambience.kr/"
        icon="🔐"
      />
      <ProjectModal
        isOpen={modalProjectId === 'milihaebwa'}
        onClose={closeModal}
        title="미리해봐 – AI 기반 가상 성형 시뮬레이션 플랫폼"
        description="성형 전에 AI로 미리 예측하고, 시뮬레이션해보는 개인 맞춤형 성형 솔루션. 왜곡된 성형 정보를 넘어서 정확한 데이터 기반의 경험을 제공합니다."
        features={[
          "▶ AI 기반 얼굴 분석",
          "얼굴형, 비율, 이목구비 조화 분석",
          "외모 점수 및 예상 얼굴 나이 제공",
          "▶ 가상 성형 시뮬레이션",
          "눈/코/턱/전체 비율 등 부위별 가상 성형 미리보기",
          "전후 비교 기능 제공",
          "▶ 워너비 싱크로",
          "연예인과 닮은 정도 확인",
          "닮은 얼굴 기반 성형 이미지 추천",
          "▶ 병원 정보 및 상담 연결",
          "병원 후기, 위치, 이벤트 정보 열람",
          "견적 확인 및 상담 예약 가능",
          "▶ 커뮤니티 & 페이스톡",
          "다른 사용자들과 이미지 공유, 좋아요, 댓글 기능",
          "성형 후기, 추천 등 공유 커뮤니티",
          "▶ 앱은 현재 운영 종료됨 (회사 폐업)",
        ]}
        link="https://worldhearts.tistory.com/266"
        link2="https://www.youtube.com/@%EB%AF%B8%EB%A6%AC%ED%95%B4%EB%B4%90"
        icon="🧪"
      />
      <ProjectModal
        isOpen={modalProjectId === 'vw-korea'}
        onClose={closeModal}
        title="폭스바겐그룹코리아 – 딜러 및 물류 관리 시스템 개발"
        description="수입차 브랜드의 딜러사 운영, 물류 입출고, 계약서, 시승 예약, 고객 관리 등 복잡한 오프라인 중심 프로세스를 디지털화한 백오피스 시스템 개발 프로젝트"
        features={[
          "▶ 주요 개발 영역",
          "딜러사 관리 시스템 (입점, 딜러 권한 관리, 데이터 통합)",
          "전자 계약서 및 고객 관리 시스템",
          "시승 예약, 고객 정보 등록, 시승 결과 DB화",
          "차량 물류/수입 관리: 제작증 등록, 바코드 스캔 자동 입고",
          "▶ 기술 스택",
          "ASP, PHP(CodeIgniter), C#, MSSQL",
          "Android(Java), iOS(Swift)",
          "Windows Server 기반 운영",
          "▶ 기여도",
          "전자 계약서 보안 설계 및 전자서명 처리 로직 구현",
          "C# 기반 바코드 스캐너 연동 → 차량 자동 입고 로직 개발",
          "차량 전시차/시승차/출고차 분류 시스템 설계 및 API 제공",
          "▶ 주요 성과",
          "수기 계약 프로세스 → 전자 계약서 시스템으로 전환하여 업무 효율성 증대",
          "바코드 기반 차량 입고 자동화로 물류 처리 시간 단축",
          "딜러-본사 간 데이터 통합으로 오류율 감소 및 실시간 트래킹 가능",
          "※ B2B/운영 시스템 특성상 사용자보다는 내부 프로세스 효율화에 중점",
          "※ 기획자 및 타 부서와 긴밀한 커뮤니케이션 기반의 협업 경험"
        ]}
        link="https://www.vw.co.kr/"
        icon="🚘"
      />
       <ProjectModal
          isOpen={modalProjectId === 'naver-webtoon'}
          onClose={closeModal}
          title="네이버웹툰 글로벌 백엔드 개발 참여"
          description="글로벌 사용자 수백만 명이 사용하는 네이버웹툰 플랫폼의 서버 백엔드를 팀 단위로 개발 및 유지보수. 대규모 트래픽을 견디는 확장 가능한 아키텍처 설계와 성능 최적화를 경험하며, Spring Boot 및 Node.js 기반의 API 개발을 주도적으로 수행했습니다."
          features={[
            "▶ 핵심 기술 스택",
            "Java, Spring Boot, Node.js, MySQL, MongoDB, AWS",
            "마이크로서비스 아키텍처 기반 시스템 운영",
            "CDN 최적화 및 글로벌 트래픽 대응 설계",
            "▶ 주요 업무",
            "RESTful API 개발: 웹툰 조회, 댓글, 좋아요, 공유 기능 등",
            "외부 결제/알림 시스템 연동 API 설계 및 유지보수",
            "API Gateway 기반 인증 및 보안 설계",
            "MongoDB ReplicaSet 구성, MySQL 쿼리 최적화",
            "▶ 팀 기반 협업",
            "팀 내 분산된 모듈 단위 작업 수행",
            "코드 리뷰 및 CI/CD 파이프라인 유지",
            "무중단 배포 및 장애 대응 프로세스 참여",
            "▶ 주요 성과",
            "글로벌 트래픽 증가 상황에서도 서버 안정성 확보",
            "데이터 처리 성능 최적화로 평균 응답 시간 단축",
            "코드 리팩토링 및 API 개선을 통한 유지보수 효율 증가",
            "※ 해당 프로젝트는 사내 협업 프로젝트로 단독 개발이 아닌 팀 참여 프로젝트입니다."
          ]}
          link="https://www.webtoons.com"
          icon="📚"
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
        <p>✉️ <a href="mailto:fbtmdghks11@naver.com" className="link">fbtmdghks11@naver.com</a></p>
        <p>💼 GitHub: <a href="https://github.com/Ryu0408" className="link" target="_blank" rel="noopener noreferrer">github.com/Ryu0408</a></p>
      </section>
    </main>
  );
}