(this.webpackJsonprecipies=this.webpackJsonprecipies||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(26),n=a.n(s),r=a(17),i=(a(70),a(113)),l=(a(71),a(115)),o=a.p+"static/media/Logo.7109306e.png",j=a(114),d=a(112),u=a(2);var b=function(e){var t=Object(c.useState)(""),a=Object(r.a)(t,2),s=a[0],n=a[1];return Object(u.jsx)("div",{children:Object(u.jsxs)(j.a,{inline:!0,className:"searchBar",onSubmit:function(t){t.preventDefault(),e.onSubmit(s)},children:[Object(u.jsx)("input",{value:s,type:"text",onChange:function(e){n(e.target.value)},placeholder:"Search",className:"mr-sm-2"}),Object(u.jsx)(d.a,{style:{color:"white",background:"rgb(65, 65, 65)"},variant:"default",className:"button header",children:"Search"})]})})},h=a(10);var m=function(){var e=Object(h.b)(),t=e.loginWithRedirect;return!e.isAuthenticated&&Object(u.jsx)(d.a,{style:{color:"white",background:"rgb(65, 65, 65)"},variant:"default",className:"button button-container header",onClick:t,children:"Login"})},O=a(6),x=function(){var e=Object(h.b)(),t=e.logout,a=e.isAuthenticated,c=Object(O.f)();return a&&Object(u.jsxs)("div",{className:"button-container",children:[Object(u.jsx)(d.a,{style:{color:"white",background:"rgb(65, 65, 65)"},className:"button header",onClick:function(){c.push("/profile"),window.location.reload(!1)},variant:"default",children:"Profile"}),Object(u.jsx)(d.a,{style:{color:"white",background:"rgb(65, 65, 65)",marginLeft:"5%"},variant:"default",className:"button header",onClick:t,children:"Logout"})]})},v=a(13),f=a.n(v),g=a(43);var p=function(e){var t=e.ingArray,a=e.measuresArray;if(t&&a){for(var c=[],s=1;s<t.length;s++){if(null===t[s])return;c.push("".concat(a[s],"- ").concat(t[s]))}return c?Object(u.jsxs)("div",{className:"ingredients-container",children:[Object(u.jsx)("h2",{children:"Ingredients"}),Object(u.jsx)(g.a,{className:"ingredients",children:c.map((function(e,t){return Object(u.jsx)(g.a.Item,{children:e},t)}))})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Ingredients"}),Object(u.jsx)("p",{children:"Apparently there are no ingredients."})]})}return Object(u.jsx)("div",{className:"prog",children:Object(u.jsx)(i.a,{})})};var N=function(e){var t=e.instr;if(t){var a=t.split(".");return Object(u.jsxs)("div",{className:"instructions-container",children:[Object(u.jsx)("h2",{children:"Instructions"}),Object(u.jsx)("ol",{className:"instructions",children:a.map((function(e,t){return e.length>4&&Object(u.jsxs)("li",{children:[e,"."]},t)}))})]})}return Object(u.jsx)("div",{children:" "})};var y=function(e){var t=e.id,a=e.thumbnail,c=e.name,s=Object(h.b)(),n=s.user;return s.isAuthenticated?Object(u.jsxs)("div",{className:"add-fav",children:[Object(u.jsx)("h2",{children:"Add me to favs"}),Object(u.jsx)(d.a,{style:{color:"white",background:"rgb(65, 65, 65)"},className:"button fav",variant:"default",onClick:function(){f()({url:"/api/save",method:"POST",data:{usrId:n.sub,recipieId:t,recipieThumb:a,recipieName:c}}).then((function(){return console.log("data sent to server")})).catch((function(){return console.log("EERRROOOORR")})),window.alert("Recipie added to favourites")},children:"Add me"})]}):Object(u.jsx)("div",{children:"Log in to add me"})};var w=function(){var e=Object(O.g)().id,t=Object(c.useState)({}),a=Object(r.a)(t,2),s=a[0],n=a[1],i=[],l=[];return Object(c.useEffect)((function(){f.a.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(e)).then((function(e){for(var t=e.data.meals[0],a=1;a<20;a++){var c="strIngredient".concat(a),r="strMeasure".concat(a);""!==t[c]&&(i.push(t[c]),l.push(t[r]))}var o={name:t.strMeal,id:t.idMeal,category:t.strCategory,thumbnail:t.strMealThumb,tags:t.strTags,instructions:t.strInstructions,ingredients:i,measures:l,youtubeLink:t.strYoutube,source:t.strSource};n(o),console.log(s.ingredients)}))}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"recipie-name",children:s.name}),Object(u.jsxs)("div",{className:"in",children:[Object(u.jsx)("img",{className:"insideImg",src:s.thumbnail,alt:s.name}),Object(u.jsxs)("div",{className:"leftbar",children:[Object(u.jsx)(p,{ingArray:s.ingredients,measuresArray:s.measures}),Object(u.jsx)(y,{id:s.id,thumbnail:s.thumbnail,name:s.name})]})]}),Object(u.jsx)(N,{instr:s.instructions})]})},k=a(116);var C=function(e){var t=e.id,a=e.thumbnail,c=e.name,s=e.tags,n=e.category,r=Object(O.f)();return Object(u.jsxs)(k.a,{style:{width:"18rem"},className:"recipieCard",onClick:function(){return r.push("/recipie/".concat(t))},children:[Object(u.jsx)(k.a.Img,{variant:"top",src:a}),Object(u.jsxs)(k.a.Body,{children:[Object(u.jsx)(k.a.Title,{className:"titleCard",children:c}),Object(u.jsx)(k.a.Text,{children:s?Object(u.jsxs)("span",{children:["Category: ",n," ",Object(u.jsx)("br",{})," Tags: ",s]}):Object(u.jsxs)("span",{children:["Category: ",n," ",Object(u.jsx)("br",{})," Tags: None"]})})]})]})};var I=function(){var e=Object(c.useState)({}),t=Object(r.a)(e,2),a=t[0],s=t[1],n=[],i=[];return Object(c.useEffect)((function(){f.a.get("https://www.themealdb.com/api/json/v1/1/random.php").then((function(e){for(var t=e.data.meals[0],a=1;a<20;a++){var c="strIngredient".concat(a),r="strMeasure".concat(a);""!==t[c]&&(n.push(t[c]),i.push(t[r]))}var l={name:t.strMeal,id:t.idMeal,category:t.strCategory,thumbnail:t.strMealThumb,tags:t.strTags,instructions:t.strInstructions,ingredients:n,measures:i,youtubeLink:t.strYoutube,source:t.strSource};s(l)}))}),[]),Object(u.jsx)(C,{id:a.id,thumbnail:a.thumbnail,name:a.name,tags:a.tags,category:a.category})};var T=function(e){var t=e.objRecipies;return null===t||""===t?Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{className:"random-title",children:"Random meals"}),Object(u.jsxs)("div",{className:"randomMeals",children:[Object(u.jsx)(I,{}),Object(u.jsx)(I,{}),Object(u.jsx)(I,{}),Object(u.jsx)(I,{})]})]}):Object(u.jsx)("div",{className:"searchedMeals",children:t.map((function(e){return Object(u.jsx)(C,{id:e.idMeal,thumbnail:e.strMealThumb,name:e.strMeal,tags:e.strTags,category:e.strCategory})}))})},A=a(44),M=a(61),S=a(62),E=a(28);var R=function(e){var t=Object(h.b)().user,a=Object(O.f)();return Object(u.jsx)("div",{className:"favMeals",children:e.data.map((function(e,c){return Object(u.jsxs)(k.a,{style:{width:"18rem"},className:"recipieCard fav",children:[Object(u.jsx)(k.a.Img,{variant:"top",src:e.recipieThumb,onClick:function(){return a.push("/recipie/".concat(e.recipieId))}}),Object(u.jsxs)(k.a.Body,{className:"card-body",children:[Object(u.jsx)(k.a.Title,{className:"titleCard",children:e.recipieName}),Object(u.jsx)(d.a,{style:{color:"white",background:"rgb(65, 65, 65)"},variant:"default",className:"fav-button",onClick:function(){return a=e.recipieId,f()({url:"/api/delete/".concat(a,"/").concat(t.sub),method:"DELETE"}),void window.location.reload(!1);var a},children:"Eliminate"})]})]},c)}))})};var L=function(){var e=Object(h.b)(),t=e.user,a=e.isAuthenticated,s=Object(c.useState)([]),n=Object(r.a)(s,2),i=n[0],l=n[1];return Object(c.useEffect)((function(){f.a.get("/api").then((function(e){var a=e.data.filter((function(e){return e.usrId===t.sub}));l(a)})).catch((function(){console.log("Error getting your favs")}))}),[]),a?Object(u.jsxs)("div",{children:[t.email_verified?Object(u.jsx)(A.a,{className:"verified",variant:"success",children:"Account Verified."}):Object(u.jsx)(A.a,{className:"not-verified",variant:"danger",children:"Account not Verified, check your inbox."}),Object(u.jsx)(M.a,{className:"profile-container",children:Object(u.jsxs)(S.a,{children:[Object(u.jsx)(E.a,{sm:4,className:"col1",children:Object(u.jsx)("img",{className:"profile-img",src:t.picture,alt:t.name})}),Object(u.jsxs)(E.a,{className:"col2",sm:7,children:[Object(u.jsx)("h2",{className:"profile-nickname",children:t.nickname}),Object(u.jsxs)("p",{className:"profile-name",children:["Name: ",t.name]}),Object(u.jsxs)("p",{className:"profile-email",children:["Email: ",t.email]})]})]})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{className:"fav-title",children:"Your Favorite Recipies"}),Object(u.jsx)(R,{data:i})]})]}):Object(u.jsx)("div",{children:"You must login to be able to see your profile"})},B=a(21);var D=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(O.f)();return Object(h.b)().isLoading?Object(u.jsx)("div",{className:"prog",children:Object(u.jsx)(i.a,{})}):Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)(l.a,{className:"color-nav",variant:"light",children:[Object(u.jsx)(l.a.Brand,{href:"/",children:Object(u.jsx)("img",{className:"imgNav",src:o,alt:"The Food Hub"})}),Object(u.jsx)(b,{onSubmit:function(e){isNaN(e)?f.a.get("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(e)).then((function(e){s(e.data.meals)})):n.push("/recipie/".concat(e))}}),Object(u.jsx)(m,{}),Object(u.jsx)(x,{})]}),Object(u.jsx)(B.a,{children:Object(u.jsxs)(O.c,{children:[Object(u.jsx)(O.a,{exact:!0,path:"/",children:Object(u.jsx)(T,{objRecipies:a})}),Object(u.jsx)(O.a,{path:"/recipie/:id",children:Object(u.jsx)(w,{})}),Object(u.jsx)(O.a,{path:"/profile",children:Object(u.jsx)(L,{})})]})})]})};n.a.render(Object(u.jsx)(h.a,{domain:"dev-h-ny8ot3.us.auth0.com",clientId:"CCGeGk7W0mAvLxIbaDsRDjWM4Sjpzghl",redirectUri:window.location.origin,children:Object(u.jsx)(B.a,{children:Object(u.jsx)(D,{})})}),document.getElementById("root"))},70:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.985c6146.chunk.js.map