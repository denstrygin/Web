import * as UserActionCreaters from './user'
import * as TodoActionCreaters from './todo'

export default {
    ...TodoActionCreaters,
    ...UserActionCreaters,
}