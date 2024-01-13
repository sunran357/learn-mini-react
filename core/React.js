// Dom是一个树形结构 构建一个树形结构的数据

// 类型：type 属性: props 子元素: children
const nodeElement = {
    type: "TEXT",
    props: {
      nodeValue: "app",
      children: [],
    },
  };
  // nodeElement 动态方法
  function createTextElement(textValue) {
    return {
      type: "TEXT",
      props: {
        nodeValue: textValue,
        children: [],
      },
    };
  }
  
  const element = {
    type: "div",
    props: {
      id: "app",
      children: [nodeElement],
    },
  };
  // 上面element 变成动态方法
  function createElement(type, props, ...children) {
    return {
      type,
      props: {
        ...props,
        // 遍历子元素 判断类型 返回
        children: children.map((child) => {
          return typeof child === "string" ? createTextElement(child) : child;
        }),
      },
    };
  }
  
  // 1创建节点 2属性 3添加到父级上
  function render(el, container) {
    // 根据类型创建Dom
    const dom =
      el.type === "TEXT"
        ? document.createTextNode("")
        : document.createElement(el.type);
    // 遍历props
    Object.keys(el.props).forEach((key) => {
      // 去掉key值为children的属性
      if (key !== "children") {
        dom[key] = el.props[key];
      }
    });
  
    // 递归处理子元素 children
    el.props.children.forEach((child) => {
      // 递归 节点 添加到父节点
      render(child, dom);
    });
    return container.append(dom);
  }
  const React = {
    createElement,
    render,
  }
  export default React;