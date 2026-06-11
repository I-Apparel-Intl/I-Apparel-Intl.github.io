---
id: step-wip-hourly-output
title: ទិន្នផលប្រចាំម៉ោង WIP / WIP Hourly Output
---

# 📈 ទិន្នផលប្រចាំម៉ោង WIP / WIP Hourly Output

**តាមដានលទ្ធផលផលិតកម្មជាក់ស្តែង ប្រសិទ្ធភាព ផលិតផលខូច និងបញ្ហាផ្សេងៗ — ម៉ោងម្តងៗ។**
**Monitor real-time production performance, efficiency, defects, and issues — hour by hour.**

---

## 📋 ការពិពណ៌នា / Description

ផ្ទាំង **ទិន្នផលប្រចាំម៉ោង WIP (WIP Hourly Output)** គឺជា **ផ្ទាំងគ្រប់គ្រងការតាមដានផលិតកម្មផ្ទាល់ (Live)**។ វាបង្ហាញពីចំនួនផលិតផលដែលត្រូវបានផលិតក្នុងមួយម៉ោងធៀបនឹងគោលដៅ តាមដានអត្រាផលិតផលខូច និងសង្ខេបលទ្ធផលការងារប្រចាំថ្ងៃ។

The **WIP Hourly Output** screen is a **live production monitoring dashboard**. It shows how many pieces are being produced each hour compared to the target, tracks defect rates, and summarizes daily performance.

:::info 👥 អ្នកណាខ្លះប្រើប្រាស់ផ្ទាំងនេះ? / Who uses this screen?
**ប្រធានក្រុម (Line Leaders)** — ដើម្បីតាមដានលទ្ធផលការងារប្រចាំម៉ោងនៃខ្សែសង្វាក់ផលិតកម្មរបស់ពួកគេ / To monitor their line's hourly performance.
**អ្នកត្រួតពិនិត្យ (Supervisors)** — ដើម្បីប្រៀបធៀបខ្សែសង្វាក់ផលិតកម្មនីមួយៗ និងស្វែងរកបញ្ហាឱ្យបានទាន់ពេលវេលា / To compare lines and identify problems early.
**ក្រុម QC (QC Team)** — ដើម្បីតាមដានអត្រានិងប្រភេទផលិតផលខូចក្នុងពេលជាក់ស្តែង / To track defect rates and types in real time.
:::

:::tip 🎯 គោលបំណងចម្បង / Main Purpose
ស្វែងរកបញ្ហាផលិតកម្ម **ឱ្យបានមុន** — មុនពេលវាប៉ះពាល់ដល់គោលដៅប្រចាំថ្ងៃ — និងចាត់វិធានការកែតម្រូវភ្លាមៗ។
Spot production problems **early** — before they affect the daily target — and take corrective action immediately.
:::

---

## 🖥️ ទិដ្ឋភាពទូទៅនៃផ្ទាំង - ស្ថានភាពទទេ / Screen Overview (Empty State)

នៅពេលអ្នកបើកផ្ទាំងនេះដំបូង — មុនពេលជ្រើសរើសខ្សែសង្វាក់ផលិតកម្ម (Line) ឬលេខបញ្ជាទិញ (Order) — រាល់តម្លៃទាំងអស់បង្ហាញ **0** ហើយគំនូសតាងគឺទទេ។
When you first open the screen — before selecting a Line or Order — all values show **0** and the chart is empty.

<div align="center">
  <img src="/img/h1.png" width="60%" alt="WIP Hourly Output - Empty State" />
</div>

> 📸 *ផ្ទាំងទិន្នផលប្រចាំម៉ោង WIP មុនពេលជ្រើសរើស Line និង Order No / WIP Hourly Output screen before selecting a Line and Order No*

---

### 🔧 ប៊ូតុងបញ្ជានៅរបារខាងលើ / Top Bar Controls

| 🔘 ប៊ូតុងបញ្ជា / Control | 🎨 ពណ៌ / Color | 📝 ការពិពណ៌នា / Description |
|---|---|---|
| **LINE** | ⬛ ពណ៌ខ្មៅ / Dark | ចុចដើម្បីជ្រើសរើសខ្សែសង្វាក់ផលិតកម្មដែលអ្នកចង់តាមដាន / Tap to select the production line you want to monitor |
| 🇬🇧 🇰🇭 Flag icons | — | ប្តូរភាសាបង្ហាញរវាងភាសាអង់គ្លេស និងភាសាខ្មែរ / Switch display language between English and Khmer |
| 📅 Date & Time | ⬛ ពណ៌ខ្មៅ / Dark | បង្ហាញកាលបរិច្ឆេទ និងម៉ោងបច្ចុប្បន្នផ្ទាល់ — ធ្វើបច្ចុប្បន្នភាពស្វ័យប្រវត្តិ / Shows the current live date and clock — auto updates |
| 🖨️ **Print** | 🟦 ខៀវខ្ចី / Teal | ចុចដើម្បីបោះពុម្ពរបាយការណ៍ទិន្នផលប្រចាំម៉ោងបច្ចុប្បន្ន / Tap to print the current hourly output report |
| 🔄 **Refresh** | 🟦 ខៀវខ្ចី / Teal | ចុចដើម្បីទាញយកទិន្នន័យចុងក្រោយបំផុតពីម៉ាស៊ីនបម្រើ / Tap to reload the latest data from the server |

:::caution ⏰ ត្រូវចុច Refresh ជាមុនសិនជានិច្ច / Always Refresh First
ត្រូវចុច **🔄 Refresh** ជាមុនសិនជានិច្ច មុនពេលអានទិន្នន័យ ដើម្បីប្រាកដថាអ្នកកំពុងមើលតួលេខចុងក្រោយបំផុត។
Always tap **🔄 Refresh** before reading data to make sure you are viewing the **most current figures**.
:::

---

### 📊 ផ្នែកសង្ខេបនៅក្បាលទំព័រ / Header Summary Fields

ផ្នែកទាំងនេះលេចឡើងនៅខាងលើ បន្ទាប់ពីជ្រើសរើស Line និង Order រួច៖
These fields appear at the top after selecting a Line and Order:

