import { useId } from "react";
import type { Diagram as DiagramData, DiagramNode } from "@/data/projects";

const W = 1200;
const H = 600;
const NODE_H = 66;
const NODE_H_SHORT = 50;

const OSD = "#f2f2ee";
const DIM = "#a9adb1";
const AMBER = "#ffb000";
const LB = "#0a0a0a";

function size(n: DiagramNode) {
  return { w: n.w ?? 210, h: n.sub ? NODE_H : NODE_H_SHORT };
}

/** Rota em cotovelo entre dois nós, saindo pela face mais próxima. */
function route(a: DiagramNode, b: DiagramNode) {
  const sa = size(a);
  const sb = size(b);
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  if (Math.abs(dx) >= Math.abs(dy) * 0.9) {
    const dir = Math.sign(dx) || 1;
    const sx = a.x + (dir * sa.w) / 2;
    const ex = b.x - (dir * sb.w) / 2;
    const mx = (sx + ex) / 2;
    return {
      d: `M${sx} ${a.y} H${mx} V${b.y} H${ex}`,
      lx: mx,
      ly: a.y === b.y ? a.y - 12 : (a.y + b.y) / 2,
      straight: a.y === b.y,
    };
  }
  const dir = Math.sign(dy) || 1;
  const sy = a.y + (dir * sa.h) / 2;
  const ey = b.y - (dir * sb.h) / 2;
  const my = (sy + ey) / 2;
  return { d: `M${a.x} ${sy} V${my} H${b.x} V${ey}`, lx: b.x + 10, ly: my - 8, straight: false };
}

function Node({ n, compact }: { n: DiagramNode; compact?: boolean }) {
  const { w, h } = size(n);
  const x = n.x - w / 2;
  const y = n.y - h / 2;
  const kind = n.kind ?? "service";
  const planned = kind === "planned";
  const stroke = planned ? DIM : OSD;
  const c = 12; // tamanho da cantoneira

  return (
    <g>
      {kind === "external" ? (
        <>
          <rect x={x} y={y} width={w} height={h} fill={LB} />
          <path
            d={`M${x} ${y + c}V${y}H${x + c} M${x + w - c} ${y}H${x + w}V${y + c} M${x + w} ${y + h - c}V${y + h}H${x + w - c} M${x + c} ${y + h}H${x}V${y + h - c}`}
            stroke={stroke}
            strokeWidth={2}
            fill="none"
          />
        </>
      ) : (
        <rect
          x={x}
          y={y}
          width={w}
          height={h}
          fill={LB}
          stroke={stroke}
          strokeWidth={kind === "client" ? 1.5 : 2}
          strokeDasharray={planned ? "6 6" : undefined}
        />
      )}
      {kind === "store" && <line x1={x} x2={x + w} y1={y + 8} y2={y + 8} stroke={stroke} strokeWidth={1.5} />}
      {kind === "queue" &&
        [1, 2, 3].map((i) => (
          <line key={i} x1={x + w - 8 * i} x2={x + w - 8 * i} y1={y} y2={y + h} stroke={stroke} strokeWidth={1.5} />
        ))}
      {kind === "client" && <rect x={x + 10} y={y + 10} width={8} height={8} fill={AMBER} />}
      <text
        x={n.x}
        y={n.sub && !compact ? n.y - 4 : n.y + 6}
        textAnchor="middle"
        fill={planned ? DIM : OSD}
        fontSize={compact ? 26 : 19}
        fontWeight={700}
        style={{ letterSpacing: "0.04em" }}
      >
        {n.label}
      </text>
      {n.sub && !compact && (
        <text x={n.x} y={n.y + 20} textAnchor="middle" fill={DIM} fontSize={15}>
          {n.sub}
        </text>
      )}
    </g>
  );
}

interface Props {
  data: DiagramData;
  label: string;
  compact?: boolean;
}

/** Diagrama de arquitetura no traço do OSD sobre a grade do HUD. */
export function Diagram({ data, label, compact }: Props) {
  const uid = useId().replace(/:/g, "");
  const byId = new Map(data.nodes.map((n) => [n.id, n]));

  return (
    <div className={compact ? "diagram diagram--thumb" : "diagram"}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={label}
        fontFamily='"Archivo Variable", Archivo, system-ui, sans-serif'
      >
        <defs>
          <marker id={`a${uid}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0L10 5L0 10z" fill={DIM} />
          </marker>
          <marker id={`m${uid}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0L10 5L0 10z" fill={AMBER} />
          </marker>
        </defs>
        {data.edges.map((e, i) => {
          const a = byId.get(e.from);
          const b = byId.get(e.to);
          if (!a || !b) return null;
          const r = route(a, b);
          return (
            <g key={i}>
              <path
                d={r.d}
                fill="none"
                stroke={e.main ? AMBER : DIM}
                strokeWidth={compact ? 4 : e.main ? 2.5 : 1.75}
                strokeDasharray={e.async ? "8 7" : undefined}
                markerEnd={compact ? undefined : `url(#${e.main ? "m" : "a"}${uid})`}
              />
              {e.label && !compact && (
                <text
                  x={r.lx}
                  y={r.ly}
                  textAnchor={r.straight ? "middle" : "start"}
                  fill={e.main ? AMBER : DIM}
                  fontSize={14}
                  fontWeight={600}
                >
                  {e.label}
                </text>
              )}
            </g>
          );
        })}
        {data.nodes.map((n) => (
          <Node key={n.id} n={n} compact={compact} />
        ))}
      </svg>
    </div>
  );
}
