# 📱 RESPONSIVE NAVBAR LAYOUT GUIDE

## Visual Breakdown Per Device

### 🖥️ DESKTOP (1200px+)

```
┌──────────────────────────────────────────────────────────────────────┐
│                           HEADER HEIGHT: 60px                        │
├──────────────────────────────────────────────────────────────────────┤
│ min-height: 60px; align-items: center;                              │
│                                                                      │
│  [👑]                                                   [F][T][IG]  │
│  Logo    HOME   ABOUT   PORTFOLIO   SERVICES   PAGES  CONTACT       │
│  50px    13px font                                    36px icons    │
│                                                                      │
│  ├─ All items vertically centered at 60px height                    │
│  ├─ Logo flex-shrink: 0 (width 50px)                               │
│  ├─ Nav flex: 1 (grows to fill space)                              │
│  └─ Social gap: 12px (3 icons visible)                             │
└──────────────────────────────────────────────────────────────────────┘
```

**Key Properties**:
```css
.header__wrapper {
  min-height: 60px;
  display: flex;
  align-items: center;  /* ← Vertical center */
}

.header__logo { min-height: 60px; }
.header__nav__menu { min-height: 60px; justify-content: center; }
.header__nav__social { min-height: 60px; align-items: center; display: flex; }
```

---

### 💻 TABLET (992px - 1199px)

```
┌──────────────────────────────────────────────────────────────────────┐
│                           HEADER HEIGHT: 58px                        │
├──────────────────────────────────────────────────────────────────────┤
│ min-height: 58px; align-items: center;                              │
│                                                                      │
│  [👑]                                  [F][T][IG]   [☰]            │
│  Logo   (NAV HIDDEN)              46px  34px icons burger           │
│         12px font                                    12px icons      │
│                                                                      │
│  ├─ Logo: 46px                                                      │
│  ├─ Nav: display: none !important (hidden)                          │
│  ├─ Social: display: flex !important (VISIBLE - 34px icons)        │
│  └─ Burger: display: flex !important (visible)                      │
└──────────────────────────────────────────────────────────────────────┘

Click Burger Menu:
┌──────────────────────────────────────────────────────────────────────┐
│  [👑]                                  [F][T][IG]   [X] (close)     │
├──────────────────────────────────────────────────────────────────────┤
│  • ABOUT                                                             │
│  • PORTFOLIO                                                         │
│  • SERVICES                                                          │
│  • PAGES                                                             │
│  • CONTACT                                                           │
└──────────────────────────────────────────────────────────────────────┘
```

**Key Properties**:
```css
@media (max-width: 992px) {
  .header__wrapper { min-height: 58px; }
  .header__nav__menu { display: none !important; }
  .header__nav__menu.active { display: flex !important; }
  .header__nav__social { display: flex !important; min-height: 58px; }
  .mobile-menu-toggle { display: flex !important; min-height: 58px; }
}
```

---

### 📱 MOBILE PORTRAIT (768px - 991px)

```
┌──────────────────────────────────────────────────────────────────────┐
│                           HEADER HEIGHT: 56px                        │
├──────────────────────────────────────────────────────────────────────┤
│ min-height: 56px; align-items: center;                              │
│                                                                      │
│  [👑]                                          [☰]                  │
│  Logo   (NAV HIDDEN)                   burger menu                  │
│  45px   (NO SOCIAL ICONS - HIDDEN)     24px lines                   │
│                                                                      │
│  ├─ Logo: 45px                                                      │
│  ├─ Nav: display: none !important                                   │
│  ├─ Social: display: none !important (HIDDEN - save space!)        │
│  └─ Burger: display: flex !important (visible)                      │
└──────────────────────────────────────────────────────────────────────┘

Click Burger Menu (Mobile):
┌──────────────────────────────────────────────────────────────────────┐
│  [👑]                                          [X]                   │
├──────────────────────────────────────────────────────────────────────┤
│  • HOME                                                              │
│  • ABOUT                                                             │
│  • PORTFOLIO                                                         │
│  • SERVICES                                                          │
│  • PAGES                                                             │
│  • CONTACT                                                           │
│                                                                      │
│  (Full width dropdown, 13px font)                                   │
└──────────────────────────────────────────────────────────────────────┘
```

**Key Properties**:
```css
@media (max-width: 768px) {
  .header__wrapper { min-height: 56px; flex-wrap: nowrap; }
  .header__nav__menu { display: none !important; }
  .header__nav__menu.active { 
    display: flex !important;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    width: 100vw;
  }
  .header__nav__social { display: none !important; } /* ← HIDDEN */
  .mobile-menu-toggle { display: flex !important; min-height: 56px; }
}
```

---

### 📲 SMALL MOBILE (480px - 767px)

