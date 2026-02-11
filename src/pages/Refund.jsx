import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const refundData = {
    en: {
        title: "Refund Policy",
        lastUpdated: "Last Updated: February 11, 2026",
        intro: "Language Study Master is currently provided as a free service. However, the following refund policy is established in preparation for potential future paid features or donations.",
        eligibility: {
            title: "1. Refund Eligibility",
            eligible: {
                title: "Eligible for Refund",
                items: [
                    "Service failure caused by system errors preventing usage.",
                    "Duplicate payment due to technical issues.",
                    "Services not rendered within 24 hours of payment (if applicable)."
                ]
            },
            notEligible: {
                title: "Not Eligible for Refund",
                items: [
                    "Simple change of mind after using the service.",
                    "Issues attributable to user environment (e.g., unstable internet).",
                    "Subjective dissatisfaction with the service quality."
                ]
            }
        },
        process: {
            title: "2. Refund Process",
            steps: [
                "Request: Send your transaction details and reason to swtee0506@gmail.com",
                "Review: Eligibility verification within 1-2 business days",
                "Processing: Refund completed within 3-5 business days after approval"
            ]
        },
        contact: {
            title: "3. Contact",
            content: `Service: Language Study Master
        Company: Language Study Project (nobonobo)
        Email: swtee0506@gmail.com`
        }
    },
    ko: {
        title: "환불정책",
        lastUpdated: "최종 수정일: 2026년 2월 11일",
        intro: "Language Study Master는 현재 무료로 제공되는 서비스입니다. 단, 향후 유료 기능 도입 또는 후원 기능을 대비하여 다음과 같은 환불 규정을 수립합니다.",
        eligibility: {
            title: "1. 환불 요건",
            eligible: {
                title: "환불 가능 사유",
                items: [
                    "시스템 오류로 인해 서비스를 전혀 이용하지 못한 경우",
                    "기술적 결함으로 인한 중복 결제",
                    "결제 후 24시간 이내에 서비스가 제공되지 않은 경우"
                ]
            },
            notEligible: {
                title: "환불 불가 사유",
                items: [
                    "서비스 이용 후 단순 변심",
                    "사용자 환경 문제(인터넷 연결 불안정 등)로 인한 이용 장애",
                    "서비스 결과에 대한 주관적인 불만족"
                ]
            }
        },
        process: {
            title: "2. 환불 절차",
            steps: [
                "신청: 결제 내역과 사유를 기재하여 swtee0506@gmail.com으로 발송",
                "검토: 영업일 기준 1-2일 내 환불 적합성 검토",
                "처리: 승인 후 영업일 기준 3-5일 내 환불 완료"
            ]
        },
        contact: {
            title: "3. 문의처",
            content: `서비스명: Language Study Master
        책임자: Language Study Project (nobonobo)
        이메일: swtee0506@gmail.com`
        }
    },
    ja: {
        title: "返金ポリシー",
        lastUpdated: "最終更新日: 2026年2月11日",
        intro: "当サービスは現在無料ですが、将来の有料機能に備え、以下の返金ポリシーを定めています。",
        eligibility: {
            title: "1. 返金資格",
            eligible: {
                title: "返金対象",
                items: [
                    "システムエラーによるサービス利用不可",
                    "重複支払い"
                ]
            },
            notEligible: {
                title: "返金対象外",
                items: [
                    "単純な心変わり",
                    "ユーザー環境の問題（インターネット接続など）"
                ]
            }
        },
        process: {
            title: "2. 返金プロセス",
            steps: [
                "申請: 詳細をswtee0506@gmail.comに送信",
                "審査: 1〜2営業日以内に確認",
                "処理: 承認後、3〜5営業日以内に完了"
            ]
        },
        contact: {
            title: "3. お問い合わせ",
            content: `Email: swtee0506@gmail.com`
        }
    },
    zh: {
        title: "退款政策",
        lastUpdated: "最后更新: 2026年2月11日",
        intro: "本服务目前免费，但为将来可能的付费功能制定以下退款政策。",
        eligibility: {
            title: "1. 退款资格",
            eligible: {
                title: "符合退款条件",
                items: [
                    "系统错误导致无法使用",
                    "重复付款"
                ]
            },
            notEligible: {
                title: "不符合退款条件",
                items: [
                    "改变主意",
                    "用户环境问题（如网络不稳定）"
                ]
            }
        },
        process: {
            title: "2. 退款流程",
            steps: [
                "申请: 发送详情至 swtee0506@gmail.com",
                "审核: 1-2个工作日内",
                "处理: 批准后3-5个工作日内"
            ]
        },
        contact: {
            title: "3. 联系方式",
            content: `Email: swtee0506@gmail.com`
        }
    },
    es: {
        title: "Política de Reembolso",
        lastUpdated: "Última actualización: 11 de febrero de 2026",
        intro: "El servicio es actualmente gratuito. Esta política es para futuras funciones pagas.",
        eligibility: {
            title: "1. Elegibilidad",
            eligible: {
                title: "Elegible",
                items: [
                    "Fallo del sistema",
                    "Pago duplicado"
                ]
            },
            notEligible: {
                title: "No elegible",
                items: [
                    "Cambio de opinión",
                    "Problemas del entorno del usuario"
                ]
            }
        },
        process: {
            title: "2. Proceso",
            steps: [
                "Solicitud: Enviar a swtee0506@gmail.com",
                "Revisión: 1-2 días hábiles",
                "Procesamiento: 3-5 días hábiles después de la aprobación"
            ]
        },
        contact: {
            title: "3. Contacto",
            content: `Email: swtee0506@gmail.com`
        }
    }
};

const Refund = ({ lang = 'ko' }) => {
    const currentData = refundData[lang] || refundData['en'];

    return (
        <div className="min-h-screen p-8 text-white max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-12">
                <h1 className="text-3xl font-bold title-gradient">{currentData.title}</h1>
            </div>

            <p className="text-sm text-gray-500 mb-8 pb-4 border-b border-white/10">
                {currentData.lastUpdated}
            </p>

            <div className="space-y-10 text-gray-300 leading-relaxed">
                <section>
                    <p className="text-lg text-gray-200">{currentData.intro}</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-6">{currentData.eligibility.title}</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Eligible Box */}
                        <div className="bg-emerald-900/10 border border-emerald-500/30 rounded-xl p-6">
                            <h3 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                                <CheckCircle size={20} />
                                {currentData.eligibility.eligible.title}
                            </h3>
                            <ul className="space-y-3">
                                {currentData.eligibility.eligible.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-emerald-100/80">
                                        <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500 shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Not Eligible Box */}
                        <div className="bg-red-900/10 border border-red-500/30 rounded-xl p-6">
                            <h3 className="text-red-400 font-bold mb-4 flex items-center gap-2">
                                <XCircle size={20} />
                                {currentData.eligibility.notEligible.title}
                            </h3>
                            <ul className="space-y-3">
                                {currentData.eligibility.notEligible.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-red-100/80">
                                        <span className="mt-1.5 w-1 h-1 rounded-full bg-red-500 shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">{currentData.process.title}</h2>
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <ol className="space-y-4">
                            {currentData.process.steps.map((step, i) => (
                                <li key={i} className="flex gap-4">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-600 text-xs font-bold shrink-0 mt-0.5">
                                        {i + 1}
                                    </span>
                                    <span className="text-gray-300">{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">{currentData.contact.title}</h2>
                    <div className="whitespace-pre-line text-gray-400">
                        {currentData.contact.content}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Refund;
