(this["webpackJsonpgrocery-app"]=this["webpackJsonpgrocery-app"]||[]).push([[0],{186:function(e,t,a){e.exports=a(378)},192:function(e,t,a){},378:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),c=a.n(r),o=(a(191),a(157)),s=a(158),i=a(181),m=a(184),d=a(384),u=a(77),h=a(386),f=a(389),b=a(388),p=a(380),g=a(381),y=a(387),E=a(390),v=a(382),k=a(22),C=a(385),x=a(383),S=(a(192),d.a.TabPane),_=u.a.Option,w=h.a.Title,I=h.a.Paragraph,q=f.a.TextArea,O={labelCol:{span:4},wrapperCol:{span:12}},j={wrapperCol:{offset:4,span:12}},P=[{title:"Item",dataIndex:"item",key:"item",render:function(e){return l.a.createElement("b",null,e)}},{title:"Quantity",dataIndex:"quantity",key:"quantity"},{title:"Price",dataIndex:"price",key:"price"},{title:"Total Price",dataIndex:"totalprice",key:"totalprice"}],T=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).formRef=l.a.createRef(),e.showModal=function(){0===e.state.table.length?b.a.error("Please enter items into the cart!",3):e.setState({visible:!0})},e.handleOk=function(t){if(""===e.state.selected_canteen||0===e.state.selected_name.length)b.a.error("Please enter all the details!",3);else if(10===e.state.selected_number.length||0===e.state.selected_number.length){var a={Name:e.state.selected_name,Zone:e.state.selected_canteen,Mobile:e.state.selected_number,Order:e.state.jsonlist,Feedback:e.state.feedback};console.log(a),e.setState({visible:!1},(function(){fetch("http://groceryappv1-env.eba-fbstmdmg.us-east-2.elasticbeanstalk.com/submit-order",{method:"POST",body:JSON.stringify(a),headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){window.location.reload()})).catch((function(e){console.log(e)}))}))}else b.a.error("Please enter a 10-digit phone number!")},e.handleCancel=function(t){e.setState({visible:!1})},e.onItemChange=function(t){e.setState({item:t},(function(){for(var t in console.log(e.state.item),e.state.data)for(var a in e.state.data[t])e.state.data[t][a]["Item Name"]===e.state.item&&e.setState({price:e.state.data[t][a].Price,quantity:e.state.data[t][a].Tab,itemId:e.state.data[t][a]["Item Code"]})}))},e.onAmountChange=function(t){e.setState({selected_quantity:t})},e.onFinish=function(t){e.setState({kart:e.state.kart.concat([t])},(function(){console.log(e.state.kart),e.setState({table:e.state.table.concat([{key:e.state.table.length+1,item:e.state.item,quantity:e.state.selected_quantity,price:e.state.price,totalprice:(e.state.price*e.state.selected_quantity).toFixed(2)}]),jsonlist:e.state.jsonlist.concat([{item:e.state.item,quantity:e.state.quantity,price:e.state.price,code:e.state.itemId}])})}))},e.onCanteenChange=function(t){console.log(t),e.setState({selected_canteen:t})},e.onNameChange=function(t){e.setState({selected_name:t.target.value})},e.onNumberChange=function(t){e.setState({selected_number:t.target.value})},e.onFeedbackChange=function(t){e.setState({selected_feedback:t.target.value})},e.cancel_order=function(e){},e.state={mode:"top",data:[],kart:[],item:"",price:0,quantity:0,selected_quantity:0,table:[],jsonlist:[],visible:!1,canteen_data:[],selected_canteen:"",selected_name:"",selected_number:"",selected_feedback:"",itemId:""},e}return Object(s.a)(a,[{key:"componentWillMount",value:function(){var e=this;fetch("http://groceryappv1-env.eba-fbstmdmg.us-east-2.elasticbeanstalk.com/test",{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t})})).catch((function(e){console.log(e)})),fetch("http://groceryappv1-env.eba-fbstmdmg.us-east-2.elasticbeanstalk.com/trial",{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({canteen_data:t})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.mode.mode;return l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement(g.a,{xs:1,sm:2,md:1,lg:1,xl:1}),l.a.createElement(g.a,{xs:22,sm:20,md:22,lg:22,xl:22},l.a.createElement(w,{level:2},"NSC Canteen Online Delivery Service"),l.a.createElement(w,{level:3},"Contact: +91-8082992508")),l.a.createElement(g.a,{xs:1,sm:2,md:1,lg:1,xl:1})),l.a.createElement(p.a,null,l.a.createElement(g.a,{xs:2,sm:2,md:2,lg:2,xl:1}),l.a.createElement(g.a,{xs:20,sm:20,md:20,lg:20,xl:22},l.a.createElement(d.a,{defaultActiveKey:"1",tabPosition:t,style:{height:"65vh"},size:"large"},Object.keys(this.state.data).map((function(t){return l.a.createElement(S,{tab:"".concat(t),key:t},l.a.createElement(y.a,Object.assign({},O,{ref:e.formRef,name:"control-ref",onFinish:e.onFinish}),l.a.createElement(y.a.Item,{name:"Item",label:"Select from list and enter the quantity",rules:[{required:!0}]},l.a.createElement(u.a,{placeholder:"Select a item",onChange:e.onItemChange,allowClear:!0},e.state.data[t].map((function(e){return l.a.createElement(_,{value:e["Item Name"],key:e["Item Name"]},e["Item Name"])})))),l.a.createElement(E.a,{className:"alert-mesg",message:"Price per unit : "+e.state.price+"/-",type:"info"}),l.a.createElement(y.a.Item,{name:"Quantity",label:"Select the quantity",rules:[{required:!0}]},l.a.createElement(u.a,{placeholder:"Select the quantity of item",onChange:e.onAmountChange,allowClear:!0},Object.keys(e.state.quantity).map((function(t){return l.a.createElement(_,{value:e.state.quantity[t],key:e.state.quantity[t]},e.state.quantity[t])})))),l.a.createElement(y.a.Item,j,l.a.createElement(v.a,{title:""!==e.state.item&&e.state.selected_quantity>0?"Are you sure you want to order "+e.state.selected_quantity+" units of "+e.state.item:"Please select the above items",onConfirm:e.onFinish,onCancel:e.cancel_order,okText:"Yes",cancelText:"No"},l.a.createElement(k.a,{type:"primary",htmlType:"submit"},"Submit")),l.a.createElement(k.a,{className:"checkout_but",htmlType:"button",onClick:e.showModal},"Check Out"),l.a.createElement(C.a,{title:"Confirm your Details to place Order",visible:e.state.visible,onOk:e.handleOk,onCancel:e.handleCancel},l.a.createElement(y.a,{ref:e.formRef,name:"control-ref"},l.a.createElement(y.a.Item,{name:"Canteen",label:"Please select your desired drop point and time",rules:[{required:!0}]},l.a.createElement(u.a,{placeholder:"Select a time",onChange:e.onCanteenChange,allowClear:!0},Object.keys(e.state.canteen_data).map((function(t){return Object.keys(e.state.canteen_data[t]).map((function(a){return l.a.createElement(_,{value:t+"!"+e.state.canteen_data[t][a],key:t+e.state.canteen_data[t][a]},t+" : "+e.state.canteen_data[t][a])}))})))),l.a.createElement(y.a.Item,{name:"name",label:"Please enter your name",rules:[{required:!0}]},l.a.createElement(f.a,{onChange:e.onNameChange,placeholder:"Enter your name"})),l.a.createElement(y.a.Item,{name:"number",label:"Please enter your mobile number"},l.a.createElement(f.a,{onChange:e.onNumberChange,placeholder:"Enter your mobile number"})),l.a.createElement(y.a.Item,{name:"feedback",label:"Please enter your feedback"},l.a.createElement(q,{onChange:e.onFeedbackChange,placeholder:"Enter your feedback",rows:4})))))))})))),l.a.createElement(g.a,{xs:2,sm:2,md:2,lg:2,xl:1})),l.a.createElement(p.a,null,l.a.createElement(g.a,{xs:2,sm:2,md:4,lg:4,xl:4}),l.a.createElement(g.a,{xs:20,sm:20,md:16,lg:16,xl:16},l.a.createElement(x.a,{columns:P,dataSource:this.state.table})),l.a.createElement(g.a,{xs:2,sm:2,md:4,lg:4,xl:4})),l.a.createElement(p.a,null,l.a.createElement(g.a,{xs:2,sm:2,md:2,lg:2,xl:2}),l.a.createElement(g.a,{xs:20,sm:20,md:20,lg:20,xl:20},l.a.createElement(I,null,"NSC is commencing home area delivery of CSD items in a few officers accommodation where there is no other CSD counter nearby. The item list has been kept to essentials. The same will be revised regularly as per availability of stock and suggestions from dependents. Feel free to call the officer incharge at +91-8082992508"),l.a.createElement(I,null,"The orders placed will be delivered the next day as per times displayed. 3 \u20b9 will be charged over and above the billing amount for packing material. Please give the exact amount to the delivery boy. This will avoid crowding and avoidable delays in the process."),l.a.createElement(I,null,"Stay In : Stay Safe !!!")),l.a.createElement(g.a,{xs:2,sm:2,md:2,lg:2,xl:2})))}}]),a}(n.Component);var N=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[186,1,2]]]);
//# sourceMappingURL=main.e2f47ad0.chunk.js.map