import { readFile } from 'node:fs/promises'
import ts from 'typescript'

export async function loadSource(relativePath) {
  const source = await readFile(new URL(relativePath, import.meta.url), 'utf8')
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } })
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)
}

export async function readTranslations() {
  const source = await readFile(new URL('../src/i18n.ts', import.meta.url), 'utf8')
  const file = ts.createSourceFile('i18n.ts', source, ts.ScriptTarget.Latest, true)
  let resources
  for (const statement of file.statements) {
    if (ts.isVariableStatement(statement)) {
      resources = statement.declarationList.declarations.find((declaration) => declaration.name.getText(file) === 'resources')
      if (resources) break
    }
  }
  const { outputText } = ts.transpileModule(`export const resources = ${resources.initializer.getText(file)}`, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } })
  return (await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)).resources
}
