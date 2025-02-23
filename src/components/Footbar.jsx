
//Navbar.jsx

import '../components/FootbarStyle.css';
import Image from "next/image";
import Link from "next/link";

//여러분저희 콜레이 많이 봐주세요 -25-029 김지성
export default function Footbar(){  //function name start with capital
    return(
        <>
            <nav id="Navbar">
                <a href="#Navbar" className="footnote footnoteksamap"><Image
                                          src="/ksamap.png"
                                          alt="ksamap logo"
                                          width={170}
                                          height={40}
                /></a>
                <a className="footnote" href="https://www.google.com/">
                    Copyright (c) 2025 크사맵 제작자.
                </a>
            </nav>
        </>
    );
}


