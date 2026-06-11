---
id: step-wip-hourly-output
title: WIP Hourly Output
---

# 📈 WIP Hourly Output

**Monitor real-time production performance, efficiency, defects, and issues — hour by hour.**

---

## 📋 Description

The **WIP Hourly Output** screen is a **live production monitoring dashboard**. It shows how many pieces are being produced each hour compared to the target, tracks defect rates, and summarizes daily performance.

:::info 👥 Who uses this screen?
**Line Leaders** — to monitor their line's hourly performance
**Supervisors** — to compare lines and identify problems early
**QC Team** — to track defect rates and types in real time
:::

:::tip 🎯 Main Purpose
Spot production problems **early** — before they affect the daily target — and take corrective action immediately.
:::

---

## 🖥️ Screen Overview (Empty State)

When you first open the screen — before selecting a Line or Order — all values show **0** and the chart is empty.

<div align="center">
  <img src="/img/h1.png" width="60%" alt="WIP Hourly Output - Empty State" />
</div>

> 📸 *WIP Hourly Output screen before selecting a Line and Order No*

---

### 🔧 Top Bar Controls

| 🔘 Control | 🎨 Color | 📝 Description |
|---|---|---|
| **LINE** | ⬛ Dark button | Tap to select the production line you want to monitor |
| 🇬🇧 🇰🇭 Flag icons | — | Switch display language between English and Khmer |
| 📅 Date & Time | ⬛ Dark background | Shows the current live date and clock — auto updates |
| 🖨️ **Print** | 🟦 Teal / Cyan | Tap to print the current hourly output report |
| 🔄 **Refresh** | 🟦 Teal / Cyan | Tap to reload the latest data from the server |

:::caution ⏰ Always Refresh First
Always tap **🔄 Refresh** before reading data to make sure you are viewing the **most current figures**.
:::

---

### 📊 Header Summary Fields

These fields appear at the top after selecting a Line and Order:

| 📌 Field | 🎨 Color | 📝 Description |
|---|---|---|
| **ORDER NO** | ⬜ White | The active production order number — tap to change order |
| **STYLE #** | ⬜ White | The garment style number for this order |
| **SMV** | ⬜ White | Standard Minute Value — time in minutes to sew one piece |
| **CUT QTY** | ⬜ White | Total quantity of pieces cut for this order |
| **ALLOCATED QTY** | ⬜ White | Number of pieces officially assigned to this line |
| **ACCUM QTY** | ⬜ White | Cumulative quantity received on the line so far (all days) |
| **ACCUM. CUT PIECE LOAD** | ⬜ White | Total cut pieces loaded onto the line — cumulative |
| **ACCUM. OUTPUT** | ⬜ White | Total pieces finished and output from the line — cumulative |
| **BALANCE QTY** | 🟥 **Red** | Remaining pieces still to be produced ⚠️ Red = behind target |

:::danger 🔴 BALANCE QTY — Red Alert
When **BALANCE QTY** is shown in **red**, the line is **behind schedule**. Immediate action is needed to catch up with the daily target.
:::

:::info 📐 What is SMV?
**SMV (Standard Minute Value)** is the official time, in minutes, it should take one operator to sew one complete piece.
Example: SMV = **5.2110** means each piece takes approximately **5 minutes 13 seconds**
The system uses SMV to calculate **hourly targets** and **efficiency percentages**
:::

---

## 📉 Bottom Section (Scrolled Down — Empty State)

Scroll down to see the **Defect Details** panel, **Daily Summary cards**, and the **Hourly Breakdown Table**.

<div align="center">
  <img src="/img/h2.png" width="60%" alt="WIP Hourly Output - Bottom Section Empty" />
</div>

> 📸 *Bottom section — Defect Details, Daily Summary cards, and Hourly Table — all empty before production data is entered*

---

### 🔴 Defect Details Panel

