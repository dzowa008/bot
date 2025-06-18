import "./App.css";
import RectangleImg from "./assets/Rectangle.jpg";
import topImageUrl from "./assets/hoyo.jpg";

export default function App() {
  return (
    <div className="main-wrapper">
      {/* Header & Navigation */}
      <header className="header">
        <div className="logo-search">
          <div className="logo">BUILD<span>LINK</span></div>
          <nav className="nav">
            <a href="#" className="active">Home</a>
            <a href="#">Handyman</a>
            <a href="#">Companies</a>
            <a href="#">About Us</a>
          </nav>
          <div className="search-profile">
            <input type="text" placeholder="Search..." className="search-input" />
            <img src="https://via.placeholder.com/36" alt="Profile" className="profile-icon" />
          </div>
        </div>
        <div className="hero">
          <div className="hero-content">
            <h1 className="hoyo">Get <span className="highlight">Quality</span> Service from <span className="highlight">Verified</span> Experts!</h1>
            <p>Welcome to BuildLink! We turn your visions into reality with our skilled handyman services. From quick repairs to full renovations, our experienced team prioritizes quality and customer satisfaction. Let us handle the heavy lifting – contact us today for a free consultation!</p>
            <button className="primary-btn">Connect <span>&#8594;</span></button>
          </div>
          {/* <div className="hero-img">
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" alt="Construction tools" className="hero-img-placeholder" />
          </div> */}
        </div>
      </header>

      {/* Experience & Why Choose Us */}
      <section className="experience-why-exact">
        <div className="exp-left">
          <img
            src={topImageUrl}
            alt="Construction Worker"
            className="exp-top-img"
            style={{ width: 220, height: 140, borderRadius: '40px 40px 40px 40px', objectFit: 'cover', marginBottom: 24 }}
          />
          <div className="exp-years-row">
            <span className="exp-years-big">15+</span>
            <span className="exp-years-label">Year of Experience</span>
          </div>
          <img
            src={RectangleImg}
            alt="House"
            className="exp-main-img"
            style={{ width: 400, height: 340, borderRadius: 40, objectFit: 'cover', marginTop: 24 }}
          />
        </div>
        <div className="exp-right">
          <div className="exp-why-label">
            <span role="img" aria-label="star">✪</span> <b>Why Choose Us?</b>
          </div>
          <div className="exp-why-title">
            <b>"Your <span style={{ color: '#F4AA1B' }}>Trusted</span> Source for Skilled <span style={{ color: '#FCD34D' }}>Professionals</span>!"</b>
          </div>
          <div className="exp-why-desc">
            We aim to simplify the process of finding trustworthy professionals by providing a user-friendly marketplace that prioritizes quality and credibility. Our goal is to foster a community where skilled tradespeople can showcase their expertise and connect with clients who value their services.
          </div>
          <ul className="exp-why-list">
            <li><span role="img" aria-label="star">✪</span> Verified Professionals</li>
            <li><span role="img" aria-label="star">✪</span> User-Friendly Experience</li>
            <li><span role="img" aria-label="star">✪</span> Transparent Reviews</li>
            <li><span role="img" aria-label="star">✪</span> Geolocation Services</li>
          </ul>
          <div className="exp-rating-row">
            <div className="exp-rating-box">
              <div className="exp-rating-score">4.7</div>
              <div className="exp-rating-stars">★☆☆☆☆</div>
              <div className="exp-rating-label">15.5k genuine ratings</div>
            </div>
          </div>
          <button className="exp-learn-btn">Learn More <span style={{ fontWeight: 700 }}>↗</span></button>
        </div>
      </section>

      {/* Our Services */}
      <section className="services">
        <h2>Our Services</h2>
        <p className="services-desc">Buildlink Zimbabwe connects you with verified professionals for all your construction, plumbing, and electrical needs. Whether it's a quick repair or a major project, our platform helps you find, compare, and hire the right experts for quality and reliability.</p>
        <div className="service-cards-v2">
          <div className="service-card-v2">
            <div className="service-card-bg"></div>
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Handyman" className="service-card-img" />
            <div className="service-card-info">
              <div className="service-card-title-row">
                <span className="service-card-title">Carpenter</span>
                <span className="service-card-location">Tashley Park</span>
              </div>
              <div className="service-card-type-row">
                <span className="service-card-type">Handyman</span>
                <span className="service-card-verified"><span className="verified-icon">&#10003;</span> verified</span>
              </div>
            </div>
          </div>
          <div className="service-card-v2">
            <div className="service-card-bg"></div>
            <img src="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=400&q=80" alt="Mugo Plumbers" className="service-card-img" />
            <div className="service-card-info">
              <div className="service-card-title-row">
                <span className="service-card-title">Specialist</span>
                <span className="service-card-location">Mugo Plumbers</span>
              </div>
              <div className="service-card-type-row">
                <span className="service-card-type">Company</span>
                <span className="service-card-verified"><span className="verified-icon">&#10003;</span> verified</span>
              </div>
            </div>
          </div>
          <div className="service-card-v2">
            <div className="service-card-bg"></div>
            <img src="https://via.placeholder.com/220x220.png?text=AK+Construction" alt="AK Construction" className="service-card-img" />
            <div className="service-card-info">
              <div className="service-card-title-row">
                <span className="service-card-title">Contractors</span>
                <span className="service-card-location">AK Construction</span>
              </div>
              <div className="service-card-type-row">
                <span className="service-card-type">Company</span>
                <span className="service-card-verified"><span className="verified-icon">&#10003;</span> verified</span>
              </div>
            </div>
          </div>
        </div>
        <button className="secondary-btn">View all <span>&#8594;</span></button>
      </section>

      {/* Customer Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <p className="testimonials-desc">'Buildlink Zimbabwe has redefined our experience in finding trusted professionals. Homeowners and businesses alike appreciate the seamless connection to reliable experts, transforming projects into reality with confidence and ease.'</p>
        <button className="secondary-btn">View more <span>&#8594;</span></button>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Aimeck" className="testimonial-avatar" />
            <div className="testimonial-user">Aimeck</div>
            <div className="testimonial-text">"Buildlink helped me connect with a reliable plumber quickly. The process was smooth and the service was top-notch!"</div>
          </div>
          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Mary J." className="testimonial-avatar" />
            <div className="testimonial-user">Mary J.</div>
            <div className="testimonial-text">"I found a great contractor for my home renovation. Highly recommend Buildlink!"</div>
          </div>
          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Tafadzwa C." className="testimonial-avatar" />
            <div className="testimonial-user">Tafadzwa C.</div>
            <div className="testimonial-text">"The platform is easy to use and the professionals are truly verified. Will use again!"</div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-content">
          <div className="team-imgs">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Doe" className="team-img" />
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Mike Smith" className="team-img" />
            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Jane Williams" className="team-img" />
          </div>
          <div className="team-info">
            <p>At Buildlink Zimbabwe, our dedicated team is committed to connecting you with the best professionals in the industry. With diverse backgrounds in construction, technology, and <span className="highlight2">customer service</span>, we work tirelessly to ensure a seamless experience for our users. Each member brings expertise and passion, making it our mission to foster <span className="highlight2">trust</span> and <span className="highlight2">reliability</span> in every connection. Together, we're building a community that prioritizes quality and service.</p>
            <button className="secondary-btn">Learn more <span>&#8594;</span></button>
          </div>
        </div>
      </section>

      {/* Job Opportunity */}
      <section className="job-opportunity">
        <h2>You Have A Job For Us?</h2>
        <p>If you have a job opportunity in the construction industry, we want to hear from you! Use the form below to share the details of your project, and let us help you connect with the right professionals. Your submission can make a difference in finding the perfect candidates to get the job done!</p>
        <button className="primary-btn">Post Job <span>&#8594;</span></button>
        <div className="job-imgs">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=100&q=80" alt="Wiring" className="job-img" />
          <img src="https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=100&q=80" alt="Plumbing" className="job-img" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">BUILD<span>LINK</span></div>
          <div className="footer-links">
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li>Home</li>
                <li>Handyman</li>
                <li>Companies</li>
                <li>Specialists</li>
                <li>About Us</li>
              </ul>
            </div>
            <div>
              <h4>Handyman</h4>
              <ul>
                <li>Plumber</li>
                <li>Electrician</li>
                <li>Builder</li>
              </ul>
            </div>
            <div>
              <h4>Companies</h4>
              <ul>
                <li>Construction Companies</li>
                <li>Electrical Specialists</li>
                <li>Plumber Specialists</li>
                <li>Builder Specialists</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-contact">www.buildlink@gmail.com</div>
          <div className="footer-socials">
            <span>linkedin</span>
            <span>facebook</span>
            <span>instagram</span>
            <span>twitter</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
