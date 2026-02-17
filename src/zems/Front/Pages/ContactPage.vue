<script setup>
import SectionTitle from "../Components/Widget/SectionTitle.vue";
</script>

<template>
  <div class="contact-section">
    <div class="container">
      <div class="medium-2 gap-2">
        <div class="contact-info py-5">
          <SectionTitle
            subTitle="Get in Touch"
            title="Let's Start Your Healing Journey."
            class="mb-1"
          />
          <BaseParagraph>
            Have questions about our procedures or need to schedule an urgent
            consultation? We are here 24/7.
          </BaseParagraph>
          <div class="medium-2 gap-1 mt-2">
            <div class="info-item">
              <i class="fas fa-map-marker-alt"></i>
              <SubTitle>Main Campus</SubTitle>
              <BaseParagraph
                >123 Wellness Blvd, Zurich<br />Switzerland,
                CH-8001</BaseParagraph
              >
            </div>
            <div class="info-item">
              <i class="fas fa-envelope"></i>
              <SubTitle>Email Us</SubTitle>
              <BaseParagraph
                >care@luxemed.com<br />support@luxemed.com</BaseParagraph
              >
            </div>
            <div class="info-item">
              <i class="fas fa-phone-alt"></i>
              <SubTitle>Call 24/7</SubTitle>
              <BaseParagraph
                >+41 44 123 4567<br />+1 (800) LUXE-MED</BaseParagraph
              >
            </div>
          </div>
          <form class="contact-form">
            <div class="medium-2 gap-1">
              <InputField placeholder="First Name" />
              <InputField placeholder="Last Name" />
            </div>
            <InputField placeholder="Email" />
            <BaseTextArea placeholder="Message" />
            <BaseButton class="bg-primary width-full">Send Message</BaseButton>
          </form>
        </div>
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10808.43572886475!2d8.5323568779435!3d47.37130282436214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b1d3d623257%3A0xc3fa86e4533088b9!2sZurich%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1707921600000!5m2!1sen!2sus"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    <!-- Content Side -->
    <!-- <div class="contact-content py-5 px-4 large-py-5 large-px-5">
      <div class="info-wrapper">
        <SectionTitle
          subTitle="Get in Touch"
          title="Let's Start Your Healing Journey."
          class="contact-intro-title"
        />

        <BaseParagraph class="secondary-text">
          Have questions about our procedures or need to schedule an urgent
          consultation? We are here 24/7.
        </BaseParagraph>

        <div class="info-grid medium-2 large-3 gap-2 mb-4">
          <div class="info-item">
            <i class="fas fa-map-marker-alt icon-secondary"></i>
            <BaseTitle>Main Campus</BaseTitle>
            <BaseParagraph
              >123 Wellness Blvd, Zurich<br />Switzerland,
              CH-8001</BaseParagraph
            >
          </div>
          <div class="info-item">
            <i class="fas fa-envelope icon-secondary"></i>
            <BaseTitle>Email Us</BaseTitle>
            <BaseParagraph
              >care@luxemed.com<br />support@luxemed.com</BaseParagraph
            >
          </div>
          <div class="info-item">
            <i class="fas fa-phone-alt icon-secondary"></i>
            <BaseTitle>Call 24/7</BaseTitle>
            <BaseParagraph
              >+41 44 123 4567<br />+1 (800) LUXE-MED</BaseParagraph
            >
          </div>
        </div>

        <form class="contact-form p-4">
          <div class="medium-2 gap-2">
            <div class="form-group">
              <label>First Name</label>
              <InputField placeholder="John" />
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <InputField placeholder="Doe" />
            </div>
          </div>
          <div class="form-group">
            <label>Email Address</label>
            <InputField type="email" placeholder="john@example.com" />
          </div>
          <div class="form-group">
            <label>Message</label>
            <BaseTextArea placeholder="How can we help?" />
          </div>
          <BaseButton class="submit-btn mt-2">Send Message</BaseButton>
        </form>
      </div>
    </div> -->

    <!-- Visual Side (Map) -->
    <!-- <div class="contact-visual">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10808.43572886475!2d8.5323568779435!3d47.37130282436214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b1d3d623257%3A0xc3fa86e4533088b9!2sZurich%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1707921600000!5m2!1sen!2sus"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div class="location-card p-3">
        <div class="flex justify-between align-center">
          <div>
            <BaseTitle class="m-0">LuxeMed Zurich</BaseTitle>
            <BaseParagraph class="m-0 secondary-text"
              >Open 24 Hours</BaseParagraph
            >
          </div>
          <button class="nav-arrow-btn">
            <i class="fas fa-location-arrow"></i>
          </button>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
.info-item {
  background: var(--white-color);
  padding: 1rem;
  border-radius: 1rem;
}
.info-item i {
  font-size: 1.5rem;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
}
.contact-form {
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--white-color);
}
.contact-form .btn {
  border-radius: 0.75rem;
}

/* map  */

.map {
  height: 100%;
  width: 100%;
}
.map iframe {
  height: 100%;
  width: 100%;
  border: 0;
  position: relative;
}


/* .conta */
/* .contact-shell {
  min-height: 100vh;
}

.contact-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

.info-wrapper {
  width: 100%;
  max-width: 650px;
} */
/*
.contact-intro-title {
  margin-bottom: 2rem;
}

.secondary-text {
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 500px;
  margin-bottom: 2.5rem;
}

.icon-secondary {
  color: var(--color-secondary);
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

.info-item :deep(h3) {
  font-size: 1.1rem;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.info-item :deep(p) {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
}

.contact-form {
  background: white;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-primary);
  font-size: 0.9rem;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background: var(--color-primary);
  color: white;
  border-radius: 12px;
  font-weight: 600;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.submit-btn:hover {
  background: var(--color-secondary);
  transform: translateY(-2px);
}

.contact-visual {
  background: #e6eadd;
  position: relative;
  overflow: hidden;
  height: 100%;
}

.contact-visual iframe {
  width: 100%;
  height: 100%;
  transition: 0.6s ease;
  border: none;
}

.contact-visual:hover iframe {
  filter: grayscale(0%) opacity(1);
}

.location-card {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  transform: translateY(20px);
  opacity: 0;
  transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-visual:hover .location-card {
  transform: translateY(0);
  opacity: 1;
}

.nav-arrow-btn {
  background: var(--color-secondary);
  color: white;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}

.nav-arrow-btn:hover {
  transform: scale(1.1);
}

@media (max-width: 900px) {
  .contact-content {
    align-items: center;
    padding: 60px 6%;
  }
  .contact-visual {
    height: 450px;
    order: -1;
  }
} */
</style>