| 📌 ផ្នែកទិន្នន័យ / Field | 🎨 ពណ៌ / Color | 📝 ការពិពណ៌នា / Description |
|---|---|---|
| **ORDER NO** | ⬜ ពណ៌ស / White | លេខបញ្ជាទិញផលិតកម្មដែលកំពុងដំណើរការ — ចុចដើម្បីប្តូរលេខបញ្ជាទិញ / The active production order number — tap to change order |
| **STYLE #** | ⬜ ពណ៌ស / White | លេខម៉ូដសម្លៀកបំពាក់សម្រាប់លិខិតបញ្ជាទិញនេះ / The garment style number for this order |
| **SMV** | ⬜ ពណ៌ស / White | តម្លៃនាទីស្តង់ដារ (Standard Minute Value) — រយៈពេលគិតជានាទីដើម្បីដេរមួយដុំ / Standard Minute Value — time in minutes to sew one piece |
| **CUT QTY** | ⬜ ពណ៌ស / White | ចំនួនសរុបនៃបំណែកដែលបានកាត់សម្រាប់លិខិតបញ្ជាទិញនេះ / Total quantity of pieces cut for this order |
| **ALLOCATED QTY** | ⬜ ពណ៌ស / White | ចំនួនបំណែកដែលបានបែងចែកជាផ្លូវការទៅឱ្យខ្សែសង្វាក់នេះ / Number of pieces officially assigned to this line |
| **ACCUM QTY** | ⬜ ពណ៌ស / White | ចំនួនសរុបបង្គរដែលទទួលបាននៅលើខ្សែសង្វាក់រហូតមកដល់ពេលនេះ / Cumulative quantity received on the line so far (all days) |
| **ACCUM. CUT PIECE LOAD** | ⬜ ពណ៌ស / White | ចំនួនបំណែកកាត់សរុបដែលបានបញ្ចូលទៅក្នុងខ្សែសង្វាក់ — ចំនួនបង្គរ / Total cut pieces loaded onto the line — cumulative |
| **ACCUM. OUTPUT** | ⬜ ពណ៌ស / White | ចំនួនផលិតផលសរុបដែលបានបញ្ចប់ និងចេញពីខ្សែសង្វាក់ — ចំនួនបង្គរ / Total pieces finished and output from the line — cumulative |
| **BALANCE QTY** | 🟥 **ពណ៌ក្រហម / Red** | ចំនួនបំណែកដែលនៅសល់ត្រូវផលិត ⚠️ ពណ៌ក្រហម = យឺតជាងគោលដៅ / Remaining pieces still to be produced ⚠️ Red = behind target |

:::danger 🔴 BALANCE QTY — ការព្រមានពណ៌ក្រហម / Red Alert
នៅពេល **BALANCE QTY** បង្ហាញជា **ពណ៌ក្រហម** មានន័យថាខ្សែសង្វាក់ផលិតកម្មកំពុង **យឺតជាងផែនការ**។ ត្រូវការចាត់វិធានការភ្លាមៗដើម្បីដេញឱ្យទាន់គោលដៅប្រចាំថ្ងៃ។
When **BALANCE QTY** is shown in **red**, the line is **behind schedule**. Immediate action is needed to catch up with the daily target.
:::

:::info 📐 អ្វីទៅជា SMV? / What is SMV?
**SMV (Standard Minute Value)** គឺជាពេលវេលាផ្លូវការ គិតជានាទី ដែលកម្មករម្នាក់គួរប្រើប្រាស់ដើម្បីដេរផលិតផលមួយឱ្យបានពេញលេញ។
ឧទហរណ៍៖ SMV = **5.2110** មានន័យថាផលិតផលនីមួយៗប្រើពេលប្រហែល **5 នាទី 13 វិនាទី**។ ប្រព័ន្ធប្រើប្រាស់ SMV ដើម្បីគណនា **គោលដៅប្រចាំម៉ោង** និង **ភាគរយប្រសិទ្ធភាព**។

**SMV (Standard Minute Value)** is the official time, in minutes, it should take one operator to sew one complete piece.
Example: SMV = **5.2110** means each piece takes approximately **5 minutes 13 seconds**. The system uses SMV to calculate **hourly targets** and **efficiency percentages**.
:::

---

## 📉 ផ្នែកខាងក្រោម - ស្ថានភាពទទេ / Bottom Section (Scrolled Down — Empty State)

អូសចុះក្រោមដើម្បីមើលផ្ទាំង **ព័ត៌មានលម្អិតអំពីផលិតផលខូច (Defect Details)**, **កាតសង្ខេបប្រចាំថ្ងៃ (Daily Summary cards)**, និង **តារាងលម្អិតប្រចាំម៉ោង (Hourly Breakdown Table)**។
Scroll down to see the **Defect Details** panel, **Daily Summary cards**, and the **Hourly Breakdown Table**.

<div align="center">
  <img src="/img/h2.png" width="60%" alt="WIP Hourly Output - Bottom Section Empty" />
</div>

> 📸 *ផ្នែកខាងក្រោម — ព័ត៌មានលម្អិតអំពីផលិតផលខូច, កាតសង្ខេបប្រចាំថ្ងៃ, និងតារាងប្រចាំម៉ោង — ទាំងអស់គឺទទេ មុនពេលបញ្ចូលទិន្នន័យផលិតកម្ម / Bottom section — Defect Details, Daily Summary cards, and Hourly Table — all empty before production data is entered*

---

### 🔴 ផ្ទាំងព័ត៌មានលម្អិតអំពីផលិតផលខូច / Defect Details Panel

| 🟩 កាត / Card | 🎨 ពណ៌ / Color | 📝 ការពិពណ៌នា / Description |
|---|---|---|
| **TOTAL OUTPUT** | 🟩 **ពណ៌បៃតង / Green** | ចំនួនសរុបដែលបានផលិត និងជាប់ការត្រួតពិនិត្យគុណភាពនៅថ្ងៃនេះ / Total pieces produced and passed quality check today |
| **TOTAL DEFECT** | 🟥 **ពណ៌ក្រហម / Red** | ចំនួនសរុបដែលរកឃើញថាមានចំណុចខ្វះខាតនៅថ្ងៃនេះ / Total pieces found with defects today |
| **DEFECT %** | 🟧 **ពណ៌ទឹកក្រូច / Orange** | ភាគរយនៃផលិតផលខូច ធៀបនឹងទិន្នផលសរុប / Percentage of defective pieces out of total output |

:::tip 🎯 ការណែនាំអំពីគោលដៅភាគរយផលិតផលខូច / Defect % Target Guide
| ភាគរយផលិតផលខូច / Defect % | 🎨 ស្ថានភាព / Status | សកម្មភាព / Action |
|---|---|---|
| ក្រោម 2% / Below 2% | 🟢 ល្អ / Good | រក្សាការត្រួតពិនិត្យគុណភាពបច្ចុប្បន្ន / Maintain current quality control |
| 2% – 5% | 🟡 តាមដាន / Monitor | ពិនិត្យមើលឱ្យជិតស្និទ្ធ, ស៊ើបអង្កេតប្រភេទផលិតផលខូច / Watch closely, investigate defect types |
| លើសពី 5% / Above 5% | 🔴 ធ្ងន់ធ្ងរ / Critical | ចាត់វិធានការភ្លាមៗ — ពិនិត្យមើលកម្មករ, វត្ថុធាតុដើម, និងម៉ាស៊ីន / Immediate action — review operators, materials, machines |
:::

