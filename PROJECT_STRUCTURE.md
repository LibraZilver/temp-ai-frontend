# Project Structure Guide

## 📁 โครงสร้างโปรเจกต์หลังการ Restructure

```
src/
├── components/          # Reusable UI Components
│   └── ui/             # Basic UI Components
│       ├── Button.tsx  # ปุ่มกด with variants
│       ├── Card.tsx    # การ์ดพื้นฐาน
│       ├── Input.tsx   # Input field พร้อม label
│       ├── LoadingSpinner.tsx # Loading indicator
│       ├── LogoLink.tsx # Logo link component
│       └── index.ts    # Export all UI components
├── pages/              # Page Components
│   ├── HomePage.tsx    # หน้าแรก (เดิมคือ Home.tsx)
│   ├── LoginPage.tsx   # หน้าล็อกอิน (เดิมคือ Login.tsx)
│   └── index.ts        # Export all pages
├── assets/             # Static assets
├── App.tsx             # Main App component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## 🎯 การแยก Components

### **Pages** (`src/pages/`)
- **HomePage**: หน้าแรกที่แสดงคำทักทายและลิงก์ไปหน้าอื่น
- **LoginPage**: หน้าล็อกอินที่มีฟอร์มเข้าสู่ระบบ

### **UI Components** (`src/components/ui/`)
- **Button**: ปุ่มที่ใช้ซ้ำได้ พร้อม variants (primary, secondary) และ sizes
- **Card**: การ์ดพื้นฐานที่มี backdrop blur effect
- **Input**: Input field พร้อม label และ icon
- **LoadingSpinner**: Loading animation
- **LogoLink**: Link component สำหรับ logo ที่มี hover effects

## 🚀 ประโยชน์ของการ Restructure

1. **แยกความรับผิดชอบ**: Pages และ Components แยกกันชัดเจน
2. **ใช้ซ้ำได้**: UI Components สามารถนำไปใช้ในหลาย pages
3. **บำรุงรักษาง่าย**: หา component ได้ง่าย แก้ไขใน 1 ที่
4. **Scale ได้**: เพิ่ม pages หรือ components ใหม่ได้ง่าย
5. **Type Safety**: TypeScript interfaces สำหรับทุก component

## 📝 วิธีใช้งาน Components

### การใช้ UI Components:
```tsx
import { Button, Card, Input } from '../components/ui'

// ใช้ Button
<Button variant="primary" size="lg" onClick={handleClick}>
  Click me!
</Button>

// ใช้ Card
<Card className="max-w-md">
  <p>Content here</p>
</Card>

// ใช้ Input
<Input 
  label="Email" 
  icon="📧" 
  type="email" 
  placeholder="your@email.com" 
/>
```

### การเพิ่ม Page ใหม่:
1. สร้างไฟล์ใน `src/pages/`
2. Export ใน `src/pages/index.ts`
3. เพิ่ม Route ใน `App.tsx`

### การเพิ่ม Component ใหม่:
1. สร้างไฟล์ใน `src/components/ui/`
2. Export ใน `src/components/ui/index.ts`
3. Import และใช้ใน pages ที่ต้องการ
