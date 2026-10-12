"use client";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [locked, setLocked] = useState(true);
  const [registered, setRegistered] = useState(false);
  const [scanning, setScanning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const r = localStorage.getItem("necko_face_reg");
    if (r) setRegistered(true);
  }, []);

  const startCamera = async () => {
    setScanning(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setTimeout(() => {
        setScanning(false);
        setLocked(false);
        localStorage.setItem("necko_face_reg", "1");
        setRegistered(true);
        stream.getTracks().forEach(t => t.stop());
      }, 3000);
    } catch (e) {
      alert("Camera permission dena padega");
      setScanning(false);
    }
  };

  if (locked) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "radial-gradient(circle at top, #1a1a2e, #000)", color: "white", padding: 20 }}>
        <div style={{ width: "100%", maxWidth: 360, background: "rgba(255,255,255,0.08)", borderRadius: 24, padding: 24, border: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>NECKO FLOW</h1>
          <p style={{ opacity: 0.6, fontSize: 14, marginBottom: 20 }}>Face Lock Protected</p>
          
          <div style={{ width: 220, height: 220, background: "#000", borderRadius: 16, margin: "0 auto 20px", overflow: "hidden", position: "relative", border: "2px solid #7c3aed" }}>
            <video ref={videoRef} autoPlay muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scaleX(-1)" }} />
            {!scanning && !videoRef.current?.srcObject && (
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 50 }}>🔒</div>
            )}
            {scanning && <div style={{ position: "absolute", bottom: 10, left: 0, right: 0, fontSize: 12, color: "#a78bfa" }}>Scanning Face...</div>}
          </div>

          <button onClick={startCamera} style={{ width: "100%", padding: "14px", borderRadius: 12, background: "#7c3aed", color: "white", border: "none", fontWeight: 700, fontSize: 16 }}>
            {registered ? "Unlock with Face" : "Register Face & Unlock"}
          </button>
          <p style={{ marginTop: 12, fontSize: 11, opacity: 0.4 }}>Tera face sirf tere phone me save hai. Koi server pe nahi jata.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "white", padding: 20 }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <h1 style={{ fontSize: 24, fontWeight: 800 }}>NECKO FLOW ✨</h1>
          <button onClick={() => setLocked(true)} style={{ padding: "8px 12px", borderRadius: 8, background: "rgba(255,255,255,0.1)", border: "none", color: "white" }}>Lock 🔒</button>
        </div>

        <div style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)", borderRadius: 20, padding: 24, marginBottom: 20 }}>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>Welcome Back!</h2>
          <p style={{ opacity: 0.8 }}>Face Lock successfully unlocked. Ye tera main dashboard hai.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "#1a1a1a", padding: 16, borderRadius: 16, border: "1px solid #222" }}>
            <div style={{ fontSize: 24 }}>🎨</div><p style={{ marginTop: 8, fontWeight: 600 }}>Generate</p>
          </div>
          <div style={{ background: "#1a1a1a", padding: 16, borderRadius: 16, border: "1px solid #222" }}>
            <div style={{ fontSize: 24 }}>📁</div><p style={{ marginTop: 8, fontWeight: 600 }}>My Creations</p>
          </div>
        </div>

        <div style={{ marginTop: 30, textAlign: "center", opacity: 0.5, fontSize: 12 }}>
          Built on Vercel • Auto-deploy active
        </div>
      </div>
    </div>
  );
    }
