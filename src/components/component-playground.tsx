import { capitalize } from "@/lib/utils"
import * as Examples from "@/registry/default/examples"

interface Props {
  component?: string
}

export const ComponentPlayground = ({ component }: Props) => {
  // @ts-expect-error
  const Example = Examples[capitalize(component || "")]

  return component && <Example />
}
