<script setup>
import HeadOfDepertmentCard from "../Components/Widget/HeadOfDepertmentCard.vue";
import CtaCard from "../Components/Widget/CtaCard.vue";
import FeatureCard from "../Components/Widget/FeatureCard.vue";

const technologies = [
  {
    icon: "fas fa-brain",
    title: "Brain Mapping",
    description: "Real-time visualization of neural pathways.",
  },
  {
    icon: "fas fa-notes-medical",
    title: "Neuro-Genetics",
    description: "DNA-based risk analysis for hereditary conditions.",
  },
];
</script>

<template>
  <div class="speciality-details py-5">
    <div class="container">
      <!-- Full Width Image -->
      <div class="image">
        <BaseImage
          image="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2070&auto=format&fit=crop"
        />
      </div>

      <!-- Content Split -->
      <div class="large-9 gap-2 align-start mt-3">
        <div class="content large-span-6">
          <BaseTitle> Neuro-Excellence </BaseTitle>
          <BaseParagraph>
            The LuxeMed Neurology Center offers world-class care for complex
            neurological conditions. Using high-resolution fMRI and AI-assisted
            brain mapping, we can identify issues with microscopic precision.
          </BaseParagraph>
          <BaseParagraph>
            Our team specializes in treating Stroke recovery, Alzheimer's
            prevention, and Epilepsy management using non-invasive techniques
            that prioritize patient comfort and long-term cognitive health.
          </BaseParagraph>

          <div class="my-2">
            <BaseTitle class="mb-1"> Technologies </BaseTitle>
            <div class="medium-2 gap-2">
              <FeatureCard
                v-for="(tech, index) in technologies"
                :key="index"
                :icon="tech.icon"
                :title="tech.title"
                :description="tech.description"
              />
            </div>
          </div>
        </div>

        <aside class="large-span-3">
          <HeadOfDepertmentCard
            department="Neurology"
            name="Dr. Alexander Ray"
            role="Lead Neurologist"
            image="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
          />

          <CtaCard
            title="Need Advice?"
            description="Schedule a virtual consultation with our neuro-specialists."
            buttonText="Book Online"
            theme="primary"
          />
        </aside>
      </div>
    </div>
  </div>
</template>
<style scoped>
.speciality-details .image {
  width: 100%;
  height: 60vh;
  object-fit: cover;
  overflow: hidden;
  border-radius: 1rem;
}
.speciality-details .content p {
  font-size: 1.15rem;
}
.speciality-details .image img {
  width: 100%;
  height: 100%;
}
@media (min-width: 768px) {
  .speciality-details .image {
    height: 70vh;
  }
}
</style>
