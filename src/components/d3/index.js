import rehypeReact from 'rehype-react';
import Counter from './Counter';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {'interactive-counter': Counter},
}).Compiler;