**នៅខាងក្រោមតារាងសង្ខេប / Below the summary cards:**
🔵 **TOP DEFECT** *(ក្បាលតារាងពណ៌ខៀវ / blue header)* — បង្ហាញប្រភេទផលិតផលខូច **ដែលជួបប្រទះញឹកញាប់បំផុត** នៅថ្ងៃនេះ ព្រមទាំងចំនួន និងភាគរយ / Lists the **most common defect types** found today with count and percentage.
🟦 **TOP ISSUES** *(ក្បាលតារាងពណ៌ខៀវខ្ចី / teal header)* — បង្ហាញពីប្រភពដើមនៃបញ្ហាដែលបណ្តាលឱ្យមានផលិតផលខូច៖ មនុស្ស, វត្ថុធាតុដើម, ម៉ាស៊ីន / Lists the **root cause categories** behind defects: Human, Material, Machine.

---

### 🟦 កាតសង្ខេបប្រចាំថ្ងៃ / Daily Summary Cards

| 🟦 កាត / Card | 🎨 ពណ៌ / Color | 📝 ការពិពណ៌នា / Description |
|---|---|---|
| **DAILY TARGET OUTPUT** | 🔵 **ពណ៌ខៀវ / Blue** | ចំនួនផលិតផលដែលបានគ្រោងទុកសម្រាប់ផលិតនៅថ្ងៃនេះ ផ្អែកលើម៉ោងការងារ / Planned pieces to produce today based on shift hours |
| **TOTAL OUTPUT** | 🟩 **ពណ៌បៃតង / Green** | ចំនួនផលិតផលជាក់ស្តែងដែលបានផលិតរហូតមកដល់ពេលនេះនៅថ្ងៃនេះ / Actual pieces produced today so far |
| **TOTAL CUT-PIECE LOAD** | ⬜ **ពណ៌ប្រផេះ / Grey** | ចំនួនបំណែកកាត់សរុបដែលបានបញ្ចូលទៅក្នុងខ្សែសង្វាក់នៅថ្ងៃនេះ / Total cut pieces loaded to the line today |
| **TOTAL INPUT** | ⬜ **ពណ៌ប្រផេះ / Grey** | ចំនួនបំណែកសរុបដែលបានបញ្ចូលទៅក្នុងដំណើរការដេរនៅថ្ងៃនេះ / Total pieces entered into the sewing process today |
| **TOTAL REJECT** | 🟥 **ពណ៌ក្រហម / Red** | ចំនួនផលិតផលសរុបដែលត្រូវបានបដិសេធដោយ QC នៅថ្ងៃនេះ / Total pieces rejected by QC today |
| **ACHIEVED EFFICIENCY (TO HOUR)** | 🟧 **ពណ៌ទឹកក្រូច / Orange** | ភាគរយប្រសិទ្ធភាពជាក់ស្តែងចាប់តាំងពីចាប់ផ្តើមម៉ោងការងារ រហូតដល់ម៉ោងបច្ចុប្បន្ន / Actual efficiency % from start of shift up to current time |
| **TARGET EFFICIENCY** | 🟧 **ពណ៌ទឹកក្រូច / Orange** | ភាគរយប្រសិទ្ធភាពដែលរំពឹងទុកថានឹងសម្រេចបាននៅលើខ្សែសង្វាក់នេះនៅថ្ងៃនេះ / The efficiency % the line is expected to reach today |

:::warning ⚠️ ការព្រមានអំពីគម្លាតប្រសិទ្ធភាព / Efficiency Gap Warning
ប្រសិនបើ **ACHIEVED EFFICIENCY** ទាបជាង **TARGET EFFICIENCY** ឆ្ងាយ នោះមានន័យថាខ្សែសង្វាក់ផលិតកម្មកំពុងដំណើរការមិនបានល្អ។ ពិនិត្យមើលគំនូសតាងប្រចាំម៉ោងដើម្បីស្វែងរកថាមោ៉ងណាខ្លះដែលមានទិន្នផលទាប រួចស្វែងរកមូលហេតុ។
If **ACHIEVED EFFICIENCY** is much lower than **TARGET EFFICIENCY**, the line is underperforming. Check the hourly chart to find which hours had low output and investigate why.
:::

---

### 📋 តារាងលម្អិតប្រចាំម៉ោង / Hourly Breakdown Table

តារាងនេះបង្ហាញពី **លទ្ធផលការងារសម្រាប់ចន្លោះពេល ១ ម៉ោងម្តងៗ** ចាប់ពីម៉ោង **07:00 ដល់ 18:00**៖
The table shows **performance for each 1-hour slot** from **07:00 to 18:00**:

| 📌 ជួរដេក / Row | 🎨 ពណ៌ / Color | 📝 ការពិពណ៌នា / Description |
|---|---|---|
| **SMV Qty \| % target** | ⬜ ពណ៌ស / White | ចំនួនផលិតផលដែលបានគ្រោងទុកក្នុងមួយម៉ោង = SMV × ចំនួនកម្មករ × ភាគរយប្រសិទ្ធភាពគោលដៅ / Planned pieces per hour = SMV × operators × target efficiency % |
| **Input** | ⬜ ពណ៌ស / White | ចំនួនបំណែកដែលបានបញ្ចូលទៅក្នុងខ្សែសង្វាក់ដេរក្នុងកំឡុងម៉ោងនោះ / Pieces fed into the sewing line during that hour |
| **Cut-Piece Load** | ⬜ ពណ៌ស / White | ចំនួនបំណែកកាត់ដែលបានបញ្ចូលទៅក្នុងខ្សែសង្វាក់ជាក់ស្តែងក្នុងម៉ោងនោះ / Cut pieces physically loaded to the line that hour |
| **Output (PD: X day(s))** | ⬜ ពណ៌ស / White | ចំនួនផលិតផលដែលបានបញ្ចប់ក្នុងម៉ោងនោះ *(PD = ចំនួនថ្ងៃផលិតកម្មដែលការបញ្ជាទិញនេះបានដំណើរការ)* / Pieces completed that hour *(PD = number of production days this order has been running)* |
| **Efficiency (To Hour)** | 🟩 **ពណ៌បៃតង / Green** | ភាគរយប្រសិទ្ធភាពបង្គរចាប់តាំងពីចាប់ផ្តើមម៉ោងការងារ រហូតដល់ដំណាច់ម៉ោងនោះ / Cumulative efficiency % from start of shift up to end of that hour |
| **Reject** | ⬜ ពណ៌ស / White | ចំនួនផលិតផលខូចដែលបានរកឃើញក្នុងកំឡុងម៉ោងនោះ / Number of defective pieces found during that hour |
| **RFT %** | ⬜ ពណ៌ស / White | **Right First Time %** — ភាគរយផលិតផលដែលជាប់ QC ក្នុងការធ្វើលើកដំបូង ដោយមិនបាច់កែសម្រួលឡើងវិញ / **Right First Time %** — pieces passing QC without any rework |