```
┌────────────────────────────────────────────────────────────┐
│                   HEADER HEIGHT: 52px                      │
├────────────────────────────────────────────────────────────┤
│ min-height: 52px; align-items: center;                    │
│                                                            │
│  [👑]                               [☰]                   │
│  Logo   (NAV HIDDEN)        burger  24px                  │
│  38px   (NO SOCIAL ICONS)   20px                          │
│         11px responsive     lines   (3 visible)           │
│                                                            │
│  ├─ Logo: 38px (smallest)                                 │
│  ├─ Nav: display: none !important                         │
│  ├─ Social: display: none !important (HIDDEN)            │
│  └─ Burger: display: flex !important (visible, 52px)     │
│     └─ Lines: 20px wide, 2.5px tall                      │
└────────────────────────────────────────────────────────────┘

Click Burger Menu (Small Mobile):
┌────────────────────────────────────────────────────────────┐
│  [👑]                               [X]                    │
├────────────────────────────────────────────────────────────┤
│  • HOME                                                    │
│  • ABOUT                                                   │
│  • PORTFOLIO                                               │
│  • SERVICES                                                │
│  • PAGES                                                   │
│  • CONTACT                                                 │
│                                                            │
│  (11px font, tight spacing)                               │
└────────────────────────────────────────────────────────────┘
```

**Key Properties**:
```css
@media (max-width: 480px) {
  .header__wrapper { min-height: 52px; gap: 8px; }
  .header__logo { min-height: 52px; min-width: 40px; }
  .header__nav__social { display: none !important; } /* ← HIDDEN */
  .mobile-menu-toggle { min-height: 52px; }
  .mobile-menu-toggle span { width: 20px; height: 2.5px; }
}
```

---

## 🎯 Alignment Strategy

### Height Consistency Table

| Breakpoint | Header | Logo | Nav | Social | Burger | Strategy |
|:-----------|:------:|:----:|:---:|:------:|:------:|:---------|
| 1200px+ | 60px | 60px | 60px | 60px | - | All flex items align center |
| 992px | 58px | 58px | - | 58px | 58px | Nav hidden, burger shown |
| 768px | 56px | 56px | - | **HIDE** | 56px | Space savings on mobile |
| 480px | 52px | 52px | - | **HIDE** | 52px | Minimal heights |

**Alignment Method**:
```css
/* Every container uses same strategy */
min-height: [breakpoint-height];
display: flex;
align-items: center;  /* ← Vertical center */
justify-content: [variable];
```

---

## 📊 Gap & Spacing

```
DESKTOP (1200px+):
[Logo-50px] -- gap:15px -- [Nav-flex:1] -- gap:15px -- [Social-3x36px]
                         centered at 60px height

TABLET (992px):
[Logo-46px] -- gap:10px -- [Burger-toggle] -- gap:10px -- [Social-3x34px]
                         centered at 58px height

MOBILE (768px):
[Logo-45px] -- gap:10px -- [Burger-toggle]
                         centered at 56px height
                    (NO SOCIAL ICONS)

SMALL MOBILE (480px):
[Logo-38px] -- gap:8px -- [Burger-toggle]
                         centered at 52px height
                    (NO SOCIAL ICONS)
```

---

## 🔄 Responsive Icon Strategy

### Social Icons Display Logic

```javascript
DESKTOP (1200px+) & TABLET (992px):
  display: flex !important;  // Show social icons
  gap: 12px; (desktop) / 10px; (tablet)
  icon-size: 36px; (desktop) / 34px; (tablet)

MOBILE (768px - 480px):
  display: none !important;  // HIDE social icons
  Reason: Save space for burger menu
  Result: Header stays clean and compact
```

---

## ✅ Alignment Verification

### Before Fix ❌
```
Mobile (768px):
│ [👑] HOME ABT PF │ [F][T][IG] [☰] │
│ ↑ Not aligned    ↑ Icons squeeze  │
│ ↑ Different heights               │
```

### After Fix ✅
```
Mobile (768px):
│ [👑]         [☰] │
│ All centered, height consistent │
│ No icons to cause overflow      │
│
Tablet (992px):
│ [👑]    [F][T][IG] [☰] │
│ All aligned, proper spacing │
```

---

## 🎨 CSS Properties Cheat Sheet

```css
/* Alignment Base */
.header__wrapper {
  display: flex;
  align-items: center;        /* Vertical center */
  justify-content: space-between;
  gap: 15px;
  min-height: 60px;           /* Consistent height */
}

/* Components */
.header__logo {
  flex-shrink: 0;             /* Don't shrink */
  min-height: 60px;           /* Match parent */
  align-items: center;        /* Self center */
}

.header__nav__menu {
  flex: 1;                    /* Grow to fill */
  justify-content: center;    /* Center items */
  min-height: 60px;           /* Match parent */
}

.header__nav__social {
  display: flex;              /* Or none on mobile */
  align-items: center;        /* Vertical center */
  min-height: 60px;           /* Match parent */
  gap: 12px;
}

.mobile-menu-toggle {
  min-height: 60px;           /* Match parent */
  align-items: center;        /* Center burger */
  justify-content: center;    /* Center burger */
}
```

---

## 📝 Summary

✅ **All elements vertically aligned** using `min-height` + `align-items: center`  
✅ **Social icons hidden on mobile** (768px ke bawah) to prevent overflow  
✅ **Burger menu always visible** dengan consistent height  
✅ **Responsive gaps & font sizes** per breakpoint  
✅ **Clean, compact design** di semua device sizes  

Status: **PRODUCTION READY** 🎉
