import Navbar from "@/components/Navbar.jsx";
import '@/components/site.css'
import '@/components/main.css'

//    @ = src  IMPORTANT
//npm run dev 로 코드 실행하기

export default function HomePage() {
  return (
    <>
      <link rel='stylesheet'></link>
      <Navbar></Navbar>
      <section>
        <div className="buttons">
          <button id="map">지도</button>
          <button id="information">정보</button>
        </div>
        <div className = "site">
            <div className = "textbox_site">
                <p id="text">대충 설명</p>
            </div>
        </div>
      </section>
    </>
  );
}
