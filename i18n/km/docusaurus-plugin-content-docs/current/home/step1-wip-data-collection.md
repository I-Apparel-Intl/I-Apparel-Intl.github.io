---
id: step1-wip-data-collection
title: ជំហានទី ១ — ការប្រមូលទិន្នន័យ WIP
---

# 📊 ជំហានទី ១ — ការប្រមូលទិន្នន័យ WIP
## 📋 ការពិពណ៌នា

មុខងារនេះប្រើសម្រាប់ប្រមូល និងកត់ត្រាទិន្នន័យ WIP នៅគ្រប់ដំណាក់កាលនៃការផលិត។ វាតាមដានចំនួនផ្នែកដែលកំពុងដំណើរការនៅស្ថានីយការងារគ្រប់កន្លែង។

---

## 🔄 របៀបប្រើប្រាស់

### 1️⃣ ជំហានទី ១ — បើក WIP Data Collection

- ចុច **WIP Data Collection** ពីម៉ឺនុយដើម
- អេក្រង់នឹងបើកដោយបង្ហាញប្រអប់ជ្រើសរើស Order No

<div align="center">
  <img src="/img/k2.png" width="60%" alt="WIP Data Collection - No Data" />
</div>

---

### 2️⃣ ជំហានទី ២ — ជ្រើសរើស Order No

- ចុចប្រអប់ **Select Order No** ដើម្បីពង្រីកបញ្ជីការបញ្ជាទិញ
- ប្រើប្រអប់ **ស្វែងរក** ដើម្បីស្វែងរកការបញ្ជាទិញរបស់អ្នករហ័ស
- ជ្រើសរើសលេខការបញ្ជាទិញដែលពាក់ព័ន្ធ (ឧ. **IA13325**)

<div align="center">
  <img src="/img/k3.png" width="60%" alt="Select Order No Dropdown" />
</div>

---

### 3️⃣ ជំហានទី ៣ — មើលដំណាក់កាលផលិតកម្ម

នៅពេលជ្រើសរើសការបញ្ជាទិញរួច ប្រព័ន្ធបង្ហាញដំណាក់កាលផលិតកម្មទាំងអស់សម្រាប់ការបញ្ជាទិញនោះ។ ដំណាក់កាលនីមួយៗបង្ហាញ៖

| ជួរឈរ | ការពិពណ៌នា |
|---|---|
| **RECEIVE** | បរិមាណទទួលនៅដំណាក់កាលនេះ (សំបុត្រ / ផ្នែក / សរុប \| %) |
| **ISSUE** | បរិមាណបញ្ចូននៅដំណាក់កាលនេះ (សំបុត្រ / ផ្នែក / សរុប \| %) |
| **Recovery** | ប្តូរដើម្បីបើកដំណើរការ Recovery/Re-process |

ដំណាក់កាលផលិតកម្មរួមមាន៖
 🔴 **CUT** — ដំណាក់កាលកាត់
 🟠 **SEW TRIM** — ដំណាក់កាលដេរ និងកាត់តុបតែង
 🟡 **SEW (ONLINE)** — ដំណាក់កាលដេរអនឡាញ
 🟣 **PMAT** — ដំណាក់កាលក្រោយផលិតកម្ម

<div align="center">
  <img src="/img/k22.jpg" width="60%" alt="Order IA13325 - Production Stages" />
</div>

---

### 4️⃣ ជំហានទី ៤ — កត់ត្រាធាតុ RECEIVE ថ្មី

- នៅក្រោមដំណាក់កាលផលិតកម្មដែលចង់បាន ចុច **New** នៅក្រោម **RECEIVE**
- ទម្រង់ **Instore Factory** នឹងបើក
- ជ្រើសរើស **ទីតាំង** (ឧ. Loc-CUT-1A) និង **Line**
- ស្កែន ឬបញ្ចូលសំបុត្របង (bin ticket) ដើម្បីកត់ត្រាផ្នែកដែលបានទទួល

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'start'}}>
  <div align="center">
    <img src="/img/k4.png" width="100%" alt="CUT RECEIVE New button highlighted" />
    <p><em>➕ ចុច <strong>New</strong> នៅក្រោម RECEIVE ដើម្បីបើកទម្រង់ Instore Factory</em></p>
  </div>
  <div align="center">
    <img src="/img/k5.png" width="100%" alt="Instore Factory form — select Location and Line" />
    <p><em>📋 ជ្រើសរើសទីតាំង និង Line រួចស្កែន ឬបញ្ចូលសំបុត្របង</em></p>
  </div>
</div>

---

### 5️⃣ ជំហានទី ៥ — មើលប្រវត្តិប្រតិបត្តិការ (RECEIVE)

