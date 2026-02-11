import React from 'react';

const aboutData = {
    en: {
        title: "About: Language Study Master",
        mission: {
            title: "Our Mission",
            content: "Language Study Master is a dedicated application designed to empower language learners (OPIc, TOEIC Speaking, etc.) to practice their speaking skills more effectively. By combining YouTube study materials with an intuitive voice recorder, we provide a streamlined environment where you can listen, record, and review your own speech instantly."
        },
        features: {
            title: "Key Features",
            list: [
                "YouTube Integration: Watch mock tests directly.",
                "Voice Recording: Record your answers in real-time.",
                "Instant Playback: Review your pronunciation immediately.",
                "File Saving: Download your recordings as WAV files."
            ]
        },
        contact: {
            title: "Contact & Support",
            text: "If you have feedback, feature requests, or encounter any issues, please reach out to:",
            footer: "Project created and maintained by"
        }
    },
    ko: {
        title: "서비스 소개: Language Study Master",
        mission: {
            title: "서비스 목표",
            content: "Language Study Master는 OPIc, 토익 스피킹 등 어학 시험을 준비하는 학습자들이 말하기 연습을 더 효과적으로 할 수 있도록 돕기 위해 개발되었습니다. YouTube 학습 자료와 직관적인 음성 녹음 기능을 결합하여, 영상을 보면서 즉시 녹음하고 자신의 발음을 들어볼 수 있는 최적의 환경을 제공합니다."
        },
        features: {
            title: "주요 기능",
            list: [
                "YouTube 연동: 모의고사 영상을 바로 시청하며 연습",
                "음성 녹음: 답변을 실시간으로 녹음",
                "즉시 재생: 자신의 발음과 억양을 바로 확인",
                "파일 저장: 녹음본을 WAV 파일로 다운로드하여 소장"
            ]
        },
        contact: {
            title: "문의 및 지원",
            text: "피드백이나 기능 제안, 또는 서비스 이용 중 문제가 발생하면 아래로 연락주세요:",
            footer: "제작 및 운영:"
        }
    },
    ja: {
        title: "サービス紹介: Language Study Master",
        mission: {
            title: "私たちの使命",
            content: "Language Study Masterは、語学学習者（OPIc、TOEIC Speakingなど）がスピーキングスキルをより効果的に練習できるように設計された専用アプリケーションです。YouTubeの学習教材と直感的なボイスレコーダーを組み合わせることで、スピーチを聞き、録音し、即座に確認できる合理的な環境を提供します。"
        },
        features: {
            title: "主な機能",
            list: [
                "YouTube連携: 模擬テスト動画を直接視聴。",
                "音声録音: 回答をリアルタイムで録音。",
                "即時再生: 発音をすぐに確認。",
                "ファイル保存: 録音をWAVファイルとしてダウンロード。"
            ]
        },
        contact: {
            title: "お問い合わせ＆サポート",
            text: "フィードバック、機能リクエスト、または問題が発生した場合は、以下までご連絡ください:",
            footer: "プロジェクト作成・運営:"
        }
    },
    zh: {
        title: "关于我们: Language Study Master",
        mission: {
            title: "我们的使命",
            content: "Language Study Master 是一款专为语言学习者（OPIc、TOEIC Speaking 等）设计的应用程序，旨在帮助他们更有效地练习口语技能。通过将 YouTube 学习资料与直观的录音机相结合，我们提供了一个简化的环境，您可以即时收听、录制和回顾自己的演讲。"
        },
        features: {
            title: "主要功能",
            list: [
                "YouTube 集成: 直接观看模拟测试视频。",
                "语音录制: 实时录制您的回答。",
                "即时回放: 立即检查您的发音。",
                "文件保存: 将录音下载为 WAV 文件。"
            ]
        },
        contact: {
            title: "联系与支持",
            text: "如果您有任何反馈、功能请求或遇到任何问题，请联系我们：",
            footer: "项目创建与维护："
        }
    },
    es: {
        title: "Sobre: Language Study Master",
        mission: {
            title: "Nuestra Misión",
            content: "Language Study Master es una aplicación dedicada diseñada para empoderar a los estudiantes de idiomas (OPIc, TOEIC Speaking, etc.) para practicar sus habilidades de conversación de manera más efectiva. Al combinar materiales de estudio de YouTube con una grabadora de voz intuitiva, proporcionamos un entorno simplificado donde puede escuchar, grabar y revisar su propio discurso al instante."
        },
        features: {
            title: "Características Clave",
            list: [
                "Integración de YouTube: Vea pruebas simuladas directamente.",
                "Grabación de Voz: Grabe sus respuestas en tiempo real.",
                "Reproducción Instantánea: Revise su pronunciación inmediatamente.",
                "Guardar Archivo: Descargue sus grabaciones como archivos WAV."
            ]
        },
        contact: {
            title: "Contacto y Soporte",
            text: "Si tiene comentarios, solicitudes de funciones o encuentra algún problema, comuníquese con:",
            footer: "Proyecto creado y mantenido por"
        }
    }
};

const About = ({ lang = 'ko' }) => {
    // Fallback to English if language data is missing
    const data = aboutData[lang] || aboutData['en'];

    return (
        <div className="min-h-screen p-8 text-white max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 title-gradient">{data.title}</h1>

            <div className="space-y-6 text-gray-300">
                <section>
                    <h2 className="text-xl font-semibold text-white mb-2">{data.mission.title}</h2>
                    <p className="leading-relaxed">
                        {data.mission.content}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-2">{data.features.title}</h2>
                    <ul className="list-disc pl-5 title-gradient font-medium text-lg space-y-2">
                        {data.features.list.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section className="mt-8 pt-8 border-t border-white/10">
                    <h2 className="text-xl font-semibold text-white mb-2">{data.contact.title}</h2>
                    <p>
                        {data.contact.text}
                    </p>
                    <p className="font-mono bg-black/20 inline-block p-2 rounded mt-2 text-indigo-300">
                        swtee0506@gmail.com
                    </p>
                    <p className="mt-4 text-sm text-gray-500">
                        {data.contact.footer} <strong>nobonobo</strong> (2026).
                    </p>
                </section>
            </div>
        </div>
    );
};

export default About;
