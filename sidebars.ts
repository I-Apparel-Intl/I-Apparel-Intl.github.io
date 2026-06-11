import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [

    // ─── Introduction ─────────────────────────────────────────────────────
    {
      type: 'doc',
      id: 'menu/overview',
      label: '📖 Introduction',
    },

    // ─── Install ──────────────────────────────────────────────────────────
    {
      type: 'doc',
      id: 'install/quick-start',
      label: '⚡ Install',
    },

    // ─── Login ────────────────────────────────────────────────────────────
    {
      type: 'doc',
      id: 'login/how-to-login',
      label: '🔐 Login',
    },

    // ─── Home Page ────────────────────────────────────────────────────────
    {
      type: 'doc',
      id: 'home/index',
      label: '🏠 Home Page',
    },

    // ─── Step 1 ───────────────────────────────────────────────────────────
    {
      type: 'doc',
      id: 'home/step1-wip-data-collection',
      label: '📊 WIP Data Collection',
    },

    // ─── Step 2 ───────────────────────────────────────────────────────────
    {
      type: 'doc',
      id: 'home/step2-wip-recovery-dispose',
      label: '♻️ WIP Recovery / Dispose',
    },

    // ─── Step 3 ───────────────────────────────────────────────────────────
    {
      type: 'category',
      label: '🏭 WIP Operation',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'home/step3-wip-operation-sewing-offline',
          label: '🧵 Sewing Offline',
        },
        {
          type: 'doc',
          id: 'home/step3-wip-operation-sewing-online',
          label: '🌐 Sewing Online',
        },
        {
          type: 'doc',
          id: 'home/step3-wip-operation-packing',
          label: '📦 Packing',
        },
      ],
    },

    // ─── Step 4 ───────────────────────────────────────────────────────────
    {
      type: 'doc',
      id: 'home/step-wip-hourly-output',
      label: '⏱️ WIP Hourly Output',
    },

    // ─── Step 5 ───────────────────────────────────────────────────────────
    {
      type: 'category',
      label: '🎫 WIP Ticket Tracking',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'home/step5-wip-ticket-tracking-component-checklist',
          label: '✅ Component Checklist',
        },
        {
          type: 'doc',
          id: 'home/step5-wip-ticket-tracking-qr-traceability',
          label: '🔲 QR Traceability',
        },
      ],
    },

    // ─── QMS Features ─────────────────────────────────────────────────────
    {
      type: 'category',
      label: '🛡️ QMS Features',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'qms/finishing-measurement',
          label: '🔍 Finishing Measurement',
        },
    
      ],
    },

  ],
};

export default sidebars;