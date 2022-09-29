import React from "react";
import ReactMarkdown from 'react-markdown'

import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you

import './markdown.css';
export default function Index() {

  return (
    <div className="markdown">
        <ReactMarkdown
            children={`The lift coefficient ($C_L$) is a dimensionless coefficient.`}
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
        />
    </div>    
  );
}

