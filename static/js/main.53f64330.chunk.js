(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{22:function(t,e,n){t.exports=n(33)},32:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(19),l=n.n(r),c=n(16),i=n(6),d=n(7),u=n(9),s=n(8),p=n(12),m=n(1);function f(){return o.a.createElement("header",{style:b},o.a.createElement("h1",null,"Todo List"),o.a.createElement(p.b,{style:h,to:"/"},"Home")," ","|"," ",o.a.createElement(p.b,{style:h,to:"/about"},"About"))}var b={background:"#333",color:"#fff",textAlign:"center",padding:"10px  "},h={color:"#fff",textDecoration:"none"},v=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ",n,o.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:y},"x")))}}]),n}(a.Component),y={background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},E=v,g=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return o.a.createElement(E,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),n}(a.Component),j=n(21),O=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={title:""},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t.onChange=function(e){return t.setState(Object(j.a)({},e.target.name,e.target.value))},t}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo..",value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:1}}))}}]),n}(a.Component);function k(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is the Todo-list"))}var x=n(35),C=(n(32),function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={todos:[]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){t.setState({todos:Object(c.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t.addTodo=function(e){var n={id:Object(x.a)(),title:e,completed:!1};t.setState({todos:[].concat(Object(c.a)(t.state.todos),[n])})},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(f,null),o.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(O,{addTodo:t.addTodo}),o.a.createElement(g,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),o.a.createElement(m.a,{path:"/about",component:k}))))}}]),n}(a.Component));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.53f64330.chunk.js.map