/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react';
import YouTube from 'react-youtube';
import { Mic, Square, Download, Trash2, Youtube, Edit2, Check, Play, Pause, Archive } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import JSZip from 'jszip';

const homeTranslations = {
    ko: {
        studyMaterial: '학습 자료',
        pasteLink: 'YouTube 링크 붙여넣기 (예: 오픽 모의고사)',
        playVideo: '영상 재생',
        pauseVideo: '영상 일시정지',
        videoError: '영상을 불러올 수 없습니다. URL을 확인해주세요.',
        videoPlaceholder: '링크를 붙여넣어 시작하세요',
        voiceRecorder: '음성 녹음기',
        tapToStart: '마이크를 눌러 시작',
        recording: '녹음 중...',
        recentRecordings: '녹음 목록',
        downloadAll: '전체 다운로드 (.zip)',
        noRecordings: '녹음된 파일이 없습니다',
    },
    en: {
        studyMaterial: 'Study Material',
        pasteLink: 'Paste YouTube Link (e.g., OPIc mock test)',
        playVideo: 'Play Video',
        pauseVideo: 'Pause Video',
        videoError: 'Error loading video. check URL.',
        videoPlaceholder: 'Paste a link to start',
        voiceRecorder: 'Voice Recorder',
        tapToStart: 'Tap microphone to start',
        recording: 'Recording in progress...',
        recentRecordings: 'Recent Recordings',
        downloadAll: 'Download All (.zip)',
        noRecordings: 'No recordings yet',
    },
    ja: {
        studyMaterial: '学習教材',
        pasteLink: 'YouTubeリンクを貼り付け (例: OPIc 模擬テスト)',
        playVideo: '動画再生',
        pauseVideo: '一時停止',
        videoError: '動画を読み込めませんでした。URLを確認してください。',
        videoPlaceholder: 'リンクを貼り付けて開始',
        voiceRecorder: 'ボイスレコーダー',
        tapToStart: 'マイクをタップして開始',
        recording: '録音中...',
        recentRecordings: '録音リスト',
        downloadAll: '一括ダウンロード (.zip)',
        noRecordings: '録音ファイルがありません',
    },
    zh: {
        studyMaterial: '学习资料',
        pasteLink: '粘贴 YouTube 链接 (例如: OPIc 模拟考试)',
        playVideo: '播放视频',
        pauseVideo: '暂停视频',
        videoError: '无法加载视频，请检查 URL。',
        videoPlaceholder: '粘贴链接开始',
        voiceRecorder: '录音机',
        tapToStart: '点击麦克风开始',
        recording: '录音中...',
        recentRecordings: '录音列表',
        downloadAll: '全部下载 (.zip)',
        noRecordings: '暂无录音文件',
    },
    es: {
        studyMaterial: 'Material de estudio',
        pasteLink: 'Pegar enlace de YouTube (ej. prueba simulada OPIc)',
        playVideo: 'Reproducir video',
        pauseVideo: 'Pausar video',
        videoError: 'Error al cargar el video. Verifique la URL.',
        videoPlaceholder: 'Pegue un enlace para comenzar',
        voiceRecorder: 'Grabadora de voz',
        tapToStart: 'Toque el micrófono para comenzar',
        recording: 'Grabación en curso...',
        recentRecordings: 'Grabaciones recientes',
        downloadAll: 'Descargar todo (.zip)',
        noRecordings: 'No hay grabaciones todavía',
    }
};

