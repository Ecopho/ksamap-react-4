
//Navbar.jsx

import '@/components/NavbarStyle.css';
import Image from "next/image";
import Link from "next/link";


export default function Navbar(){  //function name start with capital
    return(
        <nav id="Navbar">
            <ul>
                
                <li><Link className = 'NavbarA' id = "ksamapNavImage" href='../home' >
                        <Image
                          src="/ksamap.png"
                          alt="ksamap logo"
                          width={170}
                          height={40}
                        />
                    </Link></li>
                <li><Link className = 'NavbarA' href='../guidlines'>유의사항</Link></li>
                <li><Link className = 'NavbarA' href='../main'>지도</Link></li>
                <li><Link className = 'NavbarA' href='../development'>개발</Link></li>
                <li><Link className = 'NavbarA' href='../suggest'> 기능 제안 </Link></li>
                <li><Link className = 'NavbarA' href='../questions/page'>문의</Link></li>

            </ul>
        </nav>
    );
}