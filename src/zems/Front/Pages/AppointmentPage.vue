<template>
  <div class="booking-wrapper">
    <div class="booking-container">
      <!-- Form Side -->
      <div class="booking-form-section">
        <!-- Removed 'Step 1 of 2' -->
        <h1 style="margin-top: 10px">Schedule Your Visit</h1>
        <p style="color: #666; margin-bottom: 30px">
          Direct scheduling with our AI concierge.
        </p>

        <form
          class="form-grid"
          id="bookingForm"
          onsubmit="handleBooking(event)"
        >
          <div class="input-group">
            <label>Specialty Department</label>
            <select required>
              <option value="">Select Department...</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Pediatrics</option>
              <option>General Surgery</option>
            </select>
          </div>

          <!-- Replaced Consultation Type with Phone -->
          <div class="input-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="+1 (555) 000-0000" required />
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px">
            <div class="input-group">
              <label>Preferred Date</label>
              <input type="date" required />
            </div>
            <div class="input-group">
              <label>Time Slot</label>
              <select>
                <option>Morning (9AM - 12PM)</option>
                <option>Afternoon (1PM - 5PM)</option>
                <option>Evening (6PM - 9PM)</option>
              </select>
            </div>
          </div>

          <button type="submit" class="confirm-btn">Confirm Appointment</button>
        </form>
      </div>

      <!-- Success Message Overlay (Hidden by default) -->
      <div class="success-overlay" id="successScreen">
        <div class="success-icon"><i class="fas fa-check"></i></div>
        <h2 style="color: var(--color-primary); margin-bottom: 10px">
          Booking Confirmed!
        </h2>
        <p
          style="
            color: #666;
            line-height: 1.6;
            max-width: 400px;
            margin-bottom: 30px;
          "
        >
          Thank you! Our concierge team has received your request and will
          contact you via phone shortly to finalize details.
        </p>
        <button
          class="btn btn-primary"
          onclick="window.location.href = '../index.html'"
        >
          Return Home
        </button>
      </div>

      <!-- Info Side -->
      <div class="booking-info-section">
        <div>
          <h3 style="font-size: 1.5rem; margin-bottom: 20px">
            Why Choose LuxeMed?
          </h3>
          <ul style="list-style: none; padding: 0">
            <li
              style="
                margin-bottom: 20px;
                display: flex;
                gap: 15px;
                align-items: flex-start;
              "
            >
              <i
                class="fas fa-check-circle"
                style="color: var(--color-secondary); margin-top: 5px"
              ></i>
              <div>
                <strong>Zero Wait Time</strong>
                <p style="font-size: 0.9rem; opacity: 0.8; margin-top: 5px">
                  Our AI scheduling ensures you are seen exactly when booked.
                </p>
              </div>
            </li>
            <li
              style="
                margin-bottom: 20px;
                display: flex;
                gap: 15px;
                align-items: flex-start;
              "
            >
              <i
                class="fas fa-user-md"
                style="color: var(--color-secondary); margin-top: 5px"
              ></i>
              <div>
                <strong>Top Specialists</strong>
                <p style="font-size: 0.9rem; opacity: 0.8; margin-top: 5px">
                  Direct access to global leaders in medicine.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div
          style="
            background: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 16px;
          "
        >
          <h4 style="margin-bottom: 10px">Need Help?</h4>
          <p style="font-size: 0.9rem; opacity: 0.9; margin-bottom: 10px">
            Call our concierge for immediate assistance.
          </p>
          <div style="font-weight: 700; font-size: 1.2rem">+41 44 123 4567</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.booking-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 20px 80px;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(212, 224, 155, 0.2) 0%,
    transparent 70%
  );
}

.booking-container {
  background: white;
  width: 100%;
  max-width: 900px;
  border-radius: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  position: relative;
  min-height: 550px;
}

.booking-form-section {
  padding: 50px;
  transition: 0.3s;
}

.booking-info-section {
  background: var(--color-primary);
  color: white;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.booking-info-section::before {
  content: "";
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

h1 {
  font-size: 2rem;
  color: var(--color-primary);
  margin-bottom: 10px;
}

.form-grid {
  display: grid;
  gap: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #444;
  font-size: 0.95rem;
}

.input-group input,
.input-group select {
  width: 100%;
  padding: 14px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  font-family: inherit;
  background: #fafbf8;
  transition: 0.3s;
}
.input-group input:focus,
.input-group select:focus {
  outline: none;
  background: white;
  border-color: var(--color-secondary);
  box-shadow: 0 0 0 4px rgba(212, 224, 155, 0.2);
}

.confirm-btn {
  width: 100%;
  padding: 16px;
  background: var(--color-secondary);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.3s;
}
.confirm-btn:hover {
  background: #bbc988;
  transform: translateY(-2px);
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
  padding: 40px;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s ease;
  transform: translateY(20px);
  z-index: 10;
}
.success-overlay.active {
  opacity: 1;
  pointer-events: all;
  transform: translateY(0);
}
.success-icon {
  width: 80px;
  height: 80px;
  background: #e6f4ea;
  color: #1e8e3e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

@media (max-width: 900px) {
  .booking-container {
    grid-template-columns: 1fr;
  }
  .booking-info-section {
    padding: 40px;
    order: -1;
  }
}
</style>