:::info 💡 អ្វីទៅជា RFT %? / What is RFT %?
**RFT (Right First Time)** = ផលិតផលត្រូវបានដេរយ៉ាងត្រឹមត្រូវ **តាំងពីលើកដំបូង** — មិនត្រូវការការដេរខ្វៀក ឬជួសជុលឡើងវិញឡើយ។
**RFT (Right First Time)** = the piece was sewn correctly on the **first attempt** — no rework or repair needed.

| RFT % | 🎨 ស្ថានភាព / Status | អត្ថន័យ / Meaning |
|---|---|---|
| 100% | 🟢 ល្អឥតខ្ចោះ / Perfect | គ្មានផលិតផលខូចទាល់តែសោះក្នុងម៉ោងនោះ / Zero defects that hour |
| 95% – 99% | 🟡 ល្អ / Good | មានផលិតផលខូចចំនួនតូចតាច — គួរតាមដាន / Small number of defects — monitor |
| ក្រោម 90% / Below 90% | 🔴 ត្រូវចាត់វិធានការ / Action needed | អត្រាការងារត្រូវកែសម្រួលឡើងវិញមានកម្រិតខ្ពស់ / High rework rate — investigate operator and process |
:::

---

## ✅ ឧទាហរណ៍ទិន្នន័យជាក់ស្តែង — LINE 14 / Order IA16235 / Live Data Example

បន្ទាប់ពីជ្រើសរើស **LINE 14** និង **Order IA16235** ផ្ទាំងគ្រប់គ្រងនឹងបំពេញដោយទិន្នន័យផលិតកម្មពិតប្រាកដ។
After selecting **LINE 14** and **Order IA16235**, the dashboard fills with real production data.

<div align="center">
  <img src="/img/h3.png" width="60%" alt="WIP Hourly Output - LINE 14 Live Data" />
</div>

> 📸 *ការតាមដានផ្ទាល់នៅលើ LINE 14 — Order IA16235 បង្ហាញគំនូសតាងប្រចាំម៉ោង និងព័ត៌មានលម្អិតអំពីផលិតផលខូច / LINE 14 live monitoring — Order IA16235 showing hourly chart and defect details*

---

### 📊 ការពន្យល់អំពីការសង្ខេបក្បាលទំព័រជាក់ស្តែង / Live Header Summary Explained

| 📌 ផ្នែកទិន្នន័យ / Field | 🔢 តម្លៃ / Value | 🎨 ពណ៌ / Color | 📝 អត្ថន័យ / What It Means |
|---|---|---|---|
| **ORDER NO** | IA16235 | ⬜ ពណ៌ស / White | លេខបញ្ជាទិញដែលកំពុងត្រូវបានផលិតនៅលើ LINE 14 / The order currently being produced on LINE 14 |
| **STYLE #** | 1852 | ⬜ ពណ៌ស / White | ម៉ូដសម្លៀកបំពាក់ដែលបានកំណត់សម្រាប់លិខិតបញ្ជាទិញនេះ / Garment style assigned to this order |
| **SMV** | 5.2110 | ⬜ ពណ៌ស / White | ផលិតផលនីមួយៗប្រើពេលប្រហែល **5 នាទី 13 វិនាទី** ដើម្បីដេរ / Each piece takes approx. **5 min 13 sec** to sew |
| **CUT QTY** | 109,376 | ⬜ ពណ៌ស / White | ចំនួនសរុបនៃបំណែកដែលបានកាត់ និងមានស្រាប់សម្រាប់លិខិតបញ្ជាទិញនេះ / Total pieces cut and available for this order |
| **ALLOCATED QTY** | 86,557 | ⬜ ពណ៌ស / White | ចំនួនបំណែកដែលបានបែងចែកជាផ្លូវការទៅឱ្យ LINE 14 / Pieces officially allocated to LINE 14 |
| **ACCUM QTY** | 70,904 *(-15,653)* | ⬜ ពណ៌ស / White | 🔴 ទទួលបានផលិតផល **តិចជាងផែនការ 15,653** ដុំ / **15,653 fewer** pieces received than planned |
| **ACCUM. CUT PIECE LOAD** | 2,771 *(-68,133)* | ⬜ ពណ៌ស / White | 🔴 បានបញ្ចូលបំណែកកាត់ **តិចជាងផែនការ 68,133** ដុំ / **68,133 fewer** cut pieces loaded than planned |
| **ACCUM. OUTPUT** | 70,179 *(-725)* | ⬜ ពណ៌ស / White | 🔴 ទទួលបានទិន្នផល **តិចជាងផែនការ 725** ដុំ / **725 fewer** pieces output than planned |
| **BALANCE QTY** | **16,378** | 🟥 **ពណ៌ក្រហម / Red** | 🚨 **នៅសល់ 16,378 ដុំទៀត** — យឺតជាងផែនការ / **16,378 pieces still remaining** — behind schedule |

:::danger 🚨 ការយល់ដឹងអំពីលេខអវិជ្ជមាននៅក្នុងវង់ក្រចក ( ) / Understanding Negative Numbers
លេខនៅក្នុងវង់ក្រចក **( )** ដែលមានសញ្ញាដក = ខ្សែសង្វាក់ផលិតកម្មកំពុង **យឺតជាងគោលដៅបង្គរដែលបានគ្រោងទុក**។
Numbers in **( )** brackets with a minus sign = the line is **behind the planned cumulative target**.

| ផ្នែកទិន្នន័យ / Field | តម្លៃអវិជ្ជមាន / Negative Value | អត្ថន័យ / Meaning |
|---|---|---|
| ACCUM QTY | -15,653 | ទទួលបានផលិតផលតិចជាងផែនការ 15,653 ដុំ / 15,653 fewer pieces received than plan |
| ACCUM. CUT PIECE LOAD | -68,133 | បានបញ្ចូលបំណែកកាត់តិចជាងផែនការ 68,133 ដុំ / 68,133 fewer cut pieces loaded than plan |
| ACCUM. OUTPUT | -725 | ទទួលបានទិន្នផលតិចជាងផែនការ 725 ដុំ / 725 fewer pieces output than plan |

