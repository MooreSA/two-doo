(this["webpackJsonptwo-doo"]=this["webpackJsonptwo-doo"]||[]).push([[0],{16:function(e,t,o){},17:function(e,t,o){"use strict";o.r(t);var c=o(0),d=o(1),s=o(9),n=o.n(s),i=o(3),a=function(e){var t=e.project,o=e.editProject;return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsxs)("div",{className:"header__pageinfo",children:[Object(c.jsx)("span",{className:"header__title",children:"Two-Doo"}),Object(c.jsx)("a",{href:"http://mooresa.github.io",className:"header__link",children:"Home"})]}),Object(c.jsxs)("div",{className:"current-project",children:[Object(c.jsxs)("div",{className:"current-project__info",children:[Object(c.jsx)("div",{className:"current-project__title",children:t.title}),Object(c.jsx)("div",{className:"current-project__desc",children:t.desc})]}),Object(c.jsx)("button",{type:"button",className:"btn current-project__edit",onClick:o,children:"Edit Details"})]})]})},r=function(e){var t=e.projects,o=e.changeProject,d=e.activeIndex,s=e.addProject;return Object(c.jsxs)("div",{className:"sidebar",children:[Object(c.jsx)("button",{type:"button",className:"btn sidebar__new-project",onClick:s,children:"New Project"}),Object(c.jsx)("div",{className:"sidebar__projectlist",children:t.map((function(e,t){return t===d?Object(c.jsx)("button",{type:"button",className:"btn sidebar__project sidebar__project--active","data-project-id":t,children:e.title}):Object(c.jsx)("button",{type:"button",className:"btn sidebar__project","data-project-id":t,onClick:o,children:e.title})}))})]})},l=o(4),j=o.n(l),u=function(e){var t,o,d=e.todo,s=e.editTodo,n=e.index,i=e.saveEditTodo,a=d.active,r=d.title,l=d.desc,u=d.dueDate,b=function(e){e.preventDefault(),s(n)},h=function(e){e.preventDefault(),i(n,{active:!a,title:r,desc:l,dueDate:u})};return a?(t="todo",o=Object(c.jsx)("div",{className:"todo__check",onClick:h,onKeyDown:h,tabIndex:"0",role:"checkbox","aria-checked":"false","aria-label":"Toggle Todo"})):(t="todo todo--done",o=Object(c.jsx)("div",{className:"todo__check  todo__check--checked",onClick:h,onKeyDown:h,tabIndex:"0",role:"checkbox","aria-checked":"true","aria-label":"Toggle Todo",checked:!0})),Object(c.jsxs)("div",{className:t,role:"button",tabIndex:"0","aria-hidden":"true",children:[o,Object(c.jsx)("span",{onClick:b,role:"button","aria-hidden":"true",className:"todo__title",children:r}),Object(c.jsx)("span",{onClick:b,role:"button","aria-hidden":"true",className:"todo__description",children:l}),Object(c.jsx)("span",{onClick:b,role:"button","aria-hidden":"true",className:"todo__due-date",children:j()(u).format("YYYY-MM-DD")})]})},b=function(e){var t=e.project,o=e.addTodo,d=e.editTodo,s=e.saveEditTodo,n=t.todos;return Object(c.jsxs)("div",{className:"todolist",children:[n.map((function(e,t){return Object(c.jsx)(u,{todo:e,index:t,editTodo:d,saveEditTodo:s},t)})),Object(c.jsx)("button",{type:"button",className:"btn todolist__add-todo",onClick:o,children:"Add Todo"})]})},h=o(5),p=o(2),v=function(e){var t=e.projectInfo,o=e.projectFunctions,s=o.saveNewProject,n=o.saveEditProject,a=o.deleteProject,r=o.discardModal,l=t.title,j=void 0===l?"Todo List":l,u=t.desc,b=void 0===u?"Chores to be done":u,v=t.todos,m=Object(d.useState)({title:j,desc:b}),O=Object(i.a)(m,2),_=O[0],x=O[1],f=function(e){var t=e.target,o=t.value,c=t.name;x(Object(p.a)(Object(p.a)({},_),{},Object(h.a)({},c,o)))};return Object(c.jsxs)("div",{className:"modal__content",children:[Object(c.jsx)("div",{className:"modal__header",children:"Project:"}),Object(c.jsxs)("div",{className:"modal__form",children:[Object(c.jsx)("label",{className:"modal__label",htmlFor:"project-title-input",children:"Title:"}),Object(c.jsx)("input",{className:"modal__input",type:"text",name:"title",id:"project-title-input",value:_.title,onChange:f}),Object(c.jsx)("label",{className:"modal__label",htmlFor:"project-desc-input",children:"Desc:"}),Object(c.jsx)("input",{className:"modal__input",type:"text",name:"desc",id:"project-desc-input",value:_.desc,onChange:f})]}),Object(c.jsxs)("div",{className:"modal__btns",children:[Object(c.jsx)("button",{type:"button",className:"btn modal__submit",onClick:function(){s?s(Object(p.a)(Object(p.a)({},_),{},{todos:[]})):n(Object(p.a)(Object(p.a)({},_),{},{todos:v}))},children:"Submit"}),Object(c.jsx)("button",{type:"button",className:"btn modal__discard",onClick:r,children:"Discard"}),a?Object(c.jsx)("button",{type:"button",className:"btn modal__delete",onClick:a,children:"Delete"}):null]})]})},m=function(e){var t=e.todoInfo,o=e.index,s=e.todoFunctions,n=s.saveNewTodo,a=s.saveEditTodo,r=s.deleteTodo,l=s.discardModal,u=t.title,b=void 0===u?"Todo":u,v=t.desc,m=void 0===v?"Description":v,O=t.dueDate,_=void 0===O?new Date:O,x=Object(d.useState)({title:b,desc:m,dueDate:j()(_).format("YYYY-MM-DD")}),f=Object(i.a)(x,2),N=f[0],T=f[1],k=function(e){var t=e.target,o=t.value,c=t.name;T(Object(p.a)(Object(p.a)({},N),{},Object(h.a)({},c,o)))};return Object(c.jsxs)("div",{className:"modal__content",children:[Object(c.jsx)("div",{className:"modal__header",children:"Todo"}),Object(c.jsxs)("div",{className:"modal__form",children:[Object(c.jsx)("label",{className:"modal__label",htmlFor:"todo-title-input",children:"Title:"}),Object(c.jsx)("input",{className:"modal__input",name:"title",type:"text",value:N.title,id:"todo-title-input",onChange:k}),Object(c.jsx)("label",{className:"modal__label",htmlFor:"todo-desc-input",children:"Description:"}),Object(c.jsx)("input",{className:"modal__input",name:"desc",type:"text",value:N.desc,id:"todo-desc-input",onChange:k}),Object(c.jsx)("label",{className:"modal__label",htmlFor:"todo-date-input",children:"Due Date:"}),Object(c.jsx)("input",{className:"modal__input",name:"dueDate",type:"date",value:N.dueDate,id:"todo-date-input",onChange:k})]}),Object(c.jsxs)("div",{className:"modal__btns",children:[Object(c.jsx)("button",{type:"submit",className:"btn modal__submit",onClick:function(){n?n(Object(p.a)(Object(p.a)({},N),{},{dueDate:j()(_)})):a(o,Object(p.a)(Object(p.a)({},N),{},{dueDate:j()(N.dueDate)}))},children:"Submit"}),Object(c.jsx)("button",{type:"button",className:"btn modal__discard",onClick:l,children:"Discard"}),r?Object(c.jsx)("button",{type:"button",className:"btn modal__delete",onClick:function(e){e.preventDefault(),r(o)},children:"Delete"}):null]})]})},O=function(e){var t=e.todoInfo,o=void 0===t?{}:t,d=e.todoFunctions,s=e.index,n=e.projectFunctions,i=e.projectInfo,a=void 0===i?{}:i;return d?Object(c.jsx)("div",{className:"modal",children:Object(c.jsx)(m,{todoInfo:o,index:s,todoFunctions:d})}):n?Object(c.jsx)("div",{className:"modal",children:Object(c.jsx)(v,{projectInfo:a,projectFunctions:n})}):null},_=o(6),x=o(7),f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(_.a)(this,e);var o=t.todos,c=void 0===o?[]:o,d=t.title,s=void 0===d?"Project":d,n=t.desc,i=void 0===n?"Project Description":n;this.todos=c,this.title=s,this.desc=i}return Object(x.a)(e,[{key:"addTodo",value:function(t){return this.todos.push(t),new e({todos:this.todos,title:this.title,desc:this.desc})}},{key:"editTodo",value:function(t,o){return this.todos[t]=o,new e({todos:this.todos,title:this.title,desc:this.desc})}},{key:"editTitle",value:function(t){return new e({todos:this.todos,title:t,desc:this.desc})}},{key:"editDesc",value:function(t){return new e({todos:this.todos,title:this.title,desc:t})}},{key:"deleteTodo",value:function(t){return this.todos.splice(t,1),new e({todos:this.todos,title:this.title,desc:this.desc})}}]),e}(),N=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[new f];Object(_.a)(this,e),this.projects=t}return Object(x.a)(e,[{key:"appendProject",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:"Project",desc:"Project Description",todos:[]},o=new f(t);return this.projects.push(o),new e(this.projects)}},{key:"editProject",value:function(t,o){var c=this.projects[t].todos,d=new f(Object(p.a)(Object(p.a)({},o),{},{todos:c}));return this.projects.splice(t,1,d),new e(this.projects)}},{key:"deleteProject",value:function(t){if(void 0===t)throw new Error("Undefined Project Index");return this.projects.splice(t,1),new e(this.projects)}},{key:"addTodo",value:function(t,o){var c=this.projects[t].addTodo(o);return this.projects.splice(t,1,c),new e(this.projects)}},{key:"removeTodo",value:function(t,o){var c=this.projects[t].deleteTodo(o);return this.projects.splice(t,1,c),new e(this.projects)}},{key:"editTodo",value:function(t,o,c){var d=this.projects[t].editTodo(o,c);return this.projects.splice(t,1,d),new e(this.projects)}}]),e}(),T=function e(t){if(Object(_.a)(this,e),!t)return this.active=!0,this.title="New Todo",this.desc="Todo Description",void(this.dueDate=j()());var o=t.active,c=void 0===o||o,d=t.title,s=void 0===d?"New Todo":d,n=t.desc,i=void 0===n?"Todo Description":n,a=t.dueDate,r=void 0===a?j()():a;this.active=c,this.title=s,this.desc=i,this.dueDate=r},k=function(){var e=Object(d.useState)(new N),t=Object(i.a)(e,2),o=t[0],s=t[1],n=Object(d.useState)(0),l=Object(i.a)(n,2),j=l[0],u=l[1],h=Object(d.useState)(!1),p=Object(i.a)(h,2),v=p[0],m=p[1],_=Object(d.useState)(!1),x=Object(i.a)(_,2),f=x[0],k=x[1],w=Object(d.useState)(!1),D=Object(i.a)(w,2),y=D[0],P=D[1],g=Object(d.useState)(!1),C=Object(i.a)(g,2),I=C[0],E=C[1],F=function(){m(!1),k(!1),P(!1),E(!1)},M=function(e,t){var c=new T(t);s(o.editTodo(j,e,c)),F()};return Object(d.useEffect)((function(){F()}),[o]),Object(d.useEffect)((function(){var e=function(e){27===e.keyCode&&F()};v||f||y||I?window.addEventListener("keydown",e):window.removeEventListener("keydown",e)}),[v,f,y,I]),Object(c.jsxs)("div",{className:"page",children:[v?Object(c.jsx)(O,{todoFunctions:{saveNewTodo:function(e){var t=e.title,c=e.desc,d=e.dueDate;s(o.addTodo(j,new T({title:t,desc:c,dueDate:d}))),F()},discardModal:F},discardModal:F}):null,f?Object(c.jsx)(O,{todoFunctions:{saveEditTodo:M,deleteTodo:function(e){s(o.removeTodo(j,e))},discardModal:F},index:f.index,todoInfo:f.todoInfo}):null,y?Object(c.jsx)(O,{projectFunctions:{saveNewProject:function(e){s(o.appendProject(e))},discardModal:F}}):null,I?Object(c.jsx)(O,{projectFunctions:{saveEditProject:function(e){s(o.editProject(j,e))},deleteProject:function(){o.projects.length>1&&(s(o.deleteProject(j)),u(0))},discardModal:F},projectInfo:o.projects[j]}):null,Object(c.jsx)(a,{project:o.projects[j],editProject:function(){return E(!0)}}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)(r,{projects:o.projects,activeIndex:j,changeProject:function(e){var t=parseInt(e.target.dataset.projectId,10);u(t)},addProject:function(){return P(!0)}}),Object(c.jsx)(b,{project:o.projects[j],addTodo:function(){return m(!0)},editTodo:function(e){var t=o.projects[j].todos[e];k({index:e,todoInfo:t})},saveEditTodo:M})]}),Object(c.jsx)("footer",{className:"footer",children:"Copyright \xa9 Seamus Moore 2021"})]})};o(16);n.a.render(Object(c.jsx)(k,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.8b6bcdfb.chunk.js.map