ដើម្បីពិនិត្យធាតុ RECEIVE ដែលបានកត់ត្រាពីមុន ចុចប៊ូតុង **Transaction** នៅក្រោមជួរ RECEIVE។

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'start'}}>
  <div align="center">
    <img src="/img/k6.png" width="100%" alt="Transaction Button Highlighted" />
    <p><em>📸 ចុចប៊ូតុង <strong>Transaction</strong> ពណ៌ត្នោតនៅក្រោម RECEIVE ដើម្បីបើកប្រវត្តិ</em></p>
  </div>
  <div align="center">
    <img src="/img/k7.png" width="100%" alt="Transaction History Search Form" />
    <p><em>🔍 ប្រវត្តិប្រតិបត្តិការ — ប្រើតម្រងដើម្បីស្វែងរកកំណត់ត្រា RECEIVE ជាក់លាក់</em></p>
  </div>
</div>

---

អេក្រង់ **ប្រវត្តិប្រតិបត្តិការ** នឹងបើកដោយមានតម្រងស្វែងរក៖

| 🔍 តម្រង | 📝 ការពិពណ៌នា |
|---|---|
| 🎫 **Bin Ticket** | ជ្រើសរើស ឬស្កែនសំបុត្របង ដើម្បីស្វែងរកបាច់ជាក់លាក់ |
| 👗 **Style No.** | តម្រងកំណត់ត្រាតាមលេខស្តាយប្រដាប់រោបាក់ |
| 🎨 **Color** | ចំណុចកំណត់លទ្ធផលតាមពណ៌ |
| 🛒 **Buyer PO** | ស្វែងរកតាមលេខការបញ្ជាទិញរបស់អ្នកទិញ |
| 📅 **Scanned Date Range** | កំណត់ **ចាប់ពីថ្ងៃ** និង **ដល់ថ្ងៃ** ដើម្បីតម្រងតាមកាលបរិច្ឆេទស្កែន |

**របៀបស្វែងរក៖**
🔽 ជ្រើសរើសតម្រងមួយ ឬច្រើនពីបញ្ជីទម្លាក់ចុះ
📅 ជ្រើសកំណត់ជួរកាលបរិច្ឆេទដោយប្រើ **ចាប់ពីថ្ងៃ** និង **ដល់ថ្ងៃ**
✅ ចុច **SEARCH** (ប៊ូតុងពណ៌បៃតង) ដើម្បីផ្ទុកលទ្ធផល
🔄 ចុច **RESET** (ប៊ូតុងពណ៌ខៀវ) ដើម្បីសម្អាតតម្រងទាំងអស់ ហើយចាប់ផ្តើមឡើងវិញ

---

### 6️⃣ ជំហានទី ៦ — កត់ត្រាធាតុ ISSUE ថ្មី

- នៅក្រោមដំណាក់កាលផលិតកម្មដែលចង់បាន ចុច **New** នៅក្រោម **ISSUE**
- ទម្រង់ **Issue Factory** នឹងបើក
- បំពេញវាលដែលត្រូវការ៖

| វាល | ការពិពណ៌នា |
|---|---|
| **Department** | បំពេញដោយស្វ័យប្រវត្តិ (ឧ. CUT) |
| **Select Line** | ជ្រើសរើសខ្សែផលិតកម្ម |
| **To Factory** | ជ្រើសរើសរោងចក្រប្រទានទទួល |
| **Select an option** | សកម្ម / អសកម្ម |
| **Remark** | កំណត់ចំណាំជ្រើសរើស |
| **DO Date** | កាលបរិច្ឆេទបញ្ជាដឹក (បំពេញដោយស្វ័យប្រវត្តិ) |
| **Do Ref.** | លេខយោងសម្រាប់ DO |

ចុច **ISSUE** ដើម្បីបញ្ជាក់ ឬចុច **PRINT DO** ដើម្បីបោះពុម្ព Delivery Order

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'start'}}>
  <div align="center">
    <img src="/img/k8.png" width="100%" alt="CUT ISSUE New Button Highlighted" />
  </div>
  <div align="center">
    <img src="/img/k9.png" width="100%" alt="CUT - ISSUE New Entry Form" />
  </div>
</div>

---

### 7️⃣ ជំហានទី ៧ — ដំណាក់កាល FIN — QC Toggle & QC New

ដំណាក់កាល **FIN ផ្នែកបញ្ចប់** (ការបញ្ចប់) មានមុខងារ **QC** ពិសេសដែលមិនមាននៅដំណាក់កាលផ្សេង។ វាអនុញ្ញាតឱ្យធ្វើការត្រួតពិនិត្យ QC ដោយផ្ទាល់ពីអេក្រង់ WIP Data Collection។