**កាលណាខ្លឹមសារអវិជ្ជមានកាន់តែធំ** នោះខ្សែសង្វាក់កាន់តែយឺតឆ្ងាយពីផែនការផលិតកម្មសរុប overseas។
The **larger the negative number**, the further behind the line is from the overall production plan.
:::

---

## 📊 គំនូសតាងទិន្នផលប្រចាំម៉ោង / Hourly Output Chart

<div align="center">
  <img src="/img/h4.png" width="60%" alt="WIP Hourly Output - Chart with Tooltip" />
</div>

> 📸 *ចុចលើរបារណាមួយនៅលើគំនូសតាងដើម្បីបើកផ្ទាំងព័ត៌មានលម្អិត (Tooltip) បង្ហាញទិន្នន័យសម្រាប់ម៉ោងជាក់លាក់នោះ / Tap any bar on the chart to open a tooltip showing detailed data for that specific hour*

---

### 📈 និមិត្តសញ្ញាពណ៌លើគំនូសតាង / Chart Color Legend

| 🎨 ពណ៌ / Color | 📌 ធាតុផ្សំ / Element | 📝 អត្ថន័យ / Meaning |
|---|---|---|
| 🔵 **របារពណ៌ខៀវ / Blue bars** | គោលដៅប្រចាំម៉ោង / Hourly Target | ចំនួនផលិតផលដែលបានគ្រោងទុកសម្រាប់ផលិតក្នុងមួយម៉ោង / Planned pieces to produce each hour |
| 🟢 **របារពណ៌បៃតង / Green bars** | ទិន្នផលប្រចាំម៉ោង / Hourly Output | ចំនួនផលិតផលជាក់ស្តែងដែលបានផលិតក្នុងមួយម៉ោង / Actual pieces produced each hour |
| 🟠 **ខ្សែពណ៌ទឹកក្រូច / Orange line** | ប្រសិទ្ធភាព / Efficiency (To Hour) | ភាគរយប្រសិទ្ធភាពបង្គរ — កើនឡើងតាមរយៈម៉ោងការងារ / Cumulative efficiency % — rises through the shift |
| 🟡 **ខ្សែបន្ទាត់ដាច់ៗពណ៌លឿង / Yellow line** | ប្រសិទ្ធភាពគោលដៅ / Target Efficiency | គោលដៅប្រសិទ្ធភាព — ខ្សែពណ៌ទឹកក្រូចគួរតែស្ថិតនៅពីលើខ្សែនេះ / The efficiency goal — orange line should stay above this |

:::tip 📊 របៀបអានគំនូសតាងឱ្យបានលឿន / How to Read the Chart Quickly
| អ្វីដែលអ្នកឃើញ / What You See | 🎨 សញ្ញា / Signal | អត្ថន័យ / What It Means |
|---|---|---|
| របារពណ៌បៃតង = របារពណ៌ខៀវ / Green = Blue | ✅ សម្រេចតាមគោលដៅ | ល្អ — ម៉ោងនោះសម្រេចបានតាមផែនការ / Good — that hour met the target |
| របារពណ៌បៃតង &lt; របារពណ៌ខៀវ / Green &lt; Blue | ⚠️ ក្រោមគោលដៅ | ទិន្នផលទាបជាងការគ្រោងទុក — ត្រូវស៊ើបអង្កេត / Output was lower than planned — investigate |
| របារពណ៌បៃតង = 0 / Green bar = 0 | 🔴 គ្មានទិន្នផល | ម៉ោងសម្រាក, ម៉ាស៊ីនខូច ឬមិនទាន់បានបញ្ចូលទិន្នន័យ / Break time, machine downtime, or data not entered |
| ខ្សែពណ៌ទឹកក្រូចកើនឡើង / Orange line rising | 📈 មានការរីកចម្រើន | ប្រសិទ្ធភាពកំពុងកើនឡើងក្នុងកំឡុងថ្ងៃ — ជាលំនាំធម្មតា / Efficiency building through the day — normal pattern |
| ខ្សែពណ៌ទឹកក្រូចនៅក្រោមពណ៌លឿង / Orange below Yellow | ⚠️ ក្រោមគោលដៅ | ប្រសិទ្ធភាពខ្សែសង្វាក់មិនសម្រេចបានតាមគោលដៅឡើយ / Line efficiency is not meeting the goal |
:::

---

### 🖱️ ផ្ទាំងព័ត៌មានលម្អិតអន្តរកម្ម — ចុចលើរបារណាមួយ / Interactive Tooltip — Tap Any Bar

ចុចលើរបារណាមួយនៅលើគំនូសតាងដើម្បីបើក **ផ្ទាំងព័ត៌មានលម្អិត (Tooltip)** សម្រាប់ម៉ោងជាក់លាក់នោះ៖
Tap any bar on the chart to open a **popup tooltip** for that specific hour:

| 📌 ផ្នែកទិន្នន័យ / Field | 🎨 ពណ៌ចំណុច / Dot | 🔢 ឧទាហរណ៍ / Example | 📝 ការពិពណ៌នា / Description |
|---|---|---|---|
| **ចន្លោះពេល / Time slot** | — | 14:00 – 15:00 | ចន្លោះពេល ១ ម៉ោងដែលទិន្នន័យនេះគ្របដណ្តប់ / The 1-hour period this data covers |
| **គោលដៅប្រចាំម៉ោង / Hourly Target** | 🔵 ចំណុចពណ៌ខៀវ / Blue | 188 ដុំ / pieces | ចំនួនផលិតផលដែលបានគ្រោងទុកសម្រាប់ម៉ោងនេះ / Planned pieces for this hour |
| **ទិន្នផលប្រចាំម៉ោង / Hourly Output** | 🟢 ចំណុចពណ៌បៃតង / Green | 0 ដុំ / pieces | ចំនួនផលិតផលជាក់ស្តែងដែលបានផលិតក្នុងម៉ោងនេះ / Actual pieces produced this hour |
| **ប្រសិទ្ធភាព / Efficiency (To Hour)** | 🟠 ចំណុចពណ៌ទឹកក្រូច / Orange | 55% | ប្រសិទ្ធភាពបង្គររហូតមកដល់ម៉ោងនេះ / Cumulative efficiency up to this hour |
| **ប្រសិទ្ធភាពគោលដៅ / Target Efficiency** | 🟡 ចំណុចពណ៌លឿង / Yellow | 70% | គោលដៅប្រសិទ្ធភាពសម្រាប់ម៉ោងការងារ / The shift efficiency goal |

