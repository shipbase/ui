---
description: rewrite an example component following the user given description
---

## Steps

1. If user does not provide a description, ask the user for a description of the example they want to create.
2. use @source-code-retriever subagent to get the example code.
3. use @component-example-rewriter subagent to rewrite the example code.
4. use @code-quality-checker subagent to validate quality of the rewritten example code.