| 🟩 Card | 🎨 Color | 📝 Description |
|---|---|---|
| **TOTAL OUTPUT** | 🟩 **Green** | Total pieces produced and passed quality check today |
| **TOTAL DEFECT** | 🟥 **Red** | Total pieces found with defects today |
| **DEFECT %** | 🟧 **Orange** | Percentage of defective pieces out of total output |

:::tip 🎯 Defect % Target Guide
| Defect % | 🎨 Status | Action |
|---|---|---|
| Below 2% | 🟢 Good | Maintain current quality control |
| 2% – 5% | 🟡 Monitor | Watch closely, investigate defect types |
| Above 5% | 🔴 Critical | Immediate action — review operators, materials, machines |
:::

**Below the summary cards:**
🔵 **TOP DEFECT** *(blue header)* — Lists the **most common defect types** found today with count and percentage
🟦 **TOP ISSUES** *(teal header)* — Lists the **root cause categories** behind defects: Human, Material, Machine

---

### 🟦 Daily Summary Cards

| 🟦 Card | 🎨 Color | 📝 Description |
|---|---|---|
| **DAILY TARGET OUTPUT** | 🔵 **Blue** | Planned pieces to produce today based on shift hours |
| **TOTAL OUTPUT** | 🟩 **Green** | Actual pieces produced today so far |
| **TOTAL CUT-PIECE LOAD** | ⬜ **Grey** | Total cut pieces loaded to the line today |
| **TOTAL INPUT** | ⬜ **Grey** | Total pieces entered into the sewing process today |
| **TOTAL REJECT** | 🟥 **Red** | Total pieces rejected by QC today |
| **ACHIEVED EFFICIENCY (TO HOUR)** | 🟧 **Orange** | Actual efficiency % from start of shift up to current time |
| **TARGET EFFICIENCY** | 🟧 **Orange** | The efficiency % the line is expected to reach today |

:::warning ⚠️ Efficiency Gap Warning
If **ACHIEVED EFFICIENCY** is much lower than **TARGET EFFICIENCY**, the line is underperforming. Check the hourly chart to find which hours had low output and investigate why.
:::

---

### 📋 Hourly Breakdown Table

The table shows **performance for each 1-hour slot** from **07:00 to 18:00**:

| 📌 Row | 🎨 Color | 📝 Description |
|---|---|---|
| **SMV Qty \| % target** | ⬜ White | Planned pieces per hour = SMV × operators × target efficiency % |
| **Input** | ⬜ White | Pieces fed into the sewing line during that hour |
| **Cut-Piece Load** | ⬜ White | Cut pieces physically loaded to the line that hour |
| **Output (PD: X day(s))** | ⬜ White | Pieces completed that hour *(PD = number of production days this order has been running)* |
| **Efficiency (To Hour)** | 🟩 **Green** | Cumulative efficiency % from start of shift up to end of that hour |
| **Reject** | ⬜ White | Number of defective pieces found during that hour |
| **RFT %** | ⬜ White | **Right First Time %** — pieces passing QC without any rework |

:::info 💡 What is RFT %?
**RFT (Right First Time)** = the piece was sewn correctly on the **first attempt** — no rework or repair needed.
| RFT % | 🎨 Status | Meaning |
|---|---|---|
| 100% | 🟢 Perfect | Zero defects that hour |
| 95% – 99% | 🟡 Good | Small number of defects — monitor |
| Below 90% | 🔴 Action needed | High rework rate — investigate operator and process |
:::

---

## ✅ Live Data Example — LINE 14 / Order IA16235

After selecting **LINE 14** and **Order IA16235**, the dashboard fills with real production data.

<div align="center">
  <img src="/img/h3.png" width="60%" alt="WIP Hourly Output - LINE 14 Live Data" />
</div>

> 📸 *LINE 14 live monitoring — Order IA16235 showing hourly chart and defect details*

---

### 📊 Live Header Summary — Explained

