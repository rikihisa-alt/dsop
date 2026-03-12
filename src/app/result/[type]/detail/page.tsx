import { getTypeByName } from "@/lib/constants/types";
import { DetailPageClient } from "./DetailPageClient";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const typeData = getTypeByName(type);

  if (!typeData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-card-white/50">タイプが見つかりません</p>
      </div>
    );
  }

  return <DetailPageClient typeData={typeData} />;
}
