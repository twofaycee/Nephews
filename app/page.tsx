"use client";

import { useState } from "react";

const realPhotos = {
  hero: "https://images.openai.com/static-rsc-1/_ISyJ_ahR53DqfWrWVwIcK8zOV5h8SHP0S8GhgQ6W0j1F2Y6EL9R0qlkdzOZtUVhePbBEPTPAHNG8F5BRn0fAl65BcLIXwM_X0SyIc2QATQlXEzFrSJ6VDi8btT0QPRgrgg3wgf3UXikvfpfXZBwwK-LJ6YH9Ubhej0aBDd1ohg",
  interior: "https://images.openai.com/static-rsc-1/Hq5QZ6hEk6TSNoXieM6x2SIqKQwOtAJqUvGzqe60k-ucvYdE3OdZ5up1bB-rczhQ4CnnB_QZOJIJmxpPSN74_heFEcE3Q9I1eppDGgWa_5tFdjLaCLLQ77sAJ0UHzmVgTgDa0AiXkktfztBgBIUxwz3xrAkl43SjoDy2C5B51bY",
  food: "https://images.openai.com/static-rsc-1/Ae-5Zd6fLZcnpix-MLHeaw-RcQhbsAW2mwWgM0mE8T6zCL9Z3F4cqNOgZI0hF7_I-jvNb3JJWgLhaEqjcILrxW4ZzImjNz61wIetWD9PZOXU_K2QrzHqeYZKxu0yV6aQeRb6oKwNvmaecDwI7Xz-My5ol3QinPg83rV8EwNDVRE",
};