| 📌 Field | 🔢 Value | 🎨 Color | 📝 What It Means |
|---|---|---|---|
| **ORDER NO** | IA16235 | ⬜ White | The order currently being produced on LINE 14 |
| **STYLE #** | 1852 | ⬜ White | Garment style assigned to this order |
| **SMV** | 5.2110 | ⬜ White | Each piece takes approx. **5 min 13 sec** to sew |
| **CUT QTY** | 109,376 | ⬜ White | Total pieces cut and available for this order |
| **ALLOCATED QTY** | 86,557 | ⬜ White | Pieces officially allocated to LINE 14 |
| **ACCUM QTY** | 70,904 *(-15,653)* | ⬜ White | 🔴 **15,653 fewer** pieces received than planned |
| **ACCUM. CUT PIECE LOAD** | 2,771 *(-68,133)* | ⬜ White | 🔴 **68,133 fewer** cut pieces loaded than planned |
| **ACCUM. OUTPUT** | 70,179 *(-725)* | ⬜ White | 🔴 **725 fewer** pieces output than planned |
| **BALANCE QTY** | **16,378** | 🟥 **Red** | 🚨 **16,378 pieces still remaining** — behind schedule |

:::danger 🚨 Understanding Negative Numbers ( )
Numbers in **( )** brackets with a minus sign = the line is **behind the planned cumulative target**.

| Field | Negative Value | Meaning |
|---|---|---|
| ACCUM QTY | -15,653 | 15,653 fewer pieces received than plan |
| ACCUM. CUT PIECE LOAD | -68,133 | 68,133 fewer cut pieces loaded than plan |
| ACCUM. OUTPUT | -725 | 725 fewer pieces output than plan |

The **larger the negative number**, the further behind the line is from the overall production plan.
:::

---

## 📊 Hourly Output Chart

<div align="center">
  <img src="/img/h4.png" width="60%" alt="WIP Hourly Output - Chart with Tooltip" />
</div>

> 📸 *Tap any bar on the chart to open a tooltip showing detailed data for that specific hour*

---

### 📈 Chart Color Legend

| 🎨 Color | 📌 Element | 📝 Meaning |
|---|---|---|
| 🔵 **Blue bars** | Hourly Target | Planned pieces to produce each hour |
| 🟢 **Green bars** | Hourly Output | Actual pieces produced each hour |
| 🟠 **Orange line** | Efficiency (To Hour) | Cumulative efficiency % — rises through the shift |
| 🟡 **Yellow dashed line** | Target Efficiency | The efficiency goal — orange line should stay above this |

:::tip 📊 How to Read the Chart Quickly
| What You See | 🎨 Signal | What It Means |
|---|---|---|
| 🟢 Green bar = 🔵 Blue bar | ✅ On target | Good — that hour met the target |
| 🟢 Green bar < 🔵 Blue bar | ⚠️ Below target | Output was lower than planned — investigate |
| 🟢 Green bar = 0 | 🔴 No output | Break time, machine downtime, or data not entered |
| 🟠 Orange line rising | 📈 Improving | Efficiency building through the day — normal pattern |
| 🟠 Orange below 🟡 Yellow | ⚠️ Below target | Line efficiency is not meeting the goal |
:::

---

### 🖱️ Interactive Tooltip — Tap Any Bar

Tap any bar on the chart to open a **popup tooltip** for that specific hour:

| 📌 Field | 🎨 Dot Color | 🔢 Example | 📝 Description |
|---|---|---|---|
| **Time slot** | — | 14:00 – 15:00 | The 1-hour period this data covers |
| **Hourly Target** | 🔵 Blue dot | 188 pieces | Planned pieces for this hour |
| **Hourly Output** | 🟢 Green dot | 0 pieces | Actual pieces produced this hour |
| **Efficiency (To Hour)** | 🟠 Orange dot | 55% | Cumulative efficiency up to this hour |
| **Target Efficiency** | 🟡 Yellow dot | 70% | The shift efficiency goal |