:::warning ⚠️ ទិន្នផលប្រចាំម៉ោង = 0 នៅក្រៅម៉ោងសម្រាក? / Hourly Output = 0 Outside Break Time?
| ចន្លោះពេល / Time Slot | ទិន្នផល = 0 / Output = 0 | មូលហេតុដែលអាចកើតមាន / Likely Reason | សកម្មភាព / Action |
|---|---|---|---|
| 11:00–12:00 | 0 | 🍽️ ម៉ោងសម្រាកអាហារថ្ងៃត្រង់ / Lunch break | ជារឿងធម្មតា — មិនបាច់ចាត់វិធានការ / Expected — no action |
| ម៉ោងផ្សេងទៀត / Any other hour | 0 | ម៉ាស៊ីនខូច / ខ្វះខាតវត្ថុធាតុដើម / អវត្តមានកម្មករ <br /> Machine breakdown / material shortage / absent operators | ស៊ើបអង្កេតជាបន្ទាន់ / Investigate immediately |
:::

---

## 🔎 ព័ត៌មានលម្អិតអំពីផលិតផលខូច & បញ្ហា / Defect & Issue Details (Live Example)

<div align="center">
  <img src="/img/h5.png" width="60%" alt="WIP Hourly Output - Full Bottom Section" />
</div>

> 📸 *ទិដ្ឋភាពពេញនៃផ្នែកខាងក្រោម — សង្ខេបផលិតផលខូច, ផលិតផលខូចជួបប្រទះញឹកញាប់, ប្រភពដើមនៃបញ្ហា, កាតសង្ខេបប្រចាំថ្ងៃ, និងតារាងលម្អិតប្រចាំម៉ោង / Full bottom section — Defect summary, Top Defects, Top Issues, Daily Summary cards, and Hourly Breakdown Table*

---

### 🔴 កាតសង្ខេបផលិតផលខូចជាក់ស្តែង / Live Defect Summary Cards

| 🟩 កាត / Card | 🎨 ពណ៌ / Color | 🔢 តម្លៃ / Value | 📝 អត្ថន័យ / Meaning |
|---|---|---|---|
| **TOTAL OUTPUT** | 🟩 **ពណ៌បៃតង / Green** | **753** | ផលិតផល 753 ដុំត្រូវបានផលិត និងជាប់ការត្រួតពិនិត្យ QC នៅថ្ងៃនេះ / 753 pieces produced and passed QC today |
| **TOTAL DEFECT** | 🟥 **ពណ៌ក្រហម / Red** | **27** | ផលិតផល 27 ដុំមានចំណុចខ្វះខាត និងត្រូវបានកត់សម្គាល់ / 27 pieces had defects and were flagged |
| **DEFECT %** | 🟧 **ពណ៌ទឹកក្រូច / Orange** | **3.59%** | 3.59% នៃទិន្នផលថ្ងៃនេះគឺជាផលិតផលខូច / 3.59% of today's output was defective |

---

### 🔵 ផលិតផលខូចជួបប្រទះញឹកញាប់បំផុត / Top Defects — Most Common Defect Types

| ចំណាត់ថ្នាក់ / Rank | ប្រភេទផលិតផលខូច / Defect Type | ចំនួន / Count | % |
|---|---|---|---|
| ទី ១ / 1st | **ស្នាមដេរមិនស្មើគ្នា / Uneven Seam** | 7 | 21.21% |
| ទី ២ / 2nd | **គែមធ្លាយសរសៃសាច់ក្រណាត់ / Raw Edge** | 5 | 15.15% |
| ទី ៣ / 3rd | **មិនបានកាត់ចុងអំបោះ / Untrim Thread** | 5 | 15.15% |

:::tip 💡 ការណែនាំអំពីសកម្មភាពសម្រាប់ផលិតផលខូច / Action Guide for Top Defects
| ផលិតផលខូច / Defect | មូលហេតុដែលអាចកើតមាន / Likely Cause | សកម្មភាពដែលគួរណែនាំ / Suggested Action |
|---|---|---|
| **ស្នាមដេរមិនស្មើគ្នា** <br /> Uneven Seam | កម្មករមិនបានដេរតាមបន្ទាត់ណែនាំ <br /> Operator not following seam guide | បណ្តុះបណ្តាលកម្មករឡើងវិញ, ពិនិត្យការតម្រង់ជួរ <br /> Retrain operator, check guide alignment |
| **គែមធ្លាយសរសៃសាច់ក្រណាត់** <br /> Raw Edge | ក្រណាត់រហែក / បញ្ហាកាត់ក្រណាត់ <br /> Fabric fraying / cutting issue | ពិនិត្យគុណភាពការកាត់, ការដេរគែមសងខាង <br /> Check cutting quality, edge finishing |
| **មិនបានកាត់ចុងអំបោះ** <br /> Untrim Thread | កម្មកររំលងជំហានកាត់ចុងអំបោះ <br /> Operator skipping trim step | រំលឹកកម្មករ, បន្ថែមចំណុចត្រួតពិនិត្យ QC <br /> Remind operator, add QC checkpoint |

ត្រូវដោះស្រាយ **ផលិតផលខូចលំដាប់ទី ១ ជាមុនសិន** — ព្រោះវាមានផលប៉ះពាល់ធំបំផុតដល់អត្រាផលិតផលខូចសរុប។
Always fix the **#1 defect first** — it has the biggest impact on defect rate.
:::

---

### 🟦 ប្រភពដើមនៃបញ្ហា / Top Issues — Root Cause Categories

| ⚠️ ប្រភេទបញ្ហា / Issue | 🎨 របារ / Bar | 🔢 ចំនួន / Count | 📊 % | 📝 អត្ថន័យ / Meaning |
|---|---|---|---|---|
| **បញ្ហាមនុស្ស / Human Issue** | 🔵 របារវែង / Long bar | 27 | 81.82% | ផលិតផលខូចបណ្តាលមកពី **កំហុសរបស់កម្មករ** / Defects caused by **operator error** |
| **បញ្ហាវត្ថុធាតុដើម / Material Issue** | 🔵 របារខ្លី / Short bar | 5 | 15.15% | ផលិតផលខូចបណ្តាលមកពី **បញ្ហាក្រណាត់ ឬគ្រឿងផ្សំ** / Defects caused by **fabric or trim problems** |
| **បញ្ហាម៉ាស៊ីន / Machine Issue** | 🔵 របារតូចបំផុត / Tiny bar | 1 | 3.03% | ផលិតផលខូចបណ្តាលមកពី **ម៉ាស៊ីនដំណើរការខុសប្រក្រតី** / Defects caused by **machine malfunction** |

:::danger 🚨 បញ្ហាមនុស្ស = 81.82% — អ្វីដែលត្រូវធ្វើ / Human Issue = 81.82% — What to Do
នៅពេលបញ្ហាមនុស្សមានលើសពី **70%** វាមានន័យថាបញ្ហាភាគច្រើនកើតចេញពីកម្មករ៖
When Human Issue is above **70%**, it means most problems come from operators:

