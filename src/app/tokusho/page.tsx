import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "特定商取引法に基づく表記 — DSOP",
};

export default function TokushoPage() {
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-6 pt-24 pb-16">
        <h1 className="font-display text-2xl font-bold mb-8">
          特定商取引法に基づく表記
        </h1>
        <div className="text-card-white/60 space-y-6">
          <dl className="space-y-4">
            <div>
              <dt className="text-sm font-bold text-card-white/80">販売事業者</dt>
              <dd className="mt-1">（事業者名を記載）</dd>
            </div>
            <div>
              <dt className="text-sm font-bold text-card-white/80">代表者</dt>
              <dd className="mt-1">（代表者名を記載）</dd>
            </div>
            <div>
              <dt className="text-sm font-bold text-card-white/80">所在地</dt>
              <dd className="mt-1">（住所を記載）</dd>
            </div>
            <div>
              <dt className="text-sm font-bold text-card-white/80">連絡先</dt>
              <dd className="mt-1">（メールアドレスを記載）</dd>
            </div>
            <div>
              <dt className="text-sm font-bold text-card-white/80">販売価格</dt>
              <dd className="mt-1">詳細レポート：¥980（税込）</dd>
            </div>
            <div>
              <dt className="text-sm font-bold text-card-white/80">支払い方法</dt>
              <dd className="mt-1">クレジットカード（Stripe経由）</dd>
            </div>
            <div>
              <dt className="text-sm font-bold text-card-white/80">商品引渡し時期</dt>
              <dd className="mt-1">決済完了後、即時閲覧可能</dd>
            </div>
            <div>
              <dt className="text-sm font-bold text-card-white/80">返品・キャンセル</dt>
              <dd className="mt-1">
                デジタルコンテンツという性質上、購入後の返品・キャンセルは
                原則としてお受けできません。
              </dd>
            </div>
          </dl>
        </div>
      </main>
      <Footer />
    </>
  );
}
