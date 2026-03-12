import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "利用規約 — DSOP",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-6 pt-24 pb-16">
        <h1 className="font-display text-2xl font-bold mb-8">利用規約</h1>
        <div className="prose-sm text-card-white/60 space-y-6">
          <section>
            <h2 className="text-lg font-bold text-card-white/80 mb-3">第1条（適用）</h2>
            <p>
              本規約は、DSOP（以下「本サービス」）の利用に関する条件を定めるものです。
              ユーザーは本規約に同意のうえ、本サービスを利用するものとします。
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-card-white/80 mb-3">第2条（サービス内容）</h2>
            <p>
              本サービスは、ポーカーにおける意思決定スタイルの診断サービスです。
              診断結果はあくまで参考情報であり、実際のポーカーの成績を保証するものではありません。
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-card-white/80 mb-3">第3条（有料コンテンツ）</h2>
            <p>
              有料コンテンツの決済はStripeを通じて行われます。
              購入後の返金については、個別にお問い合わせください。
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-card-white/80 mb-3">第4条（禁止事項）</h2>
            <p>
              本サービスの不正利用、リバースエンジニアリング、
              診断結果の商用利用は禁止します。
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-card-white/80 mb-3">第5条（免責事項）</h2>
            <p>
              本サービスの利用により生じたいかなる損害についても、
              運営者は一切の責任を負いません。
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
