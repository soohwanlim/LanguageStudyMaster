import React, { useState } from 'react';

const termsData = {
    en: {
        title: "Terms of Service",
        lastUpdated: "Last Updated: February 11, 2026",
        sections: [
            {
                title: "1. Acceptance of Terms",
                content: `These Terms of Service ("Terms") govern your use of the Language Study Master and related services ("Service") provided by Language Study Project ("Company", "we", "us", or "our"). By accessing or using the Service, you agree to be bound by these Terms.`
            },
            {
                title: "2. Definitions",
                content: `"Service" means all language study features, voice recording tools, and related content provided by the Company.
        "User" means any individual who uses the Service in accordance with these Terms.
        "Content" means all text, audio recordings, study materials, and other materials provided within the Service.`
            },
            {
                title: "3. Eligibility",
                content: `The Service is available to individuals aged 14 and older.
        Users under 14 may use the Service with the consent of a parent or legal guardian.
        By using the Service, you represent that you are at least 14 years of age.`
            },
            {
                title: "4. Changes to Terms",
                content: `The Company may modify these Terms as necessary. Material changes will be notified 30 days in advance via the Service website.
        If you do not agree with the modified Terms, you may discontinue use of the Service. Continued use constitutes acceptance of the modified Terms.`
            },
            {
                title: "5. Description of Service",
                content: `The Company provides the following services:
        - Voice recording and playback for language practice
        - YouTube video embedding for study materials
        - Local file management for recordings
        
        The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Company does not guarantee the quality, accuracy, or timeliness of the Service.`
            },
            {
                title: "6. User Obligations",
                content: `Users shall not engage in the following activities:
        - Interfering with the normal operation of the Service
        - Infringing the Company's intellectual property rights
        - Accessing the Service using automated means (bots, scripts) without permission
        - Distributing viruses or malicious code`
            },
            {
                title: "7. Privacy",
                content: `The Company prioritizes user privacy. Voice recordings are processed locally in the browser and are not uploaded to our servers.
        For details on privacy, please refer to our Privacy Policy.`
            },
            {
                title: "8. Disclaimers and Limitation of Liability",
                content: `Accuracy of Results: Self-study tools are for reference only.
        Limitation of Damages: Unless caused by willful misconduct, the Company shall not be liable for damages arising from use of the Service (e.g., data loss due to browser cache clearing).
        Liability Cap: In no event shall the Company's total liability exceed $100 USD.`
            },
            {
                title: "9. Intellectual Property",
                content: `All intellectual property rights in the Service's interface and code belong to the Company.
        Rights to voice recordings created by Users remain with the Users.`
            },
            {
                title: "10. Governing Law",
                content: `These Terms shall be governed by and construed in accordance with the laws of the Republic of Korea.
        Any disputes shall be submitted to the competent courts in the Republic of Korea.`
            },
            {
                title: "11. Contact",
                content: `If you have any questions about these Terms, please contact us at:
        
        Language Study Project (nobonobo)
        Email: swtee0506@gmail.com`
            }
        ]
    },
    ko: {
        title: "이용약관",
        lastUpdated: "최종 수정일: 2026년 2월 11일",
        sections: [
            {
                title: "1. 약관의 승인",
                content: `본 이용약관(이하 "약관")은 Language Study Project(이하 "회사")가 제공하는 Language Study Master 및 관련 서비스(이하 "서비스")의 이용에 관한 조건 및 절차를 규정합니다. 서비스를 이용함으로써 귀하는 본 약관에 동의하게 됩니다.`
            },
            {
                title: "2. 정의",
                content: `"서비스"란 회사가 제공하는 모든 언어 학습 기능, 음성 녹음 도구 및 관련 콘텐츠를 의미합니다.
        "이용자"란 본 약관에 따라 서비스를 이용하는 개인을 의미합니다.
        "콘텐츠"란 서비스 내에서 제공되는 텍스트, 음성 녹음, 학습 자료 등을 의미합니다.`
            },
            {
                title: "3. 이용 자격",
                content: `본 서비스는 만 14세 이상 개인을 대상으로 합니다.
        만 14세 미만 이용자는 법정대리인의 동의 하에 서비스를 이용할 수 있습니다.`
            },
            {
                title: "4. 약관의 변경",
                content: `회사는 필요한 경우 본 약관을 변경할 수 있습니다. 중대한 변경 사항은 30일 전에 서비스 내 공지사항을 통해 통지합니다.
        변경된 약관에 동의하지 않는 경우 서비스 이용을 중단할 수 있으며, 계속 이용하는 경우 변경된 약관에 동의한 것으로 간주합니다.`
            },
            {
                title: "5. 서비스의 내용",
                content: `회사는 다음과 같은 서비스를 제공합니다:
        - 언어 연습을 위한 음성 녹음 및 재생
        - 학습 자료 활용을 위한 YouTube 영상 임베딩
        - 녹음 파일의 로컬 관리
        
        서비스는 "있는 그대로(AS IS)" 제공되며, 회사는 서비스의 품질이나 영속성을 보증하지 않습니다.`
            },
            {
                title: "6. 이용자의 의무",
                content: `이용자는 다음 행위를 하여서는 안 됩니다:
        - 서비스의 정상적인 운영을 방해하는 행위
        - 회사의 지적재산권을 침해하는 행위
        - 자동화된 수단(봇, 스크립트 등)을 이용하여 서비스에 접근하는 행위
        - 악성 코드나 바이러스를 유포하는 행위`
            },
            {
                title: "7. 개인정보 보호",
                content: `회사는 이용자의 개인정보 보호를 최우선으로 합니다. 음성 녹음은 브라우저 내에서 로컬로 처리되며 회사 서버로 전송되지 않습니다.
        자세한 내용은 개인정보처리방침을 참고하시기 바랍니다.`
            },
            {
                title: "8. 면책 및 책임 제한",
                content: `결과의 정확성: 본 서비스는 자가 학습 도구로서 제공됩니다.
        손해배상 제한: 고의 또는 중과실이 없는 한, 회사는 서비스 이용으로 인한 손해(예: 브라우저 캐시 삭제로 인한 데이터 손실)에 대해 책임을 지지 않습니다.
        책임 한도: 회사의 총 책임은 $100 USD를 초과하지 않습니다.`
            },
            {
                title: "9. 지적재산권",
                content: `서비스의 인터페이스 및 코드에 대한 모든 지적재산권은 회사에 귀속됩니다.
        이용자가 생성한 음성 녹음에 대한 권리는 이용자에게 있습니다.`
            },
            {
                title: "10. 준거법 및 분쟁 해결",
                content: `본 약관은 대한민국 법률에 따라 해석됩니다. 서비스 이용과 관련하여 발생한 분쟁은 대한민국 법원을 관할 법원으로 합니다.`
            },
            {
                title: "11. 연락처",
                content: `본 약관에 대해 궁금한 점이 있으시면 아래로 연락 주시기 바랍니다.
        
        Language Study Project (nobonobo)
        이메일: swtee0506@gmail.com`
            }
        ]
    },
    ja: {
        title: "利用規約",
        lastUpdated: "最終更新日: 2026年2月11日",
        sections: [
            {
                title: "1. 規約の同意",
                content: `本利用規約は、Language Study Projectが提供するサービスの利用条件を規定します。本サービスを利用することにより、本規約に同意したものとみなされます。`
            },
            {
                title: "2. 利用資格",
                content: `本サービスは14歳以上の個人を対象としています。14歳未満の利用者は、保護者の同意が必要です。`
            },
            {
                title: "3. サービスの提供",
                content: `本サービスは「現状有姿」で提供され、品質や永続性は保証されません。機能には、音声録音、YouTube埋め込みなどが含まれます。`
            },
            {
                title: "4. 禁止事項",
                content: `サービスの運営妨害、知的財産権の侵害、不正アクセス、ウイルス配布などは禁止されています。`
            },
            {
                title: "5. 免責事項",
                content: `当社は、故意または重過失がない限り、サービスの利用に起因する損害（データ損失など）について責任を負いません。`
            },
            {
                title: "6. 準拠法",
                content: `本規約は韓国法に準拠して解釈されます。`
            },
            {
                title: "7. お問い合わせ",
                content: `お問い合わせは swtee0506@gmail.com までお願いします。`
            }
        ]
    },
    zh: {
        title: "服务条款",
        lastUpdated: "最后更新: 2026年2月11日",
        sections: [
            {
                title: "1. 条款接受",
                content: `本服务条款管辖您对 Language Study Project 提供的服务的使用。访问或使用本服务即表示您同意受这些条款的约束。`
            },
            {
                title: "2. 资格",
                content: `本服务适用于14岁及以上的个人。14岁以下用户需征得父母同意。`
            },
            {
                title: "3. 服务说明",
                content: `本服务按“原样”提供。功能包括录音、YouTube 嵌入等。不保证服务的及时性或准确性。`
            },
            {
                title: "4. 用户义务",
                content: `禁止干扰服务、侵犯知识产权、使用自动化手段访问或传播病毒。`
            },
            {
                title: "5. 免责声明",
                content: `除故意不当行为外，公司不对因使用服务造成的损害负责（如数据丢失）。`
            },
            {
                title: "6. 适用法律",
                content: `本条款受大韩民国法律管辖。`
            },
            {
                title: "7. 联系方式",
                content: `如有疑问，请联系 swtee0506@gmail.com。`
            }
        ]
    },
    es: {
        title: "Términos de Servicio",
        lastUpdated: "Última actualización: 11 de febrero de 2026",
        sections: [
            {
                title: "1. Aceptación de los Términos",
                content: `Estos Términos de servicio rigen su uso de los servicios proporcionados por Language Study Project. Al utilizar el Servicio, acepta estos términos.`
            },
            {
                title: "2. Elegibilidad",
                content: `El Servicio está disponible para personas mayores de 14 años. Los menores de 14 años requieren el consentimiento de los padres.`
            },
            {
                title: "3. Descripción del Servicio",
                content: `El Servicio se proporciona "TAL CUAL". Las características incluyen grabación de voz, integración de YouTube, etc.`
            },
            {
                title: "4. Obligaciones",
                content: `Se prohíbe interferir con el servicio, infringir la propiedad intelectual, el acceso automatizado y la distribución de virus.`
            },
            {
                title: "5. Descargo de responsabilidad",
                content: `La Compañía no será responsable de los daños derivados del uso del Servicio (por ejemplo, pérdida de datos), a menos que sea intencional.`
            },
            {
                title: "6. Ley aplicable",
                content: `Estos términos se regirán por las leyes de la República de Corea.`
            },
            {
                title: "7. Contacto",
                content: `Para preguntas, contacte a: swtee0506@gmail.com`
            }
        ]
    }
};

const Terms = ({ lang = 'ko' }) => {
    // Fallback to English
    const data = termsData[lang] || termsData['en'];

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

export default Terms;
