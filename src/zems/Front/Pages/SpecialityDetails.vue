<template>
  <!-- Page Header -->
  <header class="page-header">
    <div class="breadcrumb">Home / Departments / Neurology</div>
    <h1
      style="
        font-size: clamp(2.5rem, 5vw, 4rem);
        color: var(--color-primary);
        margin-bottom: 20px;
      "
    >
      Cognitive Neurology
    </h1>
    <p
      style="
        max-width: 600px;
        margin: 0 auto;
        font-size: 1.2rem;
        color: var(--color-text-muted);
      "
    >
      Unlocking the mysteries of the brain with precision diagnostics.
    </p>
  </header>

  <!-- Full Width Image -->
  <div style="padding: 0 6%; margin-bottom: 60px">
    <img
      src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2070&auto=format&fit=crop"
      style="
        width: 100%;
        height: 500px;
        object-fit: cover;
        border-radius: 32px;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
      "
    />
  </div>

  <!-- Content Split -->
  <div class="content-grid">
    <div class="main-article">
      <h2
        style="
          font-size: 2.2rem;
          margin-bottom: 30px;
          color: var(--color-primary);
        "
      >
        Neuro-Excellence
      </h2>
      <p>
        The LuxeMed Neurology Center offers world-class care for complex
        neurological conditions. Using high-resolution fMRI and AI-assisted
        brain mapping, we can identify issues with microscopic precision.
      </p>
      <p>
        Our team specializes in treating Stroke recovery, Alzheimer's
        prevention, and Epilepsy management using non-invasive techniques that
        prioritize patient comfort and long-term cognitive health.
      </p>

      <h3
        style="
          font-size: 1.8rem;
          margin: 50px 0 25px;
          color: var(--color-secondary);
        "
      >
        Technologies
      </h3>
      <div
        style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        "
      >
        <div style="background: #f0f4f2; padding: 30px; border-radius: 20px">
          <i
            class="fas fa-brain"
            style="
              font-size: 2rem;
              color: var(--color-primary);
              margin-bottom: 15px;
            "
          ></i>
          <h4 style="font-size: 1.3rem; margin-bottom: 10px">Brain Mapping</h4>
          <p style="font-size: 1rem; margin-bottom: 0">
            Real-time visualization of neural pathways.
          </p>
        </div>
        <div style="background: #f0f4f2; padding: 30px; border-radius: 20px">
          <i
            class="fas fa-notes-medical"
            style="
              font-size: 2rem;
              color: var(--color-primary);
              margin-bottom: 15px;
            "
          ></i>
          <h4 style="font-size: 1.3rem; margin-bottom: 10px">Neuro-Genetics</h4>
          <p style="font-size: 1rem; margin-bottom: 0">
            DNA-based risk analysis for hereditary conditions.
          </p>
        </div>
      </div>
    </div>

    <aside>
      <div class="sidebar-card">
        <h4
          style="
            font-size: 1.4rem;
            color: var(--color-primary);
            margin-bottom: 20px;
          "
        >
          Head of Neurology
        </h4>
        <div
          style="
            display: flex;
            gap: 15px;
            align-items: center;
            margin-bottom: 20px;
          "
        >
          <img
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
            style="
              width: 70px;
              height: 70px;
              border-radius: 50%;
              object-fit: cover;
            "
          />
          <div>
            <div style="font-weight: 700">Dr. Alexander Ray</div>
            <div style="color: var(--color-secondary); font-size: 0.9rem">
              Lead Neurologist
            </div>
          </div>
        </div>
        <button
          class="btn btn-secondary"
          style="width: 100%; border-radius: 12px"
        >
          View Profile
        </button>
      </div>

      <div
        class="sidebar-card"
        style="background: var(--color-primary); color: white"
      >
        <h4 style="font-size: 1.4rem; margin-bottom: 15px">Need Advice?</h4>
        <p style="color: rgba(255, 255, 255, 0.8)">
          Schedule a virtual consultation with our neuro-specialists.
        </p>
        <button
          style="
            background: white;
            color: var(--color-primary);
            width: 100%;
            padding: 15px;
            border-radius: 12px;
            font-weight: 600;
            border: none;
            cursor: pointer;
            margin-top: 20px;
          "
        >
          Book Online
        </button>
      </div>
    </aside>
  </div>
</template>
<style scoped>
.page-header {
  background:
    radial-gradient(
      circle at 30% 50%,
      rgba(200, 230, 255, 0.2) 0%,
      rgba(253, 251, 247, 0) 60%
    ),
    linear-gradient(180deg, #fdfbf7 0%, #fff 100%);
  padding: 160px 6% 80px;
  text-align: center;
}
.breadcrumb {
  color: var(--color-text-muted);
  margin-bottom: 20px;
  font-size: 0.9rem;
}
.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  padding: 80px 6%;
  max-width: 1600px;
  margin: 0 auto;
}
.main-article p {
  font-size: 1.15rem;
  margin-bottom: 30px;
  line-height: 1.8;
  color: #445550;
}
.sidebar-card {
  background: #fff;
  padding: 40px;
  border-radius: 32px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
  border: 1px solid #e6eadd;
}

@media (max-width: 900px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>
