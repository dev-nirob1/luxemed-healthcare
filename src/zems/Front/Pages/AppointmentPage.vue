<script setup>
import { ref } from "vue";
import AppointmentForm from "../Components/Widget/AppointmentForm.vue";

const isSuccess = ref(false);

const handleSuccess = () => {
  isSuccess.value = true;
};
</script>

<template>
  <div class="booking-wrapper">
    <div class="booking-container medium-2 large-5">
      <!-- Form Side -->
      <div class="booking-form-section large-span-3">
        <AppointmentForm @success="handleSuccess" />
      </div>

      <!-- Info Side -->
      <div class="booking-info-section large-span-2">
        <div class="benefits-content">
          <BaseTitle class="info-title">Why Choose LuxeMed?</BaseTitle>
          <ul class="benefit-list">
            <ListItem>
              <div class="benefit-icon">
                <i class="fas fa-check-circle"></i>
              </div>
              <div class="benefit-text">
                <strong>Zero Wait Time</strong>
                <BaseParagraph>
                  Our AI scheduling ensures you are seen exactly when booked.
                </BaseParagraph>
              </div>
            </ListItem>
            <ListItem>
              <div class="benefit-icon">
                <i class="fas fa-user-md"></i>
              </div>
              <div class="benefit-text">
                <strong>Top Specialists</strong>
                <BaseParagraph>
                  Direct access to global leaders in medicine.
                </BaseParagraph>
              </div>
            </ListItem>
          </ul>
        </div>

        <div class="help-box">
          <BaseTitle class="help-title">Need Help?</BaseTitle>
          <BaseParagraph
            >Call our concierge for immediate assistance.</BaseParagraph
          >
          <div class="phone-number">+41 44 123 4567</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.booking-wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 1rem;
}

.booking-container {
  background: var(--white-color);
  width: 100%;
  max-width: 1000px;
  border-radius: 1rem;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  position: relative;
}

.booking-form-section {
  padding: 2rem;
}

.booking-info-section {
  background: var(--primary-color);
  color: var(--white-color);
  padding: 2rem;
}

.info-title {
  font-size: 1.75rem;
  margin-bottom: 2rem;
}

.benefit-list li {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.benefit-icon {
  color: var(--secondary-color);
  font-size: 1.2rem;
  margin-top: 5px;
}

.benefit-text p {
  font-size: 0.95rem;
  opacity: 0.8;
}

.help-box {
  background: rgb(from var(--secondary-color) r g b / 25%);
  padding: 1.5rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
}

.help-title {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.help-box p {
  font-size: 0.9rem;
  opacity: 0.9;
  margin-bottom: 1rem;
}

.phone-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--secondary-color);
}
@media (min-width: 768px) {
  .booking-info-section {
    padding: 3rem;
  }
}
</style>
