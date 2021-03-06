import { Action, createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import { crear } from "./todo.actions";




export const estadoInicial: Todo[] = [
    new Todo('salvar al mundo'),
    new Todo('salvar a thanos'),
    new Todo('salvar a iroman'),
    new Todo('salvar a nadie')
];


const _todoReducer = createReducer(estadoInicial,
    on (crear, (state, {texto}) => [...state, new Todo ( texto ) ] ),

    );

    export function todoReducer (state: Todo[]| undefined, action: Action){

        return _todoReducer(state, action);
    }