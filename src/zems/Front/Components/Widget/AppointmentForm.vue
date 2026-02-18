<script setup>
import { ref, reactive } from "vue";

const emit = defineEmits(["success"]);

const isSubmitting = ref(false);

const booking = reactive({
  department: "",
  phone: "",
  name: "",
  date: "",
  timeSlot: "Morning (9AM - 12PM)",
});

const handleBooking = (e) => {
  e.preventDefault();
  isSubmitting.value = true;

  // Simulate API call
  setTimeout(() => {
    isSubmitting.value = false;
    emit("success");
  }, 1500);
};
</script>

<template>
  <div class="appointment-form-widget">
    <BaseTitle style="margin-top: 10px">Schedule Your Visit</BaseTitle>
    <BaseParagraph class="mb-3">
      Direct scheduling with our AI concierge.
    </BaseParagraph>

    <form @submit="handleBooking">
      <div class="input-group">
        <label>Full Name</label>
        <InputField
          v-model="booking.name"
          type="text"
          placeholder="Enter Your Name"
          required
        />
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

      <div class="medium-2 gap-1">
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
        class="bg-primary text-white width-full"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? "Processing..." : "Confirm Appointment" }}
      </BaseButton>
    </form>
  </div>
</template>

<style scoped>
.input-group {
  margin-bottom: 0.5rem;
}
.input-group label {
  display: block;
  font-weight: 500;
  color: var(--primary-color);
  font-size: 0.9rem;
}

.input-group input,
.input-group select {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.input-group input:focus,
.input-group select:focus {
  outline: none;
  border-color: var(--primary-color);
}
form .btn {
  border-radius: 0.75rem;
  padding: 1rem;
  font-weight: 600;
}
</style>
