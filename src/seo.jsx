export function getSeo(lang = 'en') {
  if (lang === 'zh-TW') {
    return {
      title: 'Realmate Production｜電影・廣告・短劇製作',
      description: 'Realmate Production 專注於電影、廣告與短劇製作，洛杉磯／台北據點。真實故事，創造真實影響。',
      ogTitle: 'Realmate Production',
      ogDescription: '電影、廣告、短劇與社群內容製作。Real stories. Real impact.',
    };
  }
  return {
    title: 'Realmate Production — Film, Commercials, Short-Form',
    description: 'Realmate Production produces films, commercials, and short-form content. Los Angeles / Taipei. Real stories. Real impact.',
    ogTitle: 'Realmate Production',
    ogDescription: 'Film, Commercials, Short-Form. Real stories. Real impact.',
  };
}
