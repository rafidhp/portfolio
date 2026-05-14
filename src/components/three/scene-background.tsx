import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, Suspense } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";

function useScrollRef() {
  const ref = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      ref.current = max > 0 ? window.scrollY / max : 0;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return ref;
}

/* soft round star sprite (radial gradient) */
function makeStarTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2,
  );
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.2, "rgba(255,255,255,0.85)");
  g.addColorStop(0.45, "rgba(180,200,255,0.35)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

/* night — twinkling round stars */
function Stars({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const ref = useRef<THREE.Points>(null);
  const texture = useMemo(() => makeStarTexture(), []);
  const count = 1800;
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 5 + seededRandom(i * 1.13) * 12;
      const theta = seededRandom(i * 2.37) * Math.PI * 2;
      const phi = Math.acos(2 * seededRandom(i * 3.91) - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.012;

    const s = scrollRef.current;
    ref.current.rotation.x = s * Math.PI * 0.22;

    const mat = ref.current.material as THREE.PointsMaterial;
    mat.opacity = 0.72 + Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        map={texture}
        alphaMap={texture}
        color="#eaf0ff"
        sizeAttenuation
        transparent
        opacity={0.95}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* 🌙 Procedural moon texture — soft surface with craters */
function makeMoonTexture() {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  let seed = 42;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };

  // Realistic muted lunar regolith base (brighter, cool grey with a warm tint)
  ctx.fillStyle = "#c9c4ba";
  ctx.fillRect(0, 0, size, size);

  // Broad mottling gives the surface rough lunar variation before crater detail.
  for (let i = 0; i < 140; i++) {
    const x = rand() * size;
    const y = rand() * size;
    const r = 10 + rand() * 34;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    const dark = rand() > 0.45;
    g.addColorStop(0, dark ? "rgba(78,75,69,0.12)" : "rgba(245,241,232,0.12)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Maria — actual-moon-inspired darker basalt plains with soft boundaries.
  const maria: [number, number, number, number][] = [
    [0.58, 0.32, 78, 0.22],
    [0.43, 0.38, 58, 0.18],
    [0.61, 0.50, 66, 0.16],
    [0.36, 0.55, 52, 0.14],
    [0.52, 0.66, 46, 0.13],
  ];
  maria.forEach(([px, py, r, opacity]) => {
    const x = px * size;
    const y = py * size;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(75,72,66,${opacity + 0.16})`);
    g.addColorStop(0.58, `rgba(92,88,80,${opacity})`);
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  });

  // Craters with shadowed floors and bright rims for rough, recognizable relief.
  for (let i = 0; i < 105; i++) {
    const x = rand() * size;
    const y = rand() * size;
    const r = 2.2 + rand() * (i < 18 ? 26 : 12);
    const g = ctx.createRadialGradient(x - r * 0.18, y - r * 0.2, 0, x, y, r);
    g.addColorStop(0, "rgba(235,230,218,0.18)");
    g.addColorStop(0.45, "rgba(90,86,78,0.22)");
    g.addColorStop(0.78, "rgba(54,50,45,0.2)");
    g.addColorStop(1, "rgba(245,241,232,0.11)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(238,234,224,0.14)";
    ctx.lineWidth = Math.max(0.6, r * 0.08);
    ctx.beginPath();
    ctx.arc(x - r * 0.08, y - r * 0.08, r * 0.88, 0, Math.PI * 2);
    ctx.stroke();
  }
  // Fine surface noise
  const img = ctx.getImageData(0, 0, size, size);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = (rand() - 0.5) * 16;
    img.data[i] = Math.max(0, Math.min(255, img.data[i] + n));
    img.data[i + 1] = Math.max(0, Math.min(255, img.data[i + 1] + n));
    img.data[i + 2] = Math.max(0, Math.min(255, img.data[i + 2] + n));
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  return tex;
}

/* 🌙 Floating moon (night) — elegant, subtle */
function Moon({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const groupRef = useRef<THREE.Group>(null);
  const moonRef = useRef<THREE.Mesh>(null);
  const haloRef = useRef<THREE.Mesh>(null);
  const moonTex = useMemo(() => makeMoonTexture(), []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    const s = scrollRef.current;
    groupRef.current.position.set(
      3.4 + Math.sin(t * 0.12) * 0.06,
      1.5 - s * 2.2 + Math.cos(t * 0.15) * 0.05,
      -2.5,
    );
    if (moonRef.current) {
      moonRef.current.rotation.y += delta * 0.035;
      moonRef.current.rotation.x = Math.sin(t * 0.08) * 0.06;
    }
    if (haloRef.current) {
      const pulse = 1 + Math.sin(t * 0.35) * 0.015;
      haloRef.current.scale.setScalar(pulse);
      const m = haloRef.current.material as THREE.MeshBasicMaterial;
      m.opacity = 0.09 + Math.sin(t * 0.35) * 0.015;
    }
  });

  return (
    <group ref={groupRef} scale={0.85}>
      {/* subtle halo — restrained, not glowing */}
      <mesh ref={haloRef}>
        <sphereGeometry args={[1.0, 32, 32]} />
        <meshBasicMaterial
          color="#dde2f0"
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      {/* directional sunlight grazing the moon — creates a terminator */}
      <directionalLight position={[-3, 1, 2]} intensity={1.6} color="#fff5e6" />
      <directionalLight position={[2, -1, 3]} intensity={0.28} color="#dbe5ff" />
      <ambientLight intensity={0.16} color="#7484a0" />
      {/* moon body — realistic shaded surface */}
      <mesh ref={moonRef}>
        <sphereGeometry args={[0.78, 96, 96]} />
        <meshStandardMaterial
          map={moonTex}
          bumpMap={moonTex}
          bumpScale={0.032}
          roughness={1}
          metalness={0}
          color="#eee6d8"
          emissive="#2a2722"
          emissiveIntensity={0.06}
        />
      </mesh>
    </group>
  );
}

/* 🌙 Aquarius constellation — subtle, elegant */
function Aquarius({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const groupRef = useRef<THREE.Group>(null);
  const starTex = useMemo(() => makeStarTexture(), []);

  // Schematic Aquarius layout (relative coords, scaled into the scene).
  // Nodes are named after main stars; edges trace the traditional figure.
  const { nodes, lineGeometry, starGeometry } = useMemo(() => {
    const raw: Record<string, [number, number]> = {
      sadalmelik: [-3.2, 1.4],
      sadalsuud: [-1.6, 1.0],
      sadachbia: [0.2, 1.3],
      ancha: [0.9, 0.6],
      skat: [-0.6, -1.6],
      hydor: [2.0, 0.2],
      psi1: [2.6, -0.6],
      psi2: [3.0, -1.1],
      psi3: [3.4, -1.5],
      "88aqr": [3.8, -1.9],
    };
    const depth = -4;
    const scale = 1.15;
    const offsetY = 0.4;
    const nodes: Record<string, THREE.Vector3> = {};
    Object.entries(raw).forEach(([k, [x, y]]) => {
      nodes[k] = new THREE.Vector3(x * scale, y * scale + offsetY, depth);
    });

    const edges: [string, string][] = [
      ["sadalmelik", "sadalsuud"],
      ["sadalsuud", "sadachbia"],
      ["sadachbia", "ancha"],
      ["ancha", "hydor"],
      ["sadalsuud", "skat"],
      ["skat", "hydor"],
      ["hydor", "psi1"],
      ["psi1", "psi2"],
      ["psi2", "psi3"],
      ["psi3", "88aqr"],
    ];

    const linePts: number[] = [];
    edges.forEach(([a, b]) => {
      linePts.push(nodes[a].x, nodes[a].y, nodes[a].z);
      linePts.push(nodes[b].x, nodes[b].y, nodes[b].z);
    });
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePts, 3),
    );

    const starPts: number[] = [];
    Object.values(nodes).forEach((v) => starPts.push(v.x, v.y, v.z));
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starPts, 3),
    );

    return { nodes, lineGeometry, starGeometry };
  }, []);

  const lineRef = useRef<THREE.LineSegments>(null);
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const s = scrollRef.current;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.z = Math.sin(t * 0.08) * 0.02;
    groupRef.current.position.y = -s * 0.9 + Math.sin(t * 0.12) * 0.05;
    groupRef.current.position.x = Math.cos(t * 0.09) * 0.06;
    if (lineRef.current) {
      const m = lineRef.current.material as THREE.LineBasicMaterial;
      m.opacity = 0.28 + Math.sin(t * 0.4) * 0.06;
    }
    if (pointsRef.current) {
      const m = pointsRef.current.material as THREE.PointsMaterial;
      m.opacity = 0.78 + Math.sin(t * 0.6) * 0.06;
      m.size = 0.34 + Math.sin(t * 0.9) * 0.025;
    }
  });

  void nodes;

  return (
    <group ref={groupRef}>
      <lineSegments ref={lineRef} geometry={lineGeometry}>
        <lineBasicMaterial
          color="#a5d8ff"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
      <points ref={pointsRef} geometry={starGeometry}>
        <pointsMaterial
          size={0.34}
          map={starTex}
          alphaMap={starTex}
          color="#f5faff"
          sizeAttenuation
          transparent
          opacity={0.8}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

/* ☀️ Day — clouds (soft sprites) */
function Clouds({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const groupRef = useRef<THREE.Group>(null);
  const cloudPositions = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        x: (seededRandom(i * 1.21) - 0.5) * 14,
        y: (seededRandom(i * 2.11) - 0.5) * 6,
        z: -2 - seededRandom(i * 3.17) * 4,
        s: 0.8 + seededRandom(i * 4.31) * 1.6,
        speed: 0.05 + seededRandom(i * 5.73) * 0.08,
      })),
    [],
  );
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const s = scrollRef.current;
    groupRef.current.children.forEach((c, i) => {
      const cfg = cloudPositions[i];
      c.position.x += delta * cfg.speed;
      if (c.position.x > 8) c.position.x = -8;
      c.position.y = cfg.y - s * 2;
    });
  });
  return (
    <group ref={groupRef}>
      {cloudPositions.map((c, i) => (
        <mesh key={i} position={[c.x, c.y, c.z]} scale={c.s}>
          <sphereGeometry args={[0.6, 16, 16]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.55} />
        </mesh>
      ))}
    </group>
  );
}

/* ☀️ Sun */
function Sun({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const s = scrollRef.current;
    ref.current.position.set(3.5, 1.6 - s * 3, -3);
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.04;
    ref.current.scale.setScalar(pulse);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.55, 32, 32]} />
      <meshBasicMaterial color="#fde68a" transparent opacity={0.9} />
    </mesh>
  );
}

function SceneContent() {
  const { resolvedTheme } = useTheme();
  const scrollRef = useScrollRef();
  const isDark = resolvedTheme === "dark";

  return isDark ? (
    <>
      <Stars scrollRef={scrollRef} />
      <Aquarius scrollRef={scrollRef} />
      <Moon scrollRef={scrollRef} />
    </>
  ) : (
    <>
      <Clouds scrollRef={scrollRef} />
      <Sun scrollRef={scrollRef} />
    </>
  );
}

export function SceneBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 gradient-sky" />
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/80 pointer-events-none" />
    </div>
  );
}