const menu = [
  ["Nephew’s Pork Rib Plate", "Ribs served with two sides and bread.", "BBQ FAVORITE"],
  ["Pork Rib Tip Plate", "Rib tips served with two sides and bread.", "HOUSE FAVORITE"],
  ["Rib Tips & Chicken Combo", "A rib tips and chicken combo for a serious appetite.", "COMBO"],
  ["Grilled Chicken Plate", "Grilled chicken served with two sides and bread.", "CLASSIC"],
  ["Chicken and Dressing", "Scratch-made cornbread, chicken and homemade giblet gravy.", "COMFORT FOOD"],
  ["Whiting Fry Basket", "Fried whiting served with fries and bread.", "FRIED FAVORITE"],
  ["Catfish Fry Basket", "Fried catfish served with fries and bread.", "SEAFOOD"],
  ["Pork Chop Fry Basket", "Fried pork chop served with fries and bread.", "FRIED FAVORITE"],
  ["Slaw Dog", "Detroit-style beef hot link with baked beans and coleslaw.", "BAR GRILL"],
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#home">
          NEPHEWS<span>BAR GRILL</span>
        </a>
        <button className="menuBtn" onClick={() => setOpen(!open)} aria-label="Open navigation">
          MENU
        </button>
        <nav className={open ? "open" : ""}>
          {["home", "about", "menu", "events", "visit"].map((x) => (
            <a key={x} href={"#" + x} onClick={() => setOpen(false)}>{x}</a>
          ))}
          <a className="navCta" href="#reserve">Reserve</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="heroPhoto" aria-hidden="true" />
        <div className="heroShade" aria-hidden="true" />
        <div className="heroContent">
          <div className="livePill"><span /> CHATTANOOGA • TENNESSEE</div>
          <h1>GOOD FOOD.<br /><em>GOOD ENERGY.</em><br />GOOD TIMES.</h1>
          <p className="lead">
            Pull up, grab a plate, catch the game and stay awhile. Nephews is a Chattanooga neighborhood bar & grill serving Southern comfort food, burgers, seafood and late-night favorites.
          </p>
          <div className="actions">
            <a className="button" href="#menu">See the Food</a>
            <a className="button ghost" href="tel:+14238022753">Call (423) 802-2753</a>
          </div>
          <div className="heroMeta">
            <span>4380 DORRIS ST</span>
            <i>✦</i>
            <span>FOOD • DRINKS • SPORTS</span>
          </div>
        </div>
        <div className="heroStamp">NEPHEWS<br /><strong>BAR + GRILL</strong><span>CHATTANOOGA, TN</span></div>
      </section>

      <div className="ticker">
        <div className="tickerTrack">
          <span>FOOD</span><i>✦</i><span>DRINKS</span><i>✦</i><span>SPORTS</span><i>✦</i>
          <span>SOUTHERN FLAVOR</span><i>✦</i><span>GOOD ENERGY</span><i>✦</i><span>GOOD TIMES</span><i>✦</i>
          <span>FOOD</span><i>✦</i><span>DRINKS</span><i>✦</i><span>SPORTS</span>
        </div>
      </div>

      <section id="about" className="section introSection">
        <div className="sectionKicker">THE NEPHEWS EXPERIENCE</div>
        <div className="introGrid">
          <div>
            <h2>COME HUNGRY.<br /><em>STAY FOR THE VIBE.</em></h2>
          </div>
          <div className="copy">
            <p>Nephews Bar Grill brings together Southern comfort food, a neighborhood bar atmosphere and the kind of energy that makes people want to stay another round.</p>
            <p>Online listings highlight ribs, rib tips, grilled chicken, catfish, whiting, burgers, hot links and classic sides, with food and drinks built for a casual night out.</p>
            <div className="miniStats">
              <div><strong>FOOD</strong><span>Comfort classics</span></div>
              <div><strong>VIBE</strong><span>Casual + social</span></div>
              <div><strong>SPORTS</strong><span>Game-day energy</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="foodShowcase" aria-label="Real Nephews photos">
        <div className="showcaseLarge" style={{ backgroundImage: `url(${realPhotos.hero})` }}>
          <div className="photoOverlay"><span>01</span><strong>RIBS &amp; RIB TIPS</strong></div>
        </div>
        <div className="showcaseStack">
          <div className="showcaseSmall" style={{ backgroundImage: `url(${realPhotos.food})` }}>
            <div className="photoOverlay"><span>02</span><strong>BURGERS</strong></div>
          </div>
          <div className="showcaseSmall" style={{ backgroundImage: `url(${realPhotos.interior})` }}>
            <div className="photoOverlay"><span>03</span><strong>FRIED FAVORITES</strong></div>
          </div>
        </div>
      </section>

      <section id="menu" className="section menuSection">
        <div className="sectionHead">
          <div>
            <div className="sectionKicker">WHAT'S COOKING</div>
            <h2>THE FOOD.</h2>
          </div>
          <div className="menuIntro">
            <p>Real menu items pulled from Nephews' public online ordering menu. No stock food photos are attached to individual dishes unless the exact dish photo can be verified.</p>
            <a href="https://www.ubereats.com/store/nephews-bar-and-grill/oAAZtOxUT3-LpzLo5NqMTw" target="_blank" rel="noreferrer">Order online ↗</a>
          </div>
        </div>

        <div className="menuGrid">
          {menu.map(([name, desc, tag], i) => (
            <article className="menuCard" key={name}>
              <div className="menuNumber">{String(i + 1).padStart(2, "0")}</div>
              <div className="menuBody">
                <div className="tag">{tag}</div>
                <h3>{name}</h3>
                <p>{desc}</p>
                <a href="https://www.ubereats.com/store/nephews-bar-and-grill/oAAZtOxUT3-LpzLo5NqMTw" target="_blank" rel="noreferrer">View ordering menu <span>↗</span></a>
              </div>
            </article>
          ))}
        </div>
        <p className="menuDisclaimer">Online menus and prices can change. Call Nephews for today's full menu and availability.</p>
      </section>

      <section id="events" className="eventsSection">
        <div className="eventsPhoto" aria-hidden="true" />
        <div className="eventsShade" aria-hidden="true" />
        <div className="eventsContent">
          <div className="sectionKicker">GAME DAY • NIGHT OUT • YOUR SPOT</div>
          <h2>WATCH IT.<br /><em>LIVE IT.</em></h2>
          <p>Good food hits different when the game is on. The business is listed as a sports-friendly bar with food, drinks and a casual group atmosphere.</p>
          <div className="actions">
            <a className="button" href="tel:+14238022753">Call the Bar</a>
            <a className="button ghost" href="https://www.facebook.com/nephewsbarandgrill/" target="_blank" rel="noreferrer">Facebook ↗</a>
          </div>
        </div>
        <div className="eventsBadge">SPORTS<br /><strong>ON</strong></div>
      </section>

      <section className="vibeSection">
        <div className="vibeCopy">
          <div className="sectionKicker">REAL NEPHEWS PHOTOS</div>
          <h2>GOOD PEOPLE.<br /><em>GOOD PLATES.</em></h2>
          <p>These photos come from the Nephews Bar Grill business listing. Dish names stay separate from photography so the site never presents a stock image as a specific menu item.</p>
        </div>
        <div className="vibeGallery">
          <div className="vibeImage tall" style={{ backgroundImage: `url(${realPhotos.food})` }} />
          <div className="vibeImage" style={{ backgroundImage: `url(${realPhotos.interior})` }} />
          <div className="vibeImage" style={{ backgroundImage: `url(${realPhotos.hero})` }} />
        </div>
      </section>

      <section id="reserve" className="section reservation">
        <div>
          <div className="sectionKicker">SAVE YOUR SPOT</div>
          <h2>MAKE A<br /><em>RESERVATION.</em></h2>
          <p className="muted">Send a request below. Until an online booking system is connected, calling is the fastest way to confirm a table.</p>
          <a className="phone" href="tel:+14238022753">(423) 802-2753</a>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <label>Name<input required placeholder="Your name" /></label>
          <label>Phone<input required type="tel" placeholder="(423) 555-0123" /></label>
          <div className="row">
            <label>Date<input required type="date" /></label>
            <label>Guests<select defaultValue="2"><option>2</option><option>3</option><option>4</option><option>5</option><option>6+</option></select></label>
          </div>
          <label>Notes<textarea placeholder="Anything we should know?" /></label>
          <button className="button" type="submit">{sent ? "REQUEST READY" : "Request a Table"}</button>
          {sent && <p className="success">Your request is filled out. Call Nephews at (423) 802-2753 to confirm.</p>}
        </form>
      </section>

      <section id="visit" className="visit">
        <div className="visitMain">
          <div className="sectionKicker">COME THROUGH</div>
          <h2>FIND<br /><em>NEPHEWS.</em></h2>
          <p className="address">4380 Dorris St<br />Chattanooga, TN 37410</p>
          <div className="actions">
            <a className="button" href="https://www.google.com/maps/search/?api=1&query=4380+Dorris+St+Chattanooga+TN+37410" target="_blank" rel="noreferrer">Get Directions</a>
            <a className="button ghost" href="tel:+14238022753">Call Us</a>
          </div>
        </div>
        <div className="visitCard">
          <div className="sectionKicker">PLAN AHEAD</div>
          <p>Hours can change. Call ahead for today's opening time, kitchen hours and reservations.</p>
          <a href="https://www.facebook.com/nephewsbarandgrill/" target="_blank" rel="noreferrer">Follow Nephews on Facebook ↗</a>
          <div className="visitMark">NEPHEWS<span>4380 DORRIS ST • CHATTANOOGA, TN</span></div>
        </div>
      </section>

      <footer>
        <div className="brand">NEPHEWS<span>BAR GRILL</span></div>
        <p>4380 Dorris St • Chattanooga, TN 37410</p>
        <p>© 2026 Nephews Bar Grill</p>
      </footer>
    </main>
  );
}
