## Config

1. Install dependencies

   > yarn add gqless @gqless/react
   > yarn add -D @gqless/cli

2. config
   [./package.json](./package.json)

```json
{
  "scripts: {
    "generate": "gqless generate"
    },
  "gqless": {
    "url": "http://api.spacex.land/graphql/",
    "outputDir": "./src/graphql"
  }
}
```
## Caveats
- Set `strict:false` if getting typescript build error
