# LuxeMed Healthcare 🏥

A premium, AI-integrated healthcare platform built with professional editorial design standards.

---

## ⚡ Context Persistence

**Conversation ID**: `9041f250-7c6f-4794-b0b5-bd7c0802fd71`

> [!IMPORTANT]
> If starting a new session with an AI Agent, share this ID or the contents of this README to maintain the **Luxe-Grid** coding pattern.

---

## 🏛️ Architecture: The "Luxe-Grid" Pattern

This project follows a **Widget + Elements + Utility Grid** architecture to ensure 100% design consistency and modularity.

### 1. Global Elements (`src/components/Element/`)

Never use raw HTML tags for core content. Always use the globally registered atomic components:

- `<BaseTitle>` (Renders `h3.title`)
- `<SubTitle>` (Renders `h5.sub-title`)
- `<BaseParagraph>` (Renders `p`)

- `<BaseImage>` (Optimized images with lazy loading)
- `<ListItem>` (Standardized list entries)

### 2. Utility Grid System (`src/assets/grid.css`)

Layouts are dictated by parents using utility classes. Avoid writing custom media queries in components.

- **Container**: Use `.container` for central alignment.
- **Grid Setup**: Use `all-n`, `medium-n`, or `large-n` to define column counts.
- **Spacing**: Use `gap-n` (1-5) for grid spacing.
- **Example**: `<div class="container medium-2 large-4 gap-2">`

### 3. Styled Widgets (`src/zems/Front/Components/Widget/`)

Common design patterns should be abstracted into widgets:

- `SectionTitle.vue`: Standardized section headings with labels.
- `ServicesCard.vue`: Cinematic bento-style cards.

---

## 🎨 Professional Style Guide

- **Bento Logic**: Frequently uses asymmetric grids (e.g., `large-5` with `large-span-2` for brand columns).
- **Cinematic Overlays**: Images use dark `rgba(0,0,0,0.8)` gradients for bottom-aligned text readability.
- **Micro-Animations**: Uses subtle `scale(1.1)` on hover and `translateX` for arrow icons.
- **Hierarchy**: Uses `opacity: 0.7` for secondary descriptions to create depth.

### 📐 Spacing Philosophy

- **Major Layouts**: Use `grid.css` utilities (e.g., `pt-5`, `gap-2`) for section-level padding and large grid gutters.
- **Micro-Spacing**: Avoid utility classes for fine-tuned details (like star ratings to text, or names to tags). Instead, use **Scoped CSS** for precise control (e.g., `margin-bottom: 0.75rem`) to maintain a tight, premium editorial feel.
- **Image Wrappers**: Use the class `.image` for all full-project image wrappers. Styles should be modified within the scoped CSS of the component as needed.
- **Paragraphs & Tags**: Avoid using classes on `<BaseParagraph>` or other atomic tags unless a forceful style change is required. Prefer using the same class for the same tag type within a component for consistency.
  > [!IMPORTANT]
  > Since these are Vue components, scoped CSS should target the **underlying HTML tag** (e.g., `p`) or the **internal component class** (e.g., `.title`, `.sub-title`) rather than the component name itself.

---

## 🚀 Development

```bash
npm run dev
```
