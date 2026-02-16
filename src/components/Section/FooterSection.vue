<template>
  <footer class="footer bg-primary">
    <div class="container py-5">
      <div class="medium-2 large-5 gap-2">
        <!-- Brand Column -->
        <div class="footer-col large-span-2">
          <BaseTitle>LuxeMed<span class="highlight">.</span></BaseTitle>
          <BaseParagraph>
            Redefining healthcare through innovation, compassion, and
            excellence.
          </BaseParagraph>
          <div class="flex gap-1 mt-1">
            <a href="#"><i class="fab fa-facebook fa-lg"></i></a>
            <a href="#"><i class="fab fa-twitter fa-lg"></i></a>
            <a href="#"><i class="fab fa-instagram fa-lg"></i></a>
            <a href="#"><i class="fab fa-linkedin fa-lg"></i></a>
          </div>
        </div>

        <!-- Explore Column -->
        <div class="footer-col">
          <SubTitle>Explore</SubTitle>
          <ul>
            <ListItem><a href="#about">Our Story</a></ListItem>
            <ListItem><a href="#services">Specialties</a></ListItem>
            <ListItem><a href="#doctors">Medical Team</a></ListItem>
            <ListItem><a href="#">Research</a></ListItem>
          </ul>
        </div>

        <!-- Patient Info Column -->
        <div class="footer-col">
          <SubTitle>Patient Info</SubTitle>
          <ul>
            <ListItem><a href="#">Patient Portal</a></ListItem>
            <ListItem><a href="#">Tele-Health</a></ListItem>
            <ListItem><a href="#">Insurance</a></ListItem>
          </ul>
        </div>

        <!-- Contact Column -->
        <div class="footer-col">
          <SubTitle>Contact</SubTitle>
          <ul>
            <ListItem>
              <i class="fas fa-map-marker-alt"></i> 123 Future Blvd, NY
            </ListItem>
            <ListItem>
              <i class="fas fa-phone"></i> +1 (555) 123-4567
            </ListItem>
            <ListItem>
              <i class="fas fa-envelope"></i> hello@luxemed.com
            </ListItem>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container text-center py-2">
        &copy; 2026 LuxeMed Healthcare. Designed and developed by
        <a href="https://webpoka.com/" target="_blank">WebPoka</a>.
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  color: var(--white-color);
}
.highlight {
  color: var(--accent-color);
}
.footer ul {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  opacity: 0.7;
}
.footer .footer-col .sub-title {
  margin-bottom: 1.5rem;
}
.footer .footer-col p {
  font-size: 1.1rem;
  opacity: 0.7;
}
.footer a {
  color: var(--white-color);
  transition: opacity 0.3s;
}
.footer a:hover {
  opacity: 1;
  color: var(--accent-color);
}

.footer-bottom {
  border-top: 1px solid var(--secondary-color);
  font-size: 0.9rem;
  opacity: 0.7;
}
.footer-bottom a {
  color: var(--accent-color);
  opacity: 1;
}
</style>
