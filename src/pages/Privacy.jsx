import React, { useState } from 'react';

const privacyData = {
    en: {
        title: "Privacy Policy",
        lastUpdated: "Last Updated: February 11, 2026",
        sections: [
            {
                title: "1. Introduction",
                content: `Language Study Project ("Company", "we", "us", or "our"), values the privacy of its users and complies with applicable privacy laws and regulations.
        This Privacy Policy describes how we handle personal information in connection with the Language Study Master service ("Service").
        Our service primarily operates client-side, meaning we prioritized not collecting or storing personal data on our servers.`
            },
            {
                title: "2. Information We Collect and Purpose of Use",
                content: (
                    <div className="space-y-4">
                        <div>
                            <strong>Voice Recordings</strong>
                            <ul className="list-disc pl-5 mt-1 text-gray-400">
                                <li>Information Collected: None stored on server.</li>
                                <li>Processing: Audio is recorded and processed locally within your browser. We do not upload your voice data to any external server. Recordings are stored in your browser's temporary memory and are cleared when you close the tab or clear cache.</li>
                            </ul>
                        </div>
                        <div>
                            <strong>YouTube Data</strong>
                            <ul className="list-disc pl-5 mt-1 text-gray-400">
                                <li>Information Collected: None.</li>
                                <li>Processing: YouTube videos are embedded using the official YouTube IFrame Player API. We do not track which videos you watch.</li>
                            </ul>
                        </div>
                    </div>
                )
            },
            {
                title: "3. Technical Information (Google Analytics & AdSense)",
                content: `The Service may use Google Analytics for service improvement and Google AdSense for advertising. This information is anonymized and cannot identify individuals:
        
        Information Collected by Google Analytics:
        - Website usage statistics (visitor count, page views)
        - Browser type, version, and operating system
        - Approximate geographic information
        
        This information is processed in accordance with Google's Privacy Policy.
        Google Analytics Opt-out: https://tools.google.com/dlpage/gaoptout`
            },
            {
                title: "4. Cookies",
                content: `The Service uses cookies for limited purposes:
        - Essential Cookies: Session maintenance.
        - Analytics & Ads: Google Analytics and AdSense may use cookies to understand usage and serve relevant ads.
        You can refuse the use of cookies through your browser settings.`
            },
            {
                title: "5. Sharing of Information with Third Parties",
                content: `The Company does not share users' personal information with third parties as a matter of principle. Exceptions include:
        - When required by law.
        - To trusted service providers (like Google) for analytics and hosting, under strict confidentiality.`
            },
            {
                title: "6. Your Rights",
                content: `Since we do not store user accounts or personal data on our servers, there is no "account" to delete. You have full control over your local data (recordings) and can delete them instantly via the interface.`
            },
            {
                title: "7. Children's Privacy",
                content: `The Service does not intentionally collect personal information from children under 14 years of age.`
            },
            {
                title: "8. Changes to This Privacy Policy",
                content: `This Privacy Policy may be updated to reflect changes in laws or the Service. Significant changes will be announced within the Service.`
            },
            {
                title: "9. Contact",
                content: `If you have any questions about this Privacy Policy, please contact us at:
        
        Service: Language Study Master
        Company: Language Study Project (nobonobo)
        Email: swtee0506@gmail.com`
            }
        ]
    },
    ko: {
        title: "개인정보처리방침",
        lastUpdated: "최종 수정일: 2026년 2월 11일",
        sections: [
            {
                title: "1. 개요",
                content: `Language Study Project (이하 "회사")는 이용자의 개인정보를 소중히 여기며, 관련 법령을 준수합니다.
        본 개인정보처리방침은 Language Study Master 서비스(이하 "서비스")와 관련하여 개인정보가 어떻게 처리되는지 설명합니다.
        본 서비스는 기본적으로 클라이언트(사용자 기기) 측에서 작동하며, 서버에 개인정보를 저장하지 않는 것을 원칙으로 합니다.`
            },
            {
                title: "2. 수집하는 정보 및 이용 목적",
                content: (
                    <div className="space-y-4">
                        <div>
                            <strong>음성 녹음 데이터</strong>
                            <ul className="list-disc pl-5 mt-1 text-gray-400">
                                <li>수집 여부: 서버에 저장되지 않음.</li>
                                <li>처리 방식: 모든 음성 녹음은 브라우저 내에서 로컬로 처리됩니다. 외부 서버로 전송되거나 저장되지 않습니다. 녹음 파일은 브라우저를 닫거나 캐시를 지우면 삭제됩니다.</li>
                            </ul>
                        </div>
                        <div>
                            <strong>YouTube 데이터</strong>
                            <ul className="list-disc pl-5 mt-1 text-gray-400">
                                <li>수집 여부: 없음.</li>
                                <li>처리 방식: YouTube 공식 IFrame Player API를 사용하여 영상을 재생하며, 시청 기록을 별도로 수집하지 않습니다.</li>
                            </ul>
                        </div>
                    </div>
                )
            },
            {
                title: "3. 기술적 정보 (Google Analytics 및 AdSense)",
                content: `서비스 개선을 위해 Google Analytics를, 광고 게재를 위해 Google AdSense를 사용할 수 있습니다. 이 정보는 익명화되어 개인을 식별할 수 없습니다.
        
        Google이 수집하는 정보:
        - 방문자 수, 페이지 뷰 등 웹사이트 통계
        - 브라우저 종류, 운영체제 버전
        - 대략적인 위치 정보
        
        이 정보는 Google의 개인정보처리방침에 따라 처리됩니다.
        Google Analytics 거부: https://tools.google.com/dlpage/gaoptout`
            },
            {
                title: "4. 쿠키 (Cookies)",
                content: `본 서비스는 원활한 이용을 위해 쿠키를 제한적으로 사용합니다.
        - 필수 쿠키: 서비스 이용을 위한 세션 유지.
        - 분석 및 광고: Google Analytics 및 AdSense는 사용 패턴 분석 및 맞춤형 광고를 위해 쿠키를 사용할 수 있습니다.
        브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.`
            },
            {
                title: "5. 제3자 제공",
                content: `회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 법령에 의한 경우나 Google과 같은 신뢰할 수 있는 분석/호스팅 서비스 제공자에게는 예외적으로 제공될 수 있습니다.`
            },
            {
                title: "6. 이용자의 권리",
                content: `서버에 계정 정보나 개인 데이터를 저장하지 않으므로, 별도의 '회원 탈퇴' 절차는 없습니다. 사용자는 언제든지 인터페이스를 통해 자신의 로컬 녹음 데이터를 즉시 삭제할 수 있습니다.`
            },
            {
                title: "7. 아동의 개인정보",
                content: `본 서비스는 만 14세 미만 아동의 개인정보를 의도적으로 수집하지 않습니다.`
            },
            {
                title: "8. 변경사항",
                content: `법령이나 서비스 변경에 따라 본 방침이 수정될 수 있으며, 중요한 변경사항은 서비스 내 공지합니다.`
            },
            {
                title: "9. 문의처",
                content: `개인정보처리방침에 대해 궁금한 점이 있으시면 아래로 연락 주시기 바랍니다.
        
        서비스명: Language Study Master
        책임자: Language Study Project (nobonobo)
        이메일: swtee0506@gmail.com`
            }
        ]
    },
    ja: {
        title: "プライバシーポリシー",
        lastUpdated: "最終更新日: 2026年2月11日",
        sections: [
            {
                title: "1. 概要",
                content: `Language Study Project（以下「当社」）は、ユーザーのプライバシーを尊重し、関連するプライバシー法および規制を遵守します。
        本プライバシーポリシーは、Language Study Masterサービス（以下「サービス」）に関連して、当社が個人情報をどのように取り扱うかを説明します。
        当社のサービスは主にクライアント側で動作するため、サーバー上で個人データを収集または保存しないことを優先しています。`
            },
            {
                title: "2. 収集する情報とその使用目的",
                content: `音声録音：サーバーには保存されません。音声はブラウザ内でローカルに処理されます。
        YouTubeデータ：公式APIを使用し、視聴履歴は追跡しません。`
            },
            {
                title: "3. 技術情報 (Google Analytics & AdSense)",
                content: `サービス改善のためにGoogle Analyticsを使用し、広告のためにGoogle AdSenseを使用する場合があります。この情報は匿名化されており、個人を特定することはできません。`
            },
            {
                title: "4. クッキー (Cookies)",
                content: `本サービスは、セッション維持や分析・広告のためにクッキーを使用する場合があります。ブラウザの設定でクッキーを拒否できます。`
            },
            {
                title: "5. 第三者への情報提供",
                content: `法令で要求される場合や、分析のための信頼できるサービスプロバイダー（Googleなど）を除き、個人情報を第三者と共有することはありません。`
            },
            {
                title: "6. お問い合わせ",
                content: `ご質問がある場合は、以下までご連絡ください: swtee0506@gmail.com`
            }
        ]
    },
    zh: {
        title: "隐私政策",
        lastUpdated: "最后更新: 2026年2月11日",
        sections: [
            {
                title: "1. 简介",
                content: `Language Study Project（"公司"）重视用户的隐私，并遵守适用的隐私法律和法规。
        本隐私政策描述了我们如何处理与 Language Study Master 服务（"服务"）相关的个人信息。
        我们的服务主要在客户端运行，这意味着我们优先考虑不在服务器上收集或存储个人数据。`
            },
            {
                title: "2. 我们收集的信息及用途",
                content: `录音：不存储在服务器上。音频在浏览器内本地处理。
        YouTube 数据：使用官方 API，不追踪观看历史。`
            },
            {
                title: "3. 技术信息 (Google Analytics & AdSense)",
                content: `本服务可能使用 Google Analytics 进行服务改进，并使用 Google AdSense 进行广告投放。这些信息是匿名的。`
            },
            {
                title: "4. Cookies",
                content: `本服务出于必要目的使用 Cookies。您可以通过浏览器设置拒绝使用 Cookies。`
            },
            {
                title: "5. 第三方信息共享",
                content: `原则上，公司不会与第三方共享用户的个人信息，除非法律要求或为了分析目的（如 Google）。`
            },
            {
                title: "6. 联系方式",
                content: `如有疑问，请联系我们：swtee0506@gmail.com`
            }
        ]
    },
    es: {
        title: "Política de Privacidad",
        lastUpdated: "Última actualización: 11 de febrero de 2026",
        sections: [
            {
                title: "1. Introducción",
                content: `Language Study Project ("Compañía") valora la privacidad de sus usuarios y cumple con las leyes de privacidad aplicables.
        Esta Política de Privacidad describe cómo manejamos la información personal en relación con el servicio Language Study Master ("Servicio").
        Nuestro servicio opera principalmente del lado del cliente, lo que significa que priorizamos no recopilar ni almacenar datos personales en nuestros servidores.`
            },
            {
                title: "2. Información que recopilamos",
                content: `Grabaciones de voz: No se almacenan en el servidor. El audio se procesa localmente.
        Datos de YouTube: Utiliza la API oficial, no rastrea el historial de visualización.`
            },
            {
                title: "3. Información técnica",
                content: `El Servicio puede utilizar Google Analytics para mejorar el servicio y Google AdSense para publicidad. Esta información es anónima.`
            },
            {
                title: "4. Cookies",
                content: `El Servicio utiliza cookies para fines limitados. Puede rechazar el uso de cookies a través de la configuración de su navegador.`
            },
            {
                title: "5. Compartir información",
                content: `La Compañía no comparte información personal con terceros, excepto cuando lo exige la ley o para análisis (como Google).`
            },
            {
                title: "6. Contacto",
                content: `Si tiene preguntas, contáctenos en: swtee0506@gmail.com`
            }
        ]
    }
};

const Privacy = ({ lang = 'ko' }) => {
    // Fallback to English if translations are missing or partial
    const data = privacyData[lang] || privacyData['en'];

    return (
        <div className="min-h-screen p-8 text-white max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold title-gradient">{data.title}</h1>
            </div>

            <p className="text-sm text-gray-500 mb-8 pb-4 border-b border-white/10">
                {data.lastUpdated}
            </p>

            <div className="space-y-10 text-gray-300 leading-relaxed">
                {data.sections.map((section, index) => (
                    <section key={index}>
                        <h2 className="text-xl font-semibold text-white mb-4">{section.title}</h2>
                        <div className="whitespace-pre-line text-gray-400">
                            {section.content}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Privacy;
