import type { Metadata } from "next";
import { getTypeByName } from "@/lib/constants/types";
import { ResultPageClient } from "./ResultPageClient";

type ResultPageProps = {
  params: Promise<{ type: string }>;
};

export async function generateMetadata({ params }: ResultPageProps): Promise<Metadata> {
  const { type } = await params;
  const typeData = getTypeByName(type);

  if (!typeData) {
    return { title: "結果が見つかりません — DSOP" };
  }

  return {
    title: `あなたは ${typeData.nameEn}（${typeData.nameJa}） — DSOP`,
    description: typeData.tagline,
    openGraph: {
      title: `私のポーカータイプは ${typeData.nameEn}`,
      description: typeData.tagline,
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function ResultPage({ params }: ResultPageProps) {
  const { type } = await params;
  const typeData = getTypeByName(type);

  if (!typeData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-card-white/50">タイプが見つかりません</p>
      </div>
    );
  }

  return <ResultPageClient typeData={typeData} />;
}
