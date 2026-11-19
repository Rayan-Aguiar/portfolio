import type { Project } from "@/data/projects";

export interface FlowStep {
  label: string;
  /** A chegada neste passo é assíncrona (fila, evento). */
  async?: boolean;
  client?: boolean;
}

export interface Flow {
  /** "flow": caminho principal do diagrama. "stack": projeto sem diagrama. */
  kind: "flow" | "stack";
  steps: FlowStep[];
}

/**
 * Assinatura do fluxo: o caminho principal do diagrama em uma linha de texto.
 * Segue as arestas `main` a partir do nó que não recebe nenhuma delas.
 * Irmãos com o mesmo prefixo (OSRM · BR, OSRM · MX…) viram "OSRM ×5".
 * Projetos com captura de tela não têm diagrama: mostram a stack.
 */
export function flowOf(project: Project): Flow {
  const { media } = project;
  if (media.type !== "diagram") {
    return { kind: "stack", steps: project.stack.slice(0, 4).map((label) => ({ label })) };
  }

  const { nodes, edges } = media.diagram;
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const main = edges.filter((e) => e.main);
  if (!main.length) return { kind: "stack", steps: project.stack.slice(0, 4).map((label) => ({ label })) };

  const targets = new Set(main.map((e) => e.to));
  let current = (main.find((e) => !targets.has(e.from)) ?? main[0]).from;
  const seen = new Set([current]);
  const first = byId.get(current);
  const steps: FlowStep[] = [{ label: first?.label ?? current, client: first?.kind === "client" }];

  for (;;) {
    const edge = main.find((e) => e.from === current && !seen.has(e.to));
    const node = edge && byId.get(edge.to);
    if (!edge || !node) break;

    const [base] = node.label.split(" · ");
    const twins = node.label.includes(" · ")
      ? edges.filter((e) => e.from === edge.from && e.to !== edge.to && byId.get(e.to)?.label.split(" · ")[0] === base)
          .length
      : 0;

    steps.push({
      label: twins ? `${base} ×${twins + 1}` : node.label,
      async: Boolean(edge.async),
      client: node.kind === "client",
    });
    seen.add(edge.to);
    current = edge.to;
  }

  return { kind: "flow", steps };
}
