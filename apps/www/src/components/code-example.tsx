import { Code } from './code';

export function CodeExample() {
  const exampleCode = `
function greet(name: string) {
  console.log(\`Hello, \${name}!\`);
}

greet('World');
`;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Code 组件示例</h3>
      
      {/* 基本用法 */}
      <div>
        <h4 className="text-md font-medium mb-2">基本用法</h4>
        <Code code={exampleCode} lang="typescript" />
      </div>
      
      {/* 内联代码 */}
      <div>
        <h4 className="text-md font-medium mb-2">内联代码</h4>
        <p>这是一个内联代码示例：<Code code="console.log('Hello')" lang="javascript" inline /></p>
      </div>
      
      {/* 不同主题 */}
      <div>
        <h4 className="text-md font-medium mb-2">不同主题</h4>
        <Code code={exampleCode} lang="typescript" theme="github-light" />
      </div>
      
      {/* 自定义占位符 */}
      <div>
        <h4 className="text-md font-medium mb-2">自定义加载占位符</h4>
        <Code code={exampleCode} lang="typescript" placeholder="正在加载代码..." />
      </div>
    </div>
  );
}
