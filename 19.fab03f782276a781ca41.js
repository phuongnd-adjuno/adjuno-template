(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{fcPI:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),c=(t("TtU4"),function(){return function(){this.Suppliers=[]}}()),u=function(){function n(n){this.ref=n}return n.prototype.ngOnInit=function(){this.editedModel=new c,this.mockDataSupplier=[{Id:0,Value:"supplier 1"},{Id:1,Value:"supplier 2"},{Id:2,Value:"supplier 3"},{Id:3,Value:"supplier 4"},{Id:4,Value:"supplier 5"},{Id:5,Value:"supplier 6"},{Id:6,Value:"supplier 7"}]},n.prototype.cancel=function(){this.ref.close()},n.prototype.save=function(){this.ref.close()},n.prototype.selectAllSupplier=function(){this.editedModel.Suppliers=this.editedModel.Suppliers&&this.editedModel.Suppliers.length==this.mockDataSupplier.length?[]:this.mockDataSupplier.map(function(n){return n.Id})},n}(),o=function(){return function(){}}(),a=t("9AJC"),i=t("pMnS"),r=t("4bAE"),d=t("mc3f"),s=t("Ip0R"),p=[{FirstName:"Mark",SurName:"Henderson",Company:"Adjuno",Department:"Adjuno HK",JobTitle:"Head of Technology",PhoneNumber:"+983468512",Email:"mark.henderson@adjuno.com",Country:"UK"},{FirstName:"Andy",SurName:"Hawkins",Company:"Adjuno",Department:"Adjuno UK",JobTitle:"Product Director and Chair of the Technical Authority Committee",PhoneNumber:"+983468512",Email:"andy.hawkins@adjuno.com",Country:"UK"},{FirstName:"Gareth",SurName:"King",Company:"Adjuno",Department:"Adjuno UK",JobTitle:"Product Sprint Manager and member of the Technical Authority Committee",PhoneNumber:"+983468512",Email:"gareth.king@adjuno.com",Country:"UK"},{FirstName:"Nik",SurName:"Rivers",Company:"Adjuno",Department:"Adjuno UK",JobTitle:"Lead Product Developer, Technical Authority Committee",PhoneNumber:"+983468512",Email:"nik.rivers@adjuno.com",Country:"UK"},{FirstName:"Richard",SurName:"Breese",Company:"Adjuno",Department:"Adjuno UK",JobTitle:"Lead Delivery Team Developer, Technical Authority Committee",PhoneNumber:"+983468512",Email:"richard.breese@adjuno.com",Country:"UK"},{FirstName:"Phuong",SurName:"Nguyen",Company:"Groove Technology",Department:"Adjuno VN",JobTitle:"Development Manager",PhoneNumber:"+983468512",Email:"phuong.nguyen@adjuno.com",Country:"Viet Nam"}],g=function(){function n(n){this.dialogService=n,this.contacts=p}return n.prototype.ngOnInit=function(){},n.prototype.onAddNewContactClicked=function(){this.dialogService.open(u,{closeOnBackdropClick:!1})},n}(),m=t("OHTX"),C=e["\u0275crt"]({encapsulation:0,styles:[[".contact-content[_ngcontent-%COMP%]   .contact-box-wrapper[_ngcontent-%COMP%]{width:100%}.contact-content[_ngcontent-%COMP%]   .add-contact-button[_ngcontent-%COMP%]{background-color:#8dc63f;border-radius:5px;color:#fff;cursor:pointer;display:inline-block;font-size:15px;height:50px;position:relative;width:230px}.contact-content[_ngcontent-%COMP%]   .add-contact-button[_ngcontent-%COMP%]   .add-icon[_ngcontent-%COMP%]{margin-top:10px;margin-left:10px;width:30px}.contact-content[_ngcontent-%COMP%]   .add-contact-button[_ngcontent-%COMP%]   .btn-content[_ngcontent-%COMP%]{display:inline-block;font-size:16px;margin-top:15px;margin-left:10px;position:absolute;text-transform:uppercase}.contact-content[_ngcontent-%COMP%]   .contact-list[_ngcontent-%COMP%]{margin-top:5px}.contact-content[_ngcontent-%COMP%]   .contact-list[_ngcontent-%COMP%]   .contact-card-list[_ngcontent-%COMP%]   .bg-contact[_ngcontent-%COMP%]{width:80%;position:absolute}.contact-content[_ngcontent-%COMP%]   .contact-list[_ngcontent-%COMP%]   .contact-card-list[_ngcontent-%COMP%]   .card-section[_ngcontent-%COMP%]{margin-top:35px}.contact-content[_ngcontent-%COMP%]   .contact-list[_ngcontent-%COMP%]   .contact-card-list[_ngcontent-%COMP%]   .card-section[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]{color:#333;font-size:16px;margin-top:35px}.contact-content[_ngcontent-%COMP%]   .contact-list[_ngcontent-%COMP%]   .contact-card-list[_ngcontent-%COMP%]   .card-section[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]{text-align:center}.contact-content[_ngcontent-%COMP%]   .contact-list[_ngcontent-%COMP%]   .contact-card-list[_ngcontent-%COMP%]   .card-section[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{width:120%}.contact-content[_ngcontent-%COMP%]   .contact-list[_ngcontent-%COMP%]   .contact-card-list[_ngcontent-%COMP%]   .card-section[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   .contact-description[_ngcontent-%COMP%]{color:#666;font-size:16px;line-height:0}.contact-content[_ngcontent-%COMP%]   .contact-list[_ngcontent-%COMP%]   .contact-card-list[_ngcontent-%COMP%]   .card-section[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%]{color:#333;font-size:24px;font-weight:700;line-height:22px}.contact-content[_ngcontent-%COMP%]   .contact-list[_ngcontent-%COMP%]   .contact-card-list[_ngcontent-%COMP%]   .card-section[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]{color:#aac1c9}.contact-content[_ngcontent-%COMP%]   .contact-list[_ngcontent-%COMP%]   .contact-card-list[_ngcontent-%COMP%]   .contact-user-icon[_ngcontent-%COMP%]{margin-top:7%;width:100%;position:absolute}.contact-content[_ngcontent-%COMP%]   .contact-list[_ngcontent-%COMP%]   .contact-card-list[_ngcontent-%COMP%]   .eclipse-dot[_ngcontent-%COMP%]{color:#555;margin-top:15px;margin-right:10px;text-align:right}.contact-content[_ngcontent-%COMP%]   .contact-list[_ngcontent-%COMP%]   .contact-card-list[_ngcontent-%COMP%]   .eclipse-dot[_ngcontent-%COMP%]::after{content:'\\2807';font-size:30px}.contact-content[_ngcontent-%COMP%]   .contact-list[_ngcontent-%COMP%]   .contact-card-list[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]{height:220px}.contact-content[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]{color:#333;font-size:32px;font-weight:700;line-height:30px}"]],data:{}});function _(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,32,"div",[["class","col-12 col-md-12 col-lg-6"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,31,"div",[["class","contact-card-list"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,30,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,r.f,r.b)),e["\u0275did"](3,49152,null,0,d.b,[],null,null),(n()(),e["\u0275eld"](4,0,null,2,28,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275eld"](5,0,null,null,2,"div",[["class","col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"]],null,null,null,null,null)),(n()(),e["\u0275eld"](6,0,null,null,0,"img",[["class","bg-contact"],["src","../../../assets/icons/contacts/bg-contact.svg"]],null,null,null,null,null)),(n()(),e["\u0275eld"](7,0,null,null,0,"img",[["class","contact-user-icon"],["src","../../../assets/icons/contacts/contact-user-icon.svg"]],null,null,null,null,null)),(n()(),e["\u0275eld"](8,0,null,null,22,"div",[["class","col-7 col-sm-7 col-md-8 col-lg-7 col-xl-7"]],null,null,null,null,null)),(n()(),e["\u0275eld"](9,0,null,null,21,"div",[["class","card-section"]],null,null,null,null,null)),(n()(),e["\u0275eld"](10,0,null,null,4,"div",[["class","card-title"]],null,null,null,null,null)),(n()(),e["\u0275eld"](11,0,null,null,1,"h1",[["class","contact-title"]],null,null,null,null,null)),(n()(),e["\u0275ted"](12,null,[""," ",""])),(n()(),e["\u0275eld"](13,0,null,null,1,"div",[["class","contact-description"]],null,null,null,null,null)),(n()(),e["\u0275ted"](14,null,[""," / ",""])),(n()(),e["\u0275eld"](15,0,null,null,15,"div",[["class","card-content"]],null,null,null,null,null)),(n()(),e["\u0275eld"](16,0,null,null,14,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275eld"](17,0,null,null,6,"div",[["class","col-1 col-sm-1 col-lg-1"]],null,null,null,null,null)),(n()(),e["\u0275eld"](18,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e["\u0275eld"](19,0,null,null,0,"i",[["class","fas fa-phone-alt contact-info"]],null,null,null,null,null)),(n()(),e["\u0275eld"](20,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e["\u0275eld"](21,0,null,null,0,"i",[["class","fas fa-envelope contact-info"]],null,null,null,null,null)),(n()(),e["\u0275eld"](22,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e["\u0275eld"](23,0,null,null,0,"i",[["class","fas fa-map-marker-alt contact-info"]],null,null,null,null,null)),(n()(),e["\u0275eld"](24,0,null,null,6,"div",[["class","col-8 col-sm-8 col-lg-8"]],null,null,null,null,null)),(n()(),e["\u0275eld"](25,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e["\u0275ted"](26,null,["",""])),(n()(),e["\u0275eld"](27,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e["\u0275ted"](28,null,["",""])),(n()(),e["\u0275eld"](29,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e["\u0275ted"](30,null,["",""])),(n()(),e["\u0275eld"](31,0,null,null,1,"div",[["class","col-2 col-sm-2 col-md-1 col-lg-2 col-xl-2"]],null,null,null,null,null)),(n()(),e["\u0275eld"](32,0,null,null,0,"div",[["class","eclipse-dot"]],null,null,null,null,null))],null,function(n,l){n(l,2,1,[e["\u0275nov"](l,3).xxsmall,e["\u0275nov"](l,3).xsmall,e["\u0275nov"](l,3).small,e["\u0275nov"](l,3).medium,e["\u0275nov"](l,3).large,e["\u0275nov"](l,3).xlarge,e["\u0275nov"](l,3).xxlarge,e["\u0275nov"](l,3).active,e["\u0275nov"](l,3).disabled,e["\u0275nov"](l,3).primary,e["\u0275nov"](l,3).info,e["\u0275nov"](l,3).success,e["\u0275nov"](l,3).warning,e["\u0275nov"](l,3).danger,e["\u0275nov"](l,3).hasAccent,e["\u0275nov"](l,3).primaryAccent,e["\u0275nov"](l,3).infoAccent,e["\u0275nov"](l,3).successAccent,e["\u0275nov"](l,3).warningAccent,e["\u0275nov"](l,3).dangerAccent,e["\u0275nov"](l,3).activeAccent,e["\u0275nov"](l,3).disabledAccent]),n(l,12,0,l.context.$implicit.FirstName,l.context.$implicit.SurName),n(l,14,0,l.context.$implicit.Company,l.context.$implicit.Department),n(l,26,0,l.context.$implicit.PhoneNumber),n(l,28,0,l.context.$implicit.Email),n(l,30,0,l.context.$implicit.Country)})}function M(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,16,"div",[["class","contact-content "]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,15,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,0,"div",[["class","col-1 col-sm-1 col-md-1 col-xl-2"]],null,null,null,null,null)),(n()(),e["\u0275eld"](3,0,null,null,12,"div",[["class","col-10 col-sm-10 col-md-10 col-xl-8"]],null,null,null,null,null)),(n()(),e["\u0275eld"](4,0,null,null,6,"div",[["class","d-flex justify-content-between"]],null,null,null,null,null)),(n()(),e["\u0275eld"](5,0,null,null,1,"h1",[["class","header-title"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,[" Contacts "])),(n()(),e["\u0275eld"](7,0,null,null,3,"a",[["class","add-contact-button"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onAddNewContactClicked()&&e),e},null,null)),(n()(),e["\u0275eld"](8,0,null,null,0,"img",[["class","add-icon"],["src","../../../assets/icons/contacts/add-new.svg"]],null,null,null,null,null)),(n()(),e["\u0275eld"](9,0,null,null,1,"div",[["class","btn-content"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,[" Add New Contact "])),(n()(),e["\u0275eld"](11,0,null,null,4,"div",[["class","d-flex justify-content-center"]],null,null,null,null,null)),(n()(),e["\u0275eld"](12,0,null,null,3,"div",[["class","contact-list"]],null,null,null,null,null)),(n()(),e["\u0275eld"](13,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,_)),e["\u0275did"](15,278528,null,0,s.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275eld"](16,0,null,null,0,"div",[["class","col-1 col-sm-1 col-md-1 col-xl-2"]],null,null,null,null,null))],function(n,l){n(l,15,0,l.component.contacts)},null)}function P(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"ngx-contacts",[],null,null,null,M,C)),e["\u0275did"](1,114688,null,0,g,[m.a],null,null)],function(n,l){n(l,1,0)},null)}var O=e["\u0275ccf"]("ngx-contacts",g,P,{},{},[]),f=t("cMIS"),b=t("j8n1"),h=e["\u0275crt"]({encapsulation:0,styles:[["nb-card[_ngcontent-%COMP%]{border-radius:12px;height:808px;width:771px}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-header[_ngcontent-%COMP%]   .contact-content-title[_ngcontent-%COMP%]{margin-top:20px}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-header[_ngcontent-%COMP%]   .contact-content-title[_ngcontent-%COMP%]   .input-surname[_ngcontent-%COMP%]{width:170%}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-header[_ngcontent-%COMP%]   .contact-content-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{line-height:60px;margin-bottom:10px;text-align:center}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-header[_ngcontent-%COMP%]   .contact-content-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#242a32;font-weight:700}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-header[_ngcontent-%COMP%]   .contact-icon-close[_ngcontent-%COMP%]{cursor:pointer}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-header[_ngcontent-%COMP%]   .contact-user-icon[_ngcontent-%COMP%]{margin-top:32%;margin-left:20%;position:absolute;width:80%}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-header[_ngcontent-%COMP%]   .pop-up-bg-contact[_ngcontent-%COMP%]{position:absolute;width:85%}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-body[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]{line-height:35px;color:#666;font-size:16px}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-body[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .input-firstname[_ngcontent-%COMP%]{margin-left:46%}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-body[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:0}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-publish-section[_ngcontent-%COMP%]{margin-top:29px;margin-bottom:40px}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-publish-section[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%]{font-size:16px;font-weight:600;text-transform:uppercase}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-publish-section[_ngcontent-%COMP%]   .publish-to-group[_ngcontent-%COMP%]{display:inline-block;padding-right:0}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-publish-section[_ngcontent-%COMP%]   .publish-to-group[_ngcontent-%COMP%]   .select-all[_ngcontent-%COMP%]{background-color:#e7edf1}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-publish-section[_ngcontent-%COMP%]   .publish-to-group[_ngcontent-%COMP%]   .supplier-group[_ngcontent-%COMP%]   .list-supplier[_ngcontent-%COMP%]   .viewport[_ngcontent-%COMP%]{width:606px;height:150px;overflow-y:scroll}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-publish-section[_ngcontent-%COMP%]   .publish-to-group[_ngcontent-%COMP%]   .supplier-group[_ngcontent-%COMP%]   .supplier-input[_ngcontent-%COMP%]{height:38px;width:100%;max-width:606px;padding-top:8px;padding-left:10px}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-publish-section[_ngcontent-%COMP%]   .publish-to-group[_ngcontent-%COMP%]   .supplier-group[_ngcontent-%COMP%]   .supplier-input[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:block;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:'Nunito Sans';font-size:16px;line-height:25px;padding-left:45px}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-publish-section[_ngcontent-%COMP%]   .publish-to-group[_ngcontent-%COMP%]   .supplier-group[_ngcontent-%COMP%]   .supplier-input[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .supplier-title[_ngcontent-%COMP%]{font-weight:600}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-publish-section[_ngcontent-%COMP%]   .publish-to-group[_ngcontent-%COMP%]   .supplier-group[_ngcontent-%COMP%]   .supplier-input[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:absolute;opacity:0;cursor:pointer;height:0;width:0}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-publish-section[_ngcontent-%COMP%]   .publish-to-group[_ngcontent-%COMP%]   .supplier-group[_ngcontent-%COMP%]   .supplier-input[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:24px;width:24px;background-color:#fff;border:1px solid #e1e1e1}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-publish-section[_ngcontent-%COMP%]   .publish-to-group[_ngcontent-%COMP%]   .supplier-group[_ngcontent-%COMP%]   .supplier-input[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%] ~ .checkmark[_ngcontent-%COMP%]{background-color:#ccc}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-publish-section[_ngcontent-%COMP%]   .publish-to-group[_ngcontent-%COMP%]   .supplier-group[_ngcontent-%COMP%]   .supplier-input[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]{background-color:#8ac53f}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-publish-section[_ngcontent-%COMP%]   .publish-to-group[_ngcontent-%COMP%]   .supplier-group[_ngcontent-%COMP%]   .supplier-input[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]::after{content:'';position:absolute;display:none}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-publish-section[_ngcontent-%COMP%]   .publish-to-group[_ngcontent-%COMP%]   .supplier-group[_ngcontent-%COMP%]   .supplier-input[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]::after{display:block}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-publish-section[_ngcontent-%COMP%]   .publish-to-group[_ngcontent-%COMP%]   .supplier-group[_ngcontent-%COMP%]   .supplier-input[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]::after{left:9px;top:4px;width:7px;height:11px;border:solid #fff;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-footer[_ngcontent-%COMP%]   .btn-section[_ngcontent-%COMP%]{display:inline-block;vertical-align:top}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-footer[_ngcontent-%COMP%]   .cancel-button[_ngcontent-%COMP%]{height:54px;width:100%;max-width:320px;display:inline-block;text-align:center;background-color:#a5a5a5;color:#fff;font-family:'Nunito Sans';font-size:18px;font-weight:600;line-height:50px;cursor:pointer;border-radius:2.5px}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-footer[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-footer[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{padding-left:0;padding-right:0}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-footer[_ngcontent-%COMP%]   .save-button[_ngcontent-%COMP%]{height:54px;width:100%;max-width:320px;display:inline-block;text-align:center;background-color:#8ac53f;color:#fff;font-family:'Nunito Sans';font-size:18px;font-weight:600;line-height:50px;right:0;cursor:pointer;border-radius:2.5px}@media screen and (max-width:767px){nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-footer[_ngcontent-%COMP%]   .btn-section[_ngcontent-%COMP%]{text-align:center}nb-card[_ngcontent-%COMP%]   .create-or-edit-contact-footer[_ngcontent-%COMP%]   .save-button[_ngcontent-%COMP%]{right:unset}}nb-card[_ngcontent-%COMP%]   label.required[_ngcontent-%COMP%]::after{color:#e32;content:' *';display:inline}"]],data:{}});function v(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","supplier-input"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,3,"label",[["class","container"]],null,null,null,null,null)),(n()(),e["\u0275ted"](2,null,[""," "])),(n()(),e["\u0275eld"](3,0,null,null,0,"input",[["type","checkbox"]],[[8,"checked",0]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onClickCheckboxSupplier(n.context.$implicit.Id)&&e),e},null,null)),(n()(),e["\u0275eld"](4,0,null,null,0,"span",[["class","checkmark"]],null,null,null,null,null))],null,function(n,l){var t=l.component;n(l,2,0,l.context.$implicit.Value),n(l,3,0,-1!=t.editedModel.Suppliers.indexOf(l.context.$implicit.Id))})}function x(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,77,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,r.f,r.b)),e["\u0275did"](1,49152,null,0,d.b,[],null,null),(n()(),e["\u0275eld"](2,0,null,2,11,"div",[["class","create-or-edit-contact-header"]],null,null,null,null,null)),(n()(),e["\u0275eld"](3,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275eld"](4,0,null,null,2,"div",[["class","col-3"]],null,null,null,null,null)),(n()(),e["\u0275eld"](5,0,null,null,0,"img",[["class","pop-up-bg-contact"],["src","../../../../assets/icons/contacts/pop-up-bg.svg"]],null,null,null,null,null)),(n()(),e["\u0275eld"](6,0,null,null,0,"img",[["class","contact-user-icon"],["src","../../../../assets/icons/contacts/contact-user-icon.svg"]],null,null,null,null,null)),(n()(),e["\u0275eld"](7,0,null,null,3,"div",[["class","col-6 contact-content-title"]],null,null,null,null,null)),(n()(),e["\u0275eld"](8,0,null,null,2,"div",[["class","d-flex justify-content-center title"]],null,null,null,null,null)),(n()(),e["\u0275eld"](9,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Add New Contact"])),(n()(),e["\u0275eld"](11,0,null,null,0,"div",[["class","col-1"]],null,null,null,null,null)),(n()(),e["\u0275eld"](12,0,null,null,1,"div",[["class","col-2"]],null,null,null,null,null)),(n()(),e["\u0275eld"](13,0,null,null,0,"img",[["class","contact-icon-close"],["src","../../../../assets/icons/contacts/close.svg"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.cancel()&&e),e},null,null)),(n()(),e["\u0275eld"](14,0,null,2,32,"div",[["class","create-or-edit-contact-body"]],null,null,null,null,null)),(n()(),e["\u0275eld"](15,0,null,null,31,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275eld"](16,0,null,null,0,"div",[["class","col-1"]],null,null,null,null,null)),(n()(),e["\u0275eld"](17,0,null,null,28,"div",[["class","col-10 contact-info"]],null,null,null,null,null)),(n()(),e["\u0275eld"](18,0,null,null,27,"div",[["class","d-flex justify-content-center"]],null,null,null,null,null)),(n()(),e["\u0275eld"](19,0,null,null,13,"div",[["class","col-sm-6"]],null,null,null,null,null)),(n()(),e["\u0275eld"](20,0,null,null,3,"div",[["class","input-firstname"]],null,null,null,null,null)),(n()(),e["\u0275eld"](21,0,null,null,1,"label",[["class","required"],["for","inputFirstName"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["First Name"])),(n()(),e["\u0275eld"](23,0,null,null,0,"input",[["class","form-control"],["id","inputTitleName"],["name","titleName"],["type","text"]],null,null,null,null,null)),(n()(),e["\u0275eld"](24,0,null,null,1,"label",[["class","required"],["for","inputCompany"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Company"])),(n()(),e["\u0275eld"](26,0,null,null,0,"input",[["class","form-control"],["id","inputTitleName"],["name","titleName"],["type","text"]],null,null,null,null,null)),(n()(),e["\u0275eld"](27,0,null,null,1,"label",[["for","inputJobTitle"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Job Title"])),(n()(),e["\u0275eld"](29,0,null,null,0,"input",[["class","form-control"],["id","inputTitleName"],["name","titleName"],["type","text"]],null,null,null,null,null)),(n()(),e["\u0275eld"](30,0,null,null,1,"label",[["class","required"],["for","inputPhoneNumber"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Phone Number"])),(n()(),e["\u0275eld"](32,0,null,null,0,"input",[["class","form-control"],["id","inputTitleName"],["name","titleName"],["type","text"]],null,null,null,null,null)),(n()(),e["\u0275eld"](33,0,null,null,12,"div",[["class","col-sm-6"]],null,null,null,null,null)),(n()(),e["\u0275eld"](34,0,null,null,1,"label",[["class","required"],["for","inputSurName"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Surname"])),(n()(),e["\u0275eld"](36,0,null,null,0,"input",[["class","form-control input-surname"],["id","inputTitleName"],["name","titleName"],["type","text"]],null,null,null,null,null)),(n()(),e["\u0275eld"](37,0,null,null,1,"label",[["for","inputDepartment"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Department"])),(n()(),e["\u0275eld"](39,0,null,null,0,"input",[["class","form-control"],["id","inputTitleName"],["name","titleName"],["type","text"]],null,null,null,null,null)),(n()(),e["\u0275eld"](40,0,null,null,1,"label",[["for","inputCountry"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Country"])),(n()(),e["\u0275eld"](42,0,null,null,0,"input",[["class","form-control"],["id","inputTitleName"],["name","titleName"],["type","text"]],null,null,null,null,null)),(n()(),e["\u0275eld"](43,0,null,null,1,"label",[["for","inputEmailAddress"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Email Address"])),(n()(),e["\u0275eld"](45,0,null,null,0,"input",[["class","form-control"],["id","inputTitleName"],["name","titleName"],["type","text"]],null,null,null,null,null)),(n()(),e["\u0275eld"](46,0,null,null,0,"div",[["class","col-1"]],null,null,null,null,null)),(n()(),e["\u0275eld"](47,0,null,2,18,"div",[["class","create-or-edit-contact-publish-section"]],null,null,null,null,null)),(n()(),e["\u0275eld"](48,0,null,null,17,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275eld"](49,0,null,null,0,"div",[["class","col-1"]],null,null,null,null,null)),(n()(),e["\u0275eld"](50,0,null,null,14,"div",[["class","col-10"]],null,null,null,null,null)),(n()(),e["\u0275eld"](51,0,null,null,13,"div",[["class","d-flex justify-content-center"]],null,null,null,null,null)),(n()(),e["\u0275eld"](52,0,null,null,12,"div",[["class","col-12 publish-to-group"]],null,null,null,null,null)),(n()(),e["\u0275eld"](53,0,null,null,1,"label",[["class","input-label required"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Publish to"])),(n()(),e["\u0275eld"](55,0,null,null,9,"div",[["class","supplier-group"]],null,null,null,null,null)),(n()(),e["\u0275eld"](56,0,null,null,4,"div",[["class","supplier-input select-all"]],null,null,null,null,null)),(n()(),e["\u0275eld"](57,0,null,null,3,"label",[["class","container supplier-title"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Supplier name "])),(n()(),e["\u0275eld"](59,0,null,null,0,"input",[["type","checkbox"]],[[8,"checked",0]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.selectAllSupplier()&&e),e},null,null)),(n()(),e["\u0275eld"](60,0,null,null,0,"span",[["class","checkmark"]],null,null,null,null,null)),(n()(),e["\u0275eld"](61,0,null,null,3,"div",[["class","list-supplier"]],null,null,null,null,null)),(n()(),e["\u0275eld"](62,0,null,null,2,"div",[["class","viewport"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,v)),e["\u0275did"](64,278528,null,0,s.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275eld"](65,0,null,null,0,"div",[["class","col-1"]],null,null,null,null,null)),(n()(),e["\u0275eld"](66,0,null,2,11,"div",[["class","create-or-edit-contact-footer"]],null,null,null,null,null)),(n()(),e["\u0275eld"](67,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275eld"](68,0,null,null,0,"div",[["class","col-1"]],null,null,null,null,null)),(n()(),e["\u0275eld"](69,0,null,null,7,"div",[["class","col-10"]],null,null,null,null,null)),(n()(),e["\u0275eld"](70,0,null,null,6,"div",[["class","d-flex justify-content-center"]],null,null,null,null,null)),(n()(),e["\u0275eld"](71,0,null,null,2,"div",[["class","col-md-6 btn-section"]],null,null,null,null,null)),(n()(),e["\u0275eld"](72,0,null,null,1,"a",[["class","cancel-button"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.cancel()&&e),e},null,null)),(n()(),e["\u0275ted"](-1,null,["Cancel"])),(n()(),e["\u0275eld"](74,0,null,null,2,"div",[["class","col-md-6 btn-section"]],null,null,null,null,null)),(n()(),e["\u0275eld"](75,0,null,null,1,"a",[["class","save-button"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.save()&&e),e},null,null)),(n()(),e["\u0275ted"](-1,null,["Save"])),(n()(),e["\u0275eld"](77,0,null,null,0,"div",[["class","col-1"]],null,null,null,null,null))],function(n,l){n(l,64,0,l.component.mockDataSupplier)},function(n,l){var t=l.component;n(l,0,1,[e["\u0275nov"](l,1).xxsmall,e["\u0275nov"](l,1).xsmall,e["\u0275nov"](l,1).small,e["\u0275nov"](l,1).medium,e["\u0275nov"](l,1).large,e["\u0275nov"](l,1).xlarge,e["\u0275nov"](l,1).xxlarge,e["\u0275nov"](l,1).active,e["\u0275nov"](l,1).disabled,e["\u0275nov"](l,1).primary,e["\u0275nov"](l,1).info,e["\u0275nov"](l,1).success,e["\u0275nov"](l,1).warning,e["\u0275nov"](l,1).danger,e["\u0275nov"](l,1).hasAccent,e["\u0275nov"](l,1).primaryAccent,e["\u0275nov"](l,1).infoAccent,e["\u0275nov"](l,1).successAccent,e["\u0275nov"](l,1).warningAccent,e["\u0275nov"](l,1).dangerAccent,e["\u0275nov"](l,1).activeAccent,e["\u0275nov"](l,1).disabledAccent]),n(l,59,0,t.editedModel.Suppliers.length==t.mockDataSupplier.length)})}function y(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"ngx-create-or-edit-contact",[],null,null,null,x,h)),e["\u0275did"](1,114688,null,0,u,[b.a],null,null)],function(n,l){n(l,1,0)},null)}var k=e["\u0275ccf"]("ngx-create-or-edit-contact",u,y,{},{},[]),w=t("gIcY"),N=t("4GxJ"),A=t("eDkP"),S=t("Fzqc"),j=t("ZlY8"),T=t("IK/E"),D=t("JODa"),F=t("wW3g"),I=t("ZYCi"),z=function(){return function(){}}(),E=t("P8+w"),J=t("Ku2q"),R=t("4c35"),U=t("dWZg"),K=t("qAlS"),V=t("hle7"),L=t("lOUe"),$=t("yHPJ"),q=t("SdSL");t.d(l,"ContactsModuleNgFactory",function(){return H});var H=e["\u0275cmf"](o,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,a.b,a.i,a.e,a.f,a.g,a.h,i.a,O,f.a,k]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,s.NgLocalization,s.NgLocaleLocalization,[e.LOCALE_ID,[2,s["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,w["\u0275angular_packages_forms_forms_j"],w["\u0275angular_packages_forms_forms_j"],[]),e["\u0275mpd"](4608,N.x,N.x,[e.ComponentFactoryResolver,e.Injector,N.Y,N.y]),e["\u0275mpd"](4608,A.d,A.d,[A.i,A.e,e.ComponentFactoryResolver,A.h,A.f,e.Injector,e.NgZone,s.DOCUMENT,S.b,[2,s.Location]]),e["\u0275mpd"](5120,A.j,A.k,[A.d]),e["\u0275mpd"](4608,m.a,m.a,[j.b,T.a,D.c,F.a,e.Injector,e.ComponentFactoryResolver]),e["\u0275mpd"](1073742336,s.CommonModule,s.CommonModule,[]),e["\u0275mpd"](1073742336,N.c,N.c,[]),e["\u0275mpd"](1073742336,N.g,N.g,[]),e["\u0275mpd"](1073742336,N.h,N.h,[]),e["\u0275mpd"](1073742336,N.l,N.l,[]),e["\u0275mpd"](1073742336,N.n,N.n,[]),e["\u0275mpd"](1073742336,w["\u0275angular_packages_forms_forms_bc"],w["\u0275angular_packages_forms_forms_bc"],[]),e["\u0275mpd"](1073742336,w.FormsModule,w.FormsModule,[]),e["\u0275mpd"](1073742336,N.s,N.s,[]),e["\u0275mpd"](1073742336,N.v,N.v,[]),e["\u0275mpd"](1073742336,N.z,N.z,[]),e["\u0275mpd"](1073742336,N.D,N.D,[]),e["\u0275mpd"](1073742336,N.E,N.E,[]),e["\u0275mpd"](1073742336,N.H,N.H,[]),e["\u0275mpd"](1073742336,N.L,N.L,[]),e["\u0275mpd"](1073742336,N.O,N.O,[]),e["\u0275mpd"](1073742336,N.S,N.S,[]),e["\u0275mpd"](1073742336,N.T,N.T,[]),e["\u0275mpd"](1073742336,N.U,N.U,[]),e["\u0275mpd"](1073742336,N.A,N.A,[]),e["\u0275mpd"](1073742336,I.p,I.p,[[2,I.v],[2,I.l]]),e["\u0275mpd"](1073742336,z,z,[]),e["\u0275mpd"](1073742336,E.a,E.a,[]),e["\u0275mpd"](1073742336,J.a,J.a,[]),e["\u0275mpd"](1073742336,S.a,S.a,[]),e["\u0275mpd"](1073742336,R.f,R.f,[]),e["\u0275mpd"](1073742336,U.b,U.b,[]),e["\u0275mpd"](1073742336,K.b,K.b,[]),e["\u0275mpd"](1073742336,A.g,A.g,[]),e["\u0275mpd"](1073742336,V.a,V.a,[]),e["\u0275mpd"](1073742336,L.a,L.a,[]),e["\u0275mpd"](1073742336,$.a,$.a,[]),e["\u0275mpd"](1073742336,q.a,q.a,[]),e["\u0275mpd"](1073742336,o,o,[]),e["\u0275mpd"](1024,I.j,function(){return[[{path:"",component:g}]]},[]),e["\u0275mpd"](256,T.a,{},[])])})}}]);