| ជំហាន / Step | សកម្មភាព / Action |
|---|---|
| 1️⃣ | អ្នកត្រួតពិនិត្យចុះ **ពិនិត្យរោងចក្រផ្ទាល់** — សង្កេតមើលកម្មករដោយផ្ទាល់ / Supervisor does a **floor walk** — observe operators directly |
| 2️⃣ | ស្វែងរក **ថាតើកម្មករណាខ្លះ** ដែលធ្វើឱ្យមានផលិតផលខូចច្រើនជាងគេ / Identify **which operators** have the most personal defects |
| 3️⃣ | ផ្តល់ **ការណែនាំភ្លាមៗនៅនឹងកន្លែង** ឬបណ្តុះបណ្តាលឡើងវិញ / Provide **on-the-spot coaching** or retraining |
| 4️⃣ | ចាត់តាំង **មិត្តរួមការងារជួយពិនិត្យគុណភាព** ដល់កម្មករមានអត្រាខុសខ្ពស់ / Assign a **quality buddy** to high-defect operators |
| 5️⃣ | តាមដាននៅម៉ោងបន្ទាប់ដើម្បីពិនិត្យមើលថាតើអត្រាផលិតផលខូចថយចុះដែរឬទេ / Monitor next hour to check if defect rate improves |
:::

---

### 🟦 កាតសង្ខេបប្រចាំថ្ងៃជាក់ស្តែង / Live Daily Summary Cards

| 📌 កាត / Card | 🎨 ពណ៌ / Color | 🔢 តម្លៃ / Value | 📝 អត្ថន័យ / Meaning |
|---|---|---|---|
| **DAILY TARGET OUTPUT (10 HRS)** | 🔵 **ពណ៌ខៀវ / Blue** | 1,612 *(2,303)* | គោលដៅសម្រាប់វេនការងារ ១០ ម៉ោង; 2,303 = សមត្ថភាពពេញលេញ / Target for 10-hr shift; 2,303 = full available capacity |
| **TOTAL OUTPUT** | 🟩 **ពណ៌បៃតង / Green** | **753** | ចំនួនផលិតផលជាក់ស្តែងដែលបានផលិតរហូតមកដល់ពេលនេះនៅថ្ងៃនេះ / Actual pieces produced today so far |
| **TOTAL CUT-PIECE LOAD** | ⬜ **ពណ៌ប្រផេះ / Grey** | **0** | ⚠️ គ្មានបំណែកកាត់ត្រូវបានបញ្ចូលទេនៅថ្ងៃនេះ — អាចមានបញ្ហាផ្គត់ផ្គង់ / No cut pieces loaded today — possible supply issue |
| **TOTAL INPUT** | ⬜ **ពណ៌ប្រផេះ / Grey** | **783** | ចំនួនបំណែកចំនួន 783 ត្រូវបានបញ្ចូលទៅក្នុងការដេរនៅថ្ងៃនេះ / 783 pieces entered into sewing today |
| **TOTAL REJECT** | 🟥 **ពណ៌ក្រហម / Red** | **27** | ផលិតផលចំនួន 27 ត្រូវបានបដិសេធដោយ QC — ត្រូវការការស៊ើបអង្កេត / 27 pieces rejected by QC — needs investigation |
| **ACHIEVED EFFICIENCY (TO HOUR)** | 🟧 **ពណ៌ទឹកក្រូច / Orange** | **54.5%** | ប្រសិទ្ធភាពជាក់ស្តែងចាប់ពីម៉ោង 07:00 រហូតមកដល់ពេលនេះ / Actual efficiency from 07:00 up to now |
| **TARGET EFFICIENCY** | 🟧 **ពណ៌ទឹកក្រូច / Orange** | **70%** | គោលដៅប្រសិទ្ធភាពសម្រាប់វេនការងារថ្ងៃនេះ / The efficiency goal for today's shift |

:::danger 🔴 ការព្រមានអំពីប្រសិទ្ធភាព — 54.5% ធៀបនឹងគោលដៅ 70% / Efficiency Alert — 54.5% vs Target 70%
ខ្សែសង្វាក់នេះគឺ **ទាបជាងគោលដៅ 15.5 ភាគរយ**។ តាមអត្រានេះ៖
គោលដៅប្រចាំថ្ងៃចំនួន **1,612 ដុំនឹងមិនអាចសម្រេចបានឡើយ**
ទិន្នផលដែលរំពឹងទុកនៅកម្រិតប្រសិទ្ធភាព 54.5% = ប្រហែល **1,250 ដុំ** ប៉ុណ្ណោះ

The line is **15.5 percentage points below target**. At this rate:
 The daily target of **1,612 pieces will not be met**
 Projected output at 54.5% efficiency = approximately **1,250 pieces** only

**សកម្មភាពភ្លាមៗដែលត្រូវពិចារណា / Immediate actions to consider:**
| កម្រិតអាទិភាព / Priority | សកម្មភាព / Action |
|---|---|
| 🔴 ខ្ពស់ / High | ពិនិត្យមើលថាតើមានកម្មករគ្រប់គ្រាន់ដែរឬទេ (អវត្តមានការងារ) / Check if all operators are present (absenteeism) |
| 🔴 ខ្ពស់ / High | ពិនិត្យមើលថាតើម៉ាស៊ីនកំពុងដំណើរការ (គ្មានម៉ាស៊ីនខូច) / Check if machines are running (no downtime) |
| 🟡 មធ្យម / Medium | ពិនិត្យការផ្គត់ផ្គង់បំណែកកាត់ (TOTAL CUT-PIECE LOAD = 0) / Check cut-piece supply |
| 🟡 មធ្យម / Medium | ពិនិត្យលទ្ធផលការងាររបស់កម្មករធៀបនឹងគោលដៅបុគ្គល / Review operator performance vs individual targets |
:::

---

### 📋 តារាងលម្អិតប្រចាំម៉ោងជាក់ស្តែង / Live Hourly Breakdown Table

| 🕒 ម៉ោង / Time | គោលដៅ SMV / Target | Input | Output | ប្រសិទ្ធភាព / Efficiency | Reject | RFT % |
|---|---|---|---|---|---|---|
| **07:00–08:00** | 161 | 0 | 65 | 🟩 28% | 7 | 89.23% |
| **08:00–09:00** | 171 | 259 | 116 | 🟩 39% | 4 | 96.55% |
| **09:00–10:00** | 177 | 0 | 137 | 🟩 46% | 5 | 96.35% |
| **10:00–11:00** | 182 | 247 | 161 | 🟩 52% | 8 | 95.03% |
| **11:00–12:00** | 0 | 0 | 0 | 🟩 52% | 0 | — *(សម្រាកបាយថ្ងៃត្រង់ / lunch break)* |
| **12:00–13:00** | 185 | 0 | 167 | 🟩 56% | 3 | 98.20% |
| **13:00–14:00** | 188 | 277 | 107 | 🟩 55% | 0 | 100% ✅ |

