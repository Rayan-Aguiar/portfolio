import type { CSSProperties } from "react";
import type { Project } from "@/data/projects";
import { flowOf } from "@/lib/flow";

interface Props {
  project: Project;
  /** Os nós acendem em sequência, no compasso do traçado do diagrama. */
  tracing?: boolean;
}

/** O caminho principal do projeto em uma linha: Upload → API Go ⇢ Fila Redis… */
export function FlowSignature({ project, tracing }: Props) {
  const flow = flowOf(project);
  const label = flow.kind === "stack" ? "Stack" : "Fluxo principal";

  return (
    <div className={tracing ? "flow-sig is-tracing" : "flow-sig"}>
      <p className="flow-sig__k osd" aria-hidden="true">
        {label}
      </p>
      <ol className={flow.kind === "stack" ? "flow flow--stack" : "flow"} aria-label={label}>
        {flow.steps.map((step, i) => (
          <li key={step.label + i} style={{ "--i": i } as CSSProperties}>
            {/* Setas só no fluxo real; a stack é uma lista, não uma sequência. */}
            {i > 0 && flow.kind === "flow" && (
              <span className={step.async ? "flow__arrow flow__arrow--async" : "flow__arrow"} aria-hidden="true">
                {step.async ? "⇢" : "→"}
              </span>
            )}
            <span className={step.client ? "flow__node flow__node--client" : "flow__node"}>{step.label}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