:::warning ⚠️ Hourly Output = 0 Outside Break Time?
| Time Slot | Output = 0 | Likely Reason | Action |
|---|---|---|---|
| 11:00–12:00 | 0 | 🍽️ Lunch break | Expected — no action |
| Any other hour | 0 | Machine breakdown / material shortage / absent operators | Investigate immediately |
:::

---

## 🔎 Defect & Issue Details (Live Example)

<div align="center">
  <img src="/img/h5.png" width="60%" alt="WIP Hourly Output - Full Bottom Section" />
</div>

> 📸 *Full bottom section — Defect summary, Top Defects, Top Issues, Daily Summary cards, and Hourly Breakdown Table*

---

### 🔴 Live Defect Summary Cards

| 🟩 Card | 🎨 Color | 🔢 Value | 📝 Meaning |
|---|---|---|---|
| **TOTAL OUTPUT** | 🟩 **Green** | **753** | 753 pieces produced and passed QC today |
| **TOTAL DEFECT** | 🟥 **Red** | **27** | 27 pieces had defects and were flagged |
| **DEFECT %** | 🟧 **Orange** | **3.59%** | 3.59% of today's output was defective |

---

### 🔵 Top Defects — Most Common Defect Types

### Top Defects — Most Common Defect Types

| Rank | Defect Type | Count | % |
|---|---|---|---|
| 1st | **Uneven Seam** | 7 | 21.21% |
| 2nd | **Raw Edge** | 5 | 15.15% |
| 3rd | **Untrim Thread** | 5 | 15.15% |

:::tip 💡 Action Guide for Top Defects
| Defect | Likely Cause | Suggested Action |
|---|---|---|
| **Uneven Seam** | Operator not following seam guide | Retrain operator, check guide alignment |
| **Raw Edge** | Fabric fraying / cutting issue | Check cutting quality, edge finishing |
| **Untrim Thread** | Operator skipping trim step | Remind operator, add QC checkpoint |

Always fix the **#1 defect first** — it has the biggest impact on defect rate.
:::

---

### 🟦 Top Issues — Root Cause Categories

| ⚠️ Issue Category | 🎨 Bar | 🔢 Count | 📊 % | 📝 Meaning |
|---|---|---|---|---|
| **Human Issue** | 🔵 Long bar | 27 | 81.82% | Defects caused by **operator error** |
| **Material Issue** | 🔵 Short bar | 5 | 15.15% | Defects caused by **fabric or trim problems** |
| **Machine Issue** | 🔵 Tiny bar | 1 | 3.03% | Defects caused by **machine malfunction** |

:::danger 🚨 Human Issue = 81.82% — What to Do
When Human Issue is above **70%**, it means most problems come from operators:

| Step | Action |
|---|---|
| 1️⃣ | Supervisor does a **floor walk** — observe operators directly |
| 2️⃣ | Identify **which operators** have the most personal defects |
| 3️⃣ | Provide **on-the-spot coaching** or retraining |
| 4️⃣ | Assign a **quality buddy** to high-defect operators |
| 5️⃣ | Monitor next hour to check if defect rate improves |
:::

---

### 🟦 Live Daily Summary Cards

| 📌 Card | 🎨 Color | 🔢 Value | 📝 Meaning |
|---|---|---|---|
| **DAILY TARGET OUTPUT (10 HRS)** | 🔵 **Blue** | 1,612 *(2,303)* | Target for 10-hr shift; 2,303 = full available capacity |
| **TOTAL OUTPUT** | 🟩 **Green** | **753** | Actual pieces produced today so far |
| **TOTAL CUT-PIECE LOAD** | ⬜ **Grey** | **0** | ⚠️ No cut pieces loaded today — possible supply issue |
| **TOTAL INPUT** | ⬜ **Grey** | **783** | 783 pieces entered into sewing today |
| **TOTAL REJECT** | 🟥 **Red** | **27** | 27 pieces rejected by QC — needs investigation |
| **ACHIEVED EFFICIENCY (TO HOUR)** | 🟧 **Orange** | **54.5%** | Actual efficiency from 07:00 up to now |
| **TARGET EFFICIENCY** | 🟧 **Orange** | **70%** | The efficiency goal for today's shift |

