(this["webpackJsonptwo-doo"]=this["webpackJsonptwo-doo"]||[]).push([[0],{19:function(e,t,o){},20:function(e,t,o){"use strict";o.r(t);var c=o(0),d=o(1),s=o(12),i=o.n(s),n=o(6),a=function(e){var t=e.project,o=e.editProject;return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsxs)("div",{className:"header__pageinfo",children:[Object(c.jsx)("span",{className:"header__title",children:"Two-Doo"}),Object(c.jsx)("a",{href:"http://mooresa.github.io",className:"header__link",children:"Home"})]}),Object(c.jsxs)("div",{className:"current-project",children:[Object(c.jsxs)("div",{className:"current-project__info",children:[Object(c.jsx)("div",{className:"current-project__title",children:t.title}),Object(c.jsx)("div",{className:"current-project__desc",children:t.desc})]}),Object(c.jsx)("button",{type:"button",className:"btn current-project__edit",onClick:o,children:"Edit Details"})]})]})},r=function(e){var t=e.projects,o=e.changeProject,d=e.activeIndex,s=e.addProject;return Object(c.jsxs)("div",{className:"sidebar",children:[Object(c.jsx)("button",{type:"button",className:"btn sidebar__new-project",onClick:s,children:"New Project"}),Object(c.jsx)("div",{className:"sidebar__projectlist",children:t.map((function(e,t){return t===d?Object(c.jsx)("button",{type:"button",className:"btn sidebar__project sidebar__project--active","data-project-id":t,children:e.title}):Object(c.jsx)("button",{type:"button",className:"btn sidebar__project","data-project-id":t,onClick:o,children:e.title})}))})]})},l=o(7),j=o.n(l),u=function(e){var t,o,d=e.todo,s=e.editTodo,i=e.index,n=e.saveEditTodo,a=d.active,r=d.title,l=d.desc,u=d.dueDate,b=function(e){e.preventDefault(),s(i)},h=function(e){e.preventDefault(),n(i,{active:!a,title:r,desc:l,dueDate:u})};return a?(t="todo",o=Object(c.jsx)("div",{className:"todo__check",onClick:h,onKeyDown:h,tabIndex:"0",role:"checkbox","aria-checked":"false","aria-label":"Toggle Todo"})):(t="todo todo--done",o=Object(c.jsx)("div",{className:"todo__check  todo__check--checked",onClick:h,onKeyDown:h,tabIndex:"0",role:"checkbox","aria-checked":"true","aria-label":"Toggle Todo",checked:!0})),Object(c.jsxs)("div",{className:t,role:"button",tabIndex:"0","aria-hidden":"true",children:[o,Object(c.jsx)("span",{onClick:b,role:"button","aria-hidden":"true",className:"todo__title",children:r}),Object(c.jsx)("span",{onClick:b,role:"button","aria-hidden":"true",className:"todo__description",children:l}),Object(c.jsx)("span",{onClick:b,role:"button","aria-hidden":"true",className:"todo__due-date",children:j()(u).format("YYYY-MM-DD")})]})},b=function(e){var t=e.project,o=e.addTodo,d=e.editTodo,s=e.saveEditTodo,i=t.todos;return Object(c.jsxs)("div",{className:"todolist",children:[i.map((function(e,t){return Object(c.jsx)(u,{todo:e,index:t,editTodo:d,saveEditTodo:s},t)})),Object(c.jsx)("button",{type:"button",className:"btn todolist__add-todo",onClick:o,children:"Add Todo"})]})},h=o(4),p=o(2),v=o(9),m=function(e){var t=e.projectInfo,o=e.projectFunctions,s=o.saveNewProject,i=o.saveEditProject,a=o.deleteProject,r=o.discardModal,l=Object(v.b)({from:{opacity:0},to:{opacity:1}}),j=t.title,u=void 0===j?"Todo List":j,b=t.desc,m=void 0===b?"Chores to be done":b,O=t.todos,_=Object(d.useState)({title:u,desc:m}),f=Object(n.a)(_,2),x=f[0],N=f[1],T=function(e){var t=e.target,o=t.value,c=t.name;N(Object(p.a)(Object(p.a)({},x),{},Object(h.a)({},c,o)))};return Object(c.jsxs)(v.a.div,{className:"modal__content",style:l,children:[Object(c.jsx)("div",{className:"modal__header",children:"Project:"}),Object(c.jsxs)("div",{className:"modal__form",children:[Object(c.jsx)("label",{className:"modal__label",htmlFor:"project-title-input",children:"Title:"}),Object(c.jsx)("input",{className:"modal__input",type:"text",name:"title",id:"project-title-input",value:x.title,onChange:T}),Object(c.jsx)("label",{className:"modal__label",htmlFor:"project-desc-input",children:"Desc:"}),Object(c.jsx)("input",{className:"modal__input",type:"text",name:"desc",id:"project-desc-input",value:x.desc,onChange:T})]}),Object(c.jsxs)("div",{className:"modal__btns",children:[Object(c.jsx)("button",{type:"button",className:"btn modal__submit",onClick:function(){s?s(Object(p.a)(Object(p.a)({},x),{},{todos:[]})):i(Object(p.a)(Object(p.a)({},x),{},{todos:O}))},children:"Submit"}),Object(c.jsx)("button",{type:"button",className:"btn modal__discard",onClick:r,children:"Discard"}),a?Object(c.jsx)("button",{type:"button",className:"btn modal__delete",onClick:a,children:"Delete"}):null]})]})},O=function(e){var t=e.todoInfo,o=e.index,s=e.todoFunctions,i=s.saveNewTodo,a=s.saveEditTodo,r=s.deleteTodo,l=s.discardModal,u=t.title,b=void 0===u?"Todo":u,m=t.desc,O=void 0===m?"Description":m,_=t.dueDate,f=void 0===_?new Date:_,x=Object(d.useState)({title:b,desc:O,dueDate:j()(f).format("YYYY-MM-DD")}),N=Object(n.a)(x,2),T=N[0],k=N[1],w=Object(v.b)({from:{opacity:0},to:{opacity:1}}),y=function(e){var t=e.target,o=t.value,c=t.name;k(Object(p.a)(Object(p.a)({},T),{},Object(h.a)({},c,o)))};return Object(c.jsxs)(v.a.div,{className:"modal__content",style:w,children:[Object(c.jsx)("div",{className:"modal__header",children:"Todo"}),Object(c.jsxs)("div",{className:"modal__form",children:[Object(c.jsx)("label",{className:"modal__label",htmlFor:"todo-title-input",children:"Title:"}),Object(c.jsx)("input",{className:"modal__input",name:"title",type:"text",value:T.title,id:"todo-title-input",onChange:y}),Object(c.jsx)("label",{className:"modal__label",htmlFor:"todo-desc-input",children:"Description:"}),Object(c.jsx)("input",{className:"modal__input",name:"desc",type:"text",value:T.desc,id:"todo-desc-input",onChange:y}),Object(c.jsx)("label",{className:"modal__label",htmlFor:"todo-date-input",children:"Due Date:"}),Object(c.jsx)("input",{className:"modal__input",name:"dueDate",type:"date",value:T.dueDate,id:"todo-date-input",onChange:y})]}),Object(c.jsxs)("div",{className:"modal__btns",children:[Object(c.jsx)("button",{type:"submit",className:"btn modal__submit",onClick:function(){i?i(Object(p.a)(Object(p.a)({},T),{},{dueDate:j()(f)})):a(o,Object(p.a)(Object(p.a)({},T),{},{dueDate:j()(T.dueDate)}))},children:"Submit"}),Object(c.jsx)("button",{type:"button",className:"btn modal__discard",onClick:l,children:"Discard"}),r?Object(c.jsx)("button",{type:"button",className:"btn modal__delete",onClick:function(e){e.preventDefault(),r(o)},children:"Delete"}):null]})]})},_=function(e){var t=e.todoInfo,o=void 0===t?{}:t,d=e.todoFunctions,s=e.index,i=e.projectFunctions,n=e.projectInfo,a=void 0===n?{}:n;return d?Object(c.jsx)("div",{className:"modal",children:Object(c.jsx)(O,{todoInfo:o,index:s,todoFunctions:d})}):i?Object(c.jsx)("div",{className:"modal",children:Object(c.jsx)(m,{projectInfo:a,projectFunctions:i})}):null},f=o(3),x=o(5),N=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(f.a)(this,e);var o=t.todos,c=void 0===o?[]:o,d=t.title,s=void 0===d?"Project":d,i=t.desc,n=void 0===i?"Project Description":i;this.todos=c,this.title=s,this.desc=n}return Object(x.a)(e,[{key:"addTodo",value:function(t){return this.todos.push(t),new e({todos:this.todos,title:this.title,desc:this.desc})}},{key:"editTodo",value:function(t,o){return this.todos[t]=o,new e({todos:this.todos,title:this.title,desc:this.desc})}},{key:"editTitle",value:function(t){return new e({todos:this.todos,title:t,desc:this.desc})}},{key:"editDesc",value:function(t){return new e({todos:this.todos,title:this.title,desc:t})}},{key:"deleteTodo",value:function(t){return this.todos.splice(t,1),new e({todos:this.todos,title:this.title,desc:this.desc})}}]),e}(),T=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[new N];Object(f.a)(this,e),this.projects=t}return Object(x.a)(e,[{key:"appendProject",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:"Project",desc:"Project Description",todos:[]},o=new N(t);return this.projects.push(o),new e(this.projects)}},{key:"editProject",value:function(t,o){var c=this.projects[t].todos,d=new N(Object(p.a)(Object(p.a)({},o),{},{todos:c}));return this.projects.splice(t,1,d),new e(this.projects)}},{key:"deleteProject",value:function(t){if(void 0===t)throw new Error("Undefined Project Index");return this.projects.splice(t,1),new e(this.projects)}},{key:"addTodo",value:function(t,o){var c=this.projects[t].addTodo(o);return this.projects.splice(t,1,c),new e(this.projects)}},{key:"removeTodo",value:function(t,o){var c=this.projects[t].deleteTodo(o);return this.projects.splice(t,1,c),new e(this.projects)}},{key:"editTodo",value:function(t,o,c){var d=this.projects[t].editTodo(o,c);return this.projects.splice(t,1,d),new e(this.projects)}}]),e}(),k=function e(t){if(Object(f.a)(this,e),!t)return this.active=!0,this.title="New Todo",this.desc="Todo Description",void(this.dueDate=j()());var o=t.active,c=void 0===o||o,d=t.title,s=void 0===d?"New Todo":d,i=t.desc,n=void 0===i?"Todo Description":i,a=t.dueDate,r=void 0===a?j()():a;this.active=c,this.title=s,this.desc=n,this.dueDate=r},w=function(){var e=Object(d.useState)(new T),t=Object(n.a)(e,2),o=t[0],s=t[1],i=Object(d.useState)(0),l=Object(n.a)(i,2),j=l[0],u=l[1],h=Object(d.useState)(!1),p=Object(n.a)(h,2),v=p[0],m=p[1],O=Object(d.useState)(!1),f=Object(n.a)(O,2),x=f[0],N=f[1],w=Object(d.useState)(!1),y=Object(n.a)(w,2),D=y[0],P=y[1],g=Object(d.useState)(!1),C=Object(n.a)(g,2),I=C[0],E=C[1],F=function(){m(!1),N(!1),P(!1),E(!1)},M=function(e){var t=e.title,c=e.desc,d=e.dueDate;s(o.addTodo(j,new k({title:t,desc:c,dueDate:d}))),F()},S=function(e,t){var c=new k(t);s(o.editTodo(j,e,c)),F()},Y=function(e){s(o.removeTodo(j,e))},L=function(e){s(o.appendProject(e))},J=function(e){s(o.editProject(j,e))},K=function(){o.projects.length>1&&(s(o.deleteProject(j)),u(0))};Object(d.useEffect)((function(){F()}),[o]),Object(d.useEffect)((function(){var e=function(e){27===e.keyCode&&F()};v||x||D||I?window.addEventListener("keydown",e):window.removeEventListener("keydown",e)}),[v,x,D,I]);return Object(c.jsxs)("div",{className:"page",children:[v?Object(c.jsx)(_,{todoFunctions:{saveNewTodo:M,discardModal:F},discardModal:F}):x?Object(c.jsx)(_,{todoFunctions:{saveEditTodo:S,deleteTodo:Y,discardModal:F},index:x.index,todoInfo:x.todoInfo}):D?Object(c.jsx)(_,{projectFunctions:{saveNewProject:L,discardModal:F}}):I?Object(c.jsx)(_,{projectFunctions:{saveEditProject:J,deleteProject:K,discardModal:F},projectInfo:o.projects[j]}):null,Object(c.jsx)(a,{project:o.projects[j],editProject:function(){return E(!0)}}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)(r,{projects:o.projects,activeIndex:j,changeProject:function(e){var t=parseInt(e.target.dataset.projectId,10);u(t)},addProject:function(){return P(!0)}}),Object(c.jsx)(b,{project:o.projects[j],addTodo:function(){return m(!0)},editTodo:function(e){var t=o.projects[j].todos[e];N({index:e,todoInfo:t})},saveEditTodo:S})]}),Object(c.jsx)("footer",{className:"footer",children:"Copyright \xa9 Seamus Moore 2021"})]})};o(19);i.a.render(Object(c.jsx)(w,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d6410e57.chunk.js.map