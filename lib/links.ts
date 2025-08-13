export const HOTMART_URL_STANDARD = "https://pay.hotmart.com/M101238238O?off=ur3sdp6i";
export const HOTMART_URL_CONSCIOUS = "https://pay.hotmart.com/M101238238O?off=p1uhfzib";

export type UTM = {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
};

export const LINKS = {
  streamingLastRelease: "https://open.spotify.com/track/3g3DvJBeDSq5nEEDOrA5xX?si=11b9d733d3aa4008",
  book: "https://pay.hotmart.com/M101238238O?off=ur3sdp6i",
  newsletter: "/api/subscribe",
};

export function withUTM(url: string, utm?: UTM) {
  const defaultUTM = { source: "website", medium: "button" };
  const finalUTM = { ...defaultUTM, ...utm };

  const u = new URL(url, typeof window === "undefined" ? "https://example.com" : window.location.origin);
  if (finalUTM.source) u.searchParams.set("utm_source", finalUTM.source);
  if (finalUTM.medium) u.searchParams.set("utm_medium", finalUTM.medium);
  if (finalUTM.campaign) u.searchParams.set("utm_campaign", finalUTM.campaign);
  if (finalUTM.content) u.searchParams.set("utm_content", finalUTM.content);
  return u.toString();
}
