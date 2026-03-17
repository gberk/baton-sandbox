# feat shout

Add a `greet shout <name>` command that prints an emphatic, uppercase greeting.

## Behavior

`greet shout <name>` prints:

```
HELLO, <NAME>!
```

The name is uppercased. The name argument is required; if omitted, the command prints a usage error (same pattern as `hello` and `goodbye`).

## Why

Exercises the spec and code phases end-to-end on a trivially scoped change. The new command follows the exact same structure as existing commands, so the agent has a clear template to work from.
