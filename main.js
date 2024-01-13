console.log("min-react");


// const textElement = createTextElement("app"); // 动态创建子元素
// const dom = document.createElement(element.type); // 创建一个dom
// dom.id = App.props.id; // 设置dom id
// document.querySelector("#root").append(dom); // 插座根源素 将do添加上去

// const textNode = document.createTextNode(""); // 创建一个文本dom
// textNode.nodeValue = textElement.props.nodeValue; // 设置值为 app
// dom.append(textNode); // 将文本dom 放到根元素dom上

// render(App, document.querySelector("#root"));

import React from './core/React.js';
import ReactDom from './core/ReactDom.js';
const App = React.createElement("div", { id: "app" },'hello ', "word"); // 动态创建一个dom节点

ReactDom.createRoot(document.querySelector("#root")).render(App);