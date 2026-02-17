<script setup>
import SectionTitle from "../Components/Widget/SectionTitle.vue";
</script>

<template>
  <div class="contact-section relative">
    <div class="container">
      <div class="medium-2 gap-2">
        <div class="contact-info py-2 medium-py-5">
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
              <div class="form-group">
                <label>Your Name</label>
                <InputField placeholder="Your Name" />
              </div>
              <div class="form-group">
                <label>Your Number</label>
                <InputField type="number" placeholder="+012" />
              </div>
            </div>
            <div class="form-group">
              <label>Email Address</label>
              <InputField type="email" placeholder="Email" />
            </div>

            <div class="form-group">
              <label>First Message</label>
              <BaseTextArea placeholder="Message" />
            </div>
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
.form-group {
  margin-bottom: 1rem;
}
.form-group label {
  color: var(--primary-color);
}
.contact-form {
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  background: var(--white-color);
}
.contact-form .btn {
  border-radius: 0.75rem;
}

/* map  */

.map iframe {
  height: 100%;
  width: 100%;
  border: 0;
  position: relative;
}
@media (min-width: 768px) {
  .map {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
  }
}
</style>
