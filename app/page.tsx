"use client";
import { useState } from "react";

const menu = [
  ["Ribs & Rib Tips","Slow-cooked, seasoned and finished with house sauce.","$"],
  ["Grilled Chicken","Seasoned grilled chicken served with your choice of sides.","$"],
  ["Catfish","Southern-style catfish, crisp and seasoned.","$"],
  ["Whiting","Golden-fried whiting with classic Southern sides.","$"],
  ["Pork Chops","Seasoned pork chops cooked to order.","$"],
  ["Nephews Burger","A loaded classic burger built for a serious appetite.","$"],
  ["Hot Links","Savory hot links with a kick.","$"],
  ["Southern Sides","Choose from rotating classics and comfort-food favorites.","$"]
];

export default function Home(){
 const [open,setOpen]=useState(false);
 const [sent,setSent]=useState(false);
 return <main>
  <header className="nav"><a className="brand" href="#home">NEPHEWS<span>BAR GRILL</span></a><button className="menuBtn" onClick={()=>setOpen(!open)}>MENU</button><nav className={open?"open":""}>{["home","about","menu","events","visit"].map(x=><a key={x} href={"#"+x} onClick={()=>setOpen(false)}>{x}</a>)}<a className="navCta" href="#reserve">Reserve</a></nav></header>

  <section id="home" className="hero"><div className="heroOverlay"/><div className="heroContent"><p className="eyebrow">CHATTANOOGA • TENNESSEE</p><h1>GOOD FOOD.<br/><em>GOOD ENERGY.</em><br/>GOOD TIMES.</h1><p className="lead">Pull up, grab a plate, catch the game and stay awhile. Nephews is your neighborhood spot for food, drinks and a night worth remembering.</p><div className="actions"><a className="button" href="#menu">View Menu</a><a className="button ghost" href="tel:+14238022753">Call (423) 802-2753</a></div></div><div className="heroBadge">EST.<br/><strong>CHATTANOOGA</strong></div></section>

  <div className="ticker"><span>FOOD</span><i>✦</i><span>DRINKS</span><i>✦</i><span>SPORTS</span><i>✦</i><span>GOOD ENERGY</span><i>✦</i><span>GOOD TIMES</span></div>

  <section id="about" className="section split"><div><p className="eyebrow">THE NEPHEWS EXPERIENCE</p><h2>COME HUNGRY.<br/><em>LEAVE HAPPY.</em></h2></div><div className="copy"><p>Nephews Bar Grill is a Chattanooga neighborhood spot built around the things that bring people together: a good plate, a cold drink, the big game and a room full of energy.</p><p>Whether you're stopping in for dinner, meeting friends or making a night of it, there's a seat waiting.</p><a href="#reserve" className="textLink">Make a reservation →</a></div></section>

  <section id="menu" className="section menuSection"><div className="sectionHead"><div><p className="eyebrow">WHAT'S COOKING</p><h2>THE MENU</h2></div><span className="note">Sample selection — ask about today's full menu.</span></div><div className="menuGrid">{menu.map(([name,desc,price])=><article className="menuCard" key={name}><div className="dishNo">0{menu.indexOf([name,desc,price])+1}</div><div><h3>{name}</h3><p>{desc}</p></div><strong>{price}</strong></article>)}</div></section>

  <section id="events" className="feature"><div className="featureCard"><p className="eyebrow">GAME DAY. NIGHT OUT. YOUR SPOT.</p><h2>WATCH IT.<br/><em>LIVE IT.</em></h2><p>Catch sports, food and drinks in a relaxed bar-and-grill atmosphere. For current game-day happenings and specials, call the bar directly.</p><a className="button" href="tel:+14238022753">Call the Bar</a></div></section>

  <section id="reserve" className="section reservation"><div><p className="eyebrow">SAVE YOUR SPOT</p><h2>MAKE A<br/><em>RESERVATION.</em></h2><p className="muted">Send a request below. This form is ready for your booking workflow; until a reservation system is connected, calling is the fastest way to confirm a table.</p><a className="phone" href="tel:+14238022753">(423) 802-2753</a></div><form onSubmit={e=>{e.preventDefault();setSent(true)}}><label>Name<input required placeholder="Your name"/></label><label>Phone<input required type="tel" placeholder="(423) 555-0123"/></label><div className="row"><label>Date<input required type="date"/></label><label>Guests<select defaultValue="2"><option>2</option><option>3</option><option>4</option><option>5</option><option>6+</option></select></label></div><label>Notes<textarea placeholder="Anything we should know?"/></label><button className="button" type="submit">{sent?"REQUEST READY":"Request a Table"}</button>{sent&&<p className="success">Your request is filled out. Call Nephews at (423) 802-2753 to confirm until online booking is connected.</p>}</form></section>

  <section id="visit" className="visit"><div><p className="eyebrow">COME THROUGH</p><h2>FIND<br/><em>NEPHEWS.</em></h2><p>4380 Dorris St<br/>Chattanooga, TN 37410</p><div className="actions"><a className="button" href="https://www.google.com/maps/search/?api=1&query=4380+Dorris+St+Chattanooga+TN+37410" target="_blank">Get Directions</a><a className="button ghost" href="tel:+14238022753">Call Us</a></div></div><div className="hours"><p className="eyebrow">HOURS</p><p>Hours can change — call ahead for today's opening time and kitchen hours.</p><p className="big">CHATTANOOGA<br/>TN</p></div></section>

  <footer><div className="brand">NEPHEWS<span>BAR GRILL</span></div><p>4380 Dorris St • Chattanooga, TN 37410</p><p>© 2026 Nephews Bar Grill</p></footer>
 </main>
}