<template>
  <div class="contact-shell">
    <!-- Content Side -->
    <div class="contact-content">
      <span class="contact-tag">Get in Touch</span>
      <h1
        style="
          font-size: 3.5rem;
          color: var(--color-primary);
          margin-bottom: 20px;
          line-height: 1.1;
        "
      >
        Let's Start Your <br />
        Healing Journey.
      </h1>
      <p
        style="
          color: #666;
          font-size: 1.1rem;
          line-height: 1.6;
          max-width: 500px;
        "
      >
        Have questions about our procedures or need to schedule an urgent
        consultation? We are here 24/7.
      </p>

      <div class="info-grid">
        <div class="info-item">
          <i
            class="fas fa-map-marker-alt"
            style="
              color: var(--color-secondary);
              font-size: 1.5rem;
              margin-bottom: 15px;
            "
          ></i>
          <h4>Main Campus</h4>
          <p>123 Wellness Blvd, Zurich<br />Switzerland, CH-8001</p>
        </div>
        <div class="info-item">
          <i
            class="fas fa-envelope"
            style="
              color: var(--color-secondary);
              font-size: 1.5rem;
              margin-bottom: 15px;
            "
          ></i>
          <h4>Email Us</h4>
          <p>care@luxemed.com<br />support@luxemed.com</p>
        </div>
        <div class="info-item">
          <i
            class="fas fa-phone-alt"
            style="
              color: var(--color-secondary);
              font-size: 1.5rem;
              margin-bottom: 15px;
            "
          ></i>
          <h4>Call 24/7</h4>
          <p>+41 44 123 4567<br />+1 (800) LUXE-MED</p>
        </div>
      </div>

      <form class="contact-form">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px">
          <div class="form-group">
            <label>First Name</label>
            <input type="text" placeholder="John" />
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Doe" />
          </div>
        </div>
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="john@example.com" />
        </div>
        <div class="form-group">
          <label>Message</label>
          <textarea rows="4" placeholder="How can we help?"></textarea>
        </div>
        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </div>

    <!-- Visual Side (Map) -->
    <div class="contact-visual">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10808.43572886475!2d8.5323568779435!3d47.37130282436214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b1d3d623257%3A0xc3fa86e4533088b9!2sZurich%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1707921600000!5m2!1sen!2sus"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div class="location-card">
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <div>
            <h4
              style="margin: 0; font-size: 1.1rem; color: var(--color-primary)"
            >
              LuxeMed Zurich
            </h4>
            <p style="margin: 5px 0 0; font-size: 0.9rem; color: #666">
              Open 24 Hours
            </p>
          </div>
          <button
            style="
              background: var(--color-secondary);
              color: white;
              border: none;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              cursor: pointer;
            "
          >
            <i class="fas fa-location-arrow"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.contact-shell {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}

/* Left Side: Info & Form */
.contact-content {
  padding: 140px 8% 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact-tag {
  display: inline-block;
  background: rgba(212, 224, 155, 0.2);
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 25px;
  align-self: flex-start;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 40px 0;
}
.info-item h4 {
  font-size: 1.1rem;
  color: var(--color-primary);
  margin-bottom: 5px;
}
.info-item p {
  color: #666;
  font-size: 0.95rem;
}

/* Modern Form */
.contact-form {
  background: white;
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: 20px;
}
.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--color-primary);
  font-size: 0.9rem;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #eee;
  border-radius: 12px;
  font-family: inherit;
  transition: 0.3s;
  background: #fafbf8;
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-secondary);
  background: white;
  box-shadow: 0 0 0 4px rgba(212, 224, 155, 0.2);
}

.submit-btn {
  width: 100%;
  padding: 14px;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}
.submit-btn:hover {
  background: var(--color-secondary);
  transform: translateY(-2px);
}

/* Right Side: Visual/Map */
.contact-visual {
  background: #e6eadd;
  position: relative;
  overflow: hidden;
}
.contact-visual iframe {
  width: 100%;
  height: 100%;
  filter: grayscale(100%) opacity(0.8);
  transition: 0.5s;
  border: none;
}
.contact-visual:hover iframe {
  filter: grayscale(0%) opacity(1);
}

.location-card {
  position: absolute;
  bottom: 40px;
  left: 40px;
  right: 40px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  transform: translateY(20px);
  opacity: 0;
  transition: 0.5s;
}
.contact-visual:hover .location-card {
  transform: translateY(0);
  opacity: 1;
}

@media (max-width: 900px) {
  .contact-shell {
    grid-template-columns: 1fr;
  }
  .contact-visual {
    height: 400px;
    order: -1;
  }
  .contact-content {
    padding: 60px 6%;
  }
  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
