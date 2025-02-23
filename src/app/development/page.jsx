//개발 이유, 과정, 목표

import Navbar from "@/components/Navbar.jsx";
import '@/components/site.css'
import '@/components/develop.css'

//npm run dev 로 코드 실행하기

export default function GuidlinesPage() {
  return (
    <>
      <Navbar></Navbar>
      <section className = "dev_section">
        <div className = "dev_site1">
            <div className = "textbox_site">
                <h1>Our Reasons for Development</h1>
                <p>이 프로젝트는 한국과학영재학교의 새로운 디지털 지도를 만들기 위해 시작했습니다. 한국과학영재학교는 여러개의 층이 맞지 않은 형태로 있어서 학생들이 초기부터 수업간 이동하느라 여러가지 어려움을 겪었습니다.</p>
            </div>
        </div>
        
        <div className = "dev_site2">
            <div className = "textbox_site">
                <h1>Our Goals</h1>
                <p>이 프로젝트의 최종 목적은 한국과학영재학교의 모든 건물, 교실을 3차윈 지도로 표현해 학생들의 길찾기를 돕는 것 입니다.</p>
            </div>
        </div>
        
        <div className = "dev_site3">
            <div className = "textbox_site">
                <h1>Changelogs</h1>
                <div className="Changelog_box"> 
                  <p id= "changelog-text">
                    2025.01.05 초기 구상 <br></br>
                    2025.02.17 본격적 개발 시작 <br></br>
                  </p>
                </div>
           </div>
        </div>
      </section>
      <footer>

      </footer>
    </>
  );
}