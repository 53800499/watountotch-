/** @format */

import React from "react";
import { Image } from "../../../../common/components/Image";
import {
  BLOG_AUTHOR_AVATAR_AMANDA,
  BLOG_AUTHOR_AVATAR_DAVID,
  BLOG_AUTHOR_AVATAR_JAMES,
  BLOG_POST_IMAGE_01,
  TOURIST_SITE_DETAIL_FACTS_BACKGROUND
} from "../../../../assets/images";

export const TouristSiteDetailContainer = () => {
  return (
    <div className="container">
      {/* <!-- Our Story Section --> */}
      <section className="our-story" data-aos="fade-up">
        <div className="story-content">
          <div className="story-text">
            <h3 className="title-above left">Our Story</h3>
            <h2 className="heading-lg">Born From a Love of Discovery</h2>
            <p className="description">
              Founded in 2015 by a group of passionate travelers, MultiTravel
              began as a simple idea: to make authentic travel experiences
              accessible to everyone. What started as weekend adventures among
              friends has grown into a trusted travel companion for thousands of
              explorers worldwide.
            </p>

            <p className="description">
              Our journey began when our founders realized that the most
              meaningful travel experiences often happen off the beaten path. We
              dedicated ourselves to discovering hidden gems, building
              relationships with local communities, and creating tours that go
              beyond typical tourist attractions.
            </p>

            <div className="story-stats">
              <div className="stat-item">
                <span className="stat-number" data-counter="">
                  12k+
                </span>
                <span className="stat-label">Happy Travelers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-counter="">
                  45+
                </span>
                <span className="stat-label">Countries Explored</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-counter="">
                  8+
                </span>
                <span className="stat-label">Years of Experience</span>
              </div>
            </div>
          </div>

          <div className="story-image">
            <Image src={BLOG_POST_IMAGE_01} alt="Our Story" />
            <div className="image-badge">
              <span>Since 2015</span>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Our Mission Section --> */}
      <section className="our-mission" data-aos="fade-up">
        <div className="text-center mb-6">
          <h3 className="title-above">Our Mission</h3>
          <h2 className="heading-lg">Why We Do What We Do</h2>
        </div>

        <div className="mission-grid">
          <div className="mission-item" data-aos="fade-up" data-aos-delay="100">
            <div className="mission-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            </div>
            <h4 className="mission-title">Authentic Experiences</h4>
            <p className="mission-description">
              We curate genuine cultural experiences that connect you with local
              traditions, cuisine, and communities.
            </p>
          </div>

          <div className="mission-item" data-aos="fade-up" data-aos-delay="200">
            <div className="mission-icon">
              <svg viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h4 className="mission-title">Sustainable Travel</h4>
            <p className="mission-description">
              We're committed to responsible tourism that benefits local
              communities and preserves natural environments.
            </p>
          </div>

          <div className="mission-item" data-aos="fade-up" data-aos-delay="300">
            <div className="mission-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <h4 className="mission-title">Personal Service</h4>
            <p className="mission-description">
              Every traveler is unique. We tailor each journey to match your
              interests, budget, and travel style.
            </p>
          </div>

          <div className="mission-item" data-aos="fade-up" data-aos-delay="400">
            <div className="mission-icon">
              <svg viewBox="0 0 24 24">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h4 className="mission-title">Adventure & Safety</h4>
            <p className="mission-description">
              We balance thrilling adventures with comprehensive safety measures
              and expert local guidance.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Team Section --> */}
      <section className="our-team" data-aos="fade-up">
        <div className="text-center mb-6">
          <h3 className="title-above">Our Team</h3>
          <h2 className="heading-lg">
            Meet the Adventurers Behind MultiTravel
          </h2>
          <p className="team-intro">
            Our diverse team of travel experts, local guides, and adventure
            enthusiasts work together to create your perfect journey.
          </p>
        </div>

        <div className="team-grid">
          <div className="team-member" data-aos="fade-up" data-aos-delay="100">
            <div className="member-photo">
              <Image src={BLOG_AUTHOR_AVATAR_JAMES} alt="James Wilson" />
              <div className="member-social">
                <a href="javascript:void(0)" className="social-link">
                  <svg viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a href="javascript:void(0)" className="social-link">
                  <svg viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div className="member-info">
              <h4 className="member-name">James Wilson</h4>
              <p className="member-position">Founder & CEO</p>
              <p className="member-bio">
                With over 15 years of travel experience across 60+ countries,
                James founded MultiTravel to share his passion for authentic
                adventures.
              </p>
            </div>
          </div>

          <div className="team-member" data-aos="fade-up" data-aos-delay="200">
            <div className="member-photo">
              <Image src={BLOG_AUTHOR_AVATAR_AMANDA} alt="Amanda Wilson" />
              <div className="member-social">
                <a href="javascript:void(0)" className="social-link">
                  <svg viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a href="javascript:void(0)" className="social-link">
                  <svg viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div className="member-info">
              <h4 className="member-name">Amanda Wilson</h4>
              <p className="member-position">Head of Operations</p>
              <p className="member-bio">
                Amanda ensures every detail of your journey is perfectly
                planned. Her expertise in logistics makes impossible itineraries
                possible.
              </p>
            </div>
          </div>

          <div className="team-member" data-aos="fade-up" data-aos-delay="300">
            <div className="member-photo">
              <Image src={BLOG_AUTHOR_AVATAR_DAVID} alt="David Thompson" />
              <div className="member-social">
                <a href="javascript:void(0)" className="social-link">
                  <svg viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a href="javascript:void(0)" className="social-link">
                  <svg viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div className="member-info">
              <h4 className="member-name">David Thompson</h4>
              <p className="member-position">Adventure Specialist</p>
              <p className="member-bio">
                David's background in outdoor education and mountain guiding
                brings safety and excitement to our adventure tours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Values Section --> */}
      <section className="our-values" data-aos="fade-up">
        <div className="values-content">
          <div className="values-text">
            <h3 className="title-above left">Our Values</h3>
            <h2 className="heading-lg">What Guides Us</h2>

            <div className="values-list">
              <div className="value-item">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div className="value-content">
                  <h4>Authenticity</h4>
                  <p>
                    We prioritize genuine experiences over tourist traps,
                    connecting you with real cultures and communities.
                  </p>
                </div>
              </div>

              <div className="value-item">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div className="value-content">
                  <h4>Sustainability</h4>
                  <p>
                    Every tour is designed to minimize environmental impact
                    while maximizing benefits to local communities.
                  </p>
                </div>
              </div>

              <div className="value-item">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div className="value-content">
                  <h4>Excellence</h4>
                  <p>
                    We're committed to delivering exceptional service and
                    unforgettable experiences on every journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="values-image">
            <Image
              src={TOURIST_SITE_DETAIL_FACTS_BACKGROUND}
              alt="Our Values"
            />
          </div>
        </div>
      </section>

      {/* <!-- Call to Action --> */}
      <section className="about-cta" data-aos="fade-up">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Adventure?</h2>
          <p className="cta-description">
            Join thousands of travelers who have discovered the world with us.
            Let's create your next unforgettable journey together.
          </p>
          <div className="cta-buttons">
            <a href="/tours" className="btn btn-primary">
              Explore Tours
            </a>
            <a href="/contact" className="btn btn-outline">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
