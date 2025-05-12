import './Landing.css';

export default function Landing() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center px-6">
      <h1 className="text-4xl font-bold mb-4 text-red-600">류승환 포트폴리오</h1>
      <p className="text-lg text-gray-300">매출을 만드는 기술, 효율을 설계하는 개발자</p>
      <a href="#projects"
        className="mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded"
      >
        프로젝트 보러가기
      </a>
    </main>
  );
}