<div align="center">
  <img src="/img/k10.png" width="60%" alt="FIN stage showing QC toggle and QC New button" />
</div>

---

#### 🔘 បើកដំណើរការ QC Mode

**QC toggle** លេចឡើងនៅជ្រុងខាងស្តាំខាងលើនៃប្លង់ FIN។

- ចុច **QC toggle** ដើម្បីប្តូរទៅ **ON** (ពណ៌បៃតង)
- នៅពេលបើក ជួរ ISSUE ត្រូវបានជំនួសដោយប៊ូតុង **QC New**
- នៅពេលបិទ ដំណាក់កាលដំណើរការដូចដំណាក់កាលស្តង់ដារផ្សេងទៀត

<div align="center">
  <img src="/img/q1.png" width="60%" alt="QC toggle highlighted on FIN stage" />
  <p><em>🔘 ចុច QC toggle (ជ្រុងខាងស្តាំខាងលើនៃប្លង់ FIN) ដើម្បីបើក QC mode</em></p>
</div>

---

#### ✅ កត់ត្រាធាតុ QC ថ្មី

នៅពេល QC mode បើក ចុច **QC New** ដើម្បីបើកធាតុត្រួតពិនិត្យ QC ថ្មីសម្រាប់ដំណាក់កាល FIN។

<div align="center">
  <img src="/img/q3.png" width="60%" alt="QC New button highlighted on FIN stage" />
  <p><em>✅ ចុច <strong>QC New</strong> ដើម្បីចាប់ផ្តើមការត្រួតពិនិត្យ QC ថ្មីសម្រាប់ដំណាក់កាលបញ្ចប់</em></p>
</div>

---

#### 🔲 QC Scanning — ទម្រង់ QC Endline Checker

បន្ទាប់ពីចុច **QC New** អេក្រង់ **QC Scanning** នឹងបើក ដោយបង្ហាញទម្រង់ **QC Endline Checker** (បន្ទាត់ត្រួតពិនិត្យគុណភាព)។

<div align="center">
  <img src="/img/p2.png" width="60%" alt="QC Scanning — QC Endline Checker form" />
</div>

ទម្រង់បង្ហាញការបញ្ជាទិញបច្ចុប្បន្ននៅខាងលើ និងផ្តល់វាលដូចខាងក្រោម៖

| វាល | ការពិពណ៌នា |
|---|---|
| 🆔 **Order No** | បំពេញដោយស្វ័យប្រវត្តិជាមួយលេខការបញ្ជាទិញបច្ចុប្បន្ន (ឧ. IA13690) |
| 📷 **Scan Input Icons** | រូបតំណាងបីសម្រាប់ជ្រើសរើសវិធីបញ្ចូល៖ ថតរូប, ស្កែន QR, ឬបញ្ចូលដោយដៃ |
| 🔵 **Transaction ប្រតិបត្តិការ** | ចុចដើម្បីមើលកំណត់ត្រាប្រតិបត្តិការ QC ដែលមានសម្រាប់ការបញ្ជាទិញនេះ |
| 🏭 **Instore Factory** | ឈ្មោះរោងចក្របំពេញដោយស្វ័យប្រវត្តិ (ឧ. IK Apparel Co. Ltd.) |
| 👤 **Operator** | បំពេញដោយស្វ័យប្រវត្តិជាមួយប្រតិបត្តិករដែលបានចូល (ឧ. D000670 — ALAMIS NOEME TENERIFE) |
| 📍 **Select Location** | បញ្ជីទម្លាក់ចុះសម្រាប់ជ្រើសរើសទីតាំងត្រួតពិនិត្យ (ជ្រើសរើសសីតាំង) |
| 🧵 **Select Sewing Line** | បញ្ជីទម្លាក់ចុះសម្រាប់ជ្រើសរើសខ្សែដេរសម្រាប់ការត្រួតពិនិត្យនេះ (ជ្រើសរើសបន្ទាត់ដេរ) |

**របៀបបំពេញទម្រង់៖**
ផ្ទៀងផ្ទាត់ **Order No** ថាត្រឹមត្រូវ
ជ្រើសរើសវិធីស្កែនដោយប្រើរូបតំណាង (📷 ម៉ាស៊ីនថត / 🔲 QR / ⌨️ ក្តារចុច)
ជ្រើសរើស **ទីតាំង** ពីបញ្ជីទម្លាក់ចុះ
ជ្រើសរើស **ខ្សែដេរ** ពីបញ្ជីទម្លាក់ចុះ
ស្កែន ឬបញ្ចូលលេខកូដប្រដាប់រោបាក់ ដើម្បីកត់ត្រាលទ្ធផលត្រួតពិនិត្យ QC

