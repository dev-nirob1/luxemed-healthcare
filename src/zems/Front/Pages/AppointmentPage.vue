<script setup>
import { ref, reactive } from "vue";

const isSubmitting = ref(false);
const isSuccess = ref(false);

const booking = reactive({
  department: "",
  phone: "",
  date: "",
  timeSlot: "Morning (9AM - 12PM)",
});

const handleBooking = (e) => {
  e.preventDefault();
  isSubmitting.value = true;

  // Simulate API call
  setTimeout(() => {
    isSubmitting.value = false;
    isSuccess.value = true;
  }, 1500);
};
</script>

<template>
  <div class="booking-wrapper">
    <div class="booking-container">
      <!-- Form Side -->
      <div class="booking-form-section" :class="{ 'fade-out': isSuccess }">
        <BaseTitle style="margin-top: 10px">Schedule Your Visit</BaseTitle>
        <BaseParagraph class="mb-5 text-muted">
          Direct scheduling with our AI concierge.
        </BaseParagraph>

        <form @submit="handleBooking" class="form-grid">
          <div class="input-group">
            <label>Specialty Department</label>
            <SelectDropdown v-model="booking.department" required>
              <option value="">Select Department...</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Pediatrics</option>
              <option>General Surgery</option>
            </SelectDropdown>
          </div>

          <div class="input-group">
            <label>Phone Number</label>
            <InputField
              v-model="booking.phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              required
            />
          </div>

          <div class="date-time-grid">
            <div class="input-group">
              <label>Preferred Date</label>
              <InputField v-model="booking.date" type="date" required />
            </div>
            <div class="input-group">
              <label>Time Slot</label>
              <SelectDropdown v-model="booking.timeSlot">
                <option>Morning (9AM - 12PM)</option>
                <option>Afternoon (1PM - 5PM)</option>
                <option>Evening (6PM - 9PM)</option>
              </SelectDropdown>
            </div>
          </div>

          <BaseButton
            type="submit"
            class="bg-primary text-white"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? "Processing..." : "Confirm Appointment" }}
          </BaseButton>
        </form>
      </div>

      <!-- Success Message Overlay -->
      <div class="success-overlay" :class="{ active: isSuccess }">
        <div class="success-icon">
          <i class="fas fa-check"></i>
        </div>
        <BaseTitle class="mb-2">Booking Confirmed!</BaseTitle>
        <BaseParagraph class="success-message">
          Thank you! Our concierge team has received your request and will
          contact you via phone shortly to finalize details.
        </BaseParagraph>
        <RouterLink to="/" class="btn back-home-btn"> Return Home </RouterLink>
      </div>

      <!-- Info Side -->
      <div class="booking-info-section">
        <div class="benefits-content">
          <BaseTitle class="info-title">Why Choose LuxeMed?</BaseTitle>
          <ul class="benefit-list">
            <li>
              <div class="benefit-icon">
                <i class="fas fa-check-circle"></i>
              </div>
              <div class="benefit-text">
                <strong>Zero Wait Time</strong>
                <BaseParagraph>
                  Our AI scheduling ensures you are seen exactly when booked.
                </BaseParagraph>
              </div>
            </li>
            <li>
              <div class="benefit-icon">
                <i class="fas fa-user-md"></i>
              </div>
              <div class="benefit-text">
                <strong>Top Specialists</strong>
                <BaseParagraph>
                  Direct access to global leaders in medicine.
                </BaseParagraph>
              </div>
            </li>
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
  padding: 5rem 0;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(var(--primary-rgb, 17, 43, 40), 0.05) 0%,
    transparent 70%
  );
}

.booking-container {
  background: white;
  width: 100%;
  max-width: 1000px;
  border-radius: 2rem;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  position: relative;
  min-height: 600px;
}

.booking-form-section {
  padding: 60px;
  transition: all 0.5s ease;
}

.booking-form-section.fade-out {
  opacity: 0;
  transform: scale(0.95);
  pointer-events: none;
}

.booking-info-section {
  background: var(--primary-color);
  color: white;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.info-title {
  color: white;
  font-size: 1.75rem;
  margin-bottom: 2rem;
}

.benefit-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.benefit-list li {
  display: flex;
  gap: 20px;
  margin-bottom: 2rem;
}

.benefit-icon {
  color: var(--secondary-color);
  font-size: 1.2rem;
  margin-top: 5px;
}

.benefit-text strong {
  display: block;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.benefit-text p {
  font-size: 0.95rem;
  opacity: 0.8;
  color: white;
}

.help-box {
  background: rgba(255, 255, 255, 0.08);
  padding: 30px;
  border-radius: 1.5rem;
  backdrop-filter: blur(10px);
}

.help-title {
  color: white;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.help-box p {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 1rem;
  color: white;
}

.phone-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--secondary-color);
}

.form-grid {
  display: grid;
  gap: 25px;
}

.date-time-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
  color: var(--primary-color);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.input-group :deep(input),
.input-group :deep(select) {
  width: 100%;
  padding: 15px;
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  background: var(--surface-color);
  font-family: inherit;
  transition: all 0.3s ease;
}

.input-group :deep(input):focus,
.input-group :deep(select):focus {
  outline: none;
  border-color: var(--primary-color);
  background: white;
  box-shadow: 0 0 0 4px rgba(var(--primary-rgb, 17, 43, 40), 0.05);
}

.confirm-btn {
  width: 100%;
  padding: 20px;
  margin-top: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* Success Overlay */
.success-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 60px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transform: scale(1.1);
  z-index: 10;
}

.success-overlay.active {
  opacity: 1;
  pointer-events: all;
  transform: scale(1);
}

.success-icon {
  width: 100px;
  height: 100px;
  background: var(--surface-color);
  color: var(--secondary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin-bottom: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
}

.success-message {
  max-width: 450px;
  margin: 0 auto 2rem;
  line-height: 1.7;
}

.back-home-btn {
  padding: 15px 40px;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.back-home-btn:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
}

@media (max-width: 991px) {
  .booking-container {
    grid-template-columns: 1fr;
    max-width: 600px;
  }

  .booking-form-section {
    padding: 40px;
  }

  .booking-info-section {
    padding: 40px;
    order: -1;
  }
}

@media (max-width: 576px) {
  .date-time-grid {
    grid-template-columns: 1fr;
  }
}
</style>
