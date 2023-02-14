/// <reference path = "form-namespace.ts"/>

namespace NForm {
    class MyForm {
        private type: TForm = 'inline'
        private state: TFormState = 'disabled'
    
        constructor(public email: string) {
    
        }
    
        getInfo(): IFormInfo {
            return {
                type: this.type,
                state: this.state
            }
        }
    }
    
    export const form1 = new MyForm('den@gmail.com')
    console.log(NForm.form1)
}