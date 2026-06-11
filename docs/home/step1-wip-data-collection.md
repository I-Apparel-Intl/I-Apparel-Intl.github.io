---
id: step1-wip-data-collection
title: Step 1 — WIP Data Collection
---

# 📊 Step 1 — WIP Data Collection
## 📋 Description

This feature is used to collect and record WIP data at each stage of production. It tracks how many pieces are being processed at every workstation.

---

## 🔄 How to Use

### 1️⃣ Step 1 — Open WIP Data Collection

- Tap **WIP Data Collection** from the home menu
- The screen will open showing an Order No selector

<div align="center">
  <img src="/img/k2.png" width="60%" alt="WIP Data Collection - No Data" />
</div>

---

### 2️⃣ Step 2 — Select Order No

- Tap the **Select Order No** dropdown to expand the order list
- Use the **Search** box to quickly find your order
- Select the relevant order number (e.g. **IA13325**)

<div align="center">
  <img src="/img/k3.png" width="60%" alt="Select Order No Dropdown" />
</div>

---

### 3️⃣ Step 3 — View Production Stages

Once an order is selected, the system displays all production stages for that order. Each stage shows:

| Column | Description |
|---|---|
| **RECEIVE** | Quantity received at this stage (tickets / pieces / total \| %) |
| **ISSUE** | Quantity issued from this stage (tickets / pieces / total \| %) |
| **Recovery** | Toggle to enable recovery/re-process mode |

Production stages include:
 🔴 **CUT** — Cutting stage
 🟠 **SEW TRIM** — Sewing & Trimming stage
 🟡 **SEW (ONLINE)** — Online Sewing stage
 🟣 **PMAT** — Post-Manufacturing stage

<div align="center">
  <img src="/img/k22.jpg" width="60%" alt="Order IA13325 - Production Stages" />
</div>

---

### 4️⃣ Step 4 — Record a New RECEIVE Entry

- Under the desired production stage, tap **New** under **RECEIVE**
- The **Instore Factory** form will open
- Select the **Location** (e.g. Loc-CUT-1A) and **Line**
- Scan or enter the bin ticket to record received pieces

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'start'}}>
  <div align="center">
    <img src="/img/k4.png" width="100%" alt="CUT RECEIVE New button highlighted" />
    <p><em>➕ Tap <strong>New</strong> under RECEIVE to open the Instore Factory form</em></p>
  </div>
  <div align="center">
    <img src="/img/k5.png" width="100%" alt="Instore Factory form — select Location and Line" />
    <p><em>📋 Select Location and Line, then scan or enter the bin ticket</em></p>
  </div>
</div>

---

### 5️⃣ Step 5 — View Transaction History (RECEIVE)

To check previously recorded RECEIVE entries, tap the **Transaction** button under the RECEIVE column.

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'start'}}>
  <div align="center">
    <img src="/img/k6.png" width="100%" alt="Transaction Button Highlighted" />
    <p><em>📸 Tap the brown <strong>Transaction</strong> button under RECEIVE to open history</em></p>
  </div>
  <div align="center">
    <img src="/img/k7.png" width="100%" alt="Transaction History Search Form" />
    <p><em>🔍 Transaction History — Use filters to find specific RECEIVE records</em></p>
  </div>
</div>

---

The **Transaction History** screen will open with search filters:

| 🔍 Filter | 📝 Description |
|---|---|
| 🎫 **Bin Ticket** | Select or scan a bin ticket to find a specific batch |
| 👗 **Style No.** | Filter records by garment style number |
| 🎨 **Color** | Narrow results by color variant |
| 🛒 **Buyer PO** | Search by buyer's purchase order number |
| 📅 **Scanned Date Range** | Set a **From Date** and **To Date** to filter by scan date |

**How to search:**
🔽 Select one or more filters from the dropdowns
📅 Optionally set a date range using **From Date** and **To Date**
✅ Tap **SEARCH** (green button) to load matching results
🔄 Tap **RESET** (blue button) to clear all filters and start over

---

### 6️⃣ Step 6 — Record a New ISSUE Entry

- Under the desired production stage, tap **New** under **ISSUE**
- The **Issue Factory** form will open
- Fill in the required fields:

| Field | Description |
|---|---|
| **Department** | Auto-filled (e.g. CUT) |
| **Select Line** | Choose the production line |
| **To Factory** | Select destination factory |
| **Select an option** | Active / Inactive |
| **Remark** | Optional notes |
| **DO Date** | Delivery Order date (auto-filled) |
| **Do Ref.** | Reference number for the DO |

Tap **ISSUE** to confirm, or **PRINT DO** to print the Delivery Order

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'start'}}>
  <div align="center">
    <img src="/img/k8.png" width="100%" alt="CUT ISSUE New Button Highlighted" />
  </div>
  <div align="center">
    <img src="/img/k9.png" width="100%" alt="CUT - ISSUE New Entry Form" />
  </div>
</div>

---

### 7️⃣ Step 7 — FIN Stage — QC Toggle & QC New

The **FIN ផ្នែកបញ្ចប់** (Finishing) stage has a special **QC** feature not available in other stages. It allows QC inspection to be performed directly from the WIP Data Collection screen.

