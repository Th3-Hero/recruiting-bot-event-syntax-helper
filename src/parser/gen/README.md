## Note

I had issues when generating the parser. The `ts` code that was generated contained types for `TokenStream`
and `DecisionState` that is not actually exported by `antlr4.web.mjs` (node_modules/antlr4/dist/antlr4.web.mjs).

To get it working I removed the imports of `TokenStream` and `DecisionState` from the generated `ts` files and replaced
any uses with `any`. This solved the issue and works as expected. At this time after many hours of searching I was unable to find a solution so just resorted to this for now.

### Error

```
src/parser/EventConditionParser.ts (6:18): "DecisionState" is not exported by "node_modules/antlr4/dist/antlr4.web.mjs", imported by "src/parser/EventConditionParser.ts". 
src/parser/EventConditionParser.ts (11:8): "TokenStream" is not exported by "node_modules/antlr4/dist/antlr4.web.mjs", imported by "src/parser/EventConditionParser.ts". 
src/parser/EventConditionLexer.ts (7:4): "DecisionState" is not exported by "node_modules/antlr4/dist/antlr4.web.mjs", imported by "src/parser/EventConditionLexer.ts".```