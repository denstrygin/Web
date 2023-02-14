"use strict";
/// <reference path = "form-namespace.ts"/>
var NForm;
(function (NForm) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = 'inline';
            this.state = 'disabled';
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state
            };
        }
    }
    NForm.form1 = new MyForm('den@gmail.com');
    console.log(NForm.form1);
})(NForm || (NForm = {}));