<div align="center">
  <img src="/img/k10.png" width="60%" alt="FIN stage showing QC toggle and QC New button" />
</div>

---

#### 🔘 Enable QC Mode

The **QC toggle** appears in the top-right corner of the FIN stage card.

- Tap the **QC toggle** to switch it **ON** (green)
- When enabled, the ISSUE column is replaced by **QC New** button
- When disabled, the stage behaves like other standard stages

<div align="center">
  <img src="/img/q1.png" width="60%" alt="QC toggle highlighted on FIN stage" />
  <p><em>🔘 Tap the QC toggle (top-right of FIN card) to enable QC mode</em></p>
</div>

---

#### ✅ Record a New QC Entry

When QC mode is ON, tap **QC New** to open a new QC inspection entry for the FIN stage.

<div align="center">
  <img src="/img/q3.png" width="60%" alt="QC New button highlighted on FIN stage" />
  <p><em>✅ Tap <strong>QC New</strong> to start a new QC inspection for the Finishing stage</em></p>
</div>

---

#### 🔲 QC Scanning — QC Endline Checker Form

After tapping **QC New**, the **QC Scanning** screen opens, showing the **QC Endline Checker** (បន្ទាត់ត្រួតពិនិត្យគុណភាព) form.

<div align="center">
  <img src="/img/p2.png" width="60%" alt="QC Scanning — QC Endline Checker form" />
</div>

The form displays the current order at the top and provides the following fields:

| Field | Description |
|---|---|
| 🆔 **Order No** | Auto-filled with the current order number (e.g. IA13690) |
| 📷 **Scan Input Icons** | Three icons to choose input method: Camera photo, QR scanner, or Manual keyboard entry |
| 🔵 **Transaction ប្រតិបត្តិការ** | Tap to view existing QC transaction records for this order |
| 🏭 **Instore Factory** | Factory name auto-filled (e.g. IK Apparel Co. Ltd.) |
| 👤 **Operator** | Auto-filled with logged-in operator (e.g. D000670 — ALAMIS NOEME TENERIFE) |
| 📍 **Select Location** | Dropdown to choose the inspection location (ជ្រើសរើសសីតាំង) |
| 🧵 **Select Sewing Line** | Dropdown to choose the sewing line for this inspection (ជ្រើសរើសបន្ទាត់ដេរ) |

**How to complete the form:**
Verify the **Order No** is correct
Choose your scan method using the icons (📷 camera / 🔲 QR / ⌨️ keyboard)
Select the **Location** from the dropdown
Select the **Sewing Line** from the dropdown
Scan or enter garment codes to record QC inspection results

---

#### 📊 QC Transactions Screen

After tapping **Transaction ប្រតិបត្តិការ** on the QC Scanning screen, the **QC Transactions** screen opens. It displays:

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'start'}}>
  <div align="center">
    <img src="/img/q2.png" width="100%" alt="Transaction button on FIN stage" />
    <p><em>📋 Tap <strong>Transaction</strong> to view FIN QC history</em></p>
  </div>
  <div align="center">
    <img src="/img/p1.jpg" width="100%" alt="QC Transactions screen showing inspection summary and data grid" />
    <p><em>📊 QC Transactions screen — inspection summary and records</em></p>
  </div>
</div>

| Element | Description |
|---|---|
| 🆔 **Operator ID** | Logged-in QC operator (e.g. D010666) |
| 📅 **Date Selector** | Filter QC records by date — tap the refresh icon to reload |
| 🔵 **Total Inspection** | Total number of garments inspected (ការត្រួតពិនិត្យសរុប) |
| 🟢 **Total Pass** | Number of garments that passed QC (ផ្នែកសរុប) |
| 🔴 **Total Defect** | Number of garments with defects (សរុបអោសរគំហុស) |
| 🥧 **Pie Chart** | Visual breakdown of Pass vs Defect ratio |
| 📋 **Records Grid** | Detailed list of all QC inspection records with columns: Location, Order No, Garment Code, Status, Rework, Timestamp |
| 🔍 **Search / Filter** | Search box and column filters to narrow down records |
| 📄 **Pagination** | Control how many rows display per page (10 / 15 / 30 / 50) |

---

## ✅ Summary

| Action | Button | Result |
|---|---|---|
| Add received pieces | **New** (RECEIVE) | Opens Instore Factory form |
| View receive history | **Transaction** (RECEIVE) | Opens Transaction History |
| Issue pieces to next stage | **New** (ISSUE) | Opens Issue Factory form |
| View issue history | **Transaction** (ISSUE) | Opens Transaction History |
| Enable re-processing | **Recovery** toggle | Activates recovery mode |
| Enable QC inspection (FIN only) | **QC** toggle | Switches FIN stage to QC mode |
| Start new QC inspection (FIN only) | **QC New** | Opens QC Endline Checker scan form |
| Scan garments for QC (FIN only) | **Camera / QR / Keyboard** icons | Select input method on QC Scanning screen |
| View QC inspection history (FIN only) | **Transaction** (QC Scanning) | Opens QC Transactions screen |