// Custom Audio Player Component
const AudioPlayer = ({ src }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const onTimeUpdate = () => {
        setProgress(audioRef.current?.currentTime || 0);
    };

    const onLoadedMetadata = () => {
        setDuration(audioRef.current?.duration || 0);
    };

    const onEnded = () => {
        setIsPlaying(false);
        setProgress(0);
    };

    const handleSeek = (e) => {
        const time = Number(e.target.value);
        audioRef.current.currentTime = time;
        setProgress(time);
    };

    const formatTime = (time) => {
        if (!time || isNaN(time)) return "0:00";
        const min = Math.floor(time / 60);
        const sec = Math.floor(time % 60);
        return `${min}:${sec.toString().padStart(2, '0')}`;
    };

    return (
        <div className="flex items-center gap-3 flex-1 bg-black/20 rounded-lg px-4 py-2 border border-white/5 mx-4 min-w-[200px]">
            <button
                onClick={togglePlay}
                className="text-white hover:text-indigo-400 flex-shrink-0 transition-colors"
            >
                {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
            </button>

            <span className="text-xs font-mono text-indigo-200 w-9 text-right">{formatTime(progress)}</span>

            <input
                type="range"
                min="0"
                max={duration || 0}
                value={progress}
                onChange={handleSeek}
                className="flex-1 h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:accent-indigo-400 transition-all"
            />

            <span className="text-xs font-mono text-gray-500 w-9">{formatTime(duration)}</span>

            <audio
                ref={audioRef}
                src={src}
                onTimeUpdate={onTimeUpdate}
                onLoadedMetadata={onLoadedMetadata}
                onEnded={onEnded}
                className="hidden"
            />
        </div>
    );
};

const Home = ({ lang = 'ko' }) => {
    const [url, setUrl] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [recordings, setRecordings] = useState([]);
    const [recordingTime, setRecordingTime] = useState(0);
    const [videoError, setVideoError] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState('');

    const playerRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const timerRef = useRef(null);

    const t = homeTranslations[lang] || homeTranslations['en'];

    // Helper to extract YouTube ID
    const getYouTubeID = (url) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = getYouTubeID(url);

    const handleStartRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);

            mediaRecorderRef.current.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };

            mediaRecorderRef.current.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
                const audioUrl = URL.createObjectURL(audioBlob);
                const newRecording = {
                    id: Date.now(),
                    url: audioUrl,
                    date: new Date().toLocaleString(),
                    duration: recordingTime,
                    name: `Recording ${new Date().toLocaleTimeString()}`
                };
                setRecordings(prev => [newRecording, ...prev]);
                audioChunksRef.current = [];
                setRecordingTime(0);
            };

            mediaRecorderRef.current.start();
            setIsRecording(true);

            timerRef.current = setInterval(() => {
                setRecordingTime(prev => prev + 1);
            }, 1000);

        } catch (error) {
            console.error("Error accessing microphone:", error);
            alert("Microphone access denied or not available.");
        }
    };

    const handleStopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            clearInterval(timerRef.current);
            mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleDelete = (id) => {
        setRecordings(prev => prev.filter(rec => rec.id !== id));
    };

    const handleDownload = (rec) => {
        const a = document.createElement('a');
        a.href = rec.url;
        // Use the custom name for filename, sanitize simpler
        const safeName = (rec.name || `recording-${rec.id}`).replace(/[^a-z0-9]/gi, '_').toLowerCase();
        a.download = `${safeName}.wav`;
        a.click();
    };

    const handleStartRename = (rec) => {
        setEditingId(rec.id);
        setEditName(rec.name || `Recording ${new Date(rec.id).toLocaleTimeString()}`);
    };

    const handleSaveRename = (id) => {
        setRecordings(prev => prev.map(rec =>
            rec.id === id ? { ...rec, name: editName } : rec
        ));
        setEditingId(null);
    };

    const handleKeyDown = (e, id) => {
        if (e.key === 'Enter') {
            handleSaveRename(id);
        }
    };

    const onPlayerReady = (event) => {
        playerRef.current = event.target;
    };

    const onPlayerStateChange = (event) => {
        setIsPlaying(event.data === 1);
    };

    const togglePlay = () => {
        if (playerRef.current) {
            if (isPlaying) {
                playerRef.current.pauseVideo();
            } else {
                playerRef.current.playVideo();
            }
        }
    };

    // New: Download All Zip Function
    const handleDownloadAll = async () => {
        if (recordings.length === 0) return;

        const zip = new JSZip();
        // Create a root folder or just add files to root

        // Since we are creating a zip, let's just add files to the root of the zip
        // or a specific folder if desired. Let's put them in 'recordings' folder inside zip.
        const folder = zip.folder("recordings");

        for (const rec of recordings) {
            try {
                // Fetch the blob from the blob URL
                const response = await fetch(rec.url);
                const blob = await response.blob();

                // Sanitize filename
                const safeName = (rec.name || `recording-${rec.id}`).replace(/[^a-z0-9]/gi, '_').toLowerCase();
                // Add to zip folder
                folder.file(`${safeName}.wav`, blob);
            } catch (err) {
                console.error("Failed to add file to zip:", err);
            }
        }

        try {
            // Generate zip file
            const content = await zip.generateAsync({ type: "blob" });
            const url = URL.createObjectURL(content);

            // Trigger download
            const a = document.createElement('a');
            a.href = url;
            a.download = `voice_recordings_${new Date().toISOString().slice(0, 10)}.zip`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            // Cleanup
            URL.revokeObjectURL(url);
        } catch (err) {
            console.error("Failed to generate zip:", err);
        }
    };

    useEffect(() => {
        setVideoError(false);
    }, [url]);

    return (
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1800px] mx-auto w-full flex-1">
            {/* Left Column: YouTube Player */}
            <section className="flex flex-col gap-6">
                <div className="glass-panel min-h-[400px] flex flex-col">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Youtube size={20} className="text-red-500" />
                        {t.studyMaterial}
                    </h2>

                    <div className="flex gap-2 mb-4">
                        <input
                            type="text"
                            placeholder={t.pasteLink}
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="flex-1"
                        />
                    </div>

                    <div className="flex-1 bg-black rounded-lg overflow-hidden relative shadow-inner w-full aspect-video">
                        {videoId && !videoError ? (
                            <YouTube
                                videoId={videoId}
                                opts={{
                                    height: '100%',
                                    width: '100%',
                                    playerVars: {
                                        autoplay: 0,
                                    },
                                }}
                                className="w-full h-full"
                                iframeClassName="w-full h-full"
                                onReady={onPlayerReady}
                                onStateChange={onPlayerStateChange}
                                onError={(e) => {
                                    console.error("Player Error:", e);
                                    setVideoError(true);
                                }}
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500 flex-col gap-2">
                                <Youtube size={48} opacity={0.3} />
                                <p>{videoError ? t.videoError : t.videoPlaceholder}</p>
                            </div>
                        )}
                    </div>

                    <div className="mt-4 flex gap-2">
                        <button onClick={togglePlay} className="bg-gray-700 hover:bg-gray-600 text-sm py-2">
                            {isPlaying ? 'Pause' : 'Play'} Video
                        </button>
                    </div>
                </div>
            </section>

            {/* Right Column: Recording Controls */}
            <section className="flex flex-col gap-6">
                <div className="glass-panel">
                    <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        <Mic size={20} className="text-indigo-400" />
                        {t.voiceRecorder}
                    </h2>

                    <div className="flex flex-col items-center justify-center py-8 gap-4">
                        <div className="text-6xl font-mono font-bold text-indigo-300 tracking-wider mb-6">
                            {formatTime(recordingTime)}
                        </div>

                        <div className="flex items-center gap-6">
                            {!isRecording ? (
                                <button
                                    onClick={handleStartRecording}
                                    className="w-20 h-20 rounded-full bg-red-500 hover:bg-red-600 shadow-xl shadow-red-500/20 flex items-center justify-center transition-all hover:scale-110"
                                >
                                    <Mic size={32} />
                                </button>
                            ) : (
                                <button
                                    onClick={handleStopRecording}
                                    className="w-20 h-20 rounded-full bg-gray-700 hover:bg-gray-600 border-2 border-red-500/50 flex items-center justify-center transition-all hover:scale-105 animate-pulse"
                                >
                                    <Square size={28} className="fill-red-500 text-red-500" />
                                </button>
                            )}
                        </div>

                        <p className="text-gray-400 mt-2">
                            {isRecording ? t.recording : t.tapToStart}
                        </p>
                    </div>
                </div>

                {/* Recordings List */}
                <div className="glass-panel flex-1">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-medium text-gray-300">{t.recentRecordings}</h3>
                        {recordings.length > 0 && (
                            <button
                                onClick={handleDownloadAll}
                                className="flex items-center gap-2 text-xs bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-300 px-3 py-1.5 rounded-lg transition-colors border border-indigo-500/30"
                            >
                                <Archive size={14} />
                                {t.downloadAll}
                            </button>
                        )}
                    </div>
                    <div className="flex flex-col gap-3 max-h-[300px] overflow-y-auto pr-2">
                        <AnimatePresence>
                            {recordings.length === 0 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center text-gray-500 py-8"
                                >
                                    {t.noRecordings}
                                </motion.div>
                            )}
                            {recordings.map((rec) => (
                                <motion.div
                                    key={rec.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="bg-white/5 p-4 rounded-lg flex items-center justify-between group hover:bg-white/10 transition-colors"
                                >
                                    <div className="flex flex-col w-[200px] flex-shrink-0 mr-2">
                                        {editingId === rec.id ? (
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="text"
                                                    value={editName}
                                                    onChange={(e) => setEditName(e.target.value)}
                                                    onKeyDown={(e) => handleKeyDown(e, rec.id)}
                                                    className="bg-black/20 border border-indigo-500 rounded px-2 py-1 text-sm text-white w-full"
                                                    autoFocus
                                                />
                                                <button onClick={() => handleSaveRename(rec.id)} className="text-green-400 hover:text-green-300">
                                                    <Check size={16} />
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2 group/edit cursor-pointer" onClick={() => handleStartRename(rec)}>
                                                <span className="font-medium text-indigo-200 truncate" title={rec.name}>
                                                    {rec.name}
                                                </span>
                                                <button onClick={(e) => { e.stopPropagation(); handleStartRename(rec); }} className="opacity-0 group-hover:opacity-100 group-hover/edit:opacity-100 text-gray-400 hover:text-white transition-opacity">
                                                    <Edit2 size={14} />
                                                </button>
                                            </div>
                                        )}
                                        <span className="text-xs text-gray-500 mt-1">{rec.date}</span>
                                    </div>

                                    <AudioPlayer src={rec.url} />

                                    <div className="flex items-center gap-2 flex-shrink-0">
                                        <button
                                            onClick={() => handleDownload(rec)}
                                            className="p-2 bg-transparent hover:bg-indigo-500/20 text-indigo-400 rounded-full transition-colors"
                                            title="Download"
                                        >
                                            <Download size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(rec.id)}
                                            className="p-2 bg-transparent hover:bg-red-500/20 text-red-400 rounded-full transition-colors"
                                            title="Delete"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