:::info 💡 ការអានតារាងនេះ — ការសង្កេតសំខាន់ៗ / Reading This Table — Key Observations

| 🕒 ម៉ោង / Hour | 📊 ការសង្កេត / Observation | 📝 អត្ថន័យ / Meaning | សកម្មភាព / Action |
|---|---|---|---|
| 07:00–08:00 | ទិន្នផល 65 ធៀបនឹងគោលដៅ 161 <br /> Output 65 vs Target 161 | ការចាប់ផ្តើមយឺតយ៉ាវ — កម្មករទើបតែដំឡើងដៃ <br /> Slow start — operators warming up | ជារឿងធម្មតា — ត្រូវតាមដាននៅម៉ោងបន្ទាប់ <br /> Normal — monitor next hour |
| 08:00–09:00 | Input 259, Output 116 | ការផ្គត់ផ្គង់ធាតុចូលល្អ, ទិន្នផលចាប់ផ្តើមកើនឡើង <br /> Good input supply, output ramping up | ដើរស្របតាមផែនការ <br /> On track |
| 10:00–11:00 | Reject = 8 (ម៉ោងមានការខូចច្រើនបំផុត) <br /> Reject = 8 (highest hour) | ផលិតផលខូចភាគច្រើនកើតឡើងក្នុងម៉ោងនេះ <br /> Most defects occurred this hour | ស៊ើបអង្កេតមើលថាតើមានអ្វីកើតឡើង <br /> Investigate what happened |
| 11:00–12:00 | បង្ហាញលេខសូន្យទាំងអស់ / All zeros | 🍽️ ម៉ោងសម្រាកអាហារថ្ងៃត្រង់ / Lunch break | ជារឿងធម្មតា — មិនបាច់ចាត់វិធានការ / Expected — no action |
| 13:00–14:00 | ទិន្នផល 107 ធៀបនឹងគោលដៅ 188 <br /> Output 107 vs Target 188 | ការធ្លាក់ចុះបន្ទាប់ពីសម្រាកបាយថ្ងៃត្រង់ <br /> Post-lunch dip | ពិនិត្យមើលថាតើកម្មករត្រឡប់មកធ្វើការទាន់ពេល <br /> Check if all operators returned on time |
| 13:00–14:00 | RFT = 100% ✅ | គ្មានផលិតផលខូចទាល់តែសោះក្នុងម៉ោងនេះ <br /> Zero defects that hour | គុណភាពល្អឥតខ្ចោះ — គួរកោតសរសើរក្រុមការងារ <br /> Excellent quality — recognize the team |
| Efficiency 28% → 56% | កើនឡើងក្នុងកំឡុងថ្ងៃ / Rising through day | លំនាំធម្មតានៃការកើនឡើងកម្តៅការងារ / Normal warm-up pattern | បន្តការតាមដាន / Continue monitoring |
:::

---

## ✅ សេចក្តីសង្ខេបសម្រាប់ការពិនិត្យរហ័ស / Quick Reference Summary

| 🎯 អ្វីដែលត្រូវពិនិត្យ / What to Check | 📌 កន្លែងដែលត្រូវមើល / Where to Look | 🎨 សញ្ញាពណ៌ / Color Signal | ⚠️ លក្ខខណ្ឌព្រមាន / Alert Condition |
|---|---|---|---|
| តើសម្រេចបានតាមគោលដៅប្រចាំថ្ងៃ? <br /> Are we on daily target? | **BALANCE QTY** | 🟥 ពណ៌ក្រហម = យឺត <br /> Red = behind | រាល់ពេល BALANCE QTY បង្ហាញពណ៌ក្រហម <br /> Any red BALANCE QTY |
| ស្ថានភាពប្រសិទ្ធភាពនៃខ្សែសង្វាក់ <br /> Line efficiency status | **ACHIEVED ធៀបនឹង TARGET EFFICIENCY** | 🟧 កាតពណ៌ទឹកក្រូច <br /> Orange cards | គម្លាតខុសគ្នា > 10% ត្រូវចាត់វិធានការ <br /> Gap > 10% needs action |
| ម៉ោងណាខ្លះដែលមានទិន្នផលទាប? <br /> Which hour had low output? | **គំនូសតាងប្រចាំម៉ោង** — របារបៃតងធៀបនឹងខៀវ <br /> Hourly Chart — green vs blue bars | 🟢 របារពណ៌បៃតងខ្លី = មានបញ្ហា <br /> Green bars short = problem | របារពណ៌បៃតង = 0 នៅក្រៅម៉ោងសម្រាក <br /> Green bar = 0 outside break |
| ប្រភេទផលិតផលខូចជួបប្រទះញឹកញាប់? <br /> Most common defect? | **បញ្ជី TOP DEFECT** | 🔵 របារពណ៌ខៀវវែងជាងគេ = អាក្រក់បំផុត <br /> Longest blue bar = worst | ភាគរយផលិតផលខូចលើសពី 5% <br /> Defect % above 5% |
| ប្រភពដើមនៃបញ្ហាផលិតផលខូច? <br /> Root cause of defects? | **បញ្ជី TOP ISSUES** | 🔵 របារវែងជាងគេ = មូលហេតុចម្បង <br /> Longest bar = main cause | បញ្ហាមនុស្ស (Human Issue) លើសពី 70% <br /> Human Issue above 70% |
| ព័ត៌មានលម្អិតចន្លោះពេលមួយម៉ោងម្តងៗ <br /> Full hour-by-hour detail | **តារាងលម្អិតប្រចាំម៉ោង** <br /> Hourly Breakdown Table | 🟩 ពណ៌បៃតង = ភាគរយប្រសិទ្ធភាព <br /> Green = efficiency % | ប្រសិទ្ធភាពធ្លាក់ចុះចន្លោះពីម៉ោងមួយទៅម៉ោងមួយ <br /> Efficiency dropping between hours |
| ទិន្នន័យសរុបថ្ងៃនេះដោយ glance រហ័ស <br /> Today's totals at a glance | **Daily Summary Cards** | 🟩🟥🟧 កូដពណ៌តាមស្ថានភាព <br /> Color-coded | ចំនួន TOTAL REJECT កំពុងកើនឡើង <br /> TOTAL REJECT rising |