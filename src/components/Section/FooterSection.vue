<template>
  <!-- 9️⃣ Footer -->
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <h3>LuxeMed<span style="color: var(--color-accent)">.</span></h3>
        <p>
          Redefining healthcare through innovation, compassion, and excellence.
        </p>
        <div style="margin-top: 30px; display: flex; gap: 20px">
          <a href="#"><i class="fab fa-facebook fa-lg"></i></a>
          <a href="#"><i class="fab fa-twitter fa-lg"></i></a>
          <a href="#"><i class="fab fa-instagram fa-lg"></i></a>
          <a href="#"><i class="fab fa-linkedin fa-lg"></i></a>
        </div>
      </div>
      <div class="footer-links">
        <h4>Explore</h4>
        <ul>
          <li><a href="#about">Our Story</a></li>
          <li><a href="#services">Specialties</a></li>
          <li><a href="#doctors">Medical Team</a></li>
          <li><a href="#">Research</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>Patient Info</h4>
        <ul>
          <li><a href="#">Patient Portal</a></li>
          <li><a href="#">Tele-Health</a></li>
          <li><a href="#">Insurance</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>Contact</h4>
        <ul>
          <li>
            <i
              class="fas fa-map-marker-alt"
              style="width: 20px; color: var(--color-secondary)"
            ></i>
            123 Future Blvd, NY
          </li>
          <li>
            <i
              class="fas fa-phone"
              style="width: 20px; color: var(--color-secondary)"
            ></i>
            +1 (555) 123-4567
          </li>
          <li>
            <i
              class="fas fa-envelope"
              style="width: 20px; color: var(--color-secondary)"
            ></i>
            hello@luxemed.com
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2026 LuxeMed Healthcare. Designed for the Future.
    </div>
  </footer>
</template>
<style scoped>
/* Footer (Preserved & Tweaked) */
.footer {
  background-color: var(--color-primary);
  color: white;
  padding: 100px var(--container-padding) 40px;
  margin-top: 0;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 50px;
  margin-bottom: 80px;
}

.footer-brand h3 {
  font-size: 2.2rem;
  margin-bottom: 25px;
}

.footer-links h4 {
  margin-bottom: 30px;
  color: var(--color-secondary);
  font-size: 1.1rem;
}

.footer-links ul li {
  margin-bottom: 18px;
}

.footer-links a {
  opacity: 0.7;
}

.footer-links a:hover {
  opacity: 1;
  color: var(--color-accent);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 40px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
}
</style>
