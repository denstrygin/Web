namespace NForm{
    export type TForm = 'inline' | 'block'
    export type TFormState = 'active' | 'disabled'
    
    export interface IFormInfo {
        type: TForm
        state: TFormState
    }
}