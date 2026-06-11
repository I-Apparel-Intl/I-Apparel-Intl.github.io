---
id: step5-wip-ticket-tracking-component-checklist
title: Component Checklist
---

# 🗂️ Component Checklist

**Scan a WIP ticket QR code to retrieve and complete the component checklist for quality control.**

---

## 📋 Description

The **Component Checklist** feature allows QC staff to verify garment components at key production checkpoints. Each WIP ticket is linked to a checklist that is retrieved by scanning the ticket's QR code. Staff can select a checkpoint, add remarks, and save the result directly from the app.

---

## 🔄 How to Use

### 1️⃣ Step 1 — Open Component Checklist

- From the **Home Menu**, tap **WIP Ticket Tracking**
- The menu will expand to show sub-options
- Tap **Component Checklist** (បញ្ជីត្រួតពិនិត្យ)

<div align="center">
  <img src="/img/T1.png" width="60%" alt="Component Checklist Menu" />
</div>

---

### 2️⃣ Step 2 — View the Checklist Screen

The **Component Checklist** screen opens. Until a ticket is scanned it will show:

> *"No component checklist available. Please scan a ticket."*
> មិនមានបញ្ជីត្រួតពិនិត្យសម្រាប់សមាសភាគទេ។ សូមស្កែនសំបុត្រ។

<div align="center">
  <img src="/img/T3.png" width="60%" alt="Empty Component Checklist screen" />
</div>

- Tap the 🔲 **QR icon** in the top-right corner to open the camera scanner

---

### 3️⃣ Step 3 — Locate the WIP Ticket QR Label

Find the printed QR label attached to the garment bundle. Each label contains:

| Field | Example |
|---|---|
| **Duration** | 3 MONTHS |
| **Color** | LRG SN PRN |
| **Order** | 15911 TOPTOPS |
| **Ticket No** | #1-A-1-10 |
| **Type** | (QC) |

<div align="center">
  <img src="/img/QR.png" width="80%" alt="Row of printed WIP QC ticket labels" />
  <p><em>🏷️ Printed QC ticket labels — each has a unique QR code</em></p>
</div>

---

### 4️⃣ Step 4 — Scan the QR Code

- Hold the device **15–20 cm** from the QR code label
- The camera will auto-focus and read the code automatically
- Ensure good lighting for a successful scan

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'start'}}>
  <div align="center">
    <img src="/img/T4.jpg" width="100%" alt="Camera scanning QR code" />
    <p><em>📷 Point camera at the QR label to scan</em></p>
  </div>
  <div align="center">
    <img src="/img/QR.png" width="100%" alt="WIP ticket QR label" />
    <p><em>🏷️ Align the QR code within the scanner frame</em></p>
  </div>
</div>

---

### 5️⃣ Step 5 — Review Ticket Details

After a successful scan, the ticket details load at the top of the screen. Verify they match the physical label:

<div align="center">
  <img src="/img/he.png" width="60%" alt="ម៉ឺនុយបញ្ជីត្រួតពិនិត្យ" />
</div>


| Field | Example |
|---|---|
| **Order No** | IA15911 |
| **Buyer PO** | 15949543 (BL6UP817KPG) BM HANG |
| **Style No** | BL6UP817_TOPS |
| **Color Name** | LRG SN PRN |
| **Ticket No** | IA15911-1-A-1-10 (51) |

---

### 6️⃣ Step 6 — Select Checkpoint

- Tap the **Select Checkpoint** dropdown (ជ្រើសរើសសំណួរត្រួតពិនិត្យថ្មីមួយ)
- A searchable list will appear with all available checkpoint categories
- Scroll or use the **Search** field to find the correct category
- Tap the category name to select it

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'start'}}>
  <div align="center">
    <img src="/img/T6.png" width="100%" alt="Select Checkpoint dropdown highlighted" />
    <p><em>📌 Tap Select Checkpoint to open the category list</em></p>
  </div>
  <div align="center">
    <img src="/img/Tl.jpg" width="100%" alt="Checkpoint category dropdown list" />
    <p><em>🔍 Search or scroll to choose a checkpoint category</em></p>
  </div>
</div>

Available checkpoint categories include:

