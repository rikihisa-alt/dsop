import type { PokerType } from "@/lib/types";

export function generateShareText(type: PokerType, baseUrl: string): string {
  return `私のポーカー意思決定タイプは「${type.nameEn}（${type.nameJa}）」でした！\n\n${type.tagline}\n\n#DSOP #ポーカー診断\n${baseUrl}/result/${type.nameEn.toLowerCase()}`;
}

export function getShareUrl(text: string): string {
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
}