:::danger 🔴 Efficiency Alert — 54.5% vs Target 70%
The line is **15.5 percentage points below target**. At this rate:
The daily target of **1,612 pieces will not be met**
Projected output at 54.5% efficiency = approximately **1,250 pieces** only

**Immediate actions to consider:**
| Priority | Action |
|---|---|
| 🔴 High | Check if all operators are present (absenteeism) |
| 🔴 High | Check if machines are running (no downtime) |
| 🟡 Medium | Check cut-piece supply (TOTAL CUT-PIECE LOAD = 0) |
| 🟡 Medium | Review operator performance vs individual targets |
:::

---

### 📋 Live Hourly Breakdown Table

| 🕒 Time | SMV Target | Input | Output | Efficiency | Reject | RFT % |
|---|---|---|---|---|---|---|
| **07:00–08:00** | 161 | 0 | 65 | 🟩 28% | 7 | 89.23% |
| **08:00–09:00** | 171 | 259 | 116 | 🟩 39% | 4 | 96.55% |
| **09:00–10:00** | 177 | 0 | 137 | 🟩 46% | 5 | 96.35% |
| **10:00–11:00** | 182 | 247 | 161 | 🟩 52% | 8 | 95.03% |
| **11:00–12:00** | 0 | 0 | 0 | 🟩 52% | 0 | — *(lunch break)* |
| **12:00–13:00** | 185 | 0 | 167 | 🟩 56% | 3 | 98.20% |
| **13:00–14:00** | 188 | 277 | 107 | 🟩 55% | 0 | 100% ✅ |

:::info 💡 Reading This Table — Key Observations

| 🕒 Hour | 📊 Observation | 📝 Meaning | Action |
|---|---|---|---|
| 07:00–08:00 | Output 65 vs Target 161 | Slow start — operators warming up | Normal — monitor next hour |
| 08:00–09:00 | Input 259, Output 116 | Good input supply, output ramping up | On track |
| 10:00–11:00 | Reject = 8 (highest hour) | Most defects occurred this hour | Investigate what happened |
| 11:00–12:00 | All zeros | 🍽️ Lunch break | Expected — no action |
| 13:00–14:00 | Output 107 vs Target 188 | Post-lunch dip | Check if all operators returned on time |
| 13:00–14:00 | RFT = 100% ✅ | Zero defects that hour | Excellent quality — recognize the team |
| Efficiency 28% → 56% | Rising through the day | Normal warm-up pattern | Continue monitoring |
:::

---

## ✅ Quick Reference Summary

| 🎯 What to Check | 📌 Where to Look | 🎨 Color Signal | ⚠️ Alert Condition |
|---|---|---|---|
| Are we on daily target? | **BALANCE QTY** | 🟥 Red = behind | Any red BALANCE QTY |
| Line efficiency status | **ACHIEVED vs TARGET EFFICIENCY** | 🟧 Orange cards | Gap > 10% needs action |
| Which hour had low output? | **Hourly Chart** — green vs blue bars | 🟢 Green bars short = problem | Green bar = 0 outside break |
| Most common defect? | **TOP DEFECT list** | 🔵 Longest blue bar = worst | Defect % above 5% |
| Root cause of defects? | **TOP ISSUES list** | 🔵 Longest bar = main cause | Human Issue above 70% |
| Full hour-by-hour detail | **Hourly Breakdown Table** | 🟩 Green = efficiency % | Efficiency dropping between hours |
| Today's totals at a glance | **Daily Summary Cards** | 🟩🟥🟧 color-coded | TOTAL REJECT rising |