<template>
  <!-- 8️⃣ Testimonials Section (Replaces Booking) -->
  <section
    id="testimonials"
    style="padding: var(--section-spacing) var(--container-padding)"
  >
    <div class="section-header">
      <div class="section-title">
        <span class="section-label">Patient Stories</span>
        <h2>Voices of Recovery</h2>
      </div>
    </div>

    <div
      class="testimonials-grid"
      style="
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
      "
    >
      <!-- Review 1 -->
      <div class="bento-item" style="padding: 40px">
        <div style="margin-bottom: 20px; color: #ffb400">
          <i class="fas fa-star"></i><i class="fas fa-star"></i
          ><i class="fas fa-star"></i><i class="fas fa-star"></i
          ><i class="fas fa-star"></i>
        </div>
        <p style="font-size: 1.1rem; line-height: 1.6; color: #556660">
          "The robotic heart surgery was flawless. I was back on my feet in
          days, not weeks. LuxeMed truly feels like the future of healthcare."
        </p>
        <div
          style="
            margin-top: 30px;
            display: flex;
            align-items: center;
            gap: 15px;
          "
        >
          <div
            style="
              width: 50px;
              height: 50px;
              background: #e0e0e0;
              border-radius: 50%;
              overflow: hidden;
            "
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
              style="width: 100%; height: 100%; object-fit: cover"
            />
          </div>
          <div>
            <h5 style="margin: 0; color: var(--color-primary)">Robert Fox</h5>
            <span style="font-size: 0.85rem; opacity: 0.6"
              >Cardiology Patient</span
            >
          </div>
        </div>
      </div>

      <!-- Review 2 -->
      <div class="bento-item" style="padding: 40px">
        <div style="margin-bottom: 20px; color: #ffb400">
          <i class="fas fa-star"></i><i class="fas fa-star"></i
          ><i class="fas fa-star"></i><i class="fas fa-star"></i
          ><i class="fas fa-star"></i>
        </div>
        <p style="font-size: 1.1rem; line-height: 1.6; color: #556660">
          "The pediatric ward is magical. My daughter wasn't scared for a
          second. The staff treated us like family, not just numbers."
        </p>
        <div
          style="
            margin-top: 30px;
            display: flex;
            align-items: center;
            gap: 15px;
          "
        >
          <div
            style="
              width: 50px;
              height: 50px;
              background: #e0e0e0;
              border-radius: 50%;
              overflow: hidden;
            "
          >
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
              style="width: 100%; height: 100%; object-fit: cover"
            />
          </div>
          <div>
            <h5 style="margin: 0; color: var(--color-primary)">Jenny Wilson</h5>
            <span style="font-size: 0.85rem; opacity: 0.6">Mother of 2</span>
          </div>
        </div>
      </div>

      <!-- Review 3 -->
      <div class="bento-item" style="padding: 40px">
        <div style="margin-bottom: 20px; color: #ffb400">
          <i class="fas fa-star"></i><i class="fas fa-star"></i
          ><i class="fas fa-star"></i><i class="fas fa-star"></i
          ><i class="fas fa-star"></i>
        </div>
        <p style="font-size: 1.1rem; line-height: 1.6; color: #556660">
          "I've never experienced such thorough diagnostics. The AI analysis
          caught something early that others missed. Literally a life saver."
        </p>
        <div
          style="
            margin-top: 30px;
            display: flex;
            align-items: center;
            gap: 15px;
          "
        >
          <div
            style="
              width: 50px;
              height: 50px;
              background: #e0e0e0;
              border-radius: 50%;
              overflow: hidden;
            "
          >
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1976&auto=format&fit=crop"
              style="width: 100%; height: 100%; object-fit: cover"
            />
          </div>
          <div>
            <h5 style="margin: 0; color: var(--color-primary)">Guy Hawkins</h5>
            <span style="font-size: 0.85rem; opacity: 0.6"
              >Neurology Patient</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
