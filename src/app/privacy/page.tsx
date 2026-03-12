import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "プライバシーポリシー — DSOP",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-6 pt-24 pb-16">
        <h1 className="font-display text-2xl font-bold mb-8">プライバシーポリシー</h1>
        <div className="prose-sm text-card-white/60 space-y-6">
          <section>
            <h2 className="text-lg font-bold text-card-white/80 mb-3">1. 収集する情報</h2>
            <p>
              本サービスでは、以下の情報を収集することがあります。
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Googleアカウント情報（メールアドレス、表示名）</li>
              <li>診断回答データおよび診断結果</li>
              <li>購入履歴</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-bold text-card-white/80 mb-3">2. 情報の利用目的</h2>
            <p>
              収集した情報は、サービス提供、診断結果の保存、
              購入管理の目的にのみ使用します。
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-card-white/80 mb-3">3. 第三者提供</h2>
            <p>
              法令に基づく場合を除き、ユーザーの同意なく
              第三者に個人情報を提供することはありません。
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-card-white/80 mb-3">4. データ管理</h2>
            <p>
              データはSupabaseにて適切に管理し、
              決済情報はStripeに委託して安全に処理します。
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
