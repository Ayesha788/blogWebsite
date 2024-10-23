import Link from "next/link"
export default function Header(){
    return(
        <div className="header">
            
            
            <img  id="titlePic" src="/title.png"></img>
            <h1 id="website-name">Word Craft Hub</h1>
            <ul id="navigation-bar">
                <li>HOME</li>
                <Link href="/join-us"><li>Contact Us</li></Link>
                <Link href="/about"><li>About Us</li></Link>
            </ul>
            
             
        </div>
    )
}