import Image from "next/image";
import Header from "../../components/header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="parentContainer ">
        {/* Blog1 */}

        <div className="childContainer shadow-pop-tr">
          <img src="/blog1.jpeg" className="imageContainer"></img>

          <h1 className="title">The Art of Mindful Living</h1>
          <p className="description">
            Discover the transformative power of mindfulness in your everyday
            life. This blog offers practical techniques and insights to help you......
          </p>
          <Link href="/blog1">
            <button className="readmore">Read More</button>
          </Link>
        </div>
        {/* Blog2 */}
        <div className="childContainer shadow-pop-tr">
          <div className="imageContainer">
            <img src="/blog2.jpg" alt="Daily Walk" className="imageContainer" />
          </div>

          <h1 className="title">The Joy of Daily Walks</h1>
          <p className="description">
            Embracing a daily walk can transform your physical and mental
            health. This blog explores the myriad benefits of walking.....
          </p>
          <Link href="/blog2">
            <button className="readmore">Read More</button>
          </Link>
        </div>
        {/* Blog3 */}
        <div className="childContainer shadow-pop-tr">
          <div className="imageContainer">
            <img src="/blog3.jpg" alt="Coutesy" className="imageContainer" />
          </div>

          <h1 className="title">The Power of Courtesy</h1>
          <p className="description">
            Courtesy is a powerful tool that can enhance our interactions and
            foster positive relationships.....
          </p>
          <Link href="/blog3">
            <button className="readmore">Read More</button>
          </Link>
        </div>
        {/* Blog4*/}
        <div className="childContainer shadow-pop-tr">
          <div className="imageContainer">
            <img src="/blog4.jpg" alt="Friendship" className="imageContainer" />
          </div>

          <h1 className="title">The Essence of Friendship</h1>
          <p className="description">
            Friendship is one of life’s most valuable treasures, offering
            support, joy, and companionship. This blog explores the importance
            of friendship....
          </p>
          <Link href="/blog4">
            <button className="readmore">Read More</button>
          </Link>
        </div>
        {/* Blog5 */}
        <div className="childContainer shadow-pop-tr">
          <div className="imageContainer">
            <img src="/blog5.jpeg" alt="Fruits" className="imageContainer" />
          </div>

          <h1 className="title">Nature’s Sweet Health Boosters</h1>
          <p className="description">
            Fruits are not just delicious; they are packed with essential
            nutrients that promote health and wellness....
          </p>
          <Link href="/blog5">
            <button className="readmore">Read More</button>
          </Link>
        </div>
        {/* Blog6 */}
        <div className="childContainer shadow-pop-tr">
          <div className="imageContainer">
            <img
              src="/blog6.jpeg"
              alt="Effect of mobile on eyesight"
              className="imageContainer"
            />
          </div>

          <h1 className="title">The Impact of Mobile Devices on Eyesight:</h1>
          <p className="description">
            Excessive mobile device usage can lead to a range of eyesight
            issues, including digital eye strain....
          </p>
          <Link href="/blog6">
            <button className="readmore">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
