---
id: step5-wip-ticket-tracking-qr-traceability
title: QR Traceability
---

# 🔍 QR Traceability

**Scan a WIP ticket QR code to instantly retrieve full supply chain traceability — from raw materials to final packing.**

---

## 📋 Description

The **QR Traceability** feature allows production and QC staff to trace the complete history of a garment bundle by scanning its WIP ticket QR code. The app displays order information, fabric sourcing, certification details, and a full factory production trail for that specific bundle.

---

## 🔄 How to Use

### 1️⃣ Step 1 — Open QR Traceability

- From the **Home Menu**, tap **WIP Ticket Tracking**
- The menu will expand to show sub-options
- Tap **QR Traceability** (ការតាមដាន QR)

<div align="center">
  <img src="/img/t01.png" width="60%" alt="WIP Ticket Tracking menu with QR Traceability highlighted" />
</div>

---

### 2️⃣ Step 2 — View the QR Traceability Screen

The **QR Traceability** screen opens. Until a ticket is scanned it will show:

> *"No ticket details available. Please scan a ticket."*
> មិនមានព័ត៌មានលម្អិតអំពីសំបុត្រទេ។ សូមស្កែនសំបុត្រ។

<div align="center">
  <img src="/img/T2.png" width="60%" alt="Empty QR Traceability screen" />
</div>

- Tap the 🔲 **QR icon** in the top-right corner to open the camera scanner

---

### 3️⃣ Step 3 — Locate the WIP Ticket QR Label

Find the printed QR label attached to the garment bundle. Each label contains:

| Field | Example |
|---|---|
| **Size** | 3 MONTHS |
| **Color** | LRG SN PRN |
| **Order** | 15911 TOPTOPS |
| **Ticket No** | #1-A-1-10 |
| **Type** | (QC) |

---

### 4️⃣ Step 4 — Scan the QR Code

- Hold the device **15–20 cm** from the QR code label
- The camera will auto-focus and read the code automatically
- Ensure good lighting for a successful scan

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'start'}}>

 <div align="center">
    <img src="/img/T4.jpg" width="100%" alt="Camera scanning QR code on WIP label" />
    <p><em>📷 Point camera at the QR label to scan</em></p>
  </div>
  <div align="center">
    <img src="/img/QR.png" width="100%" alt="Row of printed WIP QC ticket labels" />
    <p><em>🏷️ Printed QC ticket labels — each has a unique QR code</em></p>
  </div>
 
</div>

---

### 5️⃣ Step 5 — Review Traceability Details

After a successful scan, the full traceability record loads on screen. Verify the order details match the physical label:

<div align="center">
  <img src="/img/d1.png" width="60%" alt="QR Traceability result screen showing order and factory details" />
</div>

The details are grouped into the following sections:

---

## 📦 Order Information

| Field | Example |
|---|---|
| **Order No** | IA15911 |
| **Style** | BL6UP817_TOPS |
| **Color** | LRG SN PRN |
| **Size** | 3 MONTHS |
| **Buyer PO** | 15949543 |
| **Shipment Date** | 2026-01-12 |

---

## 🌱 Farm → Yarn Information

Displays the sustainability or origin certification for the raw yarn used in this order.

| Field | Description |
|---|---|
| **Certificate** | Certification type (e.g. GOTS, OCS) |
| **Certificate No** | Certificate reference number |
| **Certificate Supplier** | Issuing supplier name |
| **Certificate Country** | Country of certification |

:::note
These fields may be blank if traceability data has not been entered for the raw material stage.
:::

---

## 🧵 Fabric Information

| Field | Example |
|---|---|
| **Fabric Supplier** | JIANGSU GOLDEN MORNING KNITTING CO., LTD |
| **Fabric Certificate** | *(if applicable)* |
| **Fabric Country** | CHINA |
| **Fabrication** | 83% ORGANIC COTTON 17% RECYCLED POLYESTER |

---

## 🪡 PEW (Process / Embellishment / Wash)

| Field | Example |
|---|---|
| **Embroidery** | W EMBELLISHMENT LTD |

---

## 🏭 Factory — Production Trail

The production trail lists every operator and date for each stage of manufacturing:

| Stage | Example |
|---|---|
| **Production (Factory)** | COZI KNIT CO., LTD |
| **CUT** កាត់ 裁剪 | PHAL CHANDARA — 2025-12-25 |
| **SEW TRIM** ដេរកាត់ | DUONG SIDEN — 2025-12-25 |
| **SEW (OFFLINE)** ដេរ (អហ្វឡាញ) | TOEUN BEN — 2026-01-13 |
| **SEW (ONLINE)** ដេរ (អនឡាញ) | CHORN SREYNEAT — 2026-01-13 · Line 17 |
| **FIN** វេដ្ឋកបញ្ចប់ | SOK LIS — 2026-01-14 |
| **Pick N Pack** ការដេចខ្ចប់ | NOEM RAVUTH — 2026-01-15 |

---

## 🎛️ Screen Elements Reference

| Element | Description |
|---|---|
| **QR Icon (top-right)** | Opens camera to scan a WIP ticket |
| **Order Information** | Core order details — auto-filled after scan |
| **Farm → Yarn Information** | Raw material certificate details |
| **Fabric Information** | Fabric supplier, country, and composition |
| **PEW** | Embellishment / embroidery sub-contractor |
| **Factory** | Full operator-level production trail per stage |

---

## ❗ Troubleshooting

| Issue | Solution |
|---|---|
| QR code not scanning | Ensure good lighting; clean camera lens; hold steady 15–20 cm away |
| Wrong ticket details loaded | Tap the QR icon again and rescan the correct ticket label |
| "No ticket details available" after scan | The ticket may not be registered in the system — contact your supervisor |
| Fabric or Farm fields are blank | Traceability data for that stage has not yet been entered in the system |
| Screen does not update after scan | Close and reopen the QR Traceability screen, then scan again |

---

## ✅ Summary

| Action | Element | Result |
|---|---|---|
| Open scanner | **QR icon** (top-right) | Camera opens to scan ticket |
| Load traceability | Scan WIP ticket QR | Full traceability record loads on screen |
| Check order details | **Order Information** section | Verify order, style, color, size, and shipment date |
| Check material sourcing | **Farm → Yarn** and **Fabric** sections | View certificates, supplier, country, and composition |
| Check production trail | **Factory** section | View operator name and date for every production stage |