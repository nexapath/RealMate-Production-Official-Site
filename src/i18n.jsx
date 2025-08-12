export const messages = {
  'en': {
    nav_about: 'About',
    nav_director: 'Director',
    nav_bts: 'Behind the Scenes',
    nav_work: 'Works',
    nav_contact: 'Contact',
    hero_title: 'Cinema that makes brands seen. Stories that make them remembered.',
    hero_cta_watch: 'View Works',
    hero_cta_quote: 'Get a Quote',
    slogan_label: 'Slogan',
    slogan_text: 'Real stories. Real impact.',
    position_title: 'Our Positioning',
    position_desc: 'We deliver end-to-end production: creative development, pre-production, directing, and post. We specialize in brand films, product commercials, music videos, short-form, and social content.',
    bullets_1: 'Script & storyboard development',
    bullets_2: 'Directing, cinematography, lights, art',
    bullets_3: 'On-location / studio production & PM',
    bullets_4: 'Editing, color, sound, captions',
    director_title: 'Director',
    director_desc: 'Known for narrative pacing and emotional capture, translating brand language into memorable scenes across realistic and stylized tones.',
    bts_title: 'Behind the Scenes',
    bts_note: 'Three production stills (click to zoom)',
    works_title: 'Works',
    works_note: 'Six thumbnails, each links to an external site',
    contact_title: 'Contact Us',
    contact_desc: 'Tell us your story and needs. We will reply within 1–2 business days (PST).',
    form_name: 'Name',
    form_email: 'Email',
    form_company: 'Company / Brand',
    form_timeline: 'Estimated Timeline',
    form_message: 'Project Brief',
    form_message_ph: 'Brief goals, budget range, reference links...',
    form_submit: 'Send Message',
    form_sending: 'Sending…',
    form_success: 'Thanks — we received your message!',
    form_error_generic: 'Submission failed. Please try again later.',
    form_error_network: 'Network error. Please check your connection.',
    ext_newtab: 'Opens new tab',
    footer_top: 'Back to top',
  },
  'zh-TW': {
    nav_about: '關於我們',
    nav_director: '導演',
    nav_bts: '現場花絮',
    nav_work: '作品集',
    nav_contact: '聯絡我們',
    hero_title: '影像讓品牌被看見，故事讓人記住',
    hero_cta_watch: '觀看作品',
    hero_cta_quote: '取得報價',
    slogan_label: 'Slogan',
    slogan_text: 'Real stories. Real impact.',
    position_title: '我們的定位',
    position_desc: '我們提供端到端製作：創意開發、前期企劃、導演調度與後期整合。擅長品牌形象片、產品廣告、MV、短劇與社群內容。',
    bullets_1: '腳本開發與分鏡',
    bullets_2: '導演、攝影、燈光與美術',
    bullets_3: '外景/棚內調度與製片管理',
    bullets_4: '剪輯、調色、聲音與字幕',
    director_title: '導演',
    director_desc: '以敘事節奏與情感捕捉見長，能將品牌語言轉譯為可被記住的影像場景，風格橫跨寫實與風格化。',
    bts_title: '現場花絮',
    bts_note: '三張拍攝現場照片（可點擊放大）',
    works_title: '作品集',
    works_note: '六個作品縮圖，各別連結至外部網站',
    contact_title: '聯絡我們',
    contact_desc: '告訴我們你的故事與需求，我們將在 1–2 個工作日內回覆（PST）。',
    form_name: '姓名',
    form_email: 'Email',
    form_company: '公司 / 品牌',
    form_timeline: '預計檔期',
    form_message: '專案簡述',
    form_message_ph: '請描述目標、預算區間與參考連結…',
    form_submit: '送出訊息',
    form_sending: '送出中…',
    form_success: '已收到你的訊息，我們會盡快回覆！',
    form_error_generic: '送出失敗，請稍後再試。',
    form_error_network: '網路異常，請檢查連線後重試。',
    ext_newtab: '外部開新分頁',
    footer_top: '回到頂部',
  }
}

export const defaultLang = 'en';

export function getLang() {
  const saved = localStorage.getItem('lang');
  if (saved) return saved;
  const nav = navigator.language || 'en';
  return nav.startsWith('zh') ? 'zh-TW' : 'en';
}

export function setLang(lang) {
  localStorage.setItem('lang', lang);
  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}
