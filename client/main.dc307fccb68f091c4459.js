(()=>{"use strict";var e={202:(e,t,n)=>{n.r(t)},78:(e,t,n)=>{n.r(t)},803:(e,t,n)=>{n.r(t)},262:(e,t,n)=>{n.r(t)},362:(e,t,n)=>{n.r(t)},191:(e,t,n)=>{n.r(t)},957:(e,t,n)=>{n.r(t)},905:(e,t,n)=>{n.r(t)},500:(e,t,n)=>{n.r(t)},850:(e,t,n)=>{n.r(t)},724:function(e,t){var n=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(s,a){function r(e){try{l(i.next(e))}catch(e){a(e)}}function o(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.deleteWinner=t.updateWinner=t.createWinner=t.getWinner=t.getAllWinners=t.switchToDriveMode=t.stopEngineCar=t.startEngineCar=t.getAllCars=t.getCar=t.updateCar=t.deleteCar=t.createCar=void 0;const i="http://localhost:3000";t.createCar=e=>n(void 0,void 0,void 0,(function*(){try{yield fetch(`${i}/garage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(e){throw new Error("createCar")}})),t.deleteCar=e=>n(void 0,void 0,void 0,(function*(){try{yield fetch(`${i}/garage/${e}`,{method:"DELETE"})}catch(e){throw new Error("deleteCar")}})),t.updateCar=e=>n(void 0,void 0,void 0,(function*(){try{yield fetch(`${i}/garage/${e.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(e){throw new Error("updateCar")}})),t.getCar=e=>n(void 0,void 0,void 0,(function*(){try{const t=yield fetch(`${i}/garage/${e}`),n=yield t.json();return 200===t.status?n:null}catch(e){throw new Error("getCar")}})),t.getAllCars=(e=1,t=7)=>n(void 0,void 0,void 0,(function*(){try{const n=yield fetch(`${i}/garage?_limit=${t}&_page=${e}`),s=yield n.json();return 200===n.status?{cars:s,count:n.headers.get("X-Total-Count")||"0"}:null}catch(e){throw new Error("getAllCars")}})),t.startEngineCar=e=>n(void 0,void 0,void 0,(function*(){try{const t=yield fetch(`${i}/engine?id=${e}&status=started`,{method:"PATCH"}),n=yield t.json();return{status:t.status,result:n}}catch(e){throw new Error("startEngineCar")}})),t.stopEngineCar=e=>n(void 0,void 0,void 0,(function*(){try{const t=yield fetch(`${i}/engine?id=${e}&status=stopped`,{method:"PATCH"}),n=yield t.json();return{status:t.status,result:n}}catch(e){throw new Error("stopEngineCar")}})),t.switchToDriveMode=e=>n(void 0,void 0,void 0,(function*(){try{return(yield fetch(`${i}/engine?id=${e}&status=drive`,{method:"PATCH"})).status}catch(e){throw new Error("switchToDriveMode")}})),t.getAllWinners=(e,t="time",s="ASC",a=10)=>n(void 0,void 0,void 0,(function*(){try{const n=yield fetch(`${i}/winners?_page=${e}&_limit=${a}&_sort=${t}&_order=${s}`);return{result:yield n.json(),totalCount:n.headers.get("X-Total-Count")||"0"}}catch(e){throw new Error("getAllWinners")}})),t.getWinner=e=>n(void 0,void 0,void 0,(function*(){try{const t=yield fetch(`${i}/winners/${e}`),n=yield t.json();return{status:t.status,result:n}}catch(e){throw new Error("getWinner")}})),t.createWinner=e=>n(void 0,void 0,void 0,(function*(){try{return(yield fetch(`${i}/winners`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).status}catch(e){throw new Error("createWinner")}})),t.updateWinner=e=>n(void 0,void 0,void 0,(function*(){try{yield fetch(`${i}/winners/${e.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(e){throw new Error("updateWinner")}})),t.deleteWinner=e=>n(void 0,void 0,void 0,(function*(){try{yield fetch(`${i}/winners/${e}`,{method:"DELETE"})}catch(e){throw new Error("deleteWinner")}}))},752:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const i=n(440),s=n(425),a=n(977);t.App=class{constructor(e){this.rootElement=e,new a.Header(this.rootElement),this.main=new s.Component(this.rootElement,"main",["main"]),this.router=new i.Router(this.main.element)}init(){this.router.initRouter()}}},91:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GarageContainer=void 0,n(202);const i=n(425),s=n(524),a=n(259);class r extends i.Component{constructor(e){super(e,"div",["garage-container"]),this.removeCar=()=>{},this.updateCar=()=>{},this.updatePage=()=>{},this.cars=[],this.title=new i.Component(this.element,"h2"),this.pagination=new a.Pagination(this.element),this.container=new i.Component(this.element,"div",["garage-container"]),this.pagination.updatePage=e=>this.updatePage(e)}updateTitle(e){this.title.element.innerHTML=`Garage - (${e} cars)`}clear(){this.container.element.innerHTML="",this.cars=[]}addItems(e,t){this.clear(),this.updateTitle(t),this.cars=e.map((e=>{const t=new s.GarageItem(this.container.element,e);return t.removeCar=e=>this.removeCar(e),t.updateCar=e=>this.updateCar(e),t}))}}t.GarageContainer=r},524:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(s,a){function r(e){try{l(i.next(e))}catch(e){a(e)}}function o(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.GarageItem=void 0,n(202);const s=n(425),a=n(329),r=n(41),o=n(724);class l extends s.Component{constructor(e,t){super(e,"div",["garage-item"]),this.speed=0,this.startEngine=()=>{},this.stopEngine=()=>{},this.removeCar=()=>{},this.updateCar=()=>{},this.car=t;const n=new s.Component(this.element,"div",["garage-item-top"]);new a.WEBUIButton(n.element,["btn-small"],"select").onClickButton=()=>{t.id&&this.updateCar(t.id)},new a.WEBUIButton(n.element,["btn-small"],"remove").onClickButton=()=>{t.id&&this.removeCar(t.id),this.destroy()},new s.Component(n.element,"span",[],t.name);const i=new s.Component(this.element,"div",["garage-item-field"]),o=new s.Component(i.element,"div",["garage-item-control-block"]);this.startEngineBtn=new a.WEBUIButton(o.element,["btn-small"],"A"),this.startEngineBtn.onClickButton=()=>{t.id&&this.startCarEngine(t.id)},this.stopEngineBtn=new a.WEBUIButton(o.element,["btn-small"],"B",!0),this.stopEngineBtn.onClickButton=()=>{t.id&&this.stopCarEngine(t.id)},this.imageCar=new s.Component(i.element,"div",["car-image"]),this.imageCar.element.innerHTML=(0,r.carImage)(t.color),new s.Component(i.element,"img",["finish-flag"]).element.setAttribute("src","./assets/red-flag.svg")}updateBtns(e=!1){this.startEngineBtn.setDisabled(e),this.stopEngineBtn.setDisabled(!e)}stopCarEngine(e){var t;return i(this,void 0,void 0,(function*(){200===(yield(0,o.stopEngineCar)(e)).status&&(this.updateBtns(),this.speed=0,null===(t=this.carAnimation)||void 0===t||t.cancel(),this.imageCar.element.style.left="100px")}))}startCarEngine(e){return i(this,void 0,void 0,(function*(){const t=yield(0,o.startEngineCar)(e);if(200===t.status){this.updateBtns(!0);const{result:e}=t;this.animationCar(e.distance/e.velocity),yield this.switchToDriveMode(e)}}))}animationCar(e){this.carAnimation=this.imageCar.element.animate([{left:"100px"},{left:"calc(100% - 100px)"}],{duration:e,easing:"ease-in-out"}),this.carAnimation.play(),this.carAnimation.onfinish=()=>{this.imageCar.element.style.left="calc(100% - 100px)"}}switchToDriveMode(e){return i(this,void 0,void 0,(function*(){const t=yield(0,o.switchToDriveMode)(this.car.id);return new Promise((n=>{var i;500===t&&(null===(i=this.carAnimation)||void 0===i||i.pause()),200===t&&(this.speed=Math.floor(e.distance/e.velocity),n())}))}))}disableAllButtons(){this.startEngineBtn.setDisabled(!0),this.stopEngineBtn.setDisabled(!1)}}t.GarageItem=l},805:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OptionsBtns=void 0;const i=n(425),s=n(329);class a extends i.Component{constructor(e){super(e,"div",["garage-buttons"]),this.startRaceAllCars=()=>{},this.resetAllCars=()=>{},this.generateCars=()=>{},this.btnRace=new s.WEBUIButton(this.element,["garage-race-button"],"race"),this.btnRace.onClickButton=()=>this.startRaceAllCars(),this.btnReset=new s.WEBUIButton(this.element,["garage-reset-button"],"reset",!0),this.btnReset.onClickButton=()=>this.resetAllCars(),this.btnGenerateCars=new s.WEBUIButton(this.element,["garage-generate-button"],"generate cars"),this.btnGenerateCars.onClickButton=()=>this.generateCars()}}t.OptionsBtns=a},481:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OptionsInputs=void 0;const i=n(425),s=n(329),a=n(661);class r extends i.Component{constructor(e,t,n=[]){super(e,"div",["garage-inputs"]),this.state={name:"",color:"#000000"},this.createCar=()=>{};const r=new i.Component(this.element,"div",["garage-input"]);this.web_input=new a.WEBUIInput(r.element,"text",["garage-input"]),this.web_input.getInputValue=e=>this.updateState("name",e),this.web_inputColor=new a.WEBUIInput(this.element,"color",["garage-color-input"],"#000000"),this.web_inputColor.getInputValue=e=>this.updateState("color",e),this.btn=new s.WEBUIButton(this.element,["garage-button"],t),this.btn.element.setAttribute("disabled",""),this.btn.onClickButton=()=>{this.createCar(this.state),this.resetSettings()},this.element.classList.add(...n)}updateState(e,t){const n=t.target;this.state[e]=n.value,this.btn.element.toggleAttribute("disabled",""===this.state.name)}resetSettings(){this.state={name:"",color:"#000000"},this.updateInputs()}updateInputs(){this.web_input.element.value=this.state.name,this.web_inputColor.element.value=this.state.color,this.btn.element.setAttribute("disabled","")}}t.OptionsInputs=r},0:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GarageOptions=void 0,n(78);const i=n(425),s=n(805),a=n(481);class r extends i.Component{constructor(e){super(e,"div",["garage-options"]),this.startRaceAllCars=()=>{},this.resetAllCars=()=>{},this.generateCars=()=>{},this.createCar=()=>{},this.updateCar=()=>{},new a.OptionsInputs(this.element,"create",["garage-create-inputs"]).createCar=e=>this.createCar(e),this.updateInputs=new a.OptionsInputs(this.element,"update",["garage-update-inputs"]),this.updateInputs.createCar=()=>{this.updateCar(this.updateInputs.state)},this.optionsButtons=new s.OptionsBtns(this.element),this.optionsButtons.startRaceAllCars=()=>this.startRaceAllCars(),this.optionsButtons.resetAllCars=()=>this.resetAllCars(),this.optionsButtons.generateCars=()=>this.generateCars()}updateState(e){this.updateInputs.state=e,this.updateInputs.updateInputs()}}t.GarageOptions=r},977:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0,n(803);const i=n(425);class s extends i.Component{constructor(e){super(e,"div",["header"]),this.nvItems=[],this.linkToGarage=new i.Component(this.element,"a",["nav__item"],"Garage"),this.linkToWinners=new i.Component(this.element,"a",["nav__item"],"Winners"),this.linkToGarage.element.setAttribute("href","#/"),this.linkToWinners.element.setAttribute("href","#/winners"),this.nvItems=[this.linkToGarage,this.linkToWinners],window.addEventListener("hashchange",(()=>this.updateActive(this.nvItems))),window.addEventListener("load",(()=>this.updateActive(this.nvItems)))}updateActive(e){this.nvItems=e.map((e=>(e.element.classList.remove("nav__item--active"),e.element.getAttribute("href")===window.location.hash&&e.element.classList.add("nav__item--active"),e)))}}t.Header=s},265:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WinnerPopup=void 0,n(262);const i=n(425);class s extends i.Component{constructor(e,t){super(e,"div",["popup-winner"]);const n=new i.Component(this.element,"h2",["popup-winner-title"]);n.element.style.color=`${t.color}`,n.element.innerHTML=`\n      Winner\n      <span>${t.name}</span>\n      in\n      <span>${t.speed}</span>\n      sec...\n    `}}t.WinnerPopup=s},41:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.carImage=void 0,n(362),t.carImage=function(e){return`\n  <svg class="car-image-svg" version="1.2" baseProfile="tiny-ps" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 569" width="1280" height="569">\n    <title>1918554-svg</title>\n    <style>\n      tspan { white-space:pre }\n    </style>\n    <g id="Layer">\n      <path id="Layer" fill-rule="evenodd" style="fill: ${e}" d="M382.2 112.9L386.9 115.9L405.7 114.5C535.1 105 645.1 108.8 694.9 124.5C720.8 132.7 798.8 173.4 880.1 221.1L903.7 235L926.6 235C979.6 235.1 1079.7 245.3 1132 256.1C1185.5 267.1 1226.6 278.7 1248.8 289.1C1266.8 297.5 1272.5 303 1277.1 316.5C1279.3 323 1279.5 324.9 1279.4 342.5C1279.3 361.6 1278.4 372.3 1275.3 392.2C1273.7 402.4 1273.7 403.3 1275.5 411.2C1276.6 415.8 1277.4 423.1 1277.5 427.5C1277.5 434.5 1277.1 436.1 1274.7 440.2C1269.6 448.9 1262.3 452.6 1244.3 455.4C1235.1 456.8 1197.2 459.6 1196.5 458.8C1196.3 458.6 1196.9 455.3 1197.7 451.5C1199.7 442.6 1200 416.9 1198.2 408.5C1191.9 379 1176.1 355.5 1152.2 339.8C1112.6 314 1067.8 314.9 1027.9 342.2C999.7 361.4 984.8 386.1 982 418.1C980.9 431.7 983.2 455.5 986.5 464.2C987.2 465.9 972.5 466 687 466L386.8 466L387.6 457.8C389.2 442.4 388.5 416.5 386.3 405.9C379.5 374.1 358.1 347.6 326.5 331.7C277.7 307.3 214.1 326.7 186 374.6C176.4 391.1 172.1 407.5 171.4 430.5L170.9 446.5L167.7 446.3C155.9 445.6 69.4 437.4 59 435.9C40.2 433.3 25.2 425.7 23.5 417.8C22.6 413.8 17.6 408.4 10.3 403.5C7.1 401.4 4.4 399.5 4.2 399.4C3 398.8 0.9 380.4 1.4 375C2.4 365.3 2.4 364.9 1.1 359.1C-1.5 346.7 0.9 323 5.9 312.4C8.6 306.6 14 301 16.9 301C17.9 301 18 298.9 17.5 292.2C16 273 16.4 265.1 19.4 255.2C22.4 245.2 22.3 241.1 18.9 237.5C17.1 235.5 17.1 235.3 21.8 227.5L26.5 219.5L38 219.3C63.8 218.8 89.9 216.2 100 213C101.9 212.4 110.4 211.5 118.9 211C138.8 209.7 144.7 208.3 161 200.6C186.5 188.5 243.9 164.9 321.3 134.5C332.2 130.2 341.5 126 341.9 125.1C342.4 124.2 343.1 121 343.5 118C344.6 108.7 345.3 107.7 352.5 105.9C359.9 104 373 107.1 382.2 112.9ZM542.4 132.5L523 132.4C501 132.4 496.6 132.5 472 134C390.1 139.1 347.1 148.2 310.2 168C296.6 175.4 292.2 178.8 291 182.8C288.2 192.9 290.7 206.3 296.9 215.4C307.8 231.3 318.5 235.3 354.2 236.9C392.4 238.7 558.9 243.4 559.6 242.7C559.9 242.4 555.8 211.1 552.5 188.5C549.5 167.5 545 141.5 543.7 137L542.4 132.5ZM583 134L578.3 134L595.8 188L613.4 242L794.2 242L793.3 237.7C791.8 230.1 792.4 222.7 794.8 218.8C797.4 214.7 804 211 808.8 211C810.6 211 812 210.7 812 210.2C811.9 209 788.1 191.9 774 183.1C747.1 166.2 723 155.1 702 149.9C680.3 144.6 646.9 139.6 608.6 136C597.1 134.9 585.5 134 583 134Z" />\n      <path id="Layer" fill-rule="evenodd" style="fill: ${e}" d="M306.2 328.9C343.9 338.7 372.8 367.9 382.2 405.7C385.2 417.6 385.4 440.7 382.6 452.4C370.9 502.4 325.7 536.6 275 533.7C230 531.1 191.6 499.6 180.3 456C177.2 444.2 176.2 426.7 177.9 415C184.3 371.5 218.6 335.7 261.7 327.5C272.6 325.5 295.7 326.2 306.2 328.9ZM267.5 357.4C252.7 360.2 240.1 367 229 378C217.8 389.2 211.4 401.4 208.4 416.6C197.9 471.7 252.2 518 305.3 499.4C328.4 491.4 346.8 471.2 352.6 447.5C355 438 354.9 420.7 352.6 412C348.5 396.9 339.1 382.1 327.5 372.7C320.4 367 307.9 360.6 299.5 358.5C291 356.3 275.9 355.8 267.5 357.4Z" />\n      <path id="Layer" style="fill: ${e}" d="M291.8 383.2C292 392.2 292.5 399.9 293 400.4C294.7 402.1 303.8 394.6 313.1 383.8L318.2 378.1L313.4 375C308.2 371.7 300.3 368.5 294.9 367.5L291.5 366.9L291.8 383.2Z" />\n      <path id="Layer" style="fill: ${e}" d="M259.1 370C252.9 372.2 242.4 378.2 242.7 379.4C243 380.7 266.4 401 267.6 401C268.3 401 269.1 400.3 269.4 399.4C270.2 397.4 270.2 386.7 269.3 376.2C268.6 366.7 268.5 366.6 259.1 370Z" />\n      <path id="Layer" style="fill: ${e}" d="M320.9 404.5C315.2 410.9 310.4 416.8 310.2 417.6C309.6 420.1 314.8 421.1 325.9 420.5C331.7 420.2 338 419.7 339.8 419.4C343.1 418.9 343.2 418.8 342.5 415.2C341.8 410.8 336.1 398.5 333.3 395.1L331.4 392.7L320.9 404.5Z" />\n      <path id="Layer" style="fill: ${e}" d="M226 399.1C222.9 403.5 219.2 412.4 218.3 417.7L217.7 421L233.2 421C249.7 421 253.3 420.1 251.3 416.6C250 414.2 230.9 395 229.9 395C229.4 395 227.7 396.8 226 399.1Z" />\n      <path id="Layer" style="fill: ${e}" d="M278.6 404.6C275 408.1 278.6 413.3 283 411C285.6 409.6 285.6 405.4 283.1 404C280.6 402.7 280.4 402.7 278.6 404.6Z" />\n      <path id="Layer" style="fill: ${e}" d="M275.1 421.4C269.4 424.6 268.3 432.5 272.9 437.1C277.2 441.3 283 441.4 287.2 437.2C291.4 433 291.3 427.2 287.1 422.9C283.8 419.7 279.3 419.1 275.1 421.4Z" />\n      <path id="Layer" style="fill: ${e}" d="M256 426.4C254.1 428.7 255.2 432.5 257.8 432.8C262.2 433.5 264.5 429.6 261.4 426.6C259.5 424.6 257.6 424.6 256 426.4Z" />\n      <path id="Layer" style="fill: ${e}" d="M300.2 427.6C297.5 429.5 297.4 431.2 299.9 433.4C302.4 435.7 306 434 306 430.5C306 427.2 303 425.6 300.2 427.6Z" />\n      <path id="Layer" style="fill: ${e}" d="M224.5 440.7C216.8 441.3 216.9 441.2 218.6 447.2C220.2 452.7 224.7 461.8 227.8 465.8L229.6 468.1L239.9 455.9C245.6 449.2 250.3 443 250.4 442.1C250.5 440.7 249 440.5 240 440.4C234.2 440.4 227.3 440.5 224.5 440.7Z" />\n      <path id="Layer" style="fill: ${e}" d="M316.5 441.9C312.1 442.3 310.4 442.9 310.2 444.1C309.9 445.7 331.2 467 333 467C335.2 467 341.6 452.9 343.5 444.2L344.2 441L333.3 441.2C327.4 441.3 319.8 441.6 316.5 441.9Z" />\n      <path id="Layer" style="fill: ${e}" d="M277.6 448.6C275.7 450.4 275.7 450.6 277 453.1C277.6 454.2 279.1 455 280.5 455C282.5 455 285 452.6 285 450.6C285 449.6 281.8 447 280.5 447C279.8 447 278.4 447.7 277.6 448.6Z" />\n      <path id="Layer" style="fill: ${e}" d="M258.9 465.7C250.3 474.7 245 480.8 245 481.9C245 484.4 262.9 492 268.6 492L271.3 492L270.6 477.7C269.7 461.1 269.3 459 267.1 459C266.2 459 262.5 462 258.9 465.7Z" />\n      <path id="Layer" style="fill: ${e}" d="M293.6 459.9C293 460.9 291.2 476.7 290.7 485.7C290.4 491.7 290.5 492 292.6 492C300.5 492 318.8 485.2 317.4 482.8C316.9 482.1 312.1 476.4 306.6 470.2C297.3 459.7 294.9 457.8 293.6 459.9Z" />\n      <path id="Layer" fill-rule="evenodd" style="fill: ${e}" d="M1177.4 372.3C1211.7 424 1193.4 494.1 1138.2 522.3C1112.5 535.4 1085.4 537.5 1058 528.4C1045.7 524.3 1038.1 520.2 1026.9 511.8C988.2 482.6 975.7 427.1 998 383C1012.6 354.1 1040.5 333.3 1072.3 327.5C1112.3 320.2 1154.9 338.4 1177.4 372.3ZM1068.9 359.5C1036.5 370 1015.3 400.5 1017.3 434C1018.9 460.8 1034.6 484.4 1058.5 496C1104.4 518.2 1157.3 489.4 1164 438.6C1168.7 403.3 1145.6 368.8 1110.8 359C1097.8 355.3 1081.1 355.5 1068.9 359.5Z" />\n      <path id="Layer" style="fill: ${e}" d="M1101.7 383.2C1102 392.2 1102.6 399.9 1103.1 400.4C1104.4 401.8 1108.4 398.6 1118.6 388.2L1128.1 378.5L1125.8 376.7C1120.8 372.7 1106.9 367 1102.3 367C1101.3 367 1101.2 370.3 1101.7 383.2Z" />\n      <path id="Layer" style="fill: ${e}" d="M1070.5 369.4C1065.5 371 1057.2 375.2 1054.2 377.6L1051.9 379.5L1064 390.2C1070.7 396.2 1076.8 401 1077.5 401C1079.8 401 1080.2 397.1 1079.5 382.4C1078.7 366.2 1079.1 366.7 1070.5 369.4Z" />\n      <path id="Layer" style="fill: ${e}" d="M1130.7 404.6C1124.8 411.1 1120 417.2 1120 418.2C1120 419.3 1121.1 420 1123.8 420.4C1128.2 421.1 1151.6 419.7 1152.7 418.7C1154.2 417.1 1147.6 400.4 1143.3 395.1L1141.4 392.7L1130.7 404.6Z" />\n      <path id="Layer" style="fill: ${e}" d="M1036.2 398.7C1032.3 404.9 1029.2 412.1 1028.4 417.1L1027.7 421L1042.9 421C1051.5 421 1059 420.5 1060.1 420C1061.8 419 1061.9 418.7 1060.6 416.2C1059.8 414.7 1054.7 409.1 1049.2 403.7L1039.3 393.8L1036.2 398.7Z" />\n      <path id="Layer" style="fill: ${e}" d="M1088.8 404.1C1086.4 405.5 1086.5 409.7 1089 411C1093.4 413.3 1097 408.1 1093.4 404.6C1091.6 402.7 1091.1 402.7 1088.8 404.1Z" />\n      <path id="Layer" style="fill: ${e}" d="M1085.1 421.3C1080.2 424.2 1078.5 431.4 1081.6 435.9C1082.5 437.2 1084.8 438.8 1086.6 439.6C1089.5 440.8 1090.5 440.8 1093.4 439.6C1103.3 435.5 1101.9 421.6 1091.5 420.4C1089.1 420.1 1086.5 420.5 1085.1 421.3Z" />\n      <path id="Layer" style="fill: ${e}" d="M1066 426.4C1064.1 428.7 1065.2 432.5 1067.8 432.8C1072.2 433.5 1074.5 429.6 1071.4 426.6C1069.5 424.6 1067.6 424.6 1066 426.4Z" />\n      <path id="Layer" style="fill: ${e}" d="M1109.6 427.6C1108.7 428.4 1108 429.8 1108 430.5C1108 431.8 1110.6 435 1111.6 435C1113.6 435 1116 432.5 1116 430.5C1116 429.1 1115.2 427.6 1114.1 427C1111.6 425.7 1111.4 425.7 1109.6 427.6Z" />\n      <path id="Layer" style="fill: ${e}" d="M1033.5 440.9C1027.5 441.5 1027.5 441.5 1027.8 444.5C1028.7 451.4 1038.2 469.3 1040 467.4C1045.7 461.3 1061 442.4 1060.7 441.6C1060.3 440.4 1043.1 439.9 1033.5 440.9Z" />\n      <path id="Layer" style="fill: ${e}" d="M1126.7 441.7C1119.9 442.2 1118.8 443.6 1122 447.7C1124.3 450.8 1142 467 1143 467C1143.3 467 1145 464.6 1146.7 461.7C1149.6 456.9 1151.9 450.6 1153.4 443.7L1154 441L1143.3 441.2C1137.3 441.3 1129.9 441.5 1126.7 441.7Z" />\n      <path id="Layer" style="fill: ${e}" d="M1087 449C1085.4 452.1 1087.4 455.2 1090.8 454.8C1092.9 454.6 1093.6 453.9 1093.8 451.6C1094.3 447.1 1089.1 445.1 1087 449Z" />\n      <path id="Layer" style="fill: ${e}" d="M1065.1 469.7C1059.5 475.6 1055 481 1055 481.7C1055 484.5 1072.2 492 1078.7 492L1081.3 492L1080.6 479.7C1079.6 461.8 1079.1 459 1077 459C1076 459 1070.7 463.8 1065.1 469.7Z" />\n      <path id="Layer" style="fill: ${e}" d="M1103.5 459.9C1102.8 461.1 1101.2 474.3 1100.6 484.2C1100.2 491.9 1100.2 492 1102.5 492C1107 492 1115.5 489.8 1121.8 486.9L1128.2 484L1126.3 481.7C1119.8 473.5 1106.5 459 1105.4 459C1104.7 459 1103.9 459.4 1103.5 459.9Z" />\n    </g>\n  </svg>`}},272:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.randomRGBColor=void 0,t.randomRGBColor=(e=0,t=255)=>{const n=()=>e+Math.floor(Math.random()*(t-e+1));return`rgb(${n()},${n()},${n()})`}},259:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Pagination=void 0;const i=n(425),s=n(329);n(191);class a extends i.Component{constructor(e){super(e,"div",["pagination"]),this.updatePage=()=>{},this.page=1,this.title=new i.Component(this.element,"h3",["pagination__title"],`Page #${this.page}`),this.prevButton=new s.WEBUIButton(this.element,["btn-prev"],"Prev",!0),this.prevButton.onClickButton=()=>this.switchPage("prev"),this.nextButton=new s.WEBUIButton(this.element,["btn-next"],"Next"),this.nextButton.onClickButton=()=>this.switchPage("next")}updateNextButton(e,t,n){e>t/n?this.nextButton.setDisabled(!0):this.nextButton.setDisabled(!1)}updatePrevButton(){1===this.page?this.prevButton.setDisabled(!0):this.prevButton.setDisabled(!1)}switchPage(e){"prev"===e&&this.page>1&&this.page--,"next"===e&&this.page++,this.title.element.innerHTML=`Page #${this.page}`,this.updatePage(this.page),this.updatePrevButton()}}t.Pagination=a},329:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WEBUIButton=void 0,n(957);const i=n(425);class s extends i.Component{constructor(e,t=[],n,i=!1){super(e,"button",["btn"],n),this.onClickButton=()=>{},this.element.classList.add(...t),this.element.addEventListener("click",(()=>this.onClickButton())),i&&this.setDisabled(!0)}setDisabled(e=!1){this.element.toggleAttribute("disabled",e)}removeDisabled(){this.element.removeAttribute("disabled")}}t.WEBUIButton=s},661:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WEBUIInput=void 0;const i=n(425);n(905);class s extends i.Component{constructor(e,t,n=[],i){super(e,"input",["ui-input"]),this.getInputValue=()=>{},this.element.setAttribute("type",t),this.element.classList.add(...n),i&&this.element.setAttribute("value",i),this.element.addEventListener("input",(e=>this.getInputValue(e)))}}t.WEBUIInput=s},874:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(s,a){function r(e){try{l(i.next(e))}catch(e){a(e)}}function o(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.WinnersContainer=void 0;const s=n(425),a=n(27),r=n(724),o=n(259);n(500);class l extends s.Component{constructor(e){super(e,"div",["winners-container"]),this.updatePage=()=>{},this.sortWinners=()=>{},this.winnersList=[],this.title=new s.Component(this.element,"h2",["winners-title"]),this.pagination=new o.Pagination(this.element),this.pagination.updatePage=e=>this.updatePage(e);const t=new s.Component(this.element,"div",["winner-item","winner-items-title"]);t.element.innerHTML='\n      <div class="winner-item-id">№</div>\n      <div class="winner-item-image">Car Image</div>\n      <div class="winner-item-name">Name</div>\n      <div class="winner-item-wins">\n        <span>Total Wins</span>\n        <img class="winner-item-arrow" src="./assets/arrow.svg" />\n      </div>\n      <div class="winner-item-time">\n        <span>Time (sec)</span>\n        <img class="winner-item-arrow" src="./assets/arrow.svg" />\n      </div>\n    ';const n=t.element.querySelector(".winner-item-wins");null==n||n.addEventListener("click",(()=>this.handleSortWinners(n,"wins")));const i=t.element.querySelector(".winner-item-time");null==i||i.addEventListener("click",(()=>this.handleSortWinners(i,"time"))),this.container=new s.Component(this.element,"div")}handleSortWinners(e,t){e.classList.toggle("winner-item-active"),e.classList.contains("winner-item-active")?this.sortWinners(t,"ASC"):this.sortWinners(t,"DESC")}updateTitle(e){this.title.element.innerHTML=`Winners - (${e} cars)`}getCar(e){return i(this,void 0,void 0,(function*(){return yield(0,r.getCar)(e)}))}addWinners(e){this.container.element.innerHTML="",this.winnersList=e.result;let t=1;e.totalCount&&this.updateTitle(e.totalCount),this.winnersList.forEach((e=>i(this,void 0,void 0,(function*(){const n=yield this.getCar(e.id);if(n){const i={id:t++,name:n.name,color:n.color,wins:e.wins,time:e.time};new a.WinnersItem(this.container.element,i)}}))))}}t.WinnersContainer=l},27:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WinnersItem=void 0;const i=n(425),s=n(41);class a extends i.Component{constructor(e,t){super(e,"div",["winners-item"]);const{id:n,name:a,color:r,wins:o,time:l}=t;new i.Component(this.element,"div",["winner-item"]).element.innerHTML=`\n      <div class="winner-item-id">${n}</div>\n      <div class="winner-item-image">${(0,s.carImage)(r)}</div>\n      <div class="winner-item-name">${a}</div>\n      <div class="winner-item-wins">${o}</div>\n      <div class="winner-item-time">${l}</div>\n    `}}t.WinnersItem=a},275:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.cars=void 0,t.cars={mark:["mazda","volvo","bmw","mercedes-benz","ferrari","honda","nissan","porsche","toyota","tesla"],model:["rx","m22","x7","s63","488","civic","r34","570","499","model x"]}},535:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(s,a){function r(e){try{l(i.next(e))}catch(e){a(e)}}function o(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Garage=void 0;const s=n(91),a=n(425),r=n(0),o=n(724),l=n(272),d=n(275),h=n(265);class c extends a.Component{constructor(e){super(e,"div",["garage"]),this.page=1,this.getAllCars(this.page),this.garageOptions=new r.GarageOptions(this.element),this.garageOptions.createCar=e=>i(this,void 0,void 0,(function*(){yield this.createCar(e),yield this.getAllCars(this.page)})),this.garageOptions.updateCar=e=>this.updateCar(e),this.garageOptions.startRaceAllCars=()=>this.startRaceAllCars(),this.garageOptions.resetAllCars=()=>this.resetAllCars(),this.garageOptions.generateCars=()=>this.generateRandomCars(),this.garageContainer=new s.GarageContainer(this.element),this.garageContainer.removeCar=e=>this.removeCar(e),this.garageContainer.updateCar=e=>this.getCar(e),this.garageContainer.updatePage=e=>{this.page=e,this.getAllCars(e)}}getAllCars(e){return i(this,void 0,void 0,(function*(){const t=yield(0,o.getAllCars)(e);if(t){const e=t.cars,n=t.count;this.garageContainer.addItems(e,n),this.garageContainer.pagination.updateNextButton(this.page,+n,7)}}))}getCar(e){return i(this,void 0,void 0,(function*(){const t=yield(0,o.getCar)(e);t&&this.garageOptions.updateState(t)}))}updateCar(e){return i(this,void 0,void 0,(function*(){yield(0,o.updateCar)(e),yield this.getAllCars(this.page)}))}createCar(e){return i(this,void 0,void 0,(function*(){yield(0,o.createCar)(e)}))}removeCar(e){return i(this,void 0,void 0,(function*(){yield(0,o.deleteCar)(e),yield(0,o.deleteWinner)(e),yield this.getAllCars(this.page)}))}generateRandomCars(){return i(this,void 0,void 0,(function*(){this.garageOptions.optionsButtons.btnRace.setDisabled(!0),this.garageOptions.optionsButtons.btnGenerateCars.setDisabled(!0);const{mark:e,model:t}=d.cars;for(let n=0;n<=100;n-=-1){const n=`${e[Math.floor(Math.random()*e.length)]} ${t[Math.floor(Math.random()*t.length)]}`;yield this.createCar({name:n,color:(0,l.randomRGBColor)()})}yield this.getAllCars(this.page),this.garageOptions.optionsButtons.btnRace.setDisabled(!1),this.garageOptions.optionsButtons.btnGenerateCars.setDisabled(!1)}))}startRaceAllCars(){return i(this,void 0,void 0,(function*(){this.garageOptions.optionsButtons.btnRace.setDisabled(!0),this.garageOptions.optionsButtons.btnGenerateCars.setDisabled(!0);const e=this.garageContainer.cars.map((e=>i(this,void 0,void 0,(function*(){return yield e.startCarEngine(e.car.id),e.disableAllButtons(),e})))),t=yield Promise.race(e),n={id:t.car.id,name:t.car.name,color:t.car.color,speed:+(t.speed/1e3).toFixed(2),wins:1};this.winnerPopup=new h.WinnerPopup(this.element,n),this.garageOptions.optionsButtons.btnReset.removeDisabled(),setTimeout((()=>{var e;return null===(e=this.winnerPopup)||void 0===e?void 0:e.destroy()}),3e3),yield this.createOrUpdateWinner(n)}))}createOrUpdateWinner(e){return i(this,void 0,void 0,(function*(){const t=yield(0,o.getWinner)(e.id);200===t.status?(t.result.wins++,e.wins=t.result.wins,yield this.updateWinner(e)):yield this.createWinner(e)}))}createWinner(e){return i(this,void 0,void 0,(function*(){const t={id:e.id,wins:1,time:e.speed};yield(0,o.createWinner)(t)}))}updateWinner(e){return i(this,void 0,void 0,(function*(){const t={id:e.id,wins:e.wins,time:e.speed};yield(0,o.updateWinner)(t)}))}resetAllCars(){var e;this.garageOptions.optionsButtons.btnReset.setDisabled(!0);const t=null===(e=this.garageContainer.cars)||void 0===e?void 0:e.map((e=>i(this,void 0,void 0,(function*(){yield e.stopCarEngine(e.car.id)}))));Promise.all(t).then((()=>{this.garageOptions.optionsButtons.btnRace.removeDisabled(),this.garageOptions.optionsButtons.btnGenerateCars.removeDisabled()}))}}t.Garage=c},654:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(s,a){function r(e){try{l(i.next(e))}catch(e){a(e)}}function o(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Winners=void 0;const s=n(425),a=n(874),r=n(724);class o extends s.Component{constructor(e){super(e,"div",["winners"]),this.winnersContainer=new a.WinnersContainer(this.element),this.page=1,this.getAllWinners(),this.winnersContainer.updatePage=e=>{this.page=e,this.getAllWinners(this.page)},this.winnersContainer.sortWinners=(e,t)=>{this.getAllWinners(this.page,e,t)}}getAllWinners(e=0,t="id",n="ASC"){return i(this,void 0,void 0,(function*(){const i=yield(0,r.getAllWinners)(e,t,n),s=+i.totalCount;this.winnersContainer.pagination.updateNextButton(this.page,s,10),this.winnersContainer.addWinners(i)}))}}t.Winners=o},440:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Router=void 0;const i=n(535),s=n(654);t.Router=class{constructor(e){this.rootElement=e,this.garagePage=new i.Garage(this.rootElement),this.routes=[{name:"/",component:()=>{this.rootElement.append(this.garagePage.element)}},{name:"/winners",component:()=>{this.winnersPage=new s.Winners(this.rootElement),this.rootElement.append(this.winnersPage.element)}}],this.defaultRoute={name:"Default router",component:()=>{this.rootElement.innerHTML="Default Page"}}}updateRouter(){this.rootElement.innerHTML="";const e=window.location.hash.slice(1);(this.routes.find((t=>t.name===e))||this.defaultRoute).component()}initRouter(){""===window.location.hash&&(window.location.hash="#/"),window.onpopstate=()=>this.updateRouter(),this.updateRouter()}}},425:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0,t.Component=class{constructor(e,t="div",n=[],i=""){this.element=document.createElement(t),this.element.classList.add(...n),this.element.textContent=i,e&&e.append(this.element)}destroy(){this.element.remove()}}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,n),a.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n(850);const e=n(752);window.addEventListener("DOMContentLoaded",(()=>{const t=document.body;new e.App(t).init()}))})()})();