---

#### 📊 អេក្រង់ប្រតិបត្តិការ QC

បន្ទាប់ពីចុច **Transaction ប្រតិបត្តិការ** នៅលើអេក្រង់ QC Scanning អេក្រង់ **QC Transactions** នឹងបើក។ វាបង្ហាញ៖

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'start'}}>
  <div align="center">
    <img src="/img/q2.png" width="100%" alt="Transaction button on FIN stage" />
    <p><em>📋 ចុច <strong>Transaction</strong> ដើម្បីមើលប្រវត្តិ QC របស់ FIN</em></p>
  </div>
  <div align="center">
    <img src="/img/p1.jpg" width="100%" alt="QC Transactions screen showing inspection summary and data grid" />
    <p><em>📊 អេក្រង់ប្រតិបត្តិការ QC — សេចក្តីសង្ខេប និងកំណត់ត្រាការត្រួតពិនិត្យ</em></p>
  </div>
</div>

| ធាតុ | ការពិពណ៌នា |
|---|---|
| 🆔 **Operator ID** | ប្រតិបត្តិករ QC ដែលបានចូល (ឧ. D010666) |
| 📅 **Date Selector** | តម្រងកំណត់ត្រា QC តាមកាលបរិច្ឆេទ — ចុចរូបតំណាងផ្ទុកឡើងវិញ ដើម្បីបន្ទុកឡើងវិញ |
| 🔵 **Total Inspection** | ចំនួនសរុបនៃប្រដាប់រោបាក់ដែលបានត្រួតពិនិត្យ (ការត្រួតពិនិត្យសរុប) |
| 🟢 **Total Pass** | ចំនួនប្រដាប់រោបាក់ដែលបានឆ្លងផុត QC (ផ្នែកសរុប) |
| 🔴 **Total Defect** | ចំនួនប្រដាប់រោបាក់ដែលមានកំហុស (សរុបអោសរគំហុស) |
| 🥧 **Pie Chart** | ការបង្ហាញជាក្រាហ្វិករនៃសមាមាត្រ Pass ធៀប Defect |
| 📋 **Records Grid** | បញ្ជីលម្អិតនៃកំណត់ត្រាត្រួតពិនិត្យ QC ទាំងអស់ ជាមួយជួរឈរ៖ ទីតាំង, Order No, លេខកូដប្រដាប់រោបាក់, ស្ថានភាព, Rework, ពេលវេលា |
| 🔍 **Search / Filter** | ប្រអប់ស្វែងរក និងតម្រងជួរឈរ ដើម្បីចំណុចកំណត់កំណត់ត្រា |
| 📄 **Pagination** | ត្រួតពិនិត្យចំនួនជួរដេកដែលបង្ហាញក្នុងមួយទំព័រ (10 / 15 / 30 / 50) |

---

## ✅ សង្ខេប

| សកម្មភាព | ប៊ូតុង | លទ្ធផល |
|---|---|---|
| បន្ថែមផ្នែកដែលបានទទួល | **New** (RECEIVE) | បើកទម្រង់ Instore Factory |
| មើលប្រវត្តិ RECEIVE | **Transaction** (RECEIVE) | បើកប្រវត្តិប្រតិបត្តិការ |
| បញ្ចូនផ្នែកទៅដំណាក់កាលបន្ទាប់ | **New** (ISSUE) | បើកទម្រង់ Issue Factory |
| មើលប្រវត្តិ ISSUE | **Transaction** (ISSUE) | បើកប្រវត្តិប្រតិបត្តិការ |
| បើកការដំណើរការឡើងវិញ | **Recovery** toggle | បើកដំណើរការ Recovery mode |
| បើក QC inspection (FIN តែប៉ុណ្ណោះ) | **QC** toggle | ប្តូរដំណាក់កាល FIN ទៅ QC mode |
| ចាប់ផ្តើម QC inspection ថ្មី (FIN តែប៉ុណ្ណោះ) | **QC New** | បើកទម្រង់ស្កែន QC Endline Checker |
| ស្កែនប្រដាប់រោបាក់សម្រាប់ QC (FIN តែប៉ុណ្ណោះ) | រូបតំណាង **Camera / QR / Keyboard** | ជ្រើសរើសវិធីបញ្ចូលនៅអេក្រង់ QC Scanning |
| មើលប្រវត្តិ QC inspection (FIN តែប៉ុណ្ណោះ) | **Transaction** (QC Scanning) | បើកអេក្រង់ QC Transactions |