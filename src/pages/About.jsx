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
        usage: {
            title: "How to Use",
            steps: [
                {
                    head: "1. Allow Microphone Access",
                    desc: `When using for the first time or clicking record, allow microphone access in the browser popup.`
                },
                {
                    head: "2. Study Material",
                    desc: `Paste a YouTube link (e.g., OPIc mock test) in the left panel. Use the controls or Play/Pause button.`
                },
                {
                    head: "3. Voice Recorder",
                    desc: `Click the red microphone icon to start recording. Click the square stop icon to finish.`
                },
                {
                    head: "4. Manage Recordings",
                    desc: `Recordings appear in the list below. Play to listen, click the download icon (📥) to save as .wav, or delete with the trash icon.`
                }
            ]
        },
        tips: {
            title: "Tips",
            content: "Focus on speaking volume and timing. Use mock test videos to simulate real exam conditions."
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
        usage: {
            title: "📖 사용 방법",
            steps: [
                {
                    head: "1. 마이크 권한 허용",
                    desc: `앱에 처음 접속하거나 녹음 버튼을 누르면 브라우저 상단에 "마이크 권한 요청" 팝업이 뜹니다. 반드시 [허용]을 클릭해야 녹음 기능을 사용할 수 있습니다.`
                },
                {
                    head: "2. 유튜브 학습 자료 활용 (Study Material)",
                    desc: `왼쪽 "Study Material" 패널의 입력창에 공부하고 싶은 유튜브 영상의 링크(URL)를 붙여넣으세요. (예: 오픽 모의고사, 에바(Ava) 질문 영상 등). 영상 플레이어의 컨트롤바를 사용하거나 하단의 Play/Pause 버튼을 누르세요.`
                },
                {
                    head: "3. 답변 녹음하기 (Voice Recorder)",
                    desc: `오른쪽 "Voice Recorder" 패널의 붉은색 마이크 아이콘을 클릭하세요. 타이머가 돌아가며 녹음이 시작됩니다. 녹음 중일 때 나타나는 정지(네모) 아이콘을 클릭하면 녹음이 완료됩니다.`
                },
                {
                    head: "4. 녹음 관리 (Recent Recordings)",
                    desc: `녹음이 완료되면 하단 "Recent Recordings" 목록에 자동으로 추가됩니다. 듣기(▶), 다운로드(📥), 삭제(🗑️) 기능을 활용하세요. *주의: 다운로드하지 않고 새로고침하면 녹음 파일이 사라질 수 있습니다. 중요한 건 꼭 다운로드하세요!*`
                }
            ]
        },
        tips: {
            title: "💡 팁",
            content: "오픽은 발화량이 중요합니다. 타이머를 보며 목표 시간(예: 1분 30초)을 채우는 연습을 하세요. 모의고사 영상을 틀어놓고 실전처럼 답변하는 연습을 반복하세요."
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
        usage: {
            title: "使用方法",
            steps: [
                { head: "1. マイク許可", desc: "ブラウザでマイクの使用を許可してください。" },
                { head: "2. 学習教材", desc: "YouTubeリンクを貼り付けて学習を開始します。" },
                { head: "3. 音声録音", desc: "マイクアイコンをタップして録音を開始します。" },
                { head: "4. 録音管理", desc: "録音を聞いたり、ダウンロードしたり、削除したりできます。" }
            ]
        },
        tips: { title: "ヒント", content: "実際の試験のように練習してください。" },
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
        usage: {
            title: "使用说明",
            steps: [
                { head: "1. 允许麦克风", desc: "允许浏览器使用麦克风。" },
                { head: "2. 学习资料", desc: "粘贴 YouTube 链接开始学习。" },
                { head: "3. 语音录制", desc: "点击麦克风图标开始录音。" },
                { head: "4. 录音管理", desc: "您可以收听、下载或删除录音。" }
            ]
        },
        tips: { title: "提示", content: "像真实考试一样练习。" },
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
        usage: {
            title: "Cómo usar",
            steps: [
                { head: "1. Permiso de micrófono", desc: "Permita el acceso al micrófono en el navegador." },
                { head: "2. Material de estudio", desc: "Pegue un enlace de YouTube para comenzar." },
                { head: "3. Grabación de voz", desc: "Toque el icono del micrófono para grabar." },
                { head: "4. Administrar grabaciones", desc: "Escuche, descargue o elimine grabaciones." }
            ]
        },
        tips: { title: "Consejos", content: "Practica como en un examen real." },
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

            <div className="space-y-8 text-gray-300">
                <section>
                    <h2 className="text-xl font-semibold text-white mb-2">{data.mission.title}</h2>
                    <p className="leading-relaxed">
                        {data.mission.content}
                    </p>
                </section>

                {data.usage && (
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">{data.usage.title}</h2>
                        <div className="space-y-4">
                            {data.usage.steps.map((step, i) => (
                                <div key={i} className="bg-white/5 p-4 rounded-lg border border-white/10">
                                    <h3 className="font-bold text-indigo-300 mb-1">{step.head}</h3>
                                    <p className="text-sm text-gray-400">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {data.tips && (
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">{data.tips.title}</h2>
                        <div className="bg-indigo-900/20 border border-indigo-500/30 p-4 rounded-lg text-indigo-200">
                            {data.tips.content}
                        </div>
                    </section>
                )}

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