| Category | Khmer |
|---|---|
| **CUT** កាត់ 裁剪 | Cutting |
| **EMB** ថាក់ 绣花 | Embroidery |
| **SEW TRIM** ដេរកាត់ | Sewing Trim |
| **SEW (OFFLINE)** ដេរ (អហ្វឡាញ) | Sewing Offline |
| **SEW (ONLINE)** ដេរ (អនឡាញ) | Sewing Online |
| **FIN** វេដ្ឋកបញ្ចប់ | Finishing |
| **Pick N Pack** ការដេចខ្ចប់ | Pick & Pack |
| **C-TPAT** ការក្ស | C-TPAT |

:::warning Error — No Data Found
If the selected checkpoint has **no data configured** for that ticket, the app will show:

**"Error! កំហុស — No Data found."**

Tap **OK** to dismiss and try a different checkpoint category.

<div align="center">
  <img src="/img/Te.jpg" width="60%" alt="Error dialog — No Data found" />
</div>
:::

---

### 7️⃣ Step 7 — Complete Checklist Items

After selecting a valid checkpoint, the checklist item appears. For each item:

1. **Review the item label** — e.g. *9.10 TOP-SHORT ENTIRE BODY*
2. **Tap the Remarks field** — the on-screen keyboard opens automatically
3. **Type your observation** using the keyboard (e.g. a measurement value like `9`)
4. Tap **Done** on the keyboard to close it
5. **Tap the radio button** ⚪ on the right to mark the item — it turns into a blue checkmark ✅

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'start'}}>
  <div align="center">
    <img src="/img/T7.png" width="100%" alt="Typing remarks with on-screen keyboard" />
    <p><em>⌨️ Tap the Remarks field — keyboard opens to type observations</em></p>
  </div>
 
</div>

| Element | Description |
|---|---|
| **Item Label** | Name of the quality checkpoint (e.g. 9.10 TOP-SHORT ENTIRE BODY) |
| **Remarks field** | Tap to open the keyboard and type observations, values, or defect notes |
| **Radio button ⚪ → ✅** | Tap once to mark item — button turns blue to confirm |

---

### 8️⃣ Step 8 — Save the Checklist

- Review all completed checklist items
- Tap the 🔵 **Save** button at the bottom of the screen to submit

<div align="center">
  <img src="/img/save.png" width="60%" alt="Save button at bottom of checklist" />
  <p><em>💾 Tap Save to submit the completed checklist</em></p>
</div>

:::tip
Data is saved to the server in real time. Ensure you have an active Wi-Fi or mobile data connection before tapping Save.
:::

---

## 🎛️ Screen Elements Reference

| Element | Description |
|---|---|
| **QR Icon (top-right)** | Opens camera to scan a WIP ticket |
| **Select Checkpoint** | Dropdown to choose the inspection checkpoint |
| **Order No** | Production order number — auto-filled after scan |
| **Buyer PO** | Buyer purchase order reference — auto-filled after scan |
| **Style No** | Garment style number — auto-filled after scan |
| **Color Name** | Color variant — auto-filled after scan |
| **Ticket No** | Unique WIP ticket identifier — auto-filled after scan |
| **Item Label** | Checklist item name for the selected checkpoint |
| **Remarks field** | Keyboard input for observations or defect notes |
| **Radio Button ⚪ → ✅** | Tap to mark item — turns blue when confirmed |
| **Save Button** | Submits the completed checklist to the server |

---

## ❗ Troubleshooting

| Issue | Solution |
|---|---|
| QR code not scanning | Ensure good lighting; clean camera lens; hold steady 15–20 cm away |
| Wrong ticket details loaded | Tap the QR icon again and rescan the correct ticket label |
| No component checklist available | The order may not have a checklist configured — contact your supervisor |
| Checklist items not appearing | Select a checkpoint from the dropdown — items only appear after a checkpoint is chosen |
| "Error! No Data found." dialog | No checklist is configured for that checkpoint on this ticket — tap OK and select a different category |
| Save button not responding | Check Wi-Fi or mobile data connection and try again |

---

## ✅ Summary

| Action | Element | Result |
|---|---|---|
| Open scanner | **QR icon** (top-right) | Camera opens to scan ticket |
| Load checklist | Scan WIP ticket QR | Ticket details and checklist items load |
| Choose inspection point | **Select Checkpoint** dropdown | Checklist items appear for that checkpoint |
| Type observation | **Remarks field** + keyboard | Observation recorded for the checklist item |
| Mark item status | **Radio button ⚪ → ✅** | Button turns blue to confirm item is marked |
| Submit checklist | **Save** button | Checklist